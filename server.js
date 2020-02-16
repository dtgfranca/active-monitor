const WebSocket = require('ws');
const iostat = require('iostat');
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
   // recebendo
   ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  // criando um broadcast
 wss.clients.forEach((cliente)=>{
     if( cliente.readyState ===WebSocket.OPEN){
      iostat().on('data', function(err, stats) {
         console.log(stats)
         cliente.send(JSON.stringify(stats));
         
       })
     }
  })
 
 
});