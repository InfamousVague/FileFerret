<template>
  <div id="menu">
    <button v-on:click="window.close()"><i class="fa fa-times"></i></button>
    <button v-on:click="window.minimize()"><i class="fa fa-minus"></i></button>
  </div>
</template>

<script>
  import { remote } from 'electron';

  export default {
    name: 'Menu',
    data() {
      return {
        window: remote.getCurrentWindow(),
      };
    },
  };
</script>
