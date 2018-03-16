(function($) {

  $('#section-1').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {
      anime({
        targets: '.box',
        translateX: function() { return anime.random(-50, 50) + 'vw'; },
        translateY: function() { return anime.random(-50, 50) + 'vh'; },
        scale: function() { return anime.random(10,30) / 10; },
        rotate: function() { return anime.random(-360,360); },
        duration: function() { return anime.random(1000,2000); },
        easing: 'easeOutQuad',
        // direction: 'alternate',
        loop: false,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        },
        begin: function(anim) {
          $(event.target).find('.log h1').html('Started');
        },
        complete: function(anim) {
          $(event.target).find('.log h1').html('Completed');
        }
      });
    }
  });

  $('#section-2').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

      var basicTimeline = anime.timeline({
        direction: 'alternate',
        loop: 3,
        elasticity: 350
      });
      basicTimeline.begin = function(anim) {
        $(event.target).find('.log h1').html('Started');
      };
      basicTimeline.complete = function(anim) {
        $(event.target).find('.log h1').html('Completed');
        $(event.target).find('.log h5').html('100%');
      };
      basicTimeline.run = function(anim) {
        $(event.target).find('.log h5').html(Math.round(anim.progress) + '%');
      }
      basicTimeline
        .add({
          targets: '.button',
          duration: 800,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 20,
          width: 20,
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: '.progress-bar',
          duration: 800,
          width: 500,
          elasticity: 350
        })
        .add({
          targets: '.button',
          duration: 300,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 80,
          duration: 300,
          width: 500,
          elasticity: 350
        })
    }
  });

  $('#section-3').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
      var buttonPressed = anime({
      targets: '.button3',
      translateX: 250,
      scale: 2,
      rotate: '1turn'
    });

  });

  $('#section-4').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    var controlsProgressEl = document.querySelector('#TLcontrols .progress');
    var TLcontrols = anime.timeline({
      direction: 'alternate',
      loop: false,
      easing: 'linear',
      update: function(anim) {
        controlsProgressEl.value = anim.progress;
      }
    });

    TLcontrols
      .add({
        targets: '#TLcontrols .square.el',
        translateX: 400,
        translateY: 250,
        duration: 3000,
        offset: 0
      })
      .add({
        targets: '#TLcontrols .circle.el',
        translateX: 400,
        translateY: 10,
        duration: 1000,
        offset: 0
      })

    document.querySelector('#TLcontrols .play').onclick = TLcontrols.play;
    document.querySelector('#TLcontrols .pause').onclick = TLcontrols.pause;
    document.querySelector('#TLcontrols .restart').onclick = TLcontrols.restart;

    controlsProgressEl.addEventListener('input', function() {
      TLcontrols.seek(TLcontrols.duration * (controlsProgressEl.value / 100));
    });

    ['input','change'].forEach(function(evt) {
      controlsProgressEl.addEventListener(evt, function() {
        TLcontrols.seek(TLcontrols.duration * (controlsProgressEl.value / 100));
      });
    });

      });

  $('#section-5').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

  });

})(jQuery);