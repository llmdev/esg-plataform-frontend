<script setup>
  import { ref } from 'vue'
  
  defineProps({
    msg: String
  })
  
 
  const count = ref(0)
</script>
  
  <template>
    <!-- <h1>{{ msg }}</h1> -->
    <section class="sobre-nos__wrapper">
      <div class="sobre-nos">
          <div class="respiro">
              <hr width="72px">
          </div>
          <div class="sobre-nos__textos">
              <a href="./pages/about.html">
                  <h3>SOBRE NÓS</h3>
              </a>
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
    <section class="aplicativo__wrapper">
      <div class="aplicativo">
          <div class="respiro">
              <hr width="72px">
          </div>
          <div class="aplicativo__textos">
              <h3>APLICATIVO</h3>
              <h1>Alimento para todos</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique.</p>
              <ul>
                  <li><img src="../assets/plant-icon.svg" alt="">
                      <div class="aplicativo__textos__item">
                          <h4>Alimentos para sua mente</h4><span>Vídeos, podcast, matérias e muito mais para capacitar
                              você, para poder transformar a sociedade.</span>
                      </div>
                  </li>
                  <li><img src="../assets/plant-icon.svg" alt="">
                      <div class="aplicativo__textos__item">
                          <h4>Escambo de Legumes</h4><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Suspendisse varius enim in eros.</span>
                      </div>
                  </li>
                  <li><img src="../assets/water-icon.svg" alt="">
                      <div class="aplicativo__textos__item">
                          <h4>Conhecimento Infinito</h4><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Suspendisse varius enim in eros.</span>
                      </div>
                  </li>
                  <li><img src="../assets/water-icon.svg" alt="">
                      <div class="aplicativo__textos__item">
                          <h4>Cuidado com a sociedade</h4><span>Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                              Suspendisse varius enim in eros.</span>
                      </div>
                  </li>
              </ul>
          </div>

      </div>
      <div class="aplicativo__imagem">
          <img src="../assets/fotos_aplicativo.png" alt="Folhas verde escuras com gotas de água">
      </div>
    </section>
    <section class="aulas__wrapper">
      <div class="aulas">
          <div class="respiro">
              <hr width="72px">
          </div>
          <div class="aulas__textos">
              <h3>NOVAS AULAS DISPONÍVEIS</h3>
              <h1>Novos conteúdos disponíveis para a sua horta não parar de crescer</h1>

              <ul>
                  <li>
                      <div class="aulas__textos__item aula1">
                          <h4>Missão: mantendo as plantas vivas</h4>
                          <p>Conheça todos os tipos de plantas, como podemos cuidar de cada uma e entender as suas
                              particularidades</p>
                          <button>Saiba mais</button>
                      </div>
                  </li>
                  <li>
                      <div class="aulas__textos__item aula2">
                          <h4>Apartamentos e plantas, como fazer dar certo</h4>
                          <p>Dá pra ter seu jardim dentro do seu apartamento sim, é só escolher as plantas certas e o
                              lugar certo</p>
                          <button>Saiba mais</button>
                      </div>
                  </li>
                  <li>
                      <div class="aulas__textos__item aula3">
                          <h4>Conheça as plantas selvagens e seus tipos</h4>
                          <p>Conheça todos os tipos de plantas, como podemos cuidar de cada uma e entender as suas
                              particularidades</p>
                          <button>Saiba mais</button>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </section>
    <section class="dashboard__wrapper">
      <div class="dashboard">
          <div class="dashboard__textos">
              <h1>Dashboard Premium</h1>
              <p>Dashboard exclusivo para assinantes com mega vantagens e ferramentas que facilitam muito a vida do
                  agricultor.</p>
              <ul>
                  <li class="dashboard__textos__item">
                      <div class="dashboard___item__spam spam1">
                      </div> 40% umidificado
                  </li>
                  <li class="dashboard__textos__item">
                      <div class="dashboard___item__spam spam2">
                      </div> 10% pH do solo
                  </li>
                  <li class="dashboard__textos__item">
                      <div class="dashboard___item__spam spam3">
                      </div> 35% probióticos
                  </li>
                  <li class="dashboard__textos__item">
                      <div class="dashboard___item__spam spam4">
                      </div> 5% histórico de pragas
                  </li>
                  <li class="dashboard__textos__item">
                      <div class="dashboard___item__spam spam5">
                      </div> 10% falta de NPK
                  </li>
              </ul>
          </div>
          <div class="dashboard__imagem">
              <img src="../assets/Chart.svg" alt="">
          </div>
      </div>
    </section>
    <section class="planos__wrapper">
      <div class="planos">
          <h1>Faça parte da maior plataforma de cultivo do país</h1>
          <div class="planos__botoes">
              <button>
                  Entrar Gratuitamente
              </button>
              <button>
                  Planos disponíveis
              </button>
          </div>
      </div>
  </section>
  <section class="noticias__wrapper">
      <div class="noticias__header">
          <h1>
              Notícias do momento
          </h1>
          <hr width="60%" color="#E5E5E5">
      </div>
      <div class="noticias__thumb">
          <ul>
              <li>
                  <a href="">
                      <img src="../assets/thumbnail1.png" alt="">
                      <h2>Aprovado projeto que flexibiliza o controle e a aprovação de agrotóxicos no Brasil</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="../assets/thumbnail2.png" alt="">
                      <h2>O clima está mudando mais do que o esperado? </h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="../assets/thumbnail3.png" alt="">
                      <h2>10 fatos sobre fazendas que você deveria saber</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                  </a>
              </li>
              <li>
                  <a href="">
                      <img src="../assets/thumbnail4.png" alt="">
                      <h2>Temos água disponível para a próxima geração?</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                  </a>
              </li>
          </ul>
      </div>
  </section>
  <section class="eventos__wrapper">
      <div class="eventos">
          <h1>
              Próximos eventos
          </h1>
          <hr width="60%" color="#E5E5E5">
      </div>
      <div class="eventos__cards">
          <div class="evento__cards__item">
              <div class="card__data">
                  <p class="card__data__dia">20</p>
                  <p class="card__data__mes">ABR</p>
              </div>
              <div class="card__evento">
                  <div class="embreve">
                      <p>EM BREVE</p>
                      <hr width="44px" color="#000">
                  </div>
                  <h2>Melhores formas de começar sua horta caseira</h2>
              </div>
              <div class="card__botao">
                  <img src="../assets/arrow-button.svg" alt="">
              </div>
          </div>
          <div class="evento__cards__item">
              <div class="card__data">
                  <p class="card__data__dia">20</p>
                  <p class="card__data__mes">ABR</p>
              </div>
              <div class="card__evento">
                  <div class="embreve">
                      <p>EM BREVE</p>
                      <hr width="44px" color="#000">
                  </div>
                  <h2>30 dicas importantes para manter sua horta viva</h2>
              </div>
              <div class="card__botao">
                  <img src="../assets/arrow-button.svg" alt="">
              </div>
          </div>
      </div>
    </section>
  </template>
  
  <style scoped>
 ul{
    margin: 0;
    padding: 0;
 }

/* SOBRE NÓS  e APLICATIVO*/
.sobre-nos__wrapper,
.aplicativo__wrapper,
.aulas__wrapper,
.dashboard__wrapper,
.planos__wrapper {
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 5em 1em 5em 0;
    align-items: center;
}

.sobre-nos,
.aplicativo,
.aulas,
.dashboard {
    display: flex;
    height: fit-content;
    width: 60%;
}

.sobre-nos__textos h3,
.aplicativo__textos h3,
.aulas__textos h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
    margin-top: 0;
}

.sobre-nos__textos h1,
.aplicativo__textos h1,
.aulas__textos h1,
.dashboard__textos h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
}

.sobre-nos__textos p,
.aplicativo__textos p,
.aulas__textos p,
.dashboard__textos p {
    font-size: 16px;
    text-align: start;
}

.sobre-nos__textos button,
.aulas__textos button,
.planos__botoes button {
    background: #70C174;
    color: #FFF;
    border: none;
    width: 149px;
    height: 51px;
    font-size: 16px;
    border-radius: 4px;
    margin-top: 48px;
}

.sobre-nos__imagem,
.aplicativo__imagem,
.aulas__imagem,
.dashboard__imagem {
    display: flex;
}

.sobre-nos__imagem img,
.aplicativo__imagem img,
.dashboard__imagem img {
    width: 100%;
}


.aplicativo__textos ul {
    border-left: 2px solid grey;
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding-left: 10px;
}

.aplicativo__textos img {
    color: #FFF;
    background-color: #83D187;
    height: 18px;
    padding: 5px;
    border-radius: 4px;
}

.aplicativo__textos li {
    display: flex;
    gap: 10px;
    list-style: none;
}

.aplicativo__textos__item h4 {
    font-weight: 700;
    font-size: 24px;
    text-align: start;
    margin: 0;
}

.aplicativo__textos__item span {
    font-size: 16px;
    text-align: start;
}

.aplicativo__textos h1 {
    margin-bottom: 74px;
}

.aplicativo__textos p {
    margin-bottom: 32px;

}

.respiro {
    margin-right: 4px;
}

.aulas__textos ul {
    display: flex;
    gap: 10px;
}

.aulas__textos li {
    color: #FFF;
}

.aulas__textos h1 {
    width: 60%;
}

.aula1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)), url(../assets/aula1.png);
}

.aula2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)), url(../assets/aula2.png);
}

.aula3 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)), url(../assets/aula3.png);
}

.aulas {
    width: 90%;
}

.aulas__textos__item {
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 421px;
    padding: 6em 4em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.aulas__textos__item h4 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
}

.aulas__textos__item p {
    font-size: 16px;
}

/* DASHBOARD */
.dashboard__wrapper {
    background-color: #000;
    color: #FFF;
    justify-content: space-between;
}

.dashboard {
    justify-content: space-around;
    width: 100%;
}

.dashboard__textos {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.dashboard__textos p {
    width: 80%;
    color: grey;
}

.dashboard__textos ul {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    gap: 2em;
}

.dashboard__textos li {
    display: flex;
    align-items: center;
    margin: 1em 0;
}

.dashboard___item__spam {
    width: 16px;
    height: 16px;
    border-radius: 5px;
}

.spam1 {
    background-color: #70C174;
}

.spam2 {
    background-color: #AC94F1;
}

.spam3 {
    background-color: #F9CF64;
}

.spam4 {
    background-color: #F38FBF;
}

.spam5 {
    background-color: #FFF0CA;
    ;
}

/* PLANOS */
.planos__wrapper {
    display: flex;
}

.planos {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)), url('../assets/foto_planos.png');
    width: 1280px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    width: 90%;
    background-size: cover;
    background-repeat: no-repeat;
}

.planos h1 {
    font-size: 48px;
    color: #FFF;
    width: 50%;
    text-align: center;
}

.planos__botoes {
    display: flex;
    gap: 2em;
}

.planos__botoes button {
    font-weight: 700;
    width: 200px;
    height: 51px;
}

.planos__botoes button:last-child {
    background-color: #FFF;
    color: #000;
    width: 200px;
    height: 51px;
}

.planos__botoes button {
    font-weight: 700;
    width: 200px;
    height: 51px;
}

/* NOTICIAS */
.noticias__header,
.eventos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 5em 0;
}

.noticias__header h1,
.eventos h1 {
    font-size: 40px;
}

.noticias__header hr,
.eventos hr {
    height: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.noticias__thumb ul {
    display: flex;
    gap: 2em;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
}

.noticias__thumb ul li {
    width: 302px;
}

.noticias__thumb ul li a, .sobre-nos__textos a, .header__menu a{
    text-decoration: none;
    color: #000;
}
.header__menu a{
    display: flex;
}

.noticias__thumb ul li a h2 {
    font-weight: 700;
    font-size: 18px;
    margin: 0.5em 0;
}

/* EVENTOS */
.eventos__wrapper {
    margin-bottom: 5em;
}

.eventos__cards {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
    margin: 1em;
}

.evento__cards__item {
    background-color: #BEF3C0;
    width: 620px;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 2em;
    gap: 2em;
    border-radius: 12px;
}

.card__botao {
    align-items: center;
    display: flex;
}

.card__data__dia {
    font-size: 48px;
    font-weight: 700;
}

.card__data__mes {
    font-size: 16px;
}

.card__evento .embreve {
    display: flex;
    align-items: center;
    gap: 10px;
}

.card__evento .embreve p {
    font-size: 16px;
}

.card__evento h2 {
    font-size: 28px;
    font-weight: 700;
}

.embreve hr {
    margin: 0;
}



.mapa {
    display: flex;
    gap: 5em;
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
    font-size: 48px;
}

.newsletter .input {
    width: 100%;
    height: 64px;
    display: flex;
    margin: 3em 0;
}

.newsletter input {
    width: 350px;
    background: none;
    padding: 0 2em;
    border-radius: 12px 0 0 12px;
    font-size: 16px;
}

.newsletter button {
    width: 150px;
    border-radius: 0 12px 12px 0;
    font-size: 16px;
    font-weight: 700;
}

/* notebook */
@media (max-width: 991px) {
    .sobre-nos {
        width: 100%;
    }

    .sobre-nos__textos {
        width: fit-content;
        margin-right: 1em;
    }

    /* H1 */
    .sobre-nos__textos h1 {
        font-size: 36px;
    }

    .header .logo {
        width: 120px;
    }

    img {
        width: 100%;
    }
    .card__botao img {
        width: 40px;
    }
    .card__evento h2{
        font-size: 24px;
    }
    .play_video img {
        width: fit-content;
    }

    .hero h1 {
        width: fit-content;
    }

    .hero__line hr {
        height: 1px;
        margin: 0.5em;
        width: 100%;
    }

    .aulas__textos ul {
        width: fit-content;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
    }

    .aulas__textos__item {
        padding: 1.5em 1em;
        width: 280px;
        height: 300px;
    }

    .aplicativo__textos ul li img {
        width: fit-content;
    }

    .aplicativo__textos h1 {
        font-size: 36px;
        width: fit-content;
        margin: 0 0 1em;
    }

    .dashboard__textos__item,
    .header__menu__item {
        font-size: 12px;
    }

    .aulas__textos h1 {
        font-size: 36px;
        width: fit-content;
    }
.dashboard{
    justify-content: flex-start;
}
    .dashboard__textos ul {
        gap: 0.5em;
        padding: 0;
    }
    .dashboard__imagem img{
        width: fit-content;
    }

    .aulas {
        width: 100%;
    }

    .eventos hr,
    .noticias__header hr {
        width: 100px;
    }

    .newsletter h2 {
        font-size: 28px;
    }

    .input input {
        width: 130px;
    }

}

/* tablet */
@media (max-width: 767px) {
  
    .header__menu__wrapper{
        display: block;
    }
    .header__menu__item {
        font-size: 12px;
    }

    .sobre-nos__imagem {
        display: none;
    }

    .header__menu {
        position: fixed;
        transform: translateY(-102%);
        transition: transform 0.2s;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background-color:rgba(0, 0, 0, 0.9);
        padding-top: 4rem;
    }
    .header__menu__item a{
        color: #FFF;
        font-size: 24px;
    }
    .header__menu__item.login a{
        background: none;
    }

    .hamburguer {
        display: block;
        cursor: pointer;
        z-index: 2;
    }

    .hamburguer button {
        border: none;
        background: none;
    }

    .closeIcon {
        display: none;
        color: #FFF;
    }

    .showMenu {
        transform: translateY(0);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .aulas__textos ul {
        flex-direction: column;
    }
    .aulas__textos ul li {
        width: fit-content;
    }

    .footer {
        padding: 1em;
        flex-direction: column;
        gap: 1em;
    }

    .newsletter {
        width: 100%;
    }

    .newsletter h2 {
        font-size: 30px;
    }

    .aplicativo__wrapper {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)), url('../assets/fotos_aplicativo.png');
        padding: 1em;
        background-repeat: no-repeat;
        background-size: cover;
        color: #FFF;
        justify-content: flex-start;
    }
    .aplicativo{
        width: fit-content;
    }

    .aplicativo__imagem img {
        display: none;
    }
    .evento__cards__item {
        width: fit-content;
        height: fit-content;
        margin: 1em;
        gap: 0.5em;
        margin: 0.5em;
    }
    .card__evento h2 {
        font-size: 20px;
}

}

/* celular */
@media (max-width: 576px) {
    .hamburguer {
        display: block;
    }

    .hero__wrapper {
        padding: 4em 1em 2em 1em;
        height: 400px;
    }

    .hero h1,
    .sobre-nos__textos h1,
    .aplicativo__textos h1,
    .aulas__textos h1,
    .dashboard__textos h1,
    .planos h1,
    .noticias__header h1,
    .eventos h1 {
        font-size: 24px;
        width: 70%;
        margin-bottom: 1em;
    }

    .hero h1 {
        margin-bottom: 3em;
        width: 80%;
    }

    .hero__buttons {
        flex-direction: column;
        width: fit-content;
    }

    .hero__line {
        align-items: center;
    }

    .hero__line p,
    .aplicativo__textos p,
    .aulas__textos p,
    .dashboard__textos p {
        font-size: 12px;
    }

    /* SOBRE NOS*/
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

    /* APLICATIVO */
    .aplicativo {
        width: fit-content;
        color: #FFF;
    }

    .aplicativo .respiro {
        display: none;
    }

    .aplicativo__textos__item h4,
    .aulas__textos__item h4 {
        font-size: 18px;
    }

    .aplicativo__textos__item span,
    .aulas__textos__item p {
        font-size: 14px;
    }

    /* AULAS */
    .aulas__wrapper {
        margin: 0;
        padding: 1em 0;
        justify-content: flex-start;
    }

    .aulas__textos__item {
        padding: 1em;
        height: fit-content;
        align-items: center;
    }

    .aulas__textos__item button {
        margin: 0;
        width: fit-content;
        height: fit-content;
        padding: 0.5em 1em;

    }

    /* DASHBOARD */
    .dashboard,
    .dashboard__textos ul {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .dashboard__wrapper {
        padding: 3em 0;
    }

    .dashboard__textos {
        padding: 0 1em;
    }

    .dashboard__textos ul {
        gap: 0.5em;
    }

    .dashboard__textos__item {
        margin: 0;
        font-size: 12px;
    }

    .dashboard__imagem {
        width: 70%;
    }

    .planos__wrapper {
        padding: 1em 0;
    }

    .planos {
        height: fit-content;
        padding: 1.5em 0;
        width: 300px;
    }

    .planos__botoes {
        flex-direction: column;
        gap: 0
    }

    .planos__botoes button {
        margin-top: 1em;
    }

    /* NOTICIAS */
    .noticias__header {
        margin: 1em;
    }

    .noticias__header h1 {
        margin: 0;
    }

    .noticias__header hr {
        width: 44px;
    }

    .noticias__thumb {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    /* EVENTOS */
    .eventos {
        margin: 2em 1em 0;
    }

    .eventos hr {
        width: 150px;
    }
    .eventos h1{
        margin-bottom:0 ;
    }

    .eventos__cards {
        flex-direction: column;
        align-items: center;
    }

    .card__data__dia {
        font-size: 28px;
    }

    .card__evento h2 {
        font-size: 18px;
    }

    /* FOOTER */
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

    .card__evento {
        width: 150px;
    }

    .embreve hr {
        width: 30px;
    }

    .card__botao {
        width: 40px;
    }
}

  </style>
  