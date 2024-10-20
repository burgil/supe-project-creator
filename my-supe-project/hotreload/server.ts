import type Message from "ws"
import { WebSocketServer } from 'ws';
import { exec } from 'node:child_process';
import os from 'node:os';
import { Buffer } from "node:buffer";
import config from "./config";

const wss = new WebSocketServer({ port: config.hotreloadPort });
if (config.debug) console.log(`Hot Reload WebSocket server is running on ${config.secure ? 'wss' : 'ws'}://${config.address}:${config.hotreloadPort}`);

let connected = false;
wss.on('connection', (ws) => {
    connected = true;
    if (config.debug) console.log('Client connected');
    ws.on('message', (input: Message) => {
        let msg: string | Message = input;
        try { if (Buffer.isBuffer(msg)) msg = msg.toString(); } catch (_e) { 'pass' }
        if (typeof msg !== 'string') return;
        if (config.debug) console.log('Client sent a message:', msg);
        if (msg === 'reload') return triggerReload();
    });
});

export function triggerReload() {
    for (const client of wss.clients) {
        if (client.readyState === 1) {
            client.send('reload');
        }
    }
    if (config.debug) console.log('Reload signal sent to all clients');
}

const url = `${config.secure ? 'https' : 'http'}://${config.address}${config.port !== 80 ? `:${config.port}` : ''}`;
console.log(`Server is running: ${url}`);
if (config.browser) {
    setTimeout(() => {
        if (!connected) {
            try {
                const commands: { [key: string]: string } = {
                    darwin: `open ${url}`,
                    win32: `start ${url}`,
                    default: `xdg-open ${url}`
                };
                exec(commands[os.platform()] || commands.default);
                if (config.debug) console.log("Launched Browser!");
            } catch (error) {
                if (config.debug) console.error(`Error launching browser: ${error}`);
            }
        } else {
            if (config.debug) console.log("Browser was already running.");
            if (config.refresh.restart) triggerReload();
        }
    }, config.browserDelay);
}
