# Pubt
Deployment to the test and production environment program nodejs scripts

> feature: It is mainly used in vuejs development，base srouce path `dist`，output path `release`

[中文文档](https://github.com/PolanZ/pubt/blob/master/README.md)

### Local Install and Usage

```
npm install pubt -D
```

Usage

``` bash
# init  --configuration file generation
./node_modules/.bin/pubt --init

# test --Deployment testing environment
./node_modules/.bin/pubt test --inpath [path] --outpant [path]
# normal: test -n dist -o release/test

# prod --Deployment production environment
./node_modules/.bin/pubt prod --inpath [path] --outpant [path]
# normal: prod -n dist -o release/prod

```


### Global Install and Usage

```
npm install pubt -g
```

Usage

``` bash
# init --configuration file generation
pubt --init

# test --Deployment testing environment
pubt test  # normal: pubt test -n dist -o release/test

# prod --Deployment production environment
pubt prod  # normal: pubt test -n dist -o release/prod

```

### configuration

```bash
module.exports = {
  "test": {
    "API_ROOT": 'ip:port'
  },
  "prod": {
    "API_ROOT": 'ip:port'
  }
}
```

### how to use？

Use The [```handlebars```](https://github.com/wycats/handlebars.js) format replacement，For example, you configure the keyword ```API_ROOT```, 
So your API code should be ```{{ API_ROOT }}```

The code fields and the key words in the configuration file should be replaced one by one.


An example of a corresponding configuration：
```
const apiUrl = process.env.NODE_ENV === 'production' ? '{{ API_RROT }}' : 'http://172.xx.xx.xxx:8080/'
```


### Windows Suggest

````
./node_modules/pubt/bin/pubt
````


### License

[MIT](http://opensource.org/licenses/MIT)