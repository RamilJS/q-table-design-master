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

          <div class="content-container">
          </div>
        </div>
      </div>
    </div>

    <div
      class="img-container"
      style="width: 100%; max-width: 330px; height: 100%; max-height: 1200px;"
    >
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
