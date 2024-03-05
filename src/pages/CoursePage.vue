<template>
  <div class="main-container row justify-between">
    <div class="content-container">
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
            :to="{ path: 'content' }"
          />
          <q-breadcrumbs-el
            label="Профессиональные навыки"
            :to="{ path: 'content-items' }"
          />
          <q-breadcrumbs-el
            label="Основы лизинга"
          />
        </q-breadcrumbs>
      </div>

      <div class="container row">
        <div class="column items-start q-pl-sm q-ml-xl q-mt-sm">
          <div class="header-container">
            <p
              class="text-3 text-weight-regular text-uppercase text-primary text-weight-bold"
              style="font-size: 25px;"
            >
              Основы лизинга
            </p>
          </div>

          <div class="separator-element">
            <q-separator
              color="secondary"
              style="height: 15px; width: 65px; background-color: #00AAFF;"
            />
          </div>

          <div class="purpose-container q-mt-lg row">
            <div class="purpose-trophy">
              <q-icon
                name="mdi-trophy-variant"
                size="80px"
                color="primary"
              />
            </div>
            <div class="main-purpose q-ml-md">
              <p class="main-purpose-title text-secondary text-h6 q-mb-sm text-uppercase text-bold">
                Основная цель
              </p>
              <p
                class="main-purpose-description text-primary q-mb-md ellipsis-2-lines"
                style="max-width: 700px;"
              >
                сформировать практические занания о понятии лизинга, его преимуществах
                по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг
              </p>
            </div>
          </div>

          <div class="main-themes">
            <p class="main-purpose-title text-secondary text-h6 q-mt-md text-uppercase text-bold">
              Основные темы курса:
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.underline-text {
  font-size: 20px;
}
.list-item {
  list-style-type: none
}
.container {
  width: 100%;
  min-width: 610px;
}
.list {
  width: 100%;
  min-width: 550px;
}
.banner {
  border: 1px solid #002882;
}
</style>
