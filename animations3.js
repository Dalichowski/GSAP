const displayFactory3 = function(){
    var conveyor = document. getElementsByClassName("conveyor")[0];
    var topDiv = conveyor.getElementsByClassName("topDiv")[0];
    var inLove = topDiv.getElementsByTagName("button")[2];
    
    //EMOJI LOVE FACE//
    inLove.onclick = function(){
        TweenMax.to(".emptyFace", 2, {x:150, scale:5, delay: 2, onComplete:function(){
            TweenMax.to(".emptyFace", 4, {x:450})
        }});
        TweenMax.to(".eyeFace2", 4, {x:730, rotation: 720, delay: 8, onComplete:function(){
            TweenLite.to(".eyeFace2", 2.5, { ease: Bounce.easeOut, rotation: 360, y: 140, onComplete:function(){
                TweenMax.to(".eyeLove", 4, {x: -520, rotation: -720})
            }})
        } 
        })
        TweenMax.to(".loveFace", 5, {x:-520, rotation: -720, delay: 19, onComplete:function(){
            TweenLite.to(".loveFace", 3, { ease: Bounce.easeOut, rotation: 360, y: 190, onComplete:function(){
                TweenLite.to(".loveFace", 2.5, {x:1, onComplete:function(){
                    TweenLite.to(".loveFace", 0.5, {y:300, onComplete:function(){
                        TweenLite.to(".loveFace", 1, {autoAlpha: 0})
                    }})
                }})
            } })
        }})
        //GLOWING TITLE//
        TweenMax.set(".welcome", {
        textShadow:"5px 0px 10px yellow, 0px 5px 10px white, 5px 0px 10px white, 0px -5px 10px white"})
        //WHEEL//
        TweenMax.to(".wheel", 2, {rotation:360, ease:Linear.easeNone, repeat:-1});
        TweenMax.to(".wheel2", 2, {rotation:-360, ease:Linear.easeNone, repeat:-1});
        TweenMax.to(".whTruck, .whTruck1, .whTruck2", 2, {rotation:360, ease:Linear.easeNone, repeat:-1, delay:30});
        //CONTROL SYSTEM//
        TweenMax.to(".control", 0.1, {x:"+=5", yoyo:true, repeat:-1});
        TweenMax.to(".control", 0.1, {x:"-=5", yoyo:true, repeat:-1});
        //ARM//
        TweenMax.to(".arm", 2.5, {x:510, delay:27});
        
        //TRUCK//
        TweenMax.to(".truck", 5, {x:1500, delay:33});
    }
       

}

window.onload = displayFactory3;