function randomPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
            'https://roko-o.github.io/img/wenzhang.jpeg',
            'https://roko-o.github.io/img/wenzhang1.jpg',
            'https://roko-o.github.io/img/wenzhang2.jpg',
            'https://roko-o.github.io/img/wenzhang3.jpg',
            'https://roko-o.github.io/img/wenzhang4.jpg',
            'https://roko-o.github.io/img/wenzhang5.jpg',
            'https://roko-o.github.io/img/wenzhang6.jpg',
            'https://roko-o.github.io/img/wenzhang7.jpg',
            'https://roko-o.github.io/img/wenzhang8.jpg',
            'https://roko-o.github.io/img/wenzhang9.jpg',
            'https://roko-o.github.io/img/wenzhang10.jpg'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url + ')');
        console.log("BackGround URL:" + url);
        backPicture.setAttribute("style", urlPhoto);
    }
}