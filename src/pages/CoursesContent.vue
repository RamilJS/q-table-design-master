<template>
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
        :to="{ path: 'catalog' }"
      />
      <q-breadcrumbs-el
        label="Содержание"
      />
    </q-breadcrumbs>

    <div class="q-mt-lg q-mr-lg q-pr-lg row">
      <q-img
        class="rounded-borders"
        src="/public/icons/logo-vtb-d.png"
        alt="Логотип компании"
        style="height: 60px; width: 270px"
      />
    </div>
  </div>

  <div class="column justify-between q-mb-md">
    <div class="q-ml-lg q-pl-lg row text-h3 text-weight-bold text-capitalize">
      <p class="text-primary ">
        Каталог электронных курсов
      </p>
    </div>

    <div class="q-ml-xl q-mt-sm toolbar-input-container row">
      <q-input
        v-model="search"
        dense
        outlined
        square
        placeholder="Поиск"
        class="bg-white col toolbar-input"
        icon="search"
      />
      <q-btn
        class="toolbar-input-btn"
        color="grey-3"
        text-color="grey-8"
        icon="search"
        unelevated
      />
    </div>
  </div>

  <div class="card-container q-pa-md row items-start q-gutter-md row justify-evenly wrap content-center">
    <q-card
      class="my-card shadow-4 q-mb-lg"
      bordered
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

    <q-card
      class="my-card shadow-4"
      bordered
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-lg">
          <div class="text-h5 q-mt-sm q-mb-xs text-primary ">
            Вводные курсы (инструктажи)
          </div>
          <q-card-actions>
            <q-btn
              glossy
              style="border-radius: 15px; width: 120px;"
              size="13px"
              color="secondary"
              class="q-pr-xl q-py-xs q-mr-xl"
              label="Открыть"
            />
          </q-card-actions>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders card-image"
            src="/public/images/briefing.jpg"
            alt="Люди в офисе"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card
      class="my-card shadow-4"
      bordered
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-lg">
          <div class="text-h5 q-mt-sm q-mb-xs text-primary ">
            Личная эффективность и развитие
          </div>
          <q-card-actions>
            <q-btn
              glossy
              style="border-radius: 15px; width: 120px;"
              size="13px"
              color="secondary"
              class="q-pr-xl q-py-xs q-mr-xl"
              label="Открыть"
            />
          </q-card-actions>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders card-image"
            src="/public/images/personal_efficiency.jpg"
            alt="Люди в офисе"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card
      class="my-card shadow-4"
      bordered
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-lg">
          <div class="text-h5 q-mt-sm q-mb-xs text-primary ">
            Управление эффективности деятельности (УЭД)
          </div>
          <q-card-actions>
            <q-btn
              glossy
              style="border-radius: 15px; width: 120px;"
              size="13px"
              color="secondary"
              class="q-pr-xl q-py-xs q-mr-xl"
              label="Открыть"
            />
          </q-card-actions>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders card-image"
            src="/public/images/efficiency_management.jpg"
            alt="Люди в офисе"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
</script>

<style lang="sass" scoped>
.toolbar-input-container
  min-width: 300px
  width: 55%
.toolbar-input-btn
  border-bottom-right-radius: 10px
  border-top-right-radius: 10px
  border-style: solid
  border-width: 1px 1px 1px 0
  border-color: accent
  max-width: 60px
  width: 100%
.toolbar-input
  border-style: solid
  border-width: 1px 1px 1px 1px
  border-color: accent
.my-card
  width: 100%
  height: 100%
  max-height: 300px
  min-height: 200px
  min-width: 300px
  max-width: 500px
.card-image
  border-radius: 50%
  height: 170px
  width: 170px
.card-container
  gap: 10px
</style>
