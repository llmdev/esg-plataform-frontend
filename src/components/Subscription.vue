<script></script>

<template>
    <section class="planos__wrapper">
        <div class="planos">
            <h1>Faça parte da maior plataforma de cultivo do país</h1>
            <div class="planos__botoes">
                <button>
                    Entrar Gratuitamente
                </button>
                <button>
                    <router-link to="/selling">
                        Planos disponíveis
                    </router-link>
                </button>
            </div>
        </div>
    </section>
</template>

<style>
ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}
.planos__wrapper {
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 5em 1em 5em 0;
    align-items: center;
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
.planos__botoes button {
    background: #70C174;
    color: #FFF;
    border: none;
    width: 149px;
    height: 51px;
    font-size: 16px;
    border-radius: 4px;
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

@media (max-width: 911px){
    .noticias__header hr{
        display: none;
    }
}

@media (max-width: 767px) {
    .planos h1 {
        width: fit-content;
        padding: 0 1em;
    }
}

@media (max-width: 576px) {
    .planos h1 {
        font-size: 24px;
        width: 70%;
        margin-bottom: 1em;
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

}

</style>