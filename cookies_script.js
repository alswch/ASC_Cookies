// Create a simple front-end website where users can decide how many cookies that they'd like to eat of each flavor. Once they indicate this, which could be by clicking on an item on screen or by submitted a form, store this value inside of several browser cookies, which specify the type of confectionary cookies as the key and the amount of confectionary cookies eaten so far as a value.
$(document).ready(function() {
  console.log("jQuery ready");

var pastryShop = {
  // ====== INITIALIZE FUNCTION =======
  initialize: function() {
    // console.log("==initialize==");
    pastryShop.activateLoginBtn();
  },
  // ====== ACTIVATE LOGIN BUTTON ======
  activateLoginBtn: function () {
    var self = this;
    $('#loginBtn').on('click', function() {
      self.loginUser();
    })
  },
  // ====== LOGIN METHOD =====
  loginUser: function() {
    // console.log("==loginUser==");
    var self = this;
    var username = $('#usernameBox').val();
    var password = $('#passwordBox').val();
    Cookies.set('username', username);
    Cookies.get('username');
    Cookies.set('password', password);
    Cookies.get('password');
    if ((username && password) != "") {
        alert("Welcome " + username);
    } else {
        alert("Please enter your username and password!");
        if ((username && password) != "" && (username && password) != null) {
            Cookies.set("username", username, 365);
            Cookies.set('password', password, 365);
          }
    };
  }
} //CLOSES pastryShop
pastryShop.initialize();
}); //CLOSES JQUERY
