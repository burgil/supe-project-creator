**Supe Project Creator**
==========================

A powerful tool for creating modern projects with battries included.

**Description**
---------------

Supe Project Creator is a project scaffolding tool that helps you create new projects quickly and efficiently. It sets up a basic project structure and configures hot reloading for a seamless development experience.

**Key Features**
----------------

*   Creates a new project with a basic structure
*   Configures hot reloading for fast and efficient development
*   Supports various options for customizing the project setup
*   Will also supports Deno in next update, in addition to above mentioned runtimes

**Upcoming Features**
--------------------

### Roadmap

The following features are planned for future releases:

*   **Deno Support**: Add support for Deno as a JavaScript runtime environment.
*   **AI Demo Projects**: Expand the project creator to support other types of AI demo projects, including machine learning and natural language processing examples.
*   **Improved Key Features**:
    *   **Enhanced Project Customization**: Allow users to customize project settings, such as dependencies and configurations, more easily.
    *   **Streamlined Project Setup**: Simplify the project setup process, making it faster and more intuitive for users.
    *   **Better Support for Advanced Features**: Improve support for advanced features, such as hot reloading and TypeScript integration.

### Development Status

These features are currently in development and will be released in future versions of the project creator. If you have any feedback or suggestions, please don't hesitate to reach out.

**Usage**
---------

Currently, To use Supe Project Creator, simply run the following commands:

```bash
mkdir supe-project-creator
cd supe-project-creator
bun init
bunx jsr add @supeprojects/supe-project-creator
```

```bash
bun ./node_modules/@supeprojects/supe-project-creator --help
deno ./node_modules/@supeprojects/supe-project-creator --help
node ./node_modules/@supeprojects/supe-project-creator --help
```

* Note:

JSR currently can not work like NPX or BUNX, but might have --global installation soon, please let me know if you found a better way of doing this

In the future it might be possible to reduce the command length into something like: 🤞

```bash
jsx supe-project-creator [options]
```

**Options**
------------

*   `-h`, `--help`: Displays help information
*   `-v`, `--version`: Displays the version number
*   `-n`, `--name <string>`: Sets the project name (default: "example-project")
*   `-d`, `--demo`: Creates a demo project (default: false)

**Example Use Cases**
--------------------

*   Create a new project with a custom name in a specific path:

```bash
bun ./node_modules/@supeprojects/supe-project-creator -n "C:\Users\%username%\Desktop\my-supe-project"
```

*   Create a new project folder with a custom name in the current directory:

```bash
bun ./node_modules/@supeprojects/supe-project-creator -n my-supe-project
```

*   Create a demo project:

```bash
bun ./node_modules/@supeprojects/supe-project-creator --demo --name cat-dog-detector
```

*   Display the help menu:

```bash
bun ./node_modules/@supeprojects/supe-project-creator --help
```

**Getting Started**
-------------------

1.  Install dependencies:

```bash
bun install
```

2.  Start the development server:

```bash
bun start
```

3.  Open your web browser and navigate to <http://localhost:80>

**Project Structure**
---------------------

The project structure is organized into the following directories:

*   `src`: Source code for the project
*   `public`: Publicly accessible files, including the index.html file
*   `hotreload`: Hot reloading configuration and scripts

**License**
----------

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

**Contributing and Feedback**
---------------------------

We welcome contributions and suggestions from the community! If you have an idea for a new feature, a bug fix, or a documentation improvement, we encourage you to share it with us.

### Ways to Contribute

*   **Open Issues**: Check our issue tracker for open issues that need attention. You can filter by labels such as "beginner-friendly" or "feature request".
*   **Pull Requests**: Submit a pull request with your proposed changes. Our team will review and merge them if approved.
*   **Documentation**: Help improve our documentation by submitting updates or new guides.
*   **Community Feedback**: Share your thoughts and feedback on our project in the discussions section or on social media.

### Types of Contributions

*   **Code Contributions**: We welcome code contributions in the form of bug fixes, new features, or performance enhancements.
*   **Design Contributions**: If you have design skills, you can contribute to our project by creating new UI components, updating existing ones, or proposing design changes.
*   **Translation Contributions**: Help us translate our project into different languages by submitting translations.

### Contribution Guidelines

*   **Code Style**: We follow standard code styles for Bun and TypeScript.
*   **Commit Messages**: Use descriptive commit messages that explain the purpose of your changes.
*   **PR Labels**: Use relevant labels for your pull requests to help us categorize and review them.

**Getting Started**
---------------

1.  **Fork the Repository**: Fork our repository to create a copy of the code.
2.  **Create a Branch**: Create a new branch for your changes.
3.  **Make Changes**: Make your changes and commit them.
4.  **Submit a PR**: Submit a pull request with your changes.

We appreciate your contributions and look forward to hearing from you!

**Changelog**
----------

### Versions 1.1.0

#### What's New?

*   **Not released yet**: TODO

#### Changes

*   No code changes were made in this version.

#### Known Issues

*   None reported.

#### Contributors

*   [Burgil]

#### Released

[16 October 2024]

---

### Versions 1.0.1 - 1.1.0

#### What's New?

*   **1.1.0 - Finished README**: Finished learning how JSX works.
*   **1.1.0 - Fixed Typos**: Fixed typos in the README file.
*   **1.0.8 - Improved README**: Improved the README file, triple checked installation steps, added batteries included.
*   **1.0.7 - Reduced usage-command length**: Reduced the length of the usage command.
*   **1.0.6 - Fixed Installation Instructions**: Updated the README file to support the cross-runtime nature of JSX.
*   **1.0.5 - JSR Global Compatibility**: Updated the package.json file with the initial configurations.
*   **1.0.4 - Contribution Guidelines**: Established clear guidelines for code style, commit messages, and PR labels to ensure consistency and quality in contributions.
*   **1.0.3 - Documentation Update**: Enhanced documentation to include information on contributing and getting started with the project.
*   **1.0.2 - Documentation Update**: Updated the README file to provide a comprehensive overview of the project.
*   **1.0.1 - Documentation Update**: Added a README file to provide a comprehensive overview of the project.

#### Changes

*   **Fixed External Project Path Creation**: When project names contain an absolute path the program will crash when trying to create some of the files, this was fixed in the current patch.

#### Known Issues

*   None reported.

#### Contributors

*   [Burgil]

#### Released

[16 October 2024]

---

### Version 1.0.0

*Initial Release*

Note: Since this is the first version of the changelog, there are no previous versions to report on. Future updates will include detailed information about changes, bug fixes, and new features.
