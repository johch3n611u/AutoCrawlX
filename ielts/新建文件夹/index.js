const fs = require("fs");
const stringSimilarity = require("string-similarity");
const levenshtein = require("fast-levenshtein");

(async () => {
    fs.readdir(__dirname, (err, files) => {
        const result = [];
        files.forEach(file => {
            if (file != 'index.js') {
                const words = fs.readFileSync(`${__dirname}/${file}`, 'utf8').split('\n').map(line => line.replace(/^\d+,\s*/, '').replace('\r', ''));
                words.forEach(line => {
                    // 使用正則表達式解析每行
                    const [en, cn, enSentence, cnSentence] = line.split(',').map(s => s.trim());

                    // 創建 b 格式的物件
                    const entry = {
                        cn: [cn],
                        en: en,
                        sentences: [
                            {
                                en: enSentence,
                                cn: cnSentence,
                            }
                        ]
                    };

                    result.push(entry);
                });
            }
        })

        const minifiedJson = JSON.stringify(result);
        fs.writeFile('WangLu.json', minifiedJson, 'utf8', (err) => {
            if (err) {
                console.error('寫入錯誤:', err);
            } else {
                console.log('文件已成功寫入');
            }
        });
    });
})();

