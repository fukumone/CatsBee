$(document).ready(function(){
  $('#fileSelector').on('change', function(evt){
    showImage(evt);
  });

  function showImage(evt){
    var files = evt.target.files;
    if (!files) {
      alert("ファイルの読み込みに失敗しました、もう一度トライして下さい");
      return;
    }

    var body = $('body');
    var form = body.find('form');

    var input = form.find('input');
        input.parent().remove();
        input.remove();

    // 取得した画像
    var image = $('<img>').appendTo(body);
        image.attr('src', window.URL.createObjectURL(files[0]));
        image.css({ display: 'none' });
        body.append(image);

    timer(image);
  }

  function timer(image){
    var width = image.width();
    var height = image.height();
    var timerID = setInterval(function(){
      width += 5;
      height += 2;
      image.animate({
        width: width + '%',
        height: height + '%'
      });
      stopTimer(timerID, image);
    }, 1);
  }

  function stopTimer(timerID, image){
    $('body').click(function(){
      clearInterval(timerID);
      image.stop();
    });
  }
});
