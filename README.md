
<template>

  <div class="main-container row justify-between">

    <div class="content-container">

 

      <!-- Хлебные крошки -->

      <div

        class="breadcrumbs-container q-mt-sm q-gutter-sm row justify-between"

      >

        <q-breadcrumbs class="q-mt-lg g-ml-lg text-primary">

          <q-breadcrumbs-el label="Учебный центр" :to="{ path: '/' }" />

          <q-breadcrumbs-el label="Каталог курсов" :to="{ path: 'content' }" />

          <q-breadcrumbs-el

            label="Профессиональные навыки"

            :to="{ path: 'content-items' }"

          />

          <q-breadcrumbs-el label="Основы лизинга" />

        </q-breadcrumbs>

      </div>

 

      <!-- Карточка курса -->

      <div class="new-card q-mt-md">

        <q-card class="my-card">

          <q-img src="images/header-panel.png">

            <div class="course-state" style="position: relative; left: 10px; top: 5px; width: 109px; height: 31px; background: none">

              <q-img src="icons/in-progress-state.svg" />

            </div>

            <div

              class="row  items-center"

              style="background: none; padding-bottom: 0px;"

            >

              <div class="text-white col-7" style="background: none">

                <p

                  class="text-3 text-weight-regular text-uppercase text-white text-weight-bold"

                  style="font-size: 32px"

                >

                  {{ category.title }}

                </p>

                <p

                  class="my-card-description"

                  style="color: #aae3ff; font-family: Roboto; font-size: 16px"

                >

                  {{ category.cardDescription }}

                </p>

              </div>

              <div

                class="col-5"

                style="background: none; position: relative; left: 100px; bottom: 10px;"

              >

                <q-img

                  src="icons/card-header-image.svg"

                  alt="Сотрудники напротив ноутбука"

                />

              </div>

            </div>

          </q-img>

 

          <q-card-section class="q-pt-none">

            <div class="container row">

              <div class="column items-start q-pl-sm q-ml-xl q-mt-sm">

 

                <!-- Основная цель курса -->

                <div class="purpose-container q-mt-lg row no-wrap">

                  <div class="purpose-trophy">

                    <img

                      src="icons/purpose.svg"

                      alt="Иконка цели обучения"

                    />

                  </div>

                  <div class="main-purpose q-ml-md">

                    <p

                      class="main-purpose-title text-secondary text-h6 text-black q-mb-sm text-bold"

                    >

                      Основная цель

                    </p>

                    <p

                      class="main-purpose-description text-black q-mb-md ellipsis-2-lines"

                      style="max-width: 700px"

                    >

                      {{ category.target }}

                    </p>

                  </div>

                </div>

 

                <!-- Основные темы курса -->

                <div class="main-themes row justify-start no-wrap q-mt-md">

                  <div class="themes-icon q-mt-xs">

                    <img

                      class="courses-themes-icon"

                      src="icons/checklist.svg"

                      alt="Иконка тем курса"

                    />

                  </div>

 

                  <div class="themes-container q-ml-md">

                    <p

                      class="main-themes-title text-secondary text-h6 text-black text-bold q-mb-xs"

                    >

                      Основные темы курса

                    </p>

                    <ul class="courses-themes-list">

                      <li

                        v-for="(course, index) in category.courses"

                        :key="index"

                        class="list-item"

                      >

                        <div class="themes-arrow-items row">

                          <div class="q-ml-xs">

                            <p

                              class="main-themes-description text-black q-mb-xs"

                            >

                              {{ course.name }}

                            </p>

                          </div>

                        </div>

                      </li>

                    </ul>

                  </div>

                </div>

 

                <!-- Блок с информацией о курсе, время, дата -->

                <div class="row justify-between q-mt-md">

                  <div class="competency q-mr-xl column">

                    <div class="competency-content">

                      <p

                        class="main-purpose-title text-black q-mb-sm"

                      >

                        Развиваемая компетенция

                      </p>

                    </div>

                    <div class="competency">

                      <p class="competency-title text-grey">

                        {{ category.competency }}

                      </p>

                    </div>

                  </div>

                  <div class="time q-ml-xl column">

                    <div class="time-content">

                      <p

                        class="main-purpose-title text-black q-mb-sm"

                      >

                        Время прохождения

                      </p>

                    </div>

                    <div class="time">

                      <p class="competency-title text-grey">

                        {{ category.time }} минут

                      </p>

                    </div>

                  </div>

                  <div class="date-start q-ml-xl column">

                    <div class="date-start-content">

                      <p

                        class="main-date-start-title text-black q-mb-sm"

                      >

                        Курс назначен

                      </p>

                    </div>

                    <div class="date-start-item">

                      <p class="date-start-title text-grey">

                        {{ category.dateStart }}

                      </p>

                    </div>

                  </div>

                  <div class="date-finish q-ml-xl column">

                    <div class="date-finish-content">

                      <p

                        class="main-date-finish-title text-black q-mb-sm"

                      >

                        Пройти курс до

                      </p>

                    </div>

                    <div class="date-finish-item">

                      <p class="date-finish-title text-grey">

                        {{ category.dateFinish }}

                      </p>

                    </div>

                  </div>

                </div>

 

                <!-- Блок с кнопками управления курсом-->

                <div class="course-buttons q-mt-sm row justify-between" style="width: 640px;">

                  <q-btn

                    class="start-button text-white"

                    label="Начать прохождение"

                    size="15px"

                    glossy

                    icon="fa-solid fa-play"

                    :to="category.startCourseLink"

                  />

                  <q-btn

                    class="cancel-button text-white"

                    label="Отменить назначение"

                    size="15px"

                    glossy

                    icon="fa-solid fa-ban"

                    :to="category.cancelCourseLink"

                  />

                </div>

 

                <!-- Количество попыток прохождения курса -->

                 <div class="attempts-count q-mt-lg q-mb-md column">

                  <p class="attempts-title text-grey q-mb-xs">

                        История прохождения

                  </p>

                  <a :href="category.attemptsLink"  class="attempts-link" style="color: #00AAFF">

                    {{ category.courseAttempts }} попытки

                  </a>

                 </div>

 

                <!-- Ссылка для оставления отзыва о курсе -->

                <div class="review q-mt-lg q-mb-md">

                  <div class="review-link-container">

                    <a :href="category.reviewLink" class="review-link" style="color: #00AAFF">

                       Оставить отзыв о курсе

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </q-card-section>

        </q-card>

      </div>

    </div>

  </div>

</template>

 

<script>

export default {

  data() {

    return {

      /*course: {},*/

 

      category:

        {

          title: "Основы лизинга",

          cardDescription: "Несоблюдение требований комплаенс может привести к серьезным последствиям для компании от административных штрафов до утечки конфиденциальной информации. Поэтому очень важно, чтобы каждый сотрудник осознавал свою роль в системе комплаенс и ответственность за те или иные нарушения",

          target:

            "сформировать практические занания о понятии лизинга, его преимуществах по сравнению с другими способами приобретения ТС и преимуществах работы с ВТБ Лизинг",

          path: { path: "course" },

          courses: [

            {

              name: "Понятие лизинга, его виды, субъекты и предметы",

            },

            {

              name: "Схема лизинговой сделки",

            },

            {

              name: "Финансовые и нефинансовые преимущества лизинга по сравнению с другими способами финансирования",

            },

            {

              name: "Преимущества ВТБ Лизинг",

            },

          ],

          time: "60",

          competency: "Отвечаем за результат",

          state: 'inProgress', // тут имею ввиду состояние курса начат он или нет

          dateStart: "2024-06-21",

          dateFinish: "2024-06-26",

          startCourseLink: "#",

          cancelCourseLink: "#",

          courseAttempts: "2",

          attemptsLink: "#",

          reviewLink: "#",

        }

    };

  },

};

</script>

 

