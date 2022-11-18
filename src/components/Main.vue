<script setup>
  import { ref } from 'vue'
  import Hero from '../components/Hero.vue'
//   sobre nós
  import Aplicativo from './Aplicativo.vue';
  import Learn from './Learn.vue';
  import Dashboard from './Dashboard.vue'
  import Subscription from './Subscription.vue'
  import News from './News.vue'
  import Events from './Events.vue'
  import Us from './Us.vue'

  
  defineProps({
    msg: String
  })
  
 
  const count = ref(0)
</script>
  
  <template>
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <RouterView /> -->
    <Hero />
    <Us />
    <Aplicativo />
    <Learn />
    <Dashboard />
    <Subscription />
    <News />
    <Events />
 
  </template>
  
  <style scoped>
  </style>
  