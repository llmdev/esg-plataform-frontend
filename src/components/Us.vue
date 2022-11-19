<script>
import { ref } from 'vue'

export default {
    mounted() {  
        
          }
}

const count = ref(0)


</script>
<template>
    <section class="sobre-nos__wrapper">
        <div class="sobre-nos">
            <div class="respiro">
                <hr width="72px">
            </div>
            <div class="sobre-nos__textos">
              <router-link to="/about">Sobre Nós</router-link>
                <h1>Ajudamos a natureza sorrir e sobreviver em todo lugar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.</p>
                <br>
                <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                    posuere.</p>
                <button>Baixe agora</button>
            </div>
        </div>
        <div class="sobre-nos__imagem">
            <img src="../assets/foto-sobre-nos.png" alt="Idosa caucasiana segurando um pé de alface">
        </div>
      </section>
</template>

<style>
.sobre-nos__wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2em 0;
}
.sobre-nos {
    display: flex;
    height: fit-content;
    width: 60%;
}
.sobre-nos__textos {
    display: flex;
    flex-direction: column;
}
.sobre-nos__textos h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
    margin-top: 0;
}
.sobre-nos__textos a {
    text-align: start;
}
.sobre-nos__textos h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
}

.sobre-nos__textos p {
    font-size: 16px;
    text-align: start;
}

.sobre-nos__textos button {
    background: #70C174;
    color: #FFF;
    border: none;
    width: 149px;
    height: 51px;
    font-size: 16px;
    border-radius: 4px;
    align-self: center;
}

.sobre-nos__imagem {
    display: flex;
    margin: 2em;
}

.sobre-nos__imagem img {
    width: 100%;
}
@media (max-width: 991px) {
    .sobre-nos {
        width: fit-content;
    }

    .sobre-nos__textos {
        width: fit-content;
        margin-right: 1em;
    }

    .sobre-nos__textos h1 {
        font-size: 36px;
    }
}
@media (max-width: 767px){
    .sobre-nos__imagem img{
        display: none;
    }
}
@media (max-width: 576px) {
    .sobre-nos__wrapper {
        padding: 2em 0;
        flex-direction: column;
        align-items: baseline;
    }

    .respiro hr {
        width: 2em;
    }

    .sobre-nos {
        width: 90%;
        margin: 0;
    }

    .sobre-nos__textos h1 {
        margin: 0 0 1em;
        width: fit-content;
    }

    .sobre-nos__textos p {
        font-size: 14px;
    }
}

</style>