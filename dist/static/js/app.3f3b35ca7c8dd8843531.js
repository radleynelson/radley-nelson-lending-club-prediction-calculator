webpackJsonp([1],{DqeX:function(e,t){},Msuc:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")({name:"App"},a,!1,function(e){s("s347")},null,null).exports,n=s("/ocq"),o=s("mtWM"),r=s.n(o),c={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",rent:"1",CreditCardLoan:"1",IncomeVerified:"1",DebtToIncome:"",AverageFico:"",AccountsOpened:"",TotalCurrentBalance:"",TotalAccounts:"",result:"",validCreditCard:!0,validCreditCardMessage:"This field is required",validIncome:!0,validIncomeMessage:"This field is required",validRent:!0,validRentMessage:"This field is required",validDTI:!0,validDTIMessage:"This field is required",validFico:!0,validFicoMessage:"This field is required",validAccountsOpen:!0,validAccountsOpenMessage:"This field is required",validTotalCurrentBalance:!0,validTotalCurrentBalanceMessage:"This field is required",validTotalAccounts:!0,validTotalAccountMessages:"This field is required"}},created:function(){},methods:{checkForm:function(){var e=!0;""==this.DebtToIncome?(this.validDTI=!1,this.validDTIMessage="Debt To Income is a required numeric field.",e=!1):this.DebtToIncome.includes("-")?(this.validDTI=!1,this.validDTIMessage="Please Enter a Positive Number",e=!1):1==isNaN(this.DebtToIncome)?(this.validDTI=!1,this.validDTIMessage="Please Enter a Positive Number",e=!1):this.validDTI=!0,""==this.AverageFico?(this.validFico=!1,this.validFicoMessage="Average Fico Score is a required numeric field",e=!1):this.AverageFico.includes("-")?(this.validFico=!1,this.validFicoMessage="Please enter a Positive Fico Score",e=!1):1==isNaN(this.AverageFico)?(this.validFico=!1,this.validFico="Please Enter a Positive Number",e=!1):this.validFico=!0,""==this.AccountsOpened?(this.validAccountsOpen=!1,this.validAccountsOpenMessage="Number of Total Accounts Open is a required numeric field",e=!1):this.AccountsOpened.includes("-")?(this.validAccountsOpen=!1,this.validAccountsOpenMessage="Please Enter a Positive Number of Accounts",e=!1):1==isNaN(this.AccountsOpened)?(this.validAccountsOpen=!1,this.validAccountsOpenMessage="Please Enter a Positive Number of Accounts",e=!1):this.validAccountsOpen=!0,""==this.TotalCurrentBalance?(this.validTotalCurrentBalance=!1,this.validTotalCurrentBalanceMessage="Total Current Balance is a required numeric field",e=!1):this.TotalCurrentBalance.includes("-")?(this.validTotalCurrentBalance=!1,this.validTotalCurrentBalanceMessage="Please Enter a Positive Total Current Balance",chekcer=!1):1==isNaN(this.TotalCurrentBalance)?(this.validTotalCurrentBalance=!1,this.validTotalCurrentBalanceMessage="Please Enter a Positive Total Current Balance",e=!1):this.validTotalCurrentBalance=!0,""==this.TotalAccounts?(this.validTotalAccounts=!1,this.validTotalAccountMessages="Total Accounts is a required numeric field",e=!1):this.TotalAccounts.includes("-")?(this.validTotalAccounts=!1,this.validTotalAccountMessages="Please Enter 0 or a Positive Number of Accounts",e=!1):1==isNaN(this.TotalAccounts)?(this.validTotalAccounts=!1,this.validTotalAccountMessages="Please Enter 0 or a Positive Number of Accounts",e=!1):this.validTotalAccounts=!0,1==e&&this.Predict()},Predict:function(){var e=this;r.a.post("/api/calculate",{Inputs:{input1:{ColumnNames:["RENT","CreditCardLoan","dti","avg_fico","acc_open_past_24mths","NOT VERIFIED","LN_tot_cur_bal","LN_total_acc"],Values:[[this.rent,this.CreditCardLoan,this.DebtToIncome,this.AverageFico,this.AccountsOpened,this.IncomeVerified,Math.log(this.TotalCurrentBalance),Math.log(this.TotalAccounts)]]}},GlobalParameters:{}}).then(function(t){console.log(t.data),e.result="There is a "+(100*t.data.value).toFixed(2)+"% chance they will pay off their loan in full"}).catch(function(e){console.log(e)})}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h3",{staticClass:"is-size-3"},[e._v("Lending Club Prediction Calculator")]),e._v(" "),s("h3",{staticClass:"is-size-4 has-text-primary"},[e._v(e._s(e.result))]),e._v(" "),s("div",{staticClass:"container box",staticStyle:{width:"50%",boxshadow:"1%"}},[s("div",{staticClass:"field is-horizontal"},[e._m(0),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field is-narrow"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.rent,expression:"rent"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.rent=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"1"}},[e._v("Yes")]),e._v(" "),s("option",{attrs:{value:"0"}},[e._v("No")])])])])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(1),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field is-narrow"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.CreditCardLoan,expression:"CreditCardLoan"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.CreditCardLoan=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"1"}},[e._v("Yes")]),e._v(" "),s("option",{attrs:{value:"0"}},[e._v("No")])])])])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(2),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field is-narrow"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.IncomeVerified,expression:"IncomeVerified"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.IncomeVerified=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0"}},[e._v("Yes")]),e._v(" "),s("option",{attrs:{value:"1"}},[e._v("No")])])])])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(3),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.DebtToIncome,expression:"DebtToIncome"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.DebtToIncome},on:{input:function(t){t.target.composing||(e.DebtToIncome=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validDTI}},[e._v("\n        "+e._s(e.validDTIMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(4),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.AverageFico,expression:"AverageFico"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.AverageFico},on:{input:function(t){t.target.composing||(e.AverageFico=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validFico}},[e._v("\n        "+e._s(e.validFicoMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(5),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.AccountsOpened,expression:"AccountsOpened"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.AccountsOpened},on:{input:function(t){t.target.composing||(e.AccountsOpened=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validAccountsOpen}},[e._v("\n        "+e._s(e.validAccountsOpenMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(6),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.TotalCurrentBalance,expression:"TotalCurrentBalance"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.TotalCurrentBalance},on:{input:function(t){t.target.composing||(e.TotalCurrentBalance=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validTotalCurrentBalance}},[e._v("\n        "+e._s(e.validTotalCurrentBalanceMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(7),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.TotalAccounts,expression:"TotalAccounts"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.TotalAccounts},on:{input:function(t){t.target.composing||(e.TotalAccounts=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validTotalAccounts}},[e._v("\n        "+e._s(e.validTotalAccountMessages)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[s("div",{staticClass:"field-label"}),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",on:{click:e.checkForm}},[e._v("\n          Submit\n        ")])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Rent")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Credit Card Loan")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Income Verified")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Debt to Income Ratio")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Average Fico Score")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Accounts Opened Past 24 Months")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Total Current Balance")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Total Accounts")])])}]};var v=s("VU/8")(c,d,!1,function(e){s("Msuc")},"data-v-e53cf3a6",null).exports,u={name:"Calculator",data:function(){return{msg:"",DebtToIncome:"",validDTI:!0,validDTIMessage:"This field is required",FicoScore:"",validFico:!0,validFicoMessage:"This is a requrired field",InqLast6Months:"",validInqLast6Months:!0,validInqLast6MonthsMessage:"This is a required field",RevolUtil:"",validRevolUtil:!0,validRevolUtilMessage:"This is a required field",AllUtil:"",validAllUtil:!0,validAllUtilMessage:"This is a requried field",result:""}},methods:{checkForm:function(){var e=!0;""==this.DebtToIncome?(this.validDTI=!1,this.validDTIMessage="Debt To Income is a required numeric field.",e=!1):this.DebtToIncome.includes("-")?(this.validDTI=!1,this.validDTIMessage="Please Enter a Positive Number",e=!1):1==isNaN(this.DebtToIncome)?(this.validDTI=!1,this.validDTIMessage="Please Enter a Positive Number",e=!1):this.validDTI=!0,""==this.FicoScore?(this.validFico=!1,this.validFicoMessage="High Fico Score is a required numeric field.",e=!1):this.FicoScore.includes("-")?(this.validFico=!1,this.validFico="Please Enter a Positive Number",e=!1):1==isNaN(this.FicoScore)?(this.validFico=!1,this.validFicoMessage="Please Enter a Positive Number",e=!1):this.validFico=!0,""==this.InqLast6Months?(this.validInqLast6Months=!1,this.validInqLast6MonthsMessage="Inquiries Last 6 Months is a required numeric field.",e=!1):this.InqLast6Months.includes("-")?(this.validInqLast6Months=!1,this.validInqLast6MonthsMessage="Please Enter a 0 or a Positive Number",e=!1):1==isNaN(this.InqLast6Months)?(this.validInqLast6Months=!1,this.validInqLast6MonthsMessage="Please Enter a 0 or a Positive Number",e=!1):this.validInqLast6Months=!0,""==this.RevolUtil?(this.validRevolUtil=!1,this.validRevolUtilMessage="Revolving Utilization is a required numeric field.",e=!1):this.RevolUtil.includes("-")?(this.validRevolUtil=!1,this.validRevolUtilMessage="Please Enter a 0 or a Positive Number",e=!1):1==isNaN(this.RevolUtil)?(this.validRevolUtil=!1,this.validRevolUtilMessage="Please Enter a 0 or a Positive Number",e=!1):this.validRevolUtil=!0,""==this.AllUtil?(this.validAllUtil=!1,this.validAllUtilMessage="All Utilization is a required numeric field.",e=!1):this.AllUtil.includes("-")?(this.validAllUtil=!1,this.validAllUtilMessage="Please Enter a 0 or a Positive Number",e=!1):1==isNaN(this.AllUtil)?(this.validAllUtil=!1,this.validAllUtilMessage="Please Enter a 0 or a Positive Number",e=!1):this.validAllUtil=!0,e&&this.Predict()},Predict:function(){var e=this;r.a.post("/api/calculator",{Inputs:{input1:{ColumnNames:["dti","fico_range_high","inq_last_6mths","revol_util","all_util"],Values:[[this.DebtToIncome,this.FicoScore,this.InqLast6Months,this.RevolUtil,this.AllUtil]]}},GlobalParameters:{}}).then(function(t){e.msg="We predict this customer will be ",e.result=t.data.value}).catch(function(e){console.log(e)})}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h3",{staticClass:"is-size-3"},[e._v("Lending Club Prediction Calculator")]),e._v(" "),s("h3",{staticClass:"is-size-4"},[e._v("This Calculator uses Multiclass Logistic Regression for 94.65% Accuracy")]),e._v(" "),s("h3",{staticClass:"is-size-4"},[e._v(e._s(e.msg)+" "),s("span",{staticClass:"has-text-primary"},[e._v(e._s(e.result))])]),e._v(" "),s("div",{staticClass:"container box",staticStyle:{width:"50%",boxshadow:"1%"}},[s("div",{staticClass:"field is-horizontal"},[e._m(0),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.DebtToIncome,expression:"DebtToIncome"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.DebtToIncome},on:{input:function(t){t.target.composing||(e.DebtToIncome=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validDTI}},[e._v("\n        "+e._s(e.validDTIMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(1),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.FicoScore,expression:"FicoScore"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.FicoScore},on:{input:function(t){t.target.composing||(e.FicoScore=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validFico}},[e._v("\n        "+e._s(e.validFicoMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(2),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.InqLast6Months,expression:"InqLast6Months"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.InqLast6Months},on:{input:function(t){t.target.composing||(e.InqLast6Months=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validInqLast6Months}},[e._v("\n        "+e._s(e.validInqLast6MonthsMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(3),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.RevolUtil,expression:"RevolUtil"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.RevolUtil},on:{input:function(t){t.target.composing||(e.RevolUtil=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validRevolUtil}},[e._v("\n        "+e._s(e.validRevolUtilMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[e._m(4),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.AllUtil,expression:"AllUtil"}],staticClass:"input",attrs:{type:"number",placeholder:""},domProps:{value:e.AllUtil},on:{input:function(t){t.target.composing||(e.AllUtil=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"help is-danger",class:{hide:e.validAllUtil}},[e._v("\n        "+e._s(e.validAllUtilMessage)+"\n      ")])])])]),e._v(" "),s("div",{staticClass:"field is-horizontal"},[s("div",{staticClass:"field-label"}),e._v(" "),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",on:{click:e.checkForm}},[e._v("\n          Submit\n        ")])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Debt To Income Ratio")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("High Fico Score")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Inquiries Last 6 Months")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("Revolving Utilization")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"field-label is-normal"},[t("label",{staticClass:"label"},[this._v("All Utilization")])])}]};var h=s("VU/8")(u,m,!1,function(e){s("avhp")},"data-v-0c716510",null).exports,p={name:"Prediction",data:function(){return{OutputHeader:"",Users:{},selectedUserId:"",relatedUsers:[],Products:{},selectedAsin:"",relatedItems:"",selectedUserItem:"",selectedUserUser:"",relatedUserItems:"",login:!1,userName:"",password:""}},methods:{getRelatedUserPrediction:function(){var e=this;r.a.post("/api/PredictRelatedUsers",{Inputs:{input1:{ColumnNames:["reviewerID"],Values:[[this.selectedUserId]]}},GlobalParameters:{}}).then(function(t){t.data.shift(),e.relatedUsers=t.data})},getRelatedProductPrediction:function(){var e=this;r.a.post("/api/PredictRelatedProducts",{Inputs:{input1:{ColumnNames:["asin"],Values:[[this.selectedAsin]]}},GlobalParameters:{}}).then(function(t){t.data.shift(),e.relatedItems=t.data})},getRelatedUserProductPrediction:function(){var e=this;r.a.post("/api/PredictRelatedUserProduct",{Inputs:{input1:{ColumnNames:["reviewerID","asin"],Values:[[this.selectedUserUser,this.selectedUserItem]]}},GlobalParameters:{}}).then(function(t){t.data.shift(),e.relatedUserItems=t.data})},getUsers:function(){var e=this;r.a.get("/api/getUsers").then(function(t){e.Users=t.data}).catch(function(e){console.log("There was an error getting the users")})},getProducts:function(){var e=this;r.a.get("/api/getProducts").then(function(t){e.Products=t.data})},logIn:function(){"is415"==this.userName&&"MachineLearning"==this.password&&(this.login=!0)}},created:function(){this.getUsers(),this.getProducts()}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),e._v(" "),1==e.login?s("div",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h2",{staticClass:"is-size-3"},[e._v("Related Users")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedUserId,expression:"selectedUserId"}],staticClass:"select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedUserId=t.target.multiple?s:s[0]}}},e._l(e.Users,function(t){return s("option",{key:t.reviewerID+Math.random(),domProps:{value:t.reviewerID}},[e._v(e._s(t.reviewerName))])}),0),e._v(" "),s("div",{staticStyle:{"margin-top":"25px"}},[s("button",{staticClass:"button is-primary",on:{click:e.getRelatedUserPrediction}},[e._v("Get Related Users")])]),e._v(" "),e.relatedUsers.length>0?s("div",{staticStyle:{"margin-top":"25px"}},[s("ul",e._l(e.relatedUsers,function(t){return s("li",{key:t.reviewerName+Math.random()},[e._v(e._s(t.reviewerName))])}),0)]):e._e()])]),e._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h2",{staticClass:"is-size-3"},[e._v("Related Items")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedAsin,expression:"selectedAsin"}],staticClass:"select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedAsin=t.target.multiple?s:s[0]}}},e._l(e.Products,function(t){return s("option",{key:t.asin+Math.random(),domProps:{value:t.asin}},[e._v(e._s(t.productName.substring(0,41)+"...."))])}),0),e._v(" "),s("div",{staticStyle:{"margin-top":"25px"}},[s("button",{staticClass:"button is-primary",on:{click:e.getRelatedProductPrediction}},[e._v("Get Related Items")])]),e._v(" "),e.relatedItems.length>0?s("div",{staticStyle:{"margin-top":"25px"}},[s("ul",e._l(e.relatedItems,function(t){return s("li",{key:t.productName+Math.random()},[e._v(e._s(t.productName))])}),0)]):e._e()])])]),e._v(" "),s("div",[s("div",{staticClass:"column box",staticStyle:{width:"50%",margin:"auto"}},[s("h2",{staticClass:"is-size-3"},[e._v("Item Reccomendation")]),e._v(" "),s("h1",{staticClass:"is-size-5"},[e._v("User")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedUserUser,expression:"selectedUserUser"}],staticClass:"select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedUserUser=t.target.multiple?s:s[0]}}},e._l(e.Users,function(t){return s("option",{key:t.reviewerID+Math.random(),domProps:{value:t.reviewerID}},[e._v(e._s(t.reviewerName))])}),0),e._v(" "),s("h1",{staticClass:"is-size-5"},[e._v("Item")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedUserItem,expression:"selectedUserItem"}],staticClass:"select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedUserItem=t.target.multiple?s:s[0]}}},e._l(e.Products,function(t){return s("option",{key:t.asin+Math.random(),domProps:{value:t.asin}},[e._v(e._s(t.productName.substring(0,41)+"..."))])}),0),e._v(" "),s("div",{staticStyle:{"margin-top":"25px"}},[s("button",{staticClass:"button is-primary",on:{click:e.getRelatedUserProductPrediction}},[e._v("Reccomend Items")])]),e._v(" "),e.relatedUserItems.length>0?s("div",{staticStyle:{"margin-top":"25px"}},[s("ul",e._l(e.relatedUserItems,function(t){return s("li",{key:t.productName+Math.random()},[e._v(e._s(t.productName))])}),0)]):e._e()])])]):s("div",[s("div",{staticClass:"box",staticStyle:{width:"30%",margin:"auto"}},[s("div",[s("label",{staticClass:"is-size-4"},[e._v("User Name:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),e._v(" "),s("div",{staticStyle:{"margin-top":"25px"}},[s("label",{staticClass:"is-size-4"},[e._v("Password:")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("div",{staticStyle:{"margin-top":"15px","text-align":"left"}},[s("button",{staticClass:"button is-info",on:{click:e.logIn}},[e._v("Log In")])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"section hero is-primary",staticStyle:{"margin-bottom":"35px"}},[t("h1",{staticClass:"is-size-2"},[this._v("Amazon Product Reccomendation")]),this._v(" "),t("h3",{staticClass:"is-size-3"},[this._v("Radley Nelson")])])}]};var f=s("VU/8")(p,_,!1,function(e){s("DqeX")},"data-v-a587c5ee",null).exports;i.a.use(n.a);var C=new n.a({routes:[{path:"/",name:"HelloWorld",component:v},{path:"/Calculator",name:"Calculator",component:h},{path:"/Prediction",name:"Prediction",component:f}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:C,components:{App:l},template:"<App/>"})},avhp:function(e,t){},s347:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3f3b35ca7c8dd8843531.js.map