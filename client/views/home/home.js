Template.home.helpers({
  templateGestures: function() {
    return {
            'swipeleft .card': function (e,t) {
              alert("swiping left")
            },
            'swiperight .card': function(e,t) {
              alert("swiping right")
            }
          }
  }
})
