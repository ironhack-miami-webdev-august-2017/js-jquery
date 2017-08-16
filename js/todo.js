$(document).ready(function () {

  // add click to the trash icons that were there on page load
  $('.glyphicon').click(function (theEvent) {
      // "this" is the DOM object that was just clicked
      // "theEvent.currentTarget" is also the DOM object that was just clicked

      // "parent()" gets you the tag's parent
      // $(this).parent().remove();

      // "closest()" gets you a tag's ancestor
      $(this).closest('li').remove();
  });


  $('.btn').click(function () {
      // "val()" is the jQuery version of "value"
      var todoText = $('input').val();

      // you can create a DOM object for new HTML with a string
      // the backticks `` can make a string that spans multiple lines
      var itemDom =
        $(`<li>
            <span>` + todoText + `</span>
            <span class="glyphicon glyphicon-trash"></span>
           </li>`);

      // "html()" is the jQuery version of "innerHTML"
      // $('ul').html(itemDom);
      // "html()" removes the old content before adding new

      // "append()" is the jQuery version of "appendChild()"
      // "append()" leaves the old content alone and adds the new on the bottom
      $('ul').append(itemDom);

      // clear the input's value with "val()"
      $('input').val("");

      // add the click function to the newly created trash icon
      itemDom.find('.glyphicon').click(function (theEvent) {
          $(this).closest('li').remove();
      });
  }); // close $('.btn').click()

}); // close $(document).ready()



$(document).ready(function () {

    $('.poof').click(function () {
        // get the current selection from the dropdown
        var selection = $('.function').val();

        if (selection === 'hide') {
          // hide() / show()
          $('ul').toggle(5000);
        }

        else if (selection === 'fade') {
          // fadeOut() / fadeIn()
          $('ul').fadeToggle(5000);
        }

        else if (selection === 'slide') {
          // slideUp() / slideDown()
          $('ul').slideToggle(5000);
        }
    });


    var myDragon = {
      right: 0,
      bottom: 0
    };

    var speed = 20;

    $(document).keydown(function (theEvent) {
        console.log('You just pressed: ' + theEvent.keyCode);

        switch (theEvent.keyCode) {
            case 32: // space bar key
            case 38: // up arrow key
            case 87: // "w" key
              // prevent browser from scrolling from keypresses
              theEvent.preventDefault();
              myDragon.bottom += speed;
              break;

            case 39: // right arrow key
            case 68: // "d" key
              // prevent browser from scrolling from keypresses
              theEvent.preventDefault();
              myDragon.right -= speed;
              break;

            case 40: // down arroy key
            case 83: // "s" key
              // prevent browser from scrolling from keypresses
              theEvent.preventDefault();
              myDragon.bottom -= speed;
              break;

            case 37: // left arrow key
            case 65: // "a" key
              // prevent browser from scrolling from keypresses
              theEvent.preventDefault();
              myDragon.right += speed;
              break;
        }

        $('.dragon').css('right', myDragon.right);
        $('.dragon').css('bottom', myDragon.bottom);
    });

}); // close $(document).ready()



$(document).ready(function () {

    $('.city-select').change(function () {
        var selectedCity = $('.city-select').val();

        if (selectedCity === 'Madrid') {
          $('.city-feedback').html('Have some "jamon iberico" for me');
        }
        else if (selectedCity === 'Barcelona') {
          $('.city-feedback').html('Say hi to Messi for me. El Clasico, 5:00 p.m.');
        }
        else if (selectedCity === 'Miami') {
          $('.city-feedback').html('Have a croqueta for me');
        }
        else if (selectedCity === 'Paris') {
          $('.city-feedback').html('Have a croissant for me');
        }
        else {
          $('.city-feedback').html('Make a selection already. 🔪');
        }
    });

}); // close $(document).ready()
