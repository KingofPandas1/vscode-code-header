import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('code-header.insertHeader', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        const document = editor.document;
        const fileName = document.fileName.split(/[/\\]/).pop();
        const date = new Date().toLocaleDateString();

        const header = `// ======================================\n` +
                       `// Author: Dmitriy\n` +
                       `// File: ${fileName}\n` +
                       `// Created: ${date}\n` +
                       `// ======================================\n\n`;

        editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 0), header);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}