(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[20],{389:function(n,e,o){"use strict";o.r(e);var t=o(0),s=o.n(t),i=o(122),a=o(125),r=o(24),l=o(390),c=o.n(l),p=o(391),u=o.n(p),f=Object(r.a)(c.a,u.a),h=[{name:"locale",title:Object(r.a)("",""),component:o(392).default,rawText:o(393)}];e.default=Object(i.a)(function(n){return s.a.createElement(a.b,Object.assign({},n,{codes:void 0,source:f,examples:h}))})},390:function(n,e){n.exports="## 安装\n\n通过 npm 安装\n```\n$ npm install shineout\n```\n\n通过 CDN 引用\n```\n<script crossorigin src=\"https://unpkg.com/shineout/dist/shineout.min.js\"><\/script>\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.default.css\" />\n```\n\n## 使用\n``` lang-jsx\nimport { Table } from 'shineout'\n\n<Table />\n```\n\n## 配置\n\n### webpack\n\nnpm 安装的组件有三个目录，'es/'，'lib/'，'css/'，默认的目录是 'lib/'。\n\n- *es* - 目录下是 es6 版本代码，需要调试的开发者可以使用这个版本，需要自行配置 webpack 的 babel-loader 和 less-loader。\n\n- *lib* - 目录下js文件为 es5 版本代码，样式文件保留为 less，需要切换主题的用户可以选择这个版本，需要自行配置 webpack 的 less-loader。\n\n- *css* - 目录下 js 文件为 es5 版本代码，样式文件为 css 格式，不需要配置 webpack。\n\n可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import#readme) 按需加载。\n\n\n### theme 主题\n\n目前内置支持了两套主题，default，和兼容 ant-design 的主题 'antd'（方便两个组件库混用的场景，只是配色接近，交互和接口参数不同）。\n\nnpm 安装的方式可以通过修改 webpack 的 less-loader 配置来切换主题。\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-theme': 'antd'\n    }\n  }\n}\n```\n\nCDN 引用的方式，可以修改引用路径\n```\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.default.css\" />\n// or\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.antd.css\" />\n```\n\n\n### CSS 前缀\n\n默认通过前缀来隔离 css 代码，默认的前缀是 'so'。通常情况下，不需要修改。如果想修改这个值，修改 webpack 的 less-loader 配置\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-prefix': 'your-prefix'\n    }\n  }\n}\n``` \n\n在项目内设置 config\n\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  prefix: 'your-prefix'\n})\n```\n```\n// 或者修改webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      SO_PREFIX: JSON.stringify('your-prefix'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\n如果需要使用 CSS Module，首先修改 webpack 的 css-loader 配置\n```\n{\n  loader: 'css-loader',\n  options: {\n    module: true,\n    localIdentName: '[local]--[hash:base64:5]'\n  }\n}\n```\n\n在应用入口设置 config.cssModule 为 true\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  cssModule: true\n})\n\n```\n```\n// 或者修改 webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n\n## I18N\n\n组件库中部分组件（Datepicker，Select，Modal等）内置了部分文字，暂时为简体中文（zh-CN）和英文（en-US）两组。默认为英文（en-US），可以通过 webpack 的 process.env 切换\n```\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      LOCALE: JSON.stringify('zh-CN'),\n    },\n  }),\n],\n```\n\nCDN 引用的版本可以调用 locale 的 setLocale 方法\n\n```\nimport { setLocale } from 'shineout'\nsetLocale('zh-CN')\n```\n\n其他语言或者部分设置，可以传入一个 Json 数据\n\n```\nsetLocale({ ok: 'yes' })\n```\n\n当前 locale 内容如下:\n\n<example name=\"locale\" />"},391:function(n,e){n.exports="## Install\n\ninstall from npm\n```\n$ npm install shineout\n```\n\nuse tag from a CDN\n```\n<script crossorigin src=\"https://unpkg.com/shineout/dist/shineout.min.js\"><\/script>\n<link rel=\"stylesheet\" href=\"https://unpkg.com/shineout/dist/theme.default.css\" />\n```\n\n\n## Usage\n``` js\nimport { Table } from 'shineout'\n\n<Table />\n```\n\n## Configuration\n\n### theme\n\nCurrently,there are two sets of theme built in, default and the theme 'antd' that is compatible with ant-design(Convenient for the mixing of two component libraries and just the color matching is close, the interaction and interface parameters are different.)\n\nYou can switch topics by modifying the webpack's less-loader configuration.\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-theme': 'antd'\n    }\n  }\n}\n```\n\n### The prefix of css\n\nBy default, the css code is isolated by prefix. The default prefix is 'so' and does not need to modified normally. If you wang to modify this value, modify the less-loader configuration of the webpack.\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-prefix': 'your-prefix'\n    }\n  }\n}\n``` \n\nSet config in the project.\n\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  prefix: 'your-prefix'\n})\n```\n```\n// or modify the process.env of webpack\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      SO_PREFIX: JSON.stringify('your-prefix'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\nIf you need to use the CSS Module, modify the css-loader configuration of the webpack firstly.\n```\n{\n  loader: 'css-loader',\n  options: {\n    module: true,\n    localIdentName: '[local]--[hash:base64:5]'\n  }\n}\n```\n\nSet the config.cssmodule to true at the application entrance\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  cssModule: true\n})\n\n```\n```\n// or modify the process.env of webpack\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n\n## I18N\n\nSome components (Datepicker, Select, Model, etc..) has build in text, default pack is 'es-US', set the webpack process.env to 'zh-CN' changes the language pack to Chinese.\n```\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      LOCALE: JSON.stringify('zh-CN'),\n    },\n  }),\n],\n```\n\nIf you use Shineout form a CDN, you can call the setLocale method of locale.\n\n```\nimport { setLocale } from 'shineout'\nsetLocale('zh-CN')\n```\n\nOther language or part of the set can be passed in a Json data.\n\n```\nsetLocale({ ok: 'yes' })\n```\n\nThe current locale content is as follows:\n\n<example name=\"locale\" />"},392:function(n,e,o){"use strict";o.r(e);var t=o(0),s=o.n(t),i=o(98);e.default=function(){return s.a.createElement("pre",null,JSON.stringify(Object(i.a)(),null,2))}},393:function(n,e){n.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function () {\n  return <pre>{JSON.stringify(getLocale(), null, 2)}</pre>\n}\n"}}]);