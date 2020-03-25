<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="montserrat-default fs_30">Requests</p>
        </v-col>
      </v-row>
      <v-row justify="start">
        <v-col v-if="false" cols="auto">
          <v-btn tile color="primary">
            Schedule Request
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            tile
            :disabled="dialog.reqIsOn"
            @click="openReqDialog"
            color="primary"
          >
            Send Request</v-btn
          >
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col v-if="dialog.desserts.length > 0">
          <v-data-table
            :headers="headers"
            :items="dialog.desserts"
            class="elevation-0 animated fadeIn"
          >
            <template v-slot:item.time="{ item }">
               <span>{{ getStartTime(item.startTime) }}</span>
            </template>
            <template v-slot:item.times="{ item }">
              <span>{{ getEndTime(item.endTime) }}</span>
            </template>
            <template v-slot:item.isActive="{ item }">
              <v-chip
                :color="
                  inProcess(item.endTime) ? 'success' : 'orange lighten-4'
                "
                >{{
                  inProcess(item.endTime) ? "On process" : "finished"
                }}</v-chip
              >
            </template>
            <template v-slot:item.responses="{ item }">
              <v-btn
                @click="dialogOpen(item)"
                rounded
                color="primary"
                outlined
                dark
                ><v-icon size="20" left>mdi-eye</v-icon> view</v-btn
              >
            </template>
          </v-data-table>
        </v-col>
        <v-col v-else>
          <loading />
        </v-col>
      </v-row>
      <!--dialog box -->
      <send-request-dialog :dialog="dialog" />

      <!-- dialog for userlist -->
      <response-users-dialog :userList="userList" />
    </v-container>
  </div>
  <!-- <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
              > -->
</template>

<script>
import Get from '../services/Get'
import SendRequestDialog from '../components/Req_Components/SendRequestDialog'
import ResponseUsersDialog from '../components/Req_Components/ResonseUsersDialog'

export default {
  components: {
    SendRequestDialog,
    ResponseUsersDialog
  },
  methods: {
    getStartTime (date) {
      return this.$moment(date).format('MMM D, YYYY')
    },
    getEndTime (date) {
      return this.$moment(date).format('dddd , LT')
    },
    inProcess (date) {
      return new Date(date).getTime() > new Date().getTime()
    },
    getData () {
      Get.getRequests()
        .then(data => {
          this.dialog.desserts = data
        })
        .catch(error => console.log(error))
    },
    dialogOpen (item) {
      this.userList = {
        case: true,
        userList: item
      }
    },
    openReqDialog () {
      this.dialog.dialog = true
    }
  },
  data () {
    return {
      base: null,
      userList: {
        case: false,
        userList: []
      },
      reqIsOn: {
        check: false
      },
      showing: true,
      dialog: {
        dialog: false,
        reqIsOn: false,
        reqId: '',
        desserts: []
      },
      headers: [
        {
          text: 'Request Date',
          align: 'start',
          sortable: false,
          value: 'time'
        },
        { text: 'Time', value: 'times' },
        { text: 'Status', value: 'isActive' },
        { text: 'View', value: 'responses' }
      ],
      desserts: []
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.base = process.env.VUE_APP_BASE_URL
  }
}
</script>

<style></style>
