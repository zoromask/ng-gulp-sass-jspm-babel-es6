Download

git clone https://github.com/zoromask/ng-gulp-sass-jspm-babel-es6.git

## 1.Install Nodejs:
* Download source from https://nodejs.org/
* Extract file tar.gz and install nodejs. How to install file tar.gz (http://askubuntu.com/questions/25961/how-do-i-install-a-tar-gz-or-tar-bz2-file).
* Test: **node** -v (if you install nodejs by sudo apt-get install nodejs, your gulp will not run)

- install all npm and bower dependencies. After run 2 below commands, gulp and other plugins will be downloaded and installed in your project.
```bash
npm install
```
```bash
bower install
```

## 2. Watch files
```bash
gulp
```
- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync

## 3. Build production version
```bash
gulp build
```
- this will process following tasks:
* clean _build folder
* compile SASS files, minify and uncss compiled css
* copy and optimize images
* minify and copy all HTML files into $templateCache
* build index.html
* minify and copy all JS files
* copy fonts
* show build folder size

## 4. Start webserver without watch task
```bash
gulp server
```

## 5. Start webserver from build folder
```bash
gulp server-build
```