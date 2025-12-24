import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// const companyId = "SFPART041835"
const companyId = "SFCPART000443";
// const companyId = "SFPART041835"
const baseDevURL = "http://localhost:3000"
// const baseDevURL = ""
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isPlanOrgChart: false,
        triggerSavePlan: false,
        triggerApprovalPlan: false,
        finalPlanData: null,
        finalPlanAttach: "",
        allSavedPlans: [],
        selectedBusinessUnit: null,
        selectedStatus: null,
        selectedDept: null,
        selectedPlan: null,
        selectedDivision: null,
        selectedLocation: null,
        departmentSearchText: "", // what user types
        isDetailPlanPage: false,
        isorgChartPage: false,
        isMainOrgChartPage: false,
        saveDraftDialog: false,
        approvalDialog: false,
        isSavedPlanpage: false,
        filterDrawer: false,
        isLevel: false,
        levelPay: [],
        selectedSearchField: [],
        allPaygrade: [],
        userMasterData: {},
        userData: [],
        inputDate: new Date().toISOString().substr(0, 10),
        flag: "",
        userPayGrade: [],
        department: [],
        division: [],
        BU: [],
        location: [],
        showNavDrawer: false,
        showFilter: false,
        showProfileDialog: false,
        profileData: null,
        showLoading: false,
        nodeData: null,
        parentData: null,
        showNodeProfile: false,
        empProfileData: {},
        imgRequire: true,
        isEmployeeDataFetched: "Not Fetched",
        selectedDeptartmentUsers: {},
        departmentList: [],
        selectedDepartment: {},
        showsplitDialog: false,
        showinactivatedialog: false,
        showmergedialog: false,
        showupdatedialog: false,
        overlay: false,
    },
    mutations: {
        TRIGGER_SAVE(state) {
            state.triggerSavePlan = true;
        },
        RESET_TRIGGER_SAVE(state) {
            state.triggerSavePlan = false;
        },
        TRIGGER_APPROVAL(state) {
            state.triggerApprovalPlan = true;
        },
        RESET_TRIGGER_APPROVAL(state) {
            state.triggerApprovalPlan = false;
        },
        SET_FINAL_PLAN_DATA(state, payload) {
            state.finalPlanData = payload;
        },

        SET_FINAL_PLAN_ATTACH(state, payload) {
            state.finalPlanAttach = payload;
        },

        setuserData: (state, data) => {
            state.userData = data;
        },
        setshowoverlay: (state, data) => {
            state.overlay = data;
        },
        setdeptUserData: (state, data) => {
            console.log("store", data);
            state.selectedDeptartmentUsers[data.deptid] = data.users;
        },
        setSelectedDept: (state, data) => {
            state.selectedDepartment = data;
        },
        setisLevel: (state, data) => {
            state.isLevel = data;
        },
        setisDetailPlanPage: (state, data) => {
            state.isDetailPlanPage = data;
        },
        setfilterDrawer: (state, data) => {
            state.filterDrawer = data;
        },
        setlevelPay: (state, data) => {
            state.levelPay = data;
        },
        setsearchField: (state, data) => {
            state.selectedSearchField = data;
        },
        setimgRequire: (state, data) => {
            state.imgRequire = data;
        },
        setallPaygradeData: (state, data) => {
            state.allPaygrade = data;
            console.log(state.allPaygrade);
        },
        setuserPayGrade: (state, data) => {
            state.userPayGrade = data;
        },
        setdepartment: (state, data) => {
            state.department = data;
        },
        setdivision: (state, data) => {
            state.division = data;
        },
        setlocation: (state, data) => {
            state.location = data;
        },
        setuserMasterData: (state, data) => {
            state.userMasterData = data;
        },
        setInputDate: (state, data) => {
            state.inputDate = data;
        },
        setflag: (state, data) => {
            state.flag = data;
        },
        setshownavDrawer: (state, data) => {
            state.showNavDrawer = data;
        },
        shownavDrawer: (state) => {
            state.showNavDrawer = true;
        },
        setshowFilter: (state, data) => {
            state.showFilter = data;
        },
        showFilter: (state) => {
            state.showFilter = true;
        },
        setshowsplitdialog: (state, data) => {
            state.showsplitDialog = data;
        },
        setshowinactivatedialog: (state, data) => {
            state.showinactivatedialog = data;
        },
        setshowupdatedialog: (state, data) => {
            state.showupdatedialog = data;
        },
        setshowmergedialog: (state, data) => {
            state.showmergedialog = data;
        },
        setShowProfileDialog: (state, data) => {
            state.showProfileDialog = data;
        },
        ShowProfileDialog: (state, data) => {
            state.showProfileDialog = true;
            state.profileData = data;
        },
        setshowLoading: (state, data) => {
            state.showLoading = data;
        },
        // showLoading: (state) => {
        //     state.showLoading = true
        // },
        setProfileData: (state, data) => {
            state.profileData = data;
        },
        setshowNodeProfile: (state, data) => {
            state.showNodeProfile = data;
        },
        ShowNodeProfile: (state, data) => {
            (state.showNodeProfile = true), (state.nodeData = data);
        },
        parentNodeData: (state, data) => {
            state.parentData = data;
        },
        setNodeData: (state, data) => {
            state.nodeData = data;
        },
        setbusinessunit: (state, data) => {
            state.BU = data;
        },
        setEmpProfileData: (state, data) => {
            state.empProfileData = data;
        },
        setIsEmployeeDataFetched: (state, data) => {
            state.isEmployeeDataFetched = data;
        },
        setDepartmentList: (state, data) => {
            state.departmentList = data;
        },

        setDepartmentSearchText(state, value) {
            state.departmentSearchText = value;
        },
        setallSavedPlans(state, value) {
            state.allSavedPlans = value;
        },
        setselectedBusinessUnit(state, value) {
            state.selectedBusinessUnit = value;
        },
        setselectedStatus(state, value) {
            state.selectedStatus = value;
        },
        setselectedDivision(state, value) {
            state.selectedDivision = value;
        },
        setselectedDept(state, value) {
            state.selectedDept = value;
        },
        setselectedPlan(state, value) {
            state.selectedPlan = value;
        },
        setselectedLocation(state, value) {
            state.selectedLocation = value;
        },
        setisorgChartPage(state, value) {
            state.isorgChartPage = value;
        },
        setisPlanOrgChart(state, value) {
            state.isPlanOrgChart = value;
        },
        setisMainOrgChartPage(state, value) {
            state.isMainOrgChartPage = value;
        },
        setsaveDraftDialog(state, value) {
            state.saveDraftDialog = value;
        },
        setapprovalDialog(state, value) {
            state.approvalDialog = value;
        },
        setisSavedPlanpage(state, value) {
            state.isSavedPlanpage = value;
        },
    },
    getters: {
        getTriggerSavePlan: (state) => state.triggerSavePlan,
        getFinalPlanData: (state) => state.finalPlanData,
        getTriggerApprovalPlan: (state) => state.triggerApprovalPlan,
        getFinalPlanAttach: (state) => state.finalPlanAttach,
        getDepartmentSearchText: (state) => state.departmentSearchText,
        getallSavedPlans: (state) => state.allSavedPlans,
        getselectedBusinessUnit: (state) => state.selectedBusinessUnit,
        getselectedStatus: (state) => state.selectedStatus,
        getselectedDivision: (state) => state.selectedDivision,
        getselectedDept: (state) => state.selectedDept,
        getselectedPlan: (state) => state.selectedPlan,
        getselectedLocation: (state) => state.selectedLocation,

        getshowoverlay: (state) => {
            return state.overlay;
        },
        getshowsplitdialog: (state) => {
            return state.showsplitDialog;
        },
        getshowupdatedialog: (state) => {
            return state.showupdatedialog;
        },
        getshowmergedialog: (state) => {
            return state.showmergedialog;
        },
        getshowinactivatedialog: (state) => {
            return state.showinactivatedialog;
        },
        getuserData: (state) => {
            return state.userData;
        },
        getdeptUserData: (state) => {
            return state.selectedDeptartmentUsers;
        },
        getSelectedDept: (state) => {
            return state.selectedDepartment;
        },
        getisLevel: (state) => {
            return state.isLevel;
        },
        getisDetailPlanPage: (state) => {
            return state.isDetailPlanPage;
        },
        getisMainOrgChartPage: (state) => {
            return state.isMainOrgChartPage;
        },
        getsaveDraftDialog: (state) => {
            return state.saveDraftDialog;
        },
        getapprovalDialog: (state) => {
            return state.approvalDialog;
        },
        getisorgChartPage: (state) => {
            return state.isorgChartPage;
        },
        getisPlanOrgChart: (state) => {
            return state.isPlanOrgChart;
        },
        getisSavedPlanpage: (state) => {
            return state.isSavedPlanpage;
        },
        getfilterDrawer: (state) => {
            return state.filterDrawer;
        },
        getlevelPay: (state) => {
            return state.levelPay;
        },
        getimgRequire: (state) => {
            return state.imgRequire;
        },
        getsearchField: (state) => {
            return state.selectedSearchField;
        },
        getallPaygradeData: (state) => {
            return state.allPaygrade;
        },
        getparentData: (state) => {
            return state.parentData;
        },
        getbusinessunit: (state) => {
            return state.BU;
        },
        getlocation: (state) => {
            return state.location;
        },
        getuserPayGrade: (state) => {
            return state.userPayGrade;
        },
        getdepartment: (state) => {
            return state.department;
        },
        getdivision: (state) => {
            return state.division;
        },
        getuserMasterData: (state) => {
            console.log(state.userMasterData);
            return state.userMasterData;
        },
        getinputDate: (state) => {
            return state.inputDate;
        },
        getshownavDrawer: (state) => {
            return state.showNavDrawer;
        },
        getshowFilter: (state) => {
            return state.showFilter;
        },
        getShowProfileDialog: (state) => {
            return state.showProfileDialog;
        },
        getshowLoading: (state) => {
            return state.showLoading;
        },
        getProfileData: (state) => {
            console.log(state.profileData);
            return state.profileData;
        },
        getshowNodeProfile: (state) => {
            return state.showNodeProfile;
        },
        getNodeData: (state) => {
            return state.nodeData;
        },
        getEmpProfileData: (state) => {
            return state.empProfileData;
        },
        setIsEmployeeDataFetched: (state) => {
            return state.isEmployeeDataFetched;
        },
        getDepartmentList: (state) => {
            return state.departmentList;
        },
    },
    actions: {
        orgCategory: ({ commit }, data) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getOrgChartData/all",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        type: data.type,
                        typeValue: data.typeValue,
                        effectiveDateTime: data.date,
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setuserData", response.data);
                    console.log(response);
                });
            });
        },
        testcall: ({ commit }, data) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getOrgChartData", //https://ltwueeualhzv2jsd-orgchart-backend.cfapps.eu10.hana.ondemand.com
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        userId: data.userid,
                        position: data.position,
                        effectiveDateTime: data.date,
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setuserData", response.data);
                    console.log(response);
                });
            });
        },

        testcall1: ({ commit }, data) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getOrgChartData",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        userId: data.userid,
                        position: data.position,
                        effectiveDateTime: data.date,
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setflag", "hello");
                    console.log(response);
                });
            });
        },
        getAllUser: ({ commit }, data) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getAllUsers",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        searchKey: data,
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setflag", "hello");
                    console.log(response);
                });
            });
        },

        getDepUser: ({ commit }, data) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getEmpListView",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        dept: data,
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setflag", "hello");
                    // commit("setdeptUserData", {"deptid":data,"users":response.data})
                    console.log(response);
                });
            });
        },

        getAllPaygradeList: ({ commit }) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getPayGrade?companyId=" + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setallPaygradeData", response.data.d.results);
                });
            });
        },

        getAllLocation: () => {
            return new Promise((resolve) => {
                axios({
                    url:
                        baseDevURL + "/srv/getLocationList?companyId=" + companyId,

                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => {
                    resolve(response.data);
                    //commit("setsearchField", response.data.d.results)
                });
            });
        },
        getAllBusinessUnitList: () => {
            return new Promise((resolve) => {
                axios({
                    url:
                        baseDevURL + "/srv/getBusinessUnitList?companyId=" +
                        companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => {
                    resolve(response.data);
                    //commit("setsearchField", response.data.d.results)
                });
            });
        },

        getAllDivisionList: () => {
            return new Promise((resolve) => {
                axios({
                    url:
                        baseDevURL + "/srv/getDivisionList?companyId=" + companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => {
                    resolve(response.data);
                    //commit("setsearchField", response.data.d.results)

                    console.log(response);
                });
            });
        },

        getAllDepartmentList: () => {
            return new Promise((resolve) => {
                axios({
                    url:
                        baseDevURL + "/srv/getDepartmentList?companyId=" +
                        companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => {
                    resolve(response.data);
                    //commit("setsearchField", response.data)
                    console.log(response);
                });
            });
        },

        getAllDepartmentView: () => {
            return new Promise((resolve) => {
                axios({
                    url:
                        baseDevURL + "/srv/getDepartmentView?companyId=" +
                        companyId,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => {
                    resolve(response.data.d.results);

                    //commit("setsearchField", response.data)
                    console.log(response);
                });
            });
        },
        getSavedPlan: (data, sampledata) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getSavedPlan",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        departmentId: sampledata.departmentId,
                        status: sampledata.status,
                    },
                }).then((response) => {
                    resolve(response.data);

                    //commit("setsearchField", response.data)
                    console.log(response);
                });
            });
        },
        CreatePlan: (data, sampledata) => {
            console.log("data from store=", sampledata);
            console.log("Inside update logic=", sampledata.isUpdate)
            console.log("Inside update logic=", sampledata.form.planVersion)
            const payload = {
                companyId: companyId, // ✅ make sure this exists
                planId: sampledata.form.planId,
                planName: sampledata.form.planName,

                departmentId: sampledata.form.departmentId,
                // departmentName: sampledata.departmentName,

                planEffectiveStartDate: sampledata.form.effectiveDate,
                // planPeriod: {
                //   from: sampledata.fromDate,
                //   to: sampledata.toDate,
                // },

                chartData: sampledata.form.chartData,
                // chartBase64: "",

                // userId: "",
            };
            // Inline version increment logic
            if (sampledata.isUpdate && sampledata.form.planVersion) {

                payload.version = sampledata.form.planVersion

            }


            return axios({
                url: baseDevURL + "/srv/plan",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: payload,

            })
                .then((response) => {
                    console.log("getSavedPlan response:", response);
                    return response.data;
                })
                .catch((error) => {
                    console.error("getSavedPlan error:", error);
                    throw error;
                });
        },
        SubmitPlanForApproval: (data, sampledata) => {
            return axios({
                url: baseDevURL + "/srv/submitPlanForApproval",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    planId: sampledata.planId,
                    planName: sampledata.planName,
                    companyId: companyId,
                    fileName: "Attachment.png",
                    fileContent: sampledata.file,
                    departmentId: sampledata.departmentId,
                    version: sampledata.planVersion,
                    planEffectiveStartDate: sampledata.effectiveDate,
                    chartData :sampledata.chartData
                    // approver: {
                    //   userId: sampledata.userId,
                    //   userName: sampledata.userName,
                    // },

                    // userId: "",
                },
            })
                .then((response) => {
                    console.log("getSavedPlan response:", response);
                    return response.data;
                })
                .catch((error) => {
                    console.error("getSavedPlan error:", error);
                    throw error;
                });
        },

        getRecruitmentData: ({ commit }, data) => {
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/getPosReqData",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        positionNumber: data,
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setflag", "hello");
                    console.log(response);
                });
            });
        },
        getUserProfileData: ({ commit }, data) => {
            console.log(data);
            return new Promise((resolve) => {
                axios({
                    url: baseDevURL + "/srv/employeeProfile",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        companyId: companyId,
                        userId: data,
                    },
                }).then((response) => {
                    resolve(response.data);
                    commit("setEmpProfileData", response.data);
                    console.log(response);
                });
            });
        },
    },
});
