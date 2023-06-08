import MicroModal from 'micromodal';
// import Player from '@vimeo/player';
console.log("modal");

const modals = Array.prototype.slice.call( document.querySelectorAll('.modal') );

if(modals.length) {
  // const players = modals.map((modal, i) => {
  //   if( modal.querySelector("iframe") ) {

  //     modal.setAttribute("data-modal-number", i);
  //     return new Player(modal.querySelector("iframe"));

  //   }
  // });

  // players.forEach((player, i) => {
  //   // console.log(players[i]);
  //   player.on("fullscreenchange", function(e){
  //     // console.log(e.fullscreen);
  //     // console.log({player});
  //     if(!e.fullscreen) {
  //       console.log("exit full screen");
  //     }
  //   });
    
  // });

  MicroModal.init({
    onShow: function(modal) {
      console.log("on show");
      
      console.log({modal});
      // document.body.classList.add("overflow-hidden");
      // players[modal.dataset.modalNumber].play();

      // if(window.innerWidth < 768 ) {
        
      //   players[modal.dataset.modalNumber].on("fullscreenchange", function(e) {
      //     // console.log(e.fullscreen);
      //     // console.log({player});
      //     if(!e.fullscreen) {
      //       console.log(modal.id);
      //       console.log("exit full screen");
      //       MicroModal.close(modal.id); // [2]
      //     }
          
      //   });
        
      // }
    }, // [1]
    onClose: function(modal) {
      console.log("on close");
      console.log({modal});

      // document.body.classList.remove("overflow-hidden");
      // players[modal.dataset.modalNumber].pause();
      // players[modal.dataset.modalNumber].off("fullscreenchange");
      //   console.log("plater off");
      

    }, // [2]
    openTrigger: 'data-modal-open', // [3]
    closeTrigger: 'data-modal-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });

}