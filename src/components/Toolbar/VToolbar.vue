<template>
  <div>
    <!--require('../../assets/images/sidebc.jpg')-->
       <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item color="blue darken-1" active-class="border" :to="item.path" link v-for="item in sidebar" :key="item.name">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title ><span class="nunito fs_22">{{item.name}}</span></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      src="https://img3.goodfon.com/wallpaper/nbig/5/d3/material-desing-color-3614.jpg"
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="nunito fs_20">ATTENDANCE TRACKING</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey" right text>Leave <v-icon size="30" right>mdi-exit-to-app</v-icon></v-btn>
    </v-app-bar>

  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    picker: new Date().toISOString().substr(0, 10),
    sidebar: [
      {
        name: 'Staff',
        path: '/staff',
        icon: 'mdi-account-child-circle'
      },
      {
        name: 'Departments',
        path: '/department',
        icon: 'mdi-bank'
      },
      {
        name: 'Requests',
        path: 'requests',
        icon: 'mdi-credit-card-wireless'
      },
      {
        name: 'Responses & Reports',
        path: '/reports',
        icon: 'mdi-credit-card-settings'
      }
    ]
  })
}
</script>

<style>
.border{
   border-bottom-color: #61cfe6;;
   border-left-style:solid;
   border-left-width: 7px;
}
</style>
