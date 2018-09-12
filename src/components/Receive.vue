<template>
  <div class="relative onehundred">
    <GoHome />
    <h3>Receive a File</h3>
    <p v-if="$root.$data.store.state.connected" class="small blue">File pipeline open, awaiting files...</p>
    <br>
    <ConnectTo />
    <br>
  </div>
</template>

<script>
  import ConnectTo from '@/components/parts/ConnectTo';
  import GoHome from '@/components/parts/GoHome';

  export default {
    name: 'Receive',
    components: {
      ConnectTo,
      GoHome,
    },
  };
</script>
