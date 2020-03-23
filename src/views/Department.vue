<template>
  <div class="department">
    <v-container>
        <v-row>
            <v-col>
                <p class="montserrat-default fs_30">Departments</p>
            </v-col>
        </v-row>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-0"
          >
            <template v-slot:item.name="{ item }">
              <span class="nunito fs_18">{{ item.name }}</span>
            </template>
            <template v-slot:item.staffs="{item}">
              <v-btn @click="dialogOpen(item)" rounded color="primary" outlined dark
                ><v-icon size="20" left>mdi-eye</v-icon> view</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <!--Dialog -->
     <v-dialog
      v-model="dialog"
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
  </div>
</template>

<script>
export default {
  methods: {
    dialogOpen (item) {
      this.staffList = item
      this.dialog = true
      console.log(item)
    }
  },
  data () {
    return {
      staffList: [],
      dialog: false,
      headers: [
        {
          text: 'Department',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Quantity (Members)', value: 'staffs.length' },
        { text: 'Action', value: 'staffs' }
      ],
      desserts: [
        {
          id: 1,
          name: 'IT Department',
          createdAt: '2020-03-20T10:29:43.000Z',
          updatedAt: '2020-03-20T10:29:43.000Z',
          staffs: [
            {
              id: 1,
              name: 'Azamat Abdullaev',
              chatId: null,
              phoneNumber: '+998909272970',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 2,
              name: 'Inadullaev Mahmudjon',
              chatId: null,
              phoneNumber: '+998994287668',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 3,
              name: 'Zafar Davlatov',
              chatId: 782190450,
              phoneNumber: '+998909647853',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:42:59.000Z'
            },
            {
              id: 4,
              name: 'Saidakbar Mahmudhujaev',
              chatId: null,
              phoneNumber: '+998998005598',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 5,
              name: 'Laziz Abdullaev',
              chatId: null,
              phoneNumber: '+998909792977',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 6,
              name: 'Тимур Самиев',
              chatId: null,
              phoneNumber: '+998974235157',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 7,
              name: 'Канат Сембиев',
              chatId: null,
              phoneNumber: '+998903521008',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 8,
              name: 'Тимур Яковлев',
              chatId: null,
              phoneNumber: '+998903581582',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 9,
              name: 'Тимур Эрназаров',
              chatId: null,
              phoneNumber: '+998946854928',
              departmentId: 1,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            }
          ]
        },
        {
          id: 2,
          name: 'Library',
          createdAt: '2020-03-20T10:29:43.000Z',
          updatedAt: '2020-03-20T10:29:43.000Z',
          staffs: [
            {
              id: 10,
              name: 'Камила Ташбекова',
              chatId: null,
              phoneNumber: '+998909810666',
              departmentId: 2,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 11,
              name: 'Мохина Арабхонова',
              chatId: null,
              phoneNumber: '+998998811511',
              departmentId: 2,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            },
            {
              id: 12,
              name: 'Евгения Колосова',
              chatId: null,
              phoneNumber: '+998903522268',
              departmentId: 2,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            }
          ]
        },
        {
          id: 3,
          name: 'Student Affairs',
          createdAt: '2020-03-20T10:29:43.000Z',
          updatedAt: '2020-03-20T10:29:43.000Z',
          staffs: [
            {
              id: 13,
              name: 'Гулшан Хаитова',
              chatId: null,
              phoneNumber: '+998911902526',
              departmentId: 3,
              createdAt: '2020-03-20T10:29:43.000Z',
              updatedAt: '2020-03-20T10:29:43.000Z'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
