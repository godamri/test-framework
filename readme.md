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

then configure driver setting in `config` directory.

Running test :  
`npm run test`
Running tagged tests:  
`npm run test:tag @Login @userProfile`

Viewing test report :  
`npm run report`