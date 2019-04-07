$(function() {
  //make connection
  let socket = io.connect("http://localhost:3000");

  // buttons and inputs
  let message = $("#message");
  let username = $("#username");
  let send_message = $("#send_message");
  let send_username = $("#send_username");
  let chatroom = $("#chatroom");
  let feedback = $("#feedback");

  // emit message
  send_message.submit(function() {
    socket.emit("new_message", { message: message.val() });
  });

  // listen on new_message
  socket.on("new_message", data => {
    feedback.html("");
    message.val("");
    chatroom.append(
      "<p class='message'>" + data.username + ": " + data.message + "</p>"
    );
  });

  // emit a username
  send_username.click(function() {
    socket.emit("change_username", { username: username.val() });
  });

  // emit typing
  message.bind("keypress", () => {
    socket.emit("typing...");
  });

  // listen on typing
  socket.on("typing...", data => {
    feedback.html(
      "<p><i>" + data.username + "is typing a message..." + "</i></p>"
    );
  });
});
