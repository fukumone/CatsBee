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

    var body = $('body'),
        form = body.find('form'),
        input = form.find('input'),
        image = $('<img>').appendTo(body);

      input.parent().remove(),
      input.remove();
    // 取得した画像
      image.attr('src', window.URL.createObjectURL(files[0]));
      image.css({ display: 'none' });
      body.append(image);

    timer(image);
  }

  function timer(image){
    var width = image.width(),
        height = image.height(),
        timerID = setInterval(function(){
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
