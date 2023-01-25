"use strict";

$(function () {
  //     console.log('hey');
  //     let contenedor_img = $('.img_slider');
  //     let img = contenedor_img.find('img').length;
  //     console.log(img);
  //     let valor = contenedor_img.css('width',img*100 + '%');
  //     console.log(valor);
  //     let antes = $('.antes');
  //     let next = $('.next');
  //     $('img:last').insertBefore('img:first');
  //    contenedor_img.css({left:'-'+ 100 +'%'});
  //    function siguiente() {
  //     contenedor_img.animate({left:'-' + 200 + '%'},900,function() {
  //         $('img:first').insertAfter('img:last');
  //         contenedor_img.css({left:'-'+100+'%'});
  //     })
  //    }
  //    function anterior() {
  //     contenedor_img.animate({left:0},900,function() {
  //         $('img:last').insertBefore('img:first');
  //         contenedor_img.css({left:'-'+100+'%'});
  //     })
  //    }
  //    let reset = 0;
  //    next.on('click', function(){
  //     siguiente();
  //     reset = 0;
  //    })
  //    antes.on('click', function(){
  //     anterior();
  //     reset = 0;
  //    })
  //    setInterval(() => {
  //     reset++;
  //         if (reset >1 ){
  //     siguiente()
  //         }
  //    },2000);
  var contenedor_img = $('.contenedor-img');
  var img = contenedor_img.find('.imgd').length;
  var valor = contenedor_img.css('width', img * 100 + '%');
  $('.imgd').css('width', 100 / img + '%');
  var prev = $('.contenedor-btn__prev');
  var next = $('.contenedor-btn__next');
  $('.imgd:last').insertBefore('.imgd:first');
  contenedor_img.css({
    left: '-' + 100 + '%'
  });

  function siguiente() {
    contenedor_img.animate({
      left: '-' + 200 + '%'
    }, 900, function () {
      $('.imgd:first').insertAfter('.imgd:last');
      contenedor_img.css({
        left: '-' + 100 + '%'
      });
    });
  }

  function anterior() {
    contenedor_img.animate({
      left: 0
    }, 900, function () {
      $('.imgd:last').insertBefore('.imgd:first');
      contenedor_img.css({
        left: '-' + 100 + '%'
      });
    });
  }

  var reset = 0;
  next.on('click', function () {
    siguiente();
    reset = 0;
  });
  prev.on('click', function () {
    anterior();
    reset = 0;
  });
  setInterval(function () {
    reset++;

    if (reset > 1) {
      siguiente();
    }
  }, 3000);
});