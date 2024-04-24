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

          <div
            class="tab-panel q-gutter-y-md"
            style="max-width: 800px"
          >
            <q-tabs
              v-model="tab"
              class="text-primary q-mb-sm"
              active-color="secondary"
              align="justify"
              narrow-indicator
            >
              <q-tab
                name="skills"
                label="Профессиональные навыки"
              />
              <q-tab
                name="briefings"
                label="Вводные курсы"
              />
              <q-tab
                name="efficiency"
                label="Личная эффективность"
              />
              <q-tab
                name="ued"
                label="УЭД"
              />
            </q-tabs>
          </div>

          <div class="list">
            <ul class="categories-list">
              <li
                v-for="(category, index) in categories"
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
                        style="text-decoration: none;"
                      >
                        {{ category.title }}
                      </router-link>
                    </p>
                    <div
                      class="down-button"
                      :class="transformButton(index)"
                    >
                      <q-btn
                        flat
                        round
                        color="primary"
                        padding="none"
                        size="md"
                        icon="mdi-chevron-down"
                        @click="currentCategoryIndex === index && isBannerVisible ? hideBanner() : showBanner(index)"
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
                  <q-banner
                    class="bg-grey-4 banner"
                    rounded
                  >
                    <p class="courses-purpose text-secondary text-h6 q-mb-sm text-uppercase text-bold">
                      Цель курса?
                      <q-icon
                        name="mdi-bullseye-arrow"
                        style="margin-bottom: 3px;"
                      />
                    </p>
                    <p
                      class="courses-purpose-description text-primary q-mb-md ellipsis-2-lines"
                      style="max-width: 700px;"
                    >
                      {{ category.bannerPurpose }}
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
                      {{ category.bannerTime }} минут
                    </p>
                  </q-banner>
                </div>
              </li>
            </ul>
          </div>

          <div class="list-card">
            <ul class="categories-list">
              <li
                v-for="(category, index) in categories"
                :key="index"
                class="card-item"
              >
                <div
                  class="card-container q-py-md row q-gutter-md row wrap"
                  style="margin-left: 1px;"
                >
                  <router-link
                    :to="category.path"
                    style="text-decoration: none;"
                  >
                    <q-card
                      class="my-card col-3 shadow-3"
                      bordered
                    >
                      <q-card-section horizontal>
                        <q-card-section class="q-pt-xs">
                          <div
                            class="text-h5 q-mt-sm q-mb-xs text-weight-bold"
                            style="font-size: medium;"
                          >
                            {{ category.title }}
                          </div>
                          <div
                            class="text-subtitle1 q-mt-sm q-mb-xs"
                            style="font-size: small; font-weight: 500"
                          >
                            Цель курса?
                          </div>
                          <div class="text-caption text-grey ellipsis-4-lines">
                            {{ category.bannerPurpose }}
                          </div>
                        </q-card-section>
                      </q-card-section>

                      <q-separator />

                      <q-card-actions>
                        <q-btn
                          flat
                          round
                          icon="schedule"
                        />
                        <div flat>
                          {{ category.bannerTime }} мин
                        </div>
                      </q-card-actions>
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
import BreadCrumbs from 'src/components/BreadCrumbs.vue'
// import CourseCatalogBanner from 'src/components/CourseCatalogBanner.vue'
import { ref } from 'vue'

export default {
  components: {
    BreadCrumbs
  },
  setup () {
    return {
      tab: ref('skills')
    }
  },
  data () {
    return {
      isBannerVisible: false,
      currentCategoryIndex: -1,
      categories: [
        {
          title: 'Основы лизинга',
          path: { path: 'course' },
          bannerPurpose: `сформировать практические занания о понятии лизинга, его преимуществах
          по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг`,
          bannerTime: '60'
        },
        {
          title: 'Продукты Автолизинга',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания о продуктах Автолизинга, принципах их формирования и параметрах',
          bannerTime: '60'
        },
        {
          title: 'Параметры сделки',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания о финансовых условиях лизинговой сделки',
          bannerTime: '60'
        },
        {
          title: 'Этапы сделки',
          path: '#',
          bannerPurpose: `сформировать теоретические знания о каждом этапе сделки Автолизинга
          и роли подразделений, участвующих в них`,
          bannerTime: '120'
        },
        {
          title: 'CRM. Знакомство',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания об интерфейсе CRM и основных карточках в работе ДППА',
          bannerTime: '60'
        },
        {
          title: 'Работа в CRM (Инструкции)',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания об основном функционале менеджеров ДППА в CRM',
          bannerTime: '60'
        },
        {
          title: 'Основы делового письма',
          path: '#',
          bannerPurpose: `познакомить сотрудников с правилами и стандартами
          оформления писем при общении с внутренними и внешними клиентами`,
          bannerTime: '60'
        },
        {
          title: 'Создание письма в Outlook',
          path: '#',
          bannerPurpose: 'сформировать умение создавать подпись в почте в соответствии со стандартами принятыми в Компании',
          bannerTime: '60'
        },
        {
          title: 'Работа в Outlook',
          path: '#',
          bannerPurpose: 'сформировать знания о работе основных полезных функций Outlook',
          bannerTime: '60'
        },
        {
          title: 'Видеокурс Microsoft Excel 2010',
          path: '#',
          bannerPurpose: 'сформировать умение работать с основными функциями Microsoft Excel на начальном уровне',
          bannerTime: '60'
        },
        {
          title: 'Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"',
          path: '#',
          bannerPurpose: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на продвинутом уровне',
          bannerTime: '60'
        },
        {
          title: 'Microsoft Excel 2013 "3-й уровень-опытный пользователь"',
          path: '#',
          bannerPurpose: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на уровне опытного пользователя',
          bannerTime: '60'
        },
        {
          title: 'Microsoft Excel 2013 "4-й уровень-эксперт"',
          path: '#',
          bannerPurpose: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на уровне эксперта',
          bannerTime: '60'
        }
      ]
    }
  },
  methods: {
    showBanner (index) {
      this.isBannerVisible = true
      this.currentCategoryIndex = index
    },
    hideBanner () {
      this.isBannerVisible = false
      this.currentCategoryIndex = -1
    },
    transformButton (index) {
      if (this.isBannerVisible && this.currentCategoryIndex === index) {
        return 'transform-button'
      } else {
        return 'down-button'
      }
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
.list-card {
  width: 100%;
  min-width: 350px;
}
.content-container {
  flex: 1;
}
.main-container {
  height: 100%;
}
.card-image {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
}
.categories-list {
  padding-left: 1px;
}
.banner {
  border: 1px solid #002882;
}
.content-container {
  flex: 1;
}
.gradient-button {
  background: linear-gradient(to right, #7a31f5, #578bf8) !important;
  border-radius: 15px;
  width: 110px;
}
.down-button {
  transform: rotate(-90deg);
  margin-bottom: 13px !important;
}
.transform-button {
  transform: rotate(0deg);
  margin-bottom: 13px !important;
}
.separator {
  height: 15px;
  width: 65px;
  background-color: #00AAFF;
}
.my-card {
  width: 100%;
}
.card-item {
  list-style-type: none;
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
}
.card-conteiner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
