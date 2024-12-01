
fetch('/data/data.json')
        .then(response => response.json())
        .then(data => {
          document.querySelector('.heading').innerText = data.heading;
          document.querySelector('.text12').innerText = data.text12;
          document.querySelector('.text13').innerText = data.text13;
          document.querySelector('.we-sell-different').innerHTML = data.weSellDifferent;
          document.querySelector('.text19').innerText = data.text19;
          document.querySelector('.we-sell-your-homes').innerHTML = data.weSellYourHomes;
          document.querySelector('.experienced-agents').innerHTML = data.experiencedAgents;
          document.querySelector('.text22').innerHTML = data.text22;
          document.querySelector('.text25').innerHTML = data.text25;
          document.querySelector('.text30').innerText = data.text30;

          document.querySelector('.haunted-house').src = data.images.hauntedHouse;
          document.querySelector('.city-buildings').src = data.images.cityBuildings;
          document.querySelector('.real-estate').src = data.images.realEstate;
          document.querySelector('.house').src = data.images.house;
          document.querySelector('.downtown').src = data.images.downtown;
          document.querySelector('.handshake').src = data.images.handshake;
          document.querySelector('.img-2').src = data.images.dogHouse;
          document.querySelector('.line').src = data.images.line1;
          document.querySelector('.line-2').src = data.images.line2;
          document.querySelector('.image-3').src = data.images.imagerev;
          document.querySelector('.star').src = data.images.star1;
          document.querySelector('.star-2').src = data.images.star2;
          document.querySelector('.star-3').src = data.images.star3;
          document.querySelector('.star-4').src = data.images.star4;
          document.querySelector('.image-4').src = data.images.image1;
          document.querySelector('.image-5').src = data.images.image2;
          document.querySelector('.image-6').src = data.images.image3;
          document.querySelector('.image-7').src = data.images.image4;
          document.querySelector('.image-8').src = data.images.image5;
          document.querySelector('.qr-code').src = data.images.qrCode;
          document.querySelector('.apple-logo').src = data.images.appleLogo;
          document.querySelector('.google-play').src = data.images.googlePlay;
          document.querySelector('.facebook').src = data.images.facebook;
          document.querySelector('.twitter').src = data.images.twitter;
          document.querySelector('.instagram').src = data.images.instagram;
          document.querySelector('.linked-in').src = data.images.linkedIn;
        
          document.querySelector('.facebook').addEventListener('click', function() {
            window.open('https://www.facebook.com');
          });
          
          document.querySelector('.twitter').addEventListener('click', function() {
            window.open('https://www.twitter.com');
          });
          
          document.querySelector('.instagram').addEventListener('click', function() {
            window.open('https://www.instagram.com');
          });
          
          document.querySelector('.linked-in').addEventListener('click', function() {
            window.open('https://www.linkedin.com');
          });
          const scrollToFrame = document.querySelector('.text58');
  
          scrollToFrame.addEventListener('click', function(event) {
            event.preventDefault();
            
            
            const targetElement = document.getElementById('frame-section');
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
              top: targetPosition - 80, 
              behavior: 'smooth'
            });
          });
          const scrollToDiv1 = document.querySelector('.text61');
          scrollToDiv1.addEventListener('click', function(event) {
            event.preventDefault();
            const targetElement = document.getElementById('div1');
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: targetPosition - 80, 
              behavior: 'smooth'
            });
          });
          const scrollToEnding = document.querySelector('.text62');
          scrollToEnding.addEventListener('click', function(event) {
            event.preventDefault();
            const targetElement = document.querySelector('.ending');
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: targetPosition - 80,  
              behavior: 'smooth'
            });
          });
        });

          