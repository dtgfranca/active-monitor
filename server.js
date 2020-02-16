const WebSocket = require('ws');
const iostat = require('iostat');
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
   // recebendo
   ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  // criando um broadcast

  /*iostat().on('data', function(err, stats) {
   console.log(stats)
   ws.send(JSON.stringify(stats));
   
 })*/
 
});

const broadcast = ()=>{
   wss.clients.forEach((cliente)=>{
      if( cliente.readyState ===WebSocket.OPEN){
       iostat().on('data', function(err, stats) {
          console.log(stats)
          cliente.send(JSON.stringify(stats));
          
        })
      }
   })
}
setInterval(broadcast, 3000)