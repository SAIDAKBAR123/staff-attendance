<template>
<div>
        <v-dialog v-model="dialog.dialog" width="500">
        <v-card>
          <v-time-picker
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
  methods: {
    sendRequest () {
      const now = new Date()
      const hours = this.datePick.split(':')[0]
      const minutes = this.datePick.split(':')[1]
      const timestamps = (new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0)).getTime()
      console.log(timestamps)
      Post.sentRequest({ endTime: timestamps }).then(res => {
        console.log(res)
        this.dialog.dialog = false
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>
