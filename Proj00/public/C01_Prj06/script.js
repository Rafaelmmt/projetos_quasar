import { createApp } from 'vue';

createApp({

  data() {
    return {
      listaDeTarefas: [],
      novaTarefa: {},
    };
  },

  methods: {
    addTask() {
      this.novaTarefa.realizada = false;
      this.listaDeTarefas.push(this.novaTarefa);
      this.novaTarefa = {};
    },

    clearAll() {
      this.listaDeTarefas = [];
    },
  },

}).mount('#app');
