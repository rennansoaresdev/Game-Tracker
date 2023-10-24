<template>
  <div class="footer-container">
    <div class="footer">
      <svg
        class="logo"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.37476 2.44507L7.33502 0L-3.05176e-05 6.1192L2.03955 8.56427L9.37476 2.44507ZM31.6625 6.12013L24.3273 0.00093174L22.2876 2.446L29.6228 8.5652L31.6625 6.12013ZM15.8313 3.48595C7.9188 3.48595 1.50284 9.90191 1.50284 17.8144C1.50284 25.7269 7.9188 32.1429 15.8313 32.1429C23.7438 32.1429 30.1597 25.7269 30.1597 17.8144C30.1597 9.90191 23.7438 3.48595 15.8313 3.48595ZM4.68697 17.8144C4.68697 23.9597 9.686 28.9587 15.8313 28.9587C21.9766 28.9587 26.9757 23.9597 26.9757 17.8144C26.9757 11.6691 21.9766 6.67005 15.8313 6.67005C9.686 6.67005 4.68697 11.6691 4.68697 17.8144Z"
            fill="white"
          />
          <path
            d="M23.3967 20.7349L22.5354 14.6823C22.3142 13.1258 20.9788 11.9721 19.4064 11.9721H12.2477C10.6752 11.9721 9.33989 13.1258 9.11865 14.6823L8.25739 20.7349C8.08356 21.9517 9.02383 23.0342 10.2486 23.0342C10.7859 23.0342 11.2916 22.8209 11.6708 22.4416L13.4566 20.6638H18.1975L19.9753 22.4416C20.3546 22.8209 20.8682 23.0342 21.3976 23.0342C22.6302 23.0342 23.5705 21.9517 23.3967 20.7349ZM15.0369 16.713H13.4566V18.2933H12.6664V16.713H11.0861V15.9229H12.6664V14.3426H13.4566V15.9229H15.0369V16.713ZM18.1975 15.9229C17.7629 15.9229 17.4073 15.5673 17.4073 15.1327C17.4073 14.6982 17.7629 14.3426 18.1975 14.3426C18.6321 14.3426 18.9876 14.6982 18.9876 15.1327C18.9876 15.5673 18.6321 15.9229 18.1975 15.9229ZM19.7778 18.2933C19.3432 18.2933 18.9876 17.9378 18.9876 17.5032C18.9876 17.0686 19.3432 16.713 19.7778 16.713C20.2124 16.713 20.5679 17.0686 20.5679 17.5032C20.5679 17.9378 20.2124 18.2933 19.7778 18.2933Z"
            fill="white"
          />
        </g>
      </svg>

      <p class="p">
        © 2021, Game Tracker Inc. Todos os direitos reservados. Nulla facilisi. Etiam sagittis
        congue tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Suspendisse eu velit et ante luctus egestas. Aenean sed nisi tellus. Duis
        non ornare libero. Quisque suscipit maximus nisi, in gravida felis. Cras ornare mauris ac
        nisi congue, ut condimentum sem tincidunt. Phasellus semper tellus malesuada turpis gravida
        cursus. Duis nec eleifend nunc, vitae finibus elit. Aliquam eget diam vitae purus suscipit
        viverra.
      </p>

      <div class="links">
        <router-link to="/termos-de-servico" class="text-wrapper-3">Termos de Serviço</router-link>
        <router-link to="/politica-de-privacidade" class="text-wrapper-3">Política de Privacidade</router-link>
        <router-link to="/trabalhe-conosco" class="text-wrapper-3">Trabalhe conosco</router-link>
        <router-link to="/contato" class="text-wrapper-3">Contato</router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.footer-container {
  max-width: 100%;
  background: #0b1641;
}
.footer {
  max-width: 1204px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.footer .logo {
  display: block;
  margin: 0 auto;
  margin-top: 22px;
  width: 32px;
  height: 32px;
}
.footer .p {
  color: #ffffff;
  font-family: 'Roboto', Helvetica;
  font-size: 14px;
  font-weight: 300;
  line-height: 25.2px;
  margin-top: 20px;
}
.footer .links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
}
.footer .text-wrapper-3 {
  color: #fff;
  font-family: 'Roboto', Helvetica;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 25.2px;
  white-space: nowrap;
  width: fit-content;
  text-decoration: none;
}

@media (min-width: 768px) {
  .footer {
    text-align: left;
  }
  .footer .links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
