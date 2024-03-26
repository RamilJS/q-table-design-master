<template>
  <div class="main-container">
    <div class="q-ml-xl q-mt-sm q-gutter-sm row justify-between">
      <q-breadcrumbs
        class="q-mt-lg g-ml-lg text-primary"
      >
        <q-breadcrumbs-el
          label="Учебный центр"
          :to="{ path: '/' }"
        />
        <q-breadcrumbs-el
          label="Каталог курсов"
        />
      </q-breadcrumbs>
    </div>

    <div class="column justify-between q-mb-md">
      <div class="q-ml-lg q-mt-md q-pl-lg row text-h3 text-weight-bold">
        <p class="text-primary ">
          Каталог электронных курсов
        </p>
      </div>

      <div class="q-ml-xl q-mt-sm toolbar-input-container row justify-start">
        <div class="toolbar-input">
          <q-input
            v-model="search"
            dense
            rounded
            outlined
            placeholder="Поиск"
            color="purple"
            class="col"
            icon="search"
          />
        </div>
        <div
          class="toolbar-input-btn"
          q-ml-xl
        >
          <q-btn
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
            round
          />
        </div>
      </div>
    </div>

    <div
      class="card-container q-py-md row q-gutter-md wrap"
      style="margin-left: 32px;"
    >
      <CardCourse />

      <q-card
        class="my-card col-3"
      >
        <q-card-section horizontal>
          <q-card-section class="q-pt-lg">
            <div class="text-h5 q-mt-sm q-mb-xs q-pl-sm text-primary ">
              Вводные курсы (инструктажи)
            </div>
            <q-card-actions>
              <q-btn
                glossy
                size="13px"
                class="q-pr-xl q-py-xs q-mr-xl text-white gradient-btn"
                label="Открыть"
              />
            </q-card-actions>
          </q-card-section>

          <q-card-section class="card-section col-5 flex flex-center">
            <q-img
              class="rounded-borders card-image"
              src="/public/images/briefing.jpg"
              alt="Люди в офисе"
            />
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card
        class="my-card col-3"
      >
        <q-card-section horizontal>
          <q-card-section class="q-pt-lg">
            <div class="text-h5 q-mt-sm q-mb-xs q-pl-sm text-primary ">
              Личная эффективность и развитие
            </div>
            <q-card-actions>
              <q-btn
                glossy
                size="13px"
                class="q-pr-xl q-py-xs q-mr-xl text-white gradient-btn"
                label="Открыть"
              />
            </q-card-actions>
          </q-card-section>

          <q-card-section class="card-section col-5 flex flex-center">
            <q-img
              class="rounded-borders card-image"
              src="/public/images/personal_efficiency.jpg"
              alt="Люди в офисе"
            />
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card
        class="my-card col-3"
      >
        <q-card-section horizontal>
          <q-card-section class="q-pt-lg">
            <div class="text-h5 q-mt-sm q-mb-xs q-pl-sm text-primary ">
              Управление эффективности деятельности (УЭД)
            </div>
            <q-card-actions>
              <q-btn
                glossy
                size="13px"
                class="q-pr-xl q-py-xs q-mr-xl text-white gradient-btn"
                label="Открыть"
              />
            </q-card-actions>
          </q-card-section>

          <q-card-section class="card-section col-5 flex flex-center">
            <q-img
              class="rounded-borders card-image"
              src="/public/images/efficiency_management.jpg"
              alt="Люди в офисе"
            />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import CardCourse from 'src/components/CardCourse.vue'

export default {
  components: {
    CardCourse
  }
}
</script>

<style scoped>
.toolbar-input-container {
  min-width: 500px;
  width: 60%;
  gap: 10px;
}
.toolbar-input {
  width: 70%;
}
.toolbar-input-btn {
  max-width: 60px;
}
.my-card {
  width: 100%;
  height: 100%;
  max-height: 300px;
  min-height: 200px;
  min-width: 300px;
  max-width: 500px;
}
.card-section {
  display: inline-block;
  overflow: hidden;
}
.card-image {
  border-radius: 50%;
  height: 170px;
  width: 170px;
  display: block;
  transition: 1s;
}
.card-image:hover {
  overflow: hidden;
  transform: scale(1.1);
}
.card-container {
  gap: 10px;
}
.gradient-btn {
  background: linear-gradient(to right, #7a31f5, #578bf8) !important;
  border-radius: 15px;
  width: 120px;
}
</style>
