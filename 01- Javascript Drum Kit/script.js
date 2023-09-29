window.addEventListener("keydown", function(e) {
    const audio  =  document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return ; // correct key is not pressed
    audio.currentTime = 0 ; // reset audio - play from start
    audio.play();
    key.classList.add('playing');
    // setTimeout(() => {
    //   key.classList.remove('playing');
    // }, 70);
  })

  function  removeTransition(e) {
      if(e.propertyName !== 'transform' ) return ; // transition not happened on transform property
      this.classList.remove('playing')
  }

  const keys =  document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))