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
            :disabled="this.dialog.reqIsOn"
            @click="openReqDialog"
            color="primary"
          >
            Send Request</v-btn
          >
        </v-col>
        <v-col cols="12">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInLeftBig"
            leave-active-class="animated bounceOutRight"
          >
            <v-alert
              v-if="dialog.reqIsOn"
              color="green"
              dark
              dense
              icon="mdi-clock-fast"
              prominent
            >
              <v-row align="center">
                <v-col class="grow">
                  Taking attendance has started successfully. You can stop it
                  any time via Stop button.</v-col
                >
                <v-col class="shrink">
                  <v-btn
                    dark
                    outlined
                    @click="stopAttendance"
                    tile
                    color="white"
                    >STOP</v-btn
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-progress-linear
                    indeterminate
                    color="white"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-alert>
          </transition>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col  v-if="desserts.length > 0">
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-0 animated fadeIn"
          >
            <template v-slot:item.time="{ item }">
              <span>{{ item.startTime | moment("MMM D, YYYY") }}</span>
            </template>
            <template v-slot:item.times="{ item }">
              <span>{{ item.endTime | moment("dddd , LT") }}</span>
            </template>
            <template v-slot:item.isActive="{ item }">
              <!-- <v-progress-linear
                :color="item.isActive == 1 ? 'success' : 'grey'"
                :value="item.responses.length"
                stream
                height="20"
              >
                {{ item.isActive == 1 ? "On process" : "finished" }}
              </v-progress-linear> -->
              <v-chip  :color="item.isActive == 1 ? 'success' : 'orange lighten-4'">{{ item.isActive == 1 ? "On process" : "finished" }}</v-chip>
            </template>
                 <template v-slot:item.responses="{item}">
              <v-btn @click="dialogOpen(item)" rounded color="primary" outlined dark
                ><v-icon size="20" left>mdi-eye</v-icon> view</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <!--dialog box -->
        <send-request-dialog :dialog="dialog"  />

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
import Delete from '../services/Delete'
export default {
  components: {
    SendRequestDialog,
    ResponseUsersDialog
  },
  watch: {
    // loading2 (val) {
    //   this.snackbar = true
    //   setTimeout(() => {
    //     this.snackbar = false
    //   }, 3000)
    // }
  },
  methods: {
    stopAttendance  () {
      console.log(this.dialog)
      Delete.deleteReq(this.dialog.reqId).then(res => {
        console.log(res)
        this.dialog.reqIsOn = false
        this.$notify({
          type: 'warn',
          text: 'Successfully cancelled',
          title: res
        })
      })
    },
    getData () {
      Get.getRequests().then(data => {
        this.desserts = data
      }).catch(error => console.log(error))
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
        reqId: ''
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
