<script setup>
</script>

<template>
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
</template>

<style>
.aplicativo__wrapper{
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 5em 1em 5em 0;
    align-items: center;
    background-color: #EFF7F2;
}
.aplicativo{
    display: flex;
    height: fit-content;
    width: 60%;
}
.aplicativo__textos h1{
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
    margin-bottom: 74px;
}
.aplicativo__textos p{
    font-size: 16px;
    text-align: start;
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
.aplicativo__textos h3 {
    margin: 0;
    text-align: start;
}

.aplicativo__textos p {
    margin-bottom: 32px;
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

.respiro {
    margin-right: 4px;
}

.aulas__imagem{
    display: flex;
}
/**/
@media (max-width: 991px) {
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
}
@media (max-width: 767px) {
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
}
@media (max-width: 576px) {
    .aplicativo__textos h1{
        font-size: 24px;
        width: 70%;
        margin-bottom: 1em;
    }
    .aplicativo__textos p {
        font-size: 12px;
    }
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
}
</style>