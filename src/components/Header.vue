<script>
import { ref } from 'vue'

export default {
    data() {
        return {
            isLogged: false,
            navOpen: false
        }
    },
    watch:{
        $route (){
            const user = JSON.parse(localStorage.getItem('user'));
            if(user) {
                this.isLogged = true
            }
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.isLogged = true
        }
    },
    methods: {
        logout() {
            this.isLogged = false
            localStorage.removeItem('user');
        }
    }
    
}

const count = ref(0)
const iconsvg = `<svg viewBox="0 0 100 80" width="40" height="40">   <rect width="100" height="20"></rect>   <rect y="30" width="100" height="20"></rect>   <rect y="60" width="100" height="20"></rect> </svg>`


</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <section class="header">
    <header>
        <div class="logo">
            <a href="/">
                <img src="../assets/logo.svg  " alt="Colheita do Bem">
            </a>
        </div>
        <nav class="header__menu__wrapper" >
            <ul class="header__menu" :v-show="navOpen" :class="{active:navOpen}" >
                <li class="header__menu__item" v-on:click="navOpen=!navOpen">
                    <router-link to="/"> Página Inicial</router-link>
                </li>
                <li class="header__menu__item" v-on:click="navOpen=!navOpen">
                    <router-link to="/about"> Notícias</router-link>
                </li>
                <li class="header__menu__item" v-on:click="navOpen=!navOpen">
                        <router-link to="/hotnews">Fórum</router-link>
                </li>
                <li v-if="isLogged" class="header__menu__item" v-on:click="navOpen=!navOpen">
                    <router-link to="/logged" > Meu Perfil</router-link>
                </li>
                <li class="header__menu__item log-in" v-on:click="navOpen=!navOpen">
                    <button class="logout-button" v-if="isLogged" @click="logout"> Sair</button>
                    <router-link to="/Login" v-if="!isLogged" > Login</router-link>
                </li>
            </ul>
        </nav>
        <nav class="hamburguer">
            <button v-if="!navOpen" v-on:click="navOpen=!navOpen" >
                <span class="material-symbols-outlined">
                    menu
                    </span>
                <i class="menuIcon material-icons">
                </i>
            </button>
            <button v-if="navOpen" v-on:click="navOpen=!navOpen">
                <span>
                    {{navOpen?'X':'ta dando certo'}}
                </span>
            </button>
        </nav>
    </header>
  </section>
</template>

<style scoped>

.hamburguer{
    display: none;
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.hamburguer span:last-child{
    font-family: 'Roboto';
    color: #FFF;
    font-size: 25px;
    text-shadow: 1px 1px 2px #fff;
}
header {
    display: flex;
    width: 90%;
    height: 67px;
    justify-content: space-between;
    align-items: center;

}

.logout-button {
    color: white;
    background-color: #000;
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

.header__menu__item.log-in a {
    display: flex;
    background-color: #000;
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
    .logout-button{
        font-size: 24px;
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
    .header__menu__item.log-in a{
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
        padding: 0;
    }
    .hamburguer button span:first-child{
        font-size: 45px;
    }
    .closeIcon {
        display: none;
        color: #FFF;
    }
    .active {
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
