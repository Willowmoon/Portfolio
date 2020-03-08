//DEFINE JQUERY FUNCTIONS
$home = $('.home')
$about = $(".about")
$portfolio = $(".portfolio")
$contact = $(".contact")

$hButton = $(".homeButton")
$aButton = $(".aboutButton")
$pButton = $(".portfolioButton")
$cButton = $(".contactButton")

//FUNCTIONS FOR HIDING DIVS
//source (comments section)
//https://forum.jquery.com/topic/how-to-change-a-css-class-with-using-jquery-and-a-click-function
$hButton.click(function() {
    $home.addClass('show').removeClass('hide');
    if ($about.hasClass('show')) {
        $about.addClass('hide').removeClass('show');
    }
    if ($portfolio.hasClass('show')) {
        $portfolio.addClass('hide').removeClass('show');
    }
    if ($contact.hasClass('show')) {
        $contact.addClass('hide').removeClass('show');
    }
})
$aButton.click(function() {
    $about.addClass('show').removeClass('hide');
    if ($home.hasClass('show')) {
        $home.addClass('hide').removeClass('show');
    }
    else if ($portfolio.hasClass('show')) {
        $portfolio.addClass('hide').removeClass('show');
    }
    else if ($contact.hasClass('show')) {
        $contact.addClass('hide').removeClass('show');
    }
})
$pButton.click(function() {
    $portfolio.addClass('show').removeClass('hide');
    if ($about.hasClass('show')) {
        $about.addClass('hide').removeClass('show');
    }
    else if ($home.hasClass('show')) {
        $home.addClass('hide').removeClass('show');
    }
    else if ($contact.hasClass('show')) {
        $contact.addClass('hide').removeClass('show');
    }
})
$cButton.click(function() {
    $contact.addClass('show').removeClass('hide');
    if ($about.hasClass('show')) {
        $about.addClass('hide').removeClass('show');
    }
    else if ($portfolio.hasClass('show')) {
        $portfolio.addClass('hide').removeClass('show');
    }
    else if ($home.hasClass('show')) {
        $home.addClass('hide').removeClass('show');
    }
})
