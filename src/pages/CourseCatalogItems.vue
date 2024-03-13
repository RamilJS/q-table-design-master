<template>
  <div class="main-container row justify-between">
    <div class="content-container">
      <div class="breadcrumbs q-ml-xl q-mt-sm q-gutter-sm row justify-between">
        <BreadCrumbs />
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
                v-for="(category, index) in categories"
                :key="index"
                class="list-item"
                @mouseover="showBanner(index)"
                @mouseout="hideBanner(index)"
              >
                <div class="row justify-between">
                  <div class="active-hover">
                    <p
                      class="text-body1 text-primary text-weight-bold underline-text"
                    >
                      <a
                        :to="category.to"
                        style="text-decoration: none;"
                      >
                        {{ category.title }}
                      </a>
                    </p>
                  </div>
                  <div>
                    <q-btn
                      glossy
                      size="10px"
                      class="q-ml-xl text-white gradient-btn"
                      label="Описание"
                      :to="{ path: 'course' }"
                    />
                  </div>
                </div>
                <CourseCatalogBanner v-show="currentCategoryIndex === index && isBannerVisible" />
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
import BreadCrumbs from 'src/components/BreadCrumbs.vue'
import CourseCatalogBanner from 'src/components/CourseCatalogBanner.vue'

export default {
  components: {
    CourseCatalogBanner,
    BreadCrumbs
  },
  data () {
    return {
      isBannerVisible: false,
      currentCategoryIndex: -1,
      categories: [
        { title: 'Основы лизинга', to: '#', path: { path: 'course' } },
        { title: 'Продукты Автолизинга', to: '#', path: '#' },
        { title: 'Параметры сделки', to: '#', path: '#' },
        { title: 'Этапы сделки', to: '#', path: '#' },
        { title: 'CRM. Знакомство', to: '#', path: '#' },
        { title: 'Основы делового письма', to: '#', path: '#' },
        { title: 'Создание письма в Outlook', to: '#', path: '#' },
        { title: 'Работа в Outlook', to: '#', path: '#' },
        { title: 'Видеокурс Microsoft Excel 2010', to: '#', path: '#' },
        { title: 'Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"', to: '#', path: '#' },
        { title: 'Microsoft Excel 2013 "3-й уровень-опытный пользователь"', to: '#', path: '#' },
        { title: 'Microsoft Excel 2013 "4-й уровень-эксперт"', to: '#', path: '#' }
      ]
    }
  },
  methods: {
    showBanner (index) {
      this.isBannerVisible = true
      this.currentCategoryIndex = index
    },
    hideBanner (index) {
      this.isBannerVisible = false
      this.currentCategoryIndex = -1
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
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  object-fit: cover;
}
.categories-list {
  padding-left: 1px;
}
.gradient-btn {
  background: linear-gradient(to right, #7a31f5, #578bf8) !important;
  border-radius: 15px;
  width: 110px;
}
</style>
