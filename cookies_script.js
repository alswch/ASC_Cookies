// Create a simple front-end website where users can decide how many cookies that they'd like to eat of each flavor. Once they indicate this, which could be by clicking on an item on screen or by submitted a form, store this value inside of several browser cookies, which specify the type of confectionary cookies as the key and the amount of confectionary cookies eaten so far as a value.
$(document).ready(function() {
  console.log("jQuery ready");

var pastryShop = {
  // ====== INITIALIZE FUNCTION =======
  initialize: function() {
    // console.log("==initialize==");
    pastryShop.activateLoginBtn();
    pastryShop.activateLogoutBtn();
  },
  // ====== ACTIVATE LOGIN BUTTON ======
  activateLoginBtn: function () {
    var self = this;
    $('#loginBtn').on('click', function() {
      self.loginUser();
    })
  },
  // ====== LOGIN USER METHOD =====
  loginUser: function() {
    // console.log("==loginUser==");
    var self = this;
    var username = $('#usernameBox').val();
    var password = $('#passwordBox').val();
    Cookies.set('username', username);
    Cookies.set('password', password);
    console.log(document.cookie);
    // if ((username && password) != "") {
    //     alert("Welcome " + username);
    // } else {
    //     alert("Please enter your username and password!");
    //   }
  },
  // ====== ACTIVATE LOGOUT BUTTON ======
  activateLogoutBtn: function () {
    console.log("==activateLogoutBtn==");
    var self = this;
    $('#logoutBtn').on('click', function() {
      Cookies.set('username', "");
      Cookies.set('password', "");
      console.log(document.cookie);
    })
  }


} //CLOSES pastryShop
pastryShop.initialize();
}); //CLOSES JQUERY
