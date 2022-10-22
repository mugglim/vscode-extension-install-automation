#!/bin/bash

BASE_DIR=$(dirname "$0")
EXTENSION_IDENTIFIERS=$(cat "${BASE_DIR}/vscode-extension.txt")

for identifier in $EXTENSION_IDENTIFIERS
do
    echo $(code --install-extension $identifier)
done
