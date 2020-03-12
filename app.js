//DEFINE JQUERY FUNCTIONS
$home = $('.home')
$about = $(".about")
$portfolio = $(".portfolio")
$contact = $(".contact")

$hButton = $(".homeButton")
$aButton = $(".aboutButton")
$pButton = $(".portfolioButton")
$cButton = $(".contactButton")

$closeButton = $(".closeButton")
$openButton = $(".openButton")

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

let url = 'https://docs.google.com/spreadsheets/d/1q3DuE5Lw30-dJygOlehu70IDq0YU8TcipN9K7vTEZwE/edit#gid=0';
let id = '1q3DuE5Lw30-dJygOlehu70IDq0YU8TcipN9K7vTEZwE';
let source = 'https://spreadsheets.google.com/feeds/list/1q3DuE5Lw30-dJygOlehu70IDq0YU8TcipN9K7vTEZwE/od6/public/values?alt=json';
// ES6 - fetch

// fetch queries the url provided and requests that the data be sent to it 
// it receives JSON => JS Object Notation
// we use .json() to parse the data from "{}" to an full blown {}
fetch(source)
  .then( response => response.json() ) // this parses the data from string back into an object
  .then( data =>  {
      console.log('data', data)
      // data.feed.entry is the array that stores our projects
      // the projects are stored as objects
      let projects = data.feed.entry.map( project => {
        // console.log('project', project.gsx$title.$t)
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
        }
      })
      app(projects)
  })
  .catch( err => console.log('err', err))

function app(projects) {
  console.log('app - projects', projects)


//   creates the gallery
  function gallery(){
    for(let i =0; i < projects.length; i++){
        let $card = $(`
        <a href=${projects[i].url} target="_blank">
        <div class = "pBox" style="background-image: url(${projects[i].image}); background-position: center; background-repeat: no-repeat;" >
           <p class="project-titles" href="#" data-hover="${projects[i].description}">${projects[i].title}</p>
        </div></a>`)

        $('.grid').append($card)
    }
  }
  gallery()
}

// navigation collapse/expand
function openNav() {
    document.getElementById("collapse").style.width = "160px";
    document.getElementById("main").style.marginLeft = "160px";
    $openButton.addClass('hide');
  }
  
  function closeNav() {
    document.getElementById("collapse").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    $openButton.addClass('show').removeClass('hide');
  }