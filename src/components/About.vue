<script setup>
import Subscription from './Subscription.vue'
import News from './News.vue'
import Events from './Events.vue'
import HeroAbout from './HeroAbout.vue'
import Mission from './Mission.vue'
import Target from './Target.vue'
import Team from './Team.vue'
</script>

<template>

    <HeroAbout />

    <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rpAwCCQir04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <Mission />
    <Target />  
    <Team />

    <Subscription />
    <News />
    <Events />

</template>

<style>
.video {
    display: flex;
    justify-content: center;
    margin: 2em 0;
}
.video iframe {
    width: 80%;
    height: 400px;
}
@media (max-width: 767px) {
    .video iframe {
        border-radius: 12px;
    }
}
</style>