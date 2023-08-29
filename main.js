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

        const changeColorButton2 = document.getElementById("changeColorButton2");
        changeColorButton2.addEventListener("click", function() {
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

        window.addEventListener('DOMContentLoaded', function(event) {
          var notification = document.getElementById('notification2');
        
          setTimeout(function() {
            notification.style.display = 'block';
        
            setTimeout(function() {
              notification.style.display = 'none';
            }, 10000);
          }, 40000);
        });
        window.addEventListener('DOMContentLoaded', function(event) {
          var notification = document.getElementById('notification2');
        
          setTimeout(function() {
            notification.style.display = 'block';
        
            setTimeout(function() {
              notification.style.display = 'none';
            }, 10000);
          }, 80000);
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

// JavaScript код для поиска текста на странице для основной панели
document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  var searchText = document.getElementById("searchInput").value;
  alert("Найденый текст в этом канале подсвечен желтым цветом!")
  if (searchText) {
  var elements = document.getElementsByTagName("body")[0].querySelectorAll(":not(script):not(style):not(meta):not(title):not(link):not(head):not(html):not(body):not(br):not(a):not(img)");
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  if (element.innerHTML.includes(searchText)) {
  element.innerHTML = element.innerHTML.replace(new RegExp(searchText, 'g'), '<span style="background-color: yellow; color: black;">$&</span>');
  element.scrollIntoView({ behavior: "smooth", block: "center" }); // Телепортация к найденному элементу
  }
  }
  document.getElementById("searchInput").value = ""; // Очистка поля ввода после каждого поиска
  }
  }

})
// Для мобильной
document.getElementById("searchInput1").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  var searchText1 = document.getElementById("searchInput1").value;
  alert("Найденый текст в этом канале подсвечен желтым цветом!")
  if (searchText1) {
  var elements = document.getElementsByTagName("body")[0].querySelectorAll(":not(script):not(style):not(meta):not(title):not(link):not(head):not(html):not(body):not(br):not(a):not(img)");
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  if (element.innerHTML.includes(searchText1)) {
  element.innerHTML = element.innerHTML.replace(new RegExp(searchText1, 'g'), '<span style="background-color: yellow; color: black;">$&</span>');
  element.scrollIntoView({ behavior: "smooth", block: "center" }); // Телепортация к найденному элементу
  }
  }
  document.getElementById("searchInput1").value = ""; // Очистка поля ввода после каждого поиска
  }
  }

})
