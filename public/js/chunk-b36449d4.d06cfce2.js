(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b36449d4"],{"5ae1":function(t,e,a){},b0c0:function(t,e,a){var n=a("83ab"),s=a("9bf2").f,o=Function.prototype,i=o.toString,r=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&s(o,c,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(t){return""}}})},b318:function(t,e,a){"use strict";a("5ae1")},f847:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{"padding-top":"40px",background:"#f1f1f3"}},[a("div",{staticClass:"row justify-content-center",staticStyle:{"margin-bottom":"30px"}},[a("div",{staticClass:"col-md-8"},[a("h3",{staticClass:"text-center mb50",staticStyle:{"font-family":"fantasy"}},[t._v("Money management Page")]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"form-style",on:{submit:function(e){return e.preventDefault(),t.handleSubmitForm(e)}}},[a("div",{staticClass:"form-group mr20"},[a("label",{staticClass:"form-label"},[t._v("Insert a name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money.name,expression:"money.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Management Name",required:""},domProps:{value:t.money.name},on:{input:function(e){e.target.composing||t.$set(t.money,"name",e.target.value)}}})]),a("div",{staticClass:"form-group mr20"},[a("label",{staticClass:"form-label"},[t._v("Starting Bank")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money.startingBank,expression:"money.startingBank"}],staticClass:"form-control",attrs:{type:"text",placeholder:"€10000",required:""},domProps:{value:t.money.startingBank},on:{input:function(e){e.target.composing||t.$set(t.money,"startingBank",e.target.value)}}})]),a("div",{staticClass:"form-group mr20"},[a("label",{staticClass:"form-label"},[t._v("Target profit")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money.targetProfit,expression:"money.targetProfit"}],staticClass:"form-control",attrs:{type:"text",placeholder:"10%",required:""},domProps:{value:t.money.targetProfit},on:{input:function(e){e.target.composing||t.$set(t.money,"targetProfit",e.target.value)}}})]),a("div",{staticClass:"form-group mr20"},[a("label",{staticClass:"form-label"},[t._v("Stop Losses")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money.stopLoss,expression:"money.stopLoss"}],staticClass:"form-control",attrs:{type:"text",placeholder:"3%",required:""},domProps:{value:t.money.stopLoss},on:{input:function(e){e.target.composing||t.$set(t.money,"stopLoss",e.target.value)}}})]),t._m(0)])])])])]),a("div",{staticClass:"money-table"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t._m(1),a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-striped",staticStyle:{"text-align":"center","font-family":"'Poppins', sans-serif"}},[t._m(2),a("tbody",t._l(t.Moneys,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.startingBank))]),a("td",[t._v(t._s(e.targetProfit))]),a("td",[t._v(t._s(e.stopLoss))]),a("td",[t._v(t._s(e.PL))]),a("td",[a("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"detail",params:{id:e._id}}}},[t._v("Add ")]),a("button",{staticClass:"btn btn-danger",on:{click:function(a){return a.preventDefault(),t.deleteList(e._id)}}},[t._v("Delete")])],1)])})),0)])])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group mr20 mt-auto"},[a("button",{staticClass:"btn btn-success"},[t._v("Add")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label_1"},[a("label",[t._v("Money manangement list:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Starting Bank(€)")]),a("th",[t._v("Target Profit(%)")]),a("th",[t._v("Stop Loss(%)")]),a("th",[t._v("P / L %")]),a("th",[t._v("Actions")])])])}],o=(a("b0c0"),a("c740"),a("a434"),a("bc3a")),i=a.n(o),r=a("3d20"),c=a.n(r),l={data:function(){return{money:{name:"",startingBank:"",targetProfit:"",stopLoss:""},Moneys:[],moneyId:""}},created:function(){var t=this,e="http://localhost:8081/api/moneys/list";i.a.post(e).then((function(e){t.Moneys=e.data})).catch((function(t){console.log(t)}))},methods:{handleSubmitForm:function(){var t=this,e="http://localhost:8081/api/moneys/searchName/".concat(this.money.name);i.a.post(e).then((function(e){if(""!=e.data)c.a.fire("Alert!","This name is already existed. Please input another name","error");else{var a="http://localhost:8081/api/moneys/create";i.a.post(a,t.money).then((function(e){c.a.fire("Success!","Create new money management data succesfully","success"),t.money={name:"",startingBank:"",targetProfit:"",stopLoss:""};var a="http://localhost:8081/api/moneys/list";i.a.post(a).then((function(e){t.Moneys=e.data})).catch((function(t){console.log(t)})),t.moneyId=e.data._id;var n=e.data.startingBank,s=t.moneyId,o={id:s,bank:n},r="http://localhost:8081/api/details/create";i.a.post(r,o).then((function(){})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))}})).catch((function(t){console.log(t)}))},addDetail:function(t){var e=this.Moneys.findIndex((function(e){return e._id===t}));console.log(e),this.$router.push("/detail")},deleteList:function(t){var e=this,a="http://localhost:8081/api/moneys/".concat(t),n=this.Moneys.findIndex((function(e){return e._id===t}));c.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&i.a.delete(a).then((function(){e.Moneys.splice(n,1),c()("Deleted!","Your file has been deleted.","success")})).catch((function(t){console.log(t)}))}))}}},m=l,u=(a("b318"),a("2877")),d=Object(u["a"])(m,n,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-b36449d4.d06cfce2.js.map