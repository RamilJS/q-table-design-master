
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

          />

        </div>

        <div class="toolbar-input-btn" q-ml-xl>

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

 

export default {

  data() {

    return {

      search: "",

      category: "",

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

          path: "/briefings",

          image: "/images/briefing.jpg",

          alt: "Работники сидят на инструктаже"

        },

        {

          title: "Личная эффективность и развитие",

          path: "/efficiency",

          image: "images/personal_efficiency.jpg",

          alt: "Работники за столом переговоров"

        },

        {

          title: "Управление эффективности деятельности (УЭД)",

          path: "/ued",

          image: "images/efficiency_management.jpg",

          alt: "Работники слушают руководителя"

        },

      ]*/

    }

  },

  methods: {

    async fetchCardsData() {

      try {

        const response = await axios.get('https://api.example.com/cardsData', {

          params: {

            search: this.search,

            category: this.category

          }

        });

        this.cards = response.data;

      } catch (error) {

        console.error('Error fetching cards data:', error);

      }

    }

  },

  created() {

    this.fetchCardsData();

  }

};

</script>

 

