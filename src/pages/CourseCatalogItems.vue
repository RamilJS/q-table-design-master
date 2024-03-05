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
        :to="{ path: 'content' }"
      />
      <q-breadcrumbs-el
        label="Профессиональные навыки"
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

  <div class="container row">
    <div class="column items-start q-pl-sm q-ml-xl q-mt-sm">
      <div class="header-container">
        <p
          class="text-3 text-weight-regular text-uppercase text-secondary text-weight-bold"
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
        <ul>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p
                  class="text-body1 text-primary text-weight-bold underline-text"
                >
                  Основы лизинга
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-lg"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
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
                  style="border-radius: 15px; width: 100px;"
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
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Этапы сделки
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  CRM. Знакомство
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Работа в CRM (инструкции)
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Основы делового письма
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Создание письма в Outlook
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Работа в Outlook
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Видеокурс Microsoft Excel 2010
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Microsoft Excel 2013 "3-й уровень-опытный пользователь"
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
                  size="10px"
                  color="secondary"
                  class="q-ml-xl"
                  label="Описание"
                  :to="{ path: '#' }"
                />
              </div>
            </div>
          </li>
          <li style="list-style-type: none">
            <div class="row justify-between">
              <div>
                <p class="text-body1 text-primary text-weight-bold underline-text">
                  Microsoft Excel 2013 "4-й уровень-эксперт"
                </p>
              </div>
              <div>
                <q-btn
                  glossy
                  style="border-radius: 15px; width: 100px;"
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
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
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
</style>
