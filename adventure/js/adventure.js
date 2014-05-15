$(document).ready(function () {
  firstLoad();
  updateContainer();
  $(window).resize(function() {
    updateContainer();
  });
});

function firstLoad()
{
  
}

function updateContainer() {
  
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();