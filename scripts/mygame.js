const se = new StarterEngine();


se.setResources = function () {
    //Add lista resource
    this.loader.addResource("background", "Backgrounds/newSpace.png", "image");
    this.loader.addResource("shipblue", "bibonaFundo.png", "image");
    this.loader.addResource("enemyred", "diabao.png", "image");
    this.loader.addResource("lase1", "laserBlue01.png", "image");
    this.loader.addResource("lase2", "laserRed01.png", "image");
    this.loader.addResource("logogame", "logogame.png", "image");
    this.loader.addResource("play", "labelPlay.png", "image");
    this.loader.addResource("labelrank", "labelRanking.png", "image");
    this.loader.addResource("guiscore", "playerLife2_blue.png", "image");
    this.loader.addResource("laser", "laser.mp3", "audio");
};


//Quando o loading acabar
se.gameReady = function() {

    var fase = new Scene();
    fase.setFunctionStart(levelum);

    this.mlevel.addScene(fase);
}

function levelum(){
    new Background ("background", 0, 0);
    new Player ("shipblue", 300, 600, "player", 100, 100);
    new Enemy ("enemyred", 300, 100, "enemy", 100, 100);
}

/* //crie quantas funcoes precisar!!!

function setLevel1() {
    
}


function setMenu(){

}*/
