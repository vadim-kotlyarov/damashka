const fs = require('fs-extra')
const dir1 = 'folder01'
const file1 = 'folder01/file.txt'
const dir2 = 'folder02'
const file2 = 'folder02/file.txt'
const dir3 = 'folder03'
const file3 = 'folder03/newFile.txt'

async function manageFs (dir1, file1, dir2, file2, dir3, file3) {
    await fs.ensureDir(dir1);
    await fs.ensureFile(file1);
    await fs.ensureDir(dir2);
    await fs.move(file1, file2);
    await fs.ensureDir(dir3);
    await fs.copy(file2, file3);
    await fs.remove(file2);
    await fs.remove(file3);
    await fs.remove(dir1);
    await fs.remove(dir2);
    await fs.remove(dir3);
    
}
manageFs(dir1, file1, dir2, file2, dir3, file3);
