<template>
  <v-simple-table light>


      <tbody>
      <tr>
        <td>MAC</td>
        <td>{{ valor.Esp01.Mac }}</td>
      </tr>
      <tr>
        <td>Input_Analog 1</td>
        <td>{{ valor.Esp01.Input_Analog[0] }}</td>
      </tr>
      <tr>
        <td>Input_Analog 2</td>
        <td>{{ valor.Esp01.Input_Analog[1] }}</td>
      </tr>
      <tr>
        <td>Input_Analog 3</td>
        <td>{{ valor.Esp01.Input_Analog[2] }}</td>
      </tr>
      <tr>
        <td>Temperatura</td>
        <td>{{ valor.Esp01.Temp }}</td>
      </tr>
      <tr>
        <td>Modo</td>
        <td>{{ valor.Esp01.Modo }}</td>
      </tr>
      <tr>
        <td>Tudo</td>
        <td>{{ valor  }}</td>
      </tr>
      </tbody>

  </v-simple-table>
</template>

<script>


export default {
  name: "display",
  components: {},
  data() {
    return {
      valor: {
        'Esp01':
            {
              Mac: '',
              Input_Analog: [0, 0, 0],
              Input_Digital: [0, 0, 0, 0, 0, 0, 0],
              Lib: [0, 0, 0],
              Modo: "",
              Temp: 0,
              V_ref: 0
            }
      },


    }
  },
  props: {
    topico: String
  },
  methods: {},
  mqtt: {


    'giga_teste': function (data) {

      this.valor = JSON.parse(String.fromCharCode.apply(null, data))
      //console.log('data ',String.fromCharCode.apply(null, data))

      console.log(this.valor)
      // console.log('topic ',topic)

    }
  },
  beforeCreate() {

    this.$mqtt.subscribe('giga_teste')
  }

}
</script>

<style scoped>
tbody {
  width: 50%;
}
</style>