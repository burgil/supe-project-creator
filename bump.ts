import fs from 'node:fs';

const bump_files: {
    [key: string]: {
        search: string;
        replace: string;
    };
} = {
    "index.ts": {
        search: "const supeVersion = 'currentVersion'",
        replace: "const supeVersion = 'newVersion'",
    },
    "jsr.json": {
        search: '"version": "currentVersion"',
        replace: '"version": "newVersion"',
    },
    "package.json": {
        search: '"version": "currentVersion"',
        replace: '"version": "newVersion"',
    },
    "README.md": { // TODO: Ask for required information
        search: '## Changelog',
        replace: '## Changelog\n\n# Version newVersion - mainDescription\n\n- **secondaryDescription**: explainChanges',
    },
};
const packageJsonPath = './package.json';
let currentVersion: null | string = null;
try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    currentVersion = packageJson.version;
} catch (error) {
    if (error instanceof Error) {
        console.error(`Error reading package.json: ${error.message}`);
    } else {
        console.error(`Unknown error reading package.json: ${error}`);
    }
}
if (currentVersion === null) {
    console.error('Unable to retrieve current version');
    process.exit(1);
}

// Add an option to force specific semantic bump
let [major, minor, patch] = currentVersion.split('.').map(Number);
patch++;
if (patch >= 10) {
    // biome-ignore lint/correctness/noConstantCondition: TODO - ask if you want to bump minor version
    if (true) {
        patch = 0;
        minor++;
        if (minor >= 10) {
            // biome-ignore lint/correctness/noConstantCondition: TODO - ask if you want to bump major
            if (true) {
                minor = 0;
                major++;
            }
        }
    }
}
const newVersion = `${major}.${minor}.${patch}`;
for (const filePath in bump_files) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(bump_files[filePath].search.replace('currentVersion', currentVersion), bump_files[filePath].replace.replace('newVersion', newVersion));
        fs.writeFileSync(filePath, content);
        console.log(`Updated version in ${filePath}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error updating version in ${filePath}: ${error.message}`);
        } else {
            console.error(`Unknown error updating version in ${filePath}: ${error}`);
        }
    }
}
console.log(`Updated version from v${currentVersion} to v${newVersion}`);