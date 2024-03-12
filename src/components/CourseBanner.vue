<template>
  <div class="q-mb-md course-banner">
    <q-banner
      class="bg-grey-4 banner"
      rounded
    >
      <p class="courses-purpose text-secondary text-h6 q-mb-sm text-uppercase text-bold">
        Цель курса?
        <q-icon
          name="adjust"
          style="margin-bottom: 3px;"
        />
      </p>
      <p
        class="courses-purpose-description text-primary q-mb-md ellipsis-2-lines"
        style="max-width: 700px;"
      >
        сформировать практические занания о понятии лизинга, его преимуществах
        по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг
      </p>
      <p class="courses-time text-secondary text-h6 q-mb-sm text-uppercase text-bold">
        Время прохождения
        <q-icon
          name="schedule"
          style="margin-bottom: 3px;"
        />
      </p>
      <p
        class="courses-time-item text-primary q-mb-sm text-lowercase"
        style="max-width: 700px;"
      >
        60 минут
      </p>
      <template
        v-slot:action
      >
        <q-btn
          flat
          color="primary"
          label="Закрыть"
        />
      </template>
    </q-banner>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CourseBanner',
  props: {
  }
})
</script>

<style></style>
