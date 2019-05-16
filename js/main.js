class Breakdancer {
    constructor() {
        this.images = [
            {
                type: "breakdancing",
                image: "https://pbs.twimg.com/media/Dks0JwwU4AAcVTz.jpg"
            },
            {
                type: "breakdancing",
                image: "https://c.tribune.com.pk/2011/09/255354-childPHOTOCOURTESYACTONESTUDIO-1316376522-906-640x480.jpg"
            },
            {
                type: "breakdancing",
                image: "https://i2.nicepik.com/files/887/933/67/street-urban-city-dance-thumb.jpg"
            },
            {
                type: "falling",
                image: "https://i.ytimg.com/vi/9ruE2zyMZqc/hqdefault.jpg"
            },
            {
                type: "falling",
                image: "https://img.buzzfeed.com/buzzfeed-static/static/campaign_images/webdr01/2013/5/15/13/the-26-mightiest-examples-of-people-falling-over-1-24731-1368637785-13_big.jpg"
            },
            {
                type: "falling",
                image: "http://i.imgur.com/e9U4bqS.jpg"
            }
        ];
        this.currentImage = "";
        console.log("What's the point in cheating? There's literally no scores!!")
        this.generateImage()
    }

    generateImage(){
        const img = this.images[Math.floor(Math.random() * this.images.length)];
        document.getElementById("image").src = img.image;
        this.currentImage = img;
    }

    choose(option){
        if(option === this.currentImage.type){
            document.getElementById("feedback").innerHTML = "Well done! You guessed right!"
        } else {
            document.getElementById("feedback").innerHTML = "Oopsie! Wrong guess!"
        }
        setTimeout(function(){
            document.location.reload();
        },2000);
    }
}

setTimeout(function(){
    document.breakdancer = new Breakdancer();
},1000);