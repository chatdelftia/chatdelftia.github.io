function loadMessages() {
  var messages = localStorage.getItem("chatMessages");
  if (messages) {
    messages = JSON.parse(messages);
    var chat = document.getElementById("chat");

    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      var messageElement = document.createElement("div");

      messageElement.classList.add("message");
      messageElement.innerHTML =
        "<span class='sender'>" +
        message.sender +
        ":</span> " +
        message.message +
        " <span class='timestamp'>(" +
        message.timestamp +
        ")</span>";
      chat.appendChild(messageElement);
    }
  }
}

function sendMessage() {
  var senderInput = document.getElementById("senderInput");
  var messageInput = document.getElementById("messageInput");
  var sender = senderInput.value;
  var message = messageInput.value;

  if (sender && message) {
    if (sender === "Макс" || sender === "Мaкс" || sender === "Maкс" || sender === "мaкс") {
      var confirmation = confirm("Вам выдано предупреждение! Запрещено выдавать себя за других людей!");
      
      if (!confirmation) {
        return;
      } else {
        // Показываем уведомление, без отправки сообщения
        senderInput.value = "";
        return;
      }
    }

 
    

    var timestamp = new Date().toLocaleString();
    var chat = document.getElementById("chat");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML =
      "<span class='sender'>" +
      sender +
      ":</span> " +
      message +
      " <span class='timestamp'>(" +
      timestamp +
      ")</span>";
      chat.appendChild(messageElement);

    // Сохраняем сообщение в localStorage
    var storedMessages = localStorage.getItem("chatMessages");
    var messages = [];

    if (storedMessages) {
      messages = JSON.parse(storedMessages);
    }

    // Создаем объект сообщения
    var newMessage = {
      sender: sender,
      message: message,
      timestamp: timestamp,
    };

    // Добавляем новое сообщение в массив сообщений
    messages.push(newMessage);

    // Сохраняем обновленный массив сообщений в localStorage
    localStorage.setItem("chatMessages", JSON.stringify(messages));

    // Очищаем поля ввода
    
    messageInput.value = "";
  }
  
}



    
    document.addEventListener("DOMContentLoaded", function() {
      loadMessages();
      
      var messageForm = document.getElementById("messageForm");
      messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        sendMessage();
      });
    });
