const { GoogleSpreadsheet } = require('google-spreadsheet');
const dayjs = require('dayjs');
var fs = require('fs');

(async () => {
    const driver = createClient();
    let weapons = [];
    weapons = [...await getPageTarget(driver, 'ar')];
    weapons = [...weapons, ...await getPageTarget(driver, 'dmr')];
    weapons = [...weapons, ...await getPageTarget(driver, 'sr')];
    weapons = [...weapons, ...await getPageTarget(driver, 'smg')];
    weapons = [...weapons, ...await getPageTarget(driver, 'lmg')];
    weapons = [...weapons, ...await getPageTarget(driver, 'shotgun')];
    weapons = [...weapons, ...await getPageTarget(driver, 'handgun')];
    weapons = [...weapons, ...await getPageTarget(driver, 'melee')];
    weapons = [...weapons, ...await getPageTarget(driver, 'charms')];
    weapons = [...weapons, ...await getPageTarget(driver, 'misc')];

    // // **整理成物件，以 style 分組**
    // const groupedItems = new Map();
    // weapons.forEach(weapon => {
    //     if (!groupedItems.has(weapon.style)) {
    //         groupedItems.set(weapon.style, []);
    //     }
    //     groupedItems.get(weapon.style).push({type: weapon.type, price: weapon.price, name: weapon.name });
    // });

    // // **輸出結果**
    // const results = Array.from(groupedItems, ([style, items]) => ({style, items}));

    weapons.sort((a, b) => a.price - b.price);

    const jsonString = JSON.stringify(weapons, null, 2); // 格式化 JSON
    // **將 JSON 儲存到檔案**
    fs.writeFileSync("pubgWeapenPrice.json", jsonString, "utf-8");

    driver.quit();
})();

function createClient() {
    const { Builder, By, Key, until, Button } = require('selenium-webdriver');
    // const { Options } = require('selenium-webdriver/chrome.js');
    const { Options } = require('selenium-webdriver/firefox.js');
    const options = new Options();
    //因為FB會有notifications干擾到爬蟲，所以要先把它關閉
    // options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });
    //不加載圖片提高效率
    options.addArguments('blink-settings=imagesEnabled=false');
    //瀏覽器不提供頁面觀看，linux下如果系統是純文字介面不加這條會啓動失敗
    options.addArguments('--headless');
    //這個option可以讓你跟headless時網頁端的console.log說掰掰
    options.addArguments('--log-level=3');
    //使用共享內存RAM，提升爬蟲穩定性
    options.addArguments('--disable-dev-shm-usage');
    //規避部分chrome gpu bug，提升爬蟲穩定性
    options.addArguments('--disable-gpu');
    return new Builder().forBrowser('firefox').withCapabilities(options).build()
}

async function getPageTarget(driver, url, speed = 10) {
    try {
        let res;
        await driver.get(`https://pubgitems.info/weapons/${url}`);
        await driver.sleep((Math.floor(Math.random() * 4) + 3) * speed);
        await driver.getPageSource().then(html => {
            // **正則表達式**
            const regex = /style="--rColor:\s*(#[0-9a-fA-F]{6})[^>]*?>[\s\S]*?<p[^>]*?>[\s\S]*?<small>NT\$<\/small>\s*([\d,\.]+)[\s\S]*?<span[^>]*?>([^<]+)<\/span>/g;

            // **匹配所有符合的內容**
            const matches = [...html.matchAll(regex)];

            // 只在有成功匹配到價格時才加入
            if (matches[2]) {
                // **輸出結果**
                res = matches.map(match => ({
                    type: url,
                    style: match[1],  // 擷取 <span> 的 style 屬性
                    price: parseFloat(match[2].replace(/,/g, "")),  // 去除千分位逗號並轉為數字
                    name: match[3]  // 武器名稱
                }));
            }
        });
        return res;
    } catch (ex) {
        console.log(ex);
    } finally {
    }
}