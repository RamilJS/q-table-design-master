<template>
  <div class="q-ml-xl q-mt-xl q-gutter-sm">
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
  </div>

  <div class="row justify-between">
    <div class="q-mt-lg q-ml-lg q-pl-lg row text-h3 text-weight-bold text-capitalize">
      <p class="text-primary ">
        Содержание
      </p>
    </div>

    <div class="q-mt-lg q-mr-lg q-pr-lg row">
      <q-img
        class="rounded-borders"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        alt="Логотип компании"
        style="height: 50px; width: 120px"
      />
    </div>
  </div>

  <div class="q-pa-md row items-start q-gutter-md row justify-evenly wrap content-center">
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
            class="rounded-borders"
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

    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-lg">
          <div class="text-h5 q-mt-sm q-mb-xs text-primary ">
            Вводные курсы (инструктажи)
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="/public/images/briefing.jpg"
            alt="Люди в офисе"
          />
        </q-card-section>
      </q-card-section>

      <q-card-actions>
        <q-btn
          glossy
          style="border-radius: 15px; width: 120px;"
          size="13px"
          class="q-px-xl q-py-xs q-ml-lg q-mb-md"
          color="secondary"
          label="Открыть"
        />
      </q-card-actions>
    </q-card>

    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-lg">
          <div class="text-h5 q-mt-sm q-mb-xs text-primary ">
            Личная эффективность и развитие
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="/public/images/personal_efficiency.jpg"
            alt="Люди в офисе"
          />
        </q-card-section>
      </q-card-section>

      <q-card-actions>
        <q-btn
          glossy
          style="border-radius: 15px; width: 120px;"
          size="13px"
          class="q-px-xl q-py-xs q-ml-lg q-mb-md"
          color="secondary"
          label="Открыть"
        />
      </q-card-actions>
    </q-card>

    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-card-section horizontal>
        <q-card-section class="q-pt-lg">
          <div class="text-h5 q-mt-sm q-mb-xs text-primary ">
            Управление эффективности деятельности (УЭД)
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="/public/images/efficiency_management.jpg"
            alt="Люди в офисе"
          />
        </q-card-section>
      </q-card-section>

      <q-card-actions>
        <q-btn
          glossy
          style="border-radius: 15px; width: 120px;"
          size="13px"
          class="q-px-xl q-py-xs q-ml-lg q-mb-md"
          color="secondary"
          label="Открыть"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  height: 100%
  max-height: 250px
  max-width: 500px
</style>
