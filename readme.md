# Prerequisite  
- Nodejs
- Appium

## how to use:
run this command to clone  
`wget -O - https://raw.githubusercontent.com/godamri/test-framework/main/setup.sh | bash -s myTest`  
change `mytest` directory name as needed

Start testing mobile app:  
`npm run type:mobile`  

Start testing web app:  
`npm run type:browser`

Start testing API:  
`npm run type:api`

then configure driver setting in `config` directory.

Running test :  
`npm run test`  
`npm run test:ordered` or `npm run test:o`  
Running tagged tests:  
`npm run test:tag @Login @userProfile`

Viewing test report :  
`npm run report` or `npm run r`

apk source: https://github.com/wilberjasonmarlon/-Code-Challenge-WillDom-TMDB-APK/tree/main
