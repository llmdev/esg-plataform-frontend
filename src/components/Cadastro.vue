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
      success: '',
      successMSG: false
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
        const router = this.$router
        this.loading = false
        this.success = data.message
        this.name = ''
        this.nickname = ''
        this.email = ''
        this.password = ''
        this.successMSG = true
        setTimeout(()=>{
          router.push('/login')
        }, 2000);
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
  <section class="cadastro__wrapper">
    <div class="cadastro">
        <div class="cadastro__textos">
            <a href=".#">
                <div class="respiro">
                    <hr width="72px">
                </div>
                <h3>Criar conta</h3>
            </a>
            <p v-if="successMSG" class="success-msg">CADASTRO REALIZADO COM SUCESSO!</p>
            <p>Está na hora de fazer parte de grandes discussões, aprender novas formas de cuidar e fortalecer a sua horta.</p>
            <div class="cadastro__usuario__wrapper">
                <label for="usuario" class="cadastro__usuario__label">Usuário</label>
                <input id="usuario" :disabled="loading" v-model="nickname"  type="text" class="cadastro__usuario__input" placeholder="@seuusario">
            </div>
            <div class="cadastro__usuario__wrapper">
                <label for="usuario" class="cadastro__usuario__label">Nome completo</label>
                <input id="usuario" :disabled="loading" v-model="name"  type="text" class="cadastro__usuario__input" placeholder="Nome Completo">
            </div>
            <div class="cadastro__email__wrapper">
                <label for="email" class="cadastro__email__label">E-mail</label>
                <input id="email" :disabled="loading" v-model="email" type="text" class="cadastro__email__input" placeholder="email@dominio.com.br">
            </div>
            <div class="cadastro__senha__wrapper">
                <label for="senha" class="cadastro__senha__label">Senha</label>
                <input id="senha" :disabled="loading" v-model="password" type="password" class="cadastro__senha__input" placeholder="Insira sua senha">
            </div>
            <p class="cadastro__error-message" v-if="err">{{err}}</p>
            <p class="cadastro__success-message" v-if="success">{{success}}</p>
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
.cadastro__textos a,.cadastro__textos a h3, .cadastro__textos p, .cadastrar p, .cadastrar p a {
  font-family: 'Roboto', sans-serif;
}
.success-msg{
  background-color: #70C174;
  color:#FFF;
  font-size: 24px;
  border-radius: 5px;
  padding: 2em;
}

.cadastro__wrapper {
  display: flex;
}

.cadastro {
  padding: 6em 4em;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  width: 45%;
  background-color:#EFF7F2;
}

.cadastro__textos{
gap: 16px;
}

.cadastro__textos a {
  display: flex;
  text-decoration: none;
  color: #000;
  gap: 16px;

}
.cadastro__textos a h3 {
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
.cadastro__email__wrapper, .cadastro__senha__wrapper, .cadastro__usuario__wrapper, .cadastro__textos {
  display: flex;
  flex-direction: column;
}
.cadastro__email__label, .cadastro__senha__label, .cadastro__usuario__label {
  font-weight: 700;
  margin-bottom: 4px;
}
.cadastro__email__input, .cadastro__senha__input, .cadastro__usuario__input {
  padding: 1em;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
}

.cadastro__textos button{
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

.cadastro__error-message {
  color: red;
  font-size: 12px;
}

.cadastro__success-message {
  color: green;
  font-size: 12px;
}
@media (max-width:767px){
  .cadastro{
    background-image:  linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), url('../assets/fotos_cadastro.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    width: 100%;
  }
  .cadastro__imagem{
    display: none;
  }
  .cadastro__textos a h3, .respiro hr{
    color: #FFF;
  }
  .esqueci{
    text-shadow: #fff 1px 0 4px;
  }
}
</style>