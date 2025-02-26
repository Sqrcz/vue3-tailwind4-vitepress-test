<script setup>

import Buttons from '../src/components/Buttons.vue'
</script>

# Button example

This page demonstrates usage of `Buttons` component.

<buttons />


Above component should be properly styled with Tailwindcss classes as it's source looks like this:
```vue
<template>
  <div class="flex gap-4 items-center justify-center p-8">
    <button class="
      cursor-pointer
      rounded
      border
      border-yellow-500
      bg-yellow-500
      p-3
      text-black
      hover:bg-black
      hover:text-yellow-500
    ">Button text</button>
    <button :class="buttonClassTest">Button text</button>
  </div>
</template>
<script setup>
import {ref} from 'vue';

const buttonClassTest = ref(`
  cursor-pointer
  rounded
  border
  border-red-500
  bg-red-500
  p-3
  text-white
  hover:bg-white
  hover:text-red-500
`);
</script>
```
