<script setup>
import Subscription from './Subscription.vue'
import Forum from './Forum.vue'
</script>

<template>
    <section class="sobre-nos__wrapper herous">
        <div class="sobre-nos">
            <div class="respiro">
                <hr width="72px">
            </div>
            <div class="sobre-nos__textos hotnews">
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
        <div class="noticias__thumb hotnews">
            <ul>
                <li>
                    <a href="">
                        <img src="../assets/thumbnail1.png" alt="">
                        <div class="hotnews__text">
                            <h2>Aprovado projeto que flexibiliza o controle e a aprovação de agrotóxicos no Brasil</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/thumbnail2.png" alt="">
                        <div class="hotnews__text">
                            <h2>O clima está mudando mais do que o esperado? </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/thumbnail3.png" alt="">
                        <div class="hotnews__text">
                            <h2>10 fatos sobre fazendas que você deveria saber</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
      </section>


      <Forum />
      <Subscription />

</template>

<style>
.noticias__thumb.hotnews{
    background-color: #fff
}
.sobre-nos__wrapper {
    background-color: #EFF7F2
}
.hotnews__text{
    width: 300px;
    padding: 0.5em;
}
.hotnews{
    margin-bottom: 2em;
}

.noticias__thumb.hotnews ul li a{
    display: flex;
    width: fit-content;
    padding: 1em;
    border-radius: 12px;
    margin-right: 1em;
}

.noticias__thumb.hotnews ul li{
    width: fit-content;
}
.noticias__thumb.hotnews{
    width: fit-content;
    border-radius: 12px;
    padding: 2em;
}
@media (max-width: 1200px) {
    .herous{
    flex-direction: column;
    }
}
</style>