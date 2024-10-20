export default {
    port: 80,
    hotreloadPort: 49142,
    debug: false,
    httpLogs: false,
    browser: true,
    browserDelay: 1550,
    address: 'localhost',
    secure: false, // Requires SSL Configuration, More Info: bunx http-server --help
    hotreload: true,
    reconnectDelay: 500,
    minify: false,
    target: 'esnext',
    watchExtensions: 'ts,css,html', // Avoid using .js or add  --ignore public/hotreload.js and --ignore public/index.js (Or automate it)
    refresh: {
        changes: true,
        restart: false,
    },
    paths: {
        srcFolder: 'src',
        publicFolder: 'public',
        hotreloadFolder: 'hotreload',
        hotreload: {
            output: 'hotreload.js',
            client: 'client.ts',
            server: 'server.ts',
            refresh: 'refresh.ts',
        },
    },
    autoFixCSS: true
};
