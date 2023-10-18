<!-- Script setup é usada para simplificar a estrutura de um componente Vue e definir variáveis, props, métodos, e mais em um estilo mais conciso e fácil de ler. -->
<script setup>
import GameListItem from './GameListItem.vue'
</script>
<!-- Template com a barra de busca e select -->
<template>
  <input type="text" v-model="filterText" placeholder="Procurar" />
  <select v-model="sortBy" @change="sortGameList">
    <option value="savings">% de Desconto</option>
    <option value="maxPrice">Maior preço</option>
    <option value="minPrice">Menor preço</option>
    <option value="title">Título</option>
  </select>
  <!-- Exibir lista de itens -->
  <ol>
    <GameListItem v-for="item in filteredItems" :key="item.id" :item="item" />
  </ol>
  <!-- Exibir botão para carregar mais itens -->
  <button @click="loadNextPage">Carregar mais</button>
</template>

<script>
  // Aqui estou exportando um objeto que representa o componente Vue.
export default {
  data() {
    return {
      items: [],
      filterText: '',
      sortBy: 'minPrice',
      pageNumber: 0,
      pageSize: 12
    }
  },
  // Mounted é um dos "ciclos de vida" dos componentes Vue e é executado automaticamente assim que o componente é montado no DOM.
  mounted() {
    this.loadGameList()
  },
  // Metodos do componente
  methods: {
    loadGameList() {
      const apiUrl = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&storeID=1&onSale=1&AAA=1`
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            //TODO criar um modal para exibir o erro tratado para o usuário, e logar com console.error() em caso de erro response.statusText
            throw new Error(`Network response was not ok: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          this.items = this.items.concat(data)
          this.pageNumber++
          //TODO mover scroll para o final da lista
        })
        .catch((error) => {
          // TODO: criar um modal para exibir o erro tratado para o usuário, e logar com console.error() em caso de erro
          console.error('Error loading items from API:', error)
        })
    },
    loadNextPage() {
      // TODO: verificar quando a lista está no final e não carregar mais
      this.loadGameList()
    },
    sortGameList() {
      console.log(this.sortBy)
      return this.items.sort((a, b) => {
        if (this.sortBy === 'title') {
          return a.title.localeCompare(b.title)
        } else if (this.sortBy === 'maxPrice') {
          return parseFloat(b.normalPrice) - parseFloat(a.normalPrice)
        } else if (this.sortBy === 'minPrice') {
          return parseFloat(a.normalPrice) - parseFloat(b.normalPrice)
        } else if (this.sortBy === 'savings') {
          return parseFloat(b.savings) - parseFloat(a.savings)
        }
      })
    }
  },
  // Propriedades computadas são como métodos que são executados automaticamente quando alguma propriedade que ele depende é alterada.
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        //TO-REVIEW o trim já é uma forma de tratar os valores vazios providos pelo usuário;
        //TODO verificar se o filterText está começando com vazio e direcionar o cursor para o início do input
        item.title.toLowerCase().includes(this.filterText.trim().toLowerCase())
      )
    }
  }
}
</script>

<style scoped></style>
