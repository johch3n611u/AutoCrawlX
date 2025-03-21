const fs = require("fs");
const stringSimilarity = require("string-similarity");
const levenshtein = require("fast-levenshtein");
const path = require('path');

(async () => {
    fs.readdir(__dirname, (err, files) => {
        let wordsJson = [];
        files.forEach(file => {
            if (file != 'index.js') {
                const words = fs.readFileSync(`${__dirname}/${file}`, 'utf8').split('\n').map(line => line.replace(/^\d+,\s*/, '').replace('\r', ''))
                    .map(word => word.split(',').map(w => w.trim().replace(/\[|\]/g, '')).slice(1));
                words.forEach(word => wordsJson.push({ type: `${file.replace('.txt', '')}`, en: word }));
            }
        })

        const minifiedJson = JSON.stringify(wordsJson);
        fs.writeFile(`Listening179TestWords.json`, minifiedJson, 'utf8', (err) => {
            if (err) {
                console.error('寫入錯誤:', err);
            } else {
                console.log('文件已成功寫入');
            }
        });
    });
})();