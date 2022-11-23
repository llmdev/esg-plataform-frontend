<script>
export default {
    data() {
        return {
            isLogged: false,
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.isLogged = true
        }
    }
  }
</script>

<template>
    <div class="coupon__wrapper">
        <div class="coupon">
            <div class="container">
              <h3>Plano gratuito</h3>
              <img src="../assets/frame-13.png" alt="Avatar" style="width:100%;">
              <div class="container2" style="background-color:white">
                <h2><b>20% OFF YOUR PURCHASE</b></h2>
                <p>Para você iniciante que quer as melhores dicas pra seu plantio</p>
              </div>
              <div class="container2">
                <p class="expire">Expira em: 4 de abril de 2023</p>
                <button class="comprar">
                  <router-link to="/payment" v-if="isLogged">Quero já</router-link>
                  <router-link to="/cadastro" v-else>Cadastrar e comprar!</router-link>
                </button>
              </div>
            </div>
          </div>
        <div class="coupon">
            <div class="container">
              <h3>Jardineiro</h3>
              <img src="../assets/frame-13.png" alt="Avatar" style="width:100%;">
              <div class="container2" style="background-color:white">
                <h2><b>20% OFF YOUR PURCHASE</b></h2>
                <p>Diversidade grande de plantas e o cuidado especial de cada uma.</p>
              </div>
              <div class="container2">
                <p class="expire">Expira em: 4 de abril de 2023</p>
                <button class="comprar">
                  <router-link to="/payment" v-if="isLogged">Quero já</router-link>
                  <router-link to="/cadastro" v-else>Cadastrar e comprar!</router-link>
                </button>
              </div>
            </div>
          </div>
        <div class="coupon">
            <div class="container">
              <h3>Cultivador</h3>
              <img src="../assets/frame-13.png" alt="Avatar" style="width:100%;">
              <div class="container2" style="background-color:white">
                <h2><b>20% OFF YOUR PURCHASE</b></h2>
                <p>Só come o que planta, ou frutos de escâmbo? Você os mais deliciosos legumes .</p>
              </div>
              <div class="container2">
                <p class="expire">Expira em: 4 de abril de 2023</p>
                <button class="comprar">
                  <router-link to="/payment" v-if="isLogged">Quero já</router-link>
                  <router-link to="/cadastro" v-else>Cadastrar e comprar!</router-link>
                </button>
              </div>
            </div>
          </div>
    </div>
</template>

<style>
.coupon__wrapper{
    display: flex;
    gap: 1em;
    padding: 2em;
  }
.coupon {
    border: 1px solid #70C174;
    width: 80%;
    border-radius: 15px;
    margin: 0 auto; /* Center the coupon */
    max-width: 600px;
  }
  
  .container {
    padding: 2em 1em;
  }


  .promo {
    background: #ccc;
    padding: 3px;
  }
  
  .expire {
    color: red;
  }
  .comprar{
    background: #70C174;
    border: none;
    color: #fff;
    width: fit-content;
    height: 51px;
    font-size: 16px;
    border-radius: 4px;
    align-self: center;
    margin: 0.5em;
  }
  .comprar a{
    color: #fff;
  }
  .container h3{
    font-size: 24px;
    margin: 0 0 1em 0;
  }

@media (max-width: 767px){
  .coupon__wrapper {
    flex-direction: column;
    padding: 0;
  }
}
</style>