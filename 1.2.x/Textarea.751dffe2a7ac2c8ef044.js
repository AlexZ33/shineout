(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[42],{121:function(e,t,n){"use strict";var a=n(19),o=n(5),r=n(6),i=n(8),s=n(2),u=n(7),l=n(3),c=n(0),h=n.n(c),f=n(11),p=n.n(f),d=n(26),m=n(36),b=n(9);t.a=Object(m.b)(function(e,t){var n,c;return c=n=function(n){function c(e){var t;return Object(o.a)(this,c),(t=Object(i.a)(this,Object(s.a)(c).call(this,e))).state={focus:e.autoFocus},t.handleBlur=t.handleBlur.bind(Object(l.a)(Object(l.a)(t))),t.handleFocus=t.handleFocus.bind(Object(l.a)(Object(l.a)(t))),t}return Object(u.a)(c,n),Object(r.a)(c,[{key:"handleBlur",value:function(e){this.setState({focus:!1});var t=this.props.onBlur;t&&t(e)}},{key:"handleFocus",value:function(e){this.setState({focus:!0});var t=this.props.onFocus;t&&t(e)}},{key:"renderHelp",value:function(e){var t=this.props,n=t.error,a=t.tip,o=t.popover,r=["tip",o||"bottom-left"];return n&&o?(r.push("error"),h.a.createElement("div",{className:b.n.apply(void 0,r)},n.message)):a&&e?h.a.createElement("div",{className:Object(b.n)([].concat(r))},a):null}},{key:"render",value:function(){var n=this.props,o=(n.className,n.border),r=n.size,i=(n.tip,n.popover),s=n.width,u=n.style,l=n.error,c=Object(a.a)(n,["className","border","size","tip","popover","width","style","error"]),f=this.state.focus,d=e.tag||"label",m=Object.assign({width:s},u),g=p()(Object(b.n)("_",f&&"focus",!0===c.disabled&&"disabled",e.isGroup&&"group",r,m.width&&"inline",!o&&"no-border",e.overflow&&"overflow-".concat(e.overflow),l&&"invalid",i&&l&&"focus"),Object(b.c)(e.isGroup&&"group"),"function"==typeof e.className?e.className(this.props):e.className,this.props.className);return h.a.createElement(d,{className:g,style:m},h.a.createElement(t,Object.assign({},c,{size:r,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(f))}}]),c}(d.a),n.defaultProps={border:!0,style:{}},c})},1254:function(e,t,n){"use strict";var a=n(36),o=n(132),r=n(133),i=n(120),s=n(121),u=n(19),l=n(5),c=n(6),h=n(8),f=n(2),p=n(17),d=n(7),m=n(3),b=n(0),g=n.n(b),v=n(26),j=n(9),O=n(134),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={height:0},n.bindShadow=n.bindShadow.bind(Object(m.a)(Object(m.a)(n))),n.handleBlur=n.handleBlur.bind(Object(m.a)(Object(m.a)(n))),n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.resize=n.resize.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){Object(p.a)(Object(f.a)(t.prototype),"componentDidMount",this).call(this),this.props.autosize&&this.resize()}},{key:"bindShadow",value:function(e){this.shadow=e}},{key:"resize",value:function(e){e&&(this.shadow.value=e);var t=this.shadow?this.shadow.scrollHeight:0;this.setState({height:t})}},{key:"handleChange",value:function(e){this.props.onChange(e.target.value),this.props.autosize&&this.resize(e.target.value)}},{key:"handleBlur",value:function(e){var t=e.target.value,n=this.props,a=n.forceChange,o=n.onBlur;o&&o(e),a(t)}},{key:"renderInfo",value:function(){var e=this.props.info;if("function"!=typeof e)return null;var t=e(this.props.value);if(!t)return null;var n=t instanceof Error,a=n?t.message:t;return g.a.createElement("div",{key:"info",style:{minWidth:"auto"},className:Object(j.n)("bottom-right",n?"error":"tip")},a)}},{key:"render",value:function(){var e=this.props,t=e.autosize,n=(e.onChange,e.maxHeight),a=(e.info,Object(u.a)(e,["autosize","onChange","maxHeight","info"])),o=this.state.height||"auto",r=t?Object(j.n)("auto-size"):"",i=[g.a.createElement("textarea",Object.assign({},Object(O.a)(a),{key:"t",className:r,style:{height:o,maxHeight:n,overflow:"auto"},onChange:this.handleChange,onBlur:this.handleBlur})),this.renderInfo()];return t&&i.push(g.a.createElement("textarea",{key:"s",ref:this.bindShadow,className:Object(j.n)("shadow"),rows:a.rows,defaultValue:a.value})),i}}]),t}(v.b);y.defaultProps={value:"",rows:4};var w=y,x=Object(a.a)(i.a,Object(s.a)({}),Object(o.a)(400),r.a)(w);x.displayName="ShineoutTextarea";t.a=x},132:function(e,t,n){"use strict";var a=n(19),o=n(5),r=n(6),i=n(8),s=n(2),u=n(7),l=n(3),c=n(0),h=n.n(c),f=n(36);t.a=Object(f.b)(function(e,t){var n,f;return f=n=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(i.a)(this,Object(s.a)(n).call(this,e))).state={value:e.value},t.handleChange=t.handleChange.bind(Object(l.a)(Object(l.a)(t))),t.forceChange=t.forceChange.bind(Object(l.a)(Object(l.a)(t))),t}return Object(u.a)(n,e),Object(r.a)(n,[{key:"getValue",value:function(){return this.changeLocked?this.state.value:this.props.value}},{key:"handleChange",value:function(e){for(var t=this,n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var r,i=this.props.delay;0!==i?(this.setState({value:e}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){var n;t.changeLocked=!1,(n=t.props).onChange.apply(n,[e].concat(a))},i)):(r=this.props).onChange.apply(r,[e].concat(a))}},{key:"forceChange",value:function(e){var t;this.setState({value:e});for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];(t=this.props).onChange.apply(t,[e].concat(a)),this.changeLocked=!1}},{key:"render",value:function(){var e=this.props,n=(e.value,e.onChange,Object(a.a)(e,["value","onChange"]));return h.a.createElement(t,Object.assign({},n,{value:this.getValue(),onChange:this.handleChange,forceChange:this.forceChange}))}}]),n}(c.PureComponent),n.defaultProps={delay:e},f})},133:function(e,t,n){"use strict";var a=n(5),o=n(6),r=n(8),i=n(2),s=n(7),u=n(3),l=n(0),c=n.n(l);t.a=function(e){return function(t){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(i.a)(n).call(this,e))).handleBlur=t.handleBlur.bind(Object(u.a)(Object(u.a)(t))),t}return Object(s.a)(n,t),Object(o.a)(n,[{key:"handleBlur",value:function(e){var t=this.props,n=t.value,a=t.trim,o=t.onBlur,r=t.onChange;if(a){var i=e.target.value.trim();n!==i&&r(i)}o&&o(e)}},{key:"render",value:function(){return c.a.createElement(e,Object.assign({},this.props,{onBlur:this.handleBlur}))}}]),n}(l.PureComponent)}},134:function(e,t,n){"use strict";var a=n(38),o=["delay","onDatumBind","rules","formDatum","forceChange","trim","beforeChange","validateHook","innerFormNamePath","fieldSetValidate","combineRules"];t.a=function(e){return Object(a.a)(e,function(e){o.forEach(function(t){return delete e[t]})})}},892:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(122),i=n(125),s=n(24),u=n(893),l=n.n(u),c=n(894),h=n.n(c),f=Object(s.a)(l.a,h.a),p=[{name:"1-base",title:Object(s.a)("基本用法 \n 多行文本输入框","Base \n Multi-line text input box"),component:n(895).default,rawText:n(896)},{name:"2-autosize",title:Object(s.a)("自适应高度 \n autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 maxHeight 即可","Autosize \n When the autosize property is true, component will change height to fit the content. Set maxHeight to limit maximum height."),component:n(897).default,rawText:n(898)},{name:"3-info",title:Object(s.a)("信息 \n 设置 info 属性后，用户 focus 时显示 info 函数执行的结果，例如用户已输入文字长度。 \n 如果 info 返回类型为 Error，不会隐藏。","Info \n The result of the info function is displayed when you focus."),component:n(899).default,rawText:n(900)}];t.default=Object(r.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:f,examples:p}))})},893:function(e,t){e.exports="# Textarea *多行文本框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| autosize | bool | false | 高度是否随内容自动变化 |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| info | function | 无 | 提示信息 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | 最小行高，同原生 textarea rows 属性 |\n| style | object | 无 | 最外层扩展样式 |\n| trim | bool | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n"},894:function(e,t){e.exports="# Textarea\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| autosize | bool | false | Whether the height changes automatically with the content |\n| defaultValue | string \\| number | | default value |\n| delay | number | 400 | User input triggers onChange and to check interval, unit: ms.|\n| info | function | - | Infomation |\n| name | string | none | The name that accesses data from Form |\n| onChange | function(d) | | The callback function for changing value |\n| placeholder | string | | The same as the native placeholder tag. |\n| popover | string | | The position where the message pops up, options: \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | The minimum row height. Same as native textarea rows property. |\n| style | object | - | Container element style |\n| trim | bool | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| value | string \\| number | | DefaultValue and value can be set at the same time and defaultValue will be overridden by value. <br />In the Form, the value is taken over by the Form and lose efficacy. |\n"},895:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1254);t.default=function(){return o.a.createElement(r.a,{rows:6,placeholder:"input something"})}},896:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 多行文本输入框\n * en - Base\n *    -- Multi-line text input box\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nexport default function () {\n  return (\n    <Textarea rows={6} placeholder=\"input something\" />\n  )\n}\n"},897:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1254);t.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a,{rows:2,autosize:!0,maxHeight:200,placeholder:"autosize"}),o.a.createElement("br",null),o.a.createElement(r.a,{rows:2,autosize:!0,value:"a\nu\nt\no\ns\ni\nz\ne",maxHeight:200,placeholder:"autosize"}))}},898:function(e,t){e.exports="/**\n * cn - 自适应高度\n *    -- autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 maxHeight 即可\n * en - Autosize\n *    -- When the autosize property is true, component will change height to fit the content. Set maxHeight to limit maximum height.\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nconst text = `a\nu\nt\no\ns\ni\nz\ne`\n\nexport default function () {\n  return (\n    <div>\n      <Textarea rows={2} autosize maxHeight={200} placeholder=\"autosize\" />\n      <br />\n      <Textarea rows={2} autosize value={text} maxHeight={200} placeholder=\"autosize\" />\n    </div>\n  )\n}\n"},899:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1254),i=function(e){if(0===e.length)return null;var t="".concat(e.length," / 20");return e.length<=20?t:new Error(t)};t.default=function(){return o.a.createElement(r.a,{rows:4,trim:!0,placeholder:"input something",info:i})}},900:function(e,t){e.exports="/**\n * cn - 信息\n *    -- 设置 info 属性后，用户 focus 时显示 info 函数执行的结果，例如用户已输入文字长度。\n *    -- 如果 info 返回类型为 Error，不会隐藏。\n * en - Info\n *    -- The result of the info function is displayed when you focus.\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nconst renderInfo = (value) => {\n  if (value.length === 0) return null\n  const text = `${value.length} / 20`\n  if (value.length <= 20) return text\n  return new Error(text)\n}\n\nexport default function () {\n  return (\n    <Textarea rows={4} trim placeholder=\"input something\" info={renderInfo} />\n  )\n}\n"}}]);