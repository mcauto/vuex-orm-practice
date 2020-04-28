import Vue from "vue";
import Vuex from "vuex";

import VuexORM from "@vuex-orm/core";

import Breed from "@/models/Breed";

Vue.use(Vuex);

// Create new instance of Database.
const database = new VuexORM.Database();

database.register(Breed);
export default database;
