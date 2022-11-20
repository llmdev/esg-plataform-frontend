<script>
</script>

<template>
    <div class="post-item__wrapper">
        <div class="post-item">
            <h3>Horta</h3>
            <h1>Topico</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa facere dolore, dicta debitis neque error quia exercitationem perspiciatis harum quibusdam nostrum, et in asperiores reiciendis distinctio, provident nihil pariatur.
            Voluptatum delectus minus mollitia error esse earum quia aliquam hic nesciunt quae doloribus ipsum, eaque ut porro itaque vero. Sapiente, consequatur laboriosam dolore autem sunt magni ex vitae illum minus.
            </p>
        </div>
        <div class="see-comment">
            <h2>Comentário #1 <span class="nickname">Usuário #1</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, veritatis enim. Dolorum, fugit delectus. Quidem doloribus soluta magni inventore aspernatur, quia, cupiditate deserunt commodi distinctio recusandae obcaecati aperiam eligendi nostrum.</p>
        </div>
        <div class="make-comment">
            <textarea name="" id="" cols="30" rows="10">
        
            </textarea>
            <button>
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
.make-comment button{
    text-align: end;
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