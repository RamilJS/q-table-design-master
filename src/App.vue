<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<template>

  <q-layout view="lHh Lpr lFf" class="bg-grey-1">

 

    <!-- Шапка шаблона -->

    <q-header

    elevated class="bg-white text-grey-8 q-py-xs" height-hint="82"

    >

      <q-toolbar style="height: 82px;">

 

        <!-- Логотип ВТБЛ и кнопка открытия боковой панели -->

        <transition name="fade">

          <div

          class="main-header-container row no-wrap"

          v-show="!leftDrawerOpen"

 

        >

          <q-btn

            flat

            no-caps

            no-wrap

            class="button-logo q-pa-xs q-pr-md"

            :to="{ path: '/' }"

          >

            <q-img

              class="vtbl-logo rounded-borders"

              src="icons/vtbl-logo-blue.png"

              alt="Логотип компании"

            />

          </q-btn>

          <q-btn

            flat

            dense

            round

            class="menu-button-right text-primary q-mt-xs"

            aria-label="Menu"

            icon="fa-solid fa-angles-left"

            @click="toggleLeftDrawer"

          />

          </div>

        </transition>

 

        <!-- Поле поиска -->

        <div class="YL__toolbar-input-container row no-wrap q-ml-lg q-mt-sm">

          <q-input

            v-model="search"

            dense

            outlined

            placeholder="Поиск"

            class="bg-white col"

          >

            <q-btn

              padding="none"

              class="YL__toolbar-input-btn"

              text-color="grey-5"

              icon="search"

              size="lg"

              unelevated

            />

          </q-input>

        </div>

 

        <q-space />

 

        <!-- Блок пользователя -->

        <div class="q-gutter-sm row items-center no-wrap justify-between" style="width: 372px; height: 44px;">

          <q-btn class="notifications" round dense flat color="#C0C0C0" icon="fa-regular fa-bell">

            <q-badge color="#871EFF" rounded text-color="white" floating> 2 </q-badge>

            <q-tooltip>Уведомления</q-tooltip>

          </q-btn>

          <div class="user row no-wrap justify-around" style="width: 340px;">

              <q-btn round flat>

              <q-avatar class="user-avatar" size="40px">

                <img class="user-avatar-image" src="images/user-avatar.png" alt="Фотография пользователя" />

              </q-avatar>

              <q-tooltip>Константинопольская Святослава Пантелеймоновна</q-tooltip>

            </q-btn>

              <p class="user-name text-black q-pt-md">Константинопольская <br> Святослава Пантелеймоновна</p>

              <q-btn class="user-down-button" round dense flat color="#868686" icon="fa-solid fa-caret-down" />

          </div>

        </div>

      </q-toolbar>

    </q-header>

 

    <!-- Боковая панель -->

    <q-drawer

      v-model="leftDrawerOpen"

      show-if-above

      bordered

      class="bg-grey-2 left-drawer"

      :width="360"

    >

      <q-scroll-area class="fit blue-10 left-drawer">

        <q-list padding>

          <div class="drawer-header row">

            <div class="drawer-header-container row justify-between q-mb-md">

              <q-btn

                v-if="$q.screen.gt.xs"

                flat

                no-caps

                no-wrap

                class="button-logo q-pa-xs"

                :to="{ path: '/' }"

              >

                <q-img

                  class="vtbl-logo rounded-borders"

                  src="icons/vtbl-logo.png"

                  alt="Логотип компании"

                />

              </q-btn>

 

              <q-btn

                flat

                dense

                round

                class="menu-button text-white q-mt-sm q-ml-md"

                aria-label="Menu"

                icon="fa-solid fa-angles-left"

                @click="toggleLeftDrawer"

              />

            </div>

          </div>

 

          <q-expansion-item

            icon="fa-solid fa-graduation-cap"

            label="Учебный центр"

            class="text-white link-text"

            label-class="text-white"

            icon-class="text-white"

            expand-icon-class="text-white"

            :model-value="openedItem === 'trainingCenter'"

            @update:model-value="

              (value) => onItemToggle('trainingCenter', value)

            "

          >

            <q-item

              clickable

              v-ripple

              v-for="(link, index) in trainingCenterLinks"

              :key="index"

              @click="navigate(link.path)"

              class="q-pl-lg"

            >

              <q-item-section avatar>

                <q-icon :name="link.icon" class="text-white q-pa-none" />

              </q-item-section>

              <q-item-section class="text-white link-text">{{

                link.text

              }}</q-item-section>

            </q-item>

          </q-expansion-item>

 

          <q-separator class="q-my-md" />

 

          <q-expansion-item

            icon="fa-solid fa-laptop-file"

            label="Заявки"

            class="text-white link-text"

            label-class="text-white"

            icon-class="text-white"

            expand-icon-class="text-white"

            :model-value="openedItem === 'requests'"

            @update:model-value="(value) => onItemToggle('requests', value)"

          >

            <q-item

              clickable

              v-ripple

              v-for="(link, index) in requestLinks"

              :key="index"

              @click="navigate(link.path)"

              class="q-pl-lg"

            >

              <q-item-section avatar>

                <q-icon :name="link.icon" class="text-white q-pa-none" />

              </q-item-section>

              <q-item-section class="text-white link-text">{{

                link.text

              }}</q-item-section>

            </q-item>

 

          </q-expansion-item>

 

          <q-separator class="q-my-md" />

 

          <q-expansion-item

            icon="fa-solid fa-chart-line"

            label="Управление эффективности деятельности"

            class="text-white link-text"

            label-class="text-white"

            icon-class="text-white"

            expand-icon-class="text-white"

            :model-value="openedItem === 'efficiency'"

            @update:model-value="(value) => onItemToggle('efficiency', value)"

          >

            <q-item

              clickable

              v-ripple

              v-for="(link, index) in efficiencyLinks"

              :key="index"

              @click="navigate(link.path)"

              class="q-pl-lg"

            >

              <q-item-section avatar>

                <q-icon :name="link.icon" class="text-white q-pa-none" />

              </q-item-section>

              <q-item-section class="text-white link-text">{{

                link.text

              }}</q-item-section>

            </q-item>

          </q-expansion-item>

 

          <q-separator class="q-my-md" />

 

          <div class="feedback-container row absolute-bottom">

            <q-item-section avatar class="q-pl-md q-pb-xl">

              <q-icon

                name="fa-solid fa-circle-question"

                class="question-icon text-white"

              >

              </q-icon>

            </q-item-section>

            <div class="column q-ml-xs">

              <p class="feedback-description text-white q-mb-xs">

                Нашли ошибку или нужна помощь?

              </p>

              <a class="feedback-link" href="#">Напишите нам</a>

            </div>

          </div>

        </q-list>

      </q-scroll-area>

    </q-drawer>

 

    <q-page-container>

      <router-view />

    </q-page-container>

  </q-layout>

</template>

 

<script>

import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";

import axios from "axios";

 

export default {

  name: "MyLayout",

  setup() {

    const leftDrawerOpen = ref(false);

    const search = ref("");

    const router = useRouter();

    const openedItem = ref("");

 

    const BACKEND_URL = 'https://vtbl-example.com/menu-links';

    const trainingCenterLinks = ref([]);

    const requestLinks = ref([]);

    const efficiencyLinks = ref([]);

 

    const fetchMenuLinks = async () => {

      try {

        const response = await axios.get(BACKEND_URL);

        const data = response.data;

 

        trainingCenterLinks.value = data.trainingCenterLinks;

        requestLinks.value = data.requestLinks;

        efficiencyLinks.value = data.efficiencyLinks;

      } catch (error) {

        console.error('Ошибка загрузки меню', error);

      }

    };

 

    onMounted(() => {

      fetchMenuLinks();

    });

 

    function toggleLeftDrawer() {

      leftDrawerOpen.value = !leftDrawerOpen.value;

    }

 

    function navigate(path) {

      router.push(path);

    }

 

    function onItemToggle(item, value) {

      if (value) {

        openedItem.value = item;

      } else {

        openedItem.value = "";

      }

    }

    return {

      leftDrawerOpen,

      search,

      toggleLeftDrawer,

      navigate,

      openedItem,

      onItemToggle,

      trainingCenterLinks,

      requestLinks,

      efficiencyLinks,

      // Ниже лежат моковые данные для бокового меню

      /*

      trainingCenterLinks: [

        {

          text: "Календарь мероприятий",

          path: "/",

          icon: "fa-solid fa-calendar-days",

        },

        {

          text: "Каталог электронных курсов",

          path: "content",

          icon: "fa-solid fa-chalkboard-user",

        },

        {

          text: "Каталог программ развития",

          path: "#section3",

          icon: "fa-solid fa-user-graduate",

        },

        {

          text: "Матрица обучения",

          path: "#section4",

          icon: "fa-solid fa-arrow-up-right-dots",

        },

        {

          text: "Материалы для новых сотрудников ДППА",

          path: "#section5",

          icon: "fa-solid fa-book",

        },

        {

          text: "Отчеты",

          path: "#section6",

          icon: "fa-solid fa-file-invoice"

         },

      ],

      requestLinks: [

        { text: "Заявка на обучение", path: "/", icon: "" },

        { text: "Заявка на пропуск", path: "#section2", icon: "" },

      ],

      efficiencyLinks: [

        { text: "Работаем на результат", path: "/", icon: "" },

        { text: "Совершенствуемся постоянно", path: "/", icon: "" },

      ],*/

    };

  },

};

</script>

 

