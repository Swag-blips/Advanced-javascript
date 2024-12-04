import express from "express";

const app = express();

app.use(express.static("static/"));

app.get(":/roomName", (req, res, next) => {
  res.sendFile(`${__dirname}/chat.html
        `);
});
