<template>
    <div>
        <section class="section hero is-primary" style='margin-bottom: 35px;'>
            <h1 class="is-size-2">Amazon Product Reccomendation</h1>
            <h3 class="is-size-3">Radley Nelson</h3>
        </section>
        <div v-if='login == true'>
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <h2 class="is-size-3">Related Users</h2>
                        <select class="select" v-model="selectedUserId">
                            <option v-for="user in Users" :key="user.reviewerID + Math.random()" :value="user.reviewerID">{{user.reviewerName}}</option>
                        </select>
                        <div style="margin-top: 25px">
                            <button class='button is-primary' @click="getRelatedUserPrediction">Get Related Users</button>
                        </div>
                        <div style="margin-top: 25px;" v-if='relatedUsers.length > 0'>
                            <ul>
                                <li v-for="user in relatedUsers" :key='user.reviewerName + Math.random()'>{{user.reviewerName}}</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="column">
                    <div class="box">
                        <h2 class="is-size-3">Related Items</h2>

                        <select class="select" v-model="selectedAsin">
                            <option v-for="item in Products" :key="item.asin + Math.random()" :value="item.asin">{{item.productName.substring(0,41) + '....'}}</option>
                        </select>
                            <div style="margin-top: 25px;">
                                <button class='button is-primary' @click="getRelatedProductPrediction">Get Related Items</button>
                            </div>
                            <div style="margin-top: 25px;" v-if='relatedItems.length > 0'>
                                <ul>
                                    <li v-for="item in relatedItems" :key='item.productName + Math.random()'>{{item.productName}}</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="column box" style="width:50%; margin:auto;">
                    <h2 class="is-size-3">Item Reccomendation</h2>
                    <h1 class="is-size-5">User</h1>
                    <select class="select" v-model="selectedUserUser">
                        <option v-for="user in Users" :key="user.reviewerID + Math.random()" :value="user.reviewerID">{{user.reviewerName}}</option>
                    </select>
                    <h1 class="is-size-5">Item</h1>
                    <select class="select" v-model="selectedUserItem">
                        <option v-for="item in Products" :key="item.asin + Math.random()" :value="item.asin">{{item.productName.substring(0,41) + '...'}}</option>
                    </select>
                    <div style="margin-top:25px">
                        <button class='button is-primary' @click="getRelatedUserProductPrediction">Reccomend Items</button>

                    </div>
                    <div style="margin-top: 25px" v-if='relatedUserItems.length > 0'>
                        <ul>
                            <li v-for="item in relatedUserItems" :key='item.productName + Math.random()'>{{item.productName}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="box" style="width: 30%; margin: auto;">
                <div>
                    <label class="is-size-4">User Name:</label>
                    <input class="input" v-model="userName" type="text">
                </div>
                <div style="margin-top: 25px;">
                    <label class="is-size-4">Password:</label>
                    <input class="input" v-model="password" type="password">
                </div>
                <div style="margin-top: 15px; text-align: left;">
                    <button @click="logIn" class="button is-info">Log In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Prediction',
        data() {
            return {
                OutputHeader: '',
                Users: {},
                selectedUserId: '',
                relatedUsers: [],
                Products: {},
                selectedAsin: '',
                relatedItems: '',
                selectedUserItem: '',
                selectedUserUser: '',
                relatedUserItems: '',
                login: false,
                userName: '',
                password: ''
            }
        },
        methods: {
            getRelatedUserPrediction() {
                axios.post('/api/PredictRelatedUsers',{
                "Inputs": {
                    "input1": {
                    "ColumnNames": [
                        "reviewerID"
                    ],
                    "Values": [
                        [this.selectedUserId]
                    ]
                    }
                },
                "GlobalParameters": {}
                }).then(res => {
                    res.data.shift();
                    this.relatedUsers = res.data;

                })
            },
            getRelatedProductPrediction() {
                axios.post('/api/PredictRelatedProducts',{
                "Inputs": {
                    "input1": {
                    "ColumnNames": [
                        "asin"
                    ],
                    "Values": [
                        [this.selectedAsin]
                    ]
                    }
                },
                "GlobalParameters": {}
                }).then(res => {
                    res.data.shift();
                    this.relatedItems = res.data;

                })
            },
            getRelatedUserProductPrediction() {
                axios.post('/api/PredictRelatedUserProduct',{
                        "Inputs": {
                            "input1": {
                            "ColumnNames": [
                                "reviewerID",
                                "asin"
                            ],
                            "Values": [
                                [
                                this.selectedUserUser,
                                this.selectedUserItem
                                ]
                            ]
                            }
                        },
                        "GlobalParameters": {}
                }).then(res => {
                    res.data.shift();
                    this.relatedUserItems = res.data;

                })
            },
            getUsers(){
                axios.get('/api/getUsers').then(res => {
                    this.Users = res.data;
                }).catch(err => {
                    console.log('There was an error getting the users');
                })
            },
            getProducts(){
                axios.get('/api/getProducts').then(res => {
                    this.Products = res.data;
                })
            },
            logIn(){
                if(this.userName == 'is415' && this.password == 'MachineLearning'){
                    this.login = true;
                }
            }
            
        },
        created() {
            this.getUsers();
            this.getProducts();
        }
    }
</script>

<style scoped>
.column{
    margin: 15px;
}
h2{
    font-weight: bold;
}
h1{
    font-weight: bold;
}
h3{
    font-weight: bold;
}

</style>