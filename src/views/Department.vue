<template>
  <div class="department">
    <v-container>
        <v-row>
            <v-col>
                <p class="montserrat-default fs_30">Departments</p>
            </v-col>
        </v-row>
      <v-row>
        <v-col  v-if="desserts.length > 0">
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-0 animated fadeIn"
          >
            <template v-slot:item.name="{ item }">
              <span class="nunito fs_18">{{ item.name }}</span>
            </template>
            <template v-slot:item.staffs="{item}">
              <v-btn @click="dialogOpen(item)" rounded color="primary" outlined dark
                ><v-icon size="20" left>mdi-eye</v-icon> view</v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-col v-else>
            <loading />
        </v-col>
      </v-row>
    </v-container>
    <!--Dialog -->
    <v-dialog  :staffList="staffList" />
  </div>
</template>

<script>
import VDialog from '../components/Dep_Components/Dialog'
import Get from '../services/Get'

export default {
  components: {
    VDialog
  },
  methods: {
    getData () {
      Get.getDepartments().then(data => {
        this.desserts = data
      }).catch(error => console.log(error))
    },
    dialogOpen (item) {
      this.dialog = true
      this.staffList = {
        ...item,
        dialog: this.dialog
      }
    }
  },
  data () {
    return {
      staffList: {},
      dialog: false,
      headers: [
        {
          text: 'Department',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Quantity (Members)', value: 'staffs.length' },
        { text: 'Action', value: 'staffs' }
      ],
      desserts: []
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style></style>
