<script setup>
  import { ref } from 'vue'
  
  defineProps({
    msg: String
  })
  
 
  const count = ref(0)
</script>

<template>
    <section>
        <div class="hero__wrapper">
            <div class="hero">
                <h1>Salve o meio ambiente para um amanhã melhor</h1>
                <div class="hero__buttons">
                    <button>Como ajudar</button>
                    <button class="play_video">
                        <img src="../assets/play_icon.svg" alt="">
                        Tocar Vídeo
                    </button>
                </div>
            </div>
            <div class="hero__line">
                <p>23,800 árvores salvas</p>
                <hr width="60%">
                <p>5840 usários ativos agora</p>
            </div>
        </div>
      </section>
</template>

<style>
*, .hero__buttons button {
    font-family: 'Roboto', sans-serif;
}
/* HERO */
.hero__wrapper {
    background-image: url('../assets/bg_image.png');
    height: 650px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10em 5em;

}

.hero h1 {
    font-size: 64px;
    width: 640px;
    color: #FFF;
    font-weight: 700;
    margin-bottom: 100px;
    text-align: start;
}

.hero button {
    font-size: 16px;
    width: 164px;
    height: 51px;
    font-family: 'Roboto';
    border-radius: 4px;
}

.hero .hero__buttons {
    display: flex;
}

.hero button.play_video {
    background: none;
    color: #FFF;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.hero__line {
    display: flex;
    color: #FFF;
    align-items: center;
}
.hero__line hr {
    height: 1px;
    margin: 0.5em;
    width: 100%;
}
@media (max-width: 576px) {
    .hero__wrapper {
        padding: 4em 1em 2em 1em;
        height: 400px;
    }

    .hero h1{
        font-size: 24px;
        width: 70%;
        margin-bottom: 1em;
        margin-bottom: 3em;
        width: 80%;
    }

    .hero__buttons {
        flex-direction: column;
        width: fit-content;
    }

    .hero__line {
        align-items: center;
    }

    .hero__line p {
        font-size: 12px;
    }
}

</style>