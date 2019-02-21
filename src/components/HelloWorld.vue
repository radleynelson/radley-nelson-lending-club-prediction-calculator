<template>
<section>
  <h3 class="is-size-3">Lending Club Prediction Calculator</h3>
  <h3 class="is-size-4 has-text-primary">{{result}}</h3>
  <div class="container box" style="width: 50%; boxshadow: 1%;">
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Rent</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="rent">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Credit Card Loan</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="CreditCardLoan">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Income Verified</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select v-model="IncomeVerified">
            <option value="0">Yes</option>
            <option value="1">No</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Debt to Income Ratio</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="DebtToIncome" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validDTI}">
        {{validDTIMessage}}
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Average Fico Score</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="AverageFico" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validFico}">
        {{validFicoMessage}}
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Accounts Opened Past 24 Months</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="AccountsOpened" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validAccountsOpen}">
        {{validAccountsOpenMessage}}
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Total Current Balance</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="TotalCurrentBalance" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validTotalCurrentBalance}">
        {{validTotalCurrentBalanceMessage}}
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Total Accounts</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="TotalAccounts" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validTotalAccounts}">
        {{validTotalAccountMessages}}
      </p>
    </div>
  </div>
</div>


<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button @click="checkForm" class="button is-primary">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
  </div>
  
</section>
</template>

<script>
let URL = 'https://ussouthcentral.services.azureml.net/workspaces/86aa9b92f05f46e693a1363083be28a2/services/04044ec3d6314aa497b847faccdc51d5/execute?api-version=2.0&details=true';
let config = {
    headers: {
      'Authorization': 'Bearer ' + 'zqDh7B5kIB1FJiH6DWB0TyAcMnnJuAu+pFh32Q8OMMwwhvxS9aN/v9gZkZ6saYO6ZNGFMPBgZSgj56BBxB2oTg==',
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
};
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      rent: "1",
      CreditCardLoan: "1",
      IncomeVerified: "1",
      DebtToIncome: "",
      AverageFico: "",
      AccountsOpened: "",
      TotalCurrentBalance: "",
      TotalAccounts: "",
      result: "",
      validCreditCard: true,
      validCreditCardMessage: "This field is required",
      validIncome: true,
      validIncomeMessage: "This field is required",
      validRent: true,
      validRentMessage: "This field is required",
      validDTI: true,
      validDTIMessage: "This field is required",
      validFico: true,
      validFicoMessage: "This field is required",
      validAccountsOpen: true,
      validAccountsOpenMessage: "This field is required",
      validTotalCurrentBalance: true,
      validTotalCurrentBalanceMessage: "This field is required",
      validTotalAccounts: true,
      validTotalAccountMessages:"This field is required"

    }
  },
  created: function(){
    
  },
  methods: {
    checkForm(){
      let checker = true;
      if(this.DebtToIncome == "" ) {
        this.validDTI = false;
        this.validDTIMessage = "Debt To Income is a required numeric field."
        checker = false;
      }
      else if(this.DebtToIncome.includes("-") ) {
        this.validDTI = false;
        this.validDTIMessage = "Please Enter a Positive Number"
        checker = false;
      }
      else if(isNaN(this.DebtToIncome) == true) {
        this.validDTI = false;
        this.validDTIMessage = "Please Enter a Positive Number"
        checker = false;
      }
      else{
        this.validDTI = true;
      }
      if(this.AverageFico == ""){
        this.validFico = false;
        this.validFicoMessage = "Average Fico Score is a required numeric field";
        checker = false;
      }
      else if(this.AverageFico.includes('-')){
        this.validFico = false;
        this.validFicoMessage = "Please enter a Positive Fico Score";
        checker = false;
      }
      else if(isNaN(this.AverageFico) == true) {
        this.validFico = false;
        this.validFico = "Please Enter a Positive Number"
        checker = false;
      }
      else{
        this.validFico = true;
      }
      if(this.AccountsOpened == ''){
        this.validAccountsOpen = false;
        this.validAccountsOpenMessage = "Number of Total Accounts Open is a required numeric field";
        checker = false;
      }
      else if(this.AccountsOpened.includes('-')){
        this.validAccountsOpen = false;
        this.validAccountsOpenMessage = "Please Enter a Positive Number of Accounts";
        checker = false;
      }
      else if(isNaN(this.AccountsOpened) == true){
        this.validAccountsOpen = false;
        this.validAccountsOpenMessage = "Please Enter a Positive Number of Accounts";
        checker = false;
      }
      else{
        this.validAccountsOpen = true;
      }
      if(this.TotalCurrentBalance == ""){
        this.validTotalCurrentBalance = false;
        this.validTotalCurrentBalanceMessage = "Total Current Balance is a required numeric field";
        checker = false; 
      }
      else if(this.TotalCurrentBalance.includes('-')){
        this.validTotalCurrentBalance = false;
        this.validTotalCurrentBalanceMessage = "Please Enter a Positive Total Current Balance";
        chekcer = false;
      }
      else if(isNaN(this.TotalCurrentBalance) == true){
        this.validTotalCurrentBalance = false;
        this.validTotalCurrentBalanceMessage = "Please Enter a Positive Total Current Balance";
        checker = false;
      }
      else{
        this.validTotalCurrentBalance = true;
      }
      if(this.TotalAccounts == ''){
        this.validTotalAccounts = false;
        this.validTotalAccountMessages = "Total Accounts is a required numeric field";
        checker = false;
      }
      else if(this.TotalAccounts.includes('-')){
        this.validTotalAccounts = false;
        this.validTotalAccountMessages = "Please Enter 0 or a Positive Number of Accounts";
        checker = false;
      }
      else if(isNaN(this.TotalAccounts) == true){
        this.validTotalAccounts = false;
        this.validTotalAccountMessages = "Please Enter 0 or a Positive Number of Accounts"
        checker = false;
      }
      else{
        this.validTotalAccounts = true;
      }
      if(checker == true){
        this.Predict();
      }
    },
    Predict() {
      axios.post('/api/calculate', {
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "RENT",
        "CreditCardLoan",
        "dti",
        "avg_fico",
        "acc_open_past_24mths",
        "NOT VERIFIED",
        "LN_tot_cur_bal",
        "LN_total_acc"
      ],
      "Values": [
        [
          this.rent,
          this.CreditCardLoan,
          this.DebtToIncome,
          this.AverageFico,
          this.AccountsOpened,
          this.IncomeVerified,
          Math.log(this.TotalCurrentBalance),
          Math.log(this.TotalAccounts)
        ]
      ]
    }
  },
  "GlobalParameters": {}
}).then(res => {
  console.log(res.data);
  this.result = 'There is a ' + ((res.data.value * 100).toFixed(2)) + '% chance they will pay off their loan in full';
}).catch(err => {
  console.log(err);
})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hide{
  display: none;
}
</style>
