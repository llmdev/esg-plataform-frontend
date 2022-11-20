<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
</script>
<template>
  <section class="login__wrapper">
    <div class="login">
        <div class="login__textos">
            <a href=".#">
                <div class="respiro__login">
                    <hr width="72px">
                </div>
                <h3>Faça login</h3>
            </a>
            <p>Está na hora de fazer parte de grandes discussões, aprender novas formas de cuidar e fortalecer a sua horta.</p>
            <div class="login__email__wrapper">
                <label for="email" class="login__email__label">E-mail</label>
                <input id="email" type="text" class="login__email__input" placeholder="email@dominio.com.br">
            </div>
            <div class="login__senha__wrapper">
                <label for="senha" class="login__senha__label">Senha</label>
                <input id="senha" type="text" class="login__senha__input" placeholder="Insira sua senha">
            </div>
            <button class="entrar">Baixe agora</button>
            <button class="esqueci">Esqueceu a senha?</button>
        </div>
        <div class="cadastrar">
            <p>Ainda não faz parte deste universo? 
              <router-link to="/cadastro">Criar conta.</router-link>
                   
             
            </p>
        </div>

    </div>
    <div class="login__imagem">
    </div>
</section>
</template>
<style>
* {
  font-size: 16px;
}
.respiro__login{
  display: flex;
  align-items: center;
}

.login__wrapper {
  display: flex;
}

.login {
  padding: 6em 4em;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  width: 45%;
  background-color: #EFF7F2;
}

.login__textos{
  gap: 16px;
}
.login__textos p {
  text-align: start;
}

.login__textos a {
  display: flex;
  text-decoration: none;
  color: #000;
  gap: 16px;

}
.login__textos a h3 {
  display: flex;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
}

.login__imagem {
  width: 50%;
  background-image: url('../assets/fotos-login.png');
  background-size: cover;
  background-repeat: no-repeat;
}
/* FLEX COLUMN */
.login__email__wrapper, .login__senha__wrapper, .login__textos{
  display: flex;
  flex-direction: column;
}
.login__email__label, .login__senha__label{
  font-weight: 700;
  margin-bottom: 4px;
}
.login__email__input, .login__senha__input{
  padding: 1em;
  border: none;
  border-radius: 4px;
}

.login__textos button{
  display: flex;
  width: 100%;
  justify-content: center;
  height: 50px;
  align-items: center;
}
.entrar{
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
  .login__imagem{
    display: none;
  }
  .login{
    background-image:  linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), url('../assets/fotos-login.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    width: 100%;
  }
  .login__textos a h3, .respiro__login hr{
    color: #FFF;
  }
  .esqueci{
    text-shadow: #fff 1px 0 4px;
  }
}
</style>