(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[34],{119:function(e,n,r){"use strict";function t(e){return e&&e[0].toUpperCase()+e.slice(1)}function s(e,n){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,r){return"\\"===e.charAt(0)?e.slice(1):null===n[r]||void 0===n[r]?"":n[r]});if("function"==typeof e){var r=e(n);return r===n&&"object"==typeof r&&(r=Object.assign({},n)),r}return""}r.d(n,"a",function(){return t}),r.d(n,"b",function(){return s})},150:function(e,n,r){"use strict";var t=r(31),s=r(4),o=r(119),a=r(98),i={skipUndefined:!0},l=function(e){var n="array"===e.type?"array":"string";return Object(o.b)(Object(a.a)("rules.required.".concat(n)),e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.message,r=e.tip;return function(e){return Object(t.b)({required:!0,message:l},Object(t.b)({message:n,tip:r},{message:e},i),i)}},c=r(27),m=function(e){return function(n){var r="";switch(n.type){case"integer":case"number":r="number";break;case"array":r="array";break;default:r="string"}return Object(o.b)(Object(a.a)("rules.length.".concat(e,".").concat(r)),n)}},g={skipUndefined:!0},p={max:m("max"),min:m("min")},f=function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).message;return function(r,s){return"number"!=typeof r?(console.error(new Error('Rule "'.concat(e,'" param expect a number, get ').concat(typeof r))),null):Object(t.b)({message:p[e]},Object(t.b)(Object(c.a)({message:n},e,r),{message:s},g),g)}},d=function(e){var n=e.title?"rules.type":"rules.reg";return Object(o.b)(Object(a.a)(n),e)},b={skipUndefined:!0},h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.message,s=n.tip;return function(n){return Object(t.b)({type:e,message:d},Object(t.b)({message:r,tip:s},{message:n},b),b)}},v={skipUndefined:!0},x=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).message;return function(n,r){return"string"==typeof n||n instanceof RegExp?Object(t.b)({message:Object(a.a)("rules.reg")},Object(t.b)({message:e,regExp:n},{message:r},v),v):(console.error(new Error('Rule "reg" param expect a RegExp object or a string, get '.concat(typeof n))),null)}};r.d(n,"a",function(){return y});var y="RULE_OBJECT",w=["email","integer","number","url","json","hex","rgb","ipv4"],E=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object(s.h)(n))return console.error(new Error("rules expect an object, got ".concat(typeof options))),{};for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(0===o.length)return n;var i=o.shift();return Object.keys(i).forEach(function(e){"function"==typeof i[e]&&(i[e]={func:i[e]})}),e.apply(void 0,[Object(t.b)(n,i)].concat(o))};n.b=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=E.apply(void 0,[{}].concat(n)),a={required:u(o.required),max:f("max",o.max),min:f("min",o.min),regExp:x(o.regExp),type:function(e){return h(e,o.type)},length:function(e,n,r){return[a.min(e,r),a.max(n,r)]},range:function(e,n,r){return[a.min(e,r),a.max(n,r)]}};w.forEach(function(e){a[e]=h(e,o[e]||o.type)});var i=Object.keys(a);return Object.keys(o).forEach(function(e){i.includes(e)||(Object(s.h)(o[e])?a[e]=function(n){return Object.assign({},o[e],{args:n})}:console.error(new Error("Rule ".concat(e," is invalid, expect a function or an object."))))}),Object(t.f)(a).forEach(function(e){e.isInnerValidator=!0}),a.$$type=y,a}},194:function(e,n,r){"use strict";var t=r(5),s=r(6),o=window.console,a=function(){function e(){Object(t.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(s.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=n.map(function(e){return"".concat(function(e){return JSON.stringify(e,function(e,n){return"function"==typeof n?"fn#fn".concat(n.toString(),"fn#fn"):n},2)}(e))});this.current.push(t)}}]),e}();n.a={start:function(){window.console=new a},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=o,e}}},817:function(e,n,r){"use strict";r.r(n);var t=r(0),s=r.n(t),o=r(122),a=r(125),i=r(194),l=r(24),u=r(818),c=r.n(u),m=r(819),g=r.n(m),p=Object(l.a)(c.a,g.a),f=[{name:"locale",title:Object(l.a)("",""),component:r(820).default,rawText:r(821)}];i.a.start(),i.a.setType("custom"),r(822),i.a.setType("max"),r(823),i.a.setType("min"),r(824),i.a.setType("range"),r(825),i.a.setType("regExp"),r(826),i.a.setType("required"),r(827),i.a.setType("type"),r(828);var d=i.a.end(),b={custom:{text:r(829),log:d.custom},max:{text:r(830),log:d.max},min:{text:r(831),log:d.min},range:{text:r(832),log:d.range},regExp:{text:r(833),log:d.regExp},required:{text:r(834),log:d.required},type:{text:r(835),log:d.type}};n.default=Object(o.a)(function(e){return s.a.createElement(a.b,Object.assign({},e,{codes:b,source:p,examples:f}))})},818:function(e,n){e.exports="# Rule 表单校验规则\n\n<br />\n\n<br />\n\nShineout Form 内部定义了一套数据校验机制，在 Form 内的组件上通过 rules 属性进行配置。\n\n```\n<Input rules={[...rule]}>\n```\n\nrules 是一个数组，每一条包含一个以下格式的配置。\n\n## 规则\n\nrule 共有 5 种格式，按优先级分别为：\n\n- 函数：完全由调用者控制，理论上可以做所有校验。\n  ```\n  /**\n   value - 当前组件值\n   formdata - 表单内所有组件值 \n   callback - 结果回调\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // 或者返回 Promise，不需要处理 callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n- 必填：根据 required 属性是否为 true 判断，非必填时不需填 false。\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- 长度：根据 min 或者 max 属性判断。\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- 正则表达式：根据 regExp 来判断，可以是 RegExp 对象或 字符串。\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- 类型：内置了一些常用的正则判断，不满足需求时，可以自定义正则表达式或使用 函数校验。\n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n| 属性 | 类型 | 说明 |\n| --- | --- | --- | --- |\n| required | bool | 是否必填 |\n| min | number | 最小值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| max | number | 最大值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| regExp | string \\| RegExp | 正则表达式 |\n| type | string | 类型校验，可选值为 \\[ 'email', 'json', 'url', 'hex', 'number' ]，不支持的可以自定义 regExp 校验 |\n| message | string | 错误消息。可以使用 '{key}' 符号进行格式化。key 为当前rule的属性。如 {min: 20, message: '最小值为 {min}'}，会格式化为 '最小值为 20'。 |\n\n## Rule\n\n规则的编写比较繁琐，为了简化用户使用，定义了一个Rule函数，生成一个辅助对象，并内置了一些校验规则，供快速开发。\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 初始化\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### 参数\n\nargs 为自定义规则，可为空。\n每个参数为一个对象，key 为返回的 函数名称。每个 value 有两个参数，func 和 message。\n\n#### - func *function(value, formData, callback, props)*\n校验函数\n```\nvalue: 当前 Field 值。\nformData: 当前表单全部数据。\ncallback: 回调函数，func 返回 Promise 时可不调用，否则必须执行。\nprops: 当前 Field 的 props，用来格式化 message。\n```\n\n例：\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\n内置的规则会生成默认校验失败提示文案，如果需要覆盖默认文案，可以在初始化参数中覆盖。\n```\nmessage 为 string 时，返回 message。\nmessage 为 函数时，返回 message(props)，props 为当前 Field props。\n```\n\n例：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\n如果传入多个 args 时，会合并处理\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\n相当于\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n通过这种方式可以把自定义的校验规则和语言包分别引入。\n\n### 返回值\n返回对象包含一组函数生成校验规则。每个函数会根据参数生成一条新的规则。\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// 如果函数没有参数，可以只写函数名称\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 自定义校验\n<code name=\"custom\" />\n\n\n## 内置校验\n\n### required *function(message)*\n必填校验\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\n最小值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\n最大值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最大值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\n数值范围校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### max|integer: 必填，最大值\n#### min|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\n#### message|string: 可选\n#### 返回值：object\n内置了常用的类型校验，type可选值为 \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\n正则表达式校验\n#### reg|RegExp|string: 必填\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"regExp\" />\n\n## 内置文案\n\n当前语言内置校验文案如下，可以通过 setLocale 函数替换\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},819:function(e,n){e.exports="# Rule\n\n<br />\n\n<br />\n\nThe Form implements a set of data validation. That is configured through the rules property on the input component like 'Input, Select, Checkbox, ...'\n\n\n```\n<Input rules={[...rule]}>\n```\n\nrules is an array, each containing a rule with the following format.\n\n- Function:Completely controlled by the caller. you can theoretically do all the checking.\n  ```\n  /**\n   value - Current component value\n   formdata - All values in the form \n   callback - The result of verification\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // return a Promise，do not call callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n\n- Required:Determine whether the required attribute is true or not. false is not required when it is not required.\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- Length:Judge by the min or max property.\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- RegExp: Judge by the RegExp. It can be a RegExp object or a string.\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- Type: Some common type validation are built in. \n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n\n| Property | Type | Description |\n| --- | --- | --- | --- |\n| required | bool | whether to be required |\n| min | number | The minimum value. When type is 'number', validate the value. Otherwise, validate the value.length.  |\n| max | number | The maximum value. When type is 'number', validate the value. Otherwise, validate the value.length. |\n| regExp | string \\| RegExp | regular expression |\n| type | string | options: \\[ 'email', 'json', 'url', 'hex', 'number' ]. You can customize the regExp validation if it does not support it. |\n| message | string | The error message. You can use the '{key}' symbol to format. Key is a property of the current rule, such as {min: 20, message: 'minimum value is {min}'}, which is formatted as 'minimum value is 20'. |\n\n\n## Rule\n\nRule is a function return an object contains a set of validate function.\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Constructor\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### Arguments\n\nThe args is optional.\nEach argument is an object, key is the validate function name. Each value has 2 properties, 'func' and 'message'.\n\n#### - func *function(value, formData, callback, props)*\nvalidate function\n```\nvalue: current field's value.\nformData: all form data.\ncallback: the callback function.\nprops: the props of current field.\n```\n\nexample:\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\nBuilt-in rules use default error text, if you want change the default text, set message to overwrite.\n```\nif message type is string, return message.\nif message type is function，retrun message(props)，props is field's props.\n```\n\nexample：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\nMultiple arguments will be merged\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\nequivalent of\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n### Return\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// if the function has no argument, you can use it with out parentheses.\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Custom Validator\n<code name=\"custom\" />\n\n\n## Built-in Validator\n\n### required *function(message)*\n#### message|string: optional\n#### return: object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\nMinimum check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### retrun: object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\nMax check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### return: object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\nRange check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### min|integer: required\n#### max|integer: required\n#### message|string: optional\n#### return: array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\nType check, one of \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n#### message|string: optional\n#### return: object\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\nRegular expression check\n#### reg|RegExp|string: required\n#### message|string: optional\n#### return: object\n\n<code name=\"regExp\" />\n\n## Built-in Text\n\nThe current built-in validation text as follows, which can be replaced by the setLocale function\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},820:function(e,n,r){"use strict";r.r(n);var t=r(0),s=r.n(t),o=r(98);n.default=function(){return s.a.createElement("pre",null,JSON.stringify(Object(o.a)("rules"),null,2))}},821:function(e,n){e.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function () {\n  return <pre>{JSON.stringify(getLocale('rules'), null, 2)}</pre>\n}\n"},822:function(e,n,r){"use strict";r.r(n);var t=r(150),s=Object(t.b)({isExisted:{func:function(e,n,r,t){n.list.includes(e)?r(new Error(t.message.replace("{title}",t.title))):r(!0)},message:"{title} is existed."}});console.log(s.isExisted())},823:function(e,n,r){"use strict";r.r(n);var t=r(150),s=Object(t.b)();console.log(s.max(100)),console.log(s.max(100,"Nubmer must less than 100."))},824:function(e,n,r){"use strict";r.r(n);var t=r(150),s=Object(t.b)();console.log(s.min(1)),console.log(s.min(1,"At least select one option."))},825:function(e,n,r){"use strict";r.r(n);var t=r(150),s=Object(t.b)();console.log(s.range(1,100)),console.log(s.range(1,100,"Nubmer must between 1 - 100."))},826:function(e,n,r){"use strict";r.r(n);var t=r(150),s=Object(t.b)();console.log(s.regExp("^[\\d\\s ().-]+$")),console.log(s.regExp("^[\\d\\s ().-]+$","Please enter a valid tel."))},827:function(e,n,r){"use strict";r.r(n);var t=r(150),s=Object(t.b)();console.log(s.required("something wrong."));var o=Object(t.b)({required:{message:"init message."}});console.log(o.required())},828:function(e,n,r){"use strict";r.r(n);var t=r(150),s=Object(t.b)();console.log(s.email()),console.log(s.email("Email is invalid.")),console.log(s.integer("Please enter a valid age.")),console.log(s.number("Please enter a valid price.")),console.log(s.url("The url is not valid.")),console.log(s.hex("The color is not valid."))},829:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule({\n  isExisted: {\n    func: (value, formData, callback, props) => {\n      if (formData.list.includes(value)) {\n        callback(new Error(props.message.replace('{title}', props.title)))\n      } else {\n        callback(true)\n      }\n    },\n    message: '{title} is existed.',\n  },\n})\nconsole.log(rule.isExisted())\n"},830:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.max(100))\nconsole.log(rule.max(100, 'Nubmer must less than 100.'))\n"},831:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.min(1))\nconsole.log(rule.min(1, 'At least select one option.'))\n"},832:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.range(1, 100))\nconsole.log(rule.range(1, 100, 'Nubmer must between 1 - 100.'))\n"},833:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$'))\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$', 'Please enter a valid tel.'))\n"},834:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.required('something wrong.'))\n\nconst rule2 = Rule({\n  required: {\n    message: 'init message.',\n  },\n})\nconsole.log(rule2.required())\n"},835:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.email())\nconsole.log(rule.email('Email is invalid.'))\nconsole.log(rule.integer('Please enter a valid age.'))\nconsole.log(rule.number('Please enter a valid price.'))\nconsole.log(rule.url('The url is not valid.'))\nconsole.log(rule.hex('The color is not valid.'))\n"}}]);