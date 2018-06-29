# Pubt
专注部署发布到测试和生产环境程序脚本

> 特点: 专注vuejs开发，基础源目录为dist，部署输出目录release


### 安装

```
npm install pubt -D
```
或者全局安装
```
npm install pubt -g
```

### 用法

``` bash
# init 、 初始配置
pubt --init
or 
./node_modules/.bin/pubt --init

# test 部署测试环境
pubt test  # pubt test -n dist -o release/test
or
./node_modules/.bin/pubt test --inpath [path] --outpant [path]

# prod 部署生产环境
pubt prod  # pubt test -n dist -o release/prod
or
./node_modules/.bin/pubt prod --inpath [path] --outpant [path]

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


### License

[MIT](http://opensource.org/licenses/MIT)