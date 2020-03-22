<template>
  <div>
      <v-container>
        <v-row>
          <v-col cols="2">
            <h2>Requests and Reports</h2>
          </v-col>
            <v-col cols="12">
            <v-btn tile text color="blue" href="http://31.135.215.99:8080/getExcel"><v-icon left>mdi-download</v-icon> get Excel</v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
             <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-0"
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
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    getDate (dateString) {
      const date = new Date(dateString)
      console.log(date.getHours() + ':' + date.getMinutes())
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'staff.name'
        },
        { text: 'Mobile number', value: 'staff.phoneNumber' },
        { text: 'Attendance', value: 'isInside' },
        { text: 'Log Date', value: 'time' },
        { text: 'Log Time', value: 'times' },
        { text: 'Actual Location', value: 'addressString' },
        { text: 'Action', value: 'telegram' }
      ],
      desserts: [
        {
          id: 1,
          staffId: 3,
          requestId: 1,
          isInside: 0,
          latitude: '41.323634',
          longitude: '69.309896',
          addressString: 'Узбекистан, Ташкент, 1-й проезд Корабулок, 31',
          time: '2020-03-20T10:43:19.000Z',
          createdAt: '2020-03-20T10:43:19.000Z',
          updatedAt: '2020-03-20T10:43:19.000Z',
          request: {
            id: 1,
            time: '2020-03-20T10:43:11.000Z',
            isActive: 1,
            createdAt: '2020-03-20T10:43:11.000Z',
            updatedAt: '2020-03-20T10:43:11.000Z'
          },
          staff: {
            id: 3,
            name: 'Zafar Davlatov',
            chatId: 782190450,
            phoneNumber: '+998909647853',
            departmentId: 1,
            createdAt: '2020-03-20T10:29:43.000Z',
            updatedAt: '2020-03-20T10:42:59.000Z'
          }
        },
        {
          id: 2,
          staffId: 3,
          requestId: 1,
          isInside: 1,
          latitude: '41.323655',
          longitude: '69.309885',
          addressString: 'Узбекистан, Ташкент, 1-й проезд Корабулок, 31',
          time: '2020-03-20T13:28:32.000Z',
          createdAt: '2020-03-20T13:28:32.000Z',
          updatedAt: '2020-03-20T13:28:32.000Z',
          request: {
            id: 1,
            time: '2020-03-20T10:43:11.000Z',
            isActive: 1,
            createdAt: '2020-03-20T10:43:11.000Z',
            updatedAt: '2020-03-20T10:43:11.000Z'
          },
          staff: {
            id: 3,
            name: 'Zafar Davlatov',
            chatId: 782190450,
            phoneNumber: '+998909647853',
            departmentId: 1,
            createdAt: '2020-03-20T10:29:43.000Z',
            updatedAt: '2020-03-20T10:42:59.000Z'
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
