<script>
</script>

<template>
    <section class="sobre-nos__wrapper">
        <div class="sobre-nos">
            <div class="respiro">
                <hr width="72px">
            </div>
            <div class="sobre-nos__textos">
                <a href="./pages/about.html">
                    <h3>SOBRE A COLHEITA DO BEM</h3>
                </a>
                <div class="textos">
                    <h1>Criado por pessoas que também amam a naturezar</h1>
                    <div class="textos__descricao">
                        <p>Pensado para você, para a sua empresa e para os seus colaboradores.</p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                            tristique.
                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                            posuere.
                        </span>
                    </div>
                </div>
            </div>
        </div>
</section>
</template>

<style>

.textos {
    display: flex;

}
.textos h1{
    margin-top: 10px;
}
.textos p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 1em;
}
.sobre-nos {
    width: 100%;
}
.sobre-nos__textos{
    margin-right: 2em;
}

@media (max-width: 767px) {
    .sobre-nos__textos .textos {
        flex-direction: column;
    }
}

</style>