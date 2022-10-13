<template>
 <div class="app">
  <main-wrapper></main-wrapper>
 </div>
</template>

<script>
import mainWrapper from './components/mainWrapper.vue';
  
export default {
  name: 'app',
  components:  {
    mainWrapper
  }
  
  
}
</script>

<style lang="css" scoped>
.app {
  text-align: center;

}

</style>
