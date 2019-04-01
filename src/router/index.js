import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../components/index"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            meta:{index:0},
            component: index
        }
        ]
})