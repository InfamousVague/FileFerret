<template>
  <div class="share">
    <button class="send bottom_button" v-on:click="send()">SHARE</button>
  </div>
</template>

<script>
  export default {
    name: 'Share',
    methods: {
      send() {
        for (let i = 0; i < this.$root.$data.store.state.connections.length; i += 1) {
          const connection = this.$root.$data.store.state.connections[i];
          this.$root.$data.store.commit('sending');
          connection.send({
            file: this.$root.$data.store.state.blob,
            filename: this.$root.$data.store.state.file.name,
            filetype: this.$root.$data.store.state.file.type,
          });
        }
      },
    },
  };
</script>
