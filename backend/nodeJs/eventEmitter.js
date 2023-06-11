const EventEmitter = require("events");
const event = new EventEmitter();

event.on("response", () => {
  console.log("first event fired");
});
event.on("response", () => {
  console.log("second event fired");
});
event.emit("response");
