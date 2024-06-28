
<template>

  <div class="main-container row justify-between">

    <div class="content-container">

      <div class="breadcrumbs q-ml-xl q-mt-sm q-gutter-sm row justify-between">

        <q-breadcrumbs class="q-mt-lg g-ml-lg text-primary">

          <q-breadcrumbs-el label="Учебный центр" :to="{ path: '/' }" />

          <q-breadcrumbs-el label="Каталог курсов" :to="{ path: 'content' }" />

          <q-breadcrumbs-el :label="skills.category" />

        </q-breadcrumbs>

      </div>

 

      <div class="container row">

        <div class="column items-start q-pl-sm q-ml-xl q-mt-sm">

          <div class="header-container">

            <p

              class="text-3 text-weight-regular text-uppercase text-primary text-weight-bold"

              style="font-size: 25px"

            >

              <!-- Тут пока работать не будет -->

              {{ skills.category }}

            </p>

          </div>

 

          <div class="tab-panel q-gutter-y-md" style="width: 100%">

            <div class="tabs row">

              <q-tabs

                v-model="tab"

                class="text-primary q-mb-sm"

                active-color="secondary"

                align="justify"

                narrow-indicator

                @change="changeTab"

              >

                <q-route-tab

                  name="skills"

                  label="Профессиональные навыки"

                  to="{ path: 'content-items' }"

                />

                <q-route-tab

                  name="briefings"

                  label="Вводные курсы"

                  to="{ path: 'content-items' }"

                />

                <q-route-tab

                  name="efficiency"

                  label="Личная эффективность"

                  to="{ path: 'content-items' }"

                />

                <q-route-tab

                  name="ued"

                  label="УЭД"

                  to="{ path: 'content-items' }"

                />

              </q-tabs>

              <q-btn-toggle

                v-model="isListView"

                class="my-custom-toggle q-ml-lg"

                rounded

                flat

                toggle-color="primary"

                color="white"

                text-color="primary"

                size="md"

                :options="[

                  { icon: 'mdi-format-list-bulleted', value: true },

                  { icon: 'mdi-apps', value: false },

                ]"

              />

            </div>

          </div>

 

          <div v-if="isListView" class="list">

            <ul class="categories-list">

              <li

                v-for="(category, index) in skills"

                :key="index"

                class="list-item"

              >

                <div class="row justify-between">

                  <div class="active-hover row">

                    <p

                      class="text-body1 text-primary text-weight-bold q-mr-sm underline-text"

                    >

                      <router-link

                        :to="category.path"

                        style="text-decoration: none"

                      >

                        {{ category.title }}

                      </router-link>

                    </p>

                    <div class="down-button" :class="transformButton(index)">

                      <q-btn

                        flat

                        round

                        color="primary"

                        padding="none"

                        size="md"

                        icon="mdi-chevron-down"

                        @click="

                          currentCategoryIndex === index && isBannerVisible

                            ? hideBanner()

                            : showBanner(index)

                        "

                      />

                    </div>

                  </div>

                  <div class="description-button">

                    <q-btn

                      glossy

                      size="10px"

                      class="q-ml-xl text-white gradient-button"

                      label="Описание"

                      :to="category.path"

                    />

                  </div>

                </div>

                <div

                  v-if="currentCategoryIndex === index && isBannerVisible"

                  class="q-mb-md course-catalog-banner-active"

                >

                  <q-banner class="bg-grey-4 banner" rounded>

                    <p

                      class="courses-purpose text-secondary text-h6 q-mb-sm text-uppercase text-bold"

                    >

                      Цель курса?

                      <q-icon

                        name="mdi-bullseye-arrow"

                        style="margin-bottom: 3px"

                      />

                    </p>

                    <p

                      class="courses-purpose-description text-primary q-mb-md ellipsis-2-lines"

                      style="max-width: 700px"

                    >

                      {{ category.bannerPurpose }}

                    </p>

                    <p

                      class="courses-time text-secondary text-h6 q-mb-sm text-uppercase text-bold"

                    >

                      Время прохождения

                      <q-icon name="schedule" style="margin-bottom: 3px" />

                    </p>

                    <p

                      class="courses-time-item text-primary q-mb-sm text-lowercase"

                      style="max-width: 700px"

                    >

                      {{ category.bannerTime }} минут

                    </p>

                  </q-banner>

                </div>

              </li>

            </ul>

          </div>

 

          <div v-else class="list-card">

            <ul class="categories-list row wrap">

              <li

                v-for="(category, index) in skills"

                :key="index"

                class="card-item"

              >

                <div

                  class="card-container q-py-md row q-gutter-md row wrap"

                  style="margin-left: 1px"

                >

                  <router-link

                    :to="category.path"

                    style="text-decoration: none"

                  >

                    <q-card

                      class="my-card col-3 shadow-3 position-relative"

                      bordered

                    >

                      <q-card-section horizontal>

                        <q-card-section class="q-pt-xs">

                          <div

                            class="text-h5 q-mt-sm q-mb-xs text-weight-bold ellipsis-1-lines"

                            style="font-size: medium"

                          >

                            {{ category.title }}

                          </div>

                          <div

                            class="text-subtitle1 q-mt-sm q-mb-xs"

                            style="font-size: small; font-weight: 500"

                          >

                            Цель курса?

                          </div>

                          <div class="text-caption text-grey ellipsis-2-lines">

                            {{ category.bannerPurpose }}

                          </div>

                        </q-card-section>

                      </q-card-section>

 

                      <div class="course-time">

                        <q-icon

                          flat

                          size="large"

                          name="schedule"

                          color="secondary"

                          style="margin-top: 1px"

                          class="time-icon"

                        />

                        <div flat class="q-ml-sm card-time">

                          {{ category.bannerTime }} мин

                        </div>

                      </div>

                    </q-card>

                  </router-link>

                </div>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

 

<script>

import BreadCrumbs from "src/components/BreadCrumbs.vue";

import { ref } from "vue";

import axios from 'axios';

 

export default {

  setup() {

    return {

      tab: ref("skills"),

    };

  },

  data() {

    return {

      isBannerVisible: false,

      currentCategoryIndex: -1,

      isListView: true,

      skills: [],

      briefings: [], // данные для других вкладок

      efficiency: [],

      ued: [],

 

      /* Пример данных для skills

      skills: [

        {

          title: "Основы лизинга",

          category: "Профессиональные навыки",

          bannerPurpose: `сформировать практические занания о понятии лизинга, его преимуществах

          по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг`,

          bannerTime: "60",

        },

        {

          title: "Продукты Автолизинга",

          category: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о продуктах Автолизинга, принципах их формирования и параметрах",

          bannerTime: "60",

        },

        {

          title: "Параметры сделки",

          category: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        },

        {

          title: 'Microsoft Excel 2013 "4-й уровень-эксперт"',

          category: "Профессиональные навыки",

          bannerPurpose:

            "расширить умения по работе с основными функциями Microsoft Excel 2013 на уровне эксперта",

          bannerTime: "60",

        },

      ],*/

    };

  },

  methods: {

    showBanner(index) {

      this.isBannerVisible = true;

      this.currentCategoryIndex = index;

    },

    hideBanner() {

      this.isBannerVisible = false;

      this.currentCategoryIndex = -1;

    },

    transformButton(index) {

      if (this.isBannerVisible && this.currentCategoryIndex === index) {

        return "transform-button";

      } else {

        return "down-button";

      }

    },

    toggleListView() {

      this.isListView = !this.isListView;

    },

    changeTab(tab) {

      this.isListView = true;

      switch (tab) {

        case "briefings":

          this.fetchCatalogItemsData('briefings');

          break;

        case "efficiency":

          this.fetchCatalogItemsData('efficiency');

          break;

        case "ued":

          this.fetchCatalogItemsData('ued');

          break;

        default:

          this.fetchCatalogItemsData('skills');

      }

    },

    fetchCatalogItemsData(type) {

    const params = {

      type,

      additionalParam: 'value' //дополнительные параметры

    };

    axios.get('https://example.com/api/skills', { params })

      .then(response => {

        this.skills = response.data;

      })

      .catch(error => {

        console.error('Ошибка при получении данных:', error);

      });

  },

  mounted() {

    this.fetchCatalogItemsData('skills'); // запросить данные при загрузке компонента

  }

  },

};

</script>

 

