# webpack-react-kickstart
**webpack+react前端开发启动样板器**

**修改自[vesparny/react-kickstart](https://github.com/vesparny/react-kickstart)**

## 特征
* webpack + vanilla hot-module-replacement
* Stateless functional components
* [css-modules](https://github.com/css-modules/css-modules/) + [PostCSS](https://github.com/postcss/postcss)
* basic routing setup with react-router (you most likely need routing in your app)
* [babeljs](https://babeljs.io/)
* unit tests ([ava](https://github.com/sindresorhus/ava) + [sinon](http://sinonjs.org/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom)
* code coverage with [nyc](https://github.com/bcoe/nyc)
* development and production build

## 如何使用

**克隆repository**
```
git clone https://github.com/mahavira/webpack-react-kickstart
```

**安装**
```
npm install
```

**启动本地开发环境**
```
npm start
```

**运行代码测试**
```
npm test
```

**构建生产环境代码**
```
npm run build
```

**运行生产环境**
```
npm run build:start
```

**检测语法标准化(检测语法错误\变量定义规范\代码格式规范\蹩脚语言特性的使用检测)**
```
npm run lint
```

**导出代码覆盖率报告**
```
npm run test:cover
```

## Contributing

PR and issues reporting are always welcome :)

## License

See LICENSE file

## Changelog

See CHANGELOG.md file
