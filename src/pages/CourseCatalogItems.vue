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
              >
                <div class="row justify-between">
                  <div class="active-hover row">
                    <p
                      class="text-body1 text-primary text-weight-bold q-mr-sm underline-text"
                    >
                      <a
                        :to="category.to"
                        style="text-decoration: none;"
                      >
                        {{ category.title }}
                      </a>
                    </p>
                    <div
                      class="down-button"
                      :class="transformButton()"
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
                        name="adjust"
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
        fit="cover"
      />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from 'src/components/BreadCrumbs.vue'
// import CourseCatalogBanner from 'src/components/CourseCatalogBanner.vue'

export default {
  components: {
    BreadCrumbs
  },
  data () {
    return {
      isBannerVisible: false,
      currentCategoryIndex: -1,
      categories: [
        {
          title: 'Основы лизинга',
          to: '#',
          path: { path: 'course' },
          bannerPurpose: `сформировать практические занания о понятии лизинга, его преимуществах
          по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг`,
          bannerTime: '60'
        },
        {
          title: 'Продукты Автолизинга',
          to: '#',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания о продуктах Автолизинга, принципах их формирования и параметрах',
          bannerTime: '60'
        },
        {
          title: 'Параметры сделки',
          to: '#',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания о финансовых условиях лизинговой сделки',
          bannerTime: '60'
        },
        {
          title: 'Этапы сделки',
          to: '#',
          path: '#',
          bannerPurpose: `сформировать теоретические знания о каждом этапе сделки Автолизинга
          и роли подразделений, участвующих в них`,
          bannerTime: '120'
        },
        {
          title: 'CRM. Знакомство',
          to: '#',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания об интерфейсе CRM и основных карточках в работе ДППА',
          bannerTime: '60'
        },
        {
          title: 'Работа в CRM (Инструкции)',
          to: '#',
          path: '#',
          bannerPurpose: 'сформировать теоретические знания об основном функционале менеджеров ДППА в CRM',
          bannerTime: '60'
        },
        {
          title: 'Основы делового письма',
          to: '#',
          path: '#',
          bannerPurpose: `познакомить сотрудников с правилами и стандартами
          оформления писем при общении с внутренними и внешними клиентами`,
          bannerTime: '60'
        },
        {
          title: 'Создание письма в Outlook',
          to: '#',
          path: '#',
          bannerPurpose: 'сформировать умение создавать подпись в почте в соответствии со стандартами принятыми в Компании',
          bannerTime: '60'
        },
        {
          title: 'Работа в Outlook',
          to: '#',
          path: '#',
          bannerPurpose: 'сформировать знания о работе основных полезных функций Outlook',
          bannerTime: '60'
        },
        {
          title: 'Видеокурс Microsoft Excel 2010',
          to: '#',
          path: '#',
          bannerPurpose: 'сформировать умение работать с основными функциями Microsoft Excel на начальном уровне',
          bannerTime: '60'
        },
        {
          title: 'Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"',
          to: '#',
          path: '#',
          bannerPurpose: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на продвинутом уровне',
          bannerTime: '60'
        },
        {
          title: 'Microsoft Excel 2013 "3-й уровень-опытный пользователь"',
          to: '#',
          path: '#',
          bannerPurpose: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на уровне опытного пользователя',
          bannerTime: '60'
        },
        {
          title: 'Microsoft Excel 2013 "4-й уровень-эксперт"',
          to: '#',
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
    transformButton () {
      if (this.isBannerVisible) {
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
  max-width: 355px;
  min-height: 100vh;
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
.transform-button {
  transform: rotate(-90deg);
  margin-bottom: 13px !important;
}
</style>
