<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {StateInterface} from "src/store";
import {preFetch} from "quasar/wrappers";

export default defineComponent({
  name: 'App',
})
</script>
