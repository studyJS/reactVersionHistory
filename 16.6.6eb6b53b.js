parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"cgra":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),t=l(require("prop-types")),a=l(require("../../diagramElements/Section")),n=l(require("../../diagramElements/Method")),r=l(require("../../diagramElements/Arrow"));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(t){return t.advanced?e.default.createElement(a.default,{advanced:!0,name:"Mounting",col:1},e.default.createElement(r.default,null),e.default.createElement(n.default,{main:!0,name:"constructor",docname:"constructor",type:"render",row:1}),e.default.createElement(r.default,null),e.default.createElement(n.default,{name:"getDerivedStateFromProps",docname:"static-getderivedstatefromprops",type:"render",row:2,colspan:4}),e.default.createElement(r.default,null),e.default.createElement(n.default,{main:!0,name:"render",docname:"render",type:"render",row:4,colspan:4}),e.default.createElement(r.default,null),e.default.createElement(n.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",row:6,colspan:4}),e.default.createElement(r.default,{solid:!0}),e.default.createElement(n.default,{main:!0,name:"componentDidMount",docname:"componentdidmount",type:"commit",row:7})):e.default.createElement(a.default,{name:"Mounting",col:1},e.default.createElement(r.default,null),e.default.createElement(n.default,{main:!0,name:"constructor",docname:"constructor",type:"render",row:1}),e.default.createElement(r.default,null),e.default.createElement(n.default,{main:!0,name:"render",docname:"render",type:"render",row:2,colspan:4}),e.default.createElement(r.default,null),e.default.createElement(n.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",row:3,colspan:4}),e.default.createElement(r.default,{solid:!0}),e.default.createElement(n.default,{main:!0,name:"componentDidMount",docname:"componentdidmount",type:"commit",row:4}))};d.propTypes={advanced:t.default.bool};var u=d;exports.default=u;
},{"react":"1n8/","prop-types":"5D9O","../../diagramElements/Section":"Vldo","../../diagramElements/Method":"knY9","../../diagramElements/Arrow":"KbVO"}],"IcG1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("react")),t=r(require("prop-types")),a=r(require("../../diagramElements/Section")),l=r(require("../../diagramElements/Subsection")),n=r(require("../../diagramElements/Initiator")),d=r(require("../../diagramElements/Method")),o=r(require("../../diagramElements/Arrow"));function r(e){return e&&e.__esModule?e:{default:e}}var c=function(t){return t.advanced?e.default.createElement(a.default,{advanced:!0,name:"Updating",col:2,colspan:3},e.default.createElement(l.default,{col:2},e.default.createElement(n.default,{secondary:!0,name:"New props",row:1}),e.default.createElement(o.default,null),e.default.createElement(d.default,{name:"getDerivedStateFromProps",docname:"static-getderivedstatefromprops",type:"render",col:1,row:2,colspan:4}),e.default.createElement(o.default,null),e.default.createElement(d.default,{name:"shouldComponentUpdate",docname:"shouldcomponentupdate",type:"render",row:3,colspan:2}),e.default.createElement(o.default,{withAlt:!0,colspan:2}),e.default.createElement(d.default,{main:!0,name:"render",docname:"render",type:"render",col:1,row:4,colspan:4}),e.default.createElement(d.default,{name:"getSnapshotBeforeUpdate",docname:"getsnapshotbeforeupdate",type:"pre-commit",row:5,colspan:3}),e.default.createElement(o.default,{solid:!0,col:3}),e.default.createElement(d.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",col:1,row:6,colspan:4}),e.default.createElement(o.default,{solid:!0,col:3}),e.default.createElement(d.default,{main:!0,name:"componentDidUpdate",docname:"componentdidupdate",type:"commit",colspan:3,row:7})),e.default.createElement(l.default,{col:3},e.default.createElement(n.default,{name:"setState()",docname:"setstate",row:1}),e.default.createElement(o.default,null),e.default.createElement(d.default,{name:"getDerivedStateFromProps",docname:"static-getderivedstatefromprops",type:"render",col:1,row:2,colspan:4}),e.default.createElement(o.default,null),e.default.createElement(d.default,{name:"shouldComponentUpdate",docname:"shouldcomponentupdate",type:"render",col:2,row:3,colspan:2}),e.default.createElement(d.default,{main:!0,name:"render",docname:"render",type:"render",col:1,row:4,colspan:4}),e.default.createElement(o.default,null),e.default.createElement(d.default,{name:"getSnapshotBeforeUpdate",docname:"getsnapshotbeforeupdate",type:"pre-commit",col:2,row:5,colspan:3}),e.default.createElement(d.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",col:1,row:6,colspan:4}),e.default.createElement(d.default,{main:!0,name:"componentDidUpdate",docname:"componentdidupdate",type:"commit",col:2,colspan:3,row:7})),e.default.createElement(l.default,{col:4},e.default.createElement(n.default,{name:"forceUpdate()",docname:"forceupdate",row:1}),e.default.createElement(o.default,null),e.default.createElement(d.default,{name:"getDerivedStateFromProps",docname:"static-getderivedstatefromprops",type:"render",col:1,row:2,colspan:4}),e.default.createElement(o.default,null),e.default.createElement(d.default,{main:!0,name:"render",docname:"render",type:"render",col:1,row:4,colspan:4}),e.default.createElement(d.default,{name:"getSnapshotBeforeUpdate",docname:"getsnapshotbeforeupdate",type:"pre-commit",col:2,row:5,colspan:3}),e.default.createElement(d.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",col:1,row:6,colspan:4}),e.default.createElement(d.default,{main:!0,name:"componentDidUpdate",docname:"componentdidupdate",type:"commit",col:2,colspan:3,row:7}))):e.default.createElement(a.default,{name:"Updating",col:2,colspan:3},e.default.createElement(l.default,{col:2},e.default.createElement(n.default,{secondary:!0,name:"New props",row:1}),e.default.createElement(o.default,null),e.default.createElement(d.default,{main:!0,name:"render",docname:"render",type:"render",col:1,row:2,colspan:4}),e.default.createElement(d.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",col:1,row:3,colspan:4}),e.default.createElement(o.default,{solid:!0,col:3}),e.default.createElement(d.default,{main:!0,name:"componentDidUpdate",docname:"componentdidupdate",type:"commit",colspan:3,row:4})),e.default.createElement(l.default,{col:3},e.default.createElement(n.default,{name:"setState()",docname:"setstate",row:1}),e.default.createElement(o.default,null),e.default.createElement(d.default,{main:!0,name:"render",docname:"render",type:"render",col:1,row:2,colspan:4}),e.default.createElement(o.default,null),e.default.createElement(d.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",col:1,row:3,colspan:4}),e.default.createElement(d.default,{main:!0,name:"componentDidUpdate",docname:"componentdidupdate",type:"commit",col:2,colspan:3,row:4})),e.default.createElement(l.default,{col:4},e.default.createElement(n.default,{name:"forceUpdate()",docname:"forceupdate",row:1}),e.default.createElement(o.default,null),e.default.createElement(d.default,{main:!0,name:"render",docname:"render",type:"render",col:1,row:2,colspan:4}),e.default.createElement(d.default,{secondary:!0,name:"React updates DOM and refs",type:"pre-commit",col:1,row:3,colspan:4}),e.default.createElement(d.default,{main:!0,name:"componentDidUpdate",docname:"componentdidupdate",type:"commit",col:2,colspan:3,row:4})))};c.propTypes={advanced:t.default.bool};var m=c;exports.default=m;
},{"react":"1n8/","prop-types":"5D9O","../../diagramElements/Section":"Vldo","../../diagramElements/Subsection":"CRPI","../../diagramElements/Initiator":"udnE","../../diagramElements/Method":"knY9","../../diagramElements/Arrow":"KbVO"}],"oUo7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("react")),t=u(require("prop-types")),r=u(require("../../diagramElements/Section")),a=u(require("../../diagramElements/Method")),n=u(require("../../diagramElements/Arrow"));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(t){var u=t.advanced;return e.default.createElement(r.default,{advanced:u,name:"Unmounting",col:5},e.default.createElement(n.default,null),e.default.createElement(a.default,{main:!0,name:"componentWillUnmount",docname:"componentwillunmount",type:"commit",row:u?7:4}))};l.propTypes={advanced:t.default.bool};var o=l;exports.default=o;
},{"react":"1n8/","prop-types":"5D9O","../../diagramElements/Section":"Vldo","../../diagramElements/Method":"knY9","../../diagramElements/Arrow":"KbVO"}],"ADfp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("react")),t=r(require("prop-types")),a=r(require("merge-class-names"));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(t){var r=t.advanced,l="".concat(r?25:15," / span 9");return e.default.createElement(e.default.Fragment,null,e.default.createElement("section",{className:(0,a.default)("Section Section__error"),style:{gridColumn:"2 /span 5",gridRow:l}},e.default.createElement("h3",{className:"Section__title"},"ErrorHandling"),e.default.createElement("div",{className:"Method Method--hasLink pre-commit"},e.default.createElement("a",{href:"https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror",target:"_blank"},"static getDerivedStateFromError"),e.default.createElement("br",null),e.default.createElement("br",null),e.default.createElement("a",{href:"https://5bcf5863c6aed64970d6de5b--reactjs.netlify.com/docs/react-component.html#componentdidcatch",target:"_blank"},"componentDidCatch"))))};l.propTypes={advanced:t.default.bool};var c=l;exports.default=c;
},{"react":"1n8/","prop-types":"5D9O","merge-class-names":"SHLX"}],"mOBP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Mounting",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"Updating",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"Unmounting",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"ErrorHandling",{enumerable:!0,get:function(){return n.default}});var e=u(require("./Mounting")),r=u(require("./Updating")),t=u(require("./Unmounting")),n=u(require("./ErrorHandling"));function u(e){return e&&e.__esModule?e:{default:e}}
},{"./Mounting":"cgra","./Updating":"IcG1","./Unmounting":"oUo7","./ErrorHandling":"ADfp"}]},{},[], null)
//# sourceMappingURL=16.6.6eb6b53b.map