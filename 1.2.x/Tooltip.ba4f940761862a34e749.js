(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[43],{1154:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(122),l=n(125),a=n(24),c=n(1155),s=n.n(c),p=n(1156),m=n.n(p),u=Object(a.a)(s.a,m.a),f=[{name:"1-base",title:Object(a.a)("基本用法 \n 内置了四个弹出方向","Base \n There are four pop-up directions built in."),component:n(1157).default,rawText:n(1158)},{name:"2-click",title:Object(a.a)("点击触发 \n 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click","Click \n Set the trigger property to change the trigger event to 'click'."),component:n(1159).default,rawText:n(1160)}];e.default=Object(r.a)(function(t){return i.a.createElement(l.b,Object.assign({},t,{codes:void 0,source:u,examples:f}))})},1155:function(t,e){t.exports="# Tooltip *提示*\n\nTooltip 主要用来显示文字提示，如果需要显示更多内容，请使用 [Popover](#/components/Popover)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 子元素只能为一个 ReactElement |\n| position | string | 'top' | 弹出层位置，可选值为 \\['left', 'top', 'right', 'bottom'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string | 必填 | 弹出文字 | \n"},1156:function(t,e){t.exports="# Tooltip\n\nTooltip is used to display text prompts, and if you need to more content, use [Popover](#/components/Popover).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| children | ReactElement | required | The child element can only be a ReactElement. |\n| position | string | 'top' | The position of the pop-up layer, options: \\['left', 'top', 'right', 'bottom'] |\n| tip | string | required | Pop up texts |"},1157:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1267),l=n(124),a={fontSize:20,lineHeight:1,margin:4};e.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",position:"left",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"top",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"bottom",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"right",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},1158:function(t,e){t.exports='/**\n * cn - 基本用法\n *    -- 内置了四个弹出方向\n * en - Base\n *    -- There are four pop-up directions built in.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function () {\n  return (\n    <div>\n      <Tooltip tip="Some text." position="left" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="top" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="bottom" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="right" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},1159:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1267),l=n(124),a={fontSize:20,lineHeight:1,margin:4};e.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"left",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"top",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"bottom",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"right",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},1160:function(t,e){t.exports='/**\n * cn - 点击触发\n *    -- 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click\n * en - Click\n *    -- Set the trigger property to change the trigger event to \'click\'.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function () {\n  return (\n    <div>\n      <Tooltip tip="Some text." trigger="click" position="left" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="top" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="bottom" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="right" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},124:function(t,e,n){"use strict";var o=n(112);e.a=Object(o.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},1267:function(t,e,n){"use strict";var o={};n.r(o),n.d(o,"hide",function(){return p}),n.d(o,"show",function(){return u}),n.d(o,"move",function(){return f}),n.d(o,"isCurrent",function(){return h});var i=n(255),r=n(9),l=document.createElement("div");l.style.display="none",document.body.appendChild(l);var a=document.createElement("div");a.className=Object(r.C)("arrow"),l.appendChild(a);var c,s=document.createElement("div");function p(){l.style.display="none",l.className="",c=void 0}function m(){p(),document.removeEventListener("click",m)}function u(t,e){var n=t.position,o=t.style,i=t.tip,a=t.trigger;c=e,l.style.cssText="display: none",Object.keys(o).forEach(function(t){l.style[t]=o[t]});var p=Object(r.C)("_","in",n);setTimeout(function(){l.style.display="block",l.className=p},0),s.innerText=i,"click"===a&&document.addEventListener("click",m)}function f(t,e,n){t===c&&(l.style.left="".concat(e,"px"),l.style.top="".concat(n,"px"))}function h(t){return t===c}s.className=Object(r.C)("inner"),l.appendChild(s);var g=Object(i.a)(o);g.displayName="ShineoutTooltip";e.a=g},139:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var o=n(0),i=n.n(o),r=n(39),l=n.n(r)()(),a=l.Consumer,c=l.Provider,s=function(t){return function(e){return i.a.createElement(a,null,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.a.createElement(t,Object.assign({},e,{scrollElement:n.element,scrollLeft:n.left,scrollTop:n.top}))})}}},255:function(t,e,n){"use strict";var o=n(5),i=n(6),r=n(8),l=n(2),a=n(7),c=n(3),s=n(0),p=n.n(s),m=n(139),u=n(37);e.a=function(t){var e=t.show,n=t.hide,f=t.move,h=t.isCurrent,g=function(t){function m(t){var e;return Object(o.a)(this,m),(e=Object(r.a)(this,Object(l.a)(m).call(this,t))).handleShow=e.handleShow.bind(Object(c.a)(Object(c.a)(e))),e.tryHide=e.tryHide.bind(Object(c.a)(Object(c.a)(e))),e.elementRef=e.elementRef.bind(Object(c.a)(Object(c.a)(e))),e.id=Object(u.b)(),e}return Object(a.a)(m,t),Object(i.a)(m,[{key:"componentDidUpdate",value:function(t){if(f&&h(this.id)){var e=this.props,n=e.scrollLeft,o=e.scrollTop;if(t.scrollLeft!==n||t.scrollTop!==o){var i=this.getPosition(),r=i.left,l=i.top;f(this.id,r,l),this.tryHide()}}}},{key:"componentWillUnmount",value:function(){n()}},{key:"getElement",value:function(){return this.placeholderElement.nextSibling}},{key:"getPosition",value:function(){var t,e,n=this.props.position,o=this.getElement().getBoundingClientRect(),i=document.documentElement.scrollTop||document.body.scrollTop,r=document.documentElement.scrollLeft||document.body.scrollLeft;switch(n){case"top-left":t=r+o.left,e=i+o.top;break;case"top":t=r+o.left+o.width/2,e=i+o.top;break;case"top-right":t=r+o.left+o.width,e=i+o.top;break;case"left-top":t=r+o.left,e=i+o.top;break;case"left":t=r+o.left,e=i+o.top+o.height/2;break;case"left-bottom":t=r+o.left,e=i+o.bottom;break;case"right-top":t=r+o.left+o.width,e=i+o.top;break;case"right":t=r+o.left+o.width,e=i+o.top+o.height/2;break;case"right-bottom":t=r+o.left+o.width,e=i+o.bottom;break;case"bottom-left":t=r+o.left,e=i+o.top+o.height;break;case"bottom":t=r+o.left+o.width/2,e=i+o.top+o.height;break;case"bottom-right":t=r+o.left+o.width,e=i+o.top+o.height}return{left:t,top:e}}},{key:"elementRef",value:function(t){this.placeholderElement=t}},{key:"tryHide",value:function(){var t=this.props.scrollElement,e=this.getElement().getBoundingClientRect(),o=t?t.getBoundingClientRect():{};(e.bottom<o.top||e.top>o.bottom||e.right<o.left||e.left>o.right)&&n(0)}},{key:"handleShow",value:function(){var t=this;this.showTimer&&clearTimeout(this.showTimer),this.showTimer=setTimeout(function(){var n=t.getPosition(),o=n.left,i=n.top,r=Object.assign({},t.props,{style:{left:"".concat(o,"px"),top:"".concat(i,"px")}});e(r,t.id)},this.props.delay)}},{key:"render",value:function(){var t=this,e=this.props,o=e.children,i=e.trigger;if(!Object(s.isValidElement)(o))return console.error(new Error("Tooltip children expect a single ReactElement.")),null;var r={key:"el"};return"hover"===i?(r.onMouseEnter=this.handleShow,r.onMouseLeave=n):r.onClick=function(){setTimeout(t.handleShow,10)},[p.a.createElement("noscript",{ref:this.elementRef,key:"ns"}),Object(s.cloneElement)(o,r)]}}]),m}(s.PureComponent);return g.defaultProps={delay:0,position:"top",trigger:"hover"},Object(m.b)(g)}}}]);