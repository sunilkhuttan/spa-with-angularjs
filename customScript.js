// function run(interval, frames) {
//     var int = 1;
    
//     function func() {
//         document.body.id = "main-body"+int;
//         int++;
//         if(int === frames) { int = 1; }
//     }
    
//     var swap = window.setInterval(func, interval);
// }

// run(1000, 2); //milliseconds, frames

$(function () {
    var body = $('#main-body1');
    var backgrounds = [
      // 'url(assets/images/background/2.jpg)', 
      // 'url(assets/images/background/3.jpg)',
      // 'url(assets/images/background/4.jpg)',
      'url(assets/images/background/3.jpg)'];
    var current = 0;

    function nextBackground() {
        body.css({
            'background': backgrounds[current = ++current % backgrounds.length], 'background-repeat': 'no-repeat', 
            'background-attachment': 'fixed', 'background-position': 'center', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-moz-background-size': 'cover',
        '-o-background-size': 'cover', 'background-size': 'cover', 'transition': 'background 1s linear' });


        setTimeout(nextBackground, 9000);
    }
    setTimeout(nextBackground, 9000);
    body.css('background', backgrounds[0]);
});

$(function () {
    var aboutUsDiv = $('#about-us-pics');
    var backgrounds = [
      'url(assets/images/about-us/1.jpg)', 
      'url(assets/images/about-us/2.png)',
      'url(assets/images/about-us/3.jpg)',
      'url(assets/images/about-us/4.jpg)',
      'url(assets/images/about-us/5.jpg)',
      'url(assets/images/about-us/6.jpg)',
      'url(assets/images/about-us/8.jpg)',
      'url(assets/images/about-us/7.jpg)'];
    var current = 0;

    function nextBackground() {
        aboutUsDiv.css({
            'background': backgrounds[current = ++current % backgrounds.length],'background-position': 'center', 'background-repeat': 'no-repeat',
              'transition': 'background 1s linear' });

        setTimeout(nextBackground, 4000);
    }
    setTimeout(nextBackground, 4000);
    aboutUsDiv.css('background', backgrounds[0]);
});