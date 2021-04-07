import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },
  setTest(state: ExampleStateInterface, val: string) {
    console.log(val)
    state.test = val
  }
};

export default mutation;
