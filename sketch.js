var bg,bgImage
function preload(){
    bgImage=loadImage('house1.jpg')
    boyImage=loadAnimation('b1.png','b2.png','b3.png','b4.png','b5.png','b6.png')
    boyl=loadAnimation('b1l.png','b2l.png','b3l.png','b4l.png','b5l.png','b6l.png')
    boyS=loadImage('b3.png')
    boyW=loadImage('b3l.png')
    tboximg=loadImage("tbox.png")
    p1img= loadImage('solve2.jpg')
    p2img= loadImage('solve3.jpg')
    qmimg=loadImage('q.png')
    keyimg=loadImage('key.png')
    circleimg= loadImage('circle.gif')
    carrotimg=loadImage('carrot.png')
    oddimg=loadImage('odd.png')
}
function setup(){
    createCanvas(1200,600)
    //bg=createSprite(1200,1200)
    //bg.addImage(bgImage)
    boy=createSprite(600,120,10,10);
  
    boy.addImage('walking',boyS)
    boy.scale=0.4
    InvisibleGround1=createSprite(560,595,width,10)

    InvisibleGround2=createSprite(250,360,width/3,10)
    InvisibleGround3=createSprite(750,360,width/3,10)
    InvisibleGround4=createSprite(720,130,width/4,5)
    InvisibleGround1.visible=false
    InvisibleGround2.visible=false
    InvisibleGround3.visible=false
    InvisibleGround4.visible=false
    tbox=createSprite(725,90,50,20)
    tbox.addImage(tboximg)
    tbox.scale=0.2
    tbox1=createSprite(810,90,50,20)
    tbox1.addImage(tboximg)
    tbox1.scale=0.2
    tbox2=createSprite(800,325,50,20)
    tbox2.addImage(tboximg)
    tbox2.scale=0.2
    boy.depth=tbox.depth
    boy.depth=boy.depth+1
    tbox.debug=false;
    tbox.setCollider("rectangle",0,0,50,20)
    tbox1.setCollider("rectangle",0,0,50,20)
    tbox2.setCollider("rectangle",0,0,50,20)
    //tbox.setCollider("rectangle",0,0,50,20)
    boy.debug=false;
    p1=createSprite(250,200,150,150)
    p1.visible=false;
    pp= createInput('Enter Answer here')
    pp.visible=false
    pp2=createInput('Enter Answer')
    pp2.visible=false;
    pp3=createInput('Enter Answer')
    pp3.visible=false;
    submit=createButton('submit')
    submit.visible=false;
    good=createElement('h2')
    
    tbox3=createSprite(350,325,50,20)
    tbox3.addImage(tboximg)
    tbox3.scale=0.2

    tbox4=createSprite(210,555,50,20)
    tbox4.addImage(tboximg)
    tbox4.scale=0.2


    
    
    q2=createSprite(750,575,50,20)
    q2.addImage(qmimg)
    q2.scale=0.05

    q3=createSprite(1150,490,50,20)
    q3.addImage(qmimg)
    q3.scale=0.05

    q4=createSprite(190,250,50,20)
    q4.addImage(qmimg)
    q4.scale=0.05

    q5=createSprite(985,480,50,20)
    q5.addImage(qmimg)
    q5.scale=0.05

    q6=createSprite(70,360,50,20)
    q6.addImage(qmimg)
    q6.scale=0.05


    key=createSprite(210,320,50,20)
    key.addImage(keyimg)
   key.scale=0.05

}
function draw(){
    
    background(bgImage)
    if(keyDown('LEFT_ARROW')){
        boy.x=boy.x-5;
        boy.addAnimation('walking',boyl)
    }
    if(keyDown('RIGHT_ARROW')){
        boy.x=boy.x+5;
        boy.addAnimation('walking',boyImage)
    }
    if(keyDown('DOWN_ARROW')){
        boy.y=boy.y+5;
        boy.addAnimation('walking',boyImage)
    } 
    if(keyDown('space') ){
        boy.velocityY-=2;
        boy.addAnimation('walking',boyImage)
    }
    
    boy.velocityY+=0.8;
    boy.collide(InvisibleGround1)
    boy.collide(InvisibleGround2)
    boy.collide(InvisibleGround3)
    boy.collide(InvisibleGround4)
   
    //Treasure 1: unscramble word
    if(boy.isTouching(tbox)){
        background('gold')
        fill('red')
        textSize(15)
        text("Unscramble the word below to get to the key",500,200)
        strokeWeight(55)
        textSize(25)
        text('C O C O H T E L A',500,300)
        pp.visible=true;
        boy.visible=false
        
      
       pp.position(500,400,100,100)
       submit.position(700,400,100,100)
        ans=pp.value()
        submit.mousePressed(()=>{
        if(ans=="chocolate"||ans=="CHOCOLATE"){
            pp.hide()
            strokeWeight(25)
            textSize(25)
            good.html('Good Job,press right arrow key to continue')
            good.position(300,300)
            submit.hide()
            good.show()
        }
    })
        
    }
boy.visible=true;
//treasure 2: Find missing letter
if(boy.isTouching(tbox1)){
background('gold')
fill('red')
textSize(15)
text("Find the missing letter (hint:the missing letters are vowels",500,200)
strokeWeight(55)
textSize(25)
text('T R  _ _ S _ R _',500,300)
pp.visible=true;
boy.visible=false
tbox.visible=false

pp.position(500,400,100,100)
submit.position(700,400,100,100)
ans=pp.value()
submit.mousePressed(()=>{
if(ans=="TREASURE"||ans=="treasure" ){
    pp.hide()
    
    strokeWeight(25)
    textSize(25)
    good.html('Good Job,press right arrow key to continue')
    good.position(300,300)
    submit.hide()
    good.show()
}
})  
    }

   //treasure 3: Unscramble proverb and find answer
    
    if(boy.isTouching(q2)){
        background('wheat')
        fill('purple')
        textSize(15)
        text(" ROF IEMT NENO DNA EDIT SIATW ",500,200)
        pp2.visible=true;
        boy.visible=false
       pp2.position(500,400,100,100)
       submit.position(700,400,100,100)
        ans=pp2.value()
        submit.mousePressed(()=>{

            if(ans=="CLOCK"||ans=="clock" ){
                pp2.hide()
            
                
                strokeWeight(25)
                textSize(25)
                good.html('Hurray!!You just found the location of key')
                good.position(300,300)
                submit.hide()
                good.show()
                    
            }
     })
    }

       //treasure 4: Count the circles find answer
    
       if(boy.isTouching (q4)){
        background('wheat')
        image(circleimg,displayWidth/2,displayHeight/2,200,200)
        textSize(15)
        text(" Count the circles ",500,200)
        pp3.visible=true;
        boy.visible=false
       pp3.position(500,400,100,100)
       submit.position(700,400,100,100)
        ans=pp3.value()
        submit.mousePressed(()=>{

            if(ans=="15" ){
                pp3.hide()
            
                
                strokeWeight(25)
                textSize(25)
                good.html('Hurray!!You just found the location of the key')
                good.position(300,300)
                submit.hide()
                good.show()
                    
            }
     })
    }

    
       //treasure 5: carrot mystery 
       if(boy.isTouching(q5)){
        background('wheat')
        image(carrotimg,displayWidth/2,displayHeight/2,200,200)
        textSize(15)
        text(" Guess the word ",500,200)
        pp4.visible=true;
        boy.visible=false
       pp4.position(500,400)
       submit.position(700,400,100,100)
        ans=pp4.value()
        submit.mousePressed(()=>{

            if(ans=="carrot" ){
                pp4.hide()
                strokeWeight(25)
                textSize(25)
                good.html('Hurray!!Your answer is correct')
                good.position(300,300)
                submit.hide()
                good.show()
            }
        })
    }
//Treasure 6:odd one out
     if(boy.isTouching(q6)){
        background('wheat')
        image(oddimg,displayWidth/2,displayHeight/2,200,200)
        textSize(15)
        text("Find the odd out ",500,200)
        pp5.visible=true;
        boy.visible=false
    pp5.position(500,400,100,100)
    submit.position(700,400,100,100)
        ans=pp5.value()
        submit.mousePressed(()=>{

            if(ans=="7" ){
                pp5.hide()
                strokeWeight(25)
                textSize(25)
                good.html('Hurray!!Your answer is correct')
                good.position(300,300)
                submit.hide()
                good.show()
            }
        })
    }

    drawSprites();
}
