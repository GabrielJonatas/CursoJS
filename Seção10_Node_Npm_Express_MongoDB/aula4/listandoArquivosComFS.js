const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    const root = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(root);
    walk(files, root);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir,file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if(
            !/\.html/g.test(fileFullPath)
            ) continue;

        console.log(fileFullPath);
    }
}

readdir('C:/CursoJS/');