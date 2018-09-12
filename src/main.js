/* global localStorage */
import Vue from 'vue';
import Vuex from 'vuex';
import Peer from 'peerjs';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  functional: true,
  router,
  created() {
    this.store.commit('connect');
    this.store.state.peer.on('open', (id) => {
      this.store.commit('setPeerId', id);
      this.store.state.peer.on('connection', (connection) => {
        connection.on('data', (data) => {
          console.log('got data', data);
          if (data.status && data.status === 'received') {
            this.store.commit('received');
          }
        });
        connection.on('close', () => {
          this.store.commit('dropConn', connection);
        });
        this.store.commit('addConn', connection);
      });
    });
  },
  data() {
    const localState = localStorage.getItem('localState') ? JSON.parse(localStorage.getItem('localState')) : {};
    return {
      connectionCount: 0,
      store: new Vuex.Store({
        state: Object.assign({
          sending: false,
          peerId: null,
          peer: null,
          blob: null,
          file: null,
          connected: false,
          received: 0,
          connections: [],
        }, localState),
        mutations: {
          setPeerId(state, id) {
            state.peerId = id;
          },
          setPartnerId(state, id) {
            state.partnerId = id;
          },
          connect(state) {
            state.peer = new Peer();
          },
          sending(state) {
            state.sending = true;
          },
          setFile(state, payload) {
            state.file = payload.file;
            state.blob = payload.blob;
          },
          addConn(state, conn) {
            const { connections } = state;
            connections.push(conn);
            state.connections = connections;
          },
          connected(state) {
            state.connected = true;
          },
          disconnected(state) {
            state.connected = false;
          },
          cleanup(state) {
            state.connections = [];
            state.file = null;
            state.blob = null;
            state.received = 0;
            state.sending = false;
          },
          received(state) {
            state.received += 1;
            if (state.received >= state.connections.length) {
              state.sending = false;
            }
          },
          dropConn(state, conn) {
            const { connections } = state;
            state.connections = connections.filter(connection => connection.peer !== conn.peer);
          },
        },
      }),
    };
  },
  render(h) {
    return h(App);
  },
});
