let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
        function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("row").style.marginLeft = "250px";
          document.getElementById("image-container").style.marginLeft = "250px";
          document.getElementById("footer").style.marginLeft = "250px";
          document.getElementById("btn").style.opacity = "0";
          document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
        
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("row").style.marginLeft= "0";
          document.getElementById("image-container").style.marginLeft= "0";
          document.getElementById("footer").style.marginLeft= "0";
          document.getElementById("btn").style.opacity = "1";
          document.body.style.backgroundColor = "white";
        }

        function openNav1() {
          document.getElementById("mySidenav").style.width = "250px";          
          document.getElementById("mapdiv").style.marginLeft = "250px";
          document.getElementById("btn").style.opacity = "0";
          document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
        
        function closeNav1() {
          document.getElementById("mySidenav").style.width = "0";      
          document.getElementById("mapdiv").style.marginLeft = "0";
          document.getElementById("btn").style.opacity = "1";
          document.body.style.backgroundColor = "white";
        }
        function openNav2() {
          document.getElementById("mySidenav").style.width = "250px";          
          document.getElementById("window-container").style.marginLeft = "250px";          
          document.querySelector("table").style.marginLeft = "750px";          
          var cards = document.getElementsByClassName("card");
            for (var i = 0; i < cards.length; i++) {
              cards[i].style.marginLeft = "250px";
            }
          document.getElementById("btn").style.opacity = "0";
          document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
        
        function closeNav2() {
          document.getElementById("mySidenav").style.width = "0";      
          document.getElementById("window-container").style.marginLeft = "0";          
          document.querySelector("table").style.marginLeft = "500px";
          var cards = document.getElementsByClassName("card");
            for (var i = 0; i < cards.length; i++) {
              cards[i].style.marginLeft = "0";
            }
          document.getElementById("btn").style.opacity = "1";
          document.body.style.backgroundColor = "white";
        }

        
        

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      
      