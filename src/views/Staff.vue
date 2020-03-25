<template>
  <div class="staff">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="montserrat-default fs_30">Staff</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="desserts.length > 0" cols="12">
          <v-data-table
            search
            :headers="headers"
            :items="desserts"
            class="elevation-0 animated fadeIn"
          >
            <template v-slot:item.id="{ item }">
              <span>{{ item.id }}</span>
            </template>
            <template v-slot:item.username="{ item }">
              <v-btn
                :disabled="item.username !== null ? false : true"
                small
                color="primary"
                target="_blank"
                :outlined="item.username !== null ? true : false"
                :dark="item.username !== null ? true : false"
                :href="`https://t.me/${item.username}`"
                ><v-icon size="">mdi-telegram</v-icon>call</v-btn
              >
            </template>
            <template v-slot:item.chatId="{ item }">
              <p>{{ item.chatId == null ? "No" : "Yes" }}</p>
            </template>
          </v-data-table>
        </v-col>
        <v-col v-else>
          <loading />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Get from '../services/Get'
export default {
  name: 'Home',
  data () {
    return {
      headers: [
        {
          text: 'Order',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        { text: 'Name', value: 'name' },
        { text: 'Phone', value: 'phoneNumber' },
        { text: 'Position', value: 'department.name' },
        { text: 'Registered', value: 'chatId' },
        { text: 'Username', value: 'username' }
      ],
      desserts: []
    }
  },
  methods: {
    getData () {
      Get.getStaff().then(data => {
        this.desserts = data
      }).catch(err => console.log(err))
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style></style>
