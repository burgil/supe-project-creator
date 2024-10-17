# Supe Project Creator

A powerful tool for creating modern web projects with batteries included.

[JSR](https://jsr.io/@supeprojects/supe-project-creator)

> [!WARNING]  
> Deno support is currently untested for this package and not recommended for use at this time. For a stable experience, we recommend using Bun until Deno support is fully implemented and tested.

## Overview

Supe Project Creator is a comprehensive tool designed to help you build modern web applications quickly and efficiently. It generates project templates using **TypeScript**, **HTML**, and **CSS**, with included **hot reloading** for a seamless development workflow. 

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

## Key Features

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

### 6. **Blazing-Fast Performance**
Experience fast startup times and intelligent browser handling that optimizes your workflow, allowing you to focus more on development and less on configuration.

### 7. **Intelligent Development Workflow**
Eliminate unnecessary browser launches and avoid cumbersome manual configurations with an intelligent development tool designed to streamline the entire process.

> [!TIP]
> Wait until v2.0.0 drops!

## Upcoming Features

### Roadmap

We are actively working to enhance Supe Project Creator with new features and learning resources:

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

## Prerequisites

Before executing any scripts, please take a moment to:

1. **Read this entire document** to understand the necessary steps and requirements.
2. **Verify that you have installed** the required dependencies:
	* `bun`
	* `deno 2` (if applicable)
	* `node`
3. **Verify ESBuild Functionality** in Your Environment:
	* Run the command `bunx esbuild --version` to check the installed version. At the time of writing, the expected output is `0.24.0`.
	* You can also check this with `deno`, Run the command `deno npm:esbuild --version`, the expected output is:
	`✅ Granted all env access.`
	`✅ Granted all read access.`
	`✅ Granted all run access.`
	`0.24.0`

By doing so, you will ensure a smooth and successful execution of the scripts.

## Usage

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

If you get any error related to `esbuild` during usage, Try to restart the terminal and try again, To avoid downloading dependencies it uses `bunx` (`NPX` Alternative) to fetch packages like `http-server`, `nodemon` and `esbuild`.

> [!IMPORTANT]
> Supe Project Creator does not require a separate installation step. Simply execute the command above to create a new project instantly. In future releases, it will also be available as a package, allowing you to write custom code that generates projects programmatically.

## Options

To view the available options for Supe Project Creator, run the following command:

```bash
deno jsr:@supeprojects/supe-project-creator --help
```

- `-h`, `--help`: Displays help information.
- `-v`, `--version`: Displays the version number.
- `-n`, `--name <string>`: Sets the project name (default: `"example-project"`).
- `-d`, `--demo`: Creates a demo project (default: `false`).

## Getting Started

After creating a new project using the Supe Project Creator, you will first need to navigate to the newly created project directory before proceeding with the setup:

### For a project created in a specific directory:
```bash
cd "C:\Users\%username%\Desktop\my-supe-project"
```

### For a project created in the current working directory (e.g., AI demo):
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

## Project Structure

Supe Project Creator organizes your project using the following structure:

- `src`: Contains the project's source code (TypeScript).
- `public`: Public-facing files, including `index.html`.
- `hotreload`: Configuration and scripts for hot reloading.

### Recommended Workspace Configuration

To enhance your development experience, we provide a recommended `.code-workspace` file named after your project. This configuration excludes unnecessary files from view, allowing you to focus on your code.

**Opening the Workspace:**

1. Locate the `<project-name>.code-workspace` file in your project directory.
2. Double-click the file to open it in VS Code, or find "Open Workspace" inside VS Code.

**Benefits of Using the Recommended Workspace:**

* Streamlined view: Concentrate on your project's essential files, without clutter from `node_modules` and other irrelevant directories.
* Improved performance: By excluding unnecessary files, you'll experience faster loading times and more efficient search results.

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

## Contributors

- **Burgil**

## Released

- **16 October 2024**

## Contributing and Feedback

We welcome contributions from the community! Whether it's a new feature idea, bug fix, or documentation improvement, we'd love to hear from you.

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

We appreciate your contributions and look forward to hearing from you!

**Bump Version Script**
---------------

As a contributor to this project, you may need to update the version number of your own fork or local copy. The following steps outline how to do so.

The `bump.ts` script is executed by either `bun` or `deno` to increment the version number of a project, by updating the relevant files such as `package.json`.

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

## Changelog

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

## Old Usage

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

### Old Example

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
