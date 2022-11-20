<script>
import axios from 'axios';

export default {
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        axios.get('https://esg-api-nu.vercel.app/categories').then( ({data}) => {
            this.categories = data.categories
        })
    },
}
</script>

<template>
    <div class="categorias__wrapper">
        <ul class="categorias">
            <li class="categorias__item">
                <span class="categorias__item__button">
                    Categorias
                </span>
            </li>
            <li v-for="category of categories" :key="category.id" class="categorias__item selected button">
                <button class="categorias__item__button">
                    {{ category.title }}
                </button>
            </li>
        </ul>
    </div>
    <div class="meu__eventos__wrapper topic">
        <div class="meu_eventos__cards topic"> 
            <div class="meu_evento__cards__item topic">
                <div class="textos">
                    <div class="meu_card__data">
                        <p class="meu_card__data__dia topic">Assunto da Vez</p>
                    </div>
                    <div class="meu_card__evento">
                        <h2>Melhores formas de começar sua horta caseira</h2>
                    </div>
                </div>
                <div class="meu_card__botao">
                    <img src="../assets/arrow-button.svg" alt="">
                </div>
            </div>
            <div class="meu_evento__cards__item topic">
                <div class="textos">
                    <div class="meu_card__data">
                        <p class="meu_card__data__dia topic">Assunto da Vez</p>
                    </div>
                    <div class="meu_card__evento">
                        <h2>Melhores formas de começar sua horta caseira</h2>
                    </div>
                </div>
                <div class="meu_card__botao">
                    <img src="../assets/arrow-button.svg" alt="">
                </div>
            </div>
            <div class="meu_evento__cards__item topic">
                <div class="textos">
                    <div class="meu_card__data">
                        <p class="meu_card__data__dia topic">Assunto da Vez</p>
                    </div>
                    <div class="meu_card__evento">
                        <h2>Melhores formas de começar sua horta caseira</h2>
                    </div>
                </div>
                <div class="meu_card__botao">
                    <img src="../assets/arrow-button.svg" alt="">
                </div>
            </div>
            <div class="meu_evento__cards__item topic">
                <div class="textos">
                    <div class="meu_card__data">
                        <p class="meu_card__data__dia topic">Assunto da Vez</p>
                    </div>
                    <div class="meu_card__evento">
                        <h2>Melhores formas de começar sua horta caseira</h2>
                    </div>
                </div>
                <div class="meu_card__botao">
                    <img src="../assets/arrow-button.svg" alt="">
                </div>
            </div>
            <div class="meu_evento__cards__item topic">
                <div class="textos">
                    <div class="meu_card__data">
                        <p class="meu_card__data__dia topic">Assunto da Vez</p>
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
    </div>
</template>


<style>
.categorias__wrapper{
    display: flex;
    justify-content: center;
    margin: 2em 0;
}
.categorias{
    display: flex;
    gap: 1em;
}
.categorias__item__button{
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 1px solid #f9f9f9;
}
.selected button{
    background: #70C174;
    color: #FFF;
    border: none;
}
.meu_evento__cards__item.topic{
    background-color: #f9f9f9;
}
.meu_card__data__dia.topic{
    margin: 0.5em;
}
.meu__eventos__wrapper.topic{
    display: flex;
    justify-content: center;
}
.meu_eventos__cards.topic{
    gap: 2em;
}
@media (max-width:767px){
.noticias__thumb.hotnews ul li a{
    flex-direction: column;
}
.categorias{
    overflow: auto;
}
.meu_evento__cards__item.topic{
    width: fit-content;
}
.noticias__thumb.hotnews{
    padding: 0;
}
.noticias__thumb.hotnews ul li a{
    flex-direction: column;
    margin: 0;
}
}
</style>