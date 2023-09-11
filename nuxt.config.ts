// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify_edge'
  },
  devtools: { enabled: true }
  // modules: ['nuxt-vuefire'],
  // vuefire: {
  //   auth: {
  //     enabled: true
  //   },
  //   config: {
  //     apiKey: 'AIzaSyAcP6zcgwOyjreQLzd9Y4DA8cGMi1hrczI',
  //     authDomain: 'modernmedlife-5a65e.firebaseapp.com',
  //     projectId: 'modernmedlife-5a65e',
  //     storageBucket: 'modernmedlife-5a65e.appspot.com',
  //     messagingSenderId: '643445662062',
  //     appId: '1:643445662062:web:02993174eb8c5a6bee217f'
  //   }
  // }
})
