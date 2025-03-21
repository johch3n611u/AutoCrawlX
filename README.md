# AutoCrawlX

## Update

* 2025/03/21：Firefox 0.36.0 [geckodriver](https://github.com/mozilla/geckodriver/releases)

## Demand

1. I want to create a simple script to scrape the popularity of front-end frameworks on major forums and job boards daily or monthly. This will help me determine which direction to take for side-projects, increasing my chances of moving to Australia in three years.
2. Monitor the National Development Council (NDC) economic indicators and track the price movements of ETFs like 0050 and 0056 or US stocks such as VIX and QQQ. This isn't a high priority for now, but I might work on it later if there's an opportunity.

## [Technology Stack Selection](https://www.zhihu.com/question/23643061) PHP，Python、Node.js

The Zhihu discussion thread provides detailed insights, so if more specific requirements arise later, I can refer to it for further information. For now, plain Node.js is sufficient as it allows me to run the project without installing a new development environment on my machine.

## Manual Query Example

|-|-|-|
|-|-|-|
|技能|Seek|104|
|java|7,518|5701|
|python|6,555|6277|
|c#|5,153|5494|
|php|3,787|6209|
|react|3,579|1453|
|angular|3,186|965|
|angularjs|906|448|
|vue|583|1486|
|ruby|290|340|
|Golang|228|459|
|ruby on rails|99|2996|
|front end developer|4,128|||
|前端工程師||3416|
|back end developer|565||
|後端工程師||3437|
|full stack developer|2,177|||
|全端工程師||17916||

## Development Timeline

https://www.npmjs.com/package/google-spreadsheet

> 2023 / 07 / 31

1. Encountered browser version incompatibility for the first time – [The frustrating version management of Chrome Browser and Driver](https://vocus.cc/article/620e7e14fd897800015b1643).
2. The compatibility and security issues related to version management were too complex, so I opted for Firefox for a quick resolution.

> 2023 / 07 / 02

1. I tried adding web scraping for Leju to track real estate listings of interest.
2. Attempted to scrape video blob files from an educational website.
   * [WebAPIs - Blob](https://ithelp.ithome.com.tw/articles/10246325)
   * [What is a Blob URL and Why is it Used？](https://stackoverflow.com/questions/30864573/what-is-a-blob-url-and-why-it-is-used)
   * [How to Download Videos with Blob URLs？](https://www.alphr.com/download-video-blob-url/)
   * [github repo hahow-video-downloader](https://github.com/techmovie/hahow-video-downloader)

> 2023 / 05 / 26

![image](https://github.com/johch3n611u/Side-Project-Try-Some-Spider/assets/46659635/21c783d2-c486-4ce2-b78b-21a33b8a3558)

1. Added a LINE bot to scrape and regularly notify major stock indices.
2. Set up ASUS BIOS for scheduled auto power-on.
3. Auto-start a batch file (.bat) via `shell: startup` (Windows + R).
4. Use `compmgmt.msc` (Windows + R) (Windows Task Scheduler) to trigger a .bat file for web scraping.
5. [Google App Script to line Notify](https://github.com/dang113108/591_rent)
6. [GAS Alarm Trigger Mechanism](https://hackmd.io/@ugm/rJiUa4WsH)
7. Google Sheets Operations with Google Apps Script (GAS) [https://developers.google.com/apps-script/reference/spreadsheet/sheet?hl=zh-tw#getrowgrouprowindex,-groupdepth](https://developers.google.com/apps-script/reference/spreadsheet/sheet?hl=zh-tw#getrowgrouprowindex,-groupdepth)
5. [Google App Script to discord Notify](https://stackoverflow.com/questions/47639463/send-message-to-discord-via-google-apps-script)
6. [useServiceAccountAuth open Google Sheet auth](https://ithelp.ithome.com.tw/articles/10234325)
7. Added auto punch time card
7. [Taipei City Government Administrative Office Work Calendar](https://data.gov.tw/dataset/145708)
8. Removing shell:startup Auto-Start and Creating a Cleanup Script (clear.bat) pause

> 2023 / 05 / 03

![image](https://github.com/johch3n611u/Side-Project-Try-Some-Spider/assets/46659635/aefe8a5b-55b5-4bcf-ad7f-d38d0b04d413)

1. chrome://settings/help
2. http://chromedriver.storage.googleapis.com/index.html
3. https://chromedriver.chromium.org/downloads
4. node index.js used node run.
5. dotenv：Quickly Setting Up Environment Variables – Recommended Packages
6. [selenium-webdriver: Error: chrome.setDefaultService is not a function](https://stackoverflow.com/questions/72993126/selenium-webdriver-error-chrome-setdefaultservice-is-not-a-function)
7. [ERROR:page_load_metrics_update_dispatcher.cc](https://stackoverflow.com/questions/75830184/errorpage-load-metrics-update-dispatcher-cc194-invalid-first-paint-error-usi)
8. https://blog.csdn.net/weixin_45292658/article/details/108150531
9. https://ithelp.ithome.com.tw/m/articles/10244446
10. https://snyk.io/advisor/python/selenium/functions/selenium.webdriver.ChromeOptions
11. https://github.com/dean9703111/ithelp_30days/tree/master/day29
12. [Add options to selenium chrome browser using nodejs](https://stackoverflow.com/questions/72839494/add-options-to-selenium-chrome-browser-using-nodejs)
13. [google-spreadsheet](https://ithelp.ithome.com.tw/m/articles/10234325)：npm Google Sheet Wrapped in a layer but hasn't been updated for a long time.
14. [googleapis](https://github.com/dean9703111/ithelp_30days/blob/master/day29/tools/google_sheets/index.js)：A bit more complex and requires some initial setup, but it receives longer update cycles and has Google’s involvement.
15. https://github.com/theoephraim/node-google-spreadsheet

> 2023 / 04 / 30

Previously, due to being busy and the lack of urgency, this task was always performed manually. Recently, I came across a new article from Big Boy [第一次考爬蟲接案 | Web Scraping | 好賺嗎？](https://www.youtube.com/watch?v=PWAjaEeaaMM&ab_channel=BigBoyCanCode)， It reminded me of this project again, and this time I plan to use Google Sheets along with Google Apps Script.

`It took me two days to realize that GAS encountered Google policy restrictions and couldn't run browser automation libraries, making it unable to parse SPAs. As a result, only basic web scraping was possible, and this solution couldn't be continued.`

[( stackoverflow ) browser-automation-at-google-apps-scripts](https://stackoverflow.com/questions/75664595/browser-automation-at-google-apps-scripts)

[cheerio](https://www.wfublog.com/2019/11/google-apps-script-parse-html-xml-cheerio.html)： A library similar to jQuery, used for post-processing scraped data.

Continuing with other solutions, I decided to run this project using selenium-webdriver in Node.js. Since I primarily work as a full-stack developer and am more familiar with Node.js aside from C#, this architecture allows me to develop efficiently without setting up additional environments or learning a new language.

Ref [selenium-webdriver：爬蟲起手式，帶你認識所見即所得的爬蟲工具](https://ithelp.ithome.com.tw/m/articles/10241791)

---

> 2021 / 10 / 07

It's hard to believe that as an IT professional, I didn't start working with web scraping until 1.5 years into my career.

From computer networks → local area networks (LANs) → the internet → the World Wide Web → browsers → search engines → web crawlers.

From 3G / Bluetooth / WiFi / NFC / RFID / 4G / 5G—

This rapid evolution of hardware ecosystems has laid the foundation for software advancements, enabling the transition to cloud computing (Web) and mobile applications (Mobile).

With the continuous emergence of new technologies—AI, AAI, IoT, big data, and blockchain—the ultimate goal remains the same: applying these innovations to solve real-world needs.

Sorry for going off-topic; let's get back to the main point.
