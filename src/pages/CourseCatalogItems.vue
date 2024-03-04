<template>
  <div class="q-ml-xl q-mt-sm q-gutter-sm row justify-between">
    <q-breadcrumbs
      class="q-mt-lg g-ml-lg text-primary"
    >
      <q-breadcrumbs-el
        label="Учебный центр"
        :to="{ path: '/' }"
      />
      <q-breadcrumbs-el
        label="Каталог курсов"
        :to="{ path: 'catalog' }"
      />
      <q-breadcrumbs-el
        label="Содержание"
        :to="{ path: 'content' }"
      />
      <q-breadcrumbs-el
        label="Профессиональные навыки"
      />
    </q-breadcrumbs>

    <div class="q-mt-lg q-mr-lg q-pr-lg row">
      <q-img
        class="rounded-borders"
        src="/public/icons/logo-vtb-d.png"
        alt="Логотип компании"
        style="height: 60px; width: 270px"
      />
    </div>
  </div>

  <div class="column items-start q-pl-sm q-ml-xl q-mt-sm">
    <div>
      <p
        class="text-3 text-weight-regular text-uppercase text-secondary"
        style=""
      >
        Профессиональные навыки
      </p>
    </div>
    <div>
      <ul>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Основы лизинга
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Продукты Автолизинга
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Параметры сделки
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Этапы сделки
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            CRM. Знакомство
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Работа в CRM (инструкции)
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Основы делового письма
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Создание письма в Outlook
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Работа в Outlook
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Видеокурс Microsoft Excel 2010
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Microsoft Excel 2013 "2-й уровень-продвинутый пользователь"
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Microsoft Excel 2013 "3-й уровень-опытный пользователь"
          </p>
        </li>
        <li style="list-style-type: none">
          <p class="text-body1 text-primary">
            Microsoft Excel 2013 "4-й уровень-эксперт"
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style></style>
