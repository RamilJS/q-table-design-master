<template>
  <q-breadcrumbs
    class="q-mt-lg g-ml-lg text-primary"
  >
    <q-breadcrumbs-el
      label="Учебный центр"
      :to="{ path: '/' }"
    />
    <q-breadcrumbs-el
      label="Каталог курсов"
      :to="{ path: 'content' }"
    />
    <q-breadcrumbs-el
      label="Профессиональные навыки"
    />
  </q-breadcrumbs>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BreadCrumbs'
})
</script>

<style scoped>
</style>
