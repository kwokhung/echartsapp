ionic start echartsapp tabs

ionic g page chart1 --no-module
ionic g page chart2 --no-module
ionic g page chart3 --no-module
ionic g page chart4 --no-module
ionic g page chart5 --no-module
ionic g page chart6 --no-module

1. Init Repo (VSCode)

2. Create Repo (GitHub REST API)
-> curl -u 'kwokhung' https://api.github.com/user/repos -d '{"name":"echartsapp"}'

3. Remote Add Origin
-> git remote add origin https://github.com/kwokhung/echartsapp.git

4. Push Origin Master
-> git push -u origin master

ionic serve

or

ionic cordova run android