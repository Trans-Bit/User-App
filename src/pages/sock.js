import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");
function subscribeToTimer(cb) {
  socket.on("omw", data => cb(null, data));
  socket.emit("call", "send ambulance");
}
export { subscribeToTimer };
