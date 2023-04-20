  window.sr = ScrollReveal();
    sr.reveal('.dark-overlay', {
      duration: 2500,
    });

    sr.reveal('#chat1, #chat2, #chat3, #chat4, #chat5, #chat6, #chat7', {
      viewFactor: 0,
      duration: 2000,
      origin: 'top',
      distance: '20px',
    }, 4000)

    sr.reveal('#chat1, #chat3 ,#chat5, #chat7', {
      origin: 'top',
    }, 4000)

    sr.reveal('#chat2, #chat4, #chat6', {
      origin: 'bottom',
    }, 4000)

    sr.reveal('#chat1', {
        delay: 1000,
    }, 4000)

    sr.reveal('#chat2', {
        delay: 2500,
    }, 4000)

    sr.reveal('#chat3', {
        delay: 4000,
    }, 4000)

    sr.reveal('#chat4', {
        delay: 5500,
    }, 4000)

    sr.reveal('#chat5', {
        delay: 7000,
    }, 4000)

    sr.reveal('#chat6', {
        delay: 8500,
    }, 4000)

    sr.reveal('#chat7', {
        delay: 10000,
    }, 4000)

    
    sr.reveal('.h2', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'left',
      distance: '200px',
      reset: true,
    })

    sr.reveal('.container p', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'right',
      distance: '200px',
      reset: true,
    })

    sr.reveal('.i', {
      duration: 8000,
      viewFactor: 0.2,
      rotate: {x: 0, y: 900, z: 0}
    });

