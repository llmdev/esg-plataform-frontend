<script setup>
  import { ref } from 'vue'
  
  defineProps({
    msg: String
  })
  
  const count = ref(0)
</script>
<template>
  <section class="footer">
    <div class="logo">
        <img src="./assets/logo-branco.svg" alt="">
    </div>
    <div class="mapa">
        <ul>
            <li>Nosso time</li>
            <li>Sobre nós</li>
            <li>Time</li>
            <li>O que fazemos</li>
            <li>Suporte</li>
        </ul>
        <ul>
            <li>Mais</li>
            <li>Fórum</li>
            <li>Eventos</li>
            <li>Doações</li>
            <li>Blog</li>
        </ul>
        <ul>
            <li>Conecte-se</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkdin</li>
        </ul>
    </div>
    <div class="newsletter">
        <h2>Inscreva-se para receber atualizações</h2>
        <div class="input">
            <input type="text" placeholder="Seu melhor e-mail">
            <button>Inscreva-me</button>
        </div>
    </div>
  </section>
</template>
<style scoped>
  @media (max-width: 1199px) {
    .footer {
        margin: 1em 0 0;
        flex-direction: row;
    }

    .dashboard__wrapper {
        padding: 4em 2em;
    }
  }

  /* FOOTER */
.footer {
    background: #000;
    color: white;
    display: flex;
    justify-content: space-around;
    padding-bottom: 5em;
    align-items: flex-start;
    padding-top: 10em;
}
</style>
