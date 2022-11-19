<script>
</script>

<template>
    <section class="time__wrapper">
        <div class="time">
            <div class="time__textos">
                <h1>Conheça nosso time</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Amet debitis unde, eius eligendi reprehenderit expedita quod dolore ducimus?</p>
            </div>
            <div class="time__thumb">
                <ul>
                    <li>
                        <img src="../assets/christian.png" alt="">
                        <div class="time__thumb__nome">
                            Christian Henrique
                        </div>
                        <div class="time__thumb__cargo">
                            UX Designer
                        </div>
                        <div class="time__thumb__links">
                            <a href="#"><img src="../assets/facebook.svg" alt=""></a>
                            <a href="#"><img src="../assets/twitter.svg" alt=""></a>
                            <a href="#"><img src="../assets/linkedin.svg" alt=""></a>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/igor.png" alt="">
                        <div class="time__thumb__nome">
                            Igor Simões
                        </div>
                        <div class="time__thumb__cargo">
                            Desenvolvedor Junior
                        </div>
                        <div class="time__thumb__links">
                            <a href="#"><img src="../assets/facebook.svg" alt=""></a>
                            <a href="#"><img src="../assets/twitter.svg" alt=""></a>
                            <a href="#"><img src="../assets/linkedin.svg" alt=""></a>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/lucas.png" alt="">
                        <div class="time__thumb__nome">
                            Lucas Lopes
                        </div>
                        <div class="time__thumb__cargo">
                            Desenvolvedor sênior
                        </div>
                        <div class="time__thumb__links">
                            <a href="#"><img src="../assets/facebook.svg" alt=""></a>
                            <a href="#"><img src="../assets/twitter.svg" alt=""></a>
                            <a href="#"><img src="../assets/linkedin.svg" alt=""></a>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/paulo.png" alt="">
                        <div class="time__thumb__nome">
                            Paulo César
                        </div>
                        <div class="time__thumb__cargo">
                            Desenvolvedor sênior
                        </div>
                        <div class="time__thumb__links">
                            <a href="#"><img src="../assets/facebook.svg" alt=""></a>
                            <a href="#"><img src="../assets/twitter.svg" alt=""></a>
                            <a href="#"><img src="../assets/linkedin.svg" alt=""></a>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/rafaela.png" alt="">
                        <div class="time__thumb__nome">
                            Rafaella Santiago
                        </div>
                        <div class="time__thumb__cargo">
                            Product Manager
                        </div>
                        <div class="time__thumb__links">
                            <a href="#"><img src="../assets/facebook.svg" alt=""></a>
                            <a href="#"><img src="../assets/twitter.svg" alt=""></a>
                            <a href="#"><img src="../assets/linkedin.svg" alt=""></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style>
.time__textos {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 2em 0;
}

.time__textos h1 {
    font-size: 48px;
    font-weight: 700;
}

.time__textos p {
    text-align: center;
    width: 80%;
}

.time__thumb ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
}

.time__thumb ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.time__thumb__nome {
    font-size: 20px;
    font-weight: 700;
}

.time__thumb__links {
    width: 50%;
    display: flex;
    justify-content: space-around;
}
.time__thumb ul li img{
    width: 100%;
}
@media (max-width: 767px) {
    .time__textos h1 {
        font-size: 38px;
        margin: 0 0.5em;
        text-align: center;
    }

    .time__thumb ul li {
        font-size: 18px;
        text-align: center;
        width: 130px;
    }

    .time__thumb__nome {
        font-size: 18px;
        text-align: center;
    }

    .time__thumb__cargo {
        font-size: 14px;
    }
}
</style>