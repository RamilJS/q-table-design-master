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
            <p
              class="text-body1 text-primary text-weight-bold underline-text"
            >
              Основы лизинга
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Продукты Автолизинга
            </p>
          </li>
          <li class="list-item">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Параметры сделки
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Этапы сделки
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              CRM. Знакомство
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Работа в CRM (инструкции)
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Основы делового письма
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Создание письма в Outlook
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Работа в Outlook
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Видеокурс Microsoft Excel 2010
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Microsoft Excel 2013 "3-й уровень-опытный пользователь"
            </p>
          </li>
          <li style="list-style-type: none">
            <p class="text-body1 text-primary text-weight-bold underline-text">
              Microsoft Excel 2013 "4-й уровень-эксперт"
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="carousel-element q-mt-md"
      style="width: 100%; min-width: 200px; max-width: 500px; height: 100%; min-height: 400px; max-height: 800px;"
    >
      <q-carousel
        v-model="slide"
        animated
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
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
  text-decoration: underline;
  font-size: 20px;
}
.list-item {
  list-style-type: none
}
</style>
