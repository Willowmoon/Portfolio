# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

Portfolio website with show/hide divs to change active content via buttons on the side.

## Google Sheet

Include link to your google sheet here.  Here is the sample (https://docs.google.com/spreadsheets/d/1q3DuE5Lw30-dJygOlehu70IDq0YU8TcipN9K7vTEZwE/edit#gid=0) 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  
- [Wireframe 1](https://i.imgur.com/3QMKVOq.jpg)
- wireframe for start/homepage and mobile contact page primary design
- [Wireframe 2](https://i.imgur.com/9Xb3jHB.jpg)
- wireframe for about and portfolio pages 
- [Wireframe 3](https://i.imgur.com/lWB0VWW.jpg)
- wireframe for contact page and mobile about/portfolio
## Time/Priority Matrix 

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete.   

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 
- [TP matrix](https://i.imgur.com/UTmhX6V.jpg)
### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- css background
- html structure
- carousel
- responsive navbar

#### PostMVP 

- threejs 
- multiple backgrounds
- animations between pages
- custom form
- letts overlay nav on side

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| redo nav | H | 2hrs | 2hrs | 2hrs | 
| word styling css | M | 1hr | 1hr | 1hr |
| animation | L | 1hr | 2hr | 2hr |
| logo | M | 1hr | 1hr | incomplete-removed |
| Background images | L | 3hrs | 1hr | removed |
| Nav Buttons | H | 2hrs | 2 hrs| 2hrs |
| Adding Portfolio Images | M | 3hr | 1hr | 1hr |
| Adding Form | L | 2hrs| 30min | 30min |
| Working with API | H | 3hrs| 1hr | 1hr |
| JS animation | M | 30min | 1hr| 1hr |
| HTML frame setup | H | 2hrs | 2hrs | 2hrs |
| Total | H | 20.5hrs| 13.5hrs | 13.5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 fontawesome for icons 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  


```javascript
//function for buttonpress to hide other divs and show div of button pressed
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
```
 
## sources/inspirations
nav bar inspiration https://jacekjeznach.com/

function to get nav buttons to work by adding and removing classes (comments)
https://forum.jquery.com/topic/how-to-change-a-css-class-with-using-jquery-and-a-click-function



## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
