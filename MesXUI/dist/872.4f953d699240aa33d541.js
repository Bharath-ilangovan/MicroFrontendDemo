"use strict";(self.webpackChunkmesxui=self.webpackChunkmesxui||[]).push([[872],{4202:(e,t,o)=>{var n=o(4994);t.A=void 0;var r=n(o(2032)),i=o(4848);t.A=(0,r.default)((0,i.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home")},2032:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=o(8928)},6563:(e,t,o)=>{o.d(t,{A:()=>s});var n=o(1601),r=o.n(n),i=o(6314),a=o.n(i)()(r());a.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}.container-main{background-color:#f8f7f6}@media only screen and (min-resolution: 1dppx){body{background-color:#fefefe}}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}::-webkit-scrollbar-thumb{background:#dcdcdc;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#b0b0b0}*{scrollbar-width:thin;scrollbar-color:#dcdcdc #f1f1f1}",""]);const s=a},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},1601:e=>{e.exports=function(e){return e[1]}},5338:(e,t,o)=>{var n=o(9090);t.H=n.createRoot,n.hydrateRoot},5072:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=i[l]||0,h="".concat(l," ").concat(d);i[l]=d+1;var p=o(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=r(u,n);n.byIndex=s,t.splice(s,0,{identifier:h,updater:f,references:1})}a.push(h)}return a}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=o(i[a]);t[s].references--}for(var c=n(e,r),l=0;l<i.length;l++){var d=o(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},7659:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},5872:(e,t,o)=>{var n=o(4848),r=o(5338),i=o(8393),a=o(5770),s=o.n(a),c=o(9989);const l=o.p+"9bf71ef2f9008a7dfd6c02fdf8c1f3c3.svg",d=o.p+"c3830a4cbabc97f3fb6b61627df66a48.svg",h=o.p+"c969c5746fbc9c03098e1d6614245781.svg",p=o.p+"ddf37aa15c65809f8a901fe21b5ab273.svg",u=o.p+"76275ed12c9110ff388bc6d12528a700.svg",f=[{text:"MASTER DATA",icon:l,node:1,path:"/masterdata"},{text:"SECURITY",icon:d,node:2,path:"/security"},{text:"WIP",icon:h,node:3,path:"/WIP"},{text:"MAINTENANCE",icon:p,node:4,path:"/Maintenance"},{text:"INVENTORY",icon:u,node:5,path:"/Inventory"},{text:"QMS",icon:o.p+"e641c475cb6d372934d7b474a3f4ab8b.svg",node:6,path:"/QMS"},{text:"IIOT HUB",icon:u,node:7,path:"/IIOTHub"},{text:"INTEGRATION MANAGER",icon:o.p+"ce2c63f008790ba38d8c1426a4afd50c.svg",node:8,path:"/IntegrationManager"},{text:"FLOW MANAGER",icon:o.p+"a76816fe4c00fd50e669d2418734f145.svg",node:9,path:"/FlowManager"},{text:"DASHBOARD BUILDER",icon:o.p+"a52fd35c38457a842cbd948e9177893f.svg",node:10,path:"/DashboardBuilder"},{text:"AR MANAGER",icon:o.p+"bee207e3d9835961ffa9c0a8a80d68ba.svg",node:11,path:"/ARManager"},{text:"LICENSE MANAGER",icon:o.p+"a5bf9144af61c556b4afade648239e81.svg",node:12,path:"/LicenseManager"}],x=({handleClose:e,open:t,onClose:o})=>{const[r,s]=(0,a.useState)(void 0),l=(0,i.useNavigate)();return(0,n.jsx)(c.Drawer,{sx:{width:"13vh",flexShrink:0,"& .MuiDrawer-paper":{mt:"5vh",width:"13vw",boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:t,transitionDuration:500,children:(0,n.jsx)(c.Grid,{container:!0,children:f.map(((e,t)=>(0,n.jsx)(c.Grid,{item:!0,xs:6,children:(0,n.jsxs)(c.IconButton,{onClick:()=>{return t=e.path,s(t),void l(t);var t},sx:{display:"flex",flexDirection:"column",p:0,py:2,px:2,borderRadius:0},disableRipple:!0,children:[(0,n.jsx)("img",{src:e.icon,alt:e.text}),(0,n.jsx)(c.Typography,{sx:{fontSize:"1vh"},children:e.text})]})},e.node)))})})},v=({icon:e,onClick:t,sx:o})=>(0,n.jsx)(c.IconButton,{disableRipple:!0,onClick:t,style:{padding:0},sx:o,children:(0,n.jsx)("img",{src:e,style:{height:"2vh"}})}),g=({onClick:e,sx:t,icon:o})=>(0,n.jsx)(c.IconButton,{disableRipple:!0,onClick:e,style:{padding:0},sx:t,children:(0,n.jsx)("img",{src:o,style:{height:"2vh"}})}),m=({sx:e,icon:t,settingsComponent:o,settingsOnCLick:r})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.IconButton,{disableRipple:!0,style:{padding:0},sx:e,onClick:r,children:(0,n.jsx)("img",{src:t,style:{height:"2vh"}})}),o]}),b={color:"#000",fontSize:"16px",py:1.3,fontWeight:500,letterSpacing:.5},j=({src:e,tooltiptitle:t,borderColor:o,sx:r,size:i,logoutOnClick:l,username:d,role:h})=>{const[p,u]=(0,a.useState)(""),[f,x]=s().useState(null),v=Boolean(f),g=()=>{x(null)};return(0,a.useEffect)((()=>{d&&u((e=>{let t=0;e.split("").forEach((e=>{t=e.charCodeAt(0)+((t<<5)-t)}));let o="#";for(let e=0;e<3;e++)o+=(t>>8*e&255).toString(16).padStart(2,"0");return o})(null==d?void 0:d.replace(/[^a-zA-Z0-9]+/g,"")))}),[d]),(0,n.jsxs)(s().Fragment,{children:[(0,n.jsx)(c.Tooltip,{title:t||"profile",arrow:!0,children:(0,n.jsx)(c.IconButton,{onClick:e=>{x(e.currentTarget)},size:"small",sx:{ml:"0.2vh"},"aria-controls":v?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":v?"true":void 0,children:(0,n.jsx)(c.Avatar,{variant:"circular",alt:"#",style:{width:i||"3vh",height:i||"3vh",border:`0.2vh solid ${null!=o?o:"#cecece"}`,backgroundColor:p,textTransform:"capitalize",fontSize:"2vh"},sx:r,children:d&&(null==d?void 0:d.replace(/[^a-zA-Z0-9]+/g,"")[0])||"A"})})}),(0,n.jsxs)(c.Menu,{anchorEl:f,open:v,onClose:g,onClick:g,sx:{width:"27.5vh",".MuiList-root":{py:0,borderBottom:"0.2vh solid #002856",borderBottomLeftRadius:8,borderBottomRightRadius:8},".MuiPaper-root":{borderBottom:"0.2vh solid #002856",borderBottomLeftRadius:8,borderBottomRightRadius:8}},slotProps:{paper:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:"0.15vh","& .MuiAvatar-root":{width:"3.2vw",height:"3.2vh",ml:"-0.05vh",mr:"0.1vh"},"&::before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:"1vh",height:"1vh",bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,n.jsxs)(c.MenuItem,{sx:{py:"0.14vh",width:"27.5vh"},children:[(0,n.jsx)(c.Avatar,{style:{width:"2.9vh",height:"2.9vh",border:`0.2vh solid ${null!=o?o:"#cecece"}`,backgroundColor:p,textTransform:"capitalize",fontSize:"2vh"},children:d&&(null==d?void 0:d.replace(/[^a-zA-Z0-9]+/g,"")[0])||"A"}),(0,n.jsxs)(c.Stack,{children:[(0,n.jsx)(c.Typography,{sx:{fontWeight:600,textTransform:"capitalize"},fontSize:{md:"1rem",lg:"0.8rem",xl:"0.6rem"},children:d||"Username"}),(0,n.jsx)(c.Typography,{sx:{fontWeight:300},fontSize:"0.625rem",children:h||"Role"})]})]}),(0,n.jsx)(c.Box,{sx:{borderBottom:1,color:"#E0E0E0"}}),(0,n.jsx)(c.MenuItem,{onClick:l,sx:b,disabled:!0,children:"Edit Profile"}),(0,n.jsx)(c.MenuItem,{onClick:l,sx:b,disabled:!0,children:"Add Another Account"}),(0,n.jsx)(c.Box,{sx:{borderBottom:1,color:"#E0E0E0"}}),(0,n.jsx)(c.MenuItem,{onClick:l,sx:b,children:"Logout"})]})]})},y=o.p+"13a9b938e311095867d2a6c4931a336d.svg",C=({onClick:e})=>(0,n.jsx)(c.IconButton,{sx:{width:"5vh",height:"5vh",borderRadius:0,backgroundColor:"#F15D22",top:0,left:0,p:0,"&:hover":{backgroundColor:"#F15D22",opacity:.95}},disableRipple:!0,onClick:e,children:(0,n.jsx)("img",{src:y,style:{height:"2.5vh"}})});var k=o(4202);const A=({onClick:e,sx:t,icon:o})=>(0,n.jsx)(c.Icon,{onClick:e,style:{padding:0,height:"3.3vh",minHeight:"3.3vh",maxHeight:"3.3vh"},sx:[t,{mx:1}],children:(0,n.jsx)("img",{src:o})}),R=o.p+"2eda43f8e2bf8609d885d49ffe893a03.svg",S=o.p+"0d7eea302f69f0b38f1ed771f2a024fd.svg",w=o.p+"2299149007d504a46ae8c0d0be574390.svg",I=o.p+"e5be18f6c865b5583fe11832a36311a4.svg",M=(0,c.styled)(c.AppBar)((({theme:e})=>({position:"fixed",backgroundColor:"#002856",boxShadow:"none",paddingRight:"1.1vh",justifyContent:"center",zIndex:1}))),E=e=>(0,n.jsxs)(c.Stack,{sx:{height:"2.6vh",maxHeight:"2.6vh",textTransform:"capitalize",ml:"2.0vh"},direction:"row",alignItems:"center",flexGrow:1,style:e.style,children:[(0,n.jsx)("img",{src:S,style:{height:"3.6vh"}}),(0,n.jsx)(c.Typography,{mt:{md:"0.5vh",lg:"0.5vh",xl:"0.75vh"},fontSize:{md:"1.2rem",lg:"1rem",xl:"0.6rem"},fontWeight:600,color:"#fff",children:e.version})]}),T=({homeOnClick:e})=>(0,n.jsx)(c.IconButton,{disableRipple:!0,onClick:e,style:{padding:0},children:(0,n.jsx)(k.A,{sx:{color:"#FFFFFF",padding:0},style:{height:"2.5vh"}})}),B=({version:e,profilePicture:t,settingsComponent:o,settingsOnCLick:r,settings:i,info:a,notification:s,home:l,homeOnClick:d,moduleOnclick:h,brandlogo:p,brandlogoSx:u,brandlogoOnClick:f,profileLogoutOnClick:x,profileTooltipTitle:b,profileUserName:y,profileRole:k,profileBorderColor:S})=>(0,n.jsx)(M,{sx:{height:"5vh"},children:(0,n.jsxs)(c.Stack,{direction:"row",sx:{alignItems:"center"},children:[(0,n.jsx)(C,{onClick:h}),(0,n.jsx)(E,{version:null!=e?e:"MES X.0"}),(0,n.jsxs)(c.Stack,{direction:"row",style:{zIndex:9999},spacing:"2.88vh",justifyContent:"center",children:[p&&(0,n.jsx)(A,{onClick:f,sx:u,icon:p}),a&&(0,n.jsx)(v,{icon:w}),s&&(0,n.jsx)(g,{icon:I}),l&&(0,n.jsx)(T,{homeOnClick:d}),i&&(0,n.jsx)(m,{icon:R,settingsComponent:o,settingsOnCLick:r}),(0,n.jsx)(j,{src:t,logoutOnClick:x,tooltiptitle:b,username:y,role:k,borderColor:S})]})]})}),z=(0,i.createBrowserRouter)((0,i.createRoutesFromElements)((0,n.jsxs)(i.Route,{path:"/",children:[(0,n.jsxs)(i.Route,{path:"",element:(0,n.jsx)((e=>{const[t,o]=s().useState(!1),r=()=>{o(!1)};return(0,n.jsxs)(s().Fragment,{children:[(0,n.jsx)(B,{version:"MES x.0",notification:!0,info:!0,settings:!0,moduleOnclick:()=>{o(!t)}}),(0,n.jsx)(x,{handleClose:r,open:t,onClose:r}),(0,n.jsx)("div",{style:{marginTop:"5vh",width:"100vw"},children:(0,n.jsx)(i.Outlet,{})})]})}),{}),children:[(0,n.jsx)(i.Route,{path:"security",element:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{children:"loading..."}),children:(0,n.jsx)("h1",{children:"sec"})})}),(0,n.jsx)(i.Route,{path:"masterdata",element:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{children:"loading..."}),children:(0,n.jsx)("h1",{children:"mas"})})}),(0,n.jsx)(i.Route,{path:"*",element:(0,n.jsx)("h1",{children:"Page Not Found SUb"})})]}),(0,n.jsx)(i.Route,{path:"*",element:(0,n.jsx)("h1",{children:"Page Not Found"})})]})));var O=o(5072),F=o.n(O),N=o(7825),L=o.n(N),P=o(7659),D=o.n(P),H=o(5056),G=o.n(H),U=o(540),W=o.n(U),Y=o(1113),Z=o.n(Y),Q=o(6563),$={};$.styleTagTransform=Z(),$.setAttributes=G(),$.insert=D().bind(null,"head"),$.domAPI=L(),$.insertStyleElement=W(),F()(Q.A,$),Q.A&&Q.A.locals&&Q.A.locals;const _=e=>(0,n.jsx)(i.RouterProvider,{router:z}),q=document.getElementById("root");q?(0,r.H)(q).render((0,n.jsx)(_,{})):console.error("Root element with id 'root' not found in HTML.")}}]);