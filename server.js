const express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
var serveStatic = require('serve-static');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;


app.get('/api/calculate', (req, res) => {
    let test = {};
    let URL = 'https://ussouthcentral.services.azureml.net/workspaces/86aa9b92f05f46e693a1363083be28a2/services/04044ec3d6314aa497b847faccdc51d5/execute?api-version=2.0&details=true';
    let config = {
        headers: {
        'Authorization': 'Bearer ' + 'zqDh7B5kIB1FJiH6DWB0TyAcMnnJuAu+pFh32Q8OMMwwhvxS9aN/v9gZkZ6saYO6ZNGFMPBgZSgj56BBxB2oTg==',
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        }
    };

    axios.post(URL,
        {
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
            1,
            0,
            17.65,
            750,
            4,
            1,
            Math.log(200000),
            Math.log(5)
          ]
        ]
      }
    },
    "GlobalParameters": {}
  }, config
      ).then(resp => {
          test = resp.data;
        console.log(resp.data.Results)
        res.status(200).json({'value':test.Results.output1.value.Values[0][0]});

      }).catch(err => {
          console.log(err);
          res.send('error');
      })

})


app.post('/api/calculate', (req, res) =>  {
    let data = req.body;
    console.log(data);

    let test = {};
    let URL = 'https://ussouthcentral.services.azureml.net/workspaces/86aa9b92f05f46e693a1363083be28a2/services/04044ec3d6314aa497b847faccdc51d5/execute?api-version=2.0&details=true';
    let config = {
        headers: {
        'Authorization': 'Bearer ' + 'zqDh7B5kIB1FJiH6DWB0TyAcMnnJuAu+pFh32Q8OMMwwhvxS9aN/v9gZkZ6saYO6ZNGFMPBgZSgj56BBxB2oTg==',
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        }
    };

    axios.post(URL, data, config
      ).then(resp => {
          test = resp.data;
        console.log(resp.data.Results)
        res.status(200).json({'value':test.Results.output1.value.Values[0][0]});

      }).catch(err => {
          console.log(err);
          res.send('error');
          res.status(500).json(err);
      })

    //res.status(200).json({'result': 'ok'});
})

app.post('/api/calculator', (req, res) => {
  let data = req.body;
    console.log(data);

    let test = {};
    let URL = 'https://ussouthcentral.services.azureml.net/workspaces/86aa9b92f05f46e693a1363083be28a2/services/61d08b83eb964356bf88e3f6ff72bbd5/execute?api-version=2.0&details=true';
    let config = {
        headers: {
        'Authorization': 'Bearer ' + 'QTTKU17UAMD4WsPdF7H7zZNFKIkOrZsEwuhvJqYscuYCWlbxzN6G93tuWFkiR7hyl/AvlNLRJ2E6/Hi3DC+0tA==',
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        }
    };

    axios.post(URL, data, config
      ).then(resp => {
          test = resp.data;
        console.log(resp.data.Results)
        res.status(200).json({'value':test.Results.output1.value.Values[0][0]});

      }).catch(err => {
          console.log(err);
          res.send('error');
          res.status(500).json(err);
      })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
