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
    <q-item>
      <q-item-section side>
        <q-img
          width="48px"
          :src="props.row.imgSrc"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label
          style="font-size: 1.3em"
          class="text-weight-bold text-grey-8"
        >
          {{ props.row.name }} #{{ props.row.id }}
        </q-item-label>
        <q-item-label class="text-grey">
          {{ props.row.name }} #{{ props.row.id }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-td>
</template>
