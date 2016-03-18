# React课程课后作业

> 作业提交说明：在每一期的目录下新增以自己名字命名的目录，在该目录下提交你的作业，最后提交pull request.

## 第一期第一次课课后作业

### 课后作业
使用webpack搭建一个开发环境，实现以下功能：

1. 可以编译ES6和JSX语法
2. 支持代码热替换
3. 加载并编译CSS/LESS样式文件
4. 支持图片、图标字体加载
5. JS业务代码和第三方代码分开打包
6. 通过插件支持html文件产出

### 参考资料
1. [Webpack配置](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/%E5%A2%9E%E5%BC%BAWebpack%E9%85%8D%E7%BD%AE.html)
2. [webpack](http://webpack.github.io/)

### 课程问题答疑

1.为什么我运行`webpack-dev-server`后在项目里看不到产出的实体文件
我们在练习中实现了代码热更新（HMR），其原理是webpack启动了一个本地webserver（webpack-dev-server），负责处理由webpack生成的静态资源请求。注意webpack-dev-server是把所有资源存储在内存的，所以你会发现在本地没有生成对应的chunk访问却正常。要生产实体文件可以直接执行`webpack`命令即可。
2.使用`webpack.config.babel.js`来命名配置文件行不行
可以，这样的话里面的ES6代码也是使用babel来编译的。不过在入门的时候建议先用ES5语法来写配置文件，直接`webpack.config.js`
3.运行的时候报错解析不了文件怎么办。
按提示的信息，寻找是否有哪个`loader`没有下载下来，或者下载后没有配置正确。
4.区分环境进行打包
通过环境标识来进行，比如代码中设置了NODE_ENV，那么在使用的时候就需要在命令行中设置这个标识，比如NODE_ENV=dev。
5.部分文件不进行编译
noParse和alias的结合使用，可以让你的编译速度加快，减少查找解析的过程。
6.`jsx-loader`和`babel-loader`
这两个loader都可以用来解析React的JSX语法，不过目前使用babel-loader较广泛，因为其功能更全。
7.`file-loader`和`url-loader`
url-loader 是基于 file-loader封装的
8.`webpack-dev-server`通过`devServer`字段配置在`webpack.config.js`
```
devServer: {
	contentBase: 'build',
	progress: true,
	color: true,
	hot: true
}
```

## 第一期第二次课课后作业

准备中....
