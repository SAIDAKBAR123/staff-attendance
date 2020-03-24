<template>
    <v-dialog v-model="userList.case" width="700">
          <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
         {{userList.userList.startTime | moment("MMMM, Do YYYY")}}
        </v-card-title>
                 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Order</th>
          <th class="text-left">Name</th>
          <th class="text-left">Contacts</th>
          <th class="text-left">Actual Address</th>
           <th class="text-left">Status</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody v-if="userList.userList.responses.length>0">
        <tr v-for="(item,i) in userList.userList.responses" :key="item.name">
             <td>{{ i+1}}</td>
          <td>{{ item.staff.name }}</td>
          <td>{{ item.staff.phoneNumber }}</td>
          <td>{{ item.actualLocation }}</td>
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
            @click="userList.case = false"
          >
            close
          </v-btn>
            <v-btn
            color="primary"
            text
            :href="`${base}requests/${userList.userList.id}/getExcel`"
          >
          excel
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      base: process.env.VUE_APP_BASE_URL
    }
  },
  props: {
    userList: {
      type: Object,
      required: true
    }
  },
  created () {
    this.base = process.env.VUE_APP_BASE_URL
  }

}
</script>

<style>

</style>
