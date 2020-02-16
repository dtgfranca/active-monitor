
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3001');

  
var blessed = require('blessed')
, contrib = require('blessed-contrib')
, screen = blessed.screen()
, 
 table = contrib.table(
    { keys: true
    , fg: 'white'
    , selectedFg: 'white'
    , selectedBg: 'black'
    , interactive: true
    , label: 'Procesos'
    , width: '100%'
    , height: '100%'
    , border: {type: "line", fg: "cyan"}
    , columnSpacing: 10 //in chars
    , columnWidth: [16, 12, 12] /*in chars*/ })

  //allow control the table with the keyboard
  table.focus()

  ws.on('message', (data)=>{
      let stats = JSON.parse(data);
    //  console.log(stats)
    table.setData({ headers: ['Usuário', 'Saúde', 'Sistema' ], data:[ 
                                                                    [
                                                                        stats.cpu['%user'], 
                                                                        stats.cpu['%nice'], 
                                                                        stats.cpu['%system']
                                                                    ]
                                                                ]});
                                                                screen.append(table)
  })



screen.key(['escape', 'q', 'C-c'], function(ch, key) {
return process.exit(0);
});

screen.render()