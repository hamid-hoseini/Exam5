document.addEventListener('DOMContentLoaded' , function() {
    var selected=false;
    var circle=document.getElementsByClassName('circle')[0];
    var rectangle=document.getElementsByClassName('rectangle')[0];
    var ellipse=document.getElementsByClassName('ellipse')[0];
    var draw=document.getElementsByClassName('draw')[0];
    var span=document.getElementsByTagName('span')[0];
    var start=false;
    var index=0;
    var shape=0;
    var mouse=[0,0,0,0];
    var cnt=0;
    circle.addEventListener('mousedown', function (event) {
        circle.className='circle clicked';
        rectangle.className='rectangle';
        ellipse.className='ellipse';
        span.innerHTML='Circle selected...';
        event.stopImmediatePropagation();
        /*if (selected){ selected=false;
         circle.className='circle';
         span.innerHTML='';
         } else {
         selected=true;
         circle.className='circle clicked';
         }*/
        shape=1;
    });
    rectangle.addEventListener('mousedown', function (event) {
        rectangle.className='rectangle clicked';
        circle.className='circle';
        ellipse.className='ellipse';
        span.innerHTML='Rectangle selected...';
        event.stopImmediatePropagation();

        /* if (selected){ selected=false;
         rectangle.className='rectangle';
         span.innerHTML='';
         } else {
         selected=true;
         rectangle.className='rectangle clicked';
         }*/
        shape=2;
    });
    ellipse.addEventListener('mousedown', function (event) {
        ellipse.className='ellipse clicked';
        circle.className='circle';
        rectangle.className='rectangle';
        span.innerHTML='Ellipse selected...';
        event.stopImmediatePropagation();
        /*if (selected){ selected=false;
         ellipse.className='ellipse';
         span.innerHTML='';
         } else {
         selected=true;
         ellipse.className='ellipse clicked';
         }*/
        shape=3;
    });
    var cord=[];
    document.addEventListener('mousedown', function (event) {
        var locationx = event.clientX;
        var locationy = event.clientY;
        cord.push(locationx);
        cord.push(locationy);
        if (cord.length==4) {
            drawShape(cord,shape);
        }

    });
    /*            document.addEventListener('mousemove', function (event) {
     var locationx = event.clientX;
     var locationy = event.clientY;
     if (cnt==1) {
     mouse[2]=locationx;
     mouse[3]=locationy;
     //cnt=1;
     }

     drawShape(mouse,shape);

     });

     document.addEventListener('click', function (event) {
     var locationx = event.clientX;
     var locationy = event.clientY;

     if (cnt==0) {
     mouse[0]=locationx;
     mouse[1]=locationy;
     cnt=1;
     }
     else {
     if (cnt==1){
     mouse[2]=locationx;
     mouse[3]=locationy;
     cnt=0;
     }
     }
     drawShape(mouse,shape);
     //console.log(locationx);
     //console.log(locationy);

     });*/
    function drawShape(arr,shape) {
        //if (shape==0) return;
        var cordx=arr[2]-arr[0];
        var cordy=arr[3]-arr[1];
        cordx=cordx<0?cordx*(-1):cordx;
        cordy=cordx<0?cordy*(-1):cordy;
        var rad=cordx/2;
        var div=document.createElement('div');

        div.style.width=cordx+'px';
        div.style.height=cordy+'px';
        div.style.backgroundColor=getRandomColor();
        div.style.zIndex=index++;
        div.style.position='absolute';
        div.style.left=arr[0]+'px';
        div.style.top=arr[1]+'px';
        div.style.opacity='0.5';
        switch (shape){
            case 1:
                div.style.height=cordx+'px';
                div.style.borderRadius=rad+'px';
                break;
            case 2:
                break;
            case 3:
                div.style.borderRadius=(cordx+'px/'+cordy+'px');
                break;
        }
        var maindiv=document.getElementsByTagName('div')[0];
        maindiv.appendChild(div);
        cord=[];
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});