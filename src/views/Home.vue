<template>
  <div class="flex flex-col justify-center items-center px-2">
    <h2 class="my-4 text-4xl font-bold">NMRL Sites Portal</h2>
    <hr class="bg-white border mb-4 w-full" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <SiteLink v-for="site in state.sites" :key="site.name" :site="site" />
    </div>
  </div>
</template>

<script>
import SiteLink from './components/SiteLink.vue';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    SiteLink,
  },
  setup() {
    let state = reactive({
      sites: [
        {
          name: 'National Micribiology Ref Laboratory',
          ipInternal: 'http://192.168.0.32:80',
          ipExternal: 'https://196.27.127.58:3243',
        },
        {
          name: 'National Virology Ref Laboratory',
          ipInternal: 'http://192.168.0.46:80',
          ipExternal: 'https://196.27.127.58:4643',
        },
        {
          name: 'National TB Ref Laboratory',
          ipInternal: 'http://192.168.0.43:80',
          ipExternal: 'https://196.27.127.58:4343',
        },
        {
          name: 'Parirenyatwa Laboratory',
          ipInternal: 'http://192.168.0.59:80',
          ipExternal: 'https://196.27.127.58:5943',
        },
        {
          name: 'Marondera Laboratory',
          ipInternal: 'http://192.168.0.33:80',
          ipExternal: 'https://196.27.127.58:3343',
        },
        {
          name: 'Bindura Laboratory',
          ipInternal: 'http://192.168.0.36:80',
          ipExternal: 'https://196.27.127.58:3643',
        },
        {
          name: 'kadoma Laboratory',
          ipInternal: 'http://192.168.0.26:80',
          ipExternal: 'https://196.27.127.58:2643',
        },
        {
          name: 'Aibst Laboratory',
          ipInternal: 'http://192.168.0.48:80',
          ipExternal: 'https://196.27.127.58:4843',
        },
        {
          name: 'BRTI Laboratory',
          ipInternal: 'http://192.168.0.47:80',
          ipExternal: 'https://196.27.127.58:4743',
        },
        {
          name: 'Gwanda Laboratory',
          ipInternal: 'http://192.168.0.52:80',
          ipExternal: 'https://196.27.127.58:5343',
        },
        {
          name: 'Thorngrove Laboratory',
          ipInternal: 'http://192.168.0.49:80',
          ipExternal: 'https://196.27.127.58:4943',
        },
        {
          name: 'Beitbridge Laboratory',
          ipInternal: 'http://192.168.0.57:80',
          ipExternal: 'https://196.27.127.58:5743',
        },
        {
          name: 'St Lukes Laboratory',
          ipInternal: 'http://192.168.0.51:80',
          ipExternal: 'https://196.27.127.58:5143',
        },
        {
          name: 'Vic Falls Laboratory',
          ipInternal: 'http://192.168.0.53:80',
          ipExternal: 'https://196.27.127.58:5343',
        },
        {
          name: 'Masvingo Laboratory',
          ipInternal: null,
          ipExternal: 'https://197.155.235.2:3443',
        },
        {
          name: 'Mpilo Laboratory',
          ipInternal: null,
          ipExternal: 'https://41.175.145.50:9743',
        },
        {
          name: 'Mutare Laboratory',
          ipInternal: 'http://192.168.0.64:80',
          ipExternal: 'https://194.133.159.134:3443',
        },
        {
          name: 'Gweru Laboratory',
          ipInternal: 'http://192.168.0.69:80',
          ipExternal: null,
        },
        {
          name: 'Chinhoyi Laboratory',
          ipInternal: null,
          ipExternal: null,
        },
      ],
    });

    return {
      state,
    };
  },
});
</script>
