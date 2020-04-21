import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";

import database from "@/database";

Vue.use(Vuex);

VuexORM.use(VuexORMAxios, { axios });

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
});

export default store;
