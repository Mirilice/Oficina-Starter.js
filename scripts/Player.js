function Player(sprite, x, y,classename,  h, w) {

    GameObject.call(this, sprite, x,y,"player", h,w);

}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);

Player.prototype.update = function () {
    if(se.teclado.CIMA){
        this.y-=5;
    }else if(se.teclado.BAIXO){
        this.y+=5;
    }
    if(se.teclado.ESQUERDA){
        this.x-=5;
    }else if (se.teclado.DIREITA){
        this.x+=5;
    }
    if (se.teclado.ESPACO){

        laser=new Bullet("lase1", 0, 0, -4);
        laser.setPosition(this.x + this.w/2, this.y - laser.h+100);
        laser.setFire(["enemy", "kill"]);
        
    }
};

