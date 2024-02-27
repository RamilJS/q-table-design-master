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
    <q-btn
      icon="more_vert"
      round
      flat
      color="blue-8"
    >
      <q-menu auto-close>
        <q-list dense>
          <q-item clickable>
            <q-item-section side>
              <q-icon name="delete" />
            </q-item-section>
            <q-item-section>
              Delete
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section side>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>
              Edit
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-td>
</template>
