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

    var fileContent = $('#fileContentList');

    var form = $('form');
        form.css({ margin: '0px' });

    var input = form.find('input');
        input.prev().remove();
        input.remove();

    var image = $('<img>').appendTo(fileContent);
        image.css({
          width: 100,
          height: 100
        });
        image.attr('src', window.URL.createObjectURL(files[0]));

    var span = $('span');
        span.innerHTML = files[0].name;

    var li = $('li');
        li.append(image);
        li.append(span);

    fileContent.append(li);

    timer(image);
  }

  function timer(image){
    var width = image.width();
    var height = image.height();
    var timerID = setInterval(function(){
      width += 80;
      height += 40;
      image.animate({
        width: width,
        height: height
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
