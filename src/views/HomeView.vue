<template>
  <div class="home">
    <img alt="Vue logo" src="https://blackandveatchstorage.blob.core.windows.net/www/BlackAndVeatch.jpeg" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>blackandveatchfrontdoor-gbesd3hdc0hhdcdt.z01.azurefd.net</p>
    <p>Origin: blackandveatchstorage.blob.core.windows.net</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
