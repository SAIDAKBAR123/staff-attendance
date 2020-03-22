<template>
  <div class="staff">
      <v-container>
      <v-row>
        <v-col cols="4" v-for="item in quick" :key="item.name">
          <v-card :color="item.color" draggable>
            <v-card-title>{{item.name}}</v-card-title>
          </v-card>
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
      quick: [
        {
          name: 'Total Staff members',
          count: '23',
          color: this.getColors()
        },
        {
          name: 'Total Staff members',
          count: '23',
          color: this.getColors()
        },
        {
          name: 'Total Staff members',
          count: '23',
          color: this.getColors()
        }
      ],
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
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          img: 'https://www.ishn.com/ext/resources/900x550/older-worker-mature-senior-900.jpg?1554230646',
          gender: 'Female',
          position: 'cleaner',
          attendance: 0,
          telegram: '@studnet'
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          img: 'https://www.keyholetech.co.uk/wp-content/uploads/2018/03/welfare.png',
          gender: 'Female',
          position: 'cleaner',
          attendance: 1,
          telegram: '@studnet'
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          gender: 'Female',
          img: 'https://www.keyholetech.co.uk/wp-content/uploads/2018/03/welfare.png',
          position: 'cleaner',
          attendance: 1,
          telegram: '@studnet'
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          gender: 'Female',
          img: 'https://www.keyholetech.co.uk/wp-content/uploads/2018/03/welfare.png',
          position: 'cleaner',
          attendance: 0,
          telegram: '@studnet'
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          gender: 'Female',
          img: 'https://www.keyholetech.co.uk/wp-content/uploads/2018/03/welfare.png',
          position: 'cleaner',
          attendance: 1,
          telegram: '@studnet'
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          gender: 'Female',
          position: 'cleaner',
          attendance: 1,
          img: 'https://www.keyholetech.co.uk/wp-content/uploads/2018/03/welfare.png',
          telegram: '@studnet'
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          gender: 'Female',
          img: 'https://www.keyholetech.co.uk/wp-content/uploads/2018/03/welfare.png',
          position: 'cleaner',
          attendance: 0,
          telegram: '@studnet'
        },
        {
          name: 'Alieva Sevara',
          visit: 'Sep 03, 2020',
          gender: 'Female',
          img: 'https://www.keyholetech.co.uk/wp-content/uploads/2018/03/welfare.png',
          position: 'cleaner',
          attendance: 1,
          telegram: '@studnet'
        }

      ]
    }
  },
  methods: {
    getColors () {
      const num1 = Math.floor(Math.random() * 1000)
      const num2 = Math.floor(Math.random() * 1000)
      const num3 = Math.floor(Math.random() * 1000)
      const color = `rgb(${num1}, ${num2} , ${num3})`
      return color
    },
    getColor (calories) {
      const num = Math.floor(Math.random() * 1000)

      console.log(num)
      this.$vuetify.theme.dark = true
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return this.getColors()
    }
  }
}
</script>

<style>

</style>
