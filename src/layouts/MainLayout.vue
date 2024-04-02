<template>
  <q-layout
    view="hHh lpR fFf"
    class="bg-grey-1"
  >
    <q-header
      elevated
      class="bg-white text-grey-8 q-py-xs"
      height-hint="58"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          @click="toggleLeftDrawer"
        />

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
            src="/public/icons/logo-vtb-d.png"
            alt="Логотип компании"
          />
        </q-btn>

        <div
          row
          justify-around
          class="navigation-group"
        >
          <ul class="navigation-list">
            <li class="navigation-list-item">
              <q-btn
                flat
                no-caps
                wrap
                size="md"
                padding="xs"
                class="q-ml-xs"
                :to="{ path: '/content' }"
              >
                Учебный<br>центр
              </q-btn>
            </li>
            <li class="navigation-list-item">
              <q-btn
                flat
                no-caps
                wrap
                size="md"
                padding="xs"
                class="q-ml-xs"
                :to="{ path: '#' }"
              >
                База<br>знаний
              </q-btn>
            </li>
            <li class="navigation-list-item">
              <q-btn
                flat
                no-caps
                wrap
                size="md"
                padding="xs"
                class="q-ml-xs"
                :to="{ path: '#' }"
              >
                F.A.Q.
              </q-btn>
            </li>
            <li class="navigation-list-item">
              <q-btn
                flat
                no-caps
                wrap
                size="md"
                padding="xs"
                class="q-ml-xs"
                :to="{ path: '#' }"
              >
                Бронирование<br>рабочего места
              </q-btn>
            </li>
            <li class="navigation-list-item">
              <q-btn
                flat
                no-caps
                wrap
                size="md"
                padding="xs"
                class="q-ml-xs"
                :to="{ path: '#' }"
              >
                Стратегические<br>инициативы
              </q-btn>
            </li>
            <li class="navigation-list-item">
              <q-btn
                flat
                no-caps
                wrap
                size="md"
                padding="xs"
                class="q-ml-xs"
                :to="{ path: '#' }"
              >
                Корпоративный<br>портал
              </q-btn>
            </li>
          </ul>
        </div>

        <q-space />
        <q-space />
        <q-space />
        <q-space />
        <q-space />
        <q-space />
        <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            v-model="search"
            dense
            outlined
            square
            placeholder="Поиск"
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="notifications"
          >
            <q-badge
              color="red"
              text-color="white"
              floating
            >
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn
            round
            flat
          >
            <q-avatar size="30px">
              <img src="/public/images/avatar.jpg">
            </q-avatar>
            <q-tooltip>Иванова Оксана</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon
                color="grey"
                :name="link.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />
          <q-item
            v-for="link in links2"
            :key="link.text"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon
                color="grey"
                :name="link.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { fabYoutube } from '@quasar/extras/fontawesome-v6'

export default {
  name: 'MyLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      fabYoutube,
      leftDrawerOpen,
      search,
      toggleLeftDrawer,

      links1: [
        { icon: 'home', text: 'На главную' },
        { icon: 'mdi-desktop-classic', text: 'Корпоративный портал' },
        { icon: 'mdi-account-box', text: 'Личный кабинет' }
      ],
      links2: [
        { icon: 'mdi-school', text: 'Мое обучение' },
        { icon: 'mdi-file-document-multiple', text: 'Управление эффективностью деятельности' },
        { icon: 'mdi-application-import', text: 'Заявки' },
        { icon: 'watch_later', text: 'Бронирование рабочего места' }
      ],
      links3: [
        { icon: fabYoutube, text: 'YouTube Premium' },
        { icon: 'local_movies', text: 'Movies & Shows' },
        { icon: 'videogame_asset', text: 'Gaming' },
        { icon: 'live_tv', text: 'Live' }
      ],
      links4: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'flag', text: 'Report history' },
        { icon: 'help', text: 'Help' },
        { icon: 'feedback', text: 'Send feedback' }
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Press' },
        { text: 'Copyright' },
        { text: 'Contact us' },
        { text: 'Creators' },
        { text: 'Advertise' },
        { text: 'Developers' }
      ],
      buttons2: [
        { text: 'Terms' },
        { text: 'Privacy' },
        { text: 'Policy & Safety' },
        { text: 'Test new features' }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 15%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000

.vtbl-logo
  height: 60px
  width: 270px
  transform: scale(0.75)
.navigation-list
  display: flex
  flex-direction: row
  justify-content: flex-start
  align-content: center
  padding-left: 1px
.navigation-list:nth-child(3)
  align-self: center
.navigation-list-item
  list-style-type: none
</style>
