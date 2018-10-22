<template>
  <div>
    <CardGrid :uid="uid" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CardGrid from '@/components/CardGrid.vue'; // @ is an alias to /src

@Component({
  components: {
    CardGrid,
  },
})
export default class CurrentDeck extends Vue {
    @Prop() private uid!: string;
}
</script>
