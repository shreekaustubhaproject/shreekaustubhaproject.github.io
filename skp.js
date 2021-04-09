if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
}


    window.onload=function(){
      document.getElementById("my_audio").play();
      console.log("test");
    }
