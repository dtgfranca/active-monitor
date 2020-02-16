const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3001');

ws.on('message', (data)=>{
   let infor= JSON.parse(data).cpu 
   console.log();
})
