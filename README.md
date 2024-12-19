### Installation
```sh
npm i
```

### Works correct:
```sh
nx serve remote
```
```sh
nx serve host
```

### Works incorrect
```sh
nx serve remote
```
```sh
nx build host
```
```sh
node dist/apps/host/server/server.mjs
```