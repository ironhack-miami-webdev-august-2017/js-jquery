// Event that happens when the page finishes loading
$(document).ready(function () {

    var isBig = false;

    // jQuery version of "onclick"
    $('h1').click(function () {
        // if it's big, shrink it
        if (isBig) {
          $('h1').css('font-size', '32px');
          isBig = false;
        }

        // if it's small, grow it
        else {
          $('h1').css('font-size', '100px');
          isBig = true;
        }
    });

}); // close $(document).ready()
