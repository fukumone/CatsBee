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

    var image = $('<img>').appendTo(fileContent);
        image.css({
          width: 100,
          height: 100,
          verticalAlign: 'middle',
          margin: 'auto'
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
    // var sec = 0;
    var width = image.width();
    var height = image.height();
    setInterval(function() {
      // sec += 1;
      width += 100;
      height += 100;
      image.animate({
        width: width,
        height: height
      });
    }, 1000);
  }
});
