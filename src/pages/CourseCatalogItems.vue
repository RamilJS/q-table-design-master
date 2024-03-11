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
              Профессиональные навыки
            </p>
          </div>

          <div class="separator-element">
            <q-separator
              color="secondary"
              style="height: 15px; width: 65px; background-color: #00AAFF;"
            />
          </div>

          <div class="list">
            <ul class="categories-list">
              <li
                class="list-item"
              >
                <div class="row justify-between">
                  <div>
                    <p
                      class="text-body1 text-primary text-weight-bold underline-text"
                    >
                      <a
                        to="#"
                        style="text-decoration: none;"
                      >
                        Основы лизинга
                      </a>
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-lg"
                      label="Описание"
                      :to="{ path: 'course' }"
                    />
                  </div>
                </div>
                <div class="q-mb-md">
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
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p
                      class="text-body1 text-primary text-weight-bold underline-text"
                    >
                      Продукты Автолизинга
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Параметры сделки
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Этапы сделки
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      CRM. Знакомство
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Работа в CRM (инструкции)
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Основы делового письма
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Создание письма в Outlook
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Работа в Outlook
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Видеокурс Microsoft Excel 2010
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Microsoft Excel 2013 "3-й уровень-опытный пользователь"
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="row justify-between">
                  <div>
                    <p class="text-body1 text-primary text-weight-bold underline-text">
                      Microsoft Excel 2013 "4-й уровень-эксперт"
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      style="border-radius: 15px; width: 110px;"
                      size="10px"
                      color="secondary"
                      class="q-ml-xl"
                      label="Описание"
                      :to="{ path: '#' }"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sidebar-container"
    >
      <q-img
        class="rounded-borders card-image"
        src="/public/images/people_in_work.jpg"
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
.categories-list {
  padding-left: 1px;
}
</style>
