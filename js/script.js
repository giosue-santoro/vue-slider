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
        //Se index minore di 4 aumenta di uno l'indice, quando va sopra 4 torna al primo elemento
        next: function (){
            if (this.immaginiIndex < 4) {
                this.immaginiIndex += 1;
            } else {
                this.immaginiIndex = 0;
            }
        },
        //Se index maggiore di 0 diminuisce di uno l'indice, quando va sotto lo 0 torna al quarto elemento
        prev: function (){
            if (this.immaginiIndex > 0) {
                this.immaginiIndex -= 1;
            } else {
                this.immaginiIndex = 4;
            }
        },
        //Stampa la classe active nel pallino con indice selezionato colorandolo di blue
        dotActive: function (i){
            if (i === this.immaginiIndex) {
                return 'fas fa-circle active';
            } else {
                return 'fas fa-circle';
            }
        },
        //Cambia index dei pallini al click
        dotClick: function (i){
            this.immaginiIndex = i;
        }
    }
})

Vue.config.devtools = true;