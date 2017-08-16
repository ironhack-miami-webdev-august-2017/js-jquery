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
