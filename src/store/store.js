import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userMasterData: {},
        userData: [],
        inputDate: new Date().toISOString().substr(0, 10),
        flag: "",
        userPayGrade: [],
        showNavDrawer: false,
        showFilter: false,
        showProfileDialog: false,
        profileData: null,
        showLoading: false,
    nodeData:null,
        showNodeProfile:false,
    },
    mutations: {
        setuserData: (state, data) => {
            state.userData = data
        },
        setuserPayGrade: (state, data) => {
            state.userPayGrade = data
        },
        setuserMasterData: (state, data) => {
            state.userMasterData = data
        },
        setInputDate: (state, data) => {
            state.inputDate = data
        },
        setflag: (state, data) => {
            state.flag = data
        },
        setshownavDrawer: (state, data) => {
            state.showNavDrawer = data
        },
        shownavDrawer: (state) => {
            state.showNavDrawer = true
        },
        setshowFilter: (state, data) => {
            state.showFilter = data
        },
        showFilter: (state) => {
            state.showFilter = true
        },
        setShowProfileDialog: (state, data) => {
            state.showProfileDialog = data
        },
        ShowProfileDialog: (state, data) => {
            state.showProfileDialog = true
            state.profileData = data
        },
        setshowLoading: (state, data) => {
            state.showLoading = data
        },
        showLoading: (state) => {
            state.showLoading = true
        },
        setProfileData: (state, data) => {
            state.profileData = data
        },
        setshowNodeProfile:(state,data)=>
        {
            state.showNodeProfile=data
        },
        ShowNodeProfile:(state,data)=>
        {
            state.showNodeProfile=true,
            state.nodeData=data
        },
        setNodeData:(state,data)=>{
             state.nodeData=data
        }
        
    },
    getters: {
        getuserData: (state) => {
            return state.userData
        },
        getuserPayGrade: (state) => {
            return state.userPayGrade
        },
        getuserMasterData: (state) => {
            return state.userMasterData
        },
        getinputDate: (state) => {
            return state.inputDate
        },
        getshownavDrawer: (state) => {
            return state.showNavDrawer
        },
        getshowFilter: (state) => {
            return state.showFilter
        },
        getShowProfileDialog: (state) => {
            return state.showProfileDialog
        },
        getshowLoading: (state) => {
            return state.showLoading
        },
        getProfileData: (state) => {
            console.log(state.profileData)
            return state.profileData
        },
        getshowNodeProfile:(state)=>
        {
           return state.showNodeProfile
        },
        getNodeData:(state)=>{
            return state.nodeData
        }
    },
    actions: {
        testcall: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com/orgchart/getOrgChartData',
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "companyId": "SFPART041835",
                        "userId": data.userid,
                        "effectiveDateTime": data.date
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit('setuserData', response.data)
                    console.log(response)
                })
            })

        },

        testcall1: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com/orgchart/getOrgChartData',
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "companyId": "SFPART041835",
                        "userId": data.userid,
                        "effectiveDateTime": data.date
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setflag", "hello")
                    console.log(response)
                })
            })

        },


        getAllUser: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com/orgchart/getAllUsers',
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "companyId": "SFPART041835",
                        "searchKey": data
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setflag", "hello")
                    console.log(response)
                })
            })

        },


        getRecruitmentData: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com/orgchart/getPosReqData',
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "companyId": "SFPART041835",
                        "positionNumber": data
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setflag", "hello")
                    console.log(response)
                })
            })

        },





    },



})