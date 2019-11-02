(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("nav-bar"),a("v-content",[a("input-search",{on:{"search-location-data":e.handleSearchLocationData}}),a("v-divider"),a("weather-view",{attrs:{data:e.weatherData,userPref:e.userPref},on:{"save-user-pref":e.handleSaveUserPref}}),a("no-data-dialog",{attrs:{show:e.errorDialog},on:{"toggle-dialog":e.handleToggleDialog}}),a("loading-progress-view",{attrs:{absolute:"",show:e.isLoading}})],1)],1)},i=[],s=(a("d3b7"),a("96cf"),a("89ba")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{app:"",flat:""}},[a("v-toolbar-items",[a("v-btn",{attrs:{text:""}},[a("v-icon",{attrs:{left:"",large:""}},[e._v("mdi-cloud-search")]),a("v-toolbar-title",{staticClass:"headline ml-4"},[a("span",{staticClass:"font-weight-bold"},[e._v("Weather ")]),a("span",[e._v("App")])])],1)],1),a("v-spacer"),a("v-btn",{staticClass:"grey darken-3",attrs:{depressed:"",fab:""},on:{click:e.openRepo}},[a("v-icon",{attrs:{"x-large":""}},[e._v("mdi-github-circle")])],1)],1)],1)},c=[],l={name:"NavBar",methods:{openRepo:function(){window.open("https://github.com/igorashs/vue-weather-app","_blank")}}},u=l,p=a("2877"),d=a("6544"),f=a.n(d),h=a("40dc"),v=a("8336"),g=a("132d"),m=a("2fa4"),w=a("2a7f"),b=Object(p["a"])(u,o,c,!1,null,null,null),x=b.exports;f()(b,{VAppBar:h["a"],VBtn:v["a"],VIcon:g["a"],VSpacer:m["a"],VToolbarItems:w["a"],VToolbarTitle:w["b"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"max-width":"512px"}},[a("v-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSearchLocationData(t)}}},[a("v-row",{staticClass:"align-start"},[a("v-text-field",{staticClass:"title pa-1",attrs:{label:"Enter Your Location Here..."},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),a("v-btn",{staticClass:"ma-3",on:{click:e.onSearchLocationData}},[a("v-icon",[e._v("mdi-magnify")])],1)],1)],1)],1)},C=[],_={name:"InputSearch",data:function(){return{location:""}},methods:{onSearchLocationData:function(){this.$emit("search-location-data",this.location)}}},V=_,P=a("a523"),S=a("4bd4"),D=a("0fd9"),j=a("8654"),O=Object(p["a"])(V,y,C,!1,null,null,null),k=O.exports;f()(O,{VBtn:v["a"],VContainer:P["a"],VForm:S["a"],VIcon:g["a"],VRow:D["a"],VTextField:j["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.data?a("v-container",{staticClass:"d-flex justify-center"},[a("v-card",{attrs:{"max-width":"1024","min-width":"320"}},[a("v-container",{staticClass:"deep-purple darken-1 px-4"},[a("v-card-title",{staticClass:"headline justify-space-between pa-0 pb-2"},[a("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.data.name))]),a("v-img",{staticStyle:{"max-width":"50px"},attrs:{src:e.data.iconUrl}})],1),a("v-card-subtitle",{staticClass:"d-flex justify-space-between font-weight-bold pa-0"},[a("span",[e._v(e._s(e.currentDate)+" "+e._s(e.data.country))]),a("span",[e._v(e._s(e.data.description))])])],1),a("v-card-text",{staticClass:"d-flex justify-space-between grey darken-1"},[e.inCelsius?a("span",{staticClass:"display-2"},[e._v(e._s(e.celsius)+"°C")]):a("span",{staticClass:"display-2"},[e._v(e._s(e.fahrenheit)+"°F")]),a("v-list",{staticClass:"subtitle-1"},[a("v-list-item",{staticStyle:{"min-height":"24px"}},[a("span",[e._v("Humidity "+e._s(e.data.weatherInfo.humidity)+"%")])]),a("v-list-item",{staticStyle:{"min-height":"24px"}},[a("span",[e._v("Pressure "+e._s(e.data.weatherInfo.pressure)+"hPa")])])],1)],1),a("v-divider"),a("v-card-actions",{staticClass:"justify-end pa-0 px-4"},[a("v-checkbox",{attrs:{label:"Show in Celsius"},model:{value:e.inCelsius,callback:function(t){e.inCelsius=t},expression:"inCelsius"}})],1)],1)],1):e._e()},I=[],T=(a("0d03"),{name:"WeatherView",props:["data","userPref"],data:function(){return{inCelsius:!1}},computed:{currentDate:function(){return new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(new Date)},fahrenheit:function(){var e=this.data.weatherInfo.temp;return Math.round(9*(e-273.15)/5+32)},celsius:function(){var e=this.data.weatherInfo.temp;return Math.round(e-273.15)}},watch:{inCelsius:function(e){e!=this.userPref.inCelsius&&this.$emit("save-user-pref",{inCelsius:e})}},beforeMount:function(){this.userPref&&this.userPref.inCelsius&&(this.inCelsius=this.userPref.inCelsius)}}),$=T,R=a("b0af"),U=a("99d9"),B=a("ac7c"),E=a("ce7e"),M=a("adda"),A=a("8860"),N=a("da13"),F=Object(p["a"])($,L,I,!1,null,null,null),J=F.exports;f()(F,{VCard:R["a"],VCardActions:U["a"],VCardSubtitle:U["b"],VCardText:U["c"],VCardTitle:U["d"],VCheckbox:B["a"],VContainer:P["a"],VDivider:E["a"],VImg:M["a"],VList:A["a"],VListItem:N["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{width:"500"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"error"},[e._v(" Something is wrong... ")]),a("v-card-text",{staticClass:"title pa-4"},[e._v(" Your location haven't been found! ")]),a("v-card-actions",[a("v-btn",{on:{click:function(t){return e.$emit("toggle-dialog",!1)}}},[e._v("close")])],1)],1)],1)},H=[],Y={props:{show:Boolean}},q=Y,z=a("169a"),G=Object(p["a"])(q,W,H,!1,null,null,null),K=G.exports;f()(G,{VBtn:v["a"],VCard:R["a"],VCardActions:U["a"],VCardText:U["c"],VCardTitle:U["d"],VDialog:z["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("v-overlay",[a("v-progress-circular",{attrs:{indeterminate:""}})],1):e._e()},X=[],Z={props:{show:Boolean}},ee=Z,te=a("a797"),ae=a("490a"),re=Object(p["a"])(ee,Q,X,!1,null,null,null),ne=re.exports;f()(re,{VOverlay:te["a"],VProgressCircular:ae["a"]});a("a4d3"),a("e01a"),a("99af"),a("b0c0");var ie="23f84a7ed3bef67a51a44d47ea5a393d",se="https://api.openweathermap.org/data/2.5/weather?q=",oe={getLocationData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=function(e){var t=e.weather[0],r=t.main,n=t.description,i=t.icon,s=e.sys.country,o=e.name,c=e.main;return{name:o,country:s,main:r,description:n,iconUrl:a(i),weatherInfo:c}},a=function(e){return"https://openweathermap.org/img/wn/".concat(e,"@2x.png")},e.prev=2,e.next=5,fetch("".concat(se).concat(t,"&appid=").concat(ie));case 5:return n=e.sent,e.next=8,n.json();case 8:return i=e.sent,e.abrupt("return",r(i));case 12:return e.prev=12,e.t0=e["catch"](2),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t){return e.apply(this,arguments)}return t}()},ce={getUserPref:function(){if(localStorage){var e=localStorage.getItem("userPref"),t=e?JSON.parse(e):{};return t}},setUserPref:function(e){if(!e||!e.hasOwnProperty("inCelsius"))throw new Error("Invalid preferences in userPref param");localStorage.setItem("userPref",JSON.stringify(e))}},le={name:"App",data:function(){return{weatherData:null,userPref:null,errorDialog:!1,isLoading:!1}},components:{NavBar:x,InputSearch:k,WeatherView:J,NoDataDialog:K,LoadingProgressView:ne},methods:{handleSearchLocationData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.getLocationData(t);case 2:return a=e.sent,e.next=5,this.showLoadingProgress(1e3);case 5:this.weatherData=a,this.weatherData||(this.errorDialog=!0);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleSaveUserPref:function(e){ce.setUserPref(e)},handleToggleDialog:function(e){this.errorDialog=e},showLoadingProgress:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,new Promise((function(e){return setTimeout(e,t)}));case 3:this.isLoading=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},beforeMount:function(){this.userPref=ce.getUserPref()}},ue=le,pe=a("7496"),de=a("a75b"),fe=Object(p["a"])(ue,n,i,!1,null,null,null),he=fe.exports;f()(fe,{VApp:pe["a"],VContent:de["a"],VDivider:E["a"]});var ve=a("f309");r["a"].use(ve["a"]);var ge=new ve["a"]({theme:{dark:!0},icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:ge,render:function(e){return e(he)}}).$mount("#app")}});
//# sourceMappingURL=app.d454feaf.js.map