<template>
  <div>
    <ExercisesComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ExercisesComponent from '@/components/ExercisesComponent.vue';

@Component({
  components: {
    ExercisesComponent,
  },
})
export default class Exercise extends Vue {}
</script>