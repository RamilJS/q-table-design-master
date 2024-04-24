# Quasar App (q-table-design)

A Quasar Project

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

<div class="list-card">
  <div class="card-container">
    <router-link v-for="(category, index) in categories" :key="index" :to="category.path" style="text-decoration: none;">
      <q-card class="my-card col-3 shadow-3" bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold" style="font-size: medium;">
              {{ category.title }}
            </div>
            <div class="text-subtitle1 q-mt-sm q-mb-xs" style="font-size: small; font-weight: 500">
              Цель курса?
            </div>
            <div class="text-caption text-grey ellipsis-4-lines">
              {{ category.bannerPurpose }}
            </div>
          </q-card-section>
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-btn flat round icon="schedule" />
          <div flat>{{ category.bannerTime }} мин</div>
        </q-card-actions>
      </q-card>
    </router-link>
  </div>
</div>

