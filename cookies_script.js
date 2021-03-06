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
      self.placePastryOrder();
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
      Cookies.set('muffin', 0);
      Cookies.set('scone', 0);
      Cookies.set('fudge', 0);
      console.log(document.cookie);
    })
  },
  // ===== UPDATE ORDER =====
  updateOrderCt: function(){
    var muffin = $('#muffinOrder').val();
    var scone = $('#sconeOrder').val();
    var fudge = $('#fudgeOrder').val();
      if (Cookies.get("muffin")) {
        var muffin = parseInt(Cookies.get("muffin")) + parseInt(muffin);
      }
      if (Cookies.get("scone")) {
        var scone = parseInt(Cookies.get("scone")) + parseInt(scone);
      }
      if (Cookies.get("fudge")) {
        var fudge = parseInt(Cookies.get("fudge")) + parseInt(fudge);
      }
      Cookies.set("muffin", muffin);
      Cookies.set("scone", scone);
      Cookies.set("fudge", fudge);
      $('#muffinHistory').html(muffin);
      $('#sconeHistory').html(scone);
      $('#fudgeHistory').html(fudge);
      $('.orderBox').val(0);
  },
  // ===== PLACE ORDER ======
  placePastryOrder: function() {
    var self = this;
    $('#placeOrder').on('click', function(){
      self.updateOrderCt();
    })
  }

} //CLOSES pastryShop
pastryShop.initialize();
}); //CLOSES JQUERY
