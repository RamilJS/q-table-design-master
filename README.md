
<template>

  <div class="main-container">

    <div class="q-ml-xl q-mt-sm q-gutter-sm row justify-between">

      <q-breadcrumbs class="q-mt-lg g-ml-lg text-primary">

        <q-breadcrumbs-el label="Учебный центр" :to="{ path: '/' }" />

        <q-breadcrumbs-el label="Каталог курсов" />

      </q-breadcrumbs>

    </div>

 

    <div class="column justify-between q-mb-md">

      <div class="q-ml-lg q-mt-md q-pl-lg row text-h3 text-weight-bold">

        <p class="text-primary">Каталог электронных курсов</p>

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

            @input="onSearchInputCatalogChange"

            @keydown.enter="onSearchCatalogEnter"

          />

        </div>

        <div class="toolbar-input-btn" q-ml-xl>

          <q-btn

            color="grey-3"

            text-color="grey-8"

            icon="search"

            unelevated

            round

            @click="onSearchCatalogButtonClick"

          />

        </div>

      </div>

    </div>

 

    <div

      class="card-container q-py-md row q-gutter-md wrap"

      style="margin-left: 32px"

    >

      <q-card v-for="(card, index) in cardsData" :key="index" class="my-card col-3">

        <q-card-section horizontal>

          <q-card-section class="q-pt-lg">

            <div class="text-h5 q-mt-sm q-mb-xs q-pl-sm text-primary">

              {{ card.title }}

            </div>

            <q-card-actions>

              <q-btn

                glossy

                size="13px"

                class="q-pr-xl q-py-xs q-mr-xl text-white gradient-btn"

                label="Открыть"

                :to="{ path: card.path }"

              />

            </q-card-actions>

          </q-card-section>

          <q-card-section class="card-section col-5 flex flex-center">

            <q-img

              class="rounded-borders card-image"

              :src="card.image"

              :alt="card.alt"

            />

          </q-card-section>

        </q-card-section>

      </q-card>

    </div>

  </div>

</template>

 

<script>

import axios from 'axios';

 

const BACKEND_URL = 'https://api.example.com/courses-content';

 

export default {

  data() {

    return {

      searchCatalog: "",

      categoryCatalog: "",

      cardsData: [],

      /* Пример данных для категорий курсов

      cardsData: [

        {

          title: "Профессиональные навыки",

          path: "/content-items",

          image: "images/people_in_work.jpg",

          alt: "Люди в офисе"

        },

        {

          title: "Вводные курсы (инструктажи)",

          path: "/content-items",

          image: "/images/briefing.jpg",

          alt: "Работники сидят на инструктаже"

        },

        {

          title: "Личная эффективность и развитие",

          path: "/content-items",

          image: "images/personal_efficiency.jpg",

          alt: "Работники за столом переговоров"

        },

        {

          title: "Управление эффективности деятельности (УЭД)",

          path: "/content-items",

          image: "images/efficiency_management.jpg",

          alt: "Работники слушают руководителя"

        },

      ]*/

    }

  },

  methods: {

    async fetchCardsData() {

      try {

        const response = await axios.get(BACKEND_URL, {

          params: {

            search: this.searchCatalog,

            category: this.categoryCatalog

          }

        });

        this.cards = response.data;

      } catch (error) {

        console.error('Error fetching catalog data:', error);

      }

    },

 

    // Функция для выполнения запроса поиска

    async fetchSearchCatalogResults() {

      try {

        const response = await axios.get(BACKEND_URL, {

          params: { search: this.searchCatalog }

        });

        this.cardsData = response.data;

        console.log(response.data);

      } catch (error) {

        console.error('Ошибка запроса поиска в каталоге', error);

      }

    },

 

    // Вызывается при изменении значения в поле поиска

    onSearchInputCatalogChange() {

      if (this.search.length > 0) {

        this.fetchSearchCatalogResults();

      } else {

        this.cardsData = [];

        console.log("Поле поиска пустое");

      }

    },

 

    onSearchCatalogButtonClick() {

      this.fetchSearchCatalogResults();

    },

 

    // Обработчик Enter в поле поиска

    onSearchCatalogEnter(event) {

      if (event.key === 'Enter') {

        this.fetchSearchCatalogResults();

      }

    },

  },

  created() {

    this.fetchCardsData();

  }

};

</script>

 

<style scoped>

.main-container {

  width: 1200px;

  margin: 0 auto;

}

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

 

.layout-search-result-container {

  max-width: 490px;

  margin-left: 10px;

  margin-top: 41px;

  z-index: 10;

  position: absolute;

  width: 100%;

  height: 100%;

  max-height: 230px;

  padding: 8px 0 8px 4px;

  overflow-y: scroll;

  list-style: none;

  background: #ffffff;

  border-radius: 8px;

  box-shadow: 0 4px 16px rgba(56, 56, 117, 0.2);

}

 

.search-result-item {

  padding: 15px 20px;

  color:#4B4B4B;

}

 

.my-card {

  width: 100%;

  height: 100%;

  min-height: 200px;

  max-height: 300px;

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

 

 

