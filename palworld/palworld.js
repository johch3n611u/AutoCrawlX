const fs = require("fs");
const csv = require("csv-parser");

(async () => {
  let results1 = [];
  fs.createReadStream("./palworld/passiveSkill.csv")
    .pipe(csv())
    .on("data", (data) => results1.push(data))
    .on("end", () => {
      // 现在您可以访问results数组中的CSV数据
      console.log(results1)

      let test = [];

      results1.forEach((element) => {
        test.push({
          rarity: element.稀有度,
          level: element.品級,
          name: element.名稱,
          effect: element.效果
        });
      })

      // let results = [];
      // fs.readFile("./palworld/palword.json", "utf8", (err, data) => {
      //   // 解析JSON数据
      //   results = JSON.parse(data);
      //   // 现在您可以访问jsonData对象中的数据

      //   results1.forEach((element) => {
      //     let finder = results.find((pal) => pal.name == element.名稱);
      //     if (finder) {
      //       finder.mount = {
      //         type: element.類型,
      //         speed: element.速度,
      //       }
      //     }
      //   });


      // });

      fs.writeFile(
        "./palworld/palword.new.json",
        JSON.stringify(test),
        (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("write operation complete.");
          }
        }
      );
    });

  // const driver = createClient();
  // await driver.get("https://paldb.cc/tw/");
  // await driver.sleep((Math.floor(Math.random() * 4) + 3) * 10);
  // await driver.getPageSource().then((result) => {

  // https://www.entertainment14.net/blog/post/110990942-%E5%B9%BB%E7%8D%B8%E5%B8%95%E9%AD%AF-palworld-%E9%85%8D%E7%A8%AE%E6%95%99%E5%AD%B8-%E9%85%8D%E7%A8%AE%E8%A1%A8%E5%8F%8A%E9%85%8D%E7%A8%AE%E6%A9%9F%E5%88%B6%E8%A9%B3%E8%A7%A3

  // 爬網站
  // const match = result
  //   .split("<table")[1]
  //   .split("</table>")[0]
  //   .match(/<tr.*?>(.*?)<\/tr>/g);

  // let pals = [];
  // match.forEach((element) => {
  //   let pal = {
  //     image: "",
  //     number: "",
  //     name: "",
  //     elements: [],
  //     workskills: [],
  //     drops: [],
  //     latlngs: [],
  //   };

  //   // https://blog.csdn.net/wenxingchen/article/details/125868986
  //   // (?<=A).*?(?=B)
  //   const match1 = element.match(/(?<=data-filter=").*?(?=")/g);
  //   if (match1) {
  //     pal.workskills = match1;

  //     const match2 = element.match(/(?<=<div class="mt-2">).*?(?=<\/div>)/g);
  //     if (match2) {
  //       // 匹配中文字符 /[\u4e00-\u9fff]/g
  //       // 抓取相连的中文字符（即中文词组）
  //       const match3 = match2[0].match(/[\p{Script=Hani}]+/gu);
  //       pal.drops = match3;
  //     }

  //     // https://blog.csdn.net/mm_hello11/article/details/88204152
  //     const match4 = element.match(/<div>(.*?)<\/div>/);
  //     if (match4) {
  //       const match5 = match4[1].match(/[\p{Script=Hani}]+/gu);
  //       pal.name = match5[0];

  //       const match6 = match4[1].match(/\d+/);
  //       pal.number = match6[0];

  //       const match7 = match4[1].match(/(?<=src="\/image\/).*?(?=")/g);
  //       pal.elements = match7;
  //     }

  //     const match8 = element.match(/<td>(.*?)<\/td>/);
  //     if (match8) {
  //         const match9 = match8[1].match(/(?<=src="\/image\/Pal\/Texture\/PalIcon\/Normal\/).*?(?=")/g);
  //         pal.image = match9[0];
  //     }

  //     pals.push(pal);
  //   }
  // });

  // fs.writeFile("palword.json", JSON.stringify(pals), (error) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("write operation complete.");
  //   }
  // });
  // });

  // driver.quit();
})();

function createClient() {
  const { Builder, By, Key, until, Button } = require("selenium-webdriver");
  // const { Options } = require('selenium-webdriver/chrome.js');
  const { Options } = require("selenium-webdriver/firefox.js");
  const options = new Options();
  //因為FB會有notifications干擾到爬蟲，所以要先把它關閉
  // options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });
  //不加載圖片提高效率
  options.addArguments("blink-settings=imagesEnabled=false");
  //瀏覽器不提供頁面觀看，linux下如果系統是純文字介面不加這條會啓動失敗
  options.addArguments("--headless");
  //這個option可以讓你跟headless時網頁端的console.log說掰掰
  options.addArguments("--log-level=3");
  //使用共享內存RAM，提升爬蟲穩定性
  options.addArguments("--disable-dev-shm-usage");
  //規避部分chrome gpu bug，提升爬蟲穩定性
  options.addArguments("--disable-gpu");
  return new Builder().forBrowser("firefox").withCapabilities(options).build();
}
