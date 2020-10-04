(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[30],{120:function(e,t,a){"use strict";var n=a(8),s=a(3),r=a.n(s),i=a(1),l=a.n(i);a(13);const u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},o=e=>{let t=e.tag,a=e.className,s=e.type,i=Object(n.a)(e,["tag","className","type"]);const o=r()({[s]:!!s},a);let c;return c=t||(!t&&u[s]?u[s]:"p"),l.a.createElement(c,Object.assign({},i,{className:o}))};o.defaultProps={type:"p"},t.a=o},121:function(e,t,a){"use strict";var n=a(8),s=a(1),r=a.n(s),i=(a(13),a(18)),l=a(126),u=a(127),o=a(120);const c=i.a.create("page"),m=e=>{let t=e.title,a=e.breadcrumbs,s=e.tag,i=e.className,m=e.children,d=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]);const h=c.b("px-3",i);return r.a.createElement(s,Object.assign({className:h},d),r.a.createElement("div",{className:c.e("header")},t&&"string"===typeof t?r.a.createElement(o.a,{type:"h1",className:c.e("title")},t):t,a&&r.a.createElement(l.a,{className:c.e("breadcrumb")},r.a.createElement(u.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>r.a.createElement(u.a,{key:a,active:t},e)))),m)};m.defaultProps={tag:"div",title:""},t.a=m},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));const n=(e="primary")=>{if("undefined"===typeof window)return null;return window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},s=()=>["primary","secondary","success","info","warning","danger"]},223:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return f}));var n=a(8),s=a(1),r=a.n(s),i=(a(13),a(97)),l=a(101),u=a(99),o=a(120);const c=e=>{let t=e.title,a=e.subtitle,s=e.number,c=e.color,m=e.progress,d=(m.value,m.label,Object(n.a)(e,["title","subtitle","number","color","progress"]));return r.a.createElement(i.a,Object.assign({body:!0},d),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(l.a,{tag:"div"},r.a.createElement(o.a,{className:"mb-0"},r.a.createElement("strong",null,t)),r.a.createElement(o.a,{className:"mb-0 text-muted small"},a)),r.a.createElement(u.a,{className:"text-".concat(c)},s)))};c.defaultProps={title:"",subtitle:"",number:0,color:"primary",progress:{value:0,label:""}};var m=c,d=a(3),h=a.n(d),E=a(98),p=a(100);const b=e=>{let t=e.bgColor,a=e.icon,s=e.iconProps,l=e.title,o=e.subtitle,c=e.className,m=Object(n.a)(e,["bgColor","icon","iconProps","title","subtitle","className"]);const d=h()("cr-widget",c,{["bg-".concat(t)]:t});return r.a.createElement(i.a,Object.assign({inverse:!0,className:d},m),r.a.createElement(E.a,{className:"cr-widget__icon"},r.a.createElement(a,Object.assign({size:50},s))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,l),r.a.createElement(p.a,null,o)))};b.defaultProps={bgColor:"primary",icon:"span",iconProps:{size:50}};var f=b},508:function(e,t,a){"use strict";a.r(t);var n=a(131),s=a.n(n),r=a(132),i=a(121),l=a(223),u=a(165),o=a(1),c=a.n(o),m=a(113),d=a(114),h=a(97),E=a(102),p=a(98),b=a(91),f=a(26),x=a(27),y=a(28),S=a(130),v=a(133),T=a.n(v),g=(a(134),a(148)),C=a.n(g),w=(a(149),a(150),a(151)),B=a.n(w),k=a(152),O=a.n(k),j=window.ENV.APIURL,D=window.ENV.ReportURL;function F(e,t){return{datasets:[{data:[e,t],backgroundColor:[Object(S.a)("success"),Object(S.a)("danger")]}],labels:["PASS","FAIL"]}}function L(e,t){return{datasets:[{data:[e,t],backgroundColor:[Object(S.a)("primary"),Object(S.a)("secondary")]}],labels:["PASS","FAIL"]}}function N(e){let t=[];return Object.keys(e).map(a=>t.push(e[a])),t}function M(e){let t=[];return Object.keys(e).map(e=>t.push(e)),t}function P(e=[],t={},a={}){return{labels:e,datasets:[{label:"PASS",backgroundColor:Object(S.a)("success"),borderColor:Object(S.a)("success"),borderWidth:1,data:[...t]},{label:"FAIL",backgroundColor:Object(S.a)("danger"),borderColor:Object(S.a)("danger"),borderWidth:1,data:[...a]}]}}function A(e=[],t={},a={}){return{labels:e,datasets:[{label:"PASS",backgroundColor:Object(S.a)("success"),borderColor:Object(S.a)("success"),borderWidth:1,type:"bar",fill:!0,data:[...t]},{label:"FAIL",backgroundColor:Object(S.a)("danger"),borderColor:Object(S.a)("danger"),borderWidth:1,type:"bar",fill:!0,data:[...a]}]}}function H(e=[],t={},a={}){return{labels:e,datasets:[{label:"PASS",backgroundColor:Object(S.a)("success"),borderColor:Object(S.a)("success"),borderWidth:1,data:t,fill:!1},{label:"FAIL",backgroundColor:Object(S.a)("danger"),borderColor:Object(S.a)("danger"),borderWidth:1,data:a,fill:!1}]}}function V(e=[],t={}){return{labels:e,datasets:[{label:"Execution Time in minutes",backgroundColor:Object(S.a)("primary"),borderColor:Object(S.a)("primary"),borderWidth:1,data:t,fill:!1}]}}function R(e,t){var a=0;try{a=Number(e)+Number(t)}catch(n){}return a}function I(e){var t=0;try{var a=Object.keys(e).length;t=Number(a)-Number(2)}catch(n){}return t}function W(e,t,a){var n="0 Minutes";try{var s=e+" | "+t;console.log(s),n=a[s]+" Minutes"}catch(r){}return n}function X({options:e}){return e.map(e=>c.a.createElement("option",null,e.Environment))}function U({options:e}){let t=[];for(let a=0;a<e.length;a++)t.push(e[a]);return t.map((e,a)=>c.a.createElement("option",null,t[a]))}function J({options:e}){return Object.keys(e).map(e=>c.a.createElement("option",null,e))}class _ extends c.a.Component{constructor(e){var t;super(e),t=this,this.state={items:[],summary:[],dashboardTotalDays:[],defaultEnv:"",ENV:"",EXECUTIONDATE:"",executionDateList:[],EXECUTIONHTMLTime:"",allModule:[],allModuleName:[],PassModulewise:[],allPassModuleWise:[],FailModulewise:[],allFailModuleWise:[],ConfigurationFile:[],CommonTestData:[],loader:!0,ExecutionTimeXaxis:[],ExecutionTimeYAxis:[],Build1ExecutionDate:"",Build1ExecutionTime:"",Build2ExecutionDate:"",Build2ExecutionTime:"",build1ExecutionTimeList:[],build2ExecutionTimeList:[],buildLoader:!1,Build1Summary:[],Build2Summary:[],Build1TotalExecutedScripts:0,Build2TotalExecutedScripts:0,Build1TotalExecutionTime:"00:00:00",Build2TotalExecutionTime:"00:00:00",Build1TotalComponentExecuted:0,Build2TotalComponentExecuted:0,ExecutionTimeList:[],Build1ExecutionData:[],Build2ExecutionData:[],BuildHeaderColumn:[{dataField:"id",text:"#",headerStyle:{backgroundColor:"#aa66cc"}},{dataField:"module",text:"Module",filter:Object(k.textFilter)(),headerStyle:{backgroundColor:"#aa66cc"}},{dataField:"pass",text:"PASS",headerStyle:{backgroundColor:"#aa66cc"}},{dataField:"fail",text:"Fail",headerStyle:{backgroundColor:"#aa66cc"}},{dataField:"buildmoduleexetime",text:"Execution Time",headerStyle:{backgroundColor:"#aa66cc"}}],Build1SummarySection:!1,Build2SummarySection:!1,buildLoader2:!1};(function(){var e=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"dashboard");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).success&&(t.setState({ConfigurationFile:n.Configuration}),t.setState({CommonTestData:n.CommonTestData}),t.setState({defaultEnv:t.state.ConfigurationFile.DefaultEnvironment}),t.setState({ENV:t.state.ConfigurationFile.DefaultEnvironment}),console.log(n.Configuration.DashboardHistoryCount),t.setState({EXECUTIONDATE:"Last "+n.Configuration.DashboardHistoryCount+" Execution Results"}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"as");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({items:n}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?env="+t.state.ConfigurationFile.DefaultEnvironment+"&edate=Last "+t.state.ConfigurationFile.DashboardHistoryCount+" Execution Results");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({summary:n}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?dashboardtotaldays="+t.state.ConfigurationFile.DashboardTotalDayCount);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({dashboardTotalDays:N(n)}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"testcase?moduleName=");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({allModuleName:n}),i=N(t.state.allModuleName),t.setState({allModule:i}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"dashboard?env="+t.state.ENV+"&histortyCount="+t.state.ConfigurationFile.DashboardHistoryCount+"&id=0");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({PassModulewise:n}),i=N(t.state.PassModulewise),t.setState({allPassModuleWise:i}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"dashboard?env="+t.state.ENV+"&histortyCount="+t.state.ConfigurationFile.DashboardHistoryCount+"&id=1");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({FailModulewise:n}),i=N(t.state.FailModulewise),t.setState({allFailModuleWise:i}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"dashboard?env="+t.state.ENV+"&histortyCount="+t.state.ConfigurationFile.DashboardHistoryCount);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({ExecutionTimeList:n}),t.setState({ExecutionTimeXaxis:M(n)}),t.setState({ExecutionTimeYAxis:N(n)}),t.setState({loader:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),window.scrollTo(0,0)}updateENV(e){var t=this,a=this.state.ENV,n=e.target.value;if(this.setState({ENV:n}),a!==n){if(this.state.EXECUTIONDATE.includes("Execution Results")){this.setState({executionDateList:""}),this.setState({loader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?env="+n+"&edate=Last "+t.state.ConfigurationFile.DashboardHistoryCount+" Execution Results");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t.setState({summary:r}),t.setState({loader:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else{this.setState({loader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?env="+n+"&executiondate="+t.state.EXECUTIONDATE);case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t.setState({executionDateList:r}),t.setState({loader:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}if(a!==n){this.setState({loader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var a,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"dashboard?env="+n+"&histortyCount="+t.state.ConfigurationFile.DashboardHistoryCount+"&id=0");case 2:return a=e.sent,e.next=5,a.json();case 5:i=e.sent,t.setState({PassModulewise:i}),l=N(t.state.PassModulewise),t.setState({allPassModuleWise:l}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"dashboard?env="+n+"&histortyCount="+t.state.ConfigurationFile.DashboardHistoryCount+"&id=1");case 2:return a=e.sent,e.next=5,a.json();case 5:i=e.sent,t.setState({FailModulewise:i}),l=N(t.state.FailModulewise),t.setState({allFailModuleWise:l}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"testcase?moduleName=");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({allModuleName:n}),i=N(t.state.allModuleName),t.setState({allModule:i}),function(){var e=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"dashboard?env="+t.state.ENV+"&histortyCount="+t.state.ConfigurationFile.DashboardHistoryCount);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({ExecutionTimeList:n}),t.setState({ExecutionTimeXaxis:M(n)}),t.setState({ExecutionTimeYAxis:N(n)}),t.setState({loader:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}}OpenHTMLfileForLastResults(){var e=j+"report?id=0";(function(){var t=Object(r.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:"true"===(n=t.sent).success.toLowerCase()&&(r=n.servermessage,window.open(D+"TestSuiteSummaryfile/"+r));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}OpenHTMLfilebasedonDateandTime(){var e=this.state.ENV;if(""!==e.trim()){var t=this.state.EXECUTIONDATE;if(t.trim()!=="Last "+this.state.ConfigurationFile.DashboardHistoryCount+" Execution Results"&&""!==t.trim()){var a=this.state.EXECUTIONHTMLTime;if(""!==a.trim()){var n="",s=t.toString().split(" ");switch(s[1]){case"Jan":n="01";break;case"Feb":n="02";break;case"Mar":n="03";break;case"Apr":n="04";break;case"May":n="05";break;case"Jun":n="06";break;case"Jul":n="07";break;case"Aug":n="08";break;case"Sep":n="09";break;case"Oct":n="10";break;case"Nov":n="11";break;case"Dec":n="12"}var r="TestSummary_"+e+"_"+(n+"-"+s[0]+"-"+s[2])+"_"+a+".html";window.open(D+"TestSuiteSummaryfile/"+e+"/"+r)}}}}OpenHTMLfileforBuild(){var e=this.state.ENV,t=this.state.Build1ExecutionDate,a=this.state.Build1ExecutionTime;if(""!==e.trim()&&""!==t.trim()&&""!==a.trim()){var n="",s=t.toString().split(" ");switch(s[1]){case"Jan":n="01";break;case"Feb":n="02";break;case"Mar":n="03";break;case"Apr":n="04";break;case"May":n="05";break;case"Jun":n="06";break;case"Jul":n="07";break;case"Aug":n="08";break;case"Sep":n="09";break;case"Oct":n="10";break;case"Nov":n="11";break;case"Dec":n="12"}var r="TestSummary_"+e+"_"+(n+"-"+s[0]+"-"+s[2])+"_"+a+".html";window.open(D+"TestSuiteSummaryfile/"+e+"/"+r)}}OpenHTMLfileforBuild2(){var e=this.state.ENV,t=this.state.Build2ExecutionDate,a=this.state.Build2ExecutionTime;if(""!==e.trim()&&""!==t.trim()&&""!==a.trim()){var n="",s=t.toString().split(" ");switch(s[1]){case"Jan":n="01";break;case"Feb":n="02";break;case"Mar":n="03";break;case"Apr":n="04";break;case"May":n="05";break;case"Jun":n="06";break;case"Jul":n="07";break;case"Aug":n="08";break;case"Sep":n="09";break;case"Oct":n="10";break;case"Nov":n="11";break;case"Dec":n="12"}var r="TestSummary_"+e+"_"+(n+"-"+s[0]+"-"+s[2])+"_"+a+".html";window.open(D+"TestSuiteSummaryfile/"+e+"/"+r)}}updateExecutionDate(e){var t=this,a=e.target.value;if(this.setState({EXECUTIONDATE:e.target.value}),a.includes("Execution Results")){this.setState({executionDateList:""}),this.setState({loader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?env="+t.state.ENV+"&edate=Last "+t.state.ConfigurationFile.DashboardHistoryCount+" Execution Results");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setState({summary:n}),t.setState({loader:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else{this.setState({loader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?env="+t.state.ENV+"&executiondate="+a);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setState({executionDateList:r}),t.setState({loader:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}updateBuild1ExecutionDate(e){var t=this,a=e.target.value;if(a===this.state.Build1ExecutionDate)return;this.setState({Build1ExecutionTime:""}),this.setState({Build1ExecutionDate:e.target.value}),this.setState({buildLoader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?env="+t.state.ENV+"&executiondate="+a);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setState({build1ExecutionTimeList:r}),t.setState({buildLoader:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}updateBuild2ExecutionDate(e){var t=this,a=e.target.value;if(a===this.state.Build2ExecutionDate)return;this.setState({Build2ExecutionTime:""}),this.setState({Build2ExecutionDate:e.target.value}),this.setState({buildLoader2:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"summary?env="+t.state.ENV+"&executiondate="+a);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setState({build2ExecutionTimeList:r}),t.setState({buildLoader2:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}graphPopulateBasedOnExecutionTime(e){var t=this,a=e.target.value;this.setState({EXECUTIONHTMLTime:a});var n=j+"summary?env="+this.state.ENV+"&edate="+this.state.EXECUTIONDATE+"&etime="+a;this.setState({loader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t.setState({summary:r}),t.setState({loader:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}Build1Graph(e){var t=this,a=e.target.value;if(a===this.state.Build1ExecutionTime)return;this.setState({Build1ExecutionTime:a});var n=j+"summary?env="+this.state.ENV+"&edate="+this.state.Build1ExecutionDate+"&etime="+a;this.setState({buildLoader:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var a,r,i,l,u,o,c,m,d,h,E,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return a=e.sent,e.next=5,a.json();case 5:for(r=e.sent,t.setState({Build1Summary:r}),t.setState({Build1TotalExecutedScripts:R(r.SummaryPass,r.SummaryFail)}),t.setState({Build1TotalComponentExecuted:I(r)}),i=W(t.state.Build1ExecutionDate,t.state.Build1ExecutionTime,t.state.ExecutionTimeList),t.setState({Build1TotalExecutionTime:i}),t.setState({Build1SummarySection:!0}),l=Object.keys(r),u=[],o=0;o<l.length;o++)if(c={},"SummaryPass"===(m=l[o])||"SummaryFail"===m);else try{d=r[m],h=d.split("|")[0],E=d.split("|")[1],p=d.split("|")[2],c.id=o+1,c.module=m,c.pass=h,c.fail=E,c.buildmoduleexetime=p+" Minutes",u.push(c)}catch(s){}t.setState({Build1ExecutionData:u}),t.setState({buildLoader:!1});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}Build2Graph(e){var t=this,a=e.target.value;if(a===this.state.Build2ExecutionTime)return;this.setState({Build2ExecutionTime:a});var n=j+"summary?env="+this.state.ENV+"&edate="+this.state.Build2ExecutionDate+"&etime="+a;this.setState({buildLoader2:!0});(function(){var e=Object(r.a)(s.a.mark((function e(){var a,r,i,l,u,o,c,m,d,h,E,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return a=e.sent,e.next=5,a.json();case 5:for(r=e.sent,t.setState({Build2Summary:r}),t.setState({Build2TotalExecutedScripts:R(r.SummaryPass,r.SummaryFail)}),t.setState({Build2TotalComponentExecuted:I(r)}),i=W(t.state.Build2ExecutionDate,t.state.Build2ExecutionTime,t.state.ExecutionTimeList),t.setState({Build2TotalExecutionTime:i}),t.setState({Build2SummarySection:!0}),l=Object.keys(r),u=[],o=0;o<l.length;o++)if(c={},"SummaryPass"===(m=l[o])||"SummaryFail"===m);else try{d=r[m],h=d.split("|")[0],E=d.split("|")[1],p=d.split("|")[2],c.id=o+1,c.module=m,c.pass=h,c.fail=E,c.buildmoduleexetime=p+" Minutes",u.push(c)}catch(s){}t.setState({Build2ExecutionData:u}),t.setState({buildLoader2:!1});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}render(){var e=this.state,t=e.items,a=e.summary,n=e.defaultEnv,s=e.executionDateList,r=0;try{r=t.map((e,t)=>e.totalpass)}catch(D){}var o=0;try{o=t.map((e,t)=>e.totalfail)}catch(D){}var S=a.SummaryPass,v=a.SummaryFail,g=function(e){let t=[],a=[];Object.keys(e).map(e=>t.push(e));for(let n=0;n<t.length-2;n++)a.push(t[n]);return a}(a),w=function(e){let t=[],a=[];Object.keys(e).map(a=>t.push(e[a].split("|")[0]));for(let n=0;n<t.length-2;n++)a.push(t[n]);return a}(a),k=function(e){let t=[],a=[];Object.keys(e).map(a=>t.push(e[a].split("|")[1]));for(let n=0;n<t.length-2;n++)a.push(t[n]);return a}(a);const j={sizePerPage:5,hideSizePerPage:!0,hidePageListOnlyOnePage:!0};return c.a.createElement(i.a,{className:"DashboardPage",title:"Dashboard",breadcrumbs:[{name:"Dashboard",active:!0}]},c.a.createElement(T.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),c.a.createElement(m.a,null,c.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},c.a.createElement(l.b,{title:"Total Test Sctipts",try:!0,number:t.map((e,t)=>e.totaltestscripts),color:"secondary"})),c.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},c.a.createElement(l.b,{title:"Total Components",number:t.map((e,t)=>e.totalcomponents),color:"secondary"})),c.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},c.a.createElement(l.b,{title:"Total Custom Function",number:t.map((e,t)=>e.totalcustomfunction),color:"secondary"})),c.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},c.a.createElement(l.b,{onClick:this.OpenHTMLfileForLastResults.bind(this),title:"Last Results",subtitle:"PASS: "+r+" FAIL: "+o,number:t.map((e,t)=>e.lastresult),color:"secondary"}))),c.a.createElement(m.a,null,c.a.createElement(d.a,{lg:6,md:6,sm:6,xs:12},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Selection Citieria"),c.a.createElement(p.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{row:!0},c.a.createElement(x.a,{for:"exampleSelect",sm:4},"Environment*"),c.a.createElement(d.a,null,c.a.createElement(y.a,{type:"select",name:"env",defaultValue:n,value:this.state.text,onChange:this.updateENV.bind(this)},c.a.createElement(X,{options:this.state.CommonTestData})))),c.a.createElement(f.a,{row:!0},c.a.createElement(x.a,{for:"exampleSelect",sm:4},"Execution Summary*"),c.a.createElement(d.a,null,c.a.createElement(y.a,{type:"select",name:"executionsummary",value:this.state.text,onChange:this.updateExecutionDate.bind(this)},c.a.createElement("option",null,"Last ",this.state.ConfigurationFile.DashboardHistoryCount," Execution Results"),c.a.createElement(U,{options:this.state.dashboardTotalDays})))),c.a.createElement(f.a,{row:!0},c.a.createElement(x.a,{for:"exampleSelect",sm:4},"Execution Time"),c.a.createElement(d.a,null,c.a.createElement(y.a,{type:"select",name:"executiontime",defaultValue:"",value:this.state.text,onChange:this.graphPopulateBasedOnExecutionTime.bind(this)},c.a.createElement("option",null),c.a.createElement(J,{options:s})))))))),c.a.createElement(d.a,{xl:6},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Total Pass Fail Count"),c.a.createElement(p.a,null,c.a.createElement(d.a,{onClick:this.OpenHTMLfilebasedonDateandTime.bind(this)},c.a.createElement(u.d,{data:F(S,v)})))))),c.a.createElement(m.a,null,c.a.createElement(d.a,{lg:12,md:6,sm:6,xs:12},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Execution Status",c.a.createElement("small",null," Last ",this.state.ConfigurationFile.DashboardHistoryCount," Results")),c.a.createElement(p.a,null,c.a.createElement(u.c,{data:P(g,w,k),options:{scales:{xAxes:[{scaleLabel:{display:!0}}],yAxes:[{stacked:!0,scaleLabel:{display:!0}}]}}})))),c.a.createElement(d.a,{lg:12,md:6,sm:6,xs:12},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Execution Summary",c.a.createElement("small",null," Last ",this.state.ConfigurationFile.DashboardHistoryCount," Results")),c.a.createElement(p.a,null,c.a.createElement(u.a,{data:A(g,w,k),options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})))),c.a.createElement(d.a,{lg:12,md:6,sm:6,xs:12},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Module Pass/Fail Graph",c.a.createElement("small",null," Last ",this.state.ConfigurationFile.DashboardHistoryCount," Results")),c.a.createElement(p.a,null,c.a.createElement(u.c,{data:H(this.state.allModule,this.state.allPassModuleWise,this.state.allFailModuleWise)})))),c.a.createElement(d.a,{lg:12,md:6,sm:6,xs:12},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Execution Time in Minutes",c.a.createElement("small",null," Last ",this.state.ConfigurationFile.DashboardHistoryCount," Results")),c.a.createElement(p.a,null,c.a.createElement(u.c,{data:V(this.state.ExecutionTimeXaxis,this.state.ExecutionTimeYAxis)}))))),c.a.createElement(m.a,null,c.a.createElement(d.a,{xs:6},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Build Comparison (Build 1)",c.a.createElement(T.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.buildLoader})),c.a.createElement(p.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{row:!0},c.a.createElement(x.a,{for:"exampleSelect",sm:4},"Execution Summary*"),c.a.createElement(d.a,null,c.a.createElement(y.a,{type:"select",name:"executionsummary",value:this.state.Build1ExecutionDate,onChange:this.updateBuild1ExecutionDate.bind(this)},c.a.createElement("option",null),c.a.createElement(U,{options:this.state.dashboardTotalDays})))),c.a.createElement(f.a,{row:!0},c.a.createElement(x.a,{for:"exampleSelect",sm:4},"Execution Time"),c.a.createElement(d.a,null,c.a.createElement(y.a,{type:"select",name:"executiontime",value:this.state.Build1ExecutionTime,onChange:this.Build1Graph.bind(this)},c.a.createElement("option",null),c.a.createElement(J,{options:this.state.build1ExecutionTimeList})))),c.a.createElement(f.a,{col:!0,style:{visibility:this.state.Build1SummarySection?"visible":"hidden"}},c.a.createElement(d.a,{onClick:this.OpenHTMLfileforBuild.bind(this)},c.a.createElement(u.b,{data:L(this.state.Build1Summary.SummaryPass,this.state.Build1Summary.SummaryFail)})),c.a.createElement(l.b,{title:"Total Executed Test Scripts",number:this.state.Build1TotalExecutedScripts}),c.a.createElement(l.b,{title:"Total Execution Time",number:this.state.Build1TotalExecutionTime}),c.a.createElement(l.b,{title:"Total Executed Components",number:this.state.Build1TotalComponentExecuted})),c.a.createElement(f.a,{col:!0,style:{visibility:this.state.Build1SummarySection?"visible":"hidden"}},c.a.createElement(C.a,{keyField:"id",data:this.state.Build1ExecutionData,columns:this.state.BuildHeaderColumn,striped:!0,hover:!0,condensed:!0,pagination:B()(j),filter:O()()})))))),c.a.createElement(d.a,{lg:6,md:6,sm:6,xs:12},c.a.createElement(h.a,null,c.a.createElement(E.a,null,"Build Comparison (Build 2)",c.a.createElement(T.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.buildLoader2})),c.a.createElement(p.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{row:!0},c.a.createElement(x.a,{for:"exampleSelect",sm:4},"Execution Summary*"),c.a.createElement(d.a,null,c.a.createElement(y.a,{type:"select",name:"executionsummary2",value:this.state.Build2ExecutionDate,onChange:this.updateBuild2ExecutionDate.bind(this)},c.a.createElement("option",null),c.a.createElement(U,{options:this.state.dashboardTotalDays})))),c.a.createElement(f.a,{row:!0},c.a.createElement(x.a,{for:"exampleSelect",sm:4},"Execution Time"),c.a.createElement(d.a,null,c.a.createElement(y.a,{type:"select",name:"executiontime2",value:this.state.Build2ExecutionTime,onChange:this.Build2Graph.bind(this)},c.a.createElement("option",null),c.a.createElement(J,{options:this.state.build2ExecutionTimeList})))),c.a.createElement(f.a,{col:!0,style:{visibility:this.state.Build2SummarySection?"visible":"hidden"}},c.a.createElement(d.a,{onClick:this.OpenHTMLfileforBuild2.bind(this)},c.a.createElement(u.b,{data:L(this.state.Build2Summary.SummaryPass,this.state.Build2Summary.SummaryFail)})),c.a.createElement(l.b,{title:"Total Executed Test Scripts",number:this.state.Build2TotalExecutedScripts}),c.a.createElement(l.b,{title:"Total Execution Time",number:this.state.Build2TotalExecutionTime}),c.a.createElement(l.b,{title:"Total Executed Components",number:this.state.Build2TotalComponentExecuted})),c.a.createElement(f.a,{col:!0,style:{visibility:this.state.Build2SummarySection?"visible":"hidden"}},c.a.createElement(C.a,{keyField:"id",data:this.state.Build2ExecutionData,columns:this.state.BuildHeaderColumn,striped:!0,hover:!0,condensed:!0,pagination:B()(j),filter:O()()}))))))))}}t.default=_}}]);
//# sourceMappingURL=30.d718f850.chunk.js.map