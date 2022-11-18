<script>
</script>

<template>
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

<style>
.eventos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 5em 0;
}

.eventos h1 {
    font-size: 40px;
}

.eventos hr {
    height: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
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
    width: 50%;
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

.card__data{
    margin: 1em 0;
    display: flex;
    flex-direction: column;
}

.card__data__dia {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
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
    margin: 0;
    text-align: start;
}

.embreve hr {
    margin: 0;
}

@media (max-width: 991px) {
    .card__evento h2{
        font-size: 24px;
    }
    .eventos hr{
        display: none;
    }
    .evento__cards__item{
        align-items: center;
    }
    .card__data__dia{
        margin: 0;
    }
    .card__evento p {
        margin: 0.5em 0;
    }
    .card__evento h2 {
        margin: 0;
        text-align: start;
    }
}

@media (max-width: 767px) {
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
    .card__evento{
        margin: 0 0.5em;
    }
    .evento__cards__item{
        padding: 1em;
    }
    .embreve p{
        margin: 0.5em 0;
    }
    .embreve h2{
        margin: 0;
        text-align: start;
    }
}

@media (max-width: 576px) {
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
}
</style>