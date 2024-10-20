import { $ } from "bun";
import { basename } from "node:path";
import { existsSync } from "node:fs";
import process from "node:process";
import config from "./config";
const packageJSON = await Bun.file('package.json').json();

if (!packageJSON.module.endsWith('.ts')) {
    console.error(`Could not load module. Expected a .ts file, but received ${packageJSON.module}`);
    process.exit();
}

if (!existsSync(packageJSON.module)) {
    console.error(`Could not find "${packageJSON.module}" defined in the package.json "module" member`);
    process.exit();
}

const bundle = (input: string, output: string) => `${input} --outfile=${output} --bundle --platform=browser --format=esm --target=${config.target}${config.minify ? ' --minify' : ''}`;
const index = bundle(packageJSON.module, `${config.paths.publicFolder}/${basename(packageJSON.module).replace('.ts', '.js')}`);

await $`echo Hello World!`;

setTimeout(async () => {
    console.log(`\x1b[32mHello\x1b[0m \x1b[34mWorld!\x1b[0m
Thank you for using Supe Project Creator v1.6.9`);
    await $`echo Press CTRL+C in the terminal to terminate the process.`
}, 2000);

await Promise.all([
    // Bundle index.ts:
    $`bunx esbuild ${index}`,
    // Bundle hotreload and start hotreload server:
    $`bunx esbuild ${bundle(`${config.paths.hotreloadFolder}/${config.paths.hotreload.client}`, `${config.paths.publicFolder}/${config.paths.hotreload.output}`)} && bun ${config.paths.hotreloadFolder}/${config.paths.hotreload.server}`,
    // Serve public folder:
    $`bunx http-server ${config.paths.publicFolder} -p ${config.port}${!config.httpLogs ? ' --silent' : ''}`,
    // Watch for changes in public and hotreload - On reload: Bundle index.ts + Refresh Page:
    $`bunx nodemon --ext ${config.watchExtensions} --watch ${config.paths.publicFolder} --watch ${config.paths.hotreloadFolder} --watch ${config.paths.srcFolder} --on-change-only --exec 'bunx esbuild ${index}${config.refresh.changes ? ` && bun ${config.paths.hotreloadFolder}/${config.paths.hotreload.refresh}` : ''}'`,
    // Watch for errors - Detect TypeScript errors without cleaning the console:
    $`tsc -b --watch --preserveWatchOutput`,
    // All commands in here run in parallel
    $`echo You are using Supe Project Creator v1.6.9`,
])

// End of file - Nothing will run below. Use CTRL+C in the terminal to terminate (due to awaiting running servers...)
