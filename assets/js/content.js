const portfolioData = {
  "profile": {
    "name": "Yuda Risma Wahyudi",
    "title": "Robotic Software Engineer",
    "tagline": "Building intelligent automation solutions with cutting-edge robotics and software",
    "about": [
      `I am a Senior Automation Test Engineer at PEGATRON, specializing in robotic automation and software development.
        With expertise in industrial robotics, ROS (Robot Operating System), and full-stack development, I create innovative
        solutions that seamlessly integrated hardware and software. My current focus is on developing automated testing frameworks
        for smart manufacturing of 5G products, especially in OTA (Over-The-Air) testing), ensuring the products meet the communication 
        standards and quality as defined by 3GPP.`,

      `In the past, I worked on several industrial robotics automation projects. Designed and implemented robotic control systems
        for automated polishing, insertion, and automated optical inspection (AOI) using frameworks like ROS, deep learning, and 
        computer vision. Conducted deep research on robot kinematics, control, and motion planning, contributing to multiple patents 
        and publications.`,

      `Outside of work, I enjoy experimenting with robotics through simulation platforms like ROS and CoppeliaSim, where I design 
         interfaces and build libraries that support multiple robot platforms — many of which I share on GitHub.`
    ],
    "contact": {
      "email": "your.email@example.com",
      "location": "Your Location",
      "phone": "+1 (123) 456-7890"
    },
    "social": {
      "github": "https://github.com/yudarw",
      "linkedin": "https://linkedin.com/in/yudarw",
      "medium": "https://medium.com/@yudarw"
    }
  },
  "experience": [
    {
      "title": "Senior Automation Test Engineer",
      "company": "PEGATRON",
      "location": "Batam, Indonesia",
      "date": "September 2022 — Present",
      "description": [
        `Developed automated test programs for the production line FATP (Final Assembly Test and Pack), enchanced 
         testing algorithms and optimize program structures, resulting in a 20% reduction in testing cycle time`,
        `Led the development of reusable libraries for communication between testing software and instruments, 
         improving maintainability and efficiency using .NET for Windows applications and PHP for web platforms`,
        `Deployed software debugging tools used by 100+ engineers across factories in Taipei, Batam, Suzhou, 
         and Vietnam, significantly enhancing troubleshooting workflows and reducing downtime by 30%`,
        `Conducted deep research on 5G OTA testing methodologies, evaluated antenna performance, RF characteristics,
         signal quality, and compliance with 3GPP standards. Designed test flows for various 5G projects 
         (dongle, camera, and FWA), setting up environments, and defining specifications with customer`
      ],
      "tags": ["C#", ".NET", "Python", "5G", "OTA", "Automation"]
    },
    {
      "title": "Research Assistant",
      "company": "Assistive Robotic Lab, National Taipei University of Technology",
      "location": "Taipei, Taiwan",
      "date": "August 2021 — July 2022",
      "description": [
        `Led industry-funded research projects on automated industrial systems, collaborating with cross-functional 
         teams to deliver practical solutions.`,
        `Researched and developed a robotic teaching method using haptic devices to transfer human motion into 
         robotic control, significantly reducing robot programming time for complex tasks such as polishing, 
         resulting in 2 US patents and 3 journals publication`,
        `Developed a real-time robotic automation inspection system (AOI) using deep learning and computer vision
         algorithms for efficient and robust defect detection on product surfaces`,
        `Reviewed relevant literature, implemented state-of-art control algorithms (including robot kinematics, 
         robot navigation, control theory, and motion planning), contributed to the invention of new methods and approaches`,
        `Developed robot APIs and communication protocols enabling seamless integration between computers and various 
         industrial robots such as Fanuc, Yaskawa, and Denso`
      ],
      "tags": ["C++", "Python", "Deep Learning", "Industrial Robotics"]
    },
    {
      "title": "Head of Robotic Team",
      "company": "Robotic Laboratory, State University of Malang",
      "location": "Malang, Indonesia",
      "date": "2016 — 2018",
      "description": [
        `Managed a cross functional team to design and build a hexapod robot, maintain project timelines, resource allocation, 
         and technical development`,
        `Led the design and implementation of robotic control and navigation systems, developing all algorithms in C++ on STM32
         controllers to deliver efficient, reliable, and precise robot motion.`,
        `Published a paper on navigation control of a hexapod robot.`,
        `Compete in the National Indonesia Fire-Fighting Robot Contest 2017, achieving best 5th finalist position among 101 teams.`
      ],
      "tags": ["C++", "Python", "Hexapod", "STM32"]
    },
    {
      "title": "Electical Engineer (Part-Time)",
      "company": "CV. Innotech Solution",
      "location": "Malang, Indonesia",
      "date": "2013 — 2016",
      "description": [
        `Managed a cross functional team to design and build a hexapod robot, maintain project timelines, resource allocation, 
         and technical development`,
        `Led the design and implementation of robotic control and navigation systems, developing all algorithms in C++ on STM32
         controllers to deliver efficient, reliable, and precise robot motion.`,
        `Published a paper on navigation control of a hexapod robot.`,
        `Compete in the National Indonesia Fire-Fighting Robot Contest 2017, achieving best 5th finalist position among 101 teams.`
      ],
      "tags": ["C++", "Python", "Hexapod", "STM32"]
    }
  ],
  "projects": [
    {
      "title": "Diglett - CPK Analysis Tool",
      "description": `Created an automated CPK analysis program which can assist engineers to quickly generate the CPK data from production line`,
      "tags": ["C#", ".NET", "FastAPI", "Data Analysis", "Data Visualization"],
      "icon": "🤝",
      "image": "assets/images/thumb-diglett.jpg",
      "links": {
        "description": "projects/diglett.md"
      }
    },
    {
      "title": "Hybrid Offline-to-Online Robot Teaching Method",
      "description":
        `An <strong>Offline-to-Online Robotic Teaching Tool</strong> that combines CAD‑based trajectory
         planning with real‑time teleoperation. Operators can design polishing paths 
         offline, then refine them online using a haptic controller with 3D movement 
         and force feedback. A custom C++ teaching software integrates these features
         with Yaskawa robot controllers, enabling trajectory execution, calibration, 
         and job design.`,
      "tags": ["Force Control", "Industrial Robot", "Automation", "C++", "ROS"],
      "icon": "🤖",
      "image": "assets/images/thumb-haptic-yaskawa.jpg",
      "links": {
        "github": "https://github.com/yourusername/warehouse-robot",
        "description": "projects/robotic-teaching-software.md"
      }
    },
    {
      "title": "Haptic Teleoperation with FANUC",
      "description":
        `A software interface enabling haptic teleoperation of FANUC industrial robots using a 3D haptic device.
         Operators can intuitively control robot motion in 3D space with force feedback, enhancing precision
         and ease of use. Developed in C++ using FANUC's API and ROBOGUIDE for seamless integration.`,
      "tags": ["Force Control", "Industrial Robot", "Automation", "C++", "ROS"],
      "icon": "🤖",
      "image": "assets/images/thumb-haptic-teleoperation.jpg",
      "links": {
        "github": "https://github.com/yourusername/warehouse-robot",
        "description": "projects/haptic-teleoperation-fanuc.md"
      }
    },
    {
      "title": "Autonomous Robotic Polishing",
      "description":
        `Developed an autonomous robotic polishing using industrial robot Fanuc M-20iA equipped with a force sensor. Implement
        a hybrid position force control algorithm to achieve consistent surface finish quality. The system can adapt to varying 
        surface geometries`,
      "tags": ["Force Control", "Industrial Robot", "Automation", "C++", "ROS"],
      "icon": "🤖",
      "image": "assets/images/polishing-robot.jpg",
      "links": {
        "github": "https://github.com/yourusername/warehouse-robot",
        "description": "projects/automated-robotic-polishing.md"
      }
    },
    {
      "title": "Automated Optical Inspection (AOI) System",
      "description":
        `An automated optical inspection system using deep learning for scratch defect detection in manufacturing. The system
        achieves 99.2% accuracy with real-time processing capabilities, significantly improving quality control processes.`,
      "tags": ["Force Control", "Industrial Robot", "Automation", "C++", "ROS"],
      "icon": "🤖",
      "image": "assets/images/aoi-defect-detection-program.jpg",
      "links": {
        // "description": "projects/automated-optical-inspection.md"
        "description": "projects/automated-optical-inspection.md"
      }
    },
    {
      "title": "5G OTA Testing",
      "description": `An automated testing system for NR5G OTA station verificaion. developed test flows for various 5G products 
       including dongle, camera, and FWA. Created libraries for communication interface between testing software and testing instruments, `,
      "tags": ["RF Testing", "OTA testing", "5G", "C#", "Python"],
      "icon": "🦾",
      "image": "assets/images/pegatron5g_products.jpg",
      "links": {
        "description": "projects/5g-ota-testing.md"
      }
    },
    {
      "title": "coppeliasim-zmq-remoteapi",
      "description": `Various robot simulation demos using CoppeliaSim and Python. Creating libraries for various arm robots and mobile robots
       to enable seamless integration between CoppeliaSim and external programs via ZMQ Remote API.`,
      "tags": ["Arm Robot", "Coppeliasim", "Simulation", "Python", "C++"],
      "icon": "⚙️",
      "image": "assets/images/coppeliasim-slam.jpg",
      "links": {
        "github": "https://github.com/yudarw/coppeliasim-projects-with-zmqRemoteApi",
        "description": "projects/python-zmq-remoteapi.md"
      }
    },
    {
      "title": "Scratch Defect Detection for AOI",
      "description": "Implemented an AI-powered quality control system using deep learning for defect detection in manufacturing. Achieves 99.2% accuracy with real-time processing capabilities.",
      "tags": ["Python", "TensorFlow", "OpenCV", "Edge Computing"],
      "icon": "👁️",
      "image": "assets/images/scratch-detection.jpg",
      "links": {
        "github": "https://github.com/yourusername/vision-qc",
        "live": "https://medium.com/@yudarw/scratch-defect-detection-method-for-automated-optical-inspection-aoi-2e0fe1a83a2e",
      }
    },
    {
      "title": "spy-terminal",
      "description": `A customized terminal tool that can support SSH, telnet, and serial communication, used for the 
                    debugging process in production line.`,
      "tags": ["Unity", "C#", "Physics Simulation", "3D Modeling"],
      "icon": "🔄",
      "image": "assets/images/terminal.jpg",
      "links": {
        "github": "https://github.com/yourusername/digital-twin",
        "description": "project-digital-twin.html"
      }
    }
  ],
  "skills": {
    "Robotics & Automation": {
      "icon": "fa-robot",
      "items": [
        "Industrial Robotics (Yaskawa, Fanuc, Denso)",
        "ROS / ROS2",
        "Trajectory Planning & Control",
        "SLAM & Navigation",
        "Computer Vision",
        "PLC Programming"
      ]
    },
    "Software Development": {
      "icon": "fa-code",
      "items": [
        "C / C++",
        "C#",
        "Python",
        "JavaScript",
        "Laravel / PHP",
        "Vue JS",
        "Git / CI/CD",
        "REST APIs",
        "Database Design"
      ]
    },
    "AI & Machine Learning": {
      "icon": "fa-brain",
      "items": [
        "Object Detection",
        "Deep Learning",
        "TensorFlow / PyTorch",
        "OpenCV",
        "YOLO"
      ]
    },
    "Tools & Technologies": {
      "icon": "fa-toolbox",
      "items": [
        "Visual Studio / VS Code",
        "Coppeliasim / Gazebo",
        "SolidWorks / CAD",
        "Raspberry Pi / Arduino",
        "STM32"
      ]
    }
  }
  ,
  "publications": [
    {
      "title": "Offline-to-online programming teaching system for robot arm trajectory and method thereof",
      "authors": "HI Lin, YR Wahyudi",
      "venue": "US Patent App. 17/705,282",
      "year": 2023,
      "link": "https://patents.google.com/patent/US20230311336A1/en",
      "summary": ""
    },
    {
      "title": "Grasping and Repositioning Objects Using Inverse Kinematic Method for Arm Robot Based on Pixel Position Regression",
      "authors": "S Sendari, YR Wahyudi, IAE Zaeni, AN Handayani, M Muladi",
      "venue": "Journal of Advanched Manufacturing Technology 16 (3), 45-54",
      "year": 2022,
      "link": "https://jamt.utem.edu.my/jamt/article/view/6409",
      "summary": ""
    },
    {
      "title": "Object appearance detection system with posture detection and control method thereof",
      "authors": "HI Lin, YC Huang, FS Wibowo, YR Wahyudi",
      "venue": "US Patent 11,205,261",
      "year": 2021,
      "link": "https://patents.google.com/patent/US11205261B1/en",
      "summary": ""
    },
    {
      "title": "Haptic Based Robot Teaching Method for Wooden Furniture Polishing",
      "authors": "HI Lin, YR Wahyudi",
      "venue": "International Automatic Control Conference (CACS), 1-6",
      "year": 2020,
      "link": "https://ieeexplore.ieee.org/abstract/document/9289765/",
      "summary": ""
    },
    {
      "title": "Development and implementation of novel six-sided automated optical inspection for metallic objects",
      "authors": "FS Wibowo, YR Wahyudi, HI Lin",
      "venue": "International Conference on Advanced Robotics and Intelligent Systems",
      "year": 2020,
      "link": "https://ieeexplore.ieee.org/abstract/document/9205786/",
      "summary": ""
    },
    {
      "title": "A Novel Robotic Automated Optical Inspection System for on the Fly Production Lines",
      "authors": "HI Lin, FS Wibowo, YR Wahyudi",
      "venue": "Journal of Physics: Conference Series 1583 (1), 012006",
      "year": 2020,
      "link": "https://iopscience.iop.org/article/10.1088/1742-6596/1583/1/012006/pdf",
      "summary": ""
    },
    {
      "title": "Implementation of PD (proportional derivative) Control System on Six-Legged Wall Follower Robot",
      "authors": "S Sendari, YR Wahyudi",
      "venue": "International Automatic Control Conference (CACS), 1-6",
      "year": 2020,
      "link": "https://ieeexplore.ieee.org/abstract/document/8606776/",
      "summary": ""
    }
  ]
};
