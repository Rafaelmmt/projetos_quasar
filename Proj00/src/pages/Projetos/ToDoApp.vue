<template>
  <q-page class="flex flex-center">
    <h1>Lista de tarefas</h1>
    <h3>Adicione tarefas a sua lista de tarefas.</h3>
    <div v-for="tarefa in listaDeTarefas" v-bind:key="tarefa">
      <h3 class="tarefas" :class="{ tarefaRealizada: tarefa.realizada }">{{ tarefa.texto }}</h3>
    </div>
    <button class="btnclear">Limpar tudo</button>
    <div class="inputfield">
      <input class="inAdd" type="text" size="25" placeholder="Adicione uma nova tarefa...">
      <button class="btnAdd" @click="addTask()">Adicionar</button>
    </div>
    <div class="instructions">
      <p>Instruções</p>
      <ul>
        <li>Clique no texto da tarefa para alterar entre feita / não feita;</li>
        <li>Use o botão "Limpar tudo" para remover todas as tarefas;</li>
        <li>Use o input para adicionar novas tarefas.</li>
      </ul>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';

defineOptions({
  name: 'ToDoApp',
});

const listaDeTarefas = reactive([]);
const novaTarefa = reactive({});

function addTask() {
  novaTarefa.realizada = false;
  listaDeTarefas.push(novaTarefa);
  novaTarefa.value = {};
}

</script>
