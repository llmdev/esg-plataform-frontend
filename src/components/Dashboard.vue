<script></script>

<template>
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

</template>

<style>
*{
    list-style: none;   
}
ul, li {
    margin: 0;
    padding: 0;
}
.dashboard__wrapper{
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 5em 1em 5em 0;
    align-items: center;
}
.dashboard {
    display: flex;
    height: fit-content;
    width: 60%;
}
.dashboard__textos h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: start;
}
.dashboard__textos p {
    font-size: 16px;
    text-align: start;
}
.dashboard__imagem {
    display: flex;
}
.dashboard__imagem img {
    width: 100%;
}
.dashboard__wrapper {
    background-color: #000;
    color: #FFF;
}

.dashboard {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

@media (max-width: 991px) {
    .dashboard__textos__item{
        font-size: 12px;
    }
    .dashboard{
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        padding: 0 3em;
    }
    .dashboard__textos ul {
        gap: 0.5em;
        padding: 0;
    }
    .dashboard__imagem img{
        width: fit-content;
        margin: 2em auto;
    }
}
@media (max-width: 767px) {
    .dashboard__textos h1 {
            font-size: 24px;
            width: 70%;
            margin-bottom: 1em;
    }
    .dashboard__textos p {
        font-size: 12px;
    }
    .dashboard__imagem img {
        width: 100%;
    }
}
@media (max-width: 576px) {
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

    ul .dashboard__textos__item {
        margin: 0;
        font-size: 12px;
    }

    .dashboard__imagem img {
        width: 70%;
        margin: 0 auto;
    }
}

</style>