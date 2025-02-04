const fs = require('fs').promises;

const readFile = async (filePath) => {
    try {
        return await fs.readFile(filePath, 'utf8');
    } catch (err) {
        throw new Error('File not found');
    }
};

const writeFile = async (filePath, content) => {
    try {
        await fs.writeFile(filePath, content, 'utf8');
    } catch (err) {
        throw new Error('Error writing file');
    }
};

module.exports = { readFile, writeFile };
