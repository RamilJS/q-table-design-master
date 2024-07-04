
<template>

  <div class="main-container row justify-between">

    <div class="content-container">

 

      <!-- Хлебные крошки -->

      <div class="breadcrumbs q-ml-xl q-mt-sm q-gutter-sm row justify-between">

        <q-breadcrumbs class="q-mt-lg g-ml-lg text-primary">

          <q-breadcrumbs-el label="Учебный центр" :to="{ path: '/' }" />

          <q-breadcrumbs-el label="Каталог курсов" :to="{ path: 'content' }" />

          <q-breadcrumbs-el label="Поиск по каталогу" />

        </q-breadcrumbs>

      </div>

 

      <div class="container row" >

        <div class="column items-start q-ml-xl q-mt-sm">

          <div class="header-container">

            <p

              class="search-title text-3 text-weight-regular text-uppercase text-primary text-weight-bold"

            >

              Поиск по каталогу курсов

            </p>

          </div>

 

        <div class="toolbar-input-container row justify-start">

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

 

          <div v-if="searchData > 0" class="list">

            <ul class="categories-list">

              <li

                v-for="(category, index) in searchData"

                :key="index"

                class="list-item"

              >

                  <router-link

                    class="search-link"

                    :to="category.path"

 

                  >

                  <p

                  class="active-hover text-body1 text-primary text-weight-bold q-mr-sm underline-text"

                >

                    {{ category.title }}

                  </p>

                  </router-link>

              </li>

            </ul>

          </div>

 

          <div v-else class="list-empty">

            <ul class="categories-list row wrap">

              <li class="list-item" style="width: 60vw;">

                  <p

                  class="active-hover text-body1 text-black q-mr-sm underline-text"

                  style="text-align: center;"

                >

                    По вашему запросу ничего не найдено

                  </p>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

 

<script>

import axios from 'axios';

 

export default {

  data() {

    return {

      searchData: [

      {

          title: "Основы лизинга",

          catalogName: "Профессиональные навыки",

          bannerPurpose: `сформировать практические занания о понятии лизинга, его преимуществах

          по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг`,

          bannerTime: "60",

        },

        {

          title: "Продукты Автолизинга",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о продуктах Автолизинга, принципах их формирования и параметрах",

          bannerTime: "60",

        },

        {

          title: "Параметры сделки",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        },

        {

          title: "Параметры сделки wefwfwfwfnwoiefwiofhowihfowhfwehf9wehf9wfh9we9hf",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        },

        {

          title: "Параметры сделки",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        },

        {

          title: "Параметры сделки",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        }

        ,

        {

          title: "Параметры сделки",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        }

        ,

        {

          title: "Параметры сделки",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        }

        ,

        {

          title: "Параметры сделки уциащшуцщацщацуща8 цащшца9рц9арцрауашщцу цушашщцуашуоаоцуао ацуацацауцуаауцуца",

          catalogName: "Профессиональные навыки",

          bannerPurpose:

            "сформировать теоретические знания о финансовых условиях лизинговой сделки",

          bannerTime: "60",

        }

 

    ]

    };

  },

  methods: {

 

    fetchCatalogItemsData(type) {

      const params = {

        type,

        additionalParam: 'value' // дополнительные параметры

      };

      console.log('Отправка запроса на сервер с параметрами:', params);

      axios.get('https://example.com/api/skills', { params })

        .then(response => {

          console.log('Ответ сервера:', response.data);

          this.skills = response.data;

        })

        .catch(error => {

          console.error('Ошибка при получении данных:', error);

        });

    }

  },

  mounted() {

    this.fetchCatalogItemsData('skills'); // запросить данные при загрузке компонента

  }

};

</script>

 

<style scoped>

.search-title {

  font-size: 25px;

  padding-top: 10px;

  padding-bottom: 10px;

  padding-left: 0;

  padding-right: 15px;

  margin-bottom: 10px;

}

.toolbar-input-container {

  min-width: 500px;

  width: 60%;

  gap: 10px;

  margin-bottom: 20px;

}

.toolbar-input {

  width: 70%;

}

.toolbar-input-btn {

  max-width: 60px;

}

.main-container {

  width: 1200px;

  margin: 0 auto;

  height: 100%;

}

 

.underline-text {

  font-size: 20px;

  margin: 0;

}

.list-item {

  list-style-type: none;

  margin: 0;

  border-radius: 4px;

  padding: 15px;

  margin-bottom: 5px;

  background-color: #F3F3F4;

}

 

.search-link {

  text-decoration: none;

 

}

.container {

  width: 100%;

  min-width: 610px;

}

.list {

  width: 100%;

  min-width: 550px;

}

.list-card {

  width: 100%;

  min-width: 350px;

}

.content-container {

  flex: 1;

}

 

.card-image {

  width: 100%;

  height: 100%;

  flex-grow: 1;

  flex-shrink: 0;

  flex-basis: auto;

}

.categories-list {

  margin: 0;

  padding: 0;

  max-width: 1100px;

}

.banner {

  border: 1px solid #002882;

}

.separator {

  height: 15px;

  width: 65px;

  background-color: #00aaff;

}

.my-card {

  width: 100%;

  height: 230px;

}

.card-item {

  list-style-type: none;

  width: calc(33.33% - 20px);

  margin-bottom: 5px;

}

.card-container {

  display: flex;

  flex-wrap: wrap;

  justify-content: space-between;

}

.position-relative {

  position: relative;

}

@media (max-width: 1000px) {

  .list-card .categories-list {

    display: flex;

    flex-wrap: wrap;

    justify-content: flex-start;

  }

  .list-card .card-item {

    width: calc(50% - 20px);

    margin-bottom: 5px;

  }

}

@media (max-width: 920px) {

  .content-container {

    max-width: 920px;

  }

  .list-card .categories-list {

    display: flex;

    flex-wrap: wrap;

    justify-content: flex-start;

  }

  .list-card .card-item {

    width: calc(50% - 20px);

    margin-bottom: 5px;

  }

}

</style>

 

 

