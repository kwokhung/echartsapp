ionic start echartsapp tabs

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