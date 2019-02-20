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
      <p style="display: none;" class="help is-danger">
        This field is required
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
      <p style="display: none;" class="help is-danger">
        This field is required
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
      <p style="display: none;" class="help is-danger">
        This field is required
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
      <p style="display: none;" class="help is-danger">
        This field is required
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
      <p style="display: none;" class="help is-danger">
        This field is required
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
        <button @click="Predict" class="button is-primary">
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

    }
  },
  created: function(){
    
  },
  methods: {
    checkForm(){
      if(this.DebtToIncome == "" || this.DebtToIncome.includes('-')) {
        
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
</style>
