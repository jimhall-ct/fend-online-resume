// Resume Data Objects
var bio = {
    name: "James J. Hall",
    role: "Web Developer",
    contacts: {
        mobile: "203-326-0390",
        email: "jim@jamesjhall.com",
        github: "jimhall-ct",
        location: "Monroe, CT"
    },
    welcomeMessage: "As someone who enjoys working with modern technology in many forms, web development allows me the freedom to be creative and technical at the same time. The web remains a fast moving target and it can be challenging to keep up, but this is what keeps it exciting and rewarding.",
    skills: [
        "HTML",
        "CSS",
        "SASS",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "Backbone",
        "Underscore",
        "Angular",
        "Jasmine",
        "Ruby",
        "Python",
        "PHP",
        "MySQL",
        "PostgreSQL",
        "Git"
    ],
    biopic: "img/jim.jpg"
}; //bio
var work = {
    jobs: [
        {
            employer: "Solarmedia",
            title: "Owner, Web Developer",
            location: "Monroe, Connecticut",
            dates: "Jan 2017 - Present",
            description: "Design and develop websites for small to medium sized businesses and organizations."
        },
        {
            employer: "Custom Home Tech",
            title: "Owner, System Architect, Programmer",
            location: "Monroe, Connecticut",
            dates: "Aug 2007 - Dec 2016",
            description: "Program control systems, program Lutron and Vantage lighting systems and other home automation components."
        },
        {
            employer: "High Tech Squared",
            title: "Partner, System Architect, Programmer",
            location: "Norwalk, Connecticut",
            dates: "Mar 2001 - Jul 2007",
            description: "Design, build, and maintain large company website using php and mysql. Design and architect entire smart home systems. Program AMX control systems, writing all code from scratch to control, integrate, and communicate with 3rd party systems. Systems installed and integrated included: ip network, whole house audio/video, lighting system, phone system, alarm and surveillance systems, hvac, and pool/jacuzzi system. Also designed and programmed AMX touchscreen user interfaces."
        },
        {
            employer: "Microcast",
            title: "Web Development Team Lead",
            location: "Danbury, Connecticut",
            dates: "Sep 1998 - Dec 2000",
            description: "Hire, manage, and train a team of web designers and developers to create the company website and intranet. Our team was also responsible for building prototypes for clients to implement video into their own website and building functional micro websites to be used as part of our video player."
        }
    ]
}; //work
var projects = {
    projects: [
        {
            title: "Amazon.com",
            dates: "Nov 2016 - Current",
            description: "Redesigned and developed most of Amazon's website using responsive design techniques learned at udacity.com",
            images: [
                "img/amazon1_360.png",
                "img/amazon2_360.png",
                "img/amazon3_360.png"
            ]
        }
    ]
}; //projects
var education = {
    schools: [
        {
            name: "Southern Connecticut State University",
            location: "New Haven, Connecticut",
            degree: "BS",
            majors: [
                "Computer Science"
            ],
            dates: "1990-1995",
            url: "https://www.southernct.edu/"
        }
    ],
    onlineCourses: [
        {
            title: "Web (93 certificates)",
            school: "Lynda.com",
            dates: "Jan 2008 - Present",
            url: "www.lynda.com"
        }, {
            title: "Developer (29 certificates)",
            school: "Lynda.com",
            dates: "Jan 2008 - Present",
            url: "www.lynda.com"
        }, {
            title: "Design (102 certificates)",
            school: "Lynda.com",
            dates: "Jan 2008 - Present",
            url: "www.lynda.com"
        }, {
            title: "Business (32 certificates)",
            school: "Lynda.com",
            dates: "Jan 2008 - Present",
            url: "www.lynda.com"
        }
    ]
}; //education

// Display Functions
bio.display = function () {

    // Bio Pic
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $('#header .bioPic-wrapper').append(formattedBioPic);

    var header = $('#header .person');
    // Name
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    // Role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    header.prepend(formattedRole);
    header.prepend(formattedName);


    if (bio.contacts) {
        $('#contactsBar').append(HTMLcontactsStart);
        var topContacts = $('.contacts');
        // Contacts - Mobile
        if (bio.contacts.mobile) {
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            topContacts.append(formattedMobile);
        }
        // Contacts - Email
        if (bio.contacts.email) {
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            topContacts.append(formattedEmail);
        }
        // Contacts - Twitter
        if (bio.contacts.twitter) {
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            topContacts.append(formattedTwitter);
        }
        // Contacts - GitHub
        if (bio.contacts.github) {
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            topContacts.append(formattedGithub);
        }
        // Contacts - Location
        if (bio.contacts.location) {
            var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
            topContacts.append(formattedlocation);
        }
    }


    if (bio.skills.length > 0) {
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skillList').append(formattedSkill);
        });
    }

    // Welcome Message
    if (bio.welcomeMessage) {
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#welcomeMsg').append(formattedWelcomeMsg);
    }
}; //bio.display()
work.display = function () {
    var workExperience = $('#workExperience');
    work.jobs.forEach(function (job) {
        var workEntry = $(HTMLworkStart);
        // Position / Title
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        workEntry.append(formattedTitle);
        // Employer
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        workEntry.append(formattedEmployer);
        // Date Range
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        workEntry.append(formattedDates);
        // Location
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        workEntry.append(formattedLocation);
        // Job Description
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        workEntry.append(formattedDescription);
        // Add to DOM
        workExperience.append(workEntry);
    });
}; //work.display()
projects.display = function () {
    projects.projects.forEach(function (project) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $('.project-entry:last').append(formattedDescription);
        project.images.forEach(function (image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $('.project-entry:last').append(formattedImage);
        });
    });
}; //projects.display()
education.display = function () {
    // Traditional Education
    education.schools.forEach(function (school) {
        var educationEntry = $(HTMLschoolStart);
        // School Name & Link
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", school.url);
        educationEntry.append(formattedSchoolURL + formattedSchoolName);
        // School Dates
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        educationEntry.append(formattedSchoolDates);
        // School Location
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        educationEntry.append(formattedSchoolLocation);
        // Majors
        school.majors.forEach(function (major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            // Degree
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            educationEntry.append(formattedSchoolMajor + formattedSchoolDegree);
        });

        $('#education').append(educationEntry);
    });

    // Online Classes
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
    }
    education.onlineCourses.forEach(function (onlineCourse) {
        educationEntry = $(HTMLschoolStart);
        // Course Title
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        educationEntry.append(formattedOnlineTitle);
        // Course Dates
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        educationEntry.append(formattedOnlineDates);
        // Course School
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
        // School URL
        educationEntry.append(formattedOnlineUrl + formattedOnlineSchool);
        $("#education").append(educationEntry);

    });
}; //education.display()

function buildResume() {
    bio.display();
    work.display();
    projects.display();
    education.display();
    // Add Google Map
    $('#mapDiv').append(googleMap);
} //buildResume()

buildResume();
