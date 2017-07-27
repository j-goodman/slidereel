onload = function () {
  var block;
  var gif;
  gif = document.getElementById('jekyll-gif');
  block = new SuperGif({ gif: gif });
  console.log(block);
  onkeydown = function () {
    console.log(block.get_auto_play());
    block.move_to(0);
  };
};
