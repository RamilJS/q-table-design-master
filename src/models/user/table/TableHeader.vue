<script setup>
defineProps({
  props: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <q-tr :props="props">
    <q-th class="bg-grey-2" />
    <q-th
      v-for="col in props.cols"
      :key="col.name"
      :props="props"
      class="bg-grey-2 text-grey-8 text-weight-bold"
    >
      {{ col.label }}
    </q-th>
  </q-tr>
</template>
