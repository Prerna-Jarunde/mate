import Vue from "vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "swiper/dist/css/swiper.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComments,
  faBriefcase,
  faRocket,
  faLaptop,
  faCog,
  faBox,
  faPencilAlt,
  faArrowsAltH,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons"; // fas
import {
  faClock,
  faUser,
  faHeart,
  faPlayCircle,
  faSmile
} from "@fortawesome/free-regular-svg-icons"; // far
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedin,
  faDribbble
} from "@fortawesome/free-brands-svg-icons"; // fab
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(
  faComments,
  faBriefcase,
  faRocket,
  faLaptop,
  faCog,
  faBox,
  faPencilAlt,
  faArrowsAltH,
  faArrowRight
); // fas
library.add(faClock, faUser, faHeart, faPlayCircle, faSmile); // far
library.add(faTwitter, faFacebookF, faGooglePlusG, faLinkedin, faDribbble); // fab

Vue.use(BootstrapVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
