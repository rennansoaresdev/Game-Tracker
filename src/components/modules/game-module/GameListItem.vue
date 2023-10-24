<template>
  <div class="container">
    <div class="game-card">
      <div class="thumb">
        <img :src="item.thumb" alt="imagem do jogo" @error="showPlaceholder" />
      </div>
      <div class="title">
        {{ item.title }}
      </div>
      <div class="item-details">
        <router-link :to="{
            name: 'detalhes-do-jogo',
            params: {
              thumb: item.thumb,
              title: item.title,
              steamRatingText: item.steamRatingText,
              steamRatingPercent: item.steamRatingPercent,
              normalPrice: item.normalPrice,
              salePrice: item.salePrice
            }
          }">
          <button class="btn-details">Detalhes</button>
        </router-link>

        <div class="prices">
          <div class="price">
            <span class="normal-price">${{ item.normalPrice }}</span> ${{ item.salePrice }}
          </div>
          <div class="btn-savings">- {{ parseInt(item.savings) }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    showPlaceholder(event) {
      event.target.src = '/Users/rennansoares/Desktop/gametracker/src/assets/placeholder.png'
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .container .game-card {
    width: 380px;
    height: 251px;
    margin: 0;
  }
  .game-card .thumb img {
    width: 100%;
    height: 147px;
  }
  .container .game-card .title {
    height: 38px;
    margin: 0px 0px 14px 16px;
    font-size: 24px;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90%;
  }
  .container .btn-details {
    width: 116px;
    height: 39px;
    font-size: 18px;
  }
  .container .btn-savings {
    width: 84px;
    height: 39px;
    font-size: 18px;
  }
  .prices .price {
    font-size: 18px;
  }
  .price .normal-price {
    font-size: 12px;
  }
}

.thumb img {
  width: 304px;
  height: 95px;
  border-radius: 8px 8px 0px 0px;
}
.game-card {
  width: 304px;
  height: 180px;
  margin-bottom: 20px;
  border-radius: 8px;
  background: #0b1641;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.item-details {
  display: flex;
  justify-content: space-between;
  padding: 0px 11px 11px 11px;
}
.prices {
  display: flex;
  gap: 10px;
}

span {
  text-align: right;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  text-decoration-line: line-through;
}
.title {
  height: 19px;
  margin: 9px 10px 16px 10px;
}
.btn-details {
  width: 92px;
  height: 30px;
  border-radius: 6.154px;
  background: #c70160;
  border: none;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.btn-savings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 31px;
  border-radius: 6.375px;
  background: #16857b;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.price {
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
