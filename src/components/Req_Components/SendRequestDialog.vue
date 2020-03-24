<template>
<div>
        <v-dialog v-model="dialog.dialog" width="500">
        <v-card>
          <v-time-picker
          format="24hr"
            :min="minHours"
            full-width
            v-model="datePick"
            :landscape="$vuetify.breakpoint.smAndUp"
            ampm-in-title
          ></v-time-picker>
          <v-card-actions class="my-2">
            <v-btn
            :disabled="datePick == null"
              @click="sendRequest"
              tile
              x-large
              block
              color="success"
              class="text-center align-self-center pa-2"
              >START <v-icon size="30" right>mdi-podcast</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--notification -->
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
      </div>
</template>

<script>
import Post from '../../services/Post'
// import moduleName from '../../services';
// import Delete from '../../services/Delete'
export default {
  props: {
    dialog: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      snackbar: false,
      datePick: null
    }
  },
  computed: {
    minHours () {
      const time = new Date()
      const ap = time.getHours() + ':' + time.getMinutes()
      console.log(ap)
      return ap
    }
  },
  methods: {
    //  getData () {
    //   Get.getRequests().then(data => {
    //     console.log(data)
    //     this.desserts = data
    //   }).catch(error => console.log(error))
    // },
    sendRequest () {
      const now = new Date()
      const hours = this.datePick.split(':')[0]
      const minutes = this.datePick.split(':')[1]
      const timestamps = (new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0)).getTime()
      console.log(timestamps)
      Post.sentRequest({ endTime: timestamps }).then(res => {
        console.log(res)
        this.dialog.dialog = false
        this.dialog.reqIsOn = true
        this.dialog.reqId = res.id
        this.$notify({
          classes: 'my-type',
          type: 'success',
          group: 'foo',
          title: `Time has been set to ${hours} ${minutes}`,
          text: '<p class="nunito">process has been successfully finished</p>'
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>
