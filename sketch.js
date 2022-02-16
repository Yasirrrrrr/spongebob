let j;

function setup() 
{
  // put setup code here
  createCanvas(400,200)
  j = 0
}

function draw() 
{
  // put drawing code here
  background(255,192,203);
  line(200,0,200,200);
  j +=1
  {
    //gambar spongebob sebelah kiri
  //badan 
  strokeWeight(1)
  fill(255,255,0)

var y =  70 + 20*Math.sin(PI*j/100)
  rect(50,y,83,80, radians(350), radians(350))
  fill(150,75,0)

var y =  130 + 20*Math.sin(PI*j/100)
  rect(48,y,88,38, radians(200), radians(100))
  }

  {
    //mata
   strokeWeight(1)
   fill(255,255,255)

   var y =  90 + 20*Math.sin(PI*j/100)
   ellipse(80,y,20,25)

   var y =  90 + 20*Math.sin(PI*j/100)
   ellipse(100,y,20,25)
   fill(0,255,255)

   var y =  90 + 20*Math.sin(PI*j/100)
   ellipse(80,y,10,15)

   var y =  90 + 20*Math.sin(PI*j/100)
   ellipse(100,y,10,15)

   strokeWeight(5)
   var y =  90 + 20*Math.sin(PI*j/100)
   point(82,y)

   var y =  90 + 20*Math.sin(PI*j/100)
   point(98,y)
  }

  {
    //mulut
   strokeWeight(1)
   fill(255,255,255)

   var y =  110 + 20*Math.sin(PI*j/100)
   rect(78,y,25,15)
   strokeWeight(1)
   fill(255,255,255)

   var y =  110 + 20*Math.sin(PI*j/100)
   rect(85,y,5,5)

   fill(255,255,255)
   var y =  110 + 20*Math.sin(PI*j/100)
   rect(90,y,5,5)
  }

  {
    //tangan
   strokeWeight(2)

   var y =  130 + 20*Math.sin(PI*j/100)
   var x = 130 + 20*Math.sin(PI*j/5)
   line(50,y,30,x)
  
   var y =  130 + 20*Math.sin(PI*j/100)
   var x = 130 + 20*Math.sin(PI*j/5)
   line(135,y,150,x)
  }

  {
    //baju
   fill(255,0,0)
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(48,y,20,10)
  
   fill(128,128,0)
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(58,y,15,10)
  
   fill(255,255,255)
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(68,y,15,10)
  
   fill(252,280,99)
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(78,y,15,10)
  
   fill(300,40,2)
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(88,y,15,10)
  
   fill(191,0,255)
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(98,y,20,10)
  
   fill(0,0,0)
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(108,y,18,10)
  
   fill(255,127,0) 
   var y =  140 + 20*Math.sin(PI*j/100)
   rect(118,y,15,10)
  
    fill(0,255,0)
   var y =  140 + 20*Math.sin(PI*j/100)
    rect(118,y,18,10)
  }

  {
    //gambar spongebob sebelah kanan
   //badan 
   strokeWeight(1)
   fill(255,255,0)
   rect(250,60,83,80, radians(350), radians(350))
   fill(150,75,0)
   rect(248,130,88,38, radians(200), radians(100))


   //mata
   strokeWeight(1)
   fill(255,255,255)
   ellipse(280,90,20,25)
   ellipse(300,90,20,25)
   fill(0,255,255)
   ellipse(280,90,10,15)
   ellipse(300,90,10,15)
   strokeWeight(5)
   point(282,90)
   point(298,90)

   //mulut
   strokeWeight(1)
   fill(255,255,255)
   rect(278,110,25,15)
   rect(285,110,5,5)
   rect(290,110,5,5)

   //tangan
   strokeWeight(2)
   line(250,130,230,165)
   line(335,130,350,165)


   //baju
   fill(255,0,0)
   rect(248,140,20,10)
   fill(128,128,0)
   rect(258,140,15,10)
   fill(255,255,255)
   rect(268,140,15,10)
   fill(252,280,99)
   rect(278,140,15,10)
   fill(300,40,2)
   rect(288,140,15,10)
   fill(191,0,255)
   rect(298,140,20,10)
   fill(0,0,0)
   rect(308,140,18,10)
   fill(255,127,0)
   rect(318,140,15,10)
   fill(0,255,0)
   rect(318,140,18,10)
  }

}

