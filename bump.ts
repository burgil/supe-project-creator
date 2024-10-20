import fs from 'node:fs';
import process from "node:process";
import { spawnSync } from 'node:child_process';

const bump_files: {
    [key: string]: {
        search: string;
        replacement: string;
    }[];
} = {
    "index.ts": [{
        search: "const supeVersion = '{currentVersion}'",
        replacement: "const supeVersion = '{newVersion}'",
    }],
    "jsr.json": [{
        search: '"version": "{currentVersion}"',
        replacement: '"version": "{newVersion}"',
    }],
    "deno.json": [{
        search: '"version": "{currentVersion}"',
        replacement: '"version": "{newVersion}"',
    }],
    "README.md": [
        {
            search: '## Changelog',
            replacement: '## Changelog\n\n### Version {newVersion} - {updateTitle}\n\n- **{mainDescription}**: {secondaryDescription}',
        },
        {
            search: '# Supe Project Creator v{currentVersion}',
            replacement: '# Supe Project Creator v{newVersion}',
        },
        {
            search: 'jsr:@supeprojects/supe-project-creator@{currentVersion}',
            replacement: 'jsr:@supeprojects/supe-project-creator@{newVersion}'
        }
    ],
};
const packageJsonPath = './deno.json';
const MAX_PATCH_VERSION = 10;
const MAX_MINOR_VERSION = 10;

function askForConfirmation(question: string, noQuestion = false): Promise<string> {
    return new Promise((resolve) => {
        const askQuestion = () => {
            const questionPrompt = noQuestion ? question : `${question} (y/n):`;
            const answer = prompt(questionPrompt);
            const incorrectAnswer = "Incorrect Answer! Please try again. Press CTRL+C in the terminal to terminate the process.";
            if (noQuestion) {
                if (!answer) {
                    console.error(incorrectAnswer)
                    return askQuestion();
                }
                resolve(answer);
            } else {
                if (answer?.toLowerCase() !== 'y' && answer?.toLowerCase() !== 'n') {
                    console.error(incorrectAnswer)
                    return askQuestion();
                }
                resolve(answer?.toLowerCase() === 'y' ? 'yes' : '');
            }
            // const rl = readline.createInterface({
            //     input: process.stdin,
            //     output: Deno.stdout
            // });
            // rl.question(questionPrompt, (answer) => {
            //     rl.close();
            // });
        };
        askQuestion();
    });
}

async function bumpVersion(currentVersion: string, bumpType = 'auto'): Promise<string> {
    const [major, minor, patch] = currentVersion.split('.').map(Number);
    let newPatch = patch + 1;
    let newMinor = minor;
    let newMajor = major;
    console.log('\x1b[32m%s\x1b[0m', 'Current Version:', currentVersion);
    console.log('\x1b[32m%s\x1b[0m', 'New Version:', `${newMajor}.${newMinor}.${newPatch}`);
    // TODO: Add an option to force specific semantic bump using command line arguments
    switch (bumpType) {
        case 'patch':
            // Increment patch version
            console.log("Force Patch is not implemented yet...")
            break;
        case 'minor':
            // Increment minor version and reset patch
            console.log("Force Patch is not implemented yet...")
            break;
        case 'major':
            // Increment major version and reset minor and patch
            console.log("Force Patch is not implemented yet...")
            break;
        default:
            if (newPatch >= MAX_PATCH_VERSION) {
                console.log('\x1b[34m%s\x1b[0m', 'Proposed Minor Version:', `${newMajor}.${newMinor + 1}.0`);
                const bumpMinor = await askForConfirmation(`Do you want to bump the minor version from ${newMinor} to ${newMinor + 1} (otherwise only the patch will be bumped to ${newPatch})?`);
                if (bumpMinor) {
                    newPatch = 0;
                    newMinor++;
                    if (newMinor >= MAX_MINOR_VERSION) {
                        console.log('\x1b[34m%s\x1b[0m', 'Proposed Major Version:', `${newMajor + 1}.0.${newPatch}`);
                        const bumpMajor = await askForConfirmation(`Do you want to bump the major version from ${newMajor} to ${newMajor + 1}(otherwise only the minor will be bumped to ${newMinor})?`);
                        if (bumpMajor) {
                            newMinor = 0;
                            newMajor++;
                        }
                    }
                }
            }
            break;
    }

    return `${newMajor}.${newMinor}.${newPatch}`;
}

async function gitCommitAndPush(updateTitle: string, mainDescription: string, secondaryDescription: string) {
    console.log('\x1b[34m%s\x1b[0m', 'Checking for remote changes...');
    // Fetch changes from the remote repository
    const fetchResult = spawnSync('git', ['fetch', '--all']);
    if (fetchResult.status !== 0) {
        console.error('Failed to fetch changes from remote repository:', fetchResult.stderr.toString());
        return;
    }
    // Check if there are any changes to pull
    const statusResult = spawnSync('git', ['status', '-sb']);
    if (statusResult.stdout.toString().includes('behind')) {
        console.log('\x1b[34m%s\x1b[0m', 'Changes are available to pull from the remote repository.');
        const pullChanges = await askForConfirmation('Do you want to pull the changes from the remote repository?');
        if (pullChanges) {
            // Pull changes from the remote repository
            const pullResult = spawnSync('git', ['pull']);
            if (pullResult.status !== 0) {
                console.error('Failed to pull changes from remote repository:', pullResult.stderr.toString());
                return;
            }
        } else {
            console.error("You will not be able to push if you don't pull the changes.");
            return;
        }
    }
    // Add all changes
    const addResult = spawnSync('git', ['add', '.']);
    if (addResult.status !== 0) {
        console.error('Failed to add changes:', addResult.stderr.toString());
        return;
    }
    // Commit changes
    const commitMessage = `${updateTitle}\n\n- **${mainDescription}**: ${secondaryDescription}`;
    const commitResult = spawnSync('git', ['commit', '-m', commitMessage]);
    if (commitResult.status !== 0) {
        console.error('Failed to commit changes:', commitResult.stderr.toString());
        return;
    }

    // Push changes to the remote repository
    const pushChanges = await askForConfirmation('Do you want to push the changes to the remote repository?');
    if (pushChanges) {
        const pushResult = spawnSync('git', ['push']);
        if (pushResult.status !== 0) {
            console.error('Failed to push changes to remote repository:', pushResult.stderr.toString());
            return;
        }
        console.log('\x1b[32m%s\x1b[0m', 'Changes pushed to remote repository successfully!');
    } else {
        console.error("Canceled push.");
        return;
    }
}

async function main() {
    let currentVersion: null | string = null;

    try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        currentVersion = packageJson.version;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error reading ${packageJsonPath}: ${error.message}`);
        } else {
            console.error(`Unknown error reading ${packageJsonPath}: ${error}`);
        }
    }

    if (currentVersion === null) {
        console.error('Unable to retrieve current version');
        process.exit(1);
    }

    const newVersion = await bumpVersion(currentVersion);
    console.log('\x1b[32m%s\x1b[0m', 'Final Version:', newVersion);

    const updateTitle = await askForConfirmation('Enter a title for the update:', true);
    const mainDescription = await askForConfirmation('Enter a brief description of the changes:', true);
    const secondaryDescription = await askForConfirmation('Enter a secondary description of the changes:', true);
    for (const filePath in bump_files) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            for (const bump_file of bump_files[filePath]) {
                const replacement = bump_file.replacement
                    .replace('{newVersion}', newVersion)
                    .replace('{updateTitle}', updateTitle || 'UpdateTitle')
                    .replace('{mainDescription}', mainDescription || 'MainDescription')
                    .replace('{secondaryDescription}', secondaryDescription || 'SecondaryDescription');
                const find = bump_file.search.replace('{currentVersion}', currentVersion);
                content = content.replaceAll(find, replacement);
            }
            fs.writeFileSync(filePath, content);
            console.log('\x1b[32m%s\x1b[0m', `Updated version in ${filePath}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error updating version in ${filePath}: ${error.message}`);
            } else {
                console.error(`Unknown error updating version in ${filePath}: ${error}`);
            }
        }
    }
    console.log('\x1b[32m%s\x1b[0m', `Updated version from v${currentVersion} to v${newVersion}`);
    const gitChanges = await askForConfirmation('Do you want to publish the new version to GitHub?');
    if (gitChanges) {
        gitCommitAndPush(updateTitle, mainDescription, secondaryDescription);
    } else {
        console.error("Canceled publish.");
        return;
    }
}

main();