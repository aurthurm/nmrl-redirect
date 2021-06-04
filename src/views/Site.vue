<template>
  <iframe :src="ip" frameborder="0" :title="name" class="w-screen h-screen"></iframe>
</template>

<script lang="ts">
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';
import { defineComponent, reactive, computed } from 'vue';
export default defineComponent({
  name: 'Site-Iframe',
  setup() {
    const route = useRoute();
    return {
      name: computed(() => route.params?.siteName),
      ip: computed(() => route.query?.siteIp),
    };
  },
});
</script>
