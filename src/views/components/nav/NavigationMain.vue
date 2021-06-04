<template>
  <nav id="main-nav" class="flex justify-around px-4 bg-gray-700" role="navigation">
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
    >
      <font-awesome-icon icon="chart-line" class="mr-2" />
      <span>Analytics</span>
    </a>
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
    >
      <font-awesome-icon icon="flag" class="mr-2" />
      <span>Activities</span>
    </a>
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
    >
      <font-awesome-icon icon="bell" class="mr-2" />
      <span>Notifications</span>
    </a>
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
    >
      <font-awesome-icon icon="envelope" class="mr-2" />
      <span class="text-sm">Messages</span>
    </a>
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
    >
      <font-awesome-icon icon="cog" class="mr-2" />
      <span class="text-sm">Settings</span>
    </a>
    <div class="flex text-right align-middle py-2">
      <div>
        <img
          class="inline-block h-10 w-10 rounded-full border-2 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          src="#"
          alt=""
        />
      </div>

      <div class="relative">
        <div
          @click="dropdownOpen = !dropdownOpen"
          class="hidden md:block md:flex md:items-center ml-2 mt-2"
        >
          <span class="text-white text-sm mr-1">System Admin</span>
          <div>
            <font-awesome-icon icon="chevron-down" class="text-gray-400" />
          </div>
        </div>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>

        <div
          v-show="dropdownOpen"
          class="absolute right-0 mt-4 py-2 w-48 bg-gray-700 rounded-md shadow-xl z-20"
        >
          <a
            href="#"
            class="no-underline text-gray-500 py-1 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-800 hover:text-gray-200"
            >Profile</a
          >
          <a
            href="#"
            class="no-underline text-gray-500 py-1 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-800 hover:text-gray-200"
            >Products</a
          >
          <router-link
            to="/auth"
            class="no-underline text-gray-500 py-1 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-800 hover:text-gray-200"
            >Log out</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(_, { emit }) {
    const dropdownOpen = ref(false);
    const isOpen = ref(false);
    return {
      isOpen,
      dropdownOpen,
    };
  },
});
</script>
