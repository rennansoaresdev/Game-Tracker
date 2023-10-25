<template>
  <div class="container">
    <h2>Política de Privacidade</h2>
    <p>
      Nossa política de privacidade descreve como coletamos, usamos, divulgamos e protegemos suas
      informações pessoais. Entendemos a importância da privacidade e estamos comprometidos em
      proteger seus dados. Ao utilizar nosso site, você concorda com as práticas descritas nesta
      política.
    </p>

    <h3>Coleta de Informações</h3>
    <p>
      Coletamos informações pessoais, como nome e endereço de e-mail, quando você se inscreve em
      nossa newsletter ou preenche um formulário em nosso site. Também podemos coletar informações
      de forma automática, como endereços IP, cookies e informações do navegador.
    </p>

    <h3>Uso das Informações</h3>
    <p>
      Utilizamos suas informações para personalizar sua experiência no site, enviar boletins
      informativos, responder a consultas e fornecer informações sobre nossos produtos e serviços.
    </p>

    <h3>Compartilhamento de Informações</h3>
    <p>
      Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para
      cumprir a lei ou proteger nossos direitos, privacidade, segurança ou propriedade.
    </p>

    <h3>Cookies</h3>
    <p>
      Utilizamos cookies para melhorar sua experiência no site. Você pode configurar seu navegador
      para recusar cookies, mas algumas partes do site podem não funcionar corretamente.
    </p>

    <h3>Segurança</h3>
    <p>
      Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não
      autorizado ou divulgação.
    </p>

    <h3>Alterações na Política de Privacidade</h3>
    <p>
      Reservamo-nos o direito de modificar esta política a qualquer momento. Recomendamos revisar
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
  height: 100vh;
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
    height: 145vh;
  }
}
</style>
