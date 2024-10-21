# Supe Project Creator v1.8.2

A simple tool for creating simple web projects with batteries included.

This is the first package under the @supeprojects scope, with more planned for the future.

![Supe Project Creator - CLI Example Project](https://github.com/burgil/burgil/blob/main/public/SupeProjectCreator_CLI-Example.gif?raw=true)

> [!TIP]
> Wait until v2.0.0 drops!

## Overview - What is Supe Project Creator?

Supe Project Creator is a simple tool designed to help you build simple web applications quickly and efficiently. It generates project templates boilerplate using **TypeScript**, **HTML**, and **CSS**, with included **hot reloading** for a seamless development workflow. But there's a catch - the generated project has no dependencies, a fresh start. All the source code that runs the project will be waiting for you in the generated project folder, no strings attached. It's as simple as you can get.

The tool comes with a **built-in web server**, making it easy to test and deploy your projects locally or in production. One of the standout features is an optional pre-configured **AI DEMO** that showcases object detection in images, demonstrating the integration of machine learning in web apps.

> Docs: (WIP) [https://supeprojects.pages.dev/](https://supeprojects.pages.dev/) (TODO)

> [JSR](https://jsr.io/@supeprojects/supe-project-creator) - [GitHub](https://github.com/burgil/supe-project-creator) - [Known Issues](https://github.com/burgil/supe-project-creator/issues) - [Wiki](https://github.com/burgil/supe-project-creator/wiki) - [Changelog](https://github.com/burgil/supe-project-creator/blob/main/CHANGELOG.md) - [Roadmap](https://github.com/burgil/supe-project-creator/blob/main/ROADMAP.md)

> [Contributing](https://github.com/burgil/supe-project-creator/blob/main/CONTRIBUTING.md) - [Code of Conduct](https://github.com/burgil/supe-project-creator/blob/main/CODE_OF_CONDUCT.md) - [License](https://github.com/burgil/supe-project-creator/blob/main/LICENSE)

![Supe Project Creator - AI Demo Project](https://github.com/burgil/burgil/blob/main/public/Supe-Project-Creator-Gif.gif?raw=true)

> [!NOTE]
> The created project is client-only. You are welcome to combine Supe Project Creator with any other server framework, such as Express.JS, FastAPI, Cloudflare Workers, etc.

**For a bit of technical detail:** how it does all of that is thanks to the built-in TypeScript compilers in the new runtimes. This approach uses globally installed `http-server`, `nodemon`, and `esbuild` packages, eliminating the need for additional dependency downloads.

> [!CAUTION]
> The package is not production-ready yet.

## Key Features - What can Supe Project Creator do?

**Why choose Supe Project Creator over all the other project creators out there?**

By utilizing Supe Project Creator, you can:

* **Keep it Simple**: For people who want to start a fresh project with nothing, but still have everything. No dependencies will be in the generated project `package.json`/`deno.json` files, additionally all the source code that powers your app will be right there, allowing you to **truly** fully customize your application and take it in any direction.
* **Save Time**: Skip tedious configuration tasks and jumpstart your project with a pre-configured template.
* **Boost Efficiency**: Focus on writing code, not setting up your project structure.
* **Streamline Your Workflow**: Take advantage of hot reloading and instant feedback to accelerate your development process.
* **Explore New Possibilities**: Leverage the included optional AI demo to experiment with machine learning in your web applications, or start with a clean project.
* **Lightning-Fast Project Setup**: Quickly create new projects with our intuitive scaffolding tool. Start with a pre-configured project structure, hot reloading, and optimized development tools.
* **Customizable and Configurable**: Adapt your project setup to your specific needs with flexible options and configurations. No reliance on third-party modules - you maintain full control over your environment.
* **Comprehensive TypeScript Support**: Enjoy full TypeScript support, including ESNext, ESM, Bun, and Deno, for an efficient, strongly-typed development process. The tool also features built-in error tracking and real-time updates.
* **Built-in HTTP Web Server**: Easily serve your project using the built-in web server that supports HTTP for development. This allows quick local testing of your project with minimal setup.
* **Optional AI Demo Integration**: Explore the potential of AI with our pre-configured demo, if you want, which features an object detection system that can recognize items in images - ideal for machine learning demonstrations or real-world AI projects.
* **Blazing-Fast Performance with Intelligent Workflow**: Experience ultra-fast startup times that keep your development flow uninterrupted. Our intelligent development tool minimizes unnecessary browser launches and manual configurations, allowing you to focus on coding. Enjoy optimized browser handling that adapts to your workflow, making it easier than ever to create and test your projects in real-time.
* **Instant Hot Reloading for Real-Time Development**: Leverage powerful hot reloading capabilities that instantly refresh your website as you make changes. This feature allows you to see updates in real-time, enhancing your productivity by eliminating the need for manual refreshes. Enjoy a smooth development experience with immediate feedback, so you can iterate quickly and efficiently.

**With Supe Project Creator, you can concentrate on what matters most – building innovative and effective web applications.**

## Prerequisites - What do you need to run Supe Project Creator?

Before executing any scripts, please take a moment to:

1. **Read this entire document** to understand the necessary steps and requirements.
2. **Verify that you have installed** the required runtime: `bun` | `deno 2` | `node`

> [!WARNING]
> Deno support for this package is currently actively worked on.
> Node support will probably never work due to a missing built-in TypeScript compiler.

## 🛠 Getting Started - Usage - Quickstart - Tutorial

To start using Supe Project Creator, simply run the following command:

### Create a Clean Project in the Current Working Directory:

```bash
deno jsr:@supeprojects/supe-project-creator@1.8.2 -n @example/my-supe-project --runtime deno
```

```bash
cd my-supe-project
```

### Create an AI Demo Project in the Current Working Directory:

```bash
deno jsr:@supeprojects/supe-project-creator@1.8.2 --demo -n @example/cat-dog-detector -r deno
```

```bash
cd cat-dog-detector
```

> [!IMPORTANT]
> Supe Project Creator does not require a separate installation step. Simply execute the command above to create a new project instantly.

Once you're inside the project directory, you can then follow the steps to install dependencies and start the development server:

1. **Install Dependencies**:

```bash
bun install
# or..
deno install
```

2. **Start the Development Server**:

```bash
bun start
# or..
deno run start
```

Now a new browser tab will open, directing you to `http://localhost` if it isn't already open. This allows you to immediately view and interact with your project in your web browser.

This behavior is, of course, configurable in `hotreload/config.ts`, allowing you to customize the browser launch, hot reload, port or other settings according to your project's requirements.

> [!TIP]
> **Recommended Extensions for Visual Studio Code**
>
> - **Deno**: The official Deno extension for Visual Studio Code provides features like syntax highlighting, code completion, linting, and debugging support for Deno projects.  
>   [Install Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
>
> - **Biome**: A fast and flexible linter, formatter, and style checker for JavaScript, TypeScript, JSON, and more, ensuring clean and consistent code formatting.  
>   [Install Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
>
> - **JavaScript and TypeScript Nightly**: Access nightly builds of the TypeScript language service, allowing you to use the latest features and fixes.  
>   [Install JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
>
> **Manual Installation Steps:**
> 1. Open VSCode and navigate to Extensions (`Ctrl + Shift + X`).
> 2. Search for the name of the desired extension (e.g., "Deno", "Biome", or "JavaScript and TypeScript Nightly").
> 3. Select the extension and click **Install**.

## CLI Options

To view the available options for Supe Project Creator, run the following command:

```bash
deno jsr:@supeprojects/supe-project-creator@1.8.2 --help
```

- `-h`, `--help`: Displays help information.
- `-v`, `--version`: Displays the version number.
- `-n`, `--name <string>`: Sets the project name (required).
- `-r`, `--runtime <deno|bun|node>`: Specifies the JavaScript runtime environment (required).
- `-d`, `--demo`: Creates a demo project (default: `false`).

## Project Structure - What Supe Project Creator generated projects have?

Supe Project Creator organizes your project using the following structure:

- `src`: Contains the project's source code (TypeScript).
- `public`: Public-facing files, including `index.html`.
- `hotreload`: Configuration and scripts for hot reloading.

> [!TIP]
> **Recommended VSCode Workspace Configuration:**
>
> To enhance your development experience, use the provided recommended `.code-workspace` file named after your project. This configuration excludes unnecessary files from view, allowing you to focus on your code.
>
> **Opening the VSCode Workspace:**
> 1. Locate the `<project-name>.code-workspace` file in your project directory.
> 2. Double-click the file to open it in VS Code, or find "Open Workspace" inside VS Code.
>
> **Benefits of Using the Recommended VSCode Workspace:**
> - **Streamlined view**: Concentrate on your project's essential files, without clutter from `node_modules` and other irrelevant directories.
> - **Improved performance**: By excluding unnecessary files, you'll experience faster loading times and more efficient search results.

## Programmatic Usage

The Supe Project Creator (SPC) can be utilized programmatically within your TypeScript or JavaScript applications. This allows you to create projects dynamically and customize the initialization process according to your needs.

### Benefits of Programmatic Use

Utilizing SPC programmatically allows you to:

- **Automate Project Creation**: Integrate project setup into your build scripts or development tools.
- **Streamlined Workflow**: Enhance your development workflow by reducing manual steps in project creation.

### Importing and Installing Supe Project Creator

#### Programmatic Use Example

```ts
import SPC from 'jsr:@supeprojects/supe-project-creator@1.8.2';

console.log("Testing SPC programmatically...");

// Display the help menu
SPC([]);

// Create a new clean project named "my-example-project"
SPC(['--name', '@example/my-example-project', '--runtime', 'deno']);

// Create a project with specific runtime and additional options (May soon be replaced with an argument instead of a variable)
SPC(['--name', '@example/my-custom-project', '--runtime', 'deno']);

// Generate a project and immediately start the development server - Not implemented yet! TODO: Implement --start script
// SPC(['--name', '@example/my-fast-project', '--start', '--runtime', 'deno']);
```

### Programmatic Use Parameters

- `argv: string[]`: An array of command-line arguments that control the behavior of the project creation process. This includes options like `--name` for naming the project, and the `--runtime` option to specify the environment (e.g., `bun`, `deno`, or `node`).

For more detailed information on available options and flags, refer to the [CLI Options](#cli-options) section of the documentation.

Depending on the runtime environment you're using, you can import the `Supe Project Creator` (SPC) in different ways. Below are examples for **Deno**, **Node**, and **Bun**.

With these commands, you can easily set up and utilize the Supe Project Creator in your Deno, Node.js, or Bun environments. This flexibility allows you to choose the runtime that best fits your project needs.

#### Deno

To add the `Supe Project Creator` package in Deno, you can import it directly without any installation if you use the `jsr:` prefix in your import:

```ts
import * as SPC from "jsr:@supeprojects/supe-project-creator@1.8.2";

// Example usage
console.log("Testing SPC in Deno...");
SPC([]); // Shows the help menu
```

Alternatively, if you prefer to add it, use the following command:

```bash
deno add jsr:@supeprojects/supe-project-creator@1.8.2
```

Then, you can import it like this:

```ts
import * as SPC from "@supeprojects/supe-project-creator";

// Example usage
console.log("Testing SPC in Deno...");
SPC([]); // Shows the help menu
```

#### Bun

To add the package in Bun, use the following command:

```bash
bunx jsr add @supeprojects/supe-project-creator
```

Import the module in your Bun project:

```ts
import * as SPC from "@supeprojects/supe-project-creator";

// Example usage
console.log("Testing SPC in Bun...");
SPC([]); // Shows the help menu
```

#### Node.js

For Node.js, you can install the package using `npx`:

```bash
npx jsr add @supeprojects/supe-project-creator
```

Then, import it in your code:

```ts
import * as SPC from "@supeprojects/supe-project-creator";

// Example usage
console.log("Testing SPC in Node...");
SPC([]); // Shows the help menu
```

## License

```
MIT License

Copyright (c) 2024 Burgil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contributors - Who helped build Supe Project Creator?

- **Burgil**

## Released - When Supe Project Creater was released?

- **16 October 2024**
