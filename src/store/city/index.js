
import { cityApi } from "@api/city"
let state = {
    hotCity: JSON.parse(sessionStorage.getItem("hotCity")) || [],
    cityList: JSON.parse(sessionStorage.getItem("cityList")) || [],
    nm:sessionStorage.getItem("nm") || "北京",
    cityId:sessionStorage.getItem("cityId") || 1,
}

let actions = {
    async cityActions({ commit }) {
        let data = await cityApi();
        commit("cityMutations", data.data.cities);
    }
}

let mutations = {

    //点击城市时使修改movie中的城市名
    handleUpdateCityInfo(state,params){
        state.cityId=params.id;
        state.nm=params.nm;
        sessionStorage.setItem("cityId",params.id);
        sessionStorage.setItem("nm",params.nm);

    },
    cityMutations(state, cities) {
        cities.forEach(item => {
            if (item.isHot === 1) {
                state.hotCity.push(item);
            }
        })


        //城市列表
        let cityList = []
        for (var i = 0; i < cities.length; i++) {
            let letterFirst = cities[i].py.slice(0, 1).toUpperCase();

            if (isCityList(letterFirst)) {
                //不存在
                cityList.push({
                    index: letterFirst,
                    list: [{
                        id: cities[i].id,
                        nm: cities[i].nm
                    }]
                })
            } else {
                //存在
                for (var j = 0; j < cityList.length; j++) {
                    if (letterFirst == cityList[j].index) {
                        cityList[j].list.push({
                            id: cities[i].id,
                            nm: cities[i].nm
                        })
                    }
                }
            }
            state.cityList = cityList;

        }

        //判断城市标识是否在cityList中存在
        function isCityList(letterFirst) {
            let flag = true;//不存在
            for (var i = 0; i < cityList.length; i++) {

                if (cityList[i].index == letterFirst) {
                    flag = false;//存在
                    break;
                }
            }
            return flag;
        }
        //对cityList进行排序
        cityList.sort((a, b) => {
            if (a.index > b.index) {
                return 1;
            } else {
                return -1;
            }
        })
        state.cityList = cityList;
        sessionStorage.setItem("cityList", JSON.stringify(cityList));
        sessionStorage.setItem("hotCity", JSON.stringify(state.hotCity));
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced: true
}