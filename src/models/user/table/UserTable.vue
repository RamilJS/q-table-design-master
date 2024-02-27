<script setup>
import columns from './columns'

import TableHeader from './TableHeader.vue'

import UserCell from './cells/UserCell.vue'
import StatusCell from './cells/StatusCell.vue'
import ActionsCell from './cells/ActionsCell.vue'

defineProps({
  users: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <q-table
    :rows="users"
    :columns="columns"
    row-key="id"
    selection="single"
    class="full-width"
  >
    <template #header="props">
      <TableHeader :props="props" />
    </template>

    <template #body-cell-user="props">
      <UserCell :props="props" />
    </template>

    <template #body-cell-status="props">
      <StatusCell :props="props" />
    </template>

    <template #body-cell-actions="props">
      <ActionsCell :props="props" />
    </template>
  </q-table>
</template>
