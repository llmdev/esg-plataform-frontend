<script>
import axios from 'axios';



export default {
    data() {
        return {
            isLogged: false,
            topic: {},
            comments: [],
            user: {},
            commentInput: '',
        }
    },
    mounted() {
        const topicId = this.$route.query.id;
        axios.get(`https://esg-api-nu.vercel.app/topic/${topicId}`).then( ({data}) => {
            this.topic = data.topic
        });

        axios.get(`https://esg-api-nu.vercel.app/comments/topic/${topicId}`).then( ({data}) => {
            this.comments = data.comments
        });

        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.isLogged = true;
            this.user = user;
        }
    },
    methods: {
        makeComment() {
            axios.post('https://esg-api-nu.vercel.app/comments', 
            {
                content: this.commentInput,
                topicId: this.$route.query.id,
            }, {headers: { Authorization: `Bearer ${this.user.token}` }})
            .then( ({data}) => {
                this.comments.push({ content: data.comment.content, nickname: this.user.nickname, id: data.comment.id} );
                this.commentInput = ''
            });
        }
    }
}
</script>

<template>
    <div class="post-item__wrapper">
        <div class="post-item">
            <h3>{{ topic.title_category}}</h3>
            <h2>@{{ topic.nickname }}</h2>
            <h1>{{ topic.title }}</h1>
            <p>{{ topic.content }}</p>
        </div>
        <div v-for="comment in comments" :key="comment.id" class="see-comment">
            <h2>Comentário #{{ comment.id}} <span class="nickname">@{{ comment.nickname}}</span></h2>
            <p>{{ comment.content }}</p>
        </div>
        <div v-if="!isLogged">
            <h6 style="text-align: center">Para comentar, basta fazer o  <router-link to="/login" >login</router-link>.</h6>
        </div>
        <div v-if="isLogged" class="make-comment">
            <h6 style="text-align: left">Fazer um comentario</h6>
            <textarea name="" v-model="commentInput" id="" cols="30" rows="10">
            </textarea>
            <button :disabled="commentInput.length < 5" @click="makeComment" style="align-self: flex-end;">
                Comentar
            </button>
        </div>
    </div>
</template>

<style>
.post-item__wrapper{
    margin: 0 auto;
    background-color: #f9f9f9;
    padding: 2em;
    width: 90%;
    border-radius: 12px;
}
.post-item h1{
    margin: 0;
}
.make-comment{
    display: flex;
    flex-direction: column;

}
textarea{
    width: 100%
}
.make-comment button{
    text-align: end;
    color: white;
    margin-top: 20px;
    display: flex;
    max-width: 200px;
    justify-content: center;
}

.make-comment button:disabled{
    opacity: 0.2;
}

.nickname{
    color: grey;
    text-decoration: underline;
    font-size: 0.8em;
}
.post-item h3 {
    color: #70C174;
    letter-spacing: 0.5em;
}
</style>