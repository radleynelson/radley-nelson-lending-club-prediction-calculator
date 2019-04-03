const express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
var serveStatic = require('serve-static');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(serveStatic(__dirname + "/dist"));
const path = require('path');
const port = process.env.PORT || 5000;
const knex = require('knex')({
  client: 'mssql',
  connection: {
    server : 'is415.database.windows.net',
    user : 'is415',
    password : 'Temporary415',
    database : 'is415',
    options: {
      port: 1433,
      encrypt: true
    }
  }
});




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

app.get('/api/getUsers', (req, res) => {
  knex('am_Products').select('reviewerID', 'reviewerName').distinct().limit(1000).then(r => {
    res.status(200).json(r);
  })
})

app.get('/api/getProducts', (req, res) => {
  knex('am_Products').select('asin', 'productName').distinct().limit(1000).then(r => {
    res.status(200).json(r);
  })
})

app.get('/api/seeAllData', (req, res) => {
  knex('am_Products').select('*').then(r => {
    res.status(200).json(r)
  })
})

app.post('/api/PredictRelatedUsers', (req,res)=> {
  let data = req.body;
  let URL = 'https://ussouthcentral.services.azureml.net/workspaces/86aa9b92f05f46e693a1363083be28a2/services/d64d6db0f16341718e039d5234734522/execute?api-version=2.0&details=true';
  let config = {
    headers: {
    'Authorization': 'Bearer ' + 'M/RXMjdt+u30fh+LnFXuQl7eHJW0pXXcPgjs33YJrwuwCZgr7cRGXqnbIqBfiNPIaONroH9sue7eQIJNzI87sg==',
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    }
};
  axios.post(URL, data, config).then(r => {

    let RelatedUsers = r.data.Results.output1.value.Values[0]; 
    console.log(RelatedUsers);
    knex('am_Products').select('reviewerName').whereIn('reviewerID', RelatedUsers).distinct().limit(5).then(response => {
      console.log(response);
      res.status(200).json(response);
    })
  }).catch(err => {
    res.status(500).json("Something went wrong")
  })

})

app.post('/api/PredictRelatedProducts', (req,res)=> {
  let data = req.body;
  let URL = 'https://ussouthcentral.services.azureml.net/workspaces/86aa9b92f05f46e693a1363083be28a2/services/6f99372d63ab4ec9b04ec837bda99f8e/execute?api-version=2.0&details=true';
  let config = {
    headers: {
    'Authorization': 'Bearer ' + 'YlflOVb2hm7yj1L9CZUpbDlCWlMj76XKo8PfkU5mtXkLVEFyz22TrhfFALdQ8/7sJbqh+Zr7aurkwPac3eMJXg==',
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    }
};
  axios.post(URL, data, config).then(r => {

    let RelatedProducts = r.data.Results.output1.value.Values[0]; 
    console.log(RelatedProducts);
    knex('am_Products').select('productName').whereIn('asin', RelatedProducts).distinct().limit(5).then(response => {
      console.log(response);
      res.status(200).json(response);
    })
  }).catch(err => {
    res.status(500).json("Something went wrong")
  })

})

app.post('/api/PredictRelatedUserProduct', (req,res)=> {
  let data = req.body;
  let URL = 'https://ussouthcentral.services.azureml.net/workspaces/14f3c79a892f43f29415553cf9f8c5ff/services/4411b164e97943efade044a6ebb84ada/execute?api-version=2.0&details=true';
  let config = {
    headers: {
    'Authorization': 'Bearer ' + '0UfbPjG0mBpSBLMpw2AoROTfmY9X46kmpw4omEW6GFII73dxdmtxAZ84KZVM/Gpb/qdMJ4HWfCUt2hG6GqEtKg==',
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    }
};
  axios.post(URL, data, config).then(r => {

    let RelatedProducts = r.data.Results.output1.value.Values[0]; 
    console.log(RelatedProducts);
    knex('am_Products').select('productName').whereIn('asin', RelatedProducts).distinct().limit(5).then(response => {
      console.log(response);
      res.status(200).json(response);
    })
  }).catch(err => {
    res.status(500).json("Something went wrong")
  })

})

app.listen(port, () => console.log(`App listening on port ${port}!`));
