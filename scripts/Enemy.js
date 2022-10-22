function Enemy(sprite, x, y, classename,  h, w) {
    this.dir=0;
    this.time=0;
    GameObject.call(this, sprite,x,y, classename, h,w);
   
}

//fazendo herança
Enemy.prototype = Object.create(GameObject.prototype);


Enemy.prototype.update = function () {
    this.time++;
    if(this.dir==0){
        this.x+=3;
    

        if(this.x + this.w > canvas.width){
            this.dir=1;

         }

    }else{
        this.x-=3;
    
    
        if(this.x<0){
            this.dir=0;
            this.y+=3;
        }
    
    }


    if(this.time>100){
        this.time=0;
        laser=new Bullet("lase2", 0, 0, 4);
        laser.setPosition(this.x+this.w/2, this.y + this.h-20);
    }

};


Enemy.prototype.fired = function () {
    se.mlevel.removeObject(this);

}