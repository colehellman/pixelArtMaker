// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
  $('#submit').on("click",function(event){
    event.preventDefault();
    const gridHeight = $('#inputHeight').val();
    const gridWeight = $('#inputWeight').val();
    $('#pixelCanvas').empty();
    makeGrid(gridHeight, gridWeight);
  });

$('#pixelCanvas').on('click', 'td',function(){
  $(this).css('background-color', $('#colorPicker').val());
});

  function makeGrid(height, width) {
    for(let i = 0;i<height;i++){
      $('#pixelCanvas').append('<tr></tr>');
      for (let j = 0;j<width;j++){
        $('tr').last().append('<td></td>');
      }
    }
  }
//big thanks to Matthew Cranford for his awesome blog posts!
