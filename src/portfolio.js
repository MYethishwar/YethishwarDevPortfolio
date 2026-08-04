/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// import Twitter from "./containers/twitter-embed/twitter";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yethishwar",
  title: "Hi all, I'm Yethishwar",
  subTitle: emoji(
    "AI/ML Engineer building production-ready AI systems, LLM applications, and agentic workflows — skilled in Generative AI, Machine Learning, and full-stack development. 550+ GitHub commits and counting."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MYethishwar",
  linkedin: "https://www.linkedin.com/in/myethishwar/",
  gmail: "yethishwarn@gmail.com",
  facebook: "https://www.facebook.com/chintuchintu.madavaram.3/",
  instagram: "https://www.instagram.com/myethishwar/",
  twitter: "https://x.com/YethishChintu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "AI/ML ENGINEER FOCUSED ON GENERATIVE AI, AGENTIC WORKFLOWS, AND PRODUCTION-READY AI SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and ship LLM applications and multi-agent systems using LangChain, LangGraph, and Google ADK"
    ),
    emoji(
      "⚡ Build Retrieval-Augmented Generation (RAG) pipelines with vector databases like Qdrant and ChromaDB"
    ),
    emoji(
      "⚡ Fine-tune and integrate LLMs (ChatGPT, Gemini, Hugging Face) with strong prompt engineering"
    ),
    emoji(
      "⚡ Deploy AI systems end-to-end on Azure, GCP, and Docker with FastAPI and React"
    ),
    emoji(
      "⚡ Clean, preprocess, and analyze data to build and evaluate machine learning models"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Generative AI",
      fontAwesomeClassname: "fas fa-magic"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Agentic AI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "RAG",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "ML",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Visualization",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Methodist College of Engineering & Technlogy.",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader:
        "Bachelor of Engineering in Artificial Intelligence & Data Science",
      duration: "2022 - 2026",
      desc: "Current CGPA: 9.12 / 10"
    },
    {
      schoolName: "Telangana State Model School & Junior College, Vemulapally.",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intermediate (Maths, Physics & Chemistry)",
      duration: "2020 - 2022",
      desc: "Overall Percentage:  87.1 / 100"
    },
    {
      schoolName: "Telangana State Model School & Junior College, Vemulapally.",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "SSC",
      duration: "2007 - 2020",
      desc: "GPA:  10 / 10"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Generative AI & RAG",
      progressPercentage: "85%"
    },
    {
      Stack: "Agentic AI (LangChain, LangGraph, ADK)",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "MySQL / MongoDB",
      progressPercentage: "85%"
    },
    {
      Stack: "FastAPI & React.js",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI/ML Intern - Software Engineer",
      company: "Tachyon IT Solutions Pvt Ltd",
      companylogo: require("./assets/images/tachyonLogo.jpg"),
      logoStyle: {objectFit: "cover", objectPosition: "left"},
      date: "April 2026 – Present",
      desc: ""
    },
    {
      role: "Tech-Lead Intern - Generative AI Engineer",
      company: "Viswam AI(Swecha Foundation, Hyderabad)",
      companylogo: require("./assets/images/vismamLogo.png"),
      date: "24 May 2025 – 19 July 2025",
      desc: "Collaborated with the ViswamAI team to collect, clean, and structure Telugu text datasets from multiple sources for AI training and data preparation workflows, coordinating with mentors and managing team progress.",
      descBullets: [
        "Gained hands-on experience with FastAPI, text preprocessing, web scraping, and tokenization"
      ]
    },
    {
      role: "Junior Data Analyst Intern",
      company: "Samusha Technologies",
      companylogo: require("./assets/images/samush.png"),
      date: "10 December 2024 – 12 Mar 2025",
      desc: "Collaborated on government welfare data analysis, performing data cleaning, preprocessing, feature engineering, and statistical analysis to improve data quality and generate insights for budget planning and resource allocation.",
      descBullets: [
        "Managed and analyzed 20,000+ records, generating insights and dashboards using Excel and Power BI"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/voltstream.jpg"),
      projectName: "VoltStream: Multi-Agent Energy Intelligence Platform (ADK)",
      projectDesc:
        "A multi-agent energy intelligence platform built with Google ADK, Gemini, FastAPI, React, Firebase, MongoDB, ChromaDB, and GCP, enabling RAG-powered assistance, device automation, usage analytics, and energy optimization through chat, RAG, and Agent Windows.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/MYethishwar/VoltStream"
        }
      ]
    },
    {
      image: require("./assets/images/travel_j.png"),
      projectName: "AI-Powered Travel Journal Assistant",
      projectDesc:
        "An agentic travel management platform built with React, FastAPI, MongoDB, and Docker, enabling chat-based journal creation, entry modification, authentication, web-assisted responses, expense tracking, image uploads, and destination planning.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/MYethishwar/Travel-Journal-Application"
        }
      ]
    },
    {
      image: require("./assets/images/websiteAssistant.jpg"),
      projectName:
        "ContextIQ - Website Assistant using Retrieval Augmented Generation",
      projectDesc:
        "An AI-powered RAG chatbot built with FastAPI, Qdrant, OpenAI Embeddings, and Gradio, enabling website/document-based question answering through semantic search, similarity retrieval, web crawling, and context-grounded response generation.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/MYethishwar/AI-Powered-Website-Assistant-Using-Retrieval-Augmented-Generation"
        }
      ]
    },
    {
      image: require("./assets/images/plant.png"),
      projectName: "Plant Disease Recognition System (Deep learning)",
      projectDesc:
        "A Deep Learning project where It detects Plant Disease by taking  a  sample leaf Image using EfficientNet - B0 (Transfer Learning) & Custom CNN.",
      footerLink: [
        {
          name: "Deployment",
          url: "https://huggingface.co/spaces/MYethishwar/Plant-Disease-Recognition-EfficientNet-3Classes"
        },
        {
          name: "View Source Code",
          url: "https://github.com/MYethishwar/DataScienceLearning/tree/main/Major%20Projects/PlantDiseaseRecognition-3classes"
        }
      ]
    },
    {
      image: require("./assets/images/Atliq.webp"),
      projectName: "Atliq Hardware Sales Insights (Data Analytics)",
      projectDesc:
        "Analyzed Atliq Hardware sales data to identify trends, improve reporting, and generate actionable insights for supporting informed business decisions. trends and business insights.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/MYethishwar/Sales-Insights-SQL-PowerBI-Tableau"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/datascience.webp"),
      projectName: "Placement Prediction System (Machine Learning)",
      projectDesc:
        "Built an end-to-end placement prediction system using data preprocessing, feature engineering, machine learning models, and performance evaluation techniques.",
      footerLink: [
        {
          name: "Deployment",
          url: "https://huggingface.co/spaces/MYethishwar/Placement_Prediction_System"
        },
        {
          name: "View Source  Code",
          url: "https://github.com/MYethishwar/DataScienceLearning/blob/main/Major%20Projects/Placement_Prediction_System/code.ipynb"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Python Pro Bootcamp",
      subtitle:
        "Completed 56.5-hour Python Pro Bootcamp focusing on core Python programming skills.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-a5f196e7-a958-40aa-8e2c-7c92d6a2c6e2/"
        }
      ]
    },
    {
      title: "MySQL Bootcamp",
      subtitle:
        "Completed 20-hour MySQL Bootcamp covering SQL fundamentals, queries, and database concepts.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-8a33e4b3-d198-4db3-9723-64a5c630abbd/"
        }
      ]
    },

    {
      title: "Data Analytics with Python",
      subtitle:
        "Completed Data Analytics with Python covering Statistics, analysis and visualization.",
      image: require("./assets/images/googleAssistantLogo.webp"),

      footerLink: [
        {
          name: "Certification",
          url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS17S124700116704288017"
        }
      ]
    },

    {
      title: "Introduction to Networks",
      subtitle:
        "Completed CCNAv7 course covering networking fundamentals and protocols.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.netacad.com/certificates/?issuanceId=4d00db92-4e60-47db-95b4-b738de64a819"
        }
      ]
    },

    {
      title: "Git & GitHhub Bootcamp",
      subtitle:
        "Completed Git & GitHub Bootcamp covering version control and collaboration workflows.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-e9df8e95-8d54-40d1-8785-c72def6eaa10/"
        }
      ]
    },

    {
      title: "Telugu LLM",
      subtitle:
        "Achieved Completion Certificate on 3 months internship at Viswam.AI",
      image: require("./assets/images/viswam.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learning.swecha.org/mod/customcert/verify_certificate.php"
        },
        {name: "Key: C22Hxey213"}
      ]
    },

    {
      title: "Junior Data Analyst Intern",
      subtitle:
        "Achieved Completion Certificate on 4 months internship at Samushna Technologies.",
      image: require("./assets/images/samushna.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7367455940083675137/"
        }
      ]
    },

    {
      title: "TCS National Qualifier Test (NQT)",
      subtitle:
        "Qualified the TCS National Qualifier Test (NQT) for the Digital Role.",
      image: require("./assets/images/tcs.jpg"),
      imageAlt: "TCS NQT",
      footerLink: []
    },

    {
      title: "550+ GitHub Commits",
      subtitle:
        "550+ GitHub commits across software development, AI, and data science projects.",
      image: require("./assets/images/github.jpg"),
      imageAlt: "GitHub Activity",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/MYethishwar"
        }
      ]
    },

    {
      title: "ITX Learning Hub - Data Science Certificate",
      subtitle:
        "Certificate of Completion for the 6-month intensive Data Science training program at ITX Learning Hub.",
      image: require("./assets/images/ITX_certificate.jpg"),
      imageAlt: "ITX Learning Hub Certificate",
      featured: true,
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9381676864",
  email_address: "yethishwarn@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "YethishChintu", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
