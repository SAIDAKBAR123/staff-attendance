<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="montserrat-default fs_30">Requests</p>
        </v-col>
      </v-row>
      <v-row justify="start">
        <v-col cols="auto">
          <v-btn tile color="primary" @click="loading2 = !loading2">
            Send Request
            <template v-slot:loader>
              <span>Loading...</span>
            </template>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            :disabled="snackbar"
            tile
            @click="dialog = true"
            color="primary"
          >
            Schedule Request</v-btn
          >
        </v-col>
        <v-col cols="12">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInLeftBig"
            leave-active-class="animated bounceOutRight"
          >
            <v-alert
              v-if="loading2"
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
                    @click="loading2 = false"
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
        <v-col>
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-0"
          >
            <template v-slot:item.time="{ item }">
              <span>{{ item.time | moment("MMM D, YYYY") }}</span>
            </template>
            <template v-slot:item.times="{ item }">
              <span>{{ item.time | moment("dddd , LT") }}</span>
            </template>
            <template v-slot:item.isActive="{ item }">
              <v-progress-linear
                :color="item.isActive == 1 ? 'success' : 'grey'"
                :value="item.responses.length"
                stream
                height="20"
              >
                {{ item.isActive == 1 ? "On process" : "finished" }}
              </v-progress-linear>
            </template>
                 <template v-slot:item.responses="{item}">
              <v-btn @click="dialogOpen(item)" rounded color="primary" outlined dark
                ><v-icon size="20" left>mdi-eye</v-icon> view</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <!--dialog box -->
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-time-picker
            full-width
            v-model="datePick"
            :landscape="$vuetify.breakpoint.smAndUp"
            ampm-in-title
          ></v-time-picker>
          <v-card-action class="my-2">
            <v-btn
              @click="dialog = false"
              tile
              x-large
              block
              color="success"
              class="text-center align-self-center pa-2"
              >START <v-icon size="30" right>mdi-podcast</v-icon></v-btn
            >
          </v-card-action>
        </v-card>
      </v-dialog>
      <!--notification --->
      <v-snackbar v-model="snackbar" right>
        <v-row>
          <v-col>
            <span>Request is going to be sent!</span>
            <v-progress-linear
              indeterminate
              color="green darken-2"
            ></v-progress-linear>
          </v-col>
        </v-row>
        <v-btn color="pink" text @click="snackbar = false">
          Cancel
        </v-btn>
      </v-snackbar>
      <!-- dialog for userlist -->
       <v-dialog v-model="hasUsersList" width="700">
          <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
         {{userList.time | moment("MMMM, Do YYYY")}}
        </v-card-title>
                 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
             <th class="text-left">Order</th>
          <th class="text-left">Name</th>
          <th class="text-left">Contacts</th>
          <th class="text-left">Actual Address</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody v-if="userList.responses.length>0">
        <tr v-for="(item,i) in userList.responses" :key="item.name">
             <td>{{ i+1}}</td>
          <td>{{ item.staff.name }}</td>
          <td>{{ item.staff.phoneNumber }}</td>
          <td>{{ item.addressString }}</td>
          <td>  <v-chip small :color="item.isInside ==1 ? 'green lighten-2' : 'red lighten-2'" dark>{{ item.isInside == 1 ? 'In' : 'Out' }}</v-chip></td>
          <td><v-btn fab color="primary" small text> <v-icon> mdi-telegram</v-icon></v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    </v-container>
  </div>
  <!-- <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
              > -->
</template>

<script>
export default {
  watch: {
    loading2 (val) {
      console.log(val)
      this.snackbar = true
      setTimeout(() => {
        this.snackbar = false
      }, 3000)
    }
  },
  methods: {
    dialogOpen (item) {
      this.hasUsersList = true
      this.userList = item
      console.log(item)
    }
  },
  data () {
    return {
      userList: [],
      hasUsersList: false,
      loading2: null,
      snackbar: null,
      datePick: null,
      showing: true,
      dialog: false,
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
      desserts: [
        {
          id: 1,
          time: '2020-03-20T10:43:11.000Z',
          isActive: 1,
          createdAt: '2020-03-20T10:43:11.000Z',
          updatedAt: '2020-03-20T10:43:11.000Z',
          responses: [
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
              isInside: 0,
              latitude: '41.323655',
              longitude: '69.309885',
              addressString: 'Узбекистан, Ташкент, 1-й проезд Корабулок, 31',
              time: '2020-03-20T13:28:32.000Z',
              createdAt: '2020-03-20T13:28:32.000Z',
              updatedAt: '2020-03-20T13:28:32.000Z',
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
        },
        {
          id: 2,
          time: '2020-03-20T10:48:03.000Z',
          isActive: 0,
          createdAt: '2020-03-20T10:48:03.000Z',
          updatedAt: '2020-03-20T10:48:03.000Z',
          responses: []
        },
        {
          id: 3,
          time: '2020-03-20T11:01:51.000Z',
          isActive: 1,
          createdAt: '2020-03-20T11:01:51.000Z',
          updatedAt: '2020-03-20T11:01:51.000Z',
          responses: []
        }
      ]
    }
  }
}
</script>

<style></style>
