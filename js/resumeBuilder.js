/*
This is empty on purpose! Your code to build the resume will go here.
 */

projects.display = function() {
   for (index in projects.projects) {
     $("#projects").append(HTMLprojectStart);
     formattedTitle=HTMLprojectTitle.replace("$data$", projects.projects[index].title);
     $(".project-entry:last").append(formattedTitle);
   }

 }


var formattedName=HTMLheaderName.replace("%data%","Frederic Beausoleil");
var formattedRole =HTMLheaderRole.replace("%data%","Web Developper");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var skills =["Cisco", "F5 Big IP", "NX OS","BGP", "DevOps"];




var bio = {
  "name" :"Fred Beausoleil",
  "role" : "Web Developper",
  "age" : 32,
  contacts : {
    "email": "fbeausoleil@gmail.com",
    "github": "www.github.com/fbeausoleil",
    "mobile": "514-969-6058",
    "location": "Montreal, Quebec"
  },
  "welcome message":"Welcome to my resume",
  "bioPic" : "images/picture.jpg",

  "skills" : ["Cisco", "F5 Big IP", "NX OS","BGP", "DevOps"]
}








var education = { "schools" :

  [ {

    "name":"Teccart institute",
    "location":"Montreal, Quebec",
    "degree":"FEWD",
    "date":"2016",
    "url":"www",
    "majors":[]
  }

  ],
  "onlineCourses": [
    {
      "Title":"FEDW",
      "school":"Udacity",
      "date":"2016",
      "url":"www.udacity.com"
    }
  ]


}

work = { "jobs" :
  [
    {
      "employer":"Bell Canada",
      "title":"Network Engineer",
      "location":"Montreal",
      "date":"May 2016",
      "description":" Network engineering for The client Desjardins"

    },
    {
      "employer":"Hydro-Quebec",
      "title":"Apllication delivery controllers consultant",
      "location":"Montreal",
      "date":"August 2015",
      "description":" Implements new load balancing solution in the HQ network"

    }


  ]

}


projects = { "projects" :
  [
    {
      "title":"test title",
      "dates":"2016",
      "description":"gjhgjhgljgkjhgkjh",
      "image":""
    },
    {
      "title":"Project 2",
      "dates":"2016",
      "description":"test",
      "image":""
    }
  ]

}
projects.display = function() {
   for (index in projects.projects) {
     $("#projects").append(HTMLprojectStart);
     formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[index].title);
     $(".project-entry:last").append(formattedTitle);

     formattedDates=HTMLprojectDates.replace("%data%", projects.projects[index].dates);
     $(".project-entry:last").append(formattedDates);

     formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[index].description);
     $(".project-entry:last").append(formattedDescription);

     if (projects.projects[index].image.length > 0 ) {
       for (image in projects.projects[index].image) {
         var formattedImage= HTMLprojectImage.replace("%data",projects.projects[index].image);
         $(".project-entry:last").append(formattedImage);
       }
     }

   }

 }



if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0])
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1])
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2])
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[3])
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[4])
  $("#skills").append(formattedSkills);


  $(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);


    // your code goes here
  });

displayWork();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

}


function displayWork() {
  for (index in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
    var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.jobs[index].title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    var formattedWorkDate=HTMLworkDates.replace("%data%",work.jobs[index].date);
    var formattedWorkDesc=HTMLworkDescription.replace("%data%",work.jobs[index].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkDate);
    $(".work-entry:last").append(formattedWorkDesc);


  }
}

function inName(intName){

  intName= intName.trim().split(" ");
  return intName[0].slice(0,1).toUpperCase() +intName[0].slice(1) +" " +intName[1].toUpperCase();
}


projects.display = function() {
   //for (index in projects.projects) {
     //$("#projects").append(HTMLprojectStart);
     //formattedTitle=HTMLprojectTitle.replace("$data$", projects.projects[index].title);
     //$(".project-entry:last").append(formattedTitle);
   //}

 }
