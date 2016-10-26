(function (root, factory) {
        if (typeof define === 'function') {
            define(factory);
        }else if (typeof exports === 'object') {
            module.exports = factory;
        } else {
            root.WN = factory();
        }
})(this,function(){
        var WN = {},
            body=document.body || document.documentElement,
            style=body.style, 
            transition="transition",
            transitionEnd,
            animationEnd,
            vendorPrefix; 
          
        transition=transition.charAt(0).toUpperCase() + transition.substr(1);
  
        vendorPrefix=(function(){//现在的opera也是webkit
            var  i=0, vendor=["Moz", "Webkit", "Khtml", "O", "ms"];
            while (i < vendor.length) {
                if (typeof style[vendor[i] + transition] === "string") {
                  return vendor[i];
                }
                i++;
            }
            return false;
        })();
  
        transitionEnd=(function(){
            var transEndEventNames = {
              WebkitTransition : 'webkitTransitionEnd',
              MozTransition    : 'transitionend',
              OTransition      : 'oTransitionEnd otransitionend',
              transition       : 'transitionend'
            }
            for(var name in transEndEventNames){
                if(typeof style[name] === "string"){
                    return transEndEventNames[name]
                }
            }
        })();
  
        animationEnd=(function(){
            var animEndEventNames = {
              WebkitAnimation : 'webkitAnimationEnd',
              animation      : 'animationend'
            }
            for(var name in animEndEventNames){
                if(typeof style[name] === "string"){
                    return animEndEventNames[name]
                }
            }
        })();
        WN.addTranEvent=function(elem,fn,duration){
            var called=false;
            var fncallback = function(){
                    if(!called){
                        fn();
                        called=true;
                    }
            };
            function hand(){    
                elem.addEventListener(transitionEnd, function () {
                    elem.removeEventListener(transitionEnd, arguments.callee, false);
                        fncallback();
                }, false);
            }
            setTimeout(hand,duration);
        };
        WN.addAnimEvent=function(elem,fn){
            console.log(animationEnd)
            elem.addEventListener(animationEnd,fn,false)
        };
  
        WN.removeAnimEvent=function(elem,fn){
            elem.removeEventListener(animationEnd,fn,false)
        };
  
        WN.setStyleAttribute=function(elem,val){
            if(Object.prototype.toString.call(val)==="[object Object]"){
                for(var name in val){
                    if(/^transition|animation|transform/.test(name)){
                        var styleName=name.charAt(0).toUpperCase() + name.substr(1);
                        elem.style[vendorPrefix+styleName]=val[name];
                    }else{
                        elem.style[name]=val[name];
                    }
                }
            }
        };
        WN.transitionEnd=transitionEnd;
        WN.vendorPrefix=vendorPrefix;
        WN.animationEnd=animationEnd;
        return WN;
    });