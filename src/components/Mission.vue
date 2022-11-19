<script>
</script>

<template>
    <section class="missao__wrapper">
        <div class="missao">
            <div class="missao__textos">
                    <h3>MISSÃO</h3>
                <div class="textos">
                    <h1>Alimento saudável por um preço acessível</h1>
                    <div class="textos__descricao">
                        <p>O projeto Colheita do bem tem como objetivo a construção de uma plataforma multi-canal que capacita os seus usuários a cuidar e cultivar hortas e jardins em suas casas. Além de, conecta-los em uma comunidade de compartilhamento de informações.</p>
                    </div>
                </div>
            </div>
            <div class="visao__textos">
                    <h3>VISÃO</h3>
                <div class="textos">
                    <h1>Incentivar a horticultura e preservação ambiental</h1>
                    <div class="textos__descricao">
                        <p>Nosso projeto presa por: fornecer capacitação com facilidade e acessibilidade para todos interessados na atividade do cultivo, ressaltar a importância da preservação ambiental e incentivo ao combate a fome.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<style>
.missao__wrapper {
    background-color: #EFF7F2;
    padding: 5em 0;
    margin-top: -200px;
    padding-top: 250px;
    display: flex;
}
.missao{
    display: flex;
    justify-content: space-around;
    width: 100%
}
.missao__textos,
.visao__textos {
    display: flex;
    flex-direction: column;
    width: 300px;

}

.missao__textos .textos,
.visao__textos .textos {
    display: flex;
    flex-direction: column;
}

.missao__textos h3,
.visao__textos h3 {
    font-weight: 700;
}
.missao__textos .textos h1,
.visao__textos .textos h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 1em 0;
}
.textos__descricao{
    width: fit-content;
}
.textos__descricao p {
    font-weight: 300;
    font-size: 16px;
}
@media (max-width: 576px) {
    .missao{
        flex-wrap: wrap;
        gap: 2em;
    }
    .textos__descricao p {
        font-size: 12px;
        margin: 0;
    }
    .missao__textos .textos h1, .visao__textos .textos h1{
        margin: 0.5em 0;
    }
    .missao__textos h3, .visao__textos h3{
        margin: 0;
    }
}

</style>