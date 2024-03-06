
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'content', component: () => import('pages/CoursesContent.vue') },
      { path: 'content-items', component: () => import('pages/CourseCatalogItems.vue') },
      { path: 'course', component: () => import('pages/CoursePage.vue') }
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
