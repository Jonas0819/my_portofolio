/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Jonás Román",
  logo_name: "(🧨) => {🔥}",
  // nickname: "harry / picleric",
  full_name: "Jonás Román",
  subTitle: "Full Stack Developer, Open Source Enthusiast, Life Long Learner. ",
  resumeLink:
    "https://drive.google.com/file/d/14gLf_pmdpsG6_jq9Vg-7l53IDA-4z6zo/view?usp=sharing",
  mail: "jonasroman0819@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Jonas0819",
  linkedin: "https://www.linkedin.com/in/jonas-roman-760887221/",
  gmail: "jonasroman0819@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/JonasGroman",
  twitter: "https://twitter.com/JonasRoman7",
  instagram: "https://www.instagram.com/jonas_o_roman/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express, Mongoose and Fast-API",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        /*{
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },*/
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        /*{
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },*/
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        } /*
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },*/ /*
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },*/,
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        /* {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },*/
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        } /*
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },*/,
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Open University for Adults (UAPA)",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "SRM_Logo.png",
      alt_name: "SSEC",
      duration: "2019 - 2023",
      descriptions: [
        "⚡  I'm currently pursuing my Bachelors in Computer Science and Engineering.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.uapa.edu.do/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Responsive Web Designs",
      subtitle: "Web Layout",
      logo_path: "hackathon1.png",
      certificate_link:
        "https://drive.google.com/file/d/1hnnpgiyxDmddglTZqUhf1ak0KBMHRT2H/view?usp=sharing",
      alt_name: "Responsive",
      color_code: "#F2EAD5",
    },
    {
      title: "Back End Development and APIs ",
      subtitle: "APIs Rest",
      logo_path: "hackathon2.png",
      certificate_link:
        "https://drive.google.com/file/d/1axa5M7DN8U3YTKpZCfLHIXbNh2rCyIt6/view?usp=sharing",
      alt_name: "APIs",
      color_code: "#F0FCE3",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Git",
      subtitle: "Git for Beginners",
      logo_path: "HakinCodes.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1JG5uygj1vQaIs7rjrdqhyXczMGfuQ60W/view?usp=sharing",
      alt_name: "Git",
      color_code: "#fefd7b",
    },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    {
      title: "My SQL",
      subtitle: "Introduction to SQL",
      logo_path: "Olympiad.png",
      certificate_link:
        "https://drive.google.com/file/d/17dJm-QHI6hYy7HOSeEkcIeByGmuERsfh/view?usp=sharing",
      alt_name: "SQL",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    } /*
    {
      title: "Competitive Programming",
      subtitle: "Reply Challenges",
      logo_path: "Reply.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },*/,
    {
      title: "Desarrollo Web I",
      subtitle: "Web I",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bxwa4kGtx1ArOxBfJ1HrCKQkhoIktMSJ/view?usp=sharing",
      alt_name: "DesarrolloI",
      color_code: "#78C8FA",
    },
    {
      title: "Desarrollo Web II",
      subtitle: "Web II",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Gy6IoFH_lb-7uxBBcVAjlasODH9sioa1/view?usp=sharing",
      alt_name: "DesarrolloII",
      color_code: "#63EBCA",
    },
    {
      title: "Desarrollo de Apps Moviles ",
      subtitle: " Apps Moviles",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1As4D17h6fS_kN01ets4uyuBwKNigHX4C/view?usp=sharing",
      alt_name: "Moviles",
      color_code: "#ACF5AB",
    },
    {
      title: "Ciberseguridad Teletrabajo",
      subtitle: "Ciberseguridad",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1eVynKv_T3a5R7ACF44_57Gf9R2GSnugk/view?usp=sharing",
      alt_name: "Ciberseguridad",
      color_code: "#A4C2F9",
    },
    {
      title: "Cloud Computing",
      subtitle: "Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1slyT8_lR8PvsP-Bx7n02j--O7l4yLZB_/view?usp=sharing",
      alt_name: "Computing",
      // color_code: "#2AAFED",
      color_code: "#F9DDA4",
    },
    /*
    {
      title: "Training",
      subtitle: "30 Days of Open Source",
      logo_path: "CFC.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#a60000",
    },
    {
      title: "Training",
      subtitle: "Git Learning",
      logo_path: "Progate.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#88e7ce",
    },*/
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed an internship. I have mostly done projects on my own and am actively looking for internships. I love sharing my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "RoverSport",
          company: "Rover",
          company_url: "",
          logo_path: "CFC.jfif",
          duration: "Dic 2019 - Marzo 2020",
          location: "Remote",
          description: `in the Tic area helping in what I could since I entered as Jr but due to the pandemic it closed in my country
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "UAPA",
          company: "UAPA",
          company_url: "https://www.webarchsrm.com/",
          logo_path: "Webarch.jfif",
          duration: "Mar 2020 - Nov 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
          color: "#4285F4",
        } /* 
        {
          title: "Campus Leader",
          company: "Code For Cause",
          company_url: "https://www.codecau.se/",
          logo_path: "CFC.jfif",
          duration: "Nov 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
          color: "#a60000",
        },
        {
          title: "Machine Learning - Research associate",
          company: "Next Tech Lab",
          company_url: "https://nextech.io/",
          logo_path: "NTL.jfif",
          duration: "Oct 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Associate responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects and intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
          color: "#62cff0",
        },
        {
          title: "Campus Ambassador",
          company: "Bagcampus",
          company_url: "https://bagcampus.in/",
          logo_path: "Bagcampus.jpg",
          duration: "Dec 2020 - May 2021",
          location: "Remote",
          description:
            "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
          color: "#0059c9",
        },
        {
          title: "Volunteer",
          company: "Google Crowdsource",
          company_url: "https://indiaenvironment.org/",
          logo_path: "GCS.jfif",
          duration: "Sept 2020 - Present",
          location: "Remote",
          description:
            "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
          color: "#ffffff",
        },
        {
          title: "Student Volunteer",
          company: "National Service Scheme",
          company_url: "https://indiaenvironment.org/",
          logo_path: "NSS.jfif",
          duration: "Dec 2019 - May 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#282b6c",
        },*/,
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, JavaScript Scripts, and React Project. Below are some of my projects. ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "About",
    subtitle:
      " I'm Jonás Román Espaillat I'm 21 years old I'm studying Software engineering I've been at university for 2 years I'm passionate about Games and programming I have the ability to learn new things quickly",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Web Page Responsive",
      url: "https://github.com/Jonas0819/web-page.github.io",
      description: "Responsive Web Page Using Css Grid",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "Tribute Page Camp",
      url: "https://github.com/Jonas0819/tribuge-page.github.io",
      description: "Tribute Page Dr. Norman Borlaug",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "Techical Documentation",
      url: "https://github.com/Jonas0819/technical-documentation.github.io",
      description: "Javascript Documentation Page ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Page Forms",
      url: "https://github.com/Jonas0819/survey-form.github.io",
      description: "Survey form codecamp",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "Product landing",
      url: "https://github.com/Jonas0819/product-landing-page.github.io",
      description: "Product landing",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "3",
      name: "Portafolio",
      url: "https://github.com/Jonas0819/Portfolio",
      description: "My Portafolio",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    } /*
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },*/,
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
