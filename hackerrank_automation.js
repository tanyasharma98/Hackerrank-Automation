// npm i puppeteer
// npm i minimist
// node .\Hackerrank_Automation\ --url=https://www.hackerrank.com --config=config.json

let minimist = require('minimist');
let puppeteer = require('puppeteer');
let fs = require('fs');

let args = minimist(process.argv);

let configJSON = fs.readFileSync(args.config,"utf-8");
let configJSO = JSON.parse(configJSON);

async function run(){
    // start the browser
    let browser = await puppeteer.launch({
        headless : false, // To see browser on screen
        args:[
            '--start-maximized' // Full screen
        ],
        defaultViewport: null
    });

    //Get and open the one Tab
    let pages = await browser.pages();
    let page = pages[0];

    // Open the url
    await page.goto(args.url);

    // wait and then click on login on page1
    await page.waitForSelector('a[href="https://www.hackerrank.com/access-account/"]');
    await page.click('a[href="https://www.hackerrank.com/access-account/"]');

    // wait and then click on login on page2
    await page.waitForSelector('a[href="https://www.hackerrank.com/login"]');
    await page.click('a[href="https://www.hackerrank.com/login"]');

    // type userid
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', configJSO.username);

    // type password
    await page.waitForSelector('input[name="password"]');
    await page.type('input[name="password"]',configJSO.password);

    //click Login
    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');

    //click on contest
    await page.waitForSelector('a[href="/contests"]');
    await page.click('a[href="/contests"]');

    //click on manage contest
    await page.waitForSelector('a[href="/administration/contests/"]');
    await page.click('a[href="/administration/contests/"]');

    await page.waitForTimeout(3000);
    // //click on first contest
    // await page.waitForSelector('p.mmT');
    // await page.click('p.mmT');

    await page.waitForTimeout(3000);

    //Open contest in new tab
    await handleAllContestsOfAPage(page, browser);
};

async function handleAllContestsOfAPage(page, browser){
    // find all urls on page 
    await page.waitForSelector('a.backbone.block-center');
    let curls = await page.$$eval('a.backbone.block-center',function(atags){
        let urls=[];

        for (let i = 0; i < atags.length; i++) {
            let url = atags[i].getAttribute("href");
            urls.push(url);
        }
        return urls;
    });
    for(let i=0;i<curls.length;i++){
        let ctab = await browser.newPage();
         await saveModeratorInContest(ctab, args.url + curls[i], configJSO.moderator);
         await ctab.close();
         await page.waitFor(3000);
    }
}

async function saveModeratorInContest(ctab ,url , moderator){
    await ctab.bringToFront();
    await ctab.goto(url);
    await ctab.waitFor(3000);

    //click moderator
    await ctab.waitForSelector('li[data-tab="moderators"]');
    await ctab.click('li[data-tab="moderators"]');
    

    await ctab.waitForTimeout(3000);

    //type in moderator
    await ctab.waitForSelector("input#moderator");
    await ctab.type("input#moderator" , moderator);

    await ctab.waitForTimeout(3000);

    // press enter
    await ctab.keyboard.press("Enter");
}
run();