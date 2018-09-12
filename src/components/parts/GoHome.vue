<template>
  <div class="go_home">
    <button v-on:click="$router.push('/')"><i class="fa fa-arrow-left"></i></button>
  </div>
</template>

<script>
  export default {
    name: 'GoHome',
  };
</script>
