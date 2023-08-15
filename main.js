// Рамка "Подтвердить"


window.onload = function() {
    var popupContainer = document.getElementById("popupContainer");
    var confirmButton = document.getElementById("confirmButton");

    confirmButton.onclick = function() {
      popupContainer.style.display = "none";
    };
  };


  // Изменить тему
  const changeColorButton = document.getElementById("changeColorButton");
        changeColorButton.addEventListener("click", function() {
          const randomColor = generateRandomColor();
          document.body.style.backgroundColor = randomColor;
        });
        
        function generateRandomColor() {
          const letters = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }

        const changeColorButton1 = document.getElementById("changeColorButton1");
        changeColorButton1.addEventListener("click", function() {
          const randomColor = generateRandomColor();
          document.body.style.backgroundColor = randomColor;
        });
        
        function generateRandomColor() {
          const letters = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
        // Уведомление
        window.addEventListener('DOMContentLoaded', function(event) {
          var notification = document.getElementById('notification');
        
          setTimeout(function() {
            notification.style.display = 'block';
        
            setTimeout(function() {
              notification.style.display = 'none';
            }, 10000);
          }, 20000);
        });

        window.addEventListener('DOMContentLoaded', function(event) {
          var notification = document.getElementById('notification1');
        
          setTimeout(function() {
            notification.style.display = 'block';
        
            setTimeout(function() {
              notification.style.display = 'none';
            }, 10000);
          }, 60000);
        });

        window.addEventListener('DOMContentLoaded', function(event) {
          var notification = document.getElementById('notification1');
        
          setTimeout(function() {
            notification.style.display = 'block';
        
            setTimeout(function() {
              notification.style.display = 'none';
            }, 10000);
          }, 200000);
        });

        window.addEventListener('DOMContentLoaded', function(event) {
          var notification = document.getElementById('notification');
        
          setTimeout(function() {
            notification.style.display = 'block';
        
            setTimeout(function() {
              notification.style.display = 'none';
            }, 10000);
          }, 300000);
        });

        // Внопка вниз страницы
        function scrollDown() {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }
    
        // Отображение/скрытие кнопки в зависимости от положения прокрутки
        window.onscroll = function() {
          var scrollButton = document.querySelector('.scroll-button');
          if (window.scrollY > -1) {
            scrollButton.style.display = 'block';
          } else {
            scrollButton.style.display = 'none';
          }

         
        };

      