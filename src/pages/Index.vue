<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    <span>{{test}}</span>
  </q-page>
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
  name: 'PageIndex',
  components: { ExampleComponent },
  setup(prop, context) {
    const store = useStore()

    return { test: store.state };
  }
});
</script>
