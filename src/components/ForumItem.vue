<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import PostItem from './PostItem.vue'

  
</script>
<template>

  <PostItem />
  <section class="comment__wrapper">
    <div class="comment">
        <div class="comment__textos">
            <a href=".#">
                <div class="respiro__comment">
                    <hr width="72px">
                </div>
                <h3>Faça um post</h3>
            </a>
            <p>Está na hora de fazer parte de grandes discussões, aprender novas formas de cuidar e fortalecer a sua horta.</p>
            <div class="comment__email__wrapper">
                <label for="email" class="comment__email__label">Selecione a categoria</label>
                <select name="categorias" id="">
                    <option value="">Categorias</option>
                    <option value="">Novo</option>
                    <option value="">Hortas</option>
                    <option value="">Suculentas</option>
                    <option value="">Temperos</option>
                    <option value="">Adubos</option>
                    <option value="">Vasos</option>
                </select>
            </div>
            <div class="comment__topico__wrapper">
                <label for="topico" class="comment__topico__label">Tópico</label>
                <input id="topico" type="text" class="comment__topico__input" placeholder="Insira seu topico">
            </div>
            <div class="comment__text__wrapper">
                <div class="comment__text">
                    <label class="comment__topico__label" for="">Comentário:</label>
                    <textarea class="comment__topico__input" placeholder="Insira seu comentário">

                    </textarea>
                </div>
            </div>
            <button class="publicar">Publicar</button>

        </div>
    </div>
    <div class="post__imagem">
        </div>


</section>
</template>
<style>
* {
  font-size: 16px;
}
.respiro__comment{
  display: flex;
  align-items: center;
}

.comment__wrapper {
  display: flex;
}

.comment {
  padding: 6em 4em;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  background-color: #EFF7F2;
}

.comment__textos{
  gap: 16px;
}
.comment__textos p {
  text-align: start;
}

.comment__textos a {
  display: flex;
  text-decoration: none;
  color: #000;
  gap: 16px;

}
.comment__textos a h3 {
  display: flex;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
}
.comment__text{
    display: flex;
    flex-direction: column;
}
.comment__imagem {
  width: 50%;
  background-image: url('../assets/fotos-comment.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.post__imagem{
        width: 50%;
        background-image: url('../assets/fotos_aplicativo.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
}
/* FLEX COLUMN */
.comment__email__wrapper, .comment__topico__wrapper, .comment__textos{
  display: flex;
  flex-direction: column;
}
.comment__email__label, .comment__topico__label{
  font-weight: 700;
  margin-bottom: 4px;
}
.comment__email__input, .comment__topico__input{
  padding: 1em;
  border: none;
  border-radius: 4px;
}

.comment__textos button{
  display: flex;
  width: 100%;
  justify-content: center;
  height: 50px;
  align-items: center;
}
.publicar{
  border: none;
  border-radius: 6px;
  background-color: #70C174;
  color: #FFF;

}
.esqueci{
 
  background: none;
  border: none;
  cursor: pointer;
  color: #70C174;
}
.cadastrar p {
  text-align: center;
}
.cadastrar p a{
  color: #70C174;
}
@media (max-width: 576px) {
  .comment__imagem{
    display: none;
  }
  .comment{
    background-image:  linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), url('../assets/fotos-comment.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    width: 100%;
  }
  .comment__textos a h3, .respiro__comment hr{
    color: #FFF;
  }
  .esqueci{
    text-shadow: #fff 1px 0 4px;
  }
}
</style>