// open websocket connection from the browser to the server

const socket = new WebSocket("ws://localhost:3000/chat/people");

socket.onopen = (evt) => {
  console.log("WEB SOCKET OPENED");
};
socket.onmessage = (evt) => {
  console.log("Message from websocket", evt.data);
};

socket.onerror = (evt) => {
  console.log("something went wrong");
  console.log(evt);
};

socket.onclose = (evt) => {
  console.log("WEB SOCKET HAS BEEN CLOSED!!!");
};
