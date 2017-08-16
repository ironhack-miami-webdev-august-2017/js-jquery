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



$(document).ready(function () {

    // array of all our image "src" URLs
    var images = [
      'https://media.giphy.com/media/u937i2pOeqxLa/giphy.gif',
      'https://media.giphy.com/media/urf3ms8YvVtRe/giphy.gif',
      'https://media.giphy.com/media/l1CC67iU5rs0dw2f6/giphy.gif',
      'https://media.giphy.com/media/3oKIPjzfv0sI2p7fDW/giphy.gif'
    ];

    // start at the first image (index 0)
    var currentIndex = 0;

    $('.switch-button').click(function () {
        // switch to the next image
        currentIndex += 1;

        // if "currentIndex" is past the last index, reset to 0.
        // (remember the last index is "length - 1")
        if (currentIndex === images.length) {
          currentIndex = 0;
        }

        // change the <img> tag's "src" to the new image
        $('.changable-image').attr('src', images[currentIndex]);
    });

}); // close $(document).ready()



$(document).ready(function () {
    var popularity = 0;

    $('.upvote').click(function () {
        popularity += 1;
        $('.post span').html(popularity);
        // jQuery version of "innerHTML"

        if (popularity > -5) {
          // remove the CSS class ".poop" which removes styling
          $('.post').removeClass('poop');
        }

        if (popularity >= 10) {
          // add the CSS class ".warm" which applies styling
          $('.post').addClass('warm');
        }

        if (popularity >= 20) {
          // add the CSS class ".hot" which applies styling
          $('.post').addClass('hot');
          // remove the CSS class ".warm" which removes styling
          $('.post').removeClass('warm');
        }
    });

    $('.downvote').click(function () {
        popularity -= 1;
        $('.post span').html(popularity);
        // jQuery version of "innerHTML"

        if (popularity <= -5) {
          // add the CSS class ".poop" which applies styling
          $('.post').addClass('poop');
        }

        if (popularity < 20) {
          // add the CSS class ".warm" which applies styling
          $('.post').addClass('warm');
          // remove the CSS class ".hot" which removes styling
          $('.post').removeClass('hot');
        }

        // needs to go after "hot" if statement in case you need to remove "warm"
        if (popularity < 10) {
          // remove the CSS class ".warm" which removes styling
          $('.post').removeClass('warm');
        }
    });

}); // close $(document).ready()
