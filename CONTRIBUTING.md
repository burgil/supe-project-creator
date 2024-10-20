
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
4.  **Lint & Bump**: Bump the version using `deno run bump` and lint the project with `deno lint` to find important issues.
5.  **Submit a PR**: Submit a pull request with your changes.

I appreciate your contributions and look forward to hearing from you!

**Bump Version Script**
---------------

As a contributor to this project, you may need to update the version number of your own fork or local copy. The following steps outline how to do so.

The `bump.ts` script is executed by ~~either `bun`~~ or `deno` to increment the version number of a project, by updating the relevant files such as `deno.json`, `README.md`, `jsr.json` and etc.

*Automations. Algorithms. Everywhere.*

![Bump Version Script](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot1.png?raw=true)

**Inspecting the Final Commit of the Automation Script:**
---------------

The following screenshots demonstrate the changes made by the version bump script:

![Bump Version Script Commit Example - README.md](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot2.png?raw=true) ![Bump Version Script Commit Example - index.ts](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot3.png?raw=true) ![Bump Version Script Commit Example - jsr.json](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot4.png?raw=true) ![Bump Version Script Commit Example - package.json](https://github.com/burgil/burgil/blob/main/public/version-bump-script-screenshots/version-bump-script-screenshot5.png?raw=true)

**Running the Bump Version Script**
---------------

To run the bump version script in your own local environment with `deno`, use the following command:

```bash
deno run bump
```
