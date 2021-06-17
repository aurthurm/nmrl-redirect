<template>
  <div class="col-span-1">
    <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
      <div class="flex flex-col md:flex-row items-center md:justify-between">
        <div class="font-medium leading-none">{{ state.site?.name }}</div>
        <button
          :class="[
            'flex-no-shrink mt-4 md:mt-0 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2  rounded-full outline-none focus:outline-none',
            accessible
              ? 'border-green-300 bg-green-300 text-white'
              : 'border-gray-300 bg-gray-300 text-grey-500',
          ]"
          @click.prevent="visitSite()"
          :disabled="!accessible"
        >
          Visit
        </button>
        <!-- Iframes Not working it does not maintain sessions
          <router-link
          :to="{
            name: 'site-iframe',
            params: { siteName: state?.site?.name },
            query: { siteIp: ip },
          }"
          class="flex-no-shrink bg-green-300 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 text-white rounded-full outline-none focus:outline-none"
        >
          Visit
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swal from 'sweetalert2';
import { defineComponent, reactive, computed } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    site: Object,
  },
  setup(props) {
    let state = reactive({
      count1: 0,
      site: props.site,
    });

    function getIp(): string {
      let ip;
      if (location.href.includes('mhealth') || location.href.includes('196.27.127.58')) {
        ip = state.site.ipExternal;
      } else {
        ip = state.site.ipInternal;
        if (!state.site.ipInternal) {
          ip = state.site.ipExternal;
        }
      }
      if (!ip) return null;
      return ip;
    }

    function visitSite(): void {
      window.open(getIp(), '_blank');
    }

    return {
      state,
      visitSite,
      ip: computed(() => getIp()),
      accessible: computed(() => {
        let ipAd = getIp();
        if (!ipAd) return false;
        return true;
      }),
    };
  },
});
</script>
