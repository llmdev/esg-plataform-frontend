<script>
import axios from 'axios';


export default {
  data(){
    return {
      nickname: '',
      name: '',
      email: '',
      password: '',
      loading: false,
      err: '',
      success: ''
    }
  },
  methods: {
    cadastrar(e){
      e.preventDefault()
      this.loading = true
      this.err = ''
      axios.post('https://esg-api-nu.vercel.app/signin', {
        nickname: this.nickname,
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then(({data}) => {
        this.loading = false
        this.success = data.message
        this.name = ''
        this.nickname = ''
        this.email = ''
        this.password = ''
      })
      .catch( err => {
        this.loading = false
        this.err = err.response.data.error
      })
    }
  }
}
</script>
<template>
  <section class="login__wrapper">
    <div class="login">
        <div class="login__textos">
            <a href=".#">
                <div class="respiro">
                    <hr width="72px">
                </div>
                <h3>Criar conta</h3>
            </a>
            <p>Está na hora de fazer parte de grandes discussões, aprender novas formas de cuidar e fortalecer a sua horta.</p>
            <div class="login__usuario__wrapper">
                <label for="usuario" class="login__usuario__label">Usuário</label>
                <input id="usuario" :disabled="loading" v-model="nickname"  type="text" class="login__usuario__input" placeholder="@seuusario">
            </div>
            <div class="login__usuario__wrapper">
                <label for="usuario" class="login__usuario__label">Nome completo</label>
                <input id="usuario" :disabled="loading" v-model="name"  type="text" class="login__usuario__input" placeholder="Nome Completo">
            </div>
            <div class="login__email__wrapper">
                <label for="email" class="login__email__label">E-mail</label>
                <input id="email" :disabled="loading" v-model="email" type="text" class="login__email__input" placeholder="email@dominio.com.br">
            </div>
            <div class="login__senha__wrapper">
                <label for="senha" class="login__senha__label">Senha</label>
                <input id="senha" :disabled="loading" v-model="password" type="password" class="login__senha__input" placeholder="Insira sua senha">
            </div>
            <p class="login__error-message" v-if="err">{{err}}</p>
            <p class="login__success-message" v-if="success">{{success}}</p>
            <router-link to="/logged">
              <button class="entrar" @click="cadastrar" v-if="!loading" >Cadastrar</button>
            </router-link>
            <div class="loader" v-if="loading">
              <img src="../assets/loader.gif" width="40" />
            </div>
            <button class="esqueci">Esqueceu a senha?</button>
        </div>
        <div class="cadastrar">
            <p>Já tem conta? 
              <router-link to="/login"> Fazer Log In.</router-link>
            </p>
        </div>

    </div>
    <div class="cadastro__imagem">
    </div>
</section>
</template>
<style>
* {
  font-size: 16px;
}
.login__textos a,.login__textos a h3, .login__textos p, .cadastrar p, .cadastrar p a {
  font-family: 'Roboto', sans-serif;
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
  background-color:#EFF7F2;
}

.login__textos{
gap: 16px;
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

.cadastro__imagem {
  width: 50%;
  background-image: url('../assets/fotos_cadastro.png');
  background-size: cover;
  background-repeat: no-repeat;
}
/* FLEX COLUMN */
.login__email__wrapper, .login__senha__wrapper, .login__usuario__wrapper, .login__textos {
  display: flex;
  flex-direction: column;
}
.login__email__label, .login__senha__label, .login__usuario__label {
  font-weight: 700;
  margin-bottom: 4px;
}
.login__email__input, .login__senha__input, .login__usuario__input {
  padding: 1em;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
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

.login__error-message {
  color: red;
  font-size: 12px;
}

.login__success-message {
  color: green;
  font-size: 12px;
}

@media (max-width:576px){
  .login{
    background-image:  linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), url('../assets/fotos_cadastro.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    width: 100%;
  }
  .login__textos a h3, .respiro hr{
    color: #FFF;
  }
  .esqueci{
    text-shadow: #fff 1px 0 4px;
  }
}
</style>