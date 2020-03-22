<template>
  <div>
    <!--require('../../assets/images/sidebc.jpg')-->
       <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list  dense>
        <v-list-item active-class="border" :to="item.path" link v-for="item in sidebar" :key="item.name">
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
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="nunito">ATTENDANCE TRACKING</v-toolbar-title>
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
   background-color: rgb(74, 180, 250);
   color: rgb(230, 0, 0);
}
</style>
