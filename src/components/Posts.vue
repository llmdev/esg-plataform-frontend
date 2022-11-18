<script>
  import { ref } from 'vue'
  import axios from 'axios'

export default {
    data() {
        return {
            list: [],
            fetching: false
        }
    },
    computed: {
      fetchData() {
        const catFactsResponse = axios.get('https://api.hubapi.com/content/api/v2/blog-posts?hapikey=demo')
        .then(response => {
          console.log('response', response.data)
          this.list.push(response.data);
        })
      }
    },
    mounted() {
      this.fetchData;
      console.log(this.list)
    }
}






</script>
<template>
{{catFacts}}
</template>

<style></style>