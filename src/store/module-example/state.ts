export interface ExampleStateInterface {
  prop: boolean;
  test: string
}

/*
function state(): ExampleStateInterface {
  return {
    prop: false,
    test: ""
  }
};
*/

const state = (): ExampleStateInterface => ({
  prop: false,
  test: ""
})
export default state;
