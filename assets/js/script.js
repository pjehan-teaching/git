var paper = new Raphael(document.getElementById('diagram-centralized'), '100%', 450);

function center(el) {
  el.attr('x', "50%");
  el.transform("t-75,0");
}

var shape = {
  getTopLeftCoordinate: function(el) {
    return { x: el.x, y: el.y};
  }
};

function arrow(options) {
  var a = paper.path();
  var fx = options.from.x;
  var fy = options.from.y;
  var tx = options.to.x;
  var ty = options.to.y;

  
}

var c = paper.image("assets/images/subversion.png", 0, 0, 150, 150);
center(c);

var totalWidth = 416;
var gutter = 10;
var userWidth = (totalWidth - (gutter * 2)) / 3;
var user1 = paper.image("assets/images/user.svg", 0, 300, userWidth, userWidth);
var user2 = paper.image("assets/images/user.svg", userWidth + 10, 300, userWidth, userWidth);
var user3 = paper.image("assets/images/user.svg", (userWidth + 10) * 2, 300, userWidth, userWidth);

var a = arrow({
  from: user1,
  to: c
});