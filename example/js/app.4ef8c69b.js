(function(e){function i(i){for(var u,a,r=i[0],l=i[1],o=i[2],m=0,p=[];m<r.length;m++)a=r[m],s[a]&&p.push(s[a][0]),s[a]=0;for(u in l)Object.prototype.hasOwnProperty.call(l,u)&&(e[u]=l[u]);c&&c(i);while(p.length)p.shift()();return n.push.apply(n,o||[]),t()}function t(){for(var e,i=0;i<n.length;i++){for(var t=n[i],u=!0,r=1;r<t.length;r++){var l=t[r];0!==s[l]&&(u=!1)}u&&(n.splice(i--,1),e=a(a.s=t[0]))}return e}var u={},s={app:0},n=[];function a(i){if(u[i])return u[i].exports;var t=u[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=u,a.d=function(e,i,t){a.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,i){if(1&i&&(e=a(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var u in e)a.d(t,u,function(i){return e[i]}.bind(null,u));return t},a.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(i,"a",i),i},a.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var o=0;o<r.length;o++)i(r[o]);var c=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"56d7":function(e,i,t){"use strict";t.r(i);t("cadf"),t("551c"),t("f751"),t("097d");var u=t("2b0e"),s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Example: vue-text-truncate")]),e._m(0),t("h2",[e._v("Truncate Text")]),t("div",{staticClass:"h100"},[t("TextTruncate",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis")])],1),t("h2",[e._v("Original Text")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis")])])},n=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("a",{attrs:{href:"https://github.com/112KA/vue-text-truncate"}},[e._v("GitHub")])])}],a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._t("default")],2)},r=[],l={name:"TextTruncate",mounted:function(){console.log(this),this.original=this.$slots.default[0].elm.textContent,window.addEventListener("resize",this.resize),this.resize()},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){if(this.prevWidth!==this.$el.clientWidth){this.prevWidth=this.$el.clientWidth;var e=this.$el.cloneNode(!0),i=e.style,t=this.original;e.textContent=this.original,i.position="absolute",i.visibility="none",i.overflow="visible",i.width=this.$el.clientWidth+"px",i.height="auto",this.$el.appendChild(e);while(t.length>0&&e.clientHeight>this.$el.clientHeight)t=t.substr(0,t.length-20),e.textContent=t+"...";t=this.original.substr(0,t.length+20),e.textContent=t+"...";while(t.length>0&&e.clientHeight>this.$el.clientHeight)t=t.substr(0,t.length-1),e.textContent=t+"...";this.$el.removeChild(e),this.$el.textContent=t+"..."}}}},o=l,c=(t("9931"),t("2877")),m=Object(c["a"])(o,a,r,!1,null,"cea62d82",null),p=m.exports,d={name:"app",components:{TextTruncate:p}},v=d,b=(t("5c0b"),Object(c["a"])(v,s,n,!1,null,null,null)),g=b.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,i,t){"use strict";var u=t("5e27"),s=t.n(u);s.a},"5e27":function(e,i,t){},9931:function(e,i,t){"use strict";var u=t("d340"),s=t.n(u);s.a},d340:function(e,i,t){}});
//# sourceMappingURL=app.4ef8c69b.js.map