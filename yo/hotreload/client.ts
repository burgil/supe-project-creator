import config from "./config";

function createWebSocket() {
  const ws = new WebSocket(`${config.secure ? 'wss' : 'ws'}://${config.address}:${config.hotreloadPort}`);

  ws.onmessage = (event) => {
    if (config.debug) console.log("Hot Reload - Incoming Reload!");
    if (event.data === 'reload') location.reload();
  };

  ws.onopen = () => {
    if (config.debug) console.log("Hot Reload - Connected!");
  };

  ws.onclose = () => {
    ws.onmessage = null;
    ws.onclose = null;
    ws.onerror = null;
    setTimeout(createWebSocket, config.reconnectDelay);
    if (config.debug) console.log(`Hot Reload - Reconnecting in ${config.reconnectDelay}ms...`);
  };

  ws.onerror = (error) => {
    if (config.debug) console.log('Hot Reload - Error:', error);
  };
}

createWebSocket();

if (config.autoFixCSS) {
  addEventListener('load', () => {
    for (const link of document.querySelectorAll('link')) {
      link.href = `${link.href}?t=${Date.now()}`;
    }
  });
}
