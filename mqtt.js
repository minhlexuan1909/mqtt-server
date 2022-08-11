const aedes = require("aedes")();
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
const PORT = process.env.PORT || 1883;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, function () {
  console.log("websocket server listening on port ", PORT);
});
