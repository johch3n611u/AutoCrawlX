const fs = require("fs");
const stringSimilarity = require("string-similarity");
const levenshtein = require("fast-levenshtein");

(async () => {

  const scoreData = JSON.parse(fs.readFileSync('scoreData4.json', 'utf8'));
  const scoreDataMap = scoreData.map(data => data.en.toLowerCase());

  // const data = fs.readFileSync(`./OK/538TestWords.txt`, 'utf8'); // Listening179TestWords

  // const wordsArray = data.replace(/\[|\]/g, '').split('\n').map(line => line.replace(/^\d+,\s*/, '').replace('\r', '')).map(x => x.split(',')).map(x => x.map(y => y.trim()));

  // wordsArray.forEach(w => {

  //   w.forEach(ww => {



  //     let a = scoreData.find(s => {

  //       if (s.en == 'subdivide') {
  //         console.log(w, ww, s.en)
  //       }

  //       if (ww.toLowerCase() == s.en.toLowerCase()) {




  //         return true;
  //       } else {
  //         let similarity = stringSimilarity.compareTwoStrings(ww.toLowerCase(), s.en.toLowerCase());

  //         // let levenshteins = levenshtein.get(w.toLowerCase(), s.en.toLowerCase());

  //         if (similarity >= 0.7) {
  //           return true;
  //         } else {
  //           if (ww.includes(" ")) {
  //             const parts = ww.split(" ");
  //             let lock = false;
  //             parts.forEach(p => {
  //               let s2 = stringSimilarity.compareTwoStrings(p.toLowerCase(), ww.toLowerCase());
  //               if (s2 >= 0.8) {
  //                 lock = lock && true;
  //               } else {
  //                 lock = lock && false;
  //               }
  //             })

  //             return lock;
  //           } else {
  //             return false;
  //           }
  //         }
  //       }


  //     });
  //     if (a) {
  //       if (a.en == 'subdivide') {
  //         if (!a.types.includes('538TestWords')) {
  //           console.log(`${ww} / ${a.en} / ${w}`);
  //           let aaaaa = w.filter(aaa => aaa != ww);
  //           a.cn.push(`同義替換 [${aaaaa}]`);
  //           a.types.push(`538TestWords`);
  //         }
  //       }
  //     }

  //   });

  // })


  scoreData.forEach(element => {
    element.types = [];
  });

  const minifiedJson = JSON.stringify(scoreData);
  fs.writeFile('scoreData5.json', minifiedJson, 'utf8', (err) => {
    if (err) {
      console.error('寫入錯誤:', err);
    } else {
      console.log('文件已成功寫入');
    }
  });

  // const folderPath = './WangLu'; // 請替換成你的資料夾路徑
  // let txt = '';
  // fs.readdir(folderPath, (err, files) => {
  //   files.forEach(file => {
  //     const data = fs.readFileSync(`${folderPath}/${file}`, 'utf8');
  //     const wordsArray = data.split('\n').map(line => line.replace(/^\d+,\s*/, '').replace('\r', ''));

  //     wordsArray.forEach(w => {
  //       let a = scoreData.find(s => {

  //         let similarity = stringSimilarity.compareTwoStrings(w.toLowerCase(), s.en.toLowerCase());

  //         // let levenshteins = levenshtein.get(w.toLowerCase(), s.en.toLowerCase());

  //         if (similarity >= 0.7) {
  //           return true;
  //         } else {
  //           if (w.includes(" ")) {
  //             const parts = w.split(" ");
  //             let lock = false;
  //             parts.forEach(p => {
  //               let s2 = stringSimilarity.compareTwoStrings(p.toLowerCase(), w.toLowerCase());
  //               if (s2 >= 0.8) {
  //                 lock = lock && true;
  //               } else {
  //                 lock = lock && false;
  //               }
  //             })

  //             return lock;
  //           } else {
  //             return false;
  //           }
  //         }
  //       })

  //       if (a) {
  //         a.types.push(`WangLu(${file.replace('.txt', '')})`);
  //       }
  //     })
  //   })

  //   const minifiedJson = JSON.stringify(scoreData);
  //   fs.writeFile('scoreData4.json', minifiedJson, 'utf8', (err) => {
  //     if (err) {
  //       console.error('寫入錯誤:', err);
  //     } else {
  //       console.log('文件已成功寫入');
  //     }
  //   });
  // });

















  // //   // 找出 array1 有但 array2 沒有的字串
  //   const difference1 = wordsArray.filter(item => !new Set(scoreDataMap).has(item));
  //   console.log(difference1)

  // scoreData.forEach(element => {
  //   wordsArray.forEach(element2 => {
  //     if (element.en.toLowerCase() == element2.toLowerCase()) {
  //       element.types.push('WangLu807Vocabulary')
  //     } 
  //   })
  // });

  // const minifiedJson = JSON.stringify(scoreData);
  // fs.writeFile('scoreData3.json', minifiedJson, 'utf8', (err) => {
  //   if (err) {
  //     console.error('寫入錯誤:', err);
  //   } else {
  //     console.log('文件已成功寫入');
  //   }
  // });
























  // let similarWords = [];
  // wordsArray.forEach(word1 => {
  //   scoreDataMap.forEach(word2 => {
  //     let w1 = word1.toLowerCase();
  //     let similarity = stringSimilarity.compareTwoStrings(w1, word2);
  //     if (similarity >= threshold) {
  //       similarWords.push({ w1: w1, w2: word2, si: similarity, fo: 'WangLu807Vocabulary' });
  //     }
  //   });
  // });

  // console.log(similarWords)

  // const countMap = new Map();
  // const duplicates = new Set();

  // scoreDataMap.forEach(word => {
  //     countMap.set(word, (countMap.get(word) || 0) + 1);
  //     if (countMap.get(word) > 1) {
  //         duplicates.add(word);
  //     }
  // });

  // console.log([...duplicates]);

  // const similarWords = [];
  // const IeltsVocabularyTipsWord = [];

  // const folderPath = './IeltsVocabularyTips'; // 請替換成你的資料夾路徑
  // let txt = '';
  // fs.readdir(folderPath, (err, files) => {
  //   files.forEach(file => {
  //     const data = fs.readFileSync(`${folderPath}/${file}`, 'utf8');
  //     const wordsArray = data.split('\n').map(line => line.replace(/^\d+,\s*/, '').replace('\r', ''));


  //   })

  //   // 找出 array1 有但 array2 沒有的字串
  //   // const difference1 = IeltsVocabularyTipsWord.filter(item => !new Set(scoreDataMap).has(item));



  //   scoreData.forEach(w => {
  //     let www = similarWords.find(x => x.w1.toLowerCase() == w.en.toLowerCase());
  //     if (www) {
  //       w.types = [];
  //       w.types.push(www.fo.replace('.txt', ''));
  //     } else {
  //       console.log(w.en)
  //       w.types = [];
  //     }
  //   });

  //   const minifiedJson = JSON.stringify(scoreData);
  //   fs.writeFile('scoreData2.json', minifiedJson, 'utf8', (err) => {
  //     if (err) {
  //       console.error('寫入錯誤:', err);
  //     } else {
  //       console.log('文件已成功寫入');
  //     }
  //   });

  //   console.log(scoreData.length)
  // }
  // );















  // const folderPath = './WangLu'; // 請替換成你的資料夾路徑
  // let txt = '';
  // fs.readdir(folderPath, (err, files) => {
  //   if (err) {
  //     console.error('Error reading directory:', err);
  //     return;
  //   }

  //   let txt = [];

  //   files.forEach(file => {
  //     const data = fs.readFileSync(`${folderPath}/${file}`, 'utf8');
  //     const wordsArray = data.split('\n').map(line => line.replace(/^\d+,\s*/, '').replace('\r', ''));

  //     wordsArray.forEach(element => {
  //       if (scoreData.find(x => x.en.toLowerCase().trim() == element.toLowerCase().trim())) {

  //       } else {
  //         if (element != '') {
  //           console.log(`${file} ${element} 沒找到`)
  //           txt.push(element);
  //         }
  //       }
  //     });
  //   });

  //   let aaaa = '';
  //   const aa = [...new Set(txt)]
  //   aa.forEach(a => {
  //     aaaa += `${a}\n`
  //   })

  //   fs.writeFile('179.txt', aaaa, 'utf8', (err) => {
  //     if (err) {
  //       console.error('寫入錯誤:', err);
  //     } else {
  //       console.log('文件已成功寫入');
  //     }
  //   });
  // });


  // files.forEach(file => {

  // });

  // let txt = '';
  // const data = fs.readFileSync(`WangLu807Vocabulary.txt`, 'utf8');
  // // console.log(data)
  // const wordsArray = data.split('\n').map(line => line.replace(/^\d+,\s*/, ''));
  // console.log(wordsArray)

  // wordsArray.forEach(element => {
  //   if (data2.find(x => x.en.toLowerCase() == element.toLowerCase())) {

  //   } else {
  //     console.log(`${element}沒找到`)
  //     txt += `${element}\n`;
  //   }
  // });

  // // 雅思词汇真经
  // fs.writeFile('IeltsVocabularyTips.txt', txt, 'utf8', (err) => {
  //   if (err) {
  //     console.error('寫入錯誤:', err);
  //   } else {
  //     console.log('文件已成功寫入');
  //   }
  // });

  // const wordsArraya = txt.split('\n').map(line => line.replace(/^\d+,\s*/, ''));
  // console.error('wordsArraya', wordsArraya.length);


  // const data = fs.readFileSync(`IeltsVocabularyTips.txt`, 'utf8');
  // const wordsArray = data.split('\n').map(line => line.replace(/^\d+,\s*/, ''));

  // const jsonData = fs.readFileSync('IeltsVocabularyTips.json', 'utf8');
  // const data2 = JSON.parse(jsonData);

  // console.log(wordsArray.length)
  // console.log(Object.values(data2).length)









  // const data = fs.readFileSync(`Listening179TestWords.txt`, 'utf8');
  // const wordsArraya = data.split('\n').map(line => line.replace(/^\d+,\s*/, ''));

  // let aa = [];

  // wordsArraya.forEach(element => {
  //   const b = element.split(',').slice(1).map(str => str.trim().replace('[', '').replace(']', '')).map(str => str.trim());
  //   console.log(b)
  //   aa = [...aa, ...b];
  // });
  // aa = [...new Set(aa)];

  // let txt = '';
  // aa.forEach(element => {
  //   if (scoreData.find(x => x.en.toLowerCase() == element.toLowerCase())) {

  //   } else {
  //     console.log(`${element}沒找到`)
  //     txt += `${element}\n`;
  //   }
  // });

  // const txtl = txt.split('\n').map(line => line.replace(/^\d+,\s*/, ''));
  // console.log(txtl.length)

  // fs.writeFile('179.txt', txt, 'utf8', (err) => {
  //   if (err) {
  //     console.error('寫入錯誤:', err);
  //   } else {
  //     console.log('文件已成功寫入');
  //   }
  // });

})();

