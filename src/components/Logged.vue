<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {},
            points: 0,
            topics: 0,
            comments: 0
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.user = user
        }

        axios.get('https://esg-api-nu.vercel.app/user',{headers: { Authorization: `Bearer ${this.user.token}` }})
        .then(({ data }) => {
            this.points = data.points
            this.topics = data.topics
            this.comments = data.comments
        })
    }
}
</script>
<template>
    <section class="profile__wrapper">
        <div class="profile__card__wrapper">
            <img class="profile__card__image" src="../assets/profile.jpg" alt="">
            <div class="profile__card__nickname">
                @{{ user.nickname}}
            </div>
            <div class="profile__card__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</p>
            </div>
            <div class="profile__card__score__wrapper">
                <ul class="profile__card__score">
                    <li class="profile__card__score__item">{{ points }}<span>Pontos</span></li>
                    <li class="profile__card__score__item">{{ topics }}<span>Tópicos</span></li>
                    <li class="profile__card__score__item">{{ comments }}<span>Comentários</span></li>
                    <li class="profile__card__score__item">0<span>Cursos</span></li>
                </ul>
            </div>
        </div>
        <div class="profile__card__board">
            <!-- APRENDA -->
            <div class="profile__learn__wrapper">
                <div class="profile__learn">
                    <h1 class="profile__learn__title">Novos Cursos Disponíveis</h1>
                    <ul class="profile__learn__options">
                        <li class="profile__learn__item item1">
                            <div class="item__wrapper">
                                <p>
                                    Jardim de suculentas e cactos
                                </p>
                                <img src="../assets/play2.svg" alt="">
                            </div>
                        </li>
                        <li class="profile__learn__item item2">
                            <div class="item__wrapper">
                            <p>
                                Horta Orgânica Caseira 
                            </p>
                            <img src="../assets/play2.svg" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- TÓPICOS -->
            <div class="profile__topics__wrapper">
                <section class="meu_eventos__wrapper">
                    <div class="meu_eventos">
                        <h1>
                            Próximos eventos
                        </h1>
                    </div>
                    <div class="meu_eventos__cards">
                        <div class="meu_evento__cards__item">
                            <div class="textos">
                                <div class="meu_card__data">
                                    <p class="meu_card__data__dia">20 ABR</p>
                                </div>
                                <div class="meu_card__evento">
                                    <h2>Melhores formas de começar sua horta caseira</h2>
                                </div>
                            </div>
                            <div class="meu_card__botao">
                                <img src="../assets/arrow-button.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="meu_eventos__cards">
                        <div class="meu_evento__cards__item">
                            <div class="textos">
                                <div class="meu_card__data">
                                    <p class="meu_card__data__dia">20 ABR</p>
                                </div>
                                <div class="meu_card__evento">
                                    <h2>Melhores formas de começar sua horta caseira</h2>
                                </div>
                            </div>
                            <div class="meu_card__botao">
                                <img src="../assets/arrow-button.svg" alt="">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>
<style>
.profile__wrapper {
    display: flex;
    align-items: start;
    gap: 2em;
    margin: 0 2em;
}
.profile__card__wrapper{
    background-color: #000;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;
    border-radius: 12px;
    padding: 2em;
    width: 40%;
    height: fit-content;
}
.textos{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
}
.profile__card__image{
    max-width: 300px;
    border-radius: 5px;
}
.profile__card__description p {
    text-align: center;
}
.profile__card__score{
    display: flex;
    gap: 1.2em;
}
.profile__card__score__item{
    display: flex;
    flex-direction: column;
    font-size: 24px;
    align-items: center;
}
.profile__card__score__item span{
    font-size: 12px;
        color: grey;
}

.profile__card__nickname{
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
}
.profile__card__description{
    line-height: 160%;
    color: grey;    letter-spacing: 2px;
}


/* APRENDA/CURSOS */
.profile__card__board{
    display: flex;
    flex-direction: column;
    gap: 2em;
}
.profile__learn{
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding: 3em;
    margin-right: 3em;
    border-radius: 12px;
}
.profile__learn h1{
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 1em;
}
.profile__learn__options{
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
.profile__learn__item{
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
}
.item1{
    background-image: url('../assets/frame-13.png');
}
.item2{
    background-image: url('../assets/frame-14.png');
}
.item__wrapper{
    display: flex;
    width: 310px;
    height: 210px;
    align-items: flex-end;
}
.item__wrapper p{
    padding: 1rem;
    color: #fff;
    font-size: 24px;
}
.item__wrapper img{
    padding: 0 1em 1em 0;
    width: 40px;
}
/* meu_EVENTOS/TOPICOS */
.meu_eventos__wrapper {
    padding: 2em;
    background-color:  #E5EAF2;
    margin-right: 3em;
    width: 100%;
    border-radius: 12px;
    align-items: flex-start;
}
.meu_eventos{
   gap: 0;
   margin: 0;
   width: fit-content;
}
.meu_eventos h1{
    margin: 0.5em;
}

.meu_eventos__cards {
    display: flex;
    justify-content: space-evenly;
    margin: 1em;
    flex-direction: column;
}

.meu_evento__cards__item {
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 1em;
    border-radius: 12px;
    height: fit-content;
    gap: 11em;
    width: 100%;
}

.meu_card__botao {
    align-items: center;
    display: flex;
}

.meu_card__data__dia {
    font-size: 16px;
    font-weight: 700;
}


.meu_card__evento {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    height: fit-content;

}

.meu_card__evento {
    font-size: 16px;
}

.meu_card__evento h2 {
    font-size: 16px;
}
@media (max-width:991px){
    
}
.meu_eventos__wrapper{
    margin: 0;
    width: fit-content;
    display: flex;
    gap: 10px;
    flex-direction: column;
    .profile__card__image {
        width: 100%;
        flex-direction: column;
    }
    .item__wrapper{
        height: 145px;
    }
}
@media (max-width:767px){
    .profile__wrapper{
        flex-direction: column;
    }
    .profile__card__wrapper{
        width: fit-content;
    }
    .profile__learn{
        margin: 0 auto;
        padding: 2em 0;
    }
    .profile__learn__options{
        flex-direction: column;
    }
    .profile__learn__wrapper{
        margin: 0;
    }
    .profile__topics__wrapper{
        margin: 0;
        display: flex;
    }
    .meu_eventos__wrapper{
        margin: 0;
        width: fit-content;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
    .meu_eventos__cards, .meu_evento__cards__item{
        margin: 0;
    }
}
</style>