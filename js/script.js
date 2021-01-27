var app = new Vue({
    el:'#app',
    
    data: {
        immagini: [
            'https://vastphotos.com/files/uploads/photos/10684/beautiful-landscape-photo-l.jpg',
            'https://wallpaperaccess.com/full/87548.jpg',
            'https://lh3.googleusercontent.com/proxy/v1NA0PBK0DF9W7oMsG8jHjb7w3Lmg-kKh56LLM4v49TBljI6BewVWfkCnkxauHFGrFONKCu6jaMZAJ1V3B4Mq55x6UsGAWXQ_mqINg=s0-d',
            'https://i.pinimg.com/originals/46/dc/d3/46dcd3f6316bba3bfa03a88c86a69e8e.jpg',
            'https://vastphotos.com/files/uploads/photos/10691/peaceful-water-landscape-photo-l.jpg'
        ],
        immaginiIndex: 0
    },

    methods:  {
        next: function() {
            this.immaginiIndex += 1;
        },
        prev: function() {
            this.immaginiIndex -= 1;
        }
    }
})

Vue.config.devtools = true;