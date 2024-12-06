// open websocket connection from the browser to the server



const socket = new WebSocket("ws://localhost:3000/chat/people");

socket.onmessage = (evt) => {
  console.log("Message from websocket", evt);
};
