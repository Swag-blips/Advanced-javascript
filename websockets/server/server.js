import express from "express";
import path from "path";
import expressWS from "express-ws";

const app = express();

expressWS(app);
app.use(express.static(path.join(import.meta.dirname, "../static")));

app.get("/:roomName", (req, res, next) => {
  res.sendFile(`${path.join(import.meta.dirname, "../chat.html")}`);
  return;
});

app.ws("/chat/:roomName", (ws, req, next) => {
  ws.send(Math.random());
  // try {

  // } catch (error) {

  // }
});
app.listen(3000, () => {
  console.log(`server is runnng on port 3000`);
});
