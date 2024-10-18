# Supe Project Creator v1.6.3

A simple tool for creating modern web projects with batteries included.

![Supe Project Creator - AI Demo Project](https://github.com/burgil/burgil/blob/main/public/Supe-Project-Creator-Gif.gif?raw=true)

This is the first package under the @supeprojects scope, with more planned for the future.

## Overview - What is Supe Project Creator?

Supe Project Creator is a simple tool designed to help you build modern web applications quickly and efficiently. It generates project templates boilerplate using **TypeScript**, **HTML**, and **CSS**, with included **hot reloading** for a seamless development workflow. But there's a catch - the generated project has no dependencies, a fresh start. All the source code that runs the project will be waiting for you in the generated project folder, no strings attached. It's as simple as you can get.

[JSR](https://jsr.io/@supeprojects/supe-project-creator) - [Source Code](https://github.com/burgil/supe-project-creator) - [Known Issues](https://github.com/burgil/supe-project-creator/issues) - [Docs/Wiki](https://github.com/burgil/supe-project-creator/wiki)

**For a bit of technical detail:** how it does all of that is thanks to the built-in TypeScript compilers in the new runtimes. To avoid downloading dependencies, it uses `bunx` (an `npx` alternative) to fetch packages like `http-server`, `nodemon`, and `esbuild`.

> [!NOTE]
> The created project is client-only. You are welcome to combine Supe Project Creator with any other server framework, such as Express.JS, FastAPI, Cloudflare Workers, etc.

The tool comes with a **built-in web server**, making it easy to test and deploy your projects locally or in production. One of the standout features is a pre-configured **AI DEMO** that showcases object detection in images, demonstrating the integration of machine learning in web apps.

**Unlock Your Productivity**

By utilizing Supe Project Creator, you can:

* **Save Time**: Skip tedious configuration tasks and jumpstart your project with a pre-configured template.
* **Boost Efficiency**: Focus on writing code, not setting up your project structure.
* **Streamline Your Workflow**: Take advantage of hot reloading and instant feedback to accelerate your development process.
* **Explore New Possibilities**: Leverage the included AI demo to experiment with machine learning in your web applications.

With Supe Project Creator, you can concentrate on what matters most – building innovative and effective web applications.

> [!CAUTION]
> The package is not production-ready yet.

> [!WARNING]
> Deno support for this package is currently untested, but it is being actively worked on.

## Key Features - What can Supe Project Creator do?

### 1. **Lightning-Fast Project Setup**
Quickly create new projects with our intuitive scaffolding tool. Start with a pre-configured project structure, hot reloading, and optimized development tools.

### 2. **Customizable and Configurable**
Adapt your project setup to your specific needs with flexible options and configurations. No reliance on third-party modules - you maintain full control over your environment.

### 3. **Comprehensive TypeScript Support**
Enjoy full TypeScript support, including ESNext, ESM, Bun, and Deno, for an efficient, strongly-typed development process. The tool also features built-in error tracking and real-time updates.

### 4. **Built-in HTTP/1.1 Web Server**
Easily serve your project using the built-in web server that supports HTTP/1.1 for development. This allows quick local testing of your project with minimal setup.

### 5. **AI Demo Integration**
Explore the potential of AI with our pre-configured demo, which features an object detection system that can recognize items in images - ideal for machine learning demonstrations or real-world AI projects.

### 6. **Blazing-Fast Performance with Intelligent Workflow**
Experience ultra-fast startup times that keep your development flow uninterrupted. Our intelligent development tool minimizes unnecessary browser launches and manual configurations, allowing you to focus on coding. Enjoy optimized browser handling that adapts to your workflow, making it easier than ever to create and test your projects in real-time.

### 7. **Instant Hot Reloading for Real-Time Development**
Leverage powerful hot reloading capabilities that instantly refresh your website as you make changes. This feature allows you to see updates in real-time, enhancing your productivity by eliminating the need for manual refreshes. Enjoy a smooth development experience with immediate feedback, so you can iterate quickly and efficiently.

> [!TIP]
> Wait until v2.0.0 drops!

## Upcoming Features

### Roadmap

I'm actively working to enhance Supe Project Creator with new features and learning resources:

*   **Deno Support**: Add support for Deno as a JavaScript runtime environment.
*   **AI Demo Projects**: Expand the project creator to support other types of AI demo projects, including machine learning and natural language processing examples.
*   **Enhanced Project Customization**: Allow users to customize project settings, such as dependencies and configurations, more easily.
*   **Streamlined Project Setup**: Simplify the project setup process, making it faster and more intuitive for users.
*   **Better Support for Advanced Features**: Improve support for advanced features, such as hot reloading and TypeScript integration.
*   **HTTP/2 Support**: Add support for HTTP/2 to improve performance and user experience.
*   **SSL and HTTPS**: Integrate SSL certificates to serve projects over HTTPS.
*   **Explore HTTP/3**: Investigate and potentially add support for HTTP/3 to future-proof your web applications.
*   **Improved Installation**: Streamline the installation process for easier and faster project setup.
*   **Tutorials and Documentation**: Create detailed tutorials and expand documentation to cover project setup, advanced configurations, and common use cases.
*   **YouTube Videos**: Launch a YouTube channel with video guides covering different aspects of Supe Project Creator.
*   **GIF and Media Demos**: Provide GIFs and other media assets to visually demonstrate the tool's features and workflows.
*   **LLM Demo**: Include more AI demos, specifically large language model demos.
*   **Optional TypeScript Error Notifications**: Introduce optional notifications for TypeScript errors to enhance user experience.
*   **Dev Plugins Ecosystem**: Establish a plugins ecosystem for developers to extend and customize the project creator.
*   **Server Integrations**: Offer out-of-the-box server integrations and auto CORS setup for seamless connectivity.
*   **CLI and Code Integrations**: Enable CLI and code integrations to utilize the project creator as a package.
*   **Docs and JSDocs Definitions**: Add comprehensive documentation and JSDocs definitions for improved clarity and usability.

**These features are in active development, and your feedback is always welcome!**

## Prerequisites - What do you need to run Supe Project Creator?

Before executing any scripts, please take a moment to:

1. **Read this entire document** to understand the necessary steps and requirements.
2. **Verify that you have installed** the required dependencies:
	* `bun`
	* `deno 2`
	* `node`
3. **Verify ESBuild Functionality** in Your Environment:
	* Run the command `bunx esbuild --version` to check the installed version. At the time of writing, the expected output is `0.24.0`.
	* You can also check this with `deno`, Run the command `deno npm:esbuild --version`, the expected output is:
	`✅ Granted all env access.`
	`✅ Granted all read access.`
	`✅ Granted all run access.`
	`0.24.0`

By doing so, you will ensure a smooth and successful execution of the scripts.

## 🛠 Getting Started - Usage - Quickstart - Tutorial

To start using Supe Project Creator, simply run the following command:

### Create an AI Demo Project in the Current Working Directory:
```bash
deno jsr:@supeprojects/supe-project-creator --demo -n cat-dog-detector
```

### Create a Clean Project in the Current Working Directory:
```bash
deno jsr:@supeprojects/supe-project-creator -n my-supe-project
```

### Create a Clean Project in a Specific Directory:
```bash
deno jsr:@supeprojects/supe-project-creator --name "C:\Users\%username%\Desktop\my-supe-project"
```

> [!TIP]
> TODO: Add runtime argument `--bun`, `--deno` or `--node`

If you get any error related to `esbuild` during usage, Try to restart the terminal and try again, To avoid downloading dependencies it uses `bunx` (`NPX` Alternative) to fetch packages like `http-server`, `nodemon` and `esbuild`.

> [!IMPORTANT]
> Supe Project Creator does not require a separate installation step. Simply execute the command above to create a new project instantly. In future releases, it will also be available as a package, allowing you to write custom code that generates projects programmatically. (**Work in Progress**). To test this feature, run `bun test` in your terminal.

After creating a new project using the Supe Project Creator, you will first need to navigate to the newly created project directory before proceeding with the setup:

#### For a project created in a specific directory:
```bash
cd "C:\Users\%username%\Desktop\my-supe-project"
```

#### For a project created in the current working directory (e.g., AI demo):
```bash
cd cat-dog-detector
```

Once you're inside the project directory, you can then follow the steps to install dependencies and start the development server:

1. **Install Dependencies**:

```bash
bun install
# or
deno install # (Deno is not tested yet)
```

2. **Start the Development Server**:

```bash
bun start
# or
deno start # (Deno is not tested yet)
```

After navigating to the project folder and running the command to start the development server with `bun start`, a new browser tab will open, directing you to `http://localhost` if it isn't already open. This allows you to immediately view and interact with your project in your web browser.

This behavior is, of course, configurable in `hotreload/config.ts`, allowing you to customize the port or other settings according to your project's requirements.

> [!TIP]
> ### Recommended Extensions for Visual Studio Code
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
> #### Manual Installation Steps:
> 1. Open VSCode and navigate to Extensions (`Ctrl + Shift + X`).
> 2. Search for the name of the desired extension (e.g., "Deno", "Biome", or "JavaScript and TypeScript Nightly").
> 3. Select the extension and click **Install**.

## CLI Options

To view the available options for Supe Project Creator, run the following command:

```bash
deno jsr:@supeprojects/supe-project-creator --help
```

- `-h`, `--help`: Displays help information.
- `-v`, `--version`: Displays the version number.
- `-n`, `--name <string>`: Sets the project name (default: `"example-project"`).
- `-d`, `--demo`: Creates a demo project (default: `false`).

## Project Structure - What Supe Project Creator generated projects have?

Supe Project Creator organizes your project using the following structure:

- `src`: Contains the project's source code (TypeScript).
- `public`: Public-facing files, including `index.html`.
- `hotreload`: Configuration and scripts for hot reloading.

> [!TIP]
> ### Recommended VSCode Workspace Configuration
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
- **Customize Parameters**: Tailor the initialization process with specific options that suit your project needs. TODO: Add more options
- **Streamlined Workflow**: Enhance your development workflow by reducing manual steps in project creation.
### Importing and Installing Supe Project Creator

#### Programmatic Use Example

```ts
import SPC from 'jsr:@supeprojects/supe-project-creator';

console.log("Testing SPC programmatically...");

// Display the help menu
SPC([]);

// Create a new clean project named "my-example-project"
SPC(['--name', 'my-example-project']);

// Create a project with specific runtime and additional options (May soon be replaced with an argument instead of a variable)
SPC(['--name', 'my-custom-project'], 'deno');

// Generate a project and immediately start the development server - Not implemented yet! TODO: Implement --start script
// SPC(['--name', 'my-fast-project', '--start']);
```

### Programmatic Use Parameters

- `argv: string[]`: An array of command-line arguments that control the behavior of the project creation process. This includes options like `--name` for naming the project, and in the future, it might have a `--runtime` option to specify the environment (e.g., `bun`, `deno`, or `node`) or `--bun`, `--deno`, and `--node`.
- `runtime: 'bun' | 'deno' | 'node'`: The runtime environment for the project creation process. It defaults to `'bun'`. You can specify which environment to use by passing one of these values.

For more detailed information on available options and flags, refer to the [CLI Options](#cli-options) section of the documentation.

Depending on the runtime environment you're using, you can import the `Supe Project Creator` (SPC) in different ways. Below are examples for **Deno**, **Node**, and **Bun**.

With these commands, you can easily set up and utilize the Supe Project Creator in your Deno, Node.js, or Bun environments. This flexibility allows you to choose the runtime that best fits your project needs.

#### Deno

To add the `Supe Project Creator` package in Deno, you can import it directly without any installation if you use the `jsr:` prefix in your import:

```ts
import * as mod from "jsr:@supeprojects/supe-project-creator";

// Example usage
console.log("Testing SPC in Deno...");
mod([]); // Shows the help menu
```

Alternatively, if you prefer to add it, use the following command:

```bash
deno add jsr:@supeprojects/supe-project-creator
```

Then, you can import it like this:

```ts
import * as mod from "@supeprojects/supe-project-creator";

// Example usage
console.log("Testing SPC in Deno...");
mod([]); // Shows the help menu
```

#### Node.js

For Node.js, you can install the package using `npx`:

```bash
npx jsr add @supeprojects/supe-project-creator
```

Then, import it in your code:

```ts
import * as mod from "@supeprojects/supe-project-creator";

// Example usage
console.log("Testing SPC in Node...");
mod([]); // Shows the help menu
```

#### Bun

To add the package in Bun, use the following command:

```bash
bunx jsr add @supeprojects/supe-project-creator
```

Import the module in your Bun project:

```ts
import * as mod from "@supeprojects/supe-project-creator";

// Example usage
console.log("Testing SPC in Bun...");
mod([]); // Shows the help menu
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

## Contributing and Feedback - How to help develop Supe Project Creator?

Contributions are welcome from the community! Whether it's a new feature idea, bug fix, or documentation improvement, I'd love to hear from you.

### Ways to Contribute

- **Open Issues**: Check our issue tracker for open issues, such as "beginner-friendly" or "feature request."
- **Submit Pull Requests**: Submit your changes via a pull request, and our team will review and merge them.
- **Documentation Improvements**: Help enhance our documentation by adding guides or correcting errors.
- **Community Feedback**: Share your ideas and suggestions in the discussions section or on social media.

### Types of Contributions

- **Code**: Bug fixes, new features, and performance improvements.
- **Design**: UI/UX design contributions.
- **Translation**: Help translate our documentation into different languages.

### Contribution Guidelines

- **Code Style**: Follow standard TypeScript and Bun conventions.
- **Commit Messages**: Use clear and descriptive commit messages.
- **PR Labels**: Tag pull requests with relevant labels for easier review.

**Getting Started**
---------------

1.  **Fork the Repository**: Fork our repository to create a copy of the code.
2.  **Create a Branch**: Create a new branch for your changes.
3.  **Make Changes**: Make your changes and commit them.
4.  **Lint & Bump**: Bump the version using `bun bump` and lint the project with `deno lint` to find important issues.
5.  **Submit a PR**: Submit a pull request with your changes.

I appreciate your contributions and look forward to hearing from you!

**Bump Version Script**
---------------

As a contributor to this project, you may need to update the version number of your own fork or local copy. The following steps outline how to do so.

The `bump.ts` script is executed by either `bun` or `deno` to increment the version number of a project, by updating the relevant files such as `package.json`.

Automations. Algorithms. Everywhere.

![Bump Version Script](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot1.png?raw=true)

**Inspecting the Final Commit of the Automation Script:**
---------------

The following screenshots demonstrate the changes made by the version bump script:

![Bump Version Script Commit Example - README.md](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot2.png?raw=true) ![Bump Version Script Commit Example - index.ts](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot3.png?raw=true) ![Bump Version Script Commit Example - jsr.json](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot4.png?raw=true) ![Bump Version Script Commit Example - package.json](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot5.png?raw=true)

**Running the Bump Version Script**
---------------

To run the bump version script in your own local environment, use one of the following commands:

- To run with `bun`, execute: 
```bash
bun bump
```

- To run with `deno`, execute: 
```bash
deno bump.ts
```
**Note:** Currently, `deno` bumping is not functioning as expected. It prompts for permissions, but then hangs on the readline input.

### Old Examples

- **Create a new project with a custom name at a specific path:**

```bash
bun ./node_modules/@supeprojects/supe-project-creator -n "C:\Users\%username%\Desktop\my-supe-project"
```

- **Create a new project folder with a custom name in the current directory:**

```bash
bun ./node_modules/@supeprojects/supe-project-creator -n my-supe-project
```

- **Create a demo project:**

```bash
bun ./node_modules/@supeprojects/supe-project-creator --demo --name cat-dog-detector
```

## Old Usage - How to run with Bun instead of Deno?

> [!IMPORTANT]
> JSR currently does not support NPX or BUNX-style direct execution, but `--global` installation may be available soon. Feel free to suggest a better approach if you find one.

To start using Supe Project Creator, run the following commands:

```bash
mkdir supe-project-creator
cd supe-project-creator
bun init -y
bunx jsr add @supeprojects/supe-project-creator@latest
```

### Displaying Available Options

To view the available options for Supe Project Creator, run the following command:

#### Using Bun
```bash
bun ./node_modules/@supeprojects/supe-project-creator --help
```

#### Using Deno
```bash
deno ./node_modules/@supeprojects/supe-project-creator --help
```
**Note:** Deno support is currently untested, but it will be fully supported in the future.

#### Using Node
```bash
node ./node_modules/@supeprojects/supe-project-creator --help
```
**Note:** Node currently has limitations due to missing built-in TypeScript compatibility, but the above command will still work.

### Future Command (🤞):
```bash
jsr supe-project-creator [options]

# Windows Example:
$env:npm_config_registry="https://your.custom.registry/"; npx -p @yourcompany/tools foo
# Linux Example:
npm_config_registry=https://your.custom.registry/ npx -p @yourcompany/tools foo

# Almost Working!:
$env:npm_config_registry="https://npm.jsr.io/@jsr/"
npx supeprojects__supe-project-creator

$env:npm_config_registry="https://npm.jsr.io/@jsr/"
bunx supeprojects__supe-project-creator

# Without JSR: (Temporary solution until another method is discovered)
bunx burgil/supe-project-creator
npx github:burgil/supe-project-creator
```

## Changelog

### Version 1.6.3 - Reorganized Sections

- **Section Order Updated**: Moved the Programmatic Usage section above the Contribution section in the README for better logical flow and accessibility, making it easier for users to find relevant information.

### Version 1.6.2 - Improved Readability

- **Enhanced Clarity**: Made adjustments throughout the README to improve readability and flow, ensuring that information is presented more clearly for users.

### Version 1.6.1 - Fixed Typo

- **Typographical Error Corrected**: Addressed and corrected a typo in the README for improved clarity and professionalism.

### Version 1.6.0 - Updated Key Features

- **Enhanced Documentation**: Revised the Key Features section to improve clarity and detail. Combined points on performance and intelligent workflow, and introduced a dedicated point for hot reloading.

### Version 1.5.9 - Moved the Programmatic Use section

- **README Changes**: Moved the new Programmatic Use section above the change log

### Version 1.5.8 - Added Runtime and Import Clarifications

- **Updated README to clarify the `runtime` parameter and Deno importing instructions**: Provided a detailed description of the `runtime` parameter options

### Version 1.5.7 - Updated VSCode Workspace Configuration Guidance

- **Revised README to include a dedicated tip for using the recommended VSCode workspace file**: Transformed the VSCode workspace configuration section into a clear tip, emphasizing its benefits for enhancing development experience and streamlining project management by excluding unnecessary files.

### Version 1.5.6 - Enhanced Project Initialization with Deno Support and Improved Documentation

- **Updated project creator tool with improved Deno compatibility, TypeScript support, and recommended VSCode extensions**: Enhanced project creation with better support for Deno project naming, improved handling of deno.json and package.json, plus fixed bugs for a smoother experience.

### Version 1.5.5 - Improved README

- **Enhanced README for better clarity and guidance**: README updated with clearer instructions and examples.

### Version 1.5.4 - README Improvements and Enhancements

- **Enhanced the README for clearer guidance and better user experience.**: The README has been improved with clearer instructions and detailed explanations to help users better understand how to use Supe Project Creator.

### Version 1.5.3 - Basic Deno Support, JSDoc Improvements, and Linting Fixes

- **Added basic Deno support, improved JSDoc documentation, and resolved linting issues in generated projects**: Supe Project Creator now supports Deno alongside Node.js and Bun. JSDoc documentation has been enhanced, including the addition of a new `runtime` variable. Linting issues in the generated Deno and Bun projects have also been fixed, ensuring cleaner, error-free code.

### Version 1.5.2 - README Enhancements, bun start Command, and New Test Script

- **Improved README, added bun start command, and introduced a tests.ts script for testing.**: The README has been updated for clearer guidance. We've added the bun start command to streamline project execution and included a tests.ts script to help users begin testing their project right away.

### Version 1.5.1 - Require Project Name and Deno Compatibility

- **Supe Project Creator now requires a project name to run and includes Deno types**: Running the tool without a project name triggers the help message, and the project is now set up for Deno compatibility.

### Version 1.5.0 - Improved Project Creation and Validation

- **Added project name validation and clear setup instructions**: Supe Project Creator now validates project names and provides colored console logs for guidance.

### Version 1.4.9 - Improved README

- **Enhanced README**: The README file was carefully reviewed and everything is now almost perfect

### Version 1.4.8 - Added lock files and VSCode Workspace

- **Improved Experience**: The project now have a new VSCode Workspace that hides all the unnecessary files from the view

### Version 1.4.7 - Added Screenshots

- **New README Screenshots and GIF**: Who doesn't like screenshots and GIFs, added some preview screenshots hosted in my profile repo (not on JSR)

### Version 1.4.6 - Added colors to the version bumper logs

- **Improved Version Bumper**: Added colors to console logs and optimized the algorithm

### Version 1.4.5 - Added Code of Conduct

- **New Rules**: It is important that new contributors read the code of conduct if they plan to contribute

### Version 1.4.4 - Fixed Version Bumper

- **Fixed Incorrect Answer Crashes the Version Bumper**: The version bumper will not crash anymore when inputting an incorrect answer (y/n)

### Version 1.4.3 - Improved Version Bumper

- **Smarter Questions**: Questions in the version bumper will now properly handle mistakes

### Version 1.4.2 - README Enhancements

- **Accurate project description**: The project description has changed from "powerful" to "simple" to better reflect what the project is about and remove "we" from the README

### Version 1.4.1 - Removed an unused variable

- **Fixed error no-unused-vars**: When using `deno lint` the project will be checked for TypeScript issues, Removing this unused variable was the last error to fix in both typescript files, note that `index.ts` is the main package used to create projects and `bump.ts` is a contributor only script to bump version in multiple files and then push to GitHub which will trigger the action to push into JSR. Good Job!

### Version 1.4.0 - Improved Version Bumper Script

- **Better Version Bump**: The version bumper new feature to push into GitHub was tested and will now operate as intented, Also added detailed from/to version logs

### Version 1.3.9 - Improved Bump Script

- **Version Control Support for the Bump Script**: When `bun bump` is used the script will prompt to push into GitHub at the end, but if there are any pending changes it will ask you if you want to pull them first and let you know if there were conflicts while pushing, Otherwise it will use the bump message to commit a detailed commit into GitHub

### Version 1.3.8 - Fixed Docs

- **Moved JSDocs**: The docs were moved to the correct place and should appear properly now on JSR

### Version 1.3.7 - Added JSDocs

- **First Docs**: Added an extensive JSDocs for the main package function

### Version 1.3.6 - Fixed linting and added default export

- **Deno Lint and Default Export**: Fixed linting issues and added support for packages and cli at the same time

### Version 1.3.5 - Fixed ESBuild Dependency

- **Fixed Project Setup**: ESBuild was causing an unexpected issue when running for the first time, Notes were added.

### Version 1.3.4 - README File Optimization

- **Better Instructions**: A well-structured README file provides users with easy-to-follow instructions, reducing the likelihood of confusion, frustration, and support requests.

### Version 1.3.3 - Enhanced Readme and Minor Improvements

- **Improved readability and documentation**: Refactored README for better structure, added clear section headings, and reorganized content for easier navigation.

### Version 1.3.2 - Improved Command and Readme

- **Simplify usage and documentation**: Replaced lengthy command with concise alternative and revamped readme for enhanced user experience and clarity.

### Version 1.3.1 - Improved Version Bumper

- **Enhanced version bumping system**: Implemented a user-interactive auto bump system that requests confirmation before bumping the minor or major version. Added feature to input brief and secondary descriptions of changes for the README.md file.

### Version 1.3.0 - Version Bump Script for Contributors

- **Added Version Bump Script**: Implemented a simple script to streamline version bumping across multiple files, improving development efficiency.

### Version 1.2.9 - Enhanced Roadmap and Fixed Bugs

- **Preparing for the Future**: Added more planned features for upcoming versions to enhance the project's roadmap.
- **Resolved GitHub Programming Language Misidentification**: Addressed an issue where GitHub falsely detected the project as 100% JavaScript due to the initial lines of code lacking TypeScript definitions. This was resolved by renaming `index.ts` and modifying the code to include TypeScript types within the first seven lines, ensuring accurate language detection.

### Version 1.2.8 - NPX Preparation

- **NPX Execution Preparation**: Preparing the package for seamless execution via NPX, Added a `bin` value in the `package.json` file.

### Version 1.2.7 - Enhanced Documentation and NPX Preparation

- **Added Informative Notes**: Included detailed notes to enhance user understanding and improve overall documentation quality.
- **NPX Execution Preparation**: Made necessary adjustments to prepare the package for seamless execution via NPX, enhancing usability and accessibility.

### Version 1.2.6 - Additional Typo Fixes

- **Corrected Typos**: Identified and corrected minor typos.

### Version 1.2.5 - Additional README Polish

- **README Refinements**: Implemented additional polish to the README, ensuring clarity and concision in its content.

### Version 1.2.4 - Typo Fixes and README Polish

- **Corrected Typos**: Identified and corrected minor typographical errors throughout the README to maintain a professional tone and presentation.

### Version 1.2.3 - Enhanced README Description

- **Refined README Overview**: Improved the readability of the README's overview section by clarifying key points and ensuring grammatical accuracy.

### Version 1.2.2 - Updated README Format

- **Improved Overview Readability**: Enhanced the grammar and clarity of the overview section in the README with accurate information.

### Version 1.2.1 - Added Project Navigation Instructions

- **Project Navigation**: Added instructions for users to navigate to the newly created project directory before running the installation and development commands, ensuring they operate within the correct context.

### Version 1.2.0 - Corrected README Formatting

- **Lines Removed**: Removed trailing lines from the README. 

### Version 1.1.9 - Updated README Format

- **Improved Changelog Readability**: Enhanced the grammar and clarity of the changelog section in the README for easier understanding.

### Version 1.1.8 - Enhanced Feature Descriptions

- **Detailed Features**: Added comprehensive descriptions for all key features, giving a more detailed overview of each.

### Version 1.1.7 - Integrated GitHub Actions

- **Automation Boost**: Introduced GitHub Actions to automate the build and improve the JSR score through enhanced provenance tracking.

### Version 1.1.6 - Updated Key Features in README

- **Up-to-Date Information**: Refined the README by adding accurate and up-to-date descriptions of the tool's core features.

### Version 1.1.5 - Corrected README Typos

- **Typo Fixes**: Addressed minor typos in the README, ensuring the documentation reads more smoothly.

### Version 1.1.4 - Optimized Update Mechanism

- **Improved Installation**: Introduced an additional argument to the installation instructions to guarantee timely updates of the tool.

### Version 1.1.3 - Path Bug Fix

- **Resolved Path Issues**: Fixed a bug related to the relative path in `package.json` creation for newly generated projects.

### Version 1.1.2 - Fixed Subfolder Creation Issue

- **Subfolder Bug Fix**: Corrected an error that occurred when using a custom absolute path, ensuring subfolders are created correctly.

### Version 1.1.1 - Resolved Absolute Path Bug

- **Bug Squashing**: Fixed the 'ENOENT: No such file or directory' error that occurred when creating new projects with custom absolute paths.

### Version 1.1.0 - Completed README

- **Learning Milestone**: Finished understanding JSR and applied it to finalize the README structure.

### Version 1.0.9 - Corrected Minor Typos

- **Cleaned Up Documentation**: Addressed small typos to make the README file more professional and readable.

### Version 1.0.8 - Enhanced Documentation

- **Batteries Included**: Improved the README by triple-checking installation steps and adding a clearer "batteries-included" description.

### Version 1.0.7 - Shortened Usage Commands

- **User-Friendly Commands**: Streamlined the usage instructions by reducing the length of the command, making it easier to run.

### Version 1.0.6 - Refined Installation Instructions

- **Cross-Runtime Support**: Updated the README to better reflect the cross-runtime nature of JSR, ensuring compatibility across environments.

### Version 1.0.5 - Global JSR Compatibility

- **Initial Configuration**: Made the package globally compatible by adding the essential initial configurations to the `package.json` file.

### Version 1.0.4 - Established Contribution Guidelines

- **Community Standards**: Outlined clear guidelines for contributing, including code style, commit messages, and PR labeling for better project collaboration.

### Version 1.0.3 - Documentation Improvements

- **Expanded Details**: Enhanced the documentation to better inform contributors and new users on how to get started and contribute to the project.

### Version 1.0.2 - README Expansion

- **Comprehensive Overview**: Expanded the README file to provide a thorough overview of the project's goals and features.

### Version 1.0.1 - Initial README Release

- **Project Documentation**: Created the initial README to provide basic information about the project for users and contributors.

### Version 1.0.0

*Initial Release*

Note: Since this is the first version of the changelog, there are no previous versions to report on. Future updates will include detailed information about changes, bug fixes, and new features.
