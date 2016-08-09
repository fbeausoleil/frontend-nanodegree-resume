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
  "bioPic" : "images/biopic.jpg",

  "skills" : ["Cisco", "F5 Big IP", "NX OS","BGP", "Data Centers"],
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

    // contact info bottom of page
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);



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
    "location":"Montreal, QC",
    "degree":"DEC",
    "dates":"21991-1994",
    "url":"www",
    "majors":["Computer Science"]
  }

  ],
  "onlineCourses": [
    {
      "title":"Front-end web developper Nanodegree",
      "school":"Udacity",
      "dates":"2016",
      "url":"www.udacity.com"
    }
  ],
  "display": function() {

    $("#education").append(HTMLschoolStart);
    for (index in education.schools) {

      var formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[index].name);
      var formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[index].location);
      var formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[index].degree);
      var formattedSchoolDates= HTMLschoolDates.replace("%data%",education.schools[index].dates);



      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolLocation);
      //$(".education-entry").append(formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);

      if (education.schools[index].majors.length >0){
        for (majorsIndex in education.schools[index].majors){
          var formattedMajors=HTMLschoolMajor.replace("%data%",education.schools[index].majors[majorsIndex]);
          $(".education-entry").append(formattedMajors);

        }
      }

    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);


    for (index in education.onlineCourses) {
      var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title);
      var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[index].school);
      var formattedOnlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[index].dates);
      var formattedOnlineUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[index].url);

      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineUrl);

    }


  }

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
      "image":["images/bbq1.jpg","images/bbq3.jpg"]
    },
    {
      "title":"Project 2",
      "dates":"2016",
      "description":"test 1234",
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
education.display();
$("#mapDiv").append(googleMap);
