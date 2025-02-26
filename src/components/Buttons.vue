<template>
  <div class="vp-raw">

    <div class="flex gap-4 items-center justify-center p-8">
      <button type="button" class="cursor-pointer rounded border border-yellow-500 bg-yellow-500 p-3 text-black hover:bg-black hover:text-yellow-500">Button text</button>
      <button type="button" :class="buttonClassTest">Button text</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const buttonClassTest = ref('p-3 bg-red-500 cursor-pointer text-white hover:bg-white hover:text-red-500 border border-red-500 rounded');
</script>
