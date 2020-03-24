<template>
  <div class="staff">
      <v-container>
      <v-row>
        <v-col cols="12">
          <span class="montserrat-default fs_30">Staff</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="desserts.length >0" cols="12">
           <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-0 animated fadeIn"
  >
    <template v-slot:item.id="{item}">
     <span>{{ item.id }}</span>
    </template>
      <template v-slot:item.username="{}">
      <v-btn small color="primary" outlined dark><v-icon size="">mdi-telegram</v-icon> call</v-btn>
    </template>
  </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Get from '../services/Get'
export default {
  name: 'Home',
  data () {
    return {
      headers: [
        {
          text: 'Order',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        { text: 'Name', value: 'name' },
        { text: 'Phone', value: 'phoneNumber' },
        { text: 'Position', value: 'department.name' },
        { text: 'Username', value: 'username' }
      ],
      desserts: []
    }
  },
  methods: {
    getData () {
      Get.getStaff().then(data => {
        this.desserts = data
      })
    },
    getColor (calories) {
      const num = Math.floor(Math.random() * 1000)

      console.log(num)
      this.$vuetify.theme.dark = true
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style>

</style>
