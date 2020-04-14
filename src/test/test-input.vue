<template>
  <div>
    <wb-input v-model="username"></wb-input>
    <span>{{username}}</span>
  </div>
</template>
<script>
export default {
  name: 'test-input',
  data () {
    return {
      username: ''
    }
  }
}
</script>
<style scoped lang="scss">

</style>
