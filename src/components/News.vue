<script ></script>

<template>
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
</template>

<style>
.noticias__header{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 5em 0;
}

.noticias__header h1{
    font-size: 40px;
}
.noticias__header hr{
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

.noticias__thumb ul li a, .sobre-nos__textos a {
    text-decoration: none;
    color: #000;
}

.noticias__thumb ul li a h2 {
    font-weight: 700;
    font-size: 18px;
    margin: 0.5em 0;
}

@media (max-width: 991px) {
    .noticias__header hr {
        display: none;
    }
}
@media (max-width: 576px) {
    .noticias__header h1{
        font-size: 24px;
        width: 70%;
        margin-bottom: 1em;
    }
    .noticias__header {
        margin: 1em 0;
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
}
</style>