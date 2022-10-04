(function(){"use strict";var e={1378:function(e,t,n){var o=n(9242),i=n(3396);const s=(0,i._)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"},null,-1),l=(0,i._)("div",{style:{"font-size":"22px","margin-bottom":"8px","font-weight":"bolder"}},"Json Creator",-1),r={style:{display:"flex"}},a={style:{width:"65%",height:"800px",border:"1px solid #d7d7d7",overflow:"auto","padding-left":"16px"}},d=(0,i._)("div",{style:{height:"80vh","border-right":"1px solid #d7d7d7",margin:"0px 16px"}},null,-1),p={style:{width:"35%",height:"800px",border:"1px solid #d7d7d7",overflow:"auto","padding-left":"22px"}};function y(e,t,n,o,y,c){const u=(0,i.up)("importJsonDialog"),g=(0,i.up)("JsonList"),h=(0,i.up)("JsonDemo");return(0,i.wg)(),(0,i.iD)(i.HY,null,[s,l,(0,i.Wm)(u,{onImportJson:c.importJson},null,8,["onImportJson"]),(0,i._)("div",r,[(0,i._)("div",a,[(0,i.Wm)(g,{list:y.objList,onChangeType:c.changeType,onAddObj:c.addObj,onRemoveObj:c.removeObj,style:{"margin-right":"10px"}},null,8,["list","onChangeType","onAddObj","onRemoveObj"])]),d,(0,i._)("div",p,[(0,i.Wm)(h,{list:y.objList,first:!0,parentLength:y.objList.length},null,8,["list","parentLength"])])])],64)}n(7658);const c={style:{display:"flex","margin-left":"8px"}},u={key:0},g=(0,i.Uk)("{"),h=(0,i.Uk)("["),f={style:{display:"flex",border:"1px dashed #d7d7d7",padding:"8px","margin-left":"8px"}},v=["onClick"],w={key:0,style:{display:"flex"}},m=["onUpdate:modelValue"],k=(0,i._)("div",{style:{margin:"6px 8px 0px 8px","font-size":"16px","font-weight":"bold"}},":",-1),x={key:0},b=["onUpdate:modelValue"],j=["onUpdate:modelValue"],D={style:{"margin-top":"8px"}},_=["onUpdate:modelValue","onChange"],L=(0,i._)("option",{value:"object"},"Object",-1),C=(0,i._)("option",{value:"string"},"String",-1),O=(0,i._)("option",{value:"array"},"Array",-1),T=(0,i._)("option",{value:"number"},"Number",-1),U=[L,C,O,T],J={key:1},H={style:{"margin-left":"10px","margin-top":"-8px"}},N=(0,i.Uk)("}"),Y=(0,i.Uk)("]");function A(e,t,n,s,l,r){const a=(0,i.up)("json-list",!0);return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",c,[(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.list,((s,l)=>((0,i.wg)(),(0,i.iD)("div",{key:s.id,style:{"margin-top":"10px"}},[0==l?((0,i.wg)(),(0,i.iD)("div",u,[s.show?((0,i.wg)(),(0,i.iD)("i",{key:0,class:"fa-solid fa-caret-down expand-icon",onClick:t[0]||(t[0]=e=>r.collapseList())})):((0,i.wg)(),(0,i.iD)("i",{key:1,class:"fa-solid fa-caret-up expand-icon",onClick:t[1]||(t[1]=e=>r.expandList())})),"array"!==n.parentType?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[g],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[h],64))])):(0,i.kq)("",!0),(0,i.wy)((0,i._)("div",f,[(0,i._)("i",{class:"fa fa-xmark deleteBtn",onClick:(0,o.iM)((t=>e.$emit("removeObj",{index:l,list:n.list})),["prevent"])},null,8,v),"array"!==n.parentType?((0,i.wg)(),(0,i.iD)("div",w,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e=>s.key=e},null,8,m),[[o.nr,s.key]]),k])):(0,i.kq)("",!0),(0,i._)("div",null,[s.hasChildNode?((0,i.wg)(),(0,i.j4)(a,{key:1,list:s.objList,style:{"margin-top":"6px"},parentType:s.type,onChangeType:r.changeType,onAddObj:r.addObj,onRemoveObj:r.removeObj},null,8,["list","parentType","onChangeType","onAddObj","onRemoveObj"])):((0,i.wg)(),(0,i.iD)("div",x,["number"==s.type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,type:"number","onUpdate:modelValue":e=>s.value=e},null,8,b)),[[o.nr,s.value,void 0,{number:!0}]]):(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,type:"text","onUpdate:modelValue":e=>s.value=e},null,8,j)),[[o.nr,s.value]])])),(0,i._)("div",D,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e=>s.type=e,onChange:t=>e.$emit("changeType",s)},U,40,_),[[o.bM,s.type]])])])],512),[[o.F8,s.show]]),l==n.list.length-1?((0,i.wg)(),(0,i.iD)("div",J,[(0,i.wy)((0,i._)("div",H,"...",512),[[o.F8,!s.show]]),s.show?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"addBtn",onClick:t[2]||(t[2]=(0,o.iM)((t=>e.$emit("addObj",n.list)),["prevent"]))},"+")):(0,i.kq)("",!0),"array"!==n.parentType?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[N],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[Y],64))])):(0,i.kq)("",!0)])))),128))])])])}var I={name:"JsonList",props:["list","parentType"],methods:{changeType(e){this.$emit("changeType",e)},addObj(e){console.log(e),this.$emit("addObj",e)},removeObj(e){console.log(e),this.$emit("removeObj",e)},collapseList(){this.list.forEach((e=>{e.show=!1}))},expandList(){this.list.forEach((e=>{e.show=!0}))}}},q=n(89);const V=(0,q.Z)(I,[["render",A]]);var M=V,$=n(7139);const F={style:{display:"flex"}},E={key:0},z=(0,i.Uk)("{"),R=(0,i.Uk)("["),S={style:{display:"flex","margin-left":"15px"}},Z=["innerHTML"],W=(0,i.Uk)(","),B={key:1},K={style:{"margin-left":"10px","margin-top":"-8px"}},P=(0,i.Uk)("}"),G=(0,i.Uk)("]"),Q=(0,i.Uk)(",");function X(e,t,n,s,l,r){const a=(0,i.up)("json-demo",!0);return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",F,[(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.list,((e,s)=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,style:{"margin-top":"10px"}},[0==s?((0,i.wg)(),(0,i.iD)("div",E,[e.show?((0,i.wg)(),(0,i.iD)("i",{key:0,class:"fa-solid fa-caret-down expand-icon",onClick:t[0]||(t[0]=e=>r.collapseList())})):((0,i.wg)(),(0,i.iD)("i",{key:1,class:"fa-solid fa-caret-up expand-icon",onClick:t[1]||(t[1]=e=>r.expandList())})),"array"!==n.parentType?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[z],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[R],64))])):(0,i.kq)("",!0),(0,i.wy)((0,i._)("div",S,[e.key&&"array"!==n.parentType?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)('"'+(0,$.zw)(e.key)+'":',1)],64)):(0,i.kq)("",!0),e.value||(e.hasChildNode&&e.objList.length)>0?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[e.hasChildNode?((0,i.wg)(),(0,i.j4)(a,{key:0,list:e.objList,first:!1,style:{"margin-left":"15px"},parentLength:n.list.length,nowIndex:s,parentType:e.type},null,8,["list","parentLength","nowIndex","parentType"])):((0,i.wg)(),(0,i.iD)("span",{key:1,style:{"margin-left":"15px"},innerHTML:r.getValue(e)},null,8,Z)),s===n.list.length-1||e.hasChildNode?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[W],64))],64)):(0,i.kq)("",!0)],512),[[o.F8,e.show]]),s==n.list.length-1?((0,i.wg)(),(0,i.iD)("div",B,[(0,i.wy)((0,i._)("div",K,"...",512),[[o.F8,!e.show]]),"array"!==n.parentType?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[P],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[G],64)),n.first||n.nowIndex===n.parentLength-1?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[Q],64))])):(0,i.kq)("",!0)])))),128))])])])}var ee={name:"JsonDemo",props:["list","first","parentLength","nowIndex","parentType"],methods:{getValue(e){switch(e.type){case"string":return`"${e.value}"`;case"number":return`<span style="color: #9a7db5">${e.value}</span>`}},collapseList(){this.list.forEach((e=>{e.show=!1}))},expandList(){this.list.forEach((e=>{e.show=!0}))}}};const te=(0,q.Z)(ee,[["render",X]]);var ne=te;const oe=e=>((0,i.dD)("data-v-71281e22"),e=e(),(0,i.Cn)(),e),ie={key:0,class:"dialogContainer"},se=oe((()=>(0,i._)("div",{style:{"font-size":"22px","margin-bottom":"8px","font-weight":"bolder"}},"請輸入Json",-1))),le={style:{display:"flex","align-items":"center","margin-bottom":"8px"}},re=oe((()=>(0,i._)("span",{style:{color:"#919191"}},"檔案內容: 須為json格式之.txt檔",-1))),ae={style:{"text-align":"right",display:"flex","justify-content":"end"}};function de(e,t,n,s,l,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{style:{width:"60px",border:"1px solid #d7d7d7","margin-bottom":"8px",padding:"4px 8px",cursor:"pointer"},onClick:t[0]||(t[0]=e=>l.showInput=!0)},"add json"),l.showInput?((0,i.wg)(),(0,i.iD)("div",ie,[se,(0,i._)("div",le,[(0,i._)("div",{style:{width:"55px",border:"1px solid #d7d7d7",padding:"4px 8px",cursor:"pointer","margin-right":"8px"},onClick:t[1]||(t[1]=t=>e.$refs.file.click())},"上傳檔案"),re]),(0,i._)("input",{type:"file",ref:"file",style:{display:"none"},onChange:t[2]||(t[2]=e=>r.previewFiles(e))},null,544),(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.jsonText=e)},null,512),[[o.nr,l.jsonText]]),(0,i.wy)((0,i._)("span",{style:{color:"#f94f4f",position:"absolute",left:"20px",bottom:"38px"}},"※"+(0,$.zw)(l.errorMessage),513),[[o.F8,l.errorAlert]]),(0,i._)("div",ae,[(0,i._)("div",{class:"button",onClick:t[4]||(t[4]=(...e)=>r.closeDialog&&r.closeDialog(...e))},"cancel"),(0,i._)("div",{class:"button",onClick:t[5]||(t[5]=(...e)=>r.doImport&&r.doImport(...e))},"import")])])):(0,i.kq)("",!0),l.showInput?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"mask",onClick:t[6]||(t[6]=(...e)=>r.closeDialog&&r.closeDialog(...e))})):(0,i.kq)("",!0)],64)}var pe={data(){return{showInput:!1,errorAlert:!1,jsonText:"",errorMessage:""}},methods:{closeDialog(){this.showInput=!1,this.jsonText="",this.errorAlert=!1},doImport(){try{const e=JSON.parse(this.jsonText);console.log(e),this.$emit("importJson",e),this.closeDialog()}catch(e){console.log(e),this.errorMessage="輸入內容非Json格式,請重新調整",this.errorAlert=!0}},previewFiles(e){const t=this;if(e.target.files[0].name.includes(".txt")){this.errorAlert=!1;let n=e.target.files[0],o=new FileReader;o.readAsText(n),o.onloadend=async function(e){t.jsonText=e.target.result}}else t.errorMessage="上傳格式須為.txt檔,請重新上傳",this.errorAlert=!0}}};const ye=(0,q.Z)(pe,[["render",de],["__scopeId","data-v-71281e22"]]);var ce=ye,ue={name:"App",components:{JsonList:M,JsonDemo:ne,importJsonDialog:ce},data(){return{objList:[{key:"",value:"",type:"string",hasChildNode:!1,show:!0}]}},methods:{addObj(e){let t={key:"",value:"",type:"string",hasChildNode:!1,show:!0};e.push(t)},changeType(e){let t={key:"",value:"",type:"string",hasChildNode:!1,show:!0};switch(e.type){case"string":e.hasChildNode=!1,e.value="",delete e["objList"];break;case"object":e.hasChildNode=!0,e.objList=[],e.objList.push(t);break;case"int":e.hasChildNode=!1,e.value=0,delete e["objList"];break;case"array":e.hasChildNode=!0,e.objList=[],e.objList.push(t);break}},removeObj(e){e.list.splice(e.index,1)},importJson(e){let t=this.assignList(e);console.log(t),this.objList=JSON.parse(JSON.stringify(t))},assignList(e){const t=this;let n=[],o={};return Object.keys(e).forEach((i=>{o={key:i,value:e[i],type:Array.isArray(e[i])?"array":typeof e[i],hasChildNode:"object"==typeof e[i],objList:"object"==typeof e[i]?t.assignList(e[i]):"",show:!0},n.push(o)})),n}}};const ge=(0,q.Z)(ue,[["render",y]]);var he=ge;(0,o.ri)(he).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,s){if(!o){var l=1/0;for(p=0;p<e.length;p++){o=e[p][0],i=e[p][1],s=e[p][2];for(var r=!0,a=0;a<o.length;a++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(r=!1,s<l&&(l=s));if(r){e.splice(p--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[o,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,s,l=o[0],r=o[1],a=o[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(a)var p=a(n)}for(t&&t(o);d<l.length;d++)s=l[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},o=self["webpackChunkjson_creator"]=self["webpackChunkjson_creator"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1378)}));o=n.O(o)})();
//# sourceMappingURL=app.676a901b.js.map