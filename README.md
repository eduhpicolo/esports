# esports

back
1 - https://nodejs.org/en/download/
node -v
npm -v
2 - on /server -> npm init -y
3 - install -> npm i express
4 - check main main packaje.json path
5 - check start server -> node ...pathserver.js... ctrl+c (close server)
6 - add packaje.json "type": "module"
7 - npm i typescript -D (change to .ts server file)
8 - add package.json scripts: {"build": "tsc",}
9 - run npx tsc --init
10 - check "rootDir": "rootPath", on tsconfig.json
11 - set "outDir": "./build",  on tsconfig.json (typescript build to js)
12 - npm i @type-express -D
13 - npm i ts-node-dev -D (auto restart server)
14 - add package.json scripts: "dev": "tsnd pathFileServer.ts"
15 - delete packaje.json "type": "module"....
15 - npm run build
16 - npm run dev
ctrl+c (close server)

front
1 - cd .. /root
2 - npm create vite@latest
3 - npm i
...
