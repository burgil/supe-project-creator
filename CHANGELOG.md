## Changelog

### Version 1.7.9 - Tested Deno Generated Projects

- **Deno is almost compatible**: The new Deno 2 runtime is almost ready to be used with Supe Project Builder, Added missing info in the help menu about the new runtime CLI option, and completely rewrote the start.ts file for Deno and the hotreload/server.ts for Deno (Applies to newly generated projects)

### Version 1.7.8 - Improved Key Features

- **Last improvements to the README**: The readme key features was improved to better reflect what SCP is all about, Upcoming: V2!

### Version 1.7.7 - Final README touches before V2

- **Readme is now readable**: Finished upgrading the readme, now finally testing the final generated project on both deno and bun, Bun already worked before, And later maybe even node will work.

### Version 1.7.6 - Preparing for V2

- **Reorganized VSCode Workspace, Improved Readme, Simplified Comments**: Some comments were made simple, The readme file readability was improved, and the VSCode workspace now contain all the new files

### Version 1.7.5 - Fixed version not updating in README

- **Deno Bug**: When you run the deno jsr: command it uses a cached version even if many newer versions were launched, to fix it I specify the version inside the installation

### Version 1.7.4 - Updated README

- **Added Links & New Technical Detail**: New links to the changelog, roadmap, contributing, license and code of conduct were added, also rephrased some of the sentences to better reflect what it does

### Version 1.7.3 - Runtime CLI option

- **Specify the runtime via the CLI**: Support for deno is almost complete

### Version 1.7.2 - Removed Example Files

- **Ops**: Removed the example project pushed in the last version

### Version 1.7.1 - Replaced the runtime argument with CLI options

- **Preparing for v2**: The runtime variable was replaced with CLI options

### Version 1.7.0 - Docs Refactor & Runtime Requirement

- **Refactor Documentation and Introduce Mandatory Runtime Option**: The `runtime` variable is no longer optional and must be provided now, The change log was moved to `CHANGELOG.md`, The contributors guidelines were moved to `CONTRIBUTING.md`, The road map was moved to `ROADMAP.md`, README improvements

### Version 1.6.9 - Fixed Installation Command

- **No more outdated versions**: The `deno run jsr:` command was using the old version you have cached and there is no `@latest` flag so the `bump.ts` script will now take care of this

### Version 1.6.8 - Essential Fixes and Enhancements Patch

- **This patch addresses key issues and improves the development experience with enhanced documentation and configuration management**: Fixed "require is not defined", migrated to `deno.json`, improved JSDocs, removed runtime detection, and resolved Deno version bump issue.

### Version 1.6.7 - Optional AI Demo

- **README Adjustments**: The fact you can also have a clean project was not clear enough, I added hints in the README to indicate that the AI Demo, as the name suggest, is optional.

### Version 1.6.6 - Added Deno start script

- **Generated projects now support deno**: The generated projects use to only support bun, after a lot of hard work I'm approaching the final stages in implementing Deno into the project, this time I fixed the generated start.ts file in new projects created with Deno, Completing the loop required to run SCP on Deno, This still needs to be tested carefully so for now please use bun.

### Version 1.6.5 - Reorganized README Sections

- **Improved Section Layout**: Reorganized existing sections in the README to enhance structure and readability

### Version 1.6.4 - Fixed JSR Document Navigation Bug

- **Navigation Issue Resolved**: Corrected a bug in JSR document navigation that misread sections inside Tips, ensuring users can accurately navigate to all relevant sections.

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

### Version 1.5.2 - README Enhancements, and New Test Script

- **Improved README, and introduced a tests.ts script for testing.**: The README has been updated for clearer guidance.

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

- **Version Control Support for the Bump Script**: When `deno run bump` is used the script will prompt to push into GitHub at the end, but if there are any pending changes it will ask you if you want to pull them first and let you know if there were conflicts while pushing, Otherwise it will use the bump message to commit a detailed commit into GitHub

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
