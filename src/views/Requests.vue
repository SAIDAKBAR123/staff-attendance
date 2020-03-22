<template>
  <div>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Requests</h2>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="auto">
            <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
              >
            <v-btn v-show="showing" tile color="primary"> Send Request</v-btn>
            </transition>
          </v-col>
          <v-col cols="auto">
            <v-btn  tile @click="showing = !showing"  color="primary"> Schedule Request</v-btn>
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
            <template v-slot:item.isActive="{item}">
              <v-progress-linear
              :color="item.isActive == 1 ? 'success' : 'grey'"
              :value="item.responses.length"
      stream
      height="20"
    >
    {{item.isActive == 1 ? 'On process' : 'finished' }}
    </v-progress-linear>
            </template>
          </v-data-table>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showing: true,
      headers: [
        {
          text: 'Request Date',
          align: 'start',
          sortable: false,
          value: 'time'
        },
        { text: 'Time', value: 'times' },
        { text: 'Status', value: 'isActive' },
        { text: 'View', value: 'reponses.length' }
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
          responses: [{}, {}, {}, {}]
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

<style>

</style>
