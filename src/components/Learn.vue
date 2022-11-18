<script setup>
  import { ref } from 'vue'
  
  defineProps({
    msg: String
  })
  
 
  const count = ref(0)
</script>

<template>
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
</template>

<style>
*{
    list-style: none;   
}
ul, li {
    margin: 0;
    padding: 0;
}
.aulas__wrapper{
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 5em 1em 5em 0;
    align-items: center;
}
.aulas {
    display: flex;
    height: fit-content;
    width: 60%;
}
.aulas__textos h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
    margin-top: 0;
}
.aulas__textos h1 {
    width: 60%;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
}

.aulas__textos p {
    font-size: 16px;
    text-align: start;
}
.aulas__textos button {
    background: #70C174;
    color: #FFF;
    border: none;
    width: 149px;
    height: 51px;
    font-size: 16px;
    border-radius: 4px;
    margin-top: 48px;
}

.aulas__textos ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.aulas__textos li {
    color: #FFF;
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
    width:fit-content;
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
    max-width: 320px;

}

.aulas__textos__item h4 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
}

.aulas__textos__item p {
    font-size: 16px;
}

@media (max-width: 991px){
    .aulas__textos__item{

        height: fit-content;
    }
    .aulas__textos ul{
        justify-content: center;
    }.aulas__textos h1 {
        width: fit-content
    }
}

@media (max-width: 576px) {
    .aulas__textos{
        margin-right: 1em;
    }
    .aulas__textos h1{
        font-size: 24px;
        margin-bottom: 1em;
    }
    .aulas__textos p{
        font-size: 12px;
    }
    .aulas__textos__item h4{
        font-size: 18px;
    }
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
}
</style>