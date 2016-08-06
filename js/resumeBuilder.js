/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" :"Frederic Beausoleil",
  "role" : "Web Developper",
  "age" : 32,
  contacts : {
    "mobile" : "514-969-6058",
    "email": "fbeausoleil@gmail.com",
    "github": "www.github.com/fbeausoleil",
    "twitter": "@ZettaIndustries",
    "location": "Montreal, Quebec"
  },
  "welcomeMessage":"Welcome to my resume",
  "bioPic" : "images/fry.jpg",

  "skills" : ["Cisco", "F5 Big IP", "NX OS","BGP", "DevOps"],
  "display": function(){

    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    var formattedRole =HTMLheaderRole.replace("%data%",bio.role);
    var formattedBioPic= HTMLbioPic.replace("%data%", bio.bioPic);

    var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedMessage);
    $("#header").append(formattedBioPic);




    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (index in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[index]);
        $("#skills-h3").append(formattedSkills);

      }
    }

  }
}




var education = { "schools" :

  [ {

    "name":"Teccart institute",
    "location":"Montreal, Quebec",
    "degree":"FEWD",
    "dates":"2016",
    "url":"www",
    "majors":["Information technology"]
  }

  ],
  "onlineCourses": [
    {
      "Title":"FEDW",
      "school":"Udacity",
      "date":"2016",
      "url":"www.udacity.com"
    }
  ],
  "display": ""

}

work = { "jobs" :
  [
    {
      "employer":"Bell Canada",
      "title":"Network Engineer",
      "location":"Montreal, QC",
      "dates":"May 2016",
      "description":" Network engineering for The client Desjardins"

    },
    {
      "employer":"Hydro-Quebec",
      "title":"Apllication delivery controllers consultant",
      "location":"Montreal,QC",
      "dates":"August 2015- May 2016",
      "description":" Implements new load balancing solution in the HQ network"

    },
    {
      "employer":"Bell canada 2",
      "title":"Network operations Engineer ",
      "location":"Montreal,QC",
      "dates":"August 2013- September 2015",
      "description":" Delivery and support of network/ Data center infrastructure for Bell Canada Managed Services"

    }


  ],
  display: function() {
      $("#workExperience").append(HTMLworkStart);
      for (index in work.jobs) {

        var formattedWorkEmployer= HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
        var formattedWorkTitle= HTMLworkTitle.replace("%data%",work.jobs[index].title);
        var formattedWorkLocation= HTMLworkLocation.replace("%data%",work.jobs[index].location);
        var formattedWorkDates= HTMLworkDates.replace("%data%",work.jobs[index].dates);
        var formattedWorkDesc= HTMLworkDescription.replace("%data%",work.jobs[index].description);


        $(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry").append(formattedWorkLocation);
        $(".work-entry").append(formattedWorkDates);
        $(".work-entry").append(formattedWorkDesc);

      }


  }

}

projects = { "projects" :
  [
    {
      "title":"BBQ island construction",
      "dates":"2015",
      "description":"week-ends project for the construction of the BBQ Island for my new Blaze grill ",
      "image":["images/bbq1.jpg", "images/bbq2.jpg","images/bbq3.jpg"]
    },
    {
      "title":"Project 2",
      "dates":"2016",
      "description":"test",
      "image":[""]
    }
  ],
  display: function() {
     $("#projects").append(HTMLprojectStart);
     for (index in projects.projects) {

       formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[index].title);
       $(".project-entry:last").append(formattedTitle);

       formattedDates=HTMLprojectDates.replace("%data%", projects.projects[index].dates);
       $(".project-entry:last").append(formattedDates);

       formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[index].description);
       $(".project-entry:last").append(formattedDescription);

       if (projects.projects[index].image.length > 0 ) {
         for (image in projects.projects[index].image) {
           var formattedImage= HTMLprojectImage.replace("%data%",projects.projects[index].image[image]);
           $(".project-entry:last").append(formattedImage);
         }
       }

     }

   }

}







bio.display();
work.display();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);






function inName(intName){

  intName= intName.trim().split(" ");
  return intName[0].slice(0,1).toUpperCase() +intName[0].slice(1) +" " +intName[1].toUpperCase();
}
