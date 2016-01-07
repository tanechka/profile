(function() {
	function Slideshow(element, btn) {
        this.el = document.querySelector(element);
        this.btn =  document.querySelector(btn);
        this.scrollEl(this.el);
        this.btnCreate(this.el, this.btn);
	}

	Slideshow.prototype.scrollEl = function(el){
        var massElements = el.children;
        var index = el.children.length;
        var slideWidth = el.clientWidth;
        var sliderUlWidth = index * slideWidth;
        var _self = this;
        var i = 0;

        this.play = function(){
          i < index - 1 ? i = 1 + i : i = 0;
          i < index - 1 ?  el.children[0].classList.remove('open') : el.children[0].classList.add('open');
          removeCurrentClass();
          el.children[i].classList.add('current');
        }

        var removeCurrentClass = function(){
            var mass = el.children;

            for(var k = 0; k < mass.length; k++){
                mass[k].classList.remove('current');
            } 
        }


        setInterval(function () {
          _self.play();
        }, 6000);

  }
    
    Slideshow.prototype.btnCreate = function(el, btn){
        var index = el.children.length;
        var createString = '';

        var createA = document.createElement("a");
        
        for(var k = 0; k < index; k++){
            createString = createString + createA.outerHTML;
        } 
        
        btn.innerHTML = createString;
        

    }

    
    
	document.addEventListener("DOMContentLoaded", function() {
		var slider = new Slideshow("#js-slider","#btn-slider");
	});
})();
