import config from "./config";
import process from "node:process";

if (!config.hotreload) process.exit();

const ws = new WebSocket(`${config.secure ? 'wss' : 'ws'}://${config.address}:${config.hotreloadPort}`);
let waiting = true;

ws.onopen = (_event) => {
    if (config.debug) console.log("Sent reload signal to the hotreload server...")
    ws.send('reload');
    ws.close();
    waiting = false;
}

ws.onerror = (err) => {
    if (config.debug) console.error("Could not refresh browser:", err);
    waiting = false;
}

const timer = setInterval(() => {
    if (!waiting) clearInterval(timer);
}, 100);
