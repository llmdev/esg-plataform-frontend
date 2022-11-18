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
        <img src="../assets/logo-branco.svg" alt="">
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

ul{
    margin: 0;
    padding: 0;
}
li{list-style: none;}
  @media (max-width: 1199px) {
    .footer {
        margin: 1em 0 0;
        flex-direction: row;
    }

    .dashboard__wrapper {
        padding: 4em 2em;
    }

  }
  @media (max-width: 767px) {
    .footer {
        padding: 1em 0;
        flex-direction: column;
        gap: 1em;
    }

    .newsletter {
        width: 100%;
    }

    .newsletter h2 {
        font-size: 30px;
    }

}
  @media (max-width: 576px) {
  .mapa {
        gap: 15%;
    }

    .mapa ul li {
        font-size: 12px
    }

    .newsletter h2 {
        width: fit-content;
        font-size: 24px;
    }

    .newsletter .input {
        height: 45px;
        margin: 1em 0;
    }

    .input input {
        padding: 0 1em;
        font-size: 14px;
        width: 120px;
    }

    .input button {
        width: 120px;
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

.mapa {
    display: flex;
    gap: 1em;
    color: darkgrey;
}

.mapa ul li:first-child {
    color: #FFF;
}

.mapa ul li {
    margin-bottom: 2em;
    width: 80px;
}

.newsletter {
    width: 35%;
}

.newsletter h2 {
    font-size: 22px;
    width: fit-content;
}

.newsletter .input {
    width: 100%;
    height: 64px;
    display: flex;
    margin: 3em 0;
    
}

.newsletter input {
    width: fit-content;
    padding: 0 0 0 1em;
    background: none;
    border-radius: 12px 0 0 12px;
    font-size: 16px;
    justify-content: center;
}

.newsletter button {
    width: 150px;
    border-radius: 0 12px 12px 0;
    font-size: 16px;
    font-weight: 700;
}
</style>
