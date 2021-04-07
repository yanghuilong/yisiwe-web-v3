<template>
  <span>{{item}}{{ $store.state.example }}</span>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import {useStore} from "vuex";
//import {storeKey} from 'src/store'
import {preFetch} from 'quasar/wrappers'
import {StateInterface} from "src/store";

export default defineComponent({
  name: 'Index2',
  components: { ExampleComponent },
  preFetch: preFetch<StateInterface>(({ store }) => {
    return store.dispatch('example/setTest')
  }),
  setup () {
    const $store = useStore()

    // display the item from store state.
    const item = computed(() => $store.state.example.test)
    return {item}
  }
});
</script>
