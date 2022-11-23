<script>
</script>

<template>
    <div class="payment__wrapper">
        <label for="">Nome que está no cartão</label>
        <input  id="" type="text" placeholder="Cris de Oliveira Xavier">
        <label for="">Número do cartão</label>
        <input  id="" type="number" placeholder=" XXXX-XXXX-XXXX-XXXX">
        <label for="">Validade</label>
        <input  id="" type="datetime-local" value="2023-04-20T16:20">
        <label for="">Código de Segurança</label>
        <input  id="" type="number" placeholder="XXX">
        <button class="comprar">
                Enviar dados     
        </button>
    </div>
</template>

<style>
.payment__wrapper{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    padding: 2em;
    letter-spacing: 2px;
}
.payment__wrapper label{
    font-weight: 700;
}
.payment__wrapper input{
    padding: 0.5em;
    border-radius: 5px;
}

</style>