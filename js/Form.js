class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.wait = createElement('h3');
    this.instructions=createElement('h4');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.wait.hide();
    this.instructions.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.wait.html("Waiting for other players to join...");
    this.wait.position(displayWidth/2-70,displayHeight/2);
    this.instructions.html("Press Left,Right,Up,Down and space keys to move(space is boost)");
    this.instructions.position(displayWidth/2-70,displayHeight/1.5);
    });
    

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      player.updateCounts(0);
    });

  }
}
