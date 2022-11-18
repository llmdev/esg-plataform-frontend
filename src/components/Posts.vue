<script>
  import { ref } from 'vue'
  import axios from 'axios'

export default {
    data() {
        return {
            list: [],
            fetching: true
        }
    },
    methods: {
      fetchData() {
        axios.get('https://api.hubapi.com/content/api/v2/blog-posts?hapikey=demo')
          .then(response => {
            this.list = response.data;
            this.fetching = false
          })
        }
    },
    mounted() {
      this.fetchData();
    }
}
</script>
<template>
  <h1>
    TODOS OS POSTS
  </h1>
  <span v-if="fetching">Carregando...</span>

  <ul class="list">
    <li v-for="(item, index) in list.objects" :key="index" class="list-group-item">
      <span>{{item.label}}</span>
      <a :href="item.absolute_url">{{item.absolute_url}}</a>
    </li>
  </ul>
  <!-- {{list}} -->
</template>

<style></style>