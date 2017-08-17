$(document).ready(function () {

    // 1. hide (or remove) the loading stuff
    $('.loading-thing').fadeOut(1000);

    // 2. add an h2
    // 3. add an input
    // 4. add a button
    var countdownDomStuff =
      $(`<h2 class="countdown-feedback"> Start A Countdown </h2>
         <input class="seconds-input" type="text" placeholder="Seconds to countdown...">
         <button class="start"> Start </button>`);

    $('.countdown-ui').html(countdownDomStuff);


    var timerNumber;

    // 5. add a click event to the button
    $('.start').click(function () {
        // Cancel pre-existing countdown
        // (in case the button is clicked a second time)
        if (timerNumber) {
            clearInterval(timerNumber);
        }

        // * grab the value of the input
        var seconds = $('.seconds-input').val();

        // * give initial feedback when the countdown starts
        $('.countdown-feedback').html(seconds + ' SECONDS');

        timerNumber = setInterval(function () {
            // * decrease the number every second
            seconds -= 1;

            // * update the DOM every second
            $('.countdown-feedback').html(seconds + ' SECONDS');

            // * stop the countdown when it reaches 0
            if (seconds === 0) {
                clearInterval(timerNumber);
                timerNumber = null;
            }
        }, 1000); // close setInterval()
    }); // close $('.start').click()

}); // close $(document).ready()
