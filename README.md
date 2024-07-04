

Обработка ввода пользователя на странице COURSES-CONTENT:

При вводе данных в поле поиска и нажатии на Enter или кнопку поиска, происходит переход на страницу CATALOG-SEARCH.
Данные из поля поиска передаются на страницу CATALOG-SEARCH.
Запрос данных на сервер на странице CATALOG-SEARCH:

После загрузки страницы CATALOG-SEARCH, данные из поля поиска передаются на сервер для получения результатов.
Полученные данные отображаются на странице.
Вот пример реализации:

1. Изменение страницы COURSES-CONTENT
В методах страницы COURSES-CONTENT добавьте логику для перехода на страницу CATALOG-SEARCH с передачей данных поиска:

javascript
Copy code
methods: {
  async fetchCardsData() {
    try {
      const response = await axios.get(BACKEND_URL, { params: { search: this.searchCatalog, category: this.categoryCatalog } });
      this.cards = response.data;
    } catch (error) {
      console.error('Error fetching catalog data:', error);
    }
  },
  onSearchCatalogEnter(event) {
    if (event.key === 'Enter') {
      this.$router.push({ path: '/catalog-search', query: { search: this.searchCatalog } });
    }
  },
  onSearchCatalogButtonClick() {
    this.$router.push({ path: '/catalog-search', query: { search: this.searchCatalog } });
  }
},
created() {
  this.fetchCardsData();
}
2. Изменение страницы CATALOG-SEARCH
На странице CATALOG-SEARCH добавьте логику для выполнения запроса на сервер при загрузке страницы с данными из поиска:

javascript
Copy code
<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchData: [],
      searchQuery: this.$route.query.search || ''
    };
  },
  methods: {
    async fetchCatalogItemsData() {
      if (this.searchQuery) {
        try {
          const response = await axios.get('https://api.example.com/courses-content', {
            params: { search: this.searchQuery }
          });
          this.searchData = response.data;
        } catch (error) {
          console.error('Ошибка запроса поиска в каталоге', error);
        }
      }
    }
  },
  mounted() {
    this.fetchCatalogItemsData();
  }
};
</script>
Пример изменения шаблона страницы CATALOG-SEARCH
html
Copy code
<div class="content-container">
  <!-- Хлебные крошки -->
  <div class="breadcrumbs q-ml-xl q-mt-sm q-gutter-sm row justify-between">
    <q-breadcrumbs class="q-mt-lg g-ml-lg text-primary">
      <q-breadcrumbs-el label="Учебный центр" :to="{ path: '/' }" />
      <q-breadcrumbs-el label="Каталог курсов" :to="{ path: 'content' }" />
      <q-breadcrumbs-el label="Поиск по каталогу" />
    </q-breadcrumbs>
  </div>

  <div class="container row">
    <div class="column items-start q-ml-xl q-mt-sm">
      <div class="header-container">
        <p class="search-title text-3 text-weight-regular text-uppercase text-primary text-weight-bold">
          Поиск по каталогу курсов
        </p>
      </div>

      <div class="toolbar-input-container row justify-start">
        <div class="toolbar-input">
          <q-input v-model="searchQuery" dense rounded outlined placeholder="Поиск" color="purple" class="col" icon="search"/>
        </div>
        <div class="toolbar-input-btn" q-ml-xl>
          <q-btn color="grey-3" text-color="grey-8" icon="search" unelevated round @click="fetchCatalogItemsData"/>
        </div>
      </div>

      <div v-if="searchData.length > 0" class="list">
        <ul class="categories-list">
          <li v-for="(category, index) in searchData" :key="index" class="list-item">
            <router-link class="search-link" :to="category.path">
              <p class="active-hover text-body1 text-primary text-weight-bold q-mr-sm underline-text">
                {{ category.title }}
              </p>
            </router-link>
          </li>
        </ul>
      </div>

      <div v-else class="list-empty">
        <ul class="categories-list row wrap">
          <li class="list-item" style="width: 60vw;">
            <p class="active-hover text-body1 text-black q-mr-sm underline-text" style="text-align: center;">
              По вашему запросу ничего не найдено
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
Описание изменений:
Страница COURSES-CONTENT:

Добавлены методы onSearchCatalogEnter и onSearchCatalogButtonClick для перехода на страницу CATALOG-SEARCH с передачей данных поиска через параметры URL.
Страница CATALOG-SEARCH:

Добавлен метод fetchCatalogItemsData, который вызывается при загрузке страницы (mounted) и выполняет запрос на сервер для получения данных поиска.
В шаблоне страницы добавлено отображение полученных данных или сообщения об отсутствии результатов.






