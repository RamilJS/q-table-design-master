<template>
  <q-page
    padding
    class="flex flex-center"
  >
    <UserTable
      v-model:selected="selected"
      :users="users"
    />
  </q-page>
</template>

<script setup>
import UserTable from 'src/models/user/table/UserTable.vue'
import statuses from 'src/models/user/table/statuses'
import { ref } from 'vue'

const selected = ref()

const users = [
  {
    id: 27346,
    name: 'Luke',
    imgSrc: 'https://picsum.photos/200/200',
    status: statuses.inProgress
  },
  {
    id: 27396,
    name: 'Lily',
    imgSrc: 'https://picsum.photos/210/210',
    status: statuses.notRegistered
  },
  {
    id: 2796,
    name: 'Jonny',
    imgSrc: 'https://picsum.photos/210/210',
    status: statuses.inProgress
  }
]
</script>
