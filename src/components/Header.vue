<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <section class="header">
    <header>
        <div class="logo">
            <a href="./index.html">
                <img src="../assets/logo.svg  " alt="Colheita do Bem">
            </a>
        </div>
        <nav class="header__menu__wrapper">
            <ul class="header__menu">
                <li class="header__menu__item">
                    <a href="#">
                        Página Inicial
                    </a>
                </li>
                <li class="header__menu__item">
                    <a href="">
                        Notícias
                    </a>
                </li>
                <li class="header__menu__item">
                    <a href="">
                        Conteúdo
                    </a>
                </li>
                <li class="header__menu__item">
                    <a href="">
                        Fórum
                    </a>
                </li>
                <li class="header__menu__item">
                    <a href="">
                        Parceiros
                    </a>
                </li>
                <li class="header__menu__item login">
                    <a href="">
                        Log In
                    </a>
                </li>
            </ul>
        </nav>
        <nav class="hamburguer">
            <button>
                <i class="menuIcon material-icons">menu</i>
                <i class="closeIcon material-icons">close</i>
            </button>
        </nav>
    </header>
  </section>
</template>

<style scoped>

.hamburguer,
.parallax_sobre-nos {
    display: none;
}

header {
    display: flex;
    width: 90%;
    height: 67px;
    justify-content: space-between;
    align-items: center;

}

.header {
    display: flex;
    justify-content: center;
}

.header__menu {
    display: flex;
    gap: 40px;
}

.header__menu__item {
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
}

.header__menu__item.login a {
    background-color: black;
    color: #FFF;
    margin: 5px;
    border-radius: 5px;
    width: 104px;
    height: 43px;
    justify-content: center;
    align-items: center;

}

</style>
