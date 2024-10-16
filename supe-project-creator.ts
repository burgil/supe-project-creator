#!/usr/bin/env bun

/*
* MIT
* Enjoy
* Made by Burgil

bunx jsr publish
or
npx jsr publish
or
deno publish
*/

// @ts-ignore
import fs from 'node:fs';
// @ts-ignore
import path from 'node:path';
// @ts-ignore
import process from 'node:process';

// Variables:
let CleanProject = true;
let projectName = 'example-project';
const supeVersion = '1.0.3';
const supeVersionDate = '16/10/2024';

// Parse command line arguments
const argv = process.argv.slice(2);

// Loop through each argument
for (const arg of argv) {
    if (arg === '-v' || arg === '--version') {
        console.log(`Supe Project Creator - Version: ${supeVersion} - ${supeVersionDate}`);
        process.exit(0);
    } else if (arg === '-h' || arg === '--help') {
        console.log(`Supe Project Creator - Version: ${supeVersion} - ${supeVersionDate}`);
        console.log('\x1b[36m%s\x1b[0m', 'Usage:');
        console.log('  example-project [options]');
        console.log('');
        console.log('\x1b[36m%s\x1b[0m', 'Options:');
        console.log('  -v, --version        Display version number');
        console.log('  -h, --help           Display this help message');
        console.log('  -n, --name <string>  Set project name (default: example-project)');
        console.log('  -d, --demo          Demo project (default: false)');
        process.exit(0);
    } else if (arg === '-d' || arg === '--demo') {
        CleanProject = false;
    } else if (arg === '-n' || arg === '--name') {
        const nextArg = argv[argv.indexOf(arg) + 1];
        if (nextArg && !nextArg.startsWith('-')) {
            projectName = nextArg;
        } else {
            console.error('\x1b[31m%s\x1b[0m', 'Error: Missing project name');
            process.exit(1);
        }
    } else {
        if (arg.startsWith('-')) {
            console.error('\x1b[31m%s\x1b[0m', `Error: Unknown option ${arg}`);
            process.exit(1);
        }
    }
}

const outDir = projectName;
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
} else {
    console.error('\x1b[31m%s\x1b[0m', `Error: Folder already exist ${outDir}`);
    process.exit(1);
}
const hotreloadDir = path.join(outDir, 'hotreload');
if (!fs.existsSync(hotreloadDir)) fs.mkdirSync(hotreloadDir);
const publicDir = path.join(outDir, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
const srcDir = path.join(outDir, 'src');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);

fs.writeFileSync(path.join(outDir, 'package.json'), `{
    "name": "${projectName}",
    "module": "index.ts",
    "type": "module",
    "scripts": {
        "start": "bun hotreload/start.ts"
    },
    "devDependencies": {${CleanProject ? '' : '\n\t\t"@mediapipe/tasks-vision": "^0.10.17",'}
        "@types/bun": "latest"
    },
    "peerDependencies": {
        "typescript": "latest"
    }
}
`);

fs.writeFileSync(path.join(outDir, 'README.md'), `# ${projectName}

## This project was created using Supe Project Creator v${supeVersion}

Use bun to install and run the project. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

1. To install dependencies:

\`\`\`bash
bun install
\`\`\`

2. To run:

\`\`\`bash
bun start
\`\`\`

3. Everything else:

You have full control over all the source files of almost everything you see, There are no third party libraries, All the source code is right here in front of you.

`);

fs.writeFileSync(path.join(outDir, 'tsconfig.json'), `{
  "include": ["src/**/*", "hotreload/**/*"],
  "compilerOptions": {
    // Enable latest features
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noPropertyAccessFromIndexSignature": false
  }
}
`);

fs.writeFileSync(path.join(outDir, `${projectName}.code-workspace`), `{
	"folders": [
		{
			"name": "▪◾",
			"path": "."
		}
	],
	"settings": {
		"files.exclude": {
			"package.json": false,
			"tsconfig.json": false,
			"vs.code-workspace": false,
			// --
			"README.md": true,
			"bun.lockb": true,
			".gitignore": true,
			"node_modules": true,
			"tsconfig.tsbuildinfo": true,
		}
	}
}
`);

fs.writeFileSync(path.join(outDir, '.gitignore'), `# Based on https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore

# Logs

logs
_.log
npm-debug.log_
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Caches

.cache

# Diagnostic reports (https://nodejs.org/api/report.html)

report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json

# Runtime data

pids
_.pid
_.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover

lib-cov

# Coverage directory used by tools like istanbul

coverage
*.lcov

# nyc test coverage

.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)

.grunt

# Bower dependency directory (https://bower.io/)

bower_components

# node-waf configuration

.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)

build/Release

# Dependency directories

node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)

web_modules/

# TypeScript cache

*.tsbuildinfo

# Optional npm cache directory

.npm

# Optional eslint cache

.eslintcache

# Optional stylelint cache

.stylelintcache

# Microbundle cache

.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history

.node_repl_history

# Output of 'npm pack'

*.tgz

# Yarn Integrity file

.yarn-integrity

# dotenv environment variable files

.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)

.parcel-cache

# Next.js build output

.next
out

# Nuxt.js build / generate output

.nuxt
dist

# Gatsby files

# Comment in the public line in if your project uses Gatsby and not Next.js

# https://nextjs.org/blog/next-9-1#public-directory-support

# public

# vuepress build output

.vuepress/dist

# vuepress v2.x temp and cache directory

.temp

# Docusaurus cache and generated files

.docusaurus

# Serverless directories

.serverless/

# FuseBox cache

.fusebox/

# DynamoDB Local files

.dynamodb/

# TernJS port file

.tern-port

# Stores VSCode versions used for testing VSCode extensions

.vscode-test

# yarn v2

.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

# IntelliJ based IDEs
.idea

# Finder (MacOS) folder config
.DS_Store
`);

fs.writeFileSync(path.join(srcDir, 'index.ts'), CleanProject ? '' : `import { ObjectDetector, FilesetResolver, type ObjectDetectorResult } from "@mediapipe/tasks-vision"; // 19.4MB

let fileIndex = 0;
document.getElementById('fileInput')?.addEventListener('change', handleFileInput); // Keep first to allow uploads during loading times
const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"); // 9MB
const objectDetector = await ObjectDetector.createFromOptions(vision, {
    baseOptions: {
        // Source: "https://ai.google.dev/edge/mediapipe/solutions/vision/object_detector
        // modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/int8/latest/efficientdet_lite0.tflite", // 4.38MB
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/latest/efficientdet_lite0.tflite", // 6.91MB
        // modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float32/latest/efficientdet_lite0.tflite", // 13.1MB
        // modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/int8/latest/efficientdet_lite2.tflite", // 7.16MB
        // modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float16/latest/efficientdet_lite2.tflite", // 11.5MB
        // modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float32/latest/efficientdet_lite2.tflite", // 22.0MB
        // modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/ssd_mobilenet_v2/float16/latest/ssd_mobilenet_v2.tflite", // 5.64MB
        // modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/ssd_mobilenet_v2/float32/latest/ssd_mobilenet_v2.tflite", // 10.7MB
        delegate: "GPU",
    },
    scoreThreshold: 0.5,
    // runningMode: 'IMAGE' /* IMAGE: The mode for single image inputs. VIDEO: The mode for decoded frames of a video or on a livestream of input data, such as from a camera. */
});

const detectedImages: {
    [key: string]: {
        image: HTMLImageElement;
        magic: ObjectDetectorResult;
        objects: HTMLParagraphElement[];
        outlines: HTMLDivElement[];
    };
} = {};

// detect('image1');
// detect('image2');

function detect(imageName: string | HTMLElement) {
    if (!objectDetector) return setTimeout(() => detect(imageName), 1000);
    const image = (typeof imageName === 'string' ? document.getElementById(imageName) : imageName) as HTMLImageElement;
    if (!image) return console.error("Could not find image:", imageName);
    const imageContainer = document.createElement('rel');
    image.parentNode?.insertBefore(imageContainer, image);
    imageContainer.appendChild(image);
    image.style.display = 'block';
    const magic = objectDetector.detect(image);
    const name = Date.now(); // typeof imageName === 'string' ? imageName : 'uploaded'
    detectedImages[name] = { image, magic, objects: [], outlines: [] };
    for (const detected of magic.detections) {
        if (!detected.boundingBox) continue;
        const detectedObject = document.createElement('p');
        detectedImages[name].objects.push(detectedObject);
        detectedObject.className = 'detected-object';
        imageContainer.appendChild(detectedObject);
        const detectedOutline = document.createElement('div');
        detectedImages[name].outlines.push(detectedOutline);
        detectedOutline.className = 'detected-outline';
        imageContainer.appendChild(detectedOutline);
    }
    recalculateBoundingBoxes();
}

window.addEventListener('resize', () => {
    recalculateBoundingBoxes();
});

function recalculateBoundingBoxes() {
    for (const key in detectedImages) {
        const { image, magic, objects, outlines } = detectedImages[key];
        const ratioW = image.clientWidth / image.naturalWidth;
        const ratioH = image.clientHeight / image.naturalHeight;
        let i = -1;
        for (const detected of magic.detections) {
            i++;
            if (!detected.boundingBox) continue;
            if (objects[i]) {
                objects[i].innerText = \`\${detected.categories[0].categoryName} - \${Math.round(detected.categories[0].score * 100)}%\`;
                objects[i].style.left = \`\${detected.boundingBox.originX * ratioW}px\`;
                objects[i].style.top = \`\${detected.boundingBox.originY * ratioH - 47}px\`;
            }
            if (outlines[i]) {
                outlines[i].style.left = \`\${detected.boundingBox.originX * ratioW}px\`;
                outlines[i].style.top = \`\${detected.boundingBox.originY * ratioH}px\`;
                outlines[i].style.width = \`\${detected.boundingBox.width * ratioW}px\`;
                outlines[i].style.height = \`\${detected.boundingBox.height * ratioH}px\`;
            }
        }
    }
}

function handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    for (const file of input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            input.value = '';
            const img = document.createElement('img');
            const div = document.createElement('div');
            img.src = e.target?.result as string;
            img.onload = () => {
                detect(img);
            };
            div.append(img);
            const counters = {
                a: document.getElementById('image-col-a')?.querySelectorAll('img').length || 0,
                b: document.getElementById('image-col-b')?.querySelectorAll('img').length || 0,
                c: document.getElementById('image-col-c')?.querySelectorAll('img').length || 0,
                d: document.getElementById('image-col-d')?.querySelectorAll('img').length || 0,
            }
            if (counters.a === fileIndex || counters.a < counters.b) {
                document.getElementById('image-col-a')?.prepend(div);
            } else if (counters.b === fileIndex || counters.b < counters.c) {
                document.getElementById('image-col-b')?.prepend(div);
            } else if (counters.c === fileIndex || counters.c < counters.d) {
                document.getElementById('image-col-c')?.prepend(div);
            } else {
                document.getElementById('image-col-d')?.prepend(div);
                fileIndex++;
            }
        };
        reader.readAsDataURL(file);
    }
}
`);

fs.writeFileSync(path.join(publicDir, 'index.html'), `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${CleanProject ? `${projectName} Site Title` : 'Object Detection'}</title>
        <style>
        /* Critical Inline Styles */
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial;
            background: #000;
        }
        </style>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>${CleanProject ? '' : `
        <input type="file" id="fileInput" accept="image/*" multiple /><br><br>
        <div class="row">
            <div id="image-col-a" class="col">
                <!-- <img id="image1" src="imgs/shepherd-dog-4357790_1280.jpg" /> -->
                <!-- <img id="image2" src="imgs/dog-7956828_1280.jpg" /> -->
            </div>
            <div id="image-col-b" class="col"></div>
            <div id="image-col-c" class="col"></div>
            <div id="image-col-d" class="col"></div>
        </div>`}
        <script type="module" id="index-script"></script>
        <script type="module" id="hotreload-script"></script>
        <script>
            document.getElementById('index-script').src = \`index.js?t=\${Date.now()}\`;
            document.getElementById('hotreload-script').src = \`hotreload.js?t=\${Date.now()}\`;
        </script>
    </body>
</html>
`);

fs.writeFileSync(path.join(publicDir, 'style.css'), `/* General Styles */
img {
	width: 100%;
}

rel {
	position: relative;
	display: block;
}

.row {
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;
}

.col {
	flex: 25%;
	max-width: 25%;
	padding: 0 4px;
}
${CleanProject ? '' : `
/* Object Detection Styles */

.detected-outline {
	border-top-left-radius: 0;
}

.detected-object {
	border-bottom-left-radius: 0;
	text-shadow: -2px -2px 0 white;
	padding: 5px;
}

.detected-outline,
.detected-object {
	pointer-events: none;
	position: absolute;
	outline: dotted;
	outline-color: white;
	border-radius: 30px;
	animation: fadeIn .5s forwards;
	transition: opacity .5s;
}

.col img {
	margin-top: 8px;
	vertical-align: middle;
	width: 100%;
	opacity: 0;
	animation: fadeIn .5s forwards;
	transition: opacity .5s;
	display: none;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@media screen and (max-width: 800px) {
	.col {
		flex: 50%;
		max-width: 50%;
	}
}

@media screen and (max-width: 600px) {
	.col {
		flex: 100%;
		max-width: 100%;
	}
}`}
`);

fs.writeFileSync(path.join(hotreloadDir, 'start.ts'), `import { $ } from "bun"
import config from "./config"
const packageJSON = await Bun.file('package.json').json()

if (!packageJSON.module.endsWith('.ts')) {
    console.error(\`Could not load module. Expected a .ts file, but received \${packageJSON.module}\`);
    process.exit();
}

const bundle = (input: string, output: string) => \`\${input} --outfile=\${output} --bundle --platform=browser --format=esm --target=\${config.target}\${config.minify ? ' --minify' : ''}\`
const index = bundle(\`\${config.paths.srcFolder}/\${packageJSON.module}\`, \`\${config.paths.publicFolder}/\${packageJSON.module.replace('.ts', '.js')}\`)

await $\`echo Hello World!\`;

setTimeout(async () => {
    console.log(\`\\x1b[32mHello\\x1b[0m \\x1b[34mWorld!\\x1b[0m\nThank you for using Supe Project Creator v${supeVersion}\`);
    await $\`echo Press CTRL+C in the terminal to terminate the process.\`
}, 2000);

await Promise.all([
    // Bundle index.ts:
    $\`bunx esbuild \${index}\`,
    // Bundle hotreload and start hotreload server:
    $\`bunx esbuild \${bundle(\`\${config.paths.hotreloadFolder}/\${config.paths.hotreload.client}\`, \`\${config.paths.publicFolder}/\${config.paths.hotreload.output}\`)} && bun \${config.paths.hotreloadFolder}/\${config.paths.hotreload.server}\`,
    // Serve public folder:
    $\`bunx http-server \${config.paths.publicFolder} -p \${config.port}\${!config.httpLogs ? ' --silent' : ''}\`,
    // Watch for changes in public and hotreload - On reload: Bundle index.ts + Refresh Page:
    $\`bunx nodemon --ext \${config.watchExtensions} --watch \${config.paths.publicFolder} --watch \${config.paths.hotreloadFolder} --watch \${config.paths.srcFolder} --on-change-only --exec 'bunx esbuild \${index}\${config.refresh.changes ? \` && bun \${config.paths.hotreloadFolder}/\${config.paths.hotreload.refresh}\` : ''}'\`,
    // Watch for errors - Detect TypeScript errors without cleaning the console:
    $\`tsc -b --watch --preserveWatchOutput\`,
    // All commands in here run in parallel
    $\`echo You are using Supe Project Creator v${supeVersion}\`,
])

// End of file - Nothing will run below. Use CTRL+C in the terminal to terminate (due to awaiting running servers...)

`);

fs.writeFileSync(path.join(hotreloadDir, 'config.ts'), `export default {
    port: 80,
    hotreloadPort: 49142,
    debug: false,
    httpLogs: false,
    browser: true,
    browserDelay: 1550,
    address: 'localhost',
    secure: false, // bun http-server --help
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
`);

fs.writeFileSync(path.join(hotreloadDir, 'client.ts'), `import config from "./config";

function createWebSocket() {
  const ws = new WebSocket(\`\${config.secure ? 'wss' : 'ws'}://\${config.address}:\${config.hotreloadPort}\`);

  ws.onmessage = (event) => {
    if (config.debug) console.log("Hot Reload - Incoming Reload!");
    if (event.data === 'reload') window.location.reload();
  };

  ws.onopen = () => {
    if (config.debug) console.log("Hot Reload - Connected!");
  };

  ws.onclose = () => {
    ws.onmessage = null;
    ws.onclose = null;
    ws.onerror = null;
    setTimeout(createWebSocket, config.reconnectDelay);
    if (config.debug) console.log(\`Hot Reload - Reconnecting in \${config.reconnectDelay}ms...\`);
  };

  ws.onerror = (error) => {
    if (config.debug) console.log('Hot Reload - Error:', error);
  };
}

createWebSocket();

if (config.autoFixCSS) {
  window.addEventListener('load', () => {
    for (const link of document.querySelectorAll('link')) {
      link.href = \`\${link.href}?t=\${Date.now()}\`;
    }
  });
}
`);

fs.writeFileSync(path.join(hotreloadDir, 'server.ts'), `import type Message from "ws"
import { WebSocketServer } from 'ws';
import { exec } from 'node:child_process';
import os from 'node:os';
import config from "./config";

const wss = new WebSocketServer({ port: config.hotreloadPort });
if (config.debug) console.log(\`Hot Reload WebSocket server is running on \${config.secure ? 'wss' : 'ws'}://\${config.address}:\${config.hotreloadPort}\`);

let connected = false;
wss.on('connection', (ws) => {
    connected = true;
    if (config.debug) console.log('Client connected');
    ws.on('message', (input: Message) => {
        let msg: string | Message = input;
        try { if (Buffer.isBuffer(msg)) msg = msg.toString(); } catch (e) { }
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

const url = \`\${config.secure ? 'https' : 'http'}://\${config.address}\${config.port !== 80 ? \`:\${config.port}\` : ''}\`;
console.log(\`Server is running: \${url}\`);
if (config.browser) {
    setTimeout(() => {
        if (!connected) {
            try {
                const commands: { [key: string]: string } = {
                    darwin: \`open \${url}\`,
                    win32: \`start \${url}\`,
                    default: \`xdg-open \${url}\`
                };
                exec(commands[os.platform()] || commands.default);
                if (config.debug) console.log("Launched Browser!");
            } catch (error) {
                if (config.debug) console.error(\`Error launching browser: \${error}\`);
            }
        } else {
            if (config.debug) console.log("Browser was already running.");
            if (config.refresh.restart) triggerReload();
        }
    }, config.browserDelay);
}
`);

fs.writeFileSync(path.join(hotreloadDir, 'refresh.ts'), `import config from "./config";

if (!config.hotreload) process.exit();

const ws = new WebSocket(\`\${config.secure ? 'wss' : 'ws'}://\${config.address}:\${config.hotreloadPort}\`);
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
`);
