<script>
import { ref } from 'vue'

export default {
    mounted() {        }
}

const count = ref(0)


</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <section class="header">
    <header>
        <div class="logo">
            <a href="/Main">
                <img src="../assets/logo.svg  " alt="Colheita do Bem">
            </a>
        </div>
        <nav class="header__menu__wrapper">
            <ul class="header__menu">
                <li class="header__menu__item">
                    <router-link to="/"> Página Inicial</router-link>

                    <!-- <a href="/about">
                        Página Inicial
                    </a> -->
                </li>
                <li class="header__menu__item">
                    <router-link to="/about"> Notícias</router-link>

                    <!-- <a href="">
                        Notícias
                    </a> -->
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
            <button :on-click="toggleMenu"  >
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
.header__menu__item a{
    color: #000;
}

.header__menu__item.login a {
    display: flex;
    background-color: black;
    color: #FFF;
    margin: 5px;
    border-radius: 5px;
    width: 104px;
    height: 43px;
    justify-content: center;
    align-items: center;
}
@media (max-width: 991px) {
    .header .logo {
        width: 120px;
    }
}
@media (max-width: 767px) {
    .header__menu__wrapper{
        display: block;
    }
    .header__menu__item {
        font-size: 12px;
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
}
@media (max-width: 576px) {
    .hamburguer {
        display: block;
    }
}

</style>
