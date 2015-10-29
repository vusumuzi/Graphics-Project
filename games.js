
      // Gets a handle to the element with id canvasOne.
      var canvas = document.getElementById("canvas");
      // Get a 2D context for the canvas.
      var ctx = canvas.getContext("2d");
      


var player={
    x:10,
    y:10,
    r:3,
    draw: function(){
        //console.log("1");
        ctx.clearRect(0,0,1000,1000);
        ctx.beginPath();
        ctx.arc(player.x,player.y,player.r,0,2*Math.PI);
        ctx.fill();
    },
    collisions: function(){
    if(player.x<=0+player.r){player.x=1+player.r;}
        if(player.x>=canvas.width-player.r){player.x=canvas.width-player.r;}
       if(player.y<=0+player.r){player.y=1+player.r;}
        if(player.y>=canvas.height-player.r){player.y=canvas.height-player.r;}
    }
}

function main(){
    //console.log("1");
       player.draw();
    player.collisions();
    
    window.requestAnimationFrame(main);
}
window.requestAnimationFrame(main);
      // Add an event listener to the keypress event.
      window.addEventListener("keydown", function(event) { 
        // Just log the event to the console.
          if(event.keyCode==39){//right
            player.x+=10;
              console.log(event);
          }
          if(event.keyCode==37){//left
            player.x-=10;
              console.log(event);
          }
          if(event.keyCode==40){//down
            player.y+=10;
              console.log(event);
          }
          if(event.keyCode==38){//up
            player.y-=10;
              console.log(event);
          }
          
      });