<template>
  <div class="container">
    <h2>Entre em Contato Conosco</h2>
    <p>
      Estamos aqui para responder a todas as suas perguntas e fornecer assistência. Se você tiver
      alguma dúvida, comentário ou precisa de suporte, não hesite em nos contatar. Você pode usar o
      formulário de contato abaixo ou escolher uma das opções de contato listadas.
    </p>

    <div class="formulario-contato">
      <h3>Formulário de Contato</h3>
      <form>
        <div class="campo">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div class="campo">
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="campo">
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>

    <div class="informacoes-contato">
      <h3>Informações de Contato</h3>
      <p><strong>Endereço:</strong> Rua da Empresa, 123 - Cidade, Estado</p>
      <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
      <p><strong>E-mail:</strong> contato@game-tracker.com</p>
    </div>
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
.formulario-contato {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.campo {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  max-width: 300px;
}
button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  color: #fff;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 8px;
  background: #c70160;
}
.informacoes-contato {
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
    height: 95vh;
  }
}
</style>
