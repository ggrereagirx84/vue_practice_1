import Vue from "vue";
import Router from "vue-router";
import Questionnaire from "./components/Questionnaire";
import CustomerData from "./components/CustomerData";
import Consultation from "./components/Consultation";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {path: '/', component: CustomerData}, {path: '/questionnaire', component: Questionnaire}, {path: '/consultation', component: Consultation}
  ]
});