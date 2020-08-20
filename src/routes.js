// import User from "./components/user/User.vue";
// import UserStart from "./components/user/UserStart.vue";
// import UserDetails from "./components/user/UserDetail.vue";
// import UserEdit from "./components/user/UserEdit.vue";
// const User = () => import('./components/user/User.vue')
const UserStart = () => import('./components/user/UserStart.vue')
const UserEdit = () => import('./components/user/UserEdit.vue')
const UserDetails = () => import('./components/user/UserDetail.vue')

import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

require('./components/user/User.vue')

const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  });
}

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header,
    },
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header,
    },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetails, beforeEnter: (to, from, next) => {
      console.log(`beforeEnter`);
      next();          
      } },
      { path: ":id/edit", component: UserEdit, name: "userEdit" },
    ],
  },
  { path: "/redirect-me", redirect: { path: "/user" } },
  { path: "*", redirect: "/" },
];
