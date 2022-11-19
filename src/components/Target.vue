<script></script>

<template>
    <section class="publico__wrapper">
        <div class="publico">
            <div class="publico__textos">
                <h3>NOSSO PÚBLICO</h3>
                <h1>Somos mais de 10K</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                    vitae erat. Aenean faucibus nibh.</p>
                <ul>
                    <li>
                        <p>8K+</p><span>Tópicos criados</span>
                    </li>
                    <li>
                        <p>2K+</p><span>Usuários</span>
                    </li>
                    <li>
                        <p>500+</p><span>Assinantes premium</span>
                    </li>
                </ul>
            </div>
            <div class="publico__imagem">
                <img src="../assets/publico.png" alt="">
            </div>
        </div>
    </section>
</template>

<style>
/* PUBLICO */
.publico__wrapper {
    display: flex;
    justify-content: center;
}

.publico {
    background-color: #000;
    color: #FFF;
    display: flex;
    width: 90%;
    border-radius: 12px;
    padding: 2em 0 2em 2em;
    margin: 4em 2em;
}

.publico__textos {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin: 0 1em;
}

.publico__textos h3 {
    font-weight: 700;
}

.publico__textos h1 {
    font-size: 32px;
    font-weight: 700;
}

.publico__textos p {
    color: lightgrey;
}

.publico__textos ul {
    display: flex;
    gap: 10px;
}

.publico__textos ul li {
    display: flex;
    flex-direction: column;
}

.publico__textos ul li p {
    font-size: 24px;
    color: #FFF;
}

.publico__textos ul li span {
    font-size: 12px;
    color: darkgrey;
}

.publico__imagem {
    display: flex;
}

.publico__imagem img {
    width: 100%;
    object-fit: cover;
}
@media (max-width: 767px) {
    .publico {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)), url('../assets/publico.png');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .publico__textos {
        width: fit-content;
        margin-right: 1em;
    }

    .publico__imagem img {
        display: none;
    }
}
</style>