<script>
console.log('oi')
</script>

<template>
    <div class="coupon__wrapper">
        <div class="coupon">
            <div class="container">
              <h3>Plano gratuito</h3>
            </div>
            <img src="../assets/frame-13.png" alt="Avatar" style="width:100%;">
            <div class="container" style="background-color:white">
              <h2><b>20% OFF YOUR PURCHASE</b></h2>
              <p>Lorem ipsum..</p>
            </div>
            <div class="container">
              <p>Use Promo Code: <span class="promo">BOH232</span></p>
              <p class="expire">Expires: Jan 03, 2021</p>
            </div>
          </div>
        <div class="coupon">
            <div class="container">
              <h3>Jardineiro</h3>
            </div>
            <img src="../assets/frame-13.png" alt="Avatar" style="width:100%;">
            <div class="container" style="background-color:white">
              <h2><b>20% OFF YOUR PURCHASE</b></h2>
              <p>Lorem ipsum..</p>
            </div>
            <div class="container">
              <p>Use Promo Code: <span class="promo">BOH232</span></p>
              <p class="expire">Expires: Jan 03, 2021</p>
            </div>
          </div>
        <div class="coupon">
            <div class="container">
              <h3>Cultivador</h3>
            </div>
            <img src="../assets/frame-13.png" alt="Avatar" style="width:100%;">
            <div class="container" style="background-color:white">
              <h2><b>20% OFF YOUR PURCHASE</b></h2>
              <p>Lorem ipsum..</p>
            </div>
            <div class="container">
              <p>Use Promo Code: <span class="promo">BOH232</span></p>
              <p class="expire">Expires: Jan 03, 2021</p>
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
    border: 5px dotted #bbb; /* Dotted border */
    width: 80%;
    border-radius: 15px; /* Rounded border */
    margin: 0 auto; /* Center the coupon */
    max-width: 600px;
  }
  
  .container {
    padding: 2px 16px;
    background-color: #f1f1f1;
  }
  
  .promo {
    background: #ccc;
    padding: 3px;
  }
  
  .expire {
    color: red;
  }
</style>