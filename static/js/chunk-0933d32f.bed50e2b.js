(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0933d32f"],{5285:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"sku chartPage",on:{click:a.closeByDialog}},[e("AppHeader",[e("p",{attrs:{slot:"center"},slot:"center"},[a._v("SKU统计")])]),e("van-tabs",{attrs:{animated:"",sticky:"","offset-top":a.offsetTop},on:{click:a.tabOnClick},model:{value:a.active,callback:function(t){a.active=t},expression:"active"}},[e("van-tab",{attrs:{title:"SKU"}},[e("div",{staticClass:"filters"},[e("div",{staticClass:"date-filters"},[e("input",{attrs:{type:"text",readonly:""},domProps:{value:a.calendar.display},on:{click:function(t){return t.stopPropagation(),a.openByDialog(t)}}})]),e("transition",{attrs:{name:"fade"}},[a.calendar.show?e("div",{staticClass:"calendar-dialog"},[e("div",{staticClass:"calendar-dialog-mask",on:{click:a.closeByDialog}}),e("div",{staticClass:"calendar-dialog-body"},[e("calendar",{attrs:{range:a.calendar.range,zero:a.calendar.zero,lunar:a.calendar.lunar,value:a.calendar.value},on:{select:a.calendar.select}})],1)]):a._e()])],1),e("div",{staticClass:"myChart-box"},[e("div",{ref:"myChart_sku",staticClass:"myChart",staticStyle:{width:"375px",height:"360px"}})])]),e("van-tab",{attrs:{title:"季节性SKU"}},[e("div",{staticClass:"filters"},[e("div",{staticClass:"date-filters"},[e("input",{attrs:{type:"text",readonly:""},domProps:{value:a.calendar2.display},on:{click:function(t){return t.stopPropagation(),a.openByDialog(t)}}})]),e("transition",{attrs:{name:"fade"}},[a.calendar2.show?e("div",{staticClass:"calendar-dialog"},[e("div",{staticClass:"calendar-dialog-mask",on:{click:a.closeByDialog}}),e("div",{staticClass:"calendar-dialog-body"},[e("calendar",{attrs:{range:a.calendar2.range,zero:a.calendar2.zero,lunar:a.calendar2.lunar,value:a.calendar2.value},on:{select:a.calendar2.select}})],1)]):a._e()])],1),e("div",{staticClass:"myChart-box"},[e("div",{ref:"myChart_jjxSku",staticClass:"myChart",staticStyle:{width:"375px",height:"360px"}})])]),e("van-tab",{attrs:{title:"移入移出SKU"}},[e("div",{staticClass:"filters"},[e("div",{staticClass:"date-filters"},[e("input",{attrs:{type:"text",readonly:""},domProps:{value:a.calendar3.display},on:{click:function(t){return t.stopPropagation(),a.openByDialog(t)}}})]),e("transition",{attrs:{name:"fade"}},[a.calendar3.show?e("div",{staticClass:"calendar-dialog"},[e("div",{staticClass:"calendar-dialog-mask",on:{click:a.closeByDialog}}),e("div",{staticClass:"calendar-dialog-body"},[e("calendar",{attrs:{range:a.calendar3.range,zero:a.calendar3.zero,lunar:a.calendar3.lunar,value:a.calendar3.value},on:{select:a.calendar3.select}})],1)]):a._e()])],1),e("div",{staticClass:"myChart-box"},[e("div",{ref:"myChart_yrycSku",staticClass:"myChart",staticStyle:{width:"375px",height:"360px"}})])])],1)],1)},n=[],i=(e("4160"),e("a15b"),e("ac1f"),e("1276"),e("159b"),e("da3c"),e("0b33")),r=(e("bda7"),e("5e46")),l=(e("6d73"),e("473d")),o=(e("be7f"),e("565f")),d=e("2b0e"),c=e("a4ce"),h=e("ea77"),u=e("3eba"),p=e.n(u);e("ef97"),e("d28f"),e("007d");d["default"].use(i["a"]).use(r["a"]).use(l["a"]).use(o["a"]);var y={name:"Sku",components:{AppHeader:c["a"],calendar:h["a"]},data:function(){var a=this;return{active:0,screenWidth:document.body.clientWidth,offsetTop:90/(750/document.body.clientWidth),calendar:{display:"2020/02/16 ~ 2020/03/16",show:!1,range:!0,zero:!0,value:[[2018,2,16],[2019,2,16]],lunar:!0,select:function(t,e){a.calendar_startDate=t.join("-"),a.calendar_endDate=e.join("-"),a.calendar.show=!1,a.calendar.value=[t,e],a.calendar.display=t.join("/")+" ~ "+e.join("/"),a.$nextTick((function(){a.get_SkuChart()}))}},calendar2:{display:"2020/02/16 ~ 2020/03/16",show:!1,range:!0,zero:!0,value:[[2018,2,16],[2019,2,16]],lunar:!0,select:function(t,e){a.calendar2_startDate=t.join("-"),a.calendar2_endDate=e.join("-"),a.calendar2.show=!1,a.calendar2.value=[t,e],a.calendar2.display=t.join("/")+" ~ "+e.join("/"),a.$nextTick((function(){a.get_jjxSkuChart()}))}},calendar3:{display:"2020/02/16 ~ 2020/03/16",show:!1,range:!0,zero:!0,value:[[2018,2,16],[2019,2,16]],lunar:!0,select:function(t,e){a.calendar3_startDate=t.join("-"),a.calendar3_endDate=e.join("-"),a.calendar3.show=!1,a.calendar3.value=[t,e],a.calendar3.display=t.join("/")+" ~ "+e.join("/"),a.$nextTick((function(){a.get_yrycSkuChart()}))}},calendar_startDate:"",calendar_endDate:"",calendar2_startDate:"",calendar2_endDate:"",calendar3_startDate:"",calendar3_endDate:"",getStoreInfo:"",sku_myChart:null,resultData:[]}},created:function(){this.get_defaultData(),this.get_data()},mounted:function(){},methods:{tabOnClick:function(a,t,e){var s=this;0==a?this.$nextTick((function(){s.drawLine_sku()})):1==a?this.$nextTick((function(){s.drawLine_jjxsku()})):2==a&&this.$nextTick((function(){s.drawLine_yrycsku()}))},get_defaultData:function(){this.getStoreInfo=this.$store.getters.getStoreInfo;var a=this.formatDate.pastDate(this.$store.state.defaultDate+1,"-"),t=this.formatDate.pastDate(2,"-");this.calendar_startDate=a,this.calendar_endDate=t,this.calendar.value=[a.split("-"),t.split("-")],this.calendar.display=this.formatDate.pastDate(this.$store.state.defaultDate+1,"-")+" ~ "+this.formatDate.pastDate(2,"-"),this.calendar2_startDate=a,this.calendar2_endDate=t,this.calendar2.value=[a.split("-"),t.split("-")],this.calendar2.display=this.formatDate.pastDate(this.$store.state.defaultDate+1,"-")+" ~ "+this.formatDate.pastDate(2,"-"),this.calendar3_startDate=a,this.calendar3_endDate=t,this.calendar3.value=[a.split("-"),t.split("-")],this.calendar3.display=this.formatDate.pastDate(this.$store.state.defaultDate+1,"-")+" ~ "+this.formatDate.pastDate(2,"-")},get_data:function(){var a=this;this.toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0}),this.dateArray=this.dateArray2=this.dateArray3=this.formatDate.dateArray(this.calendar_startDate,this.calendar_endDate);var t={storeId:this.getStoreInfo.gid,startDate:this.calendar_startDate,endDate:this.calendar_endDate};this.serverHost.fetchPost("/getReportData",t).then((function(t){a.toast.clear();var e=t.data.data,s=[],n=[],i=[],r=[],l=[],o=[],d=[],c=[],h=[],u=[],p=[];e.forEach((function(a){s.push(a.totalSku),n.push(a.newDaily),i.push(a.everyDaySku),r.push(a.dailyDecrease),l.push(a.seasonalA),o.push(a.seasonalB),d.push(a.seasonalC),c.push(a.seasonalD),h.push(a.foundationSKU),u.push(a.moveInSKU),p.push(a.moveOutSKU)})),a.resultData=e,a.totalSku=s,a.newDaily=n,a.everyDaySku=i,a.dailyDecrease=r,a.drawLine_sku(),a.seasonalA=l,a.seasonalB=o,a.seasonalC=d,a.seasonalD=c,a.foundationSKU=h,a.moveInSKU=u,a.moveOutSKU=p})).catch((function(t){a.toast.clear(),console.log(t)}))},get_SkuChart:function(){var a=this;this.toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0}),this.dateArray=this.formatDate.dateArray(this.calendar_startDate,this.calendar_endDate);var t={storeId:this.getStoreInfo.gid,startDate:this.calendar_startDate,endDate:this.calendar_endDate};this.serverHost.fetchPost("/getReportData",t).then((function(t){a.toast.clear();var e=t.data.data,s=[],n=[],i=[],r=[];e.forEach((function(a){s.push(a.totalSku),n.push(a.newDaily),i.push(a.everyDaySku),r.push(a.dailyDecrease)})),a.resultData=e,a.totalSku=s,a.newDaily=n,a.everyDaySku=i,a.dailyDecrease=r,a.drawLine_sku()})).catch((function(t){a.toast.clear(),console.log(t)}))},get_jjxSkuChart:function(){var a=this;this.toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0}),this.dateArray2=this.formatDate.dateArray(this.calendar2_startDate,this.calendar2_endDate);var t={storeId:this.getStoreInfo.gid,startDate:this.calendar2_startDate,endDate:this.calendar2_endDate};this.serverHost.fetchPost("/getReportData",t).then((function(t){a.toast.clear();var e=t.data.data,s=[],n=[],i=[],r=[],l=[];e.forEach((function(a){s.push(a.seasonalA),n.push(a.seasonalB),i.push(a.seasonalC),r.push(a.seasonalD),l.push(a.foundationSKU)})),a.resultData=e,a.seasonalA=s,a.seasonalB=n,a.seasonalC=i,a.seasonalD=r,a.foundationSKU=l,a.drawLine_jjxsku()})).catch((function(t){a.toast.clear(),console.log(t)}))},get_yrycSkuChart:function(){var a=this;this.toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0}),this.dateArray3=this.formatDate.dateArray(this.calendar3_startDate,this.calendar3_endDate);var t={storeId:this.getStoreInfo.gid,startDate:this.calendar3_startDate,endDate:this.calendar3_endDate};this.serverHost.fetchPost("/getReportData",t).then((function(t){a.toast.clear();var e=t.data.data,s=[],n=[];e.forEach((function(a){s.push(a.moveInSKU),n.push(a.moveOutSKU)})),a.resultData=e,a.moveInSKU=s,a.moveOutSKU=n,a.drawLine_yrycsku()})).catch((function(t){a.toast.clear(),console.log(t)}))},openByDialog:function(){this.calendar.show=!0,this.calendar2.show=!0,this.calendar3.show=!0},closeByDialog:function(){this.calendar.show=!1,this.calendar2.show=!1,this.calendar3.show=!1},drawLine_sku:function(){var a=p.a.init(this.$refs.myChart_sku),t=this.dateArray,e=this.totalSku,s=this.newDaily,n=this.everyDaySku,i=this.dailyDecrease;a.setOption({tooltip:{trigger:"axis"},legend:{data:["总SKU","每日新增","每日在售","每日减少"],bottom:0,left:"center"},grid:{top:"5%",left:"3%",right:"12%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t},yAxis:{type:"value"},series:[{name:"总SKU",type:"line",data:e},{name:"每日新增",type:"line",data:s},{name:"每日在售",type:"line",data:n},{name:"每日减少",type:"line",data:i}]})},drawLine_jjxsku:function(){var a=p.a.init(this.$refs.myChart_jjxSku),t=this.dateArray2,e=this.seasonalA,s=this.seasonalB,n=this.seasonalC,i=this.seasonalD,r=this.foundationSKU;a.setOption({tooltip:{trigger:"axis"},legend:{data:["春季SKU","夏季SKU","秋季SKU","冬季SKU","基础SKU"],bottom:0,left:"center"},grid:{top:"5%",left:"3%",right:"12%",bottom:"16%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t},yAxis:{type:"value"},series:[{name:"春季SKU",type:"line",data:e},{name:"夏季SKU",type:"line",data:s},{name:"秋季SKU",type:"line",data:n},{name:"冬季SKU",type:"line",data:i},{name:"基础SKU",type:"line",data:r}]})},drawLine_yrycsku:function(){var a=p.a.init(this.$refs.myChart_yrycSku),t=this.dateArray3,e=this.moveInSKU,s=this.moveOutSKU;a.setOption({tooltip:{trigger:"axis"},legend:{data:["移入SKU","移出SKU"],bottom:0,left:"center"},grid:{top:"5%",left:"3%",right:"12%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t},yAxis:{type:"value"},series:[{name:"移入SKU",type:"line",data:e},{name:"移出SKU",type:"line",data:s}]})}}},f=y,D=(e("9491"),e("2877")),g=Object(D["a"])(f,s,n,!1,null,"62cb043d",null);t["default"]=g.exports},9491:function(a,t,e){"use strict";var s=e("e536"),n=e.n(s);n.a},e536:function(a,t,e){}}]);
//# sourceMappingURL=chunk-0933d32f.bed50e2b.js.map