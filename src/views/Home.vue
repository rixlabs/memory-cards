<template>
  <div class="home">
    <DecksComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DecksComponent from '@/components/DecksComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    DecksComponent,
  },
})
export default class Home extends Vue {}
</script>
