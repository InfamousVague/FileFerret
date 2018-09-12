<template>
  <div>
    <label>CONNECT TO:</label><br>
    <p class="small">Enter a share ID to receive files from.</p>
    <input ref="partnerId" type="text" placeholder="SOMEONES SHARE ID..." v-on:keyup="$root.$data.store.commit('setPartnerId', $refs.partnerId.value)">
    <br>
    <br>
    <button class="send bottom_button" v-on:click="connect()" v-if="!$root.$data.store.state.connected">CONNECT</button>
    <button class="send green disabled bottom_button" v-on:click="connect()" v-else><i class="fa fa-spin fa-spinner"></i> WAITING FOR FILES</button>
  </div>
</template>

<script>
  function downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  export default {
    name: 'ConnectTo',
    data() {
      return {
        connection: null,
      };
    },
    methods: {
      connect() {
        this.connection = this.$root.$data.store.state.peer.connect(this.$refs.partnerId.value);
        this.connection.on('open', () => {
          this.connection.on('data', (data) => {
            const blob = new Blob([data.file], { type: data.filetype });
            const url = URL.createObjectURL(blob);
            downloadURI(url, data.filename);
            this.connection.send({
              status: 'received',
            });
          });
          this.connection.on('close', () => {
            console.log('close');
          });
          this.$root.$data.store.commit('connected');
        });
      },
    },
    destroyed() {
      if (this.connection) {
        this.connection.close();
        this.$root.$data.store.commit('disconnected');
      }
    },
  };
</script>
