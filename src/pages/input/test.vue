<template>
  <div>
    <wb-input v-model="username"></wb-input>
    <span>{{username}}</span>
  </div>
</template>
<script>
import wbInput from './wb-input'

export default {
  name: 'test',
  components: {wbInput},
  data () {
    return {
      username: ''
    }
  }
}
</script>
<style scoped lang="scss">

</style>
