const {exec} = require('child_process');
const ExtensionIdentifiers = require('./vscode-extension.json');

const VSCODE_INSTALL_EXTENSION_SCRIPT = 'code --install-extension';

for (const [extension, identifier] of Object.entries(ExtensionIdentifiers)) {
  exec(`${VSCODE_INSTALL_EXTENSION_SCRIPT} ${identifier}`, (err, stdout) => {
    if (err) {
      console.log(err);
    }

    console.log(`🚀 ${extension} 🚀`);
    console.log(stdout);
  });
}
