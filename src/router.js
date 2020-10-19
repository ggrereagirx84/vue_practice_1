import Vue from "vue";
import Router from "vue-router";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/', 
      component: Step1
    }, 
    {
      path: '/step2',
      component: Step2
    },
    {
      path: '/step3', 
      component: Step3
    },
    {
      path: '/step4',
      component: Step4
    },
  ]
});