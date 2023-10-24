<template>
  <div class="container">
    <h2>Junte-se à Nossa Equipe</h2>
    <p>
      Na Game Tracker, estamos sempre em busca de talentos excepcionais que compartilhem nossa
      paixão por jogos e tecnologia. Se você é apaixonado por criar experiências incríveis, tem
      habilidades excepcionais e deseja fazer parte de uma equipe inovadora, seu lugar é conosco.
    </p>
    <p>
      Oferecemos um ambiente de trabalho dinâmico, onde a criatividade é incentivada e desafios são
      bem-vindos. Se você está pronto para se juntar a uma equipe de profissionais talentosos e
      comprometidos, explore as oportunidades disponíveis abaixo e envie-nos seu currículo.
    </p>

    <h3>Benefícios:</h3>
    <ul>
      <li>Ambiente de trabalho colaborativo e inspirador.</li>
      <li>Oportunidades de crescimento e desenvolvimento profissional.</li>
      <li>Projetos emocionantes e desafiadores.</li>
      <li>Cultura de empresa que valoriza a diversidade e a inclusão.</li>
    </ul>

    <h3>Oportunidades Disponíveis:</h3>
    <ul>
      <li>Desenvolvedor de Jogos</li>
      <li>Designer de UI/UX</li>
      <li>Analista de Dados</li>
      <li>Gerente de Projetos</li>
      <li>Marketing e Comunicação</li>
      <li>E muito mais!</li>
    </ul>

    <p>
      Se você está interessado em fazer parte da Game Tracker, envie seu currículo e uma carta de
      apresentação detalhando sua experiência e motivação para se juntar à nossa equipe. Estamos
      ansiosos para conhecê-lo e explorar como suas habilidades podem contribuir para o nosso
      sucesso.
    </p>

    <p>
      Junte-se a nós e ajude a criar os próximos jogos incríveis que cativarão o mundo dos gamers!
    </p>
  </div>
  <div class="back-button">
    <router-link to="/" class="btn-back">Voltar</router-link>
  </div>
</template>

<style scoped>
.container {
  max-width: 1204px;
  height: 90vh;
  margin: 0 auto;
  padding: 20px;
}
h2 {
  padding-bottom: 10px;
  text-align: center;
}
.back-button {
  margin-bottom: 50px;
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
@media (max-width: 768px) {
  .container {
    height: 125vh;
  }
}
</style>
