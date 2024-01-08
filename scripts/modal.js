$(document).ready(function() {
  // MODAL
  var modalText = {
    customcompliance: {
      title: 'Custom Compliance Standards',
      tag: 'REST API Development',
      detail:
        'Custom Compliance Standards allow users to create their own Compliance Standards from a list of controls that map to rules. Compliance Standards are an industry specific term used to judge an organisations level of compliance to various security recommendations. Common compliance standards include NIST, AWAF and PCI DSS. Custom compliance takes this to the next level, allowing users to mix and match any security controls they need.',
      link: 'https://cloudone.trendmicro.com/docs/conformity/api-reference/tag/Custom-Compliance-Standards#paths/~1compliance-standards~1custom/post'
    },
    activelife: {
      title: 'ActiveLife by FitSense',
      tag: 'HEALTH MOBILE APP',
      detail:
        'ActiveLife is a white-label app for insurers to attract and engage customers while helping customers live healthier and save on their insurance.',
      link: 'https://apps.apple.com/us/app/activelife-2-by-fitsense/id1455568345'
    },
    popupstacks: {
      title: 'Popup Stacks',
      tag: 'DISTRIBUTED SYSTEMS - DEPLOYMENT SCALING',
      detail:
        'At FitSense we encountered an issue where developers testing in the same development environment caused their tests to clash. This caused a bottleneck in development time because developers had to tiptoe around each other when they needed to run tests. I was tasked to implement infrastructure as code allowing developers to deploy our Microservices Back-End as a completely isolated environment from a Git branch to AWS on demand which increased developer productivity as developers were no longer interfering with each other in the same development environment.',
      link: 'https://medium.com/@mitchellshelton97/key-lessons-learnt-from-scaling-a-development-environment-2c1af911c31?sk=feed552ccaabcd05ccb0dd49c6ce312d'
    },
    notare: {
      title: 'Notare: YouTube Notetaking',
      tag: 'GOOGLE CHROME EXTENSION',
      detail:
      '86% of YouTubers use the platform to learn and yet, youtube is not designed as an educational tool. Notare is a dedicated notetaking Chrome extension integrated with YouTube to allow seamless documentation of notes, with a companion web app to organise your learning.',
      link: 'https://github.com/alexanderj2357/Notare'
    },
    ratelimiter: {
      title: 'Fixed Window Api Rate Limiter',
      tag: 'DISTRIBUTED SYSTEMS',
      detail: 'I created an Open Source API Rate Limiter using a Fixed Window algorithm and a Redis cache for keeping track of the number of requests a user sends.',
      link: 'https://github.com/armoured/Api-Rate-Limiter'
    },
    alice: {
      title: 'A.L.I.C.E',
      tag: 'EDUCATIONAL CYBER SECURITY MOBILE GAME',
      detail: 'I worked closely with the UNSW Development Team to build an educational cyber security game called A.L.I.C.E to improve staff/student knowledge of security. The game contains a strong focus on brute-forcing passwords, phishing, anti-virus and social engineering.',
      link: 'https://apps.apple.com/au/app/a-l-i-c-e/id1308819837'
    },
    smartgames: {
      title: 'Road-Vis',
      tag: '3rd Place - Telstra SMART Games 2018',
      detail: 'Received 3rd place out of 70 teams for a system that utilises computer vision to detect road-related assets and provides real time information on their status. The system leverages government vehicles such as garbage trucks to autonomously obtain this data without human interaction.',
      link: 'https://www.youtube.com/watch?v=XZsToBKA_oM'
    },
    mystand: {
      title: 'MyStand',
      tag: 'CROWD-FUNDED CHARITY.',
      detail:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.'
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail:
        'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail:
        'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      if (id === 'notare' || id === 'alice' || id === 'activelife' || id === 'smartgames' || id === 'ratelimiter' || id === 'popupstacks' || id === 'customcompliance') {
        // $(this).css({
        //   background:
        //     "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        //   backgroundSize: '100% 100%'
        // });
                  
        // no-repeat fixed center

        $(this).css({
          background:
            "url('img/slides/" + id + '-' + index + ".jpg') no-repeat center center/cover",
          backgroundSize: 'contain'
        });
      } else {
        $(this).css({
          background:
            "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
          backgroundSize: 'cover'
        });
      }
    });
  }
});
