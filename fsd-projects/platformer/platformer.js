$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 700, 200, 20, "purple"); // purple
    createPlatform(500, 600, 150, 20, "purple"); // purple
    createPlatform(800, 500, 100, 20, "purple"); // purple
    createPlatform(1130, 400, 50, 20, "purple"); // purple
    createPlatform(1375, 270, 25, 20, "purple"); // purple
    createPlatform(100, 300, 200, 20, "green", 100, 400, 2, 0, 0, 0); // green
    createPlatform(300, 200, 200, 20, "orange", 0, 0, 0, 200, 400, 1); // orange

    // TODO 3 - Create Collectables
    createCollectable("diamond", 350, 650);
    createCollectable("diamond", 950, 400);
    createCollectable("diamond", 1375, 225);
    createCollectable("diamond", 200, 100, 0, 1, 100, 300, 2);

    // TODO 4 - Create Cannons
    createCannon("right", 500, 1300);
    createCannon("top", 1300, 1000);
    createCannon("bottom", 400, 1300);
    createCannon("top", 200, 2000, 20, 10, 100, 400, 2);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});