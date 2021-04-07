import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  },
  setTest ({commit}) {
    commit('setTest', "test")
  }
};

export default actions;
