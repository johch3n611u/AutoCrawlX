const fs = require("fs");
const stringSimilarity = require("string-similarity");
const levenshtein = require("fast-levenshtein");

(async () => {
    let i = 0, a = 0;
    const vocabulary = JSON.parse(fs.readFileSync('vocabulary.json', 'utf8'));

    console.log(vocabulary.find(v=>v.types.length != 0))

    // const minifiedJson = JSON.stringify(vocabulary);
    // fs.writeFile(`vocabulary.json`, minifiedJson, 'utf8', (err) => {
    //     if (err) {
    //         console.error('寫入錯誤:', err);
    //     } else {
    //         console.log('文件已成功寫入');
    //     }
    // });

    // const TestWords583 = JSON.parse(fs.readFileSync('538TestWords.json', 'utf8'));
    // const Listening179TestWords = JSON.parse(fs.readFileSync('Listening179TestWords.json', 'utf8'));

    // const IeltsVocabularyTips = JSON.parse(fs.readFileSync('IeltsVocabularyTips.json', 'utf8'));
    // const WangLu = JSON.parse(fs.readFileSync('WangLu.json', 'utf8'));
    // const WangLu807Vocabulary = JSON.parse(fs.readFileSync('WangLu807Vocabulary.json', 'utf8'));

    // TestWords583.forEach(element => {
    //     element.en.forEach(e => {
    //         const a = vocabulary.find(v => v.en.toLowerCase() == e.toLowerCase());
    //         if (a) {
    //             a.cn.push(`同義替換 (${element.en.filter(item => item.toLowerCase() !== e.toLowerCase())})`);
    //             if (a.types == undefined) {
    //                 a.types = [];
    //             }
    //             a.types.push('TestWords583');
    //         }
    //     })
    // });

    // Listening179TestWords.forEach(element => {
    //     element.en.forEach(e => {
    //         const a = vocabulary.find(v => v.en.toLowerCase() == e.trim().toLowerCase());
    //         if (a) {
    //             if (a.types == undefined) {
    //                 a.types = [];
    //             }
    //             a.types.push('Listening179TestWords');
    //         }
    //     })
    // });

    // IeltsVocabularyTips.forEach(element => {
    //     const a = vocabulary.find(v => v.en.toLowerCase() == element.en.trim().toLowerCase());
    //     if (a) {
    //         if (a.types == undefined) {
    //             a.types = [];
    //         }
    //         a.types.push(element.type);
    //     }
    // });

    // WangLu.forEach(element => {
    //     const a = vocabulary.find(v => v.en.toLowerCase() == element.en.trim().toLowerCase());
    //     if (a) {
    //         if (a.types == undefined) {
    //             a.types = [];
    //         }
    //         a.types.push(element.type);
    //     }
    // });

    // WangLu807Vocabulary.forEach(element => {
    //     const a = vocabulary.find(v => v.en.toLowerCase() == element.en.trim().toLowerCase());
    //     if (a) {
    //         if (a.types == undefined) {
    //             a.types = [];
    //         }
    //         a.types.push(element.type);
    //     }
    // });

    // const minifiedJson = JSON.stringify(vocabulary);
    // fs.writeFile(`vocabulary.json`, minifiedJson, 'utf8', (err) => {
    //     if (err) {
    //         console.error('寫入錯誤:', err);
    //     } else {
    //         console.log('文件已成功寫入');
    //     }
    // });

    // words = [... new Set(words.map(w => w.trim()))].map(w => w.trim());

    // console.log(words.length)

    // const duplicates = vocabulary.map(v => v.en).filter((item, index, arr) => arr.indexOf(item) !== index);
    // console.log(duplicates)

    // let i = 0
    // result.forEach(r => {
    //     const minifiedJson = JSON.stringify(result[i]);
    //     fs.writeFile(`${i}.json`, minifiedJson, 'utf8', (err) => {
    //         if (err) {
    //             console.error('寫入錯誤:', err);
    //         } else {
    //             console.log('文件已成功寫入');
    //         }
    //     });
    //     i++;
    // })
})();

