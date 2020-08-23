import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// const companyId = "SFPART041835"
const companyId = "kalpatarugrp"
// const companyId = "SFPART041835"

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
        nodeData: null,
        parentData: null,
        showNodeProfile: false,
        empProfileData: {},
        isEmployeeDataFetched: "Not Fetched"
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
        setshowNodeProfile: (state, data) => {
            state.showNodeProfile = data
        },
        ShowNodeProfile: (state, data) => {
            state.showNodeProfile = true,
                state.nodeData = data
        },
        parentNodeData: (state, data) => {
            state.parentData = data
        },
        setNodeData: (state, data) => {
            state.nodeData = data
        },
        setEmpProfileData: (state, data) => {
            state.empProfileData = data
        },
        setIsEmployeeDataFetched: (state, data) => {
            state.isEmployeeDataFetched = data
        },

    },
    getters: {
        getuserData: (state) => {
            return state.userData
        },
        getparentData: (state) => {
            return state.parentData
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
        getshowNodeProfile: (state) => {
            return state.showNodeProfile
        },
        getNodeData: (state) => {
            return state.nodeData
        },
        getEmpProfileData: (state) => {
            return state.empProfileData
        },
        setIsEmployeeDataFetched: (state) => {
            return state.isEmployeeDataFetched
        }
    },
    actions: {
        testcall: ({
            commit
        }, data) => {

            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/getOrgChartData', //https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "userId": data.userid,
                        "position": data.position,
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
                    url: 'http://localhost:3000/srv/getOrgChartData',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "userId": data.userid,
                        "position": data.position,
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
                    url: 'http://localhost:3000/srv/getAllUsers',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
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
                    url: 'http://localhost:3000/srv/getPosReqData',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "positionNumber": data
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setflag", "hello")
                    console.log(response)
                })
            })

        },
        getUserProfileData: ({ commit }, data) => {
            console.log(data)
            return new Promise((resolve) => {
                axios({
                    url: 'http://localhost:3000/srv/employeeProfile',
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        "companyId": companyId,
                        "userId": data
                    }
                }).then((response) => {
                    resolve(response.data)
                    commit("setEmpProfileData", response.data)
                    console.log(response)
                })
            })
        }
    },
})