const fs = require("fs");
const stringSimilarity = require("string-similarity");
const levenshtein = require("fast-levenshtein");
const path = require('path');

(async () => {
    fs.readdir(__dirname, (err, files) => {
        let wordsJson = [];
        files.forEach(file => {
            if (file != 'index.js' && file != 'WangLu.txt') {
                const words = fs.readFileSync(`${__dirname}/${file}`, 'utf8').split('\n').map(line => line.replace(/^\d+,\s*/, '').replace('\r', ''));
                let category = '';

                const prefixMap = {
                    '3-': 'SpecialNouns',
                    '4-': 'Adjective',
                    '5-': 'SwallowedSound',
                    '11-': 'Comprehensive',
                };

                const fileName = file.replace('.txt', '');

                for (const prefix in prefixMap) {
                    if (fileName.includes(prefix)) {
                        category = prefixMap[prefix];
                        break;
                    }
                }

                words.forEach(word => wordsJson.push({ type: `WangLu/${category}/${fileName}`, en: word }));
            }
        })

        const minifiedJson = JSON.stringify(wordsJson);
        fs.writeFile('WangLu.json', minifiedJson, 'utf8', (err) => {
            if (err) {
                console.error('寫入錯誤:', err);
            } else {
                console.log('文件已成功寫入');
            }
        });
    });
})();