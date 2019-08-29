# senna-test
---
## How to install
1. Install node.js
```
https://nodejs.org
```
2. Open Terminal
3. Install yarn via npm
```
npm install yarn -g
```
4. Go to project
```
cd senna-test
```
5. Install dependency via yarn
```
yarn
```
6. Start server
```
yarn start:dev
```
---
## How to test
You can use swagger API document to test.
Please visit.
```
http://localhost:3000/api
```
Click question you want to test.<br>
Click Try it out.<br>
Edit parameters.<br>
Click Execute.<br>

### Question 1
You can change parameter name.

### Question 2
You can select 'name.csv' file. Locate at root folder.

### Question 3
You can change parameter winningNumber.

### Question 4
You can change parameter winningNumber.

### Question 5
You can run test with this command.
```
yarn test
```

### Question 6 - 8
Click Execute to query.

### Question 9
Click Execute. Downloaded image file will appear at 'bnk-download' folder.

### Question 10
1. Start match and set team name with '/q10/match'
2. Set home team score with '/q10/home'
3. Set away team score with '/q10/away'
4. Get score with '/q10/score'
5. You can finish match with '/q10/end' *note that after finish match you can not set score again util you start next match
