<template>
<section>
  <h3 class="is-size-3">Lending Club Prediction Calculator</h3>
    <h3 class="is-size-4">This Calculator uses Multiclass Logistic Regression for 94.65% Accuracy</h3>

  <h3 class="is-size-4">{{msg}} <span class="has-text-primary">{{result}}</span></h3>
  <div class="container box" style="width: 50%; boxshadow: 1%;">

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Debt To Income Ratio</label>
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
    <label class="label">High Fico Score</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="FicoScore" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validFico}">
        {{validFicoMessage}}
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Inquiries Last 6 Months</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="InqLast6Months" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validInqLast6Months}">
        {{validInqLast6MonthsMessage}}
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Revolving Utilization</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="RevolUtil" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validRevolUtil}">
        {{validRevolUtilMessage}}
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">All Utilization</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="AllUtil" class="input" type="number" placeholder="">
      </div>
      <p class="help is-danger" v-bind:class="{hide: validAllUtil}">
        {{validAllUtilMessage}}
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
import axios from 'axios';
    export default {
        name: 'Calculator',
        data() {
            return {
                msg: '',
                DebtToIncome: "",
                validDTI: true,
                validDTIMessage: "This field is required",
                FicoScore: '',
                validFico: true,
                validFicoMessage: 'This is a requrired field',
                InqLast6Months: '',
                validInqLast6Months: true,
                validInqLast6MonthsMessage: 'This is a required field',
                RevolUtil: '',
                validRevolUtil: true,
                validRevolUtilMessage: 'This is a required field',
                AllUtil: '',
                validAllUtil: true,
                validAllUtilMessage: 'This is a requried field',
                result: ''
            }
        },
        methods: {
            checkForm() {
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
                if(this.FicoScore == "" ) {
                    this.validFico = false;
                    this.validFicoMessage = "High Fico Score is a required numeric field."
                    checker = false;
                }
                else if(this.FicoScore.includes("-") ) {
                    this.validFico = false;
                    this.validFico = "Please Enter a Positive Number"
                    checker = false;
                }
                else if(isNaN(this.FicoScore) == true) {
                    this.validFico = false;
                    this.validFicoMessage = "Please Enter a Positive Number"
                    checker = false;
                }
                else{
                    this.validFico = true;
                }
                if(this.InqLast6Months == "" ) {
                    this.validInqLast6Months = false;
                    this.validInqLast6MonthsMessage = "Inquiries Last 6 Months is a required numeric field."
                    checker = false;
                }
                else if(this.InqLast6Months.includes("-") ) {
                    this.validInqLast6Months = false;
                    this.validInqLast6MonthsMessage = "Please Enter a 0 or a Positive Number"
                    checker = false;
                }
                else if(isNaN(this.InqLast6Months) == true) {
                    this.validInqLast6Months = false;
                    this.validInqLast6MonthsMessage = "Please Enter a 0 or a Positive Number"
                    checker = false;
                }
                else{
                    this.validInqLast6Months = true;
                }

                if(this.RevolUtil == "" ) {
                    this.validRevolUtil = false;
                    this.validRevolUtilMessage = "Revolving Utilization is a required numeric field."
                    checker = false;
                }
                else if(this.RevolUtil.includes("-") ) {
                    this.validRevolUtil = false;
                    this.validRevolUtilMessage = "Please Enter a 0 or a Positive Number"
                    checker = false;
                }
                else if(isNaN(this.RevolUtil) == true) {
                    this.validRevolUtil = false;
                    this.validRevolUtilMessage = "Please Enter a 0 or a Positive Number"
                    checker = false;
                }
                else{
                    this.validRevolUtil = true;
                }

                if(this.AllUtil == "" ) {
                    this.validAllUtil = false;
                    this.validAllUtilMessage = "All Utilization is a required numeric field."
                    checker = false;
                }
                else if(this.AllUtil.includes("-") ) {
                    this.validAllUtil = false;
                    this.validAllUtilMessage = "Please Enter a 0 or a Positive Number"
                    checker = false;
                }
                else if(isNaN(this.AllUtil) == true) {
                    this.validAllUtil = false;
                    this.validAllUtilMessage = "Please Enter a 0 or a Positive Number"
                    checker = false;
                }
                else{
                    this.validAllUtil = true;
                }
                if(checker){
                  this.Predict();
                }
            },
            Predict(){
              axios.post('/api/calculator',{
                "Inputs": {
                  "input1": {
                    "ColumnNames": [
                      "dti",
                      "fico_range_high",
                      "inq_last_6mths",
                      "revol_util",
                      "all_util"
                    ],
                    "Values": [
                      [
                        this.DebtToIncome,
                        this.FicoScore,
                        this.InqLast6Months,
                        this.RevolUtil,
                        this.AllUtil
                      ]
                    ]
                  }
                },
                "GlobalParameters": {}
              }).then(res => {
                this.msg = "We predict this customer will be ";
                this.result = res.data.value;
              }).catch(err => {
                console.log(err);
              })
            }
        },
    }
</script>

<style scoped>
.hide{
  display: none;
}
</style>