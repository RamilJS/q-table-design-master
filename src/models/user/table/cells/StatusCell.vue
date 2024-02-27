<script setup>
defineProps({
  props: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <q-td :props="props">
    <q-chip
      class="text-weight-bold"
      :label="props.row.status.label"
      :color="props.row.status.bgColor"
      :text-color="props.row.status.textColor"
    />
  </q-td>
</template>
