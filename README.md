# Pubt
专注部署发布到测试和生产环境程序脚本

> 特点: 专注vuejs开发，基础源目录为dist，部署输出目录release

[English Document](https://github.com/PolanZ/pubt/blob/master/readme_en.md)

### 局部安装和用法

```
npm install pubt -D
```

用法

``` bash
# init 、 初始配置
./node_modules/.bin/pubt --init

# test 部署测试环境
./node_modules/.bin/pubt test --inpath [path] --outpant [path]
# 默认跑的是： test -n dist -o release/test

# prod 部署生产环境
./node_modules/.bin/pubt prod --inpath [path] --outpant [path]
# 默认跑的是： prod -n dist -o release/prod

```


### 全局安装和用法

```
npm install pubt -g
```

用法

``` bash
# init 、 初始配置
pubt --init

# test 部署测试环境
pubt test  # 默认： pubt test -n dist -o release/test

# prod 部署生产环境
pubt prod  # 默认： pubt test -n dist -o release/prod

```

### 配置文件（示例）

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

### 怎么配置使用？

利用的是[```handlebars```](https://github.com/wycats/handlebars.js)格式替换，比如你配置关键字是```API_ROOT```，那么你api代码的应该是```{{ API_ROOT }}```

代码字段和配置文件里的关键字一一相对应替换

例如对应配置文件示例：
```
const apiUrl = process.env.NODE_ENV === 'production' ? '{{ API_RROT }}' : 'http://172.xx.xx.xxx:8080/'
```



### Windows 建议

````
./node_modules/pubt/bin/pubt
````


### License

[MIT](http://opensource.org/licenses/MIT)