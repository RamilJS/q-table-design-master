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
            <div class="review-button">
              <q-btn
                flat
                :label="`Оставить отзыв`"
                no-caps
                class="q-mt-sm"
              >
                <q-icon
                  name="mdi-lead-pencil"
                  size="15px"
                  style="margin-bottom: 3px;"
                  color="secondary"
                  class="q-ml-sm"
                />
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      ]
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
