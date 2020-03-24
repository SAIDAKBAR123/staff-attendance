<template>
  <div>
      <v-container>
        <v-row >
          <v-col cols="12">
             <p class="montserrat-default fs_30">Requests and Reports</p>
          </v-col>
            <v-col v-if="desserts.length > 0" cols="12">
            <v-btn tile text color="blue" href="http://31.135.215.99:8080/getExcel"><v-icon left>mdi-download</v-icon> get Excel</v-btn>
            <v-btn @click="notify">notify</v-btn>
          </v-col>
        </v-row>
        <v-row v-if="desserts.length > 0" no-gutters>
          <v-col>
             <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-0 animated fadeIn"
          >
            <template v-slot:item.name="{ item }">
              <v-avatar class="mr-2" size="40"
                >
                </v-avatar>
              <span class="nunito fs_18">{{ item.staff.name }}</span>
            </template>
            <template v-slot:item.isInside="{ item }">
              <v-chip :color="item.isInside == 1 ? 'green lighten-2' : 'red darken-3'" dark><span class="nunito-sm">{{item.isInside ==1 ? 'In Zone' : 'Out'}}</span></v-chip>
            </template>
            <template v-slot:item.time="{item}">
             <!-- <span><v-icon>mdi-time</v-icon> {{getDate(item.time)}}</span> -->
             <span>{{ item.time | moment("MMM D, YYYY") }}</span>
            </template>
             <template v-slot:item.times="{item}">
             <!-- <span><v-icon>mdi-time</v-icon> {{getDate(item.time)}}</span> -->
             <span>{{ item.time | moment("dddd , LT") }}</span>
            </template>
            <template v-slot:item.telegram="{item}">
              <v-btn @click="dialogOpen(item)" rounded color="primary" outlined dark
                ><v-icon size="20" left>mdi-eye</v-icon> view</v-btn>
            </template>
          </v-data-table>
          </v-col>
          <v-snackbar
          color="success"
      v-model="snackbar"
      :timeout="1000"
    >
      {{ obj.staff.name }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import Get from '../services/Get'
import io from 'socket.io-client'
export default {
  methods: {
    notify () {
      this.$notify({
        classes: 'my-type',
        type: 'success',
        group: 'foo',
        title: 'Azamat Abdullaev',
        text: '<strong class=" nunito-sans-default">has been shared his status</strong>'
      })
    },
    getData () {
      Get.getResponse().then(data => {
        this.desserts = data
        console.log(data)
        this.dummy = data[0]
      }).catch(error => console.log(error))
    },
    addNew () {
      this.desserts.unshift(this.dummy)
    }
  },
  data () {
    return {
      snackbar: false,
      obj: {
        staff: {
          name: ''
        }
      },
      socket: {},
      dummy: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'staff.name'
        },
        { text: 'Mobile number', value: 'staff.phoneNumber' },
        { text: 'Attendance', value: 'isInside' },
        { text: 'Date', value: 'time' },
        { text: 'Time', value: 'times' },
        { text: 'Actual Location', value: 'actualLocation' },
        { text: 'Action', value: 'telegram' }
      ],
      desserts: []
    }
  },
  created () {
    this.getData()
    this.socket = io('http://iutattendance.herokuapp.com')
  },
  mounted () {
    this.socket.on('newResponse', data => {
      // this.desserts = console.log(data)
      this.snackbar = true
      this.obj = data
      this.desserts.unshift(data)
    })
  }
}
</script>

<style>

</style>
