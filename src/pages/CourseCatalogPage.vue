<template>
  <div class="main-container row justify-between">
    <div class="content-container">
      <div class="body-container q-ml-xl q-mt-sm q-gutter-sm row justify-between">
        <q-breadcrumbs
          class="q-mt-lg g-ml-lg text-primary"
        >
          <q-breadcrumbs-el
            label="Учебный центр"
            :to="{ path: '/' }"
          />
          <q-breadcrumbs-el
            label="Каталог курсов"
            :to="{ path: 'content' }"
          />
          <q-breadcrumbs-el
            label="Профессиональные навыки"
            :to="{ path: 'content-items' }"
          />
          <q-breadcrumbs-el
            label="Основы лизинга"
          />
        </q-breadcrumbs>
      </div>

      <div class="container row">
        <div class="column items-start q-pl-sm q-ml-xl q-mt-sm">
          <div class="header-container">
            <p
              class="text-3 text-weight-regular text-uppercase text-primary text-weight-bold"
              style="font-size: 25px;"
            >
              {{ categories[0].title }}
            </p>
          </div>

          <div class="separator-element">
            <q-separator
              color="secondary"
              style="height: 15px; width: 65px; background-color: #00AAFF;"
            />
          </div>

          <div class="purpose-container q-mt-lg row">
            <div class="purpose-trophy">
              <q-icon
                name="mdi-trophy-variant"
                size="80px"
                color="primary"
              />
            </div>
            <div class="main-purpose q-ml-md">
              <p class="main-purpose-title text-secondary text-h6 q-mb-sm text-uppercase text-bold">
                Основная цель
              </p>
              <p
                class="main-purpose-description text-primary q-mb-md ellipsis-2-lines"
                style="max-width: 700px;"
              >
                {{ categories[0].target }}
              </p>
            </div>
          </div>

          <div class="main-themes">
            <div class="main-themes-title">
              <p class="text-secondary text-h6 q-mt-sm q-mb-sm text-uppercase text-bold">
                Основные темы курса:
              </p>
            </div>

            <div class="themes-arrow row justify-start">
              <ul class="courses-themes-list">
                <li
                  v-for="(course, index) in categories[0].courses"
                  :key="index"
                  class="list-item"
                >
                  <div class="themes-arrow-items row">
                    <q-icon
                      name="mdi-arrow-right"
                      size="xl"
                      color="primary"
                    />
                    <div
                      class="q-ml-md"
                      style="margin-top: 12px;"
                    >
                      <p
                        class="main-themes-description text-primary q-mb-md ellipsis-lines"
                      >
                        {{ course.name }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="row justify-between">
            <div class="competency q-mr-xl column">
              <div class="competency-content">
                <p class="main-purpose-title text-secondary text-h6 q-mb-sm text-uppercase text-bold">
                  Развиваем компетенцию
                </p>
              </div>
              <div class="competency">
                <p class="competency-title text-primary">
                  <q-icon
                    name="mdi-check"
                    size="35px"
                    style="margin-bottom: 3px;"
                    color="secondary"
                  />
                  {{ categories[0].competency }}
                </p>
              </div>
            </div>
            <div class="time q-ml-xl column">
              <div class="time-content">
                <p class="main-purpose-title text-secondary text-h6 q-mb-sm text-uppercase text-bold">
                  Время прохождения
                </p>
              </div>
              <div class="time">
                <p class="competency-title text-primary">
                  <q-icon
                    name="mdi-clock-outline"
                    size="35px"
                    style="margin-bottom: 3px;"
                    color="secondary"
                  />
                  {{ categories[0].time }} минут
                </p>
              </div>
            </div>
          </div>

          <div class="start-btn q-mt-sm">
            <q-btn
              class="start-btn text-white"
              label="НАЧАТЬ"
              size="22px"
              glossy
              icon="mdi-school"
              :to="{ path: '#'}"
            />
          </div>

          <div class="review q-mt-lg q-mb-xl">
            <div class="">
              <q-btn
                v-for="filter in backdropFilterList"
                :key="filter.label"
                flat
                :label="`Оставить отзыв`"
                no-caps
                class="q-mt-sm"
                @click="filter.onClick"
              >
                <q-icon
                  name="mdi-lead-pencil"
                  size="15px"
                  style="margin-bottom: 3px;"
                  color="secondary"
                  class="q-ml-sm"
                />
              </q-btn>

              <q-dialog
                v-model="dialog"
                :backdrop-filter="backdropFilter"
              >
                <q-card
                  style="width: 600px; max-width: 80vw;"
                  full-height
                >
                  <q-card-section class="row items-center q-pb-none text-h6">
                    Оставьте отзыв о прохождении курса
                  </q-card-section>

                  <div class="q-pa-md q-gutter-sm">
                    <q-editor
                      v-model="editor"
                      :definitions="{
                        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
                      }"
                    />
                  </div>

                  <q-card-actions align="between">
                    <q-btn
                      fixed-left
                      icon-right="send"
                      label="Отправить"
                      color="secondary"
                    />
                    <q-btn
                      v-close-popup
                      label="Закрыть"
                      flat
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sidebar-container"
    >
      <q-img
        class="rounded-borders card-image"
        src="/public/images/blue-bg.jpg"
        alt="Синий фон ВТБЛ"
        fit="cover"
      />
    </div>

    <div
      class="review-list q-pa-md"
      style="max-width: 750px"
    >
      <q-list padding>
        <q-item-label header>
          Отзывы о курсе
        </q-item-label>

        <q-item>
          <q-item-section
            side
            top
            avatar
          >
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label
              caption
            >
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section
            side
            top
          >
            <q-item-label caption>
              2 min ago
            </q-item-label>
            <div class="text-orange">
              <q-rating
                v-model="ratingModel"
                size="1.5em"
                color="yellow-8"
                icon="star_border"
                icon-selected="star"
              />
            </div>
          </q-item-section>
        </q-item>

        <q-separator
          spaced
          inset
        />

        <q-item>
          <q-item-section
            top
            avatar
          >
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section
            side
            top
          >
            <q-item-label caption>
              2 min ago
            </q-item-label>
            <div class="text-orange">
              <q-rating
                v-model="ratingModel"
                size="1.5em"
                color="yellow-8"
                icon="star_border"
                icon-selected="star"
              />
            </div>
          </q-item-section>
        </q-item>

        <q-separator
          spaced
          inset
        />

        <q-item>
          <q-item-section
            top
            avatar
          >
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption>
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section
            side
            top
          >
            <q-item-label caption>
              2 min ago
            </q-item-label>
            <div class="text-orange">
              <q-rating
                v-model="ratingModel"
                size="1.5em"
                color="yellow-8"
                icon="star_border"
                icon-selected="star"
              />
            </div>
          </q-item-section>
        </q-item>

        <q-separator
          spaced
          inset
        />
      </q-list>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    /**
     * Values for backdrop-filter are the same as in the CSS specs.
     * The following list is not an exhaustive one.
     */
    const list = [
      'blur(4px) saturate(150%)'
    ]

    const dialog = ref(false)
    const backdropFilter = ref(null)

    return {
      dialog,
      backdropFilter,
      backdropFilterList: list.map(filter => ({
        label: filter,
        onClick: () => {
          backdropFilter.value = filter
          dialog.value = true
        }
      }))
    }
  },
  data () {
    return {
      categories: [
        {
          title: 'Основы лизинга',
          target: 'сформировать практические занания о понятии лизинга, его преимуществах по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг',
          path: { path: 'course' },
          courses: [
            {
              name: 'Понятие лизинга, его виды, субъекты и предметы'
            },
            {
              name: 'Схема лизинговой сделки'
            },
            {
              name: 'Финансовые и нефинансовые преимущества лизинга по сравнению с другими способами финансирования'
            },
            {
              name: 'Преимущества ВТБ Лизинг'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Продукты Автолизинга',
          target: 'сформировать теоретические знания о продуктах Автолизинга, принципах их формирования и параметрах',
          path: { path: '#' },
          courses: [
            {
              name: 'Управление рисками с помощью продуктов Автолизинга'
            },
            {
              name: 'Кредитный и имущественный риски'
            },
            {
              name: 'Классификация продуктов Автолизинга, в зависимости от категории ТС и приоритетов клиента'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Параметры сделки',
          target: 'сформировать теоретические знания о финансовых условиях лизинговой сделки',
          path: { path: '#' },
          courses: [
            {
              name: 'Ключевые показатели сделки: доходность, маржа и удержание'
            },
            {
              name: 'Параметры сделки и их влияние на ключевые показатели сделки'
            },
            {
              name: 'Общая переплата по договору лизинга и формула расчета'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Этапы сделки',
          target: 'сформировать теоретические знания о каждом этапе сделки Автолизинга и роли подразделений, участвующих в них',
          path: { path: '#' },
          courses: [
            {
              name: 'Поиск клиента и продажа лизингового предложения'
            },
            {
              name: 'Загрузка документов в CRM и передача проекта на рассмотрение'
            },
            {
              name: 'Подписание договора'
            },
            {
              name: 'Получение от клиента аванса, комиссии, страховки, регистрационного сбора'
            },
            {
              name: 'Рассмотрение, одобрение и оформление договоров'
            }
          ],
          time: '120',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'CRM. Знакомство',
          target: 'сформировать теоретические знания об интерфейсе CRM и основных карточках в работе ДППА',
          path: { path: '#' },
          courses: [
            {
              name: 'Интерфейс CRM'
            },
            {
              name: 'Карточка лизингополучателя и связанные с ней'
            },
            {
              name: 'Работа с представлением "Менеджер ДППА"'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Работа в CRM (Инструкции)',
          target: 'сформировать теоретические знания об основном функционале менеджеров ДППА в CRM',
          path: { path: '#' },
          courses: [
            {
              name: 'Закрепление контрагентов'
            },
            {
              name: 'Составление расчетов'
            },
            {
              name: 'Выставление сделки'
            },
            {
              name: 'Совершение звонков Cisco Jabber'
            },
            {
              name: 'Выставление агента ФЛ'
            },
            {
              name: 'Выставление поставщика'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Основы делового письма',
          target: 'познакомить сотрудников с правилами и стандартами оформления писем при общении с внутренними и внешними клиентами',
          path: { path: '#' },
          courses: [
            {
              name: 'Адрес и тема письма'
            },
            {
              name: 'Текст письма'
            },
            {
              name: 'Структура и содержание письма'
            },
            {
              name: 'Рекомендуемые формулирвоки при составлении письма'
            }
          ],
          time: '60',
          competency: 'Дорожим клиентом'
        },
        {
          title: 'Создание письма в Outlook',
          target: 'сформировать умение создавать подпись в почте в соответствии со стандартами принятыми в Компании',
          path: { path: '#' },
          courses: [
            {
              name: 'Стандарты подписи, принятые в Компании'
            },
            {
              name: 'Создание шаблона подписи'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Работа в Outlook',
          target: 'сформировать знания о работе основных полезных функций Outlook',
          path: { path: '#' },
          courses: [
            {
              name: 'Основные настройки почты'
            },
            {
              name: 'Создание папок и правил для сортировки писем'
            },
            {
              name: 'Создание шаблонов писем'
            },
            {
              name: 'Основые функции календаря'
            },
            {
              name: 'Создание встреч'
            },
            {
              name: 'Просмотр календарей коллег'
            },
            {
              name: 'Создание задач и присвоение категорий'
            },
            {
              name: 'Постановка и контроль задач Outlook'
            },
            {
              name: 'Проведение опросов через Outlook'
            },
            {
              name: 'Настройка быстрых действий'
            },
            {
              name: 'Функции отложенной отправки и отзыва письма'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Видеокурс Microsoft Excel 2010',
          target: 'сформировать умение работать с основными функциями Microsoft Excel на начальном уровне',
          path: { path: '#' },
          courses: [
            {
              name: 'Обзор программы'
            },
            {
              name: 'Работа с таблицами'
            },
            {
              name: 'Формулы и функции'
            },
            {
              name: 'Работа с диаграммами'
            },
            {
              name: 'Работа с графикой'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"',
          target: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на продвинутом уровне',
          path: { path: '#' },
          courses: [
            {
              name: 'Форматы и форматирование'
            },
            {
              name: 'Сортировка и фильрация данных'
            },
            {
              name: 'Применение базовых формул'
            },
            {
              name: 'Иллюстрации и графические объекты'
            },
            {
              name: 'Диаграммы'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Microsoft Excel 2013 "3-й уровень-опытный пользователь"',
          target: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на уровне опытного пользователя',
          path: { path: '#' },
          courses: [
            {
              name: 'Диаграммы'
            },
            {
              name: 'Фильтрация данных'
            },
            {
              name: 'Сводные таблицы'
            },
            {
              name: 'Шаблоны Excel'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        },
        {
          title: 'Microsoft Excel 2013 "4-й уровень-эксперт"',
          target: 'расширить умения по работе с основными функциями Microsoft Excel 2013 на уровне эксперта',
          path: { path: '#' },
          courses: [
            {
              name: 'Сложные формулы и функции'
            },
            {
              name: 'Совместная работа и защита данных'
            },
            {
              name: 'Проверки и поиск данных'
            },
            {
              name: 'Поиск решения и устранения проблемы'
            },
            {
              name: 'Power View и Power Pivot'
            }
          ],
          time: '60',
          competency: 'Отвечаем за результат'
        }
      ],
      ratingModel: ref(4)
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
.banner {
  border: 1px solid #002882;
}
.courses-themes-list {
  padding-left: 1px;
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
  flex: 1 0 auto;
  object-fit: cover;
}
.start-btn {
  background: linear-gradient(to right, #7a31f5, #578bf8) !important;
  border-radius: 10px;
  width: 8em;
}
.trophy-icon {
  background: linear-gradient(to right, #7a31f5, #578bf8) !important;
}
</style>
