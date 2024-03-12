<template>
  <q-card
    class="my-card col-3"
  >
    <q-card-section horizontal>
      <q-card-section class="q-pt-lg">
        <div
          class="text-h5 q-mt-sm q-mb-xs text-primary"
        >
          Профессиональные навыки
        </div>
        <q-card-actions>
          <q-btn
            glossy
            style="border-radius: 15px; width: 120px;"
            size="13px"
            color="secondary"
            class="q-pr-xl q-py-xs q-mr-xl"
            label="Открыть"
            :to="{ path: '/content-items' }"
          />
        </q-card-actions>
      </q-card-section>
      <q-card-section class="col-5 flex flex-center">
        <q-img
          class="rounded-borders card-image"
          src="/public/images/people_in_work.jpg"
          alt="Люди в офисе"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardCourse'
})
</script>

<style scoped>
.my-card {
  width: 100%;
  height: 100%;
  max-height: 300px;
  min-height: 200px;
  min-width: 300px;
  max-width: 500px;
}
.card-image {
  border-radius: 50%;
  height: 170px;
  width: 170px;
}
.card-container {
  gap: 10px;
}
</style>
