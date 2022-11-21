<script>
import axios from 'axios';

export default {
    data() {
        return {
            categories: [],
            selectedCategory: 1,
            topics: [],
            loading: true,
            topics: [],
            isLogged: false,
        }
    },
    mounted() {
        axios.get('https://esg-api-nu.vercel.app/categories').then(({ data }) => {
            this.categories = data.categories
        })
        axios.get(`https://esg-api-nu.vercel.app/topic/category/${this.selectedCategory}`).then(({ data }) => {
            this.topics = data.topics;
            this.loading = false;
        })

        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.isLogged = true
        }
    },
    methods: {
        onChangeCategory(category) {
            this.loading = true;
            this.selectedCategory = category.id
            axios.get(`https://esg-api-nu.vercel.app/topic/category/${category.id}`).then(({ data }) => {
                this.topics = data.topics;
                this.loading = false;
            })
        }
    }
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
            <li v-for="category of categories" :key="category.id"
                v-bind:class="{ 'categorias__item__button': true, selected: selectedCategory === category.id, }">
                <button @click="onChangeCategory(category)" class="categorias__item__button">
                    {{ category.title }}
                </button>
            </li>
        </ul>
    </div>
    <div class="meu__eventos__wrapper topic">
        <div class="meu_eventos__cards topic">

            <div class="loader" v-if="loading">
                <img src="../assets/loader.gif" width="100" />
            </div>

            <div v-if="topics.length === 0 && !loading" class="meu_evento__cards__item topic">
                <div class="textos">
                    <div class="meu_card__data">
                        <p class="meu_card__data__dia topic">Nao possui topico cadastrado nesta categoria.</p>
                    </div>
                </div>
            </div>

            <div v-for="topic of topics" :key="topic.id" class="meu_evento__cards__item topic">
                <div class="textos">
                    <div class="meu_card__data">
                        <p class="meu_card__data__dia topic">{{ topic.title }}</p>
                    </div>
                    <div class="meu_card__evento">
                        <h2>{{ topic.content.split(/\s+/).slice(0, 10).join(" ") + '...' }}</h2>
                    </div>
                </div>
                <router-link :to="{ path: '/postitem', query: { id: topic.id } }">
                    <button class="meu_card__botao" style="background: none">
                        <img src="../assets/arrow-button.svg" alt="">
                    </button>
                </router-link>
            </div>

        </div>
    </div>
    <div class="logged__button" v-if="isLogged">
        <router-link to="/forumitem">
            <button class="meu_card__botao" style="background: none">
                Criar um topico<img src="../assets/arrow-button.svg" alt="">
            </button>
        </router-link>
    </div>
</template>


<style>
.categorias__wrapper {
    display: flex;
    justify-content: center;
    margin: 2em 0;
}

.categorias {
    display: flex;
    gap: 1em;
}

.categorias__item__button {
    outline: none;
    background: none;
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 1px solid #f9f9f9;
}

.selected button {
    background: #70C174;
    color: #FFF;
    border: none;
    outline: none;
}

.meu_evento__cards__item.topic {
    background-color: #f9f9f9;
    width: 100%;
}

.meu_card__data__dia.topic {
    margin: 0.5em;
}

.meu__eventos__wrapper.topic {
    display: flex;
    justify-content: center;
}

.meu_eventos__cards.topic {
    gap: 2em;
}

@media (max-width:767px) {
    .noticias__thumb.hotnews ul li a {
        flex-direction: column;
    }

    .categorias {
        overflow: auto;
    }

    .meu_evento__cards__item.topic {
        width: fit-content;
    }

    .noticias__thumb.hotnews {
        padding: 0;
    }

    .noticias__thumb.hotnews ul li a {
        flex-direction: column;
        margin: 0;
    }
}


.logged__button {
    display: flex;
    justify-content: center;
}
</style>