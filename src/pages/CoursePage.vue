<template>
  <div class="main-container row justify-between">
    <div class="content-container">
      <div class="body-container q-ml-xl q-mt-sm q-gutter-sm row justify-between">
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
            <div class="main-themes-title">
              <p class="text-secondary text-h6 q-mt-sm q-mb-sm text-uppercase text-bold">
                Основные темы курса:
              </p>
            </div>

            <div class="themes-arrow row justify-start">
              <ul class="courses-themes-list">
                <li class="list-item">
                  <div class="themes-arrow-items row">
                    <q-icon
                      name="mdi-arrow-right"
                      size="xl"
                      color="primary"
                    />
                    <div
                      class="q-ml-md"
                      style="margin-top: 12px;"
                    >
                      <p
                        class="main-themes-description text-primary q-mb-md ellipsis-lines"
                      >
                        Понятие лизинга, его виды, субъекты и предметы
                      </p>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="themes-arrow-items row">
                    <q-icon
                      name="mdi-arrow-right"
                      size="xl"
                      color="primary"
                    />
                    <div
                      class="q-ml-md"
                      style="margin-top: 12px;"
                    >
                      <p
                        class="main-themes-description text-primary q-mb-md ellipsis-lines"
                      >
                        Схема лизинговой сделки
                      </p>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="themes-arrow-items row">
                    <q-icon
                      name="mdi-arrow-right"
                      size="xl"
                      color="primary"
                    />
                    <div
                      class="q-ml-md"
                      style="margin-top: 12px;"
                    >
                      <p
                        class="main-themes-description text-primary q-mb-md ellipsis-lines"
                      >
                        Финансовые и нефинансовые преимущества лизинга по сравнению с другими способами
                        финансирования
                      </p>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="themes-arrow-items row">
                    <q-icon
                      name="mdi-arrow-right"
                      size="xl"
                      color="primary"
                    />
                    <div
                      class="q-ml-md"
                      style="margin-top: 12px;"
                    >
                      <p
                        class="main-themes-description text-primary q-mb-md ellipsis-lines"
                      >
                        Преимущества ВТБ Лизинг
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="row justify-between">
            <div class="competency q-mr-xl column">
              <div class="competency-content">
                <p class="main-purpose-title text-secondary text-h6 q-mb-sm text-uppercase text-bold">
                  Развиваем компетенцию
                </p>
              </div>
              <div class="competency">
                <p class="competency-title text-primary">
                  <q-icon
                    name="mdi-check"
                    size="35px"
                    style="margin-bottom: 3px;"
                    color="secondary"
                  />
                  Отвечаем за результат
                </p>
              </div>
            </div>
            <div class="time q-ml-xl column">
              <div class="time-content">
                <p class="main-purpose-title text-secondary text-h6 q-mb-sm text-uppercase text-bold">
                  Время прохождения
                </p>
              </div>
              <div class="time">
                <p class="competency-title text-primary">
                  <q-icon
                    name="mdi-clock-outline"
                    size="35px"
                    style="margin-bottom: 3px;"
                    color="secondary"
                  />
                  60 минут
                </p>
              </div>
            </div>
          </div>

          <div class="start-btn q-mt-sm">
            <q-btn
              class="start-btn text-white text-bold"
              label="НАЧАТЬ"
              size="22px"
              glossy
              icon="mdi-school"
              :to="{ path: '#' }"
            />
          </div>

          <div class="review q-mt-lg q-mb-xl">
            <p class="competency-title text-primary">
              <q-icon
                name="mdi-lead-pencil"
                size="15px"
                style="margin-bottom: 3px;"
                color="secondary"
              />
              Оставить отзыв
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sidebar-container"
    >
      <q-img
        class="rounded-borders card-image"
        src="/public/images/blue-bg.jpg"
        alt="Люди в офисе"
      />
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
.courses-themes-list {
  padding-left: 1px;
}
.content-container {
  flex: 1;
}
.main-container {
  height: 100%;
}
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 330px;
  min-height: 100vh;
}
.card-image {
  width: 100%;
  height: 100%;
  flex: 1 0 auto;
  object-fit: cover;
}
.start-btn {
  background: linear-gradient(to right, #7a31f5, #578bf8) !important;
  border-radius: 10px;
  width: 8em;
}
</style>
