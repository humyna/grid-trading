(function(e){function t(t){for(var r,s,o=t[0],l=t[1],u=t[2],d=0,f=[];d<o.length;d++)s=o[d],a[s]&&f.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],r=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var r={},a={app:0},n=[];function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=r,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},"5c0b":function(e,t,i){"use strict";var r=i("5e27"),a=i.n(r);a.a},"5e27":function(e,t,i){},cd49:function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"section"},[i("div",{staticClass:"header"},e._l(e.config,function(t,r){return i("div",{key:t.name,staticClass:"group"},[i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("网格名称")]),i("input",{attrs:{disabled:""},domProps:{value:t.name}})]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("价格")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"item.price"}],attrs:{type:"number",disabled:0!=r},domProps:{value:t.price},on:{input:function(i){i.target.composing||e.$set(t,"price",i.target.value)}}}),e._v("￥\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("网格百分比")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.percentage,expression:"item.percentage"}],attrs:{type:"number"},domProps:{value:t.percentage},on:{input:function(i){i.target.composing||e.$set(t,"percentage",i.target.value)}}}),e._v("%\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("网格金额")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],attrs:{type:"number"},domProps:{value:t.value},on:{input:function(i){i.target.composing||e.$set(t,"value",i.target.value)}}}),e._v("￥\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("网格数")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.gridCount,expression:"item.gridCount"}],attrs:{type:"number"},domProps:{value:t.gridCount},on:{input:function(i){i.target.composing||e.$set(t,"gridCount",i.target.value)}}})]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("倍数")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.retainProfitMultiple,expression:"item.retainProfitMultiple"}],attrs:{type:"number",disabled:!t.isRetainProfit},domProps:{value:t.retainProfitMultiple},on:{input:function(i){i.target.composing||e.$set(t,"retainProfitMultiple",i.target.value)}}})]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("加码百分比")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.morePercentage,expression:"item.morePercentage"}],attrs:{type:"number",disabled:!t.isMore},domProps:{value:t.morePercentage},on:{input:function(i){i.target.composing||e.$set(t,"morePercentage",i.target.value)}}})]),i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isRetainProfit,expression:"item.isRetainProfit"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isRetainProfit)?e._i(t.isRetainProfit,null)>-1:t.isRetainProfit},on:{change:function(i){var r=t.isRetainProfit,a=i.target,n=!!a.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);a.checked?o<0&&e.$set(t,"isRetainProfit",r.concat([s])):o>-1&&e.$set(t,"isRetainProfit",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(t,"isRetainProfit",n)}}}),e._v("\n          留利润\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.isMore,expression:"item.isMore"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isMore)?e._i(t.isMore,null)>-1:t.isMore},on:{change:function(i){var r=t.isMore,a=i.target,n=!!a.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);a.checked?o<0&&e.$set(t,"isMore",r.concat([s])):o>-1&&e.$set(t,"isMore",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(t,"isMore",n)}}}),e._v("\n          逐格加码\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("所需资金")]),i("input",{attrs:{type:"number",disabled:""},domProps:{value:e.totalValue(r)}}),e._v("￥\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("总盈利金额")]),i("input",{attrs:{type:"number",disabled:""},domProps:{value:e._f("toFixed")(e.totalProfitValue(r))}}),e._v("￥\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("总盈利比例")]),i("input",{attrs:{type:"number",disabled:""},domProps:{value:e._f("toFixed")(e.totalProfitValue(r)/e.totalValue(r)*100)}}),e._v("%\n        ")])])}),0),i("table",{staticClass:"table"},[e._m(0),i("tbody",e._l(e.sortGrid,function(t,r){return i("tr",{key:t.name+t.index,class:e.gridClass(t)},[i("td",[e._v(e._s(r+1))]),i("td",[e._v(e._s(t.name))]),i("td",[e._v(e._s(e._f("toFixed")(t.gear)))]),i("td",[e._v(e._s(e._f("toFixed")(t.buyPrice))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.sellOutPrice))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.buyAmount,0)))]),i("td",[e._v(e._s(e._f("toFixed")(t.buyValue))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.sellAmount,0)))]),i("td",[e._v(e._s(e._f("toFixed")(t.sellValue))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.profitValue))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.profitPercentage))+"%")]),i("td",[e._v(e._s(e._f("toFixed")(t.retainAmount,0)))]),isNaN(t.retainProfitValue)?i("td",[e._v("无法保留")]):i("td",[e._v(e._s(e._f("toFixed")(t.retainProfitValue)))])])}),0)])])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("th",[e._v("序号")]),i("th",[e._v("类型")]),i("th",[e._v("档位")]),i("th",[e._v("买入价格")]),i("th",[e._v("卖出价格")]),i("th",[e._v("买入数量")]),i("th",[e._v("买入金额")]),i("th",[e._v("卖出数量")]),i("th",[e._v("卖出金额")]),i("th",[e._v("盈利金额")]),i("th",[e._v("盈利比例")]),i("th",[e._v("保留数量")]),i("th",[e._v("保留利润")])])}],s=(i("55dd"),i("7f7f"),i("ac4d"),i("8a81"),i("ac6a"),i("d225")),o=i("b0b4"),l=i("308d"),u=i("6bb5"),c=i("4e2b"),d=i("9ab4"),f=i("60a3"),v=function(){function e(t,i,r,a,n,o){Object(s["a"])(this,e),this.index=0,this.name="",this.gear=0,this.buyPrice=0,this.sellOutPrice=0,this.buyAmount=0,this.buyValue=0,this.sellAmount=0,this.sellValue=0,this.profitValue=0,this.profitPercentage=0,this.retainAmount=0,this.retainProfitValue=0,this.name=t,this.index=i,this.gear=r,this.buyPrice=a,this.sellOutPrice=n,this.buyAmount=o,this.buyValue=a*o,this.sellAmount=o,this.sellValue=n*this.sellAmount,this.profitValue=this.sellValue-this.buyValue,this.profitPercentage=this.profitValue/this.buyValue*100}return Object(o["a"])(e,[{key:"retainProfit",value:function(e){this.retainProfitValue=this.profitValue*e,this.retainProfitValue>this.buyAmount?(this.retainProfitValue=NaN,this.sellValue=0,this.sellAmount=0,this.retainAmount=0):(this.sellValue=this.sellValue-this.retainProfitValue,this.sellAmount=this.sellValue/this.sellOutPrice,this.retainAmount=this.buyAmount-this.sellAmount)}},{key:"getBuyValue",value:function(){return this.buyValue}},{key:"getBuyPrice",value:function(){return this.buyPrice}},{key:"getName",value:function(){return this.name}},{key:"getProfitValue",value:function(){return this.profitValue}}]),e}(),p=function e(t){Object(s["a"])(this,e),this.name="",this.price=1,this.percentage=5,this.value=2e3,this.gridCount=20,this.isRetainProfit=!1,this.retainProfitMultiple=1,this.isMore=!1,this.morePercentage=5,this.name=t},m=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(u["a"])(t).call(this)),e.config=[new p("小网"),new p("中网"),new p("大网")],e.config[1].percentage=15,e.config[1].gridCount=0,e.config[2].percentage=30,e.config[2].gridCount=0,e}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"onPercentageChanged",value:function(){this.config[1].price=this.config[0].price*(1-this.config[1].percentage/100),this.config[2].price=this.config[0].price*(1-this.config[2].percentage/100)}},{key:"totalValue",value:function(e){return this.gridList[e].reduce(function(e,t){return e+t.getBuyValue()},0)}},{key:"totalProfitValue",value:function(e){return this.gridList[e].reduce(function(e,t){return e+t.getProfitValue()},0)}},{key:"gridClass",value:function(e){return{"small-grid":"小网"===e.getName(),"middle-grid":"中网"===e.getName(),"big-grid":"大网"===e.getName()}}},{key:"gridList",get:function(){var e=[],t=!0,i=!1,r=void 0;try{for(var a,n=this.config[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){for(var s=a.value,o=s.percentage/100,l=[],u=0;u<s.gridCount;++u)if(0!==u||"中网"!==s.name&&"大网"!==s.name){var c=1-u*o;if(!(c<0)){var d=s.price*c,f=s.price*(c+o),p=0;p=s.isMore?s.value*(1+s.morePercentage/100*u)/d:s.value/d;var m=new v(s.name,u+1,c,d,f,p);s.isRetainProfit&&m.retainProfit(s.retainProfitMultiple),l.push(m)}}e.push(l)}}catch(h){i=!0,r=h}finally{try{t||null==n.return||n.return()}finally{if(i)throw r}}return e}},{key:"sortGrid",get:function(){return this.gridList.flat().sort(function(e,t){return t.getBuyPrice()-e.getBuyPrice()})}}]),t}(f["b"]);d["a"]([Object(f["c"])("config",{immediate:!0,deep:!0})],m.prototype,"onPercentageChanged",null),m=d["a"]([Object(f["a"])({filters:{toFixed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e?"number"===typeof e?e.toFixed(t):e:""}}})],m);var h=m,g=h,b=(i("5c0b"),i("2877")),_=Object(b["a"])(g,a,n,!1,null,null,null),y=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.d2d2df81.js.map