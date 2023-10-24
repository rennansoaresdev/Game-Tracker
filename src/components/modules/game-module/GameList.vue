<template>
  <div class="container">
    <div class="deals">
      <h1>Ofertas</h1>
    </div>
    <div class="search-sort">
      <InputSvg v-model="filterText" />
      <div class="sort">
        <span>Ordenar por:</span>
        <Dropdown
          :selected-item="sortBy"
          :items="sortByItems"
          @update:selectedItem="sortGameList"
        />
      </div>
    </div>
    <div class="game-list">
      <GameListItem v-for="item in filteredItems" :key="item.id" :item="item" />
    </div>
    <div class="loadmore">
      <button @click="loadNextPage">Carregar mais</button>
    </div>
  </div>
</template>

<script>
import GameListItem from './GameListItem.vue'
import InputSvg from '../../shared/InputSvg.vue'
import Dropdown from '../../shared/Dropdown.vue'

export default {
  data() {
    return {
      items: [],
      filterText: '',
      pageNumber: 0,
      pageSize: 12,
      sortBy: {
        label: 'Menor preço',
        value: 'minPrice'
      },
      sortByItems: [
        {
          label: 'Maior preço',
          value: 'maxPrice'
        },
        {
          label: 'Menor preço',
          value: 'minPrice'
        },
        {
          label: 'Título',
          value: 'title'
        },
        {
          label: '% de Desconto',
          value: 'savings'
        }
      ]
    }
  },

  components: {
    GameListItem,
    InputSvg,
    Dropdown
  },

  mounted() {
    this.loadGameList()
  },

  methods: {
    async loadGameList() {
      const apiUrl = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&storeID=1&onSale=1&AAA=1&search=${this.filterText}`
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }
        const data = await response.json()
        this.items = this.items.concat(data)
        this.pageNumber++
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: 'Erro!',
          text: `Descuple, algo deu errado! ${error.message}`
        })
        console.error('Erro ao carregar os itens da API:', error)
      }
    },

    loadNextPage() {
      this.loadGameList()
    },

    sortGameList(event) {
      this.sortBy = event

      return this.items.sort((a, b) => {
        if (this.sortBy.value === 'title') {
          return a.title.localeCompare(b.title)
        } else if (this.sortBy.value === 'maxPrice') {
          return parseFloat(b.normalPrice) - parseFloat(a.normalPrice)
        } else if (this.sortBy.value === 'minPrice') {
          return parseFloat(a.normalPrice) - parseFloat(b.normalPrice)
        } else if (this.sortBy.value === 'savings') {
          return parseFloat(b.savings) - parseFloat(a.savings)
        }
      })
    }
  },

  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.title.toLowerCase().includes(this.filterText.trim().toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 304px;
  padding: 0;
}

@media (min-width: 768px) {
  .container {
    max-width: 1280px;
  }
  .loadmore {
    margin-top: 40px;
  }
  .search-sort {
    margin-bottom: 32px;
    min-width: 100%;
    justify-content: space-between;
  }
  .container .sort {
    flex-direction: row;
    margin-right: 0px;
  }
  .container .sort span {
    margin-right: 20px;
    font-size: 18px;
  }
  .search-sort .search-bar {
    width: 380px;
    height: 50px;
    font-size: 24px;
  }
  .search-sort select {
    width: 180px;
    height: 50px;
    font-size: 18px;
  }
  .container .deals h1 {
    display: flex;
    font-size: 36px;
  }
  .container .game-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
  }
}
.game-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.deals h1 {
  margin-top: 16px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

@media (max-width: 768px) {
  .deals h1 {
    font-size: 24px;
  }
}
.loadmore {
  width: 100%;
  display: flex;
  justify-content: center;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 50px;
  flex-shrink: 0;
  margin-bottom: 32px;
  border-radius: 8px;
  background: #0b1641;
  border: none;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  box-shadow: 0px 3.18725px 3.18725px 0px rgba(0, 0, 0, 0.25);
}

button:hover {
  background: #101c4d;
  box-shadow: 0px 3.18725px 3.18725px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

button:active {
  background: #242b47;
  box-shadow: 0px 3.18725px 3.18725px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

select {
  padding: 5px;
  width: 122px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #0b1641;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.sort {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
}

@media (max-width: 768px) {
  .sort {
    margin-right: 0;
  }
}
.sort span {
  color: #fff;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 4px;
}
.search-sort {
  display: flex;
  width: 304px;
  align-items: flex-end;
  margin-bottom: 23px;
  gap: 8px;
}
</style>
