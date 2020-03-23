<template>
  <div class="staff">
      <v-container>
      <v-row>
        <v-col cols="12">
          <span class="montserrat-default fs_30">Staff</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
           <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-0"
  >
   <template v-slot:item.name="{ item }">
     <v-avatar class="mr-2" size="40"><v-img :src="item.img"></v-img></v-avatar>
      <span class="nunito fs_18">{{item.name}}</span>
    </template>
    <template v-slot:item.attendance="{ item }">
      <v-chip small :color="item.attendance ==1 ? 'green lighten-2' : 'red lighten-2'" dark>{{ item.attendance ==1 ? 'attended' : 'absent' }}</v-chip>
    </template>
      <template v-slot:item.telegram="{}">
      <v-btn small color="primary" outlined dark><v-icon size="">mdi-telegram</v-icon> call</v-btn>
    </template>
  </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Last Visit', value: 'visit' },
        { text: 'Gender', value: 'gender' },
        { text: 'Position', value: 'position' },
        { text: 'Attendance', value: 'attendance' },
        { text: 'Action', value: 'telegram' }
      ],
      desserts: [
        {
          name: 'Yakubov Jamshid',
          visit: 'Sep 20, 2019',
          img: 'https://www.ishn.com/ext/resources/900x550/older-worker-mature-senior-900.jpg?1554230646',
          gender: 'male',
          position: 'Bugalter',
          attendance: 1,
          telegram: '@studnet'
        }

      ]
    }
  },
  methods: {

    getColor (calories) {
      const num = Math.floor(Math.random() * 1000)

      console.log(num)
      this.$vuetify.theme.dark = true
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
    }
  }
}
</script>

<style>

</style>
