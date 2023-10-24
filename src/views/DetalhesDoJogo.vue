<template>
  <div class="container-details">
    <div class="game-card">
      <div class="thumb">
        <img :src="$route.params.thumb" alt="Imagem do Jogo" />
      </div>
      <div class="title">
        <h1>{{ $route.params.title }}</h1>
        <h5>Avaliação na Steam:</h5>
        {{ $route.params.steamRatingText }} (%{{ $route.params.steamRatingPercent }})
      </div>
      <div class="prices">
        <div class="normal-price">De: R$ {{ $route.params.normalPrice }}</div>
        <div class="sale-price">Por: R$ {{ $route.params.salePrice }}</div>
      </div>
    </div>
    <div class="back-button">
      <router-link to="/" class="btn-back">Voltar</router-link>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .container-details {
    max-height: 86vh;
  }
  .container-details .game-card {
    width: 304px;
    margin-top: 0;
  }

  .prices {
    display: flex;
    flex-direction: column;
  }
  .prices .normal-price {
    font-size: 12px;
  }
  .prices .sale-price {
    font-size: 22px;
  }
}
.container-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.game-card {
  width: 50%;
  height: auto;
  padding-bottom: 30px;
  margin-bottom: 50px;
  margin-top: 50px;
  border-radius: 8px;
  background: #0b1641;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.thumb img {
  width: 100%;
  height: 50%;
  border-radius: 8px 8px 0px 0px;
}
.title {
  text-align: center;
  margin: 9px 10px 16px 10px;
}
.prices {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.normal-price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 9px;
  background: #c70160;
  text-decoration: line-through;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.sale-price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 8px;
  background: #16857b;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.back-button {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #0b1641;
  border: none;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  text-decoration: none;
  box-shadow: 0px 3.18725px 3.18725px 0px rgba(0, 0, 0, 0.25);
}

.btn-back:hover {
  background: #101c4d;
  box-shadow: 0px 3.18725px 3.18725px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
