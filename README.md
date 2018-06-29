# Pubt
专注部署发布到测试和生产环境程序脚本

> 特点: 专注vuejs开发，基础源目录为dist，部署输出目录release

[English Docuemnt](https://github.com/PolanZ/pubt/blob/master/readme_en.md)

### 局部安装和用法

```
npm install pubt -D
```

用法

``` bash
# init 、 初始配置
./node_modules/.bin/pubt --init

# test 部署测试环境
# 默认跑的是： test -n dist -o release/test
./node_modules/.bin/pubt test --inpath [path] --outpant [path]

# prod 部署生产环境
# 默认跑的是： prod -n dist -o release/prod
./node_modules/.bin/pubt prod --inpath [path] --outpant [path]

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

### Windows 建议

````
./node_modules/pubt/bin/pubt
````


### License

[MIT](http://opensource.org/licenses/MIT)