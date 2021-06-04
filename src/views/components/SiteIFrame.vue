<template>
  <iframe :src="ip" frameborder="0" :title="state?.site?.name"></iframe>
</template>

<script lang="ts">
import Swal from 'sweetalert2';
import { defineComponent, reactive, computed } from 'vue';
export default defineComponent({
  name: 'Site-Iframe',
  props: {
    site: Object,
  },
  setup(props) {
    let state = reactive({
      site: props.site,
    });
    function getIp(): string {
      let ip;
      if (location.href.includes('192.168.')) {
        ip = state.site.ipInternal;
        if (ip.length === 0) {
          ip = state.site.ipExternal;
        }
      } else {
        ip = state.site.ipExternal;
      }
      return ip;
    }

    return {
      state,
      ip: computed(() => getIp()),
    };
  },
});
</script>
