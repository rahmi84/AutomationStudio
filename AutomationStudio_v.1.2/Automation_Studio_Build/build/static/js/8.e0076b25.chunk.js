(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[8],{120:function(e,t,a){"use strict";var s=a(8),n=a(3),r=a.n(n),o=a(1),i=a.n(o);a(13);const l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},c=e=>{let t=e.tag,a=e.className,n=e.type,o=Object(s.a)(e,["tag","className","type"]);const c=r()({[n]:!!n},a);let u;return u=t||(!t&&l[n]?l[n]:"p"),i.a.createElement(u,Object.assign({},o,{className:c}))};c.defaultProps={type:"p"},t.a=c},121:function(e,t,a){"use strict";var s=a(8),n=a(1),r=a.n(n),o=(a(13),a(18)),i=a(126),l=a(127),c=a(120);const u=o.a.create("page"),d=e=>{let t=e.title,a=e.breadcrumbs,n=e.tag,o=e.className,d=e.children,m=Object(s.a)(e,["title","breadcrumbs","tag","className","children"]);const p=u.b("px-3",o);return r.a.createElement(n,Object.assign({className:p},m),r.a.createElement("div",{className:u.e("header")},t&&"string"===typeof t?r.a.createElement(c.a,{type:"h1",className:u.e("title")},t):t,a&&r.a.createElement(i.a,{className:u.e("breadcrumb")},r.a.createElement(l.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>r.a.createElement(l.a,{key:a,active:t},e)))),d)};d.defaultProps={tag:"div",title:""},t.a=d},123:function(e,t,a){"use strict";var s=a(4),n=a(5),r=a(17),o=a(1),i=a.n(o),l=a(0),c=a.n(l),u=a(3),d=a.n(u),m=a(21),p=a(2),h=Object(r.a)({},m.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:p.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),b=Object(r.a)({},m.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function f(e){var t=e.tag,a=e.baseClass,r=e.baseClassActive,o=e.className,l=e.cssModule,c=e.children,u=e.innerRef,h=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(p.o)(h,p.c),f=Object(p.n)(h,p.c);return i.a.createElement(m.Transition,b,(function(e){var n="entered"===e,m=Object(p.m)(d()(o,a,n&&r),l);return i.a.createElement(t,Object(s.a)({className:m},f,{ref:u}),c)}))}f.propTypes=h,f.defaultProps=b,t.a=f},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));const s=(e="primary")=>{if("undefined"===typeof window)return null;return window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},n=()=>["primary","secondary","success","info","warning","danger"]},140:function(e,t,a){"use strict";var s=a(4),n=a(5),r=a(1),o=a.n(r),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"modal-body"),a);return o.a.createElement(r,Object(s.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},146:function(e,t,a){"use strict";var s=a(17),n=a(4),r=a(10),o=a(6),i=a(1),l=a.n(i),c=a(0),u=a.n(c),d=a(3),m=a.n(d),p=a(15),h=a.n(p),b=a(2),f={children:u.a.node.isRequired,node:u.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);g.propTypes=f;var E=g,v=a(123);function y(){}var S=u.a.shape(v.a.propTypes),O={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:S,modalTransition:S,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},x=Object.keys(O),N={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:y,onClosed:y,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade}},C=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(o.a)(Object(o.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(o.a)(Object(o.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(o.a)(Object(o.a)(a))),a.handleEscape=a.handleEscape.bind(Object(o.a)(Object(o.a)(a))),a.handleTab=a.handleTab.bind(Object(o.a)(Object(o.a)(a))),a.onOpened=a.onOpened.bind(Object(o.a)(Object(o.a)(a))),a.onClosed=a.onClosed.bind(Object(o.a)(Object(o.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||y)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||y)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.i.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,s=this.getFocusedChild(),n=0,r=0;r<a;r+=1)if(t[r]===s){n=r;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(b.j)(),Object(b.g)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=m()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,x);return l.a.createElement("div",Object(n.a)({},a,{className:Object(b.m)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(b.m)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,r=e.backdropClassName,o=e.cssModule,i=e.isOpen,c=e.backdrop,u=e.role,d=e.labelledBy,p=e.external,h=e.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":d,role:u,tabIndex:"-1"},g=this.props.fade,y=Object(s.a)({},v.a.defaultProps,this.props.modalTransition,{baseClass:g?this.props.modalTransition.baseClass:"",timeout:g?this.props.modalTransition.timeout:0}),S=Object(s.a)({},v.a.defaultProps,this.props.backdropTransition,{baseClass:g?this.props.backdropTransition.baseClass:"",timeout:g?this.props.backdropTransition.timeout:0}),O=c&&(g?l.a.createElement(v.a,Object(n.a)({},S,{in:i&&!!c,cssModule:o,className:Object(b.m)(m()("modal-backdrop",r),o)})):l.a.createElement("div",{className:Object(b.m)(m()("modal-backdrop","show",r),o)}));return l.a.createElement(E,{node:this._element},l.a.createElement("div",{className:Object(b.m)(t)},l.a.createElement(v.a,Object(n.a)({},f,y,{in:i,onEntered:this.onOpened,onExited:this.onClosed,cssModule:o,className:Object(b.m)(m()("modal",a),o),innerRef:h}),p,this.renderModalDialog()),O))}return null},t}(l.a.Component);C.propTypes=O,C.defaultProps=N,C.openCount=0;t.a=C},153:function(e,t,a){"use strict";var s=a(4),n=a(5),r=a(1),o=a.n(r),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),m={tag:d.q,wrapTag:d.q,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},p=function(e){var t,a=e.className,r=e.cssModule,i=e.children,l=e.toggle,c=e.tag,m=e.wrapTag,p=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(n.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(d.m)(u()(a,"modal-header"),r);if(!b&&l){var E="number"===typeof h?String.fromCharCode(h):h;t=o.a.createElement("button",{type:"button",onClick:l,className:Object(d.m)("close",r),"aria-label":p},o.a.createElement("span",{"aria-hidden":"true"},E))}return o.a.createElement(m,Object(s.a)({},f,{className:g}),o.a.createElement(c,{className:Object(d.m)("modal-title",r)},i),b||t)};p.propTypes=m,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p},154:function(e,t,a){"use strict";var s=a(4),n=a(5),r=a(1),o=a.n(r),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"modal-footer"),a);return o.a.createElement(r,Object(s.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},213:function(e,t,a){"use strict";var s=a(4),n=a(5),r=a(1),o=a.n(r),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),m={children:l.a.node,tag:d.q,className:l.a.string,cssModule:l.a.object,valid:l.a.bool,tooltip:l.a.bool},p={tag:"div",valid:void 0},h=function(e){var t=e.className,a=e.cssModule,r=e.valid,i=e.tooltip,l=e.tag,c=Object(n.a)(e,["className","cssModule","valid","tooltip","tag"]),m=i?"tooltip":"feedback",p=Object(d.m)(u()(t,r?"valid-"+m:"invalid-"+m),a);return o.a.createElement(l,Object(s.a)({},c,{className:p}))};h.propTypes=m,h.defaultProps=p,t.a=h},214:function(e,t){var a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,r=/^0o[0-7]+$/i,o=parseInt,i=Object.prototype.toString;function l(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==i.call(e)}(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var c=n.test(e);return c||r.test(e)?o(e.slice(2),c?2:8):s.test(e)?NaN:+e}},442:function(e,t,a){"use strict";var s=a(4),n=a(5),r=a(1),o=a.n(r),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(214),m=a.n(d),p=a(2),h={children:l.a.node,bar:l.a.bool,multi:l.a.bool,tag:p.q,value:l.a.oneOfType([l.a.string,l.a.number]),max:l.a.oneOfType([l.a.string,l.a.number]),animated:l.a.bool,striped:l.a.bool,color:l.a.string,className:l.a.string,barClassName:l.a.string,cssModule:l.a.object},b=function(e){var t=e.children,a=e.className,r=e.barClassName,i=e.cssModule,l=e.value,c=e.max,d=e.animated,h=e.striped,b=e.color,f=e.bar,g=e.multi,E=e.tag,v=Object(n.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),y=m()(l)/m()(c)*100,S=Object(p.m)(u()(a,"progress"),i),O=Object(p.m)(u()("progress-bar",f&&a||r,d?"progress-bar-animated":null,b?"bg-"+b:null,h||d?"progress-bar-striped":null),i),x=g?t:o.a.createElement("div",{className:O,style:{width:y+"%"},role:"progressbar","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":c,children:t});return f?x:o.a.createElement(E,Object(s.a)({},v,{className:S,children:x}))};b.propTypes=h,b.defaultProps={tag:"div",value:0,max:100},t.a=b},523:function(e,t,a){"use strict";a.r(t);var s=a(131),n=a.n(s),r=a(132),o=a(121),i=a(1),l=a.n(i),c=a(130),u=a(165),d=a(113),m=a(114),p=a(97),h=a(102),b=a(98),f=a(91),g=a(26),E=a(27),v=a(28),y=a(213),S=a(50),O=a(442),x=a(146),N=a(153),C=a(140),j=a(154),w=a(148),T=a.n(w),k=(a(149),a(150),a(151)),P=a.n(k),F=a(152),M=a.n(F),R=a(133),D=a.n(R),A=(a(134),"undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)),I=new Uint8Array(16);function _(){if(!A)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return A(I)}var L=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var B=function(e){return"string"===typeof e&&L.test(e)},U=[],V=0;V<256;++V)U.push((V+256).toString(16).substr(1));var H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(U[e[t+0]]+U[e[t+1]]+U[e[t+2]]+U[e[t+3]]+"-"+U[e[t+4]]+U[e[t+5]]+"-"+U[e[t+6]]+U[e[t+7]]+"-"+U[e[t+8]]+U[e[t+9]]+"-"+U[e[t+10]]+U[e[t+11]]+U[e[t+12]]+U[e[t+13]]+U[e[t+14]]+U[e[t+15]]).toLowerCase();if(!B(a))throw TypeError("Stringified UUID is invalid");return a};var z=function(e,t,a){var s=(e=e||{}).random||(e.rng||_)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){a=a||0;for(var n=0;n<16;++n)t[a+n]=s[n];return t}return H(s)},W=window.ENV.APIURL;window.ENV.ReportURL;function q(e=[],t={},a={}){return{labels:e,datasets:[{label:"PASS",backgroundColor:Object(c.a)("success"),borderColor:Object(c.a)("success"),borderWidth:1,data:[...t]},{label:"FAIL",backgroundColor:Object(c.a)("danger"),borderColor:Object(c.a)("danger"),borderWidth:1,data:[...a]}]}}function G({options:e}){return e.map(e=>l.a.createElement("option",{key:e.Environment},e.Environment))}function $(e,t,a){return e[a[t]-1].moduleName}function K(e,t,a){return e[a[t]-1].testid}function J(e,t,a){return e[a[t]-1].testcasename}function Y(e,t,a,s,n,r){var o={};return o.Module=e,o.testid=t,o.testcasename=a,o.status=s,n=n.split("\\").join("{"),o.reportpath=n,o.duration=r,o}class X extends l.a.Component{constructor(e){var t;super(e),t=this,this.handleOnSelect=(e,t)=>{t?this.setState(()=>({selected:[...this.state.selected,e.id]})):this.setState(()=>({selected:this.state.selected.filter(t=>t!==e.id)}))},this.handleOnSelectAll=(e,t)=>{const a=t.map(e=>e.id);e?this.setState(()=>({selected:a})):this.setState(()=>({selected:[]}))},this.toggle=e=>()=>{if(!e)return this.setState({modal:!this.state.modal});this.setState({["modal_".concat(e)]:!this.state["modal_".concat(e)]})},this.state={tabIndex:0,ENV:"",Browser:"",screenshot:"FOR EACH STEP",runAt:"SELENIUM GRID",EmailTrigger:"NO",FromEmail:"",FromPassword:"",ReceiverEmail:"",checkFromEmai:!1,checkPassword:!1,checkRecemail:!1,testSuiteResponce:[],testSuiteData:[],modal:!1,modalValidationText:"",selected:[],showProgressBar:!1,showProgressText:!1,totalexecutedTestcasen:0,scriptResponce:"Not Started",wait:!1,summaryPass:0,summaryFail:0,allModuleName:[],allModule:[],allPassModuleWise:[],allFailModuleWise:[],allHTMLHyperlink:[],ExecutionSuitePath:"",ConfigurationFile:[],CommonTestData:[],loader:!0,loaderLoadTestScripts:!1,ScriptParallelCheck:!1,seGridResponse:!1,ExecutionNature:"",checkExecutionNature:!1,feedbackExecutionNature:"Debugging:Reports will not included in dashboard.",DeviceIP:""};(function(){var e=Object(r.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(W+"dashboard");case 2:return a=e.sent,e.next=5,a.json();case 5:(s=e.sent).success&&(t.setState({ConfigurationFile:s.Configuration}),t.setState({CommonTestData:s.CommonTestData}),t.setState({ENV:t.state.ConfigurationFile.DefaultEnvironment}),t.setState({Browser:t.state.ConfigurationFile.DefaultBrowser}),function(){var e=Object(r.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(W+"execution");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.setState({testSuiteResponce:s}),function(){var e=Object(r.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(W+"testcase?moduleName=");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.setState({allModuleName:s}),t.setState({DeviceIP:z()}),t.setState({loader:!1});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}OpenTestSummaryFile(){var e=this.state.ExecutionSuitePath;""!==e.trim()&&window.open(e)}LoadallTestscripts(){this.setState({loaderLoadTestScripts:!0});var e=function(e){let t=[];return Object.keys(e).map(a=>t.push(e[a])),t}(this.state.allModuleName);this.setState({allModule:e}),this.setState({showProgressBar:!1}),this.setState({showProgressText:!1});var t={};let a=[];var s=this.state.testSuiteResponce;Object.keys(s).map(e=>a.push(e));var n=0,r=[];for(let i=1;i<=a.length;i++){var o=s[a[i-1]];for(let e=1;e<=o.length;e++)n+=1,t.id=n,t.moduleName=a[i-1],t.testid=o[e-1].TestID,t.testcasename=o[e-1].TestName,t.status="Not Started",r.push({id:n,moduleName:a[i-1],testid:o[e-1].TestID,testcasename:o[e-1].TestName,status:"Not Started"})}this.setState({testSuiteData:r}),this.setState({selected:[]}),this.setState({loaderLoadTestScripts:!1})}ExecuteTestScripts(){var e=this;if(this.setState({showProgressBar:!1}),this.setState({showProgressText:!1}),this.setState({totalexecutedTestcasen:0}),0===this.state.testSuiteData.length)return this.setState({modal:!0}),this.setState({modalValidationText:"Please Load test scripts before execution."});var t=this.state.EmailTrigger,a=this.state.FromEmail,s=this.state.FromPassword,o=this.state.ReceiverEmail,i="",l=this.state.ExecutionNature,c=this.state.DeviceIP;if(""===l.trim())return void this.setState({checkExecutionNature:!0});if(this.setState({checkExecutionNature:!1}),"YES"===t&&(""===a.trim()&&(this.setState({checkFromEmai:!0}),i="From Email can not be blank."),""===s.trim()&&(this.setState({checkPassword:!0}),i+="Password can not be blank."),""===o.trim()&&(this.setState({checkRecemail:!0}),i+="Receiver Email can not be blank."),""!==i.trim()))return this.setState({modal:!0}),this.setState({modalValidationText:i});var u=this.state.selected.length;if(0===u)return this.setState({modal:!0}),this.setState({modalValidationText:"Please select test script for execution."});const d=this.state.selected;this.setState({summaryPass:0}),this.setState({summaryFail:0});var m=0,p=0,h=this.state.testSuiteData;for(let n=0;n<h.length;n++){var b=h[n].status;"PASS"===b&&(m+=1,this.setState({summaryPass:m})),"FAIL"===b&&(p+=1,this.setState({summaryFail:p}))}var f=0,g={};u=this.state.selected.length;var E=this.state.ENV,v=this.state.Browser,y=this.state.screenshot,S=this.state.runAt,O=this.state.ConfigurationFile.HUBMachineName,x=this.state.ConfigurationFile.HUBPort,N=W+"execution?delay=1000";const C=this.state.testSuiteData,j=this.state.allModule;(function(){var t=Object(r.a)(n.a.mark((function t(){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(W+"segrid?hubname="+O+"&portnumber="+x+"&browser="+v);case 2:return a=t.sent,t.next=5,a.json();case 5:if((s=t.sent).success){t.next=12;break}return e.setState({seGridResponse:!1}),e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 12:e.setState({seGridResponse:!0});case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),setTimeout(()=>{if(this.state.seGridResponse){this.setState({showProgressBar:!0}),this.setState({showProgressText:!0});for(let a=0;a<Number(u);a++){t(a);(function(){var s=Object(r.a)(n.a.mark((function s(){var o,i,h,b,w,T,k,P,F;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(N);case 2:return o=s.sent,s.next=5,o.json();case 5:i=s.sent,"PASS"===i.success&&(t(a),h=$(C,a,d),b=K(C,a,d),w=J(C,a,d),T="",k="",P="",C[d[a]-1].status="In-Progress",e.setState({testSuiteData:C}),F=W+"execution?module="+h+"&testid="+b+"&testcasename="+w+"&env="+E+"&browser="+v+"&runat="+S+"&screenshot="+y+"&hubmachine="+O+"&portnumber="+x+"&executionnature="+l+"&clientmachineid="+c,function(){var t=Object(r.a)(n.a.mark((function t(){var s,o,i,v,y,S,O,x,N,M,R,D,A;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(F);case 2:return s=t.sent,t.next=5,s.json();case 5:o=t.sent,T=o.status,k=o.htmlPath,P=o.testRunDuration,C[d[a]-1].status=T,e.setState({testSuiteData:C}),(i=e.state.allHTMLHyperlink)["RowId"+d[a]]=k,e.setState({allHTMLHyperlink:i}),"PASS"===T&&(m+=1),"FAIL"===T&&(p+=1),g[a+1]=Y(h,b,w,T,k,P),v=[],y=[],S=0,O=0;case 21:if(!(O<j.length)){t.next=43;break}x=0,N=0,M=S;case 25:if(!(M<C.length)){t.next=38;break}if(C[M].moduleName!==j[O]){t.next=33;break}"PASS"===(R=C[M].status)&&(x+=1),"FAIL"===R&&(N+=1),t.next=35;break;case 33:return S=M,t.abrupt("break",38);case 35:M++,t.next=25;break;case 38:v.push(x),y.push(N);case 40:O++,t.next=21;break;case 43:f=Number(f)+1,e.setState({ScriptParallelCheck:!0}),f===u&&(e.setState({summaryPass:m}),e.setState({summaryFail:p}),e.setState({allPassModuleWise:v}),e.setState({allFailModuleWise:y}),e.setState({showProgressBar:!1}),e.setState({showProgressText:!1}),e.setState({totalexecutedTestcasen:0}),D=JSON.stringify(g),A={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:D},function(){var t=Object(r.a)(n.a.mark((function t(){var a,s,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(W+"execution?env="+E+"&executionnature="+l+"&clientmachineid="+c,A);case 2:return a=t.sent,t.next=5,a.json();case 5:"pass"===(s=t.sent).success.toLowerCase()&&(r=s.testSuitePath,e.setState({ExecutionSuitePath:r}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()());case 46:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()());case 8:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}function t(e){setTimeout((function(){}),4e3*e)}}},1e4)}updateENV(e){this.setState({ENV:e.target.value})}updateBrowser(e){this.setState({Browser:e.target.value})}updateScreenshot(e){this.setState({screenshot:e.target.value})}updateEmailOption(e){this.setState({EmailTrigger:e.target.value})}UpdateFromEmail(e){this.setState({checkFromEmai:!1}),this.setState({FromEmail:e.target.value})}UpdatePassword(e){this.setState({checkPassword:!1}),this.setState({FromPassword:e.target.value})}UpdateRecieverEmail(e){this.setState({checkRecemail:!1}),this.setState({ReceiverEmail:e.target.value})}UpdateExecutionNature(e){this.setState({ExecutionNature:e.target.value}),this.setState({checkExecutionNature:!1})}render(){const e={mode:"checkbox",selected:this.state.selected,onSelect:this.handleOnSelect,onSelectAll:this.handleOnSelectAll},t=[{dataField:"id",text:"#",headerStyle:{width:"50px"}},{dataField:"moduleName",text:"Module Name",headerStyle:{width:"200px"},filter:Object(F.textFilter)()},{dataField:"testid",text:"Test ID",headerStyle:{width:"120px"},filter:Object(F.textFilter)()},{dataField:"testcasename",text:"Test Case Name",filter:Object(F.textFilter)()},{dataField:"status",text:"Status",events:{onClick:(e,t,a,s,n)=>{var r=s.status;if("PASS"===r||"FAIL"===r){var o="RowId"+(n+1),i=this.state.allHTMLHyperlink[o];window.open(i)}}},headerStyle:{width:"120px"},filter:Object(F.textFilter)(),style:e=>"FAIL"===e?{backgroundColor:"#dc3545"}:"PASS"===e?{backgroundColor:"#28a745"}:void 0}];return l.a.createElement(o.a,{title:"Execution Lab",breadcrumbs:[{name:"Execution Lab",active:!0}]},l.a.createElement(D.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),l.a.createElement(d.a,null,l.a.createElement(m.a,{lg:4,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Execution Configuration"),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"Environment*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{type:"select",name:"envlist",value:this.state.ENV,onChange:this.updateENV.bind(this)},l.a.createElement(G,{options:this.state.CommonTestData})))),l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"Browser*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{type:"select",name:"browser",value:this.state.Browser,onChange:this.updateBrowser.bind(this)},l.a.createElement("option",null,"CHROME"),l.a.createElement("option",null,"FIREFOX")))),l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"ScreenShot*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{type:"select",name:"screenshot",value:this.state.screenshot,onChange:this.updateScreenshot.bind(this)},l.a.createElement("option",null,"FOR EACH STEP"),l.a.createElement("option",null,"FOR STEP FAILURE")))))))),l.a.createElement(m.a,{lg:3,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Execution Setup"),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"Run at*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{type:"select",name:"runat",value:this.state.runAt},l.a.createElement("option",null,"SELENIUM GRID")))),l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,null,"Execution Nature*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{invalid:this.state.checkExecutionNature,type:"select",name:"executionNature",value:this.state.ExecutionNature,onChange:this.UpdateExecutionNature.bind(this)},l.a.createElement("option",null),l.a.createElement("option",null,"Debugging"),l.a.createElement("option",null,"Functional")),l.a.createElement(y.a,null,this.state.feedbackExecutionNature))))))),l.a.createElement(m.a,{lg:5,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Email Configuration"),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"Email Trigger*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{type:"select",name:"email",value:this.state.EmailTrigger,onChange:this.updateEmailOption.bind(this)},l.a.createElement("option",null,"YES"),l.a.createElement("option",null,"NO")))),l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"From Email"),l.a.createElement(m.a,null,l.a.createElement(v.a,{invalid:this.state.checkFromEmai,type:"input",value:this.state.FromEmail,onChange:this.UpdateFromEmail.bind(this),type:"input",name:"fromemail",placeholder:"enter your Email Address"})))," ",l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"Password"),l.a.createElement(m.a,null,l.a.createElement(v.a,{invalid:this.state.checkPassword,type:"input",value:this.state.FromPassword,onChange:this.UpdatePassword.bind(this),name:"fromPassword",placeholder:"enter your Password"})))," ",l.a.createElement(g.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"Receiver Email"),l.a.createElement(m.a,null,l.a.createElement(v.a,{invalid:this.state.checkRecemail,type:"input",value:this.state.ReceiverEmail,onChange:this.UpdateRecieverEmail.bind(this),name:"receiveremail",placeholder:"enter your Receiver email"})))," "))))),l.a.createElement(d.a,null,l.a.createElement(m.a,{lg:12,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Executable Test Scripts",l.a.createElement(S.a,{onClick:this.LoadallTestscripts.bind(this),name:"loadTestSuite",color:"primary"},"Load Test Scripts"),l.a.createElement(S.a,{onClick:this.ExecuteTestScripts.bind(this),name:"executeTC",color:"primary"},"Execute Test Scripts"),l.a.createElement("div",{style:{visibility:this.state.showProgressText?"visible":"hidden"},className:"text-center"},this.state.totalexecutedTestcasen," of ",this.state.selected.length),l.a.createElement(D.a,{type:"ThreeDots",color:"#00BFFF",height:30,width:100,timeout:12e4,visible:this.state.loaderLoadTestScripts}),l.a.createElement(O.a,{style:{visibility:this.state.showProgressBar?"visible":"hidden"},value:this.state.totalexecutedTestcasen,max:this.state.selected.length}),l.a.createElement(x.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},l.a.createElement(N.a,{toggle:this.toggle()}," Information"),l.a.createElement(C.a,null,this.state.modalValidationText),l.a.createElement(j.a,null,l.a.createElement(S.a,{color:"secondary",onClick:this.toggle()},"OK")))),l.a.createElement(b.a,null,l.a.createElement(T.a,{keyField:"id",data:this.state.testSuiteData,columns:t,striped:!0,hover:!0,condensed:!0,pagination:P()({sizePerPage:10,hideSizePerPage:!0,hidePageListOnlyOnePage:!0}),selectRow:e,filter:M()()}))))),l.a.createElement(d.a,null,l.a.createElement(m.a,{lg:4,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Total Pass Fail Count"),l.a.createElement(b.a,{onClick:this.OpenTestSummaryFile.bind(this)},l.a.createElement(u.d,{data:(a=this.state.summaryPass,s=this.state.summaryFail,{datasets:[{data:[a,s],backgroundColor:[Object(c.a)("success"),Object(c.a)("danger")]}],labels:["PASS","FAIL"]})})))),l.a.createElement(m.a,{lg:8,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Pass Fail Count Module wise"),l.a.createElement(b.a,null,l.a.createElement(u.a,{data:q(this.state.allModule,this.state.allPassModuleWise,this.state.allFailModuleWise)}))))));var a,s}}t.default=X}}]);
//# sourceMappingURL=8.e0076b25.chunk.js.map