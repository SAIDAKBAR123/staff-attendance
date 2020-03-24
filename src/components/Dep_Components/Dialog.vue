<template>
  <v-dialog
      v-model="staffList.dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
         {{staffList.name}}
        </v-card-title>
                 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
             <th class="text-left">Order</th>
          <th class="text-left">Name</th>
          <th class="text-left">Contacts</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in staffList.staffs" :key="item.name">
             <td>{{ item.id}}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phoneNumber }}</td>
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
</template>

<script>
export default {
  props: {
    staffList: {
      type: Object,
      required: true
    }
  },
  computed: {
  },
  data () {
    return {

    }
  },
  created () {
    // console.log(this.staffList)
  }

}
</script>

<style>

</style>
