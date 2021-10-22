# Hackerrank-Automation
Application for automating the website to add a moderator in contests using user given credentials.

# Hackerrank-Automation

This application performs automation on hackerrank website ,which uses user credentials i.e username and password(existing account) . Then the program rendered itself on each page until it foundc the all contests list and then  it added a moderator in each contest on each page.

### Why Automation

Automation reduces time, effort and cost, whilst reducing manual errors, giving your business more time to focus on your primary objectives. Repetitive tasks can be completed faster. Automating processes ensures high quality results as each task is performed identically, without human error.

### Purpose

The purpose of this project is to:-

-> To manage the exciting contest on the user account.

-> To add the moderator to each contest.

-> Each page consists of 10 contests , so I have to manage every contest on every page till the end.

-> Moderator should be an exciting user and the program has to type it's username then add it to the contest.

-> Improve process control and significantly reduce lead times compared to outsourcing or going overseas.

### Requirements
- Download and install VS-code
- Download and install node.js

- Install Minimist :- To process input arguments. 

`npm i minimist`

- Install puppeteer :- To perform automation

`npm install puppeteer`

## Language Used

- JavaScript was used as it offers efficiency with its well built and structured patterns and functions, making the script more compact.
- Node.js as it allows you to run JavaScript on the server.It opens a file on the server and returns the content to the client.

Create a `config.json` file.
-
- It consists of the username and password of the user who want to manage contest .

- It also consists of moderator information whom the user wants to add as the moderator in the contests . 

## Procedure 

| Steps             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Require | Require install libraries |
| Read source | Create JS-object-notation & read config.json file|
| Parse JSON | Create a JS-object and manipulate the data|
| Function | create async function to run the program|
| Browser | Use puppeteer to launch browser|
| Tab | Get and open one tab for process|
| Url | Fetch url from input and goto page url|
|Login1 |  wait and then click on login on page1|
|Login2 |  wait and then click on login on page2|
|Type userid | Read user id from configJSON & type in input-tag|
|Type password| Read password from configJSON & type in input-tag|
|Click Login | To login in user account |
|Click COMPETE | Open compete section|
|Manage Contest |Click on Manage Contest|
|Pages length| Perform below steps till pages length|
|All contest | Collect all contest url in array|
|Url loop| Use it to save moderator in each contest|
|New Tab| Open new tab for moderators|
|Moderator| Add moderator in each contest|
|Close Tab| Close new tab |
|Last Page |Program stops after automation completed|
## Project Process

* Require minimist , puppeteer , fs .
- Read config.json file for username , password and moderator information.
- Parse the read information for manipulation.
- Create a function to open the browser using the puppeteer library.
- Now open all pages on one tab .
- Goto given input url i.e https://www.hackerrank.com
- Wait and then click on login on page1
- wait and then click on login on page2
- Type user-id then password in input tags.
- Click Login , to open the user account.
- Click on the complete section in the navbar .
- Click on the manage contest section on the right side on the contests page.
- Find number of pages then run a loop on each page till pages length.
- In this page's loop call function to handle all contests.
- Create a function to handle all contests of a page.
- Fetch all urls of the contest and push in an array.
- Now open new tab to add moderator in each contest
- Then close the tab and open the next contest on the new tab .
- Create a function to save the moderator.
- Click the moderator section in the contest then type in the moderator information input tag.
- Press enter to add the moderator.
- When all contests are updated with the moderator , the program will stop . 

## Run On Terminal  
`node .\Hackerrank_Automation\ --url=https://www.hackerrank.com --config=config.json`
-

## FAQ

#### Quetion 1 Can we add more than one moderator?
## FAQ

#### Question 1 Can we add more than one moderator?

Answer Yes, by using a loop on a javascript object .

#### Question 2 We have to use puppeteer only ?

Answer For this program yes but you can any npm library for automation

#### Question 3 What is the use of headless in puppeteer.launch?
Answer To see invoked process on screen 


  
