
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'catalog', component: () => import('pages/CourseCatalog.vue') },
      { path: 'content', component: () => import('pages/CoursesContent.vue') },
      { path: 'catalog/items', component: () => import('pages/') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
