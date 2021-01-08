<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          World Movies Info
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="drawer"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-black"
    >
      <q-list>
        <EssentialLink
        class="text-grey-8"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Upcomming',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Top Rated',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Popular'
  },
  {
    title: 'Action'
  },
  {
    title: 'Romance'
  },
  {
    title: 'Comedy'
  },
  {
    title: 'Animation'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style>

  .header{
    background-color: black;
  }

  .drawer{
    width: 100px;
  }
</style>
