<template>
  <div class="container">
    <h2>Termos de Serviço</h2>
    <p>
      Estes termos de serviço descrevem os direitos e responsabilidades ao usar nosso site. Ao
      acessar ou usar nosso site, você concorda com esses termos.
    </p>

    <h3>Uso do Site</h3>
    <p>
      Você concorda em usar este site apenas para fins legais e de acordo com estes termos. Você não
      pode violar as leis aplicáveis ou os direitos de terceiros.
    </p>

    <h3>Propriedade Intelectual</h3>
    <p>
      O conteúdo deste site, incluindo texto, gráficos, logotipos e outros materiais, é protegido
      por direitos autorais e outras leis de propriedade intelectual. Você concorda em respeitar
      esses direitos e não reproduzir, distribuir ou criar trabalhos derivados do conteúdo sem
      permissão.
    </p>

    <h3>Limitações de Responsabilidade</h3>
    <p>
      Este site é fornecido "no estado em que se encontra" e não fazemos garantias quanto à sua
      precisão ou disponibilidade. Não somos responsáveis por danos decorrentes do uso ou
      impossibilidade de uso deste site.
    </p>

    <h3>Links para Outros Sites</h3>
    <p>
      Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo
      desses sites ou por qualquer interação entre você e esses sites.
    </p>

    <h3>Alterações nos Termos</h3>
    <p>
      Reservamo-nos o direito de modificar estes termos a qualquer momento. Recomendamos revisar
      periodicamente para estar ciente das atualizações.
    </p>
  </div>
  <div class="back-button">
    <router-link to="/" class="btn-back">Voltar</router-link>
  </div>
</template>

<style scoped>
.container {
  max-width: 1204px;
  height: 85vh;
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
    height: 115vh;
  }
}
</style>
