<template>
  <q-card
    class="my-card"
    flat
    bordered
  >
    <q-card-section horizontal>
      <q-card-section class="q-pt-lg">
        <div class="text-h5 q-mt-sm q-mb-xs text-primary">
          Профессиональные навыки
        </div>
      </q-card-section>
      <q-card-section class="col-5 flex flex-center">
        <q-img
          class="rounded-borders card-image"
          src="/public/images/people_in_work.jpg"
          alt="Люди в офисе"
        />
      </q-card-section>
    </q-card-section>

    <q-card-actions>
      <q-btn
        glossy
        style="border-radius: 15px; width: 120px;"
        size="13px"
        color="secondary"
        class="q-px-xl q-py-xs q-ml-lg q-mb-md"
        label="Открыть"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardCourse'
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  height: 100%
  max-height: 250px
  max-width: 500px
.card-image
  border-radius: 50%
  height: 150px
  width: 150px
</style>
