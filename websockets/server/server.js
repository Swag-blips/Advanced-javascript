import express from "express";
import path from "path";
const app = express();

app.use(express.static("static/"));

app.get("/:roomName", (req, res, next) => {
  res.sendFile(`${path.join("/chat.html")}`);
  return;
});

app.listen(3000, () => {
  console.log(`server is runnng on port 3000`);
});
