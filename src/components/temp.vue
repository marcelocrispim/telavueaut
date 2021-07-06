<template>
  <p>temperatura</p>
</template>

<script>
export default {
  name: "temp",
  data() {
    return {
      t: []
    }
  },
  mqtt: {
    'TEMPERATURE' (res){
      console.log('ttt')
      console.log(res)
    }

  }
  ,
  created() {

    this.$mqtt.subscribe('TEMPERATURE')
  }
}
</script>

<style scoped>

</style>