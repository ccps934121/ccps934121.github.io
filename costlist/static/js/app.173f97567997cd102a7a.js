webpackJsonp([1],{NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("7+uW"),n=e("mtWM"),l=e.n(n),s={data:()=>({activeNames:["1"],populationData:{columns:["年度","總人口數","男性人數","女性人數"],rows:[]},chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}),methods:{callUvData:function(){l.a.get("https://cors-anywhere.herokuapp.com/http://opendataap2.hl.gov.tw/resource/files/2019-03-15/b926a88f68cf8f8f478b0d2f5ac98ac4.json").then(t=>{console.log(t),t.data.forEach(t=>{let o={"年度":t["年度"],"總人口數":t["總人口數"],"男性人數":t["男性人數"],"女性人數":t["女性人數"]};this.populationData.rows.push(o)})}).catch()},handleChange:function(t){console.log(t)}},mounted(){this.callUvData()}},r={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"hello"},[o("ve-histogram",{attrs:{data:this.populationData}}),this._v(" "),o("ve-line",{attrs:{data:this.populationData}})],1)},staticRenderFns:[]};var c=e("VU/8")(s,r,!1,function(t){e("a4mN")},"data-v-4e54fc15",null).exports,u={name:"chartPractice.vue",computed:{changeUpper:function(){return this.$store.state.message.toUpperCase()}},data:()=>({message:"",chartData:{columns:["學生","國文","英文","數學"],rows:[{"學生":"小明","國文":90,"英文":95,"數學":88}]},pietData:{columns:["項目","花費"],rows:[{"項目":"食物","花費":3e3},{"項目":"汽車","花費":2e3},{"項目":"教育","花費":705}]},portdata:{columns:["日期","桃園機場","高雄機場","台中機場","松山機場"],rows:[]},dailyPortData:[{date:"20200901",data:[{type:"機場",locate:[{location:"桃園機場",outbound:1389,entry:1196,total:2585},{location:"高雄機場",outbound:0,entry:0,total:0},{location:"台中機場",outbound:0,entry:1,total:1},{location:"松山機場",outbound:105,entry:43,total:148}]},{type:"港口",locate:[{location:"基隆港",outbound:1,entry:0,total:1},{location:"台中港",outbound:22,entry:27,total:48},{location:"高雄港",outbound:4,entry:24,total:28},{location:"台北港",outbound:4,entry:6,total:10},{location:"東港",outbound:32,entry:0,total:32}]}]},{date:"20200902",data:[{type:"機場",locate:[{location:"桃園機場",outbound:1739,entry:1479,total:3218},{location:"高雄機場",outbound:86,entry:74,total:160},{location:"台中機場",outbound:0,entry:0,total:0},{location:"松山機場",outbound:240,entry:160,total:400}]},{type:"港口",locate:[{location:"基隆港",outbound:1,entry:2,total:3},{location:"台中港",outbound:0,entry:0,total:0},{location:"高雄港",outbound:17,entry:24,total:41},{location:"台北港",outbound:0,entry:0,total:0},{location:"東港",outbound:0,entry:10,total:10}]}]},{date:"20200903",data:[{type:"機場",locate:[{location:"桃園機場",outbound:1591,entry:1077,total:2668},{location:"高雄機場",outbound:213,entry:116,total:329},{location:"台中機場",outbound:23,entry:48,total:71},{location:"松山機場",outbound:64,entry:52,total:116}]},{type:"港口",locate:[{location:"基隆港",outbound:0,entry:3,total:3},{location:"台中港",outbound:4,entry:1,total:5},{location:"高雄港",outbound:19,entry:12,total:31},{location:"台北港",outbound:0,entry:1,total:1},{location:"東港",outbound:0,entry:0,total:0}]}]},{date:"20200904",data:[{type:"機場",locate:[{location:"桃園機場",outbound:2173,entry:2019,total:4192},{location:"高雄機場",outbound:54,entry:73,total:127},{location:"台中機場",outbound:0,entry:1,total:1},{location:"松山機場",outbound:152,entry:179,total:331}]},{type:"港口",locate:[{location:"基隆港",outbound:0,entry:1,total:1},{location:"台中港",outbound:0,entry:1,total:1},{location:"高雄港",outbound:18,entry:24,total:42},{location:"台北港",outbound:0,entry:0,total:0},{location:"東港",outbound:15,entry:1,total:16}]}]},{date:"20200905",data:[{type:"機場",locate:[{location:"桃園機場",outbound:543,entry:416,total:959},{location:"高雄機場",outbound:77,entry:102,total:179},{location:"台中機場",outbound:0,entry:0,total:0},{location:"松山機場",outbound:0,entry:0,total:0}]},{type:"港口",locate:[{location:"基隆港",outbound:0,entry:0,total:0},{location:"台中港",outbound:0,entry:0,total:0},{location:"高雄港",outbound:46,entry:12,total:58},{location:"台北港",outbound:1,entry:1,total:2},{location:"東港",outbound:0,entry:0,total:0}]}]},{date:"20200906",data:[{type:"機場",locate:[{location:"桃園機場",outbound:1619,entry:2464,total:4083},{location:"高雄機場",outbound:78,entry:71,total:149},{location:"台中機場",outbound:16,entry:50,total:66},{location:"松山機場",outbound:0,entry:0,total:0}]},{type:"港口",locate:[{location:"基隆港",outbound:1,entry:7,total:8},{location:"台中港",outbound:6,entry:1,total:7},{location:"高雄港",outbound:0,entry:7,total:7},{location:"台北港",outbound:4,entry:3,total:7},{location:"東港",outbound:0,entry:0,total:0}]}]}]}),mounted(){console.log(this.dailyPortData),this.dailyPortData.forEach(t=>{let o={};t.data.forEach(e=>{"機場"==e.type&&(o={"日期":t.date,"桃園機場":e.locate[0].total,"高雄機場":e.locate[1].total,"台中機場":e.locate[2].total,"松山機場":e.locate[3].total})}),this.portdata.rows.push(o)}),console.log(this.portdata.rows)}},i={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.message,expression:"$store.state.message"}],attrs:{type:"text"},domProps:{value:t.$store.state.message},on:{input:function(o){o.target.composing||t.$set(t.$store.state,"message",o.target.value)}}}),t._v(" "),e("button",{on:{click:function(o){t.$store.state.message="hello world"}}},[t._v("change")]),t._v("\n  "+t._s(t.$store.state.message)+"\n  "+t._s(t.changeUpper)+"\n  ")])},staticRenderFns:[]};var d=e("VU/8")(u,i,!1,function(t){e("mHXB")},"data-v-658b0412",null).exports,p={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{flex:"1"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.month,expression:"$store.state.month"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$store.state,"month",o.target.multiple?e:e[0])}}},t._l(12,function(o){return e("option",{key:o},[t._v(t._s(o))])}),0),t._v(" "),t.getchartData.rows.length>0?e("div",[e("ve-pie",{attrs:{data:t.getchartData}})],1):e("div",[e("span",[t._v("噢噢 還沒有明細喔(´Ａ｀。)")])])])},staticRenderFns:[]};var y=e("VU/8")({name:"costchart",computed:{getchartData:function(){return this.$store.getters.getCostObj}}},p,!1,function(t){e("yEvG")},null,null).exports,h={name:"costlist",computed:{getchartMonth:function(){return this.month=this.$store.state.month,this.$store.state.month}},watch:{month:function(){this.obj=[];let t=!1;this.costarr.forEach(o=>{o.month==this.month&&(this.obj=o.item,t=!0)}),t||this.titleType.forEach(t=>{this.obj.push({type:t,cost:0})})}},data:()=>({titleType:["education","food","insurance","travel","enterance","social"],obj:[],month:"",costarr:[]}),methods:{inputCost(){this.$store.state.mingCost.push({month:this.month,item:this.obj})}},mounted(){this.costarr=[...this.$store.state.mingCost]}},m={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{flex:"1",display:"flex","flex-direction":"column","align-items":"start"}},[e("div",[e("div",[t._v("目前月份："+t._s(t.getchartMonth)+"月")])]),t._v(" "),t._l(t.obj,function(o,a){return e("div",{key:a},[e("span",[t._v(t._s(o.type))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.cost,expression:"item.cost"}],staticStyle:{width:"45px"},attrs:{type:"text"},domProps:{value:o.cost},on:{change:t.inputCost,input:function(e){e.target.composing||t.$set(o,"cost",e.target.value)}}})])})],2)},staticRenderFns:[]};var v={name:"App",components:{HelloWorld:c,chartPractice:d,costchart:y,costlist:e("VU/8")(h,m,!1,function(t){e("b6ew")},null,null).exports},computed:{changeUpper:function(){return this.$store.getters.getUpperMessage}}},b={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticStyle:{width:"100%",display:"flex","flex-direction":"row"}},[o("costchart"),this._v(" "),o("costlist")],1)])},staticRenderFns:[]};var f=e("VU/8")(v,b,!1,function(t){e("xpWo")},null,null).exports,g=e("vO7p"),_=e.n(g),w=e("zL8q"),$=e.n(w),x=(e("tvR6"),e("NYxO"));a.default.use(x.a);const D={getUpperMessage:t=>o=>(console.log(o),t.message.toUpperCase()),getCostObj:t=>{let o={columns:["type","cost"],rows:[]};return t.month&&t.mingCost.forEach(e=>{t.month==e.month&&(o.rows=e.item)}),o}};var U=new x.a.Store({state:{titleType:["education","food","insurance","travel","enterance","social"],mingCost:[{month:"1",item:[{type:"education",cost:"5600"},{type:"food",cost:"6000"},{type:"insurance",cost:"1200"},{type:"travel",cost:"8200"},{type:"enterance",cost:"1600"},{type:"social",cost:"4300"}]},{month:"2",item:[{type:"education",cost:"3200"},{type:"food",cost:"6400"},{type:"insurance",cost:"5000"},{type:"travel",cost:"2600"},{type:"enterance",cost:"800"},{type:"social",cost:"3200"}]}],month:"",message:"hello emma is so cute!"},mutations:{},actions:{},getters:D});a.default.config.productionTip=!1,a.default.use(_.a),a.default.use($.a),new a.default({el:"#app",components:{App:f},template:"<App/>",store:U})},a4mN:function(t,o){},b6ew:function(t,o){},mHXB:function(t,o){},tvR6:function(t,o){},xpWo:function(t,o){},yEvG:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.173f97567997cd102a7a.js.map