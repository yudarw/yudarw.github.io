// Portfolio Configuration

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "YUDA RISMA WAHYUDI",
        title: "Senior Automation Test Engineer | Robotic Engineer",
        email: "yudarismawahyudi@gmail.com",
        phone: "",
        location: "Batam, Indonesia",
    },

    // Social Links
    social: {
        linkedin: "https://linkedin.com/in/yudarw",
        github: "https://github.com/yudarw",
        twitter: "", // Add your Twitter/X if you have one
        medium: "https://medium.com/@yudarw",
        portfolio: "", // Add additional portfolio link if needed
    },

    resume: "Resume - Yuda Risma Wahyudi - 2025.pdf",

    // Hero Section
    hero: {
        subtitle: "Senior Automation Test Engineer | Robotic Engineer",
        description: `
            Robotic system and control specialist with over than 5 years of experience in designing and implementing
            robotic automation systems, embedded software, and automated testing solutions. 
            Proficient in C++, C#, Python, ROS, and machine learning frameworks. Passionate about leveraging technology 
            to drive innovation and efficiency in industrial applications.`,
        yearsExperience: "7+",
        projectsCompleted: "10+",
        technologiesUsed: "15+",
    },

    // About Section
    about: {
        paragraphs: [
            `I am a robotic and automation specialist with a solid track record of more than 5 years of experience 
            in designing, developing, and implementing cutting-edge robotic systems and embedded software solutions.`,

            `Currently, I'm a Senior Automation Test Engineer at PEGATRON, specializing in 5G testing. 
            I contribute to the development of 5G testing automation program, including RF conductive and over-the-air (OTA) testing, 
            ensuring our products meets the 3GPP standards of quality and performance required in the fast-evolving 5G industry.`,
            
            `In the past, I worked on several industrial robotic automation projects. Designed and implemented robotic systems for 
            automated polishing, robot insertion, and automated optical inspection (AOI). 
            Conducted deep research in robot kinematics, control theory, and trajectory planning to design stable and robust control. 
            I also implemented deep learning and computer vision for object recognition.`,
            
            `I have experience with machine learning frameworks like TensorFlow and Keras, CUDA, and robotic programming platforms 
            like ROS and Gazebo. Experienced in controlling several industrial robots and possess expertise in both manual and 
            scripted programming using Python and C++.`
        ]
    },

    // Work Experience
    experience: [
        {
            title: "Senior Automation Test Engineer",
            company: "PEGATRON • Batam, Indonesia",
            period: "September 2022 - Present",
            responsibilities: [
                `Designed and implemented automated testing, reducing testing cycle time by 20% through code optimization, 
                program structure revision, and enhanced testing algorithms`,
                `Created libraries and APIs for several testing devices to enable communications between software and hardware based on C#. 
                Implementing OOP principles and coding standards to produce robust, efficient, and maintainable libraries`,
                `Developed multiple debugging software tools using .NET and C# that is used by over 100 engineers
                 across factories in Taipei, Batam, Suzhou, and Vietnam. These tools significantly improved production line troubleshooting, 
                 leading to a 30% reduction in downtime.`,
                `Utilized Git, Github, and Gitlab for version control and code integration`,
                `Performed troubleshooting and maintenance of products in production lines, addressed issues, and delivered customer's 
                needs to ensure product quality`,
                `Actively contributed to the development of new automated testing technologies. Authored test scripts for various 
                test cases using C# and Python`
            ]
        },
        {
            title: "Research Assistant",
            company: "Assistive Robotics Lab, National Taipei University of Technology • Taipei, Taiwan",
            period: "August 2021 - July 2022",
            responsibilities: [
                `Conducted research on several projects related to automated industrial systems, designed the research plan 
                and proactively addressed challenges to ensure on-time project completion`,
                `Invented a novel robotic teaching method using a haptic device. This innovation significantly reduced robot training time
                 for complex tasks like polishing`,
                `Reviewed relevant literature, implemented state-of-art control algorithms (including robot kinematics, 
                robot navigation, control theory, and motion planning), contributed to the invention of new methods and approaches`,
                `Developed a real-time robotic automation inspection system (AOI) using deep learning and computer vision algorithms
                 for efficient and robust defect detection on product surfaces`,
                `Highly proficient in utilizing ROS and C++ for designing, simulating, and validating robotic control algorithms`
            ]
        },
        {
            title: "Head of Legged Robot Team",
            company: "Robotic Laboratory, Universitas Negeri Malang • Malang, Indonesia",
            period: "May 2016 - May 2018",
            responsibilities: [
                `Managed a cross-functional team of 10 members to design and build a hexapod robot, overseeing project timelines, 
                resource allocation, and technical development`,
                `Led the design and development of the hexapod robot, including mechanical design using SOLIDWORKS, kinematic algorithm 
                development, and integration of sensors and actuators`,
                `Coordinated team efforts to ensure successful project completion, facilitated communication among team members, 
                and resolved technical challenges`,
                `Organized regular team meetings to track progress, address issues, and ensure alignment with project goals`,
                `Presented project updates and results to faculty advisors and stakeholders, demonstrating the robot's capabilities 
                and performance`,
                `Compete in the National Indonesia Fire-Fighting Robot Contest 2017, achieving finalist position among 101 teams`   
            ]
        },
        {
            title: "Electrical Engineering (Part-time)",
            company: "CV InnoTech Solution • Malang, Indonesia",
            period: "January 2013 - July 2016",
            responsibilities: [
                `Assisted in the service and maintenance of electrical systems and equipment, ensuring optimal performance 
                and minimizing downtime`,
                `Design PCB and install the electronic components for various robotic projects`,
                `Collaborated with senior engineers to troubleshoot and resolve electrical issues, gaining hands-on experience in the field`,
                `Conducted testing and quality assurance for electrical systems, ensuring compliance with industry standards
                 and safety regulations`   
            ]
        }
    ],

    // Education
    education: [
        {
            degree: "Master of Science",
            field: "Automation Technology",
            institution: "National Taipei University of Technology",
            period: "2019 - 2021",
            location: "Taiwan"
        },
        {
            degree: "Bachelor of Engineering",
            field: "Electrical and Electronics Engineering",
            institution: "Universitas Negeri Malang",
            period: "2014 - 2018",
            location: "Indonesia"
        }
    ],

    // Projects
    projects: [
        {
            id: "ota-testing",
            title: "5G OTA Testing",
            description: `An automated testing system for NR5G OTA station verification. Created DLLs and libraries
                          to enable the communication between the testing software and various testing equipments.`,
            tags: ["5G", "OTA", "Python"],
            icon: "fa-chart-line",
            image: "assets/images/pega-5g-products.JPG",
            link: "pages/project.html?id=ota-testing",
            
            // Detailed configuration for project page
            detail: {
                tagline: "Automated OTA testing system for 5G OTA performance verification",
                markdownFile: "contents/ota-testing.md",
                meta: {
                    period: "2022 - Present",
                    company: "PEGATRON",
                    category: "5G Testing"
                },
                sidebar: {
                    role: "Lead Developer",
                    duration: "Ongoing",
                    status: "active",
                    technologies: ["Python", "C#", ".NET", "5G NR", "OTA Testing"]
                }
            }
        },
        {
            id: "rf-testing",
            title: "RF Testing",
            description: `RF testing play an important role in ensuring the performance and reliability of 5G devices. Developed an 
                          automated testing system for NR5G Over-the-Air (OTA) testing using C# and .NET framework. The system 
                          integrates with various testing equipment such as signal generators, spectrum analyzers, and power meters 
                          to perform comprehensive RF tests on 5G devices. The automated system significantly reduces testing time
                          and improves accuracy compared to manual testing methods.`,
            tags: ["5G", "OTA", "RF Test"],
            icon: "fa-chart-line",
            image: "assets/images/rf-testing.JPG",
            link: "pages/project.html?id=rf-testing",
            detail: {
                tagline: "Comprehensive RF testing automation for 5G devices",
                markdownFile: "contents/ota-testing.md",
                meta: {
                    period: "2022 - Present",
                    company: "PEGATRON",
                    category: "RF Testing"
                },
                sidebar: {
                    role: "Lead Developer",
                    duration: "Ongoing",
                    status: "active",
                    technologies: ["C#", ".NET", "RF Equipment", "Signal Analyzers", "5G NR"]
                }
            }
        },
        {
            id: "diglett",
            title: "Diglett - Auto CPK Generator",
            description: `Created an automated CPK analysis program which can assist engineers to quickly generate the CPK data from production line.`, 
            tags: ["C#", ".NET", "Statistics", "Data Visualization"],
            icon: "fa-chart-line",
            image: "assets/images/cpk.jpg",
            link: "pages/project.html?id=diglett",
            detail: {
                tagline: "Automated CPK analysis tool for production testing data",
                markdownFile: "contents/diglett.md",
                meta: {
                    period: "2022 - Present",
                    company: "PEGATRON",
                    category: "Data Analysis Tool"
                },
                sidebar: {
                    role: "Lead Developer",
                    duration: "6 months (2022)",
                    status: "active",
                    technologies: ["C#", ".NET Framework", "FastAPI"]
                }
            }
        },
        {
            id: "spy-terminal",
            title: "spy-terminal",
            description: `A customized terminal tool that can support SSH, telnet, and serial communication, used for the 
                        debugging process in production line.`,
            tags: ["C#", "SSH", "Telnet", "Serial Communication"],
            icon: "fa-terminal",
            image: "assets/images/terminal.jpg",
            link: "#",
            detail: {
                tagline: "Customizable multi-protocol terminal tool for debugging",
                markdownFile: "docs/projects/spy-terminal.md",
                meta: {
                    period: "2023",
                    company: "PEGATRON",
                    category: "Development Tool"
                },
                sidebar: {
                    role: "Lead Developer",
                    duration: "3 months",
                    status: "completed",
                    technologies: ["C#", "SSH", "Telnet", "Serial Port", ".NET"]
                }
            }
        },
        ,
        {
            id: "pathloss-calibration",
            title: "pathloss-calibration-tool",
            description: `A simple program to calibrate the RF pathloss value for LitePoint IQxel testing system.`,
            tags: ["C#", "SSH", "Telnet", "Serial Communication"],
            icon: "fa-terminal",
            image: "assets/images/litepoint-diagram.jpg",
            // link: "pages/project.html?id=pathloss-calibration",
            link: "#",
            detail: {
                tagline: "Customizable multi-protocol terminal tool for debugging",
                markdownFile: "docs/projects/spy-terminal.md",
                meta: {
                    period: "2023",
                    company: "PEGATRON",
                    category: "Development Tool"
                },
                sidebar: {
                    role: "Lead Developer",
                    duration: "3 months",
                    status: "completed",
                    technologies: ["C#", "SSH", "Telnet", "Serial Port", ".NET"]
                }
            }
        },
        {
            id: "aoi-inspection",
            title: "Automated Optical Inspection",
            description: `An automated optical inspection system (AOI) to inspect the surface of metallic objects.`,
            tags: ["Computer Vision", "Deep Learning", "C++", "Python"],
            icon: "fa-camera",
            image: "assets/images/aoi-defect-detection-program.jpg",
            link: "#",
            detail: {
                tagline: "Six-sided automated optical inspection system with robotic handling",
                markdownFile: "docs/projects/aoi-inspection.md",
                meta: {
                    period: "2021 - 2022",
                    company: "National Taipei University of Technology",
                    category: "Research Project"
                },
                sidebar: {
                    role: "Research Assistant",
                    duration: "1 year",
                    status: "completed",
                    technologies: ["Computer Vision", "Deep Learning", "C++", "Python"]
                }
            }
        },
        {
            id: "robotic-polishing",
            title: "Automated Robotic Polishing",
            description: `An automated robotic polishing system driven by a Fanuc M20iA industrial robot for wooden furniture polishing.`,
            tags: ["C++", "FANUC Robot", "Force Control", "ROS"],
            icon: "fa-robot",
            image: "assets/images/robotic-polishing.JPG",
            link: "#",
            detail: {
                tagline: "Hybrid position-force control for automated wooden furniture polishing",
                markdownFile: "docs/projects/robotic-polishing.md",
                meta: {
                    period: "2020 - 2021",
                    company: "National Taipei University of Technology",
                    category: "Research Project"
                },
                sidebar: {
                    role: "Research Assistant",
                    duration: "1.5 years",
                    status: "completed",
                    technologies: ["C++", "FANUC Robot", "Force Control", "ROS", "Haptic Device"]
                }
            }
        },
        {
            id: "coppeliasim-zmq-remoteapi",
            title: "coppeliasim-zmq-remoteapi",
            description: `This project contains various robot simulation demos using CoppeliaSim and Python. 
                        The project is organized into several directories, each demonstrating different functionalities and algorithms 
                        for robot control and sensor integration.`,
            tags: ["C++", "opencv", "python", "coppeliasim"],
            icon: "fa-bug",
            image: "assets/images/coppeliasim-slam.jpg",
            // link: "pages/project.html?id=coppeliasim-arm-robot-simulation",
            link: "#",
            detail: {
                tagline: "Six-legged walking robot with inverse kinematics control",
                markdownFile: "docs/projects/hexapod-robot.md",
                meta: {
                    period: "2016 - 2018",
                    company: "Universitas Negeri Malang",
                    category: "Academic Project"
                },
                sidebar: {
                    role: "Team Head",
                    duration: "2 years",
                    status: "completed",
                    technologies: ["STM32", "Kinematics", "SOLIDWORKS", "Embedded Systems", "C"]
                }
            }
        },
        {
            id: "coppeliasim-arm-robot-simulation",
            title: "coppeliasim-opencv",
            description: `A coppelisim library that support integration with several type of robots and sensors 
                          such as vision sensor, proximity sensor, and force sensor.`,
            tags: ["C++", "opencv", "python", "coppeliasim"],
            icon: "fa-bug",
            image: "assets/images/coppeliasim-arm-robot-simulation.jpg",
            // link: "pages/project.html?id=coppeliasim-arm-robot-simulation",
            link: "#",
            detail: {
                tagline: "Six-legged walking robot with inverse kinematics control",
                markdownFile: "docs/projects/hexapod-robot.md",
                meta: {
                    period: "2016 - 2018",
                    company: "Universitas Negeri Malang",
                    category: "Academic Project"
                },
                sidebar: {
                    role: "Team Head",
                    duration: "2 years",
                    status: "completed",
                    technologies: ["STM32", "Kinematics", "SOLIDWORKS", "Embedded Systems", "C"]
                }
            }
        },
        {
            id: "teleoperation-robot",
            title: "haptic-teleoperation-robot",
            description: `An interface software to control a FANUC M20-iA industrial robot by using a haptic teleoperation device.`,
            tags: ["C++", "opencv", "python", "coppeliasim"],
            icon: "fa-bug",
            image: "assets/images/teleoperation-robot.jpg",
            // link: "pages/project.html?id=coppeliasim-arm-robot-simulation",
            link: "#",
            detail: {
                tagline: "Six-legged walking robot with inverse kinematics control",
                markdownFile: "docs/projects/hexapod-robot.md",
                meta: {
                    period: "2016 - 2018",
                    company: "Universitas Negeri Malang",
                    category: "Academic Project"
                },
                sidebar: {
                    role: "Team Head",
                    duration: "2 years",
                    status: "completed",
                    technologies: ["STM32", "Kinematics", "SOLIDWORKS", "Embedded Systems", "C"]
                }
            }
        },
        {
            id: "scratch-detection",
            title: "Scracth Defect Detection Method for Automated Optical Inspection System",
            description: `An interface software to control a FANUC M20-iA industrial robot by using a haptic teleoperation device.`,
            tags: ["C++", "opencv", "python", "coppeliasim"],
            icon: "fa-bug",
            image: "assets/images/scratch-detection.jpg",
            // link: "pages/project.html?id=coppeliasim-arm-robot-simulation",
            link: "https://medium.com/@yudarw/scratch-defect-detection-method-for-automated-optical-inspection-aoi-2e0fe1a83a2e",
            detail: {
                tagline: "Six-legged walking robot with inverse kinematics control",
                markdownFile: "docs/projects/hexapod-robot.md",
                meta: {
                    period: "2016 - 2018",
                    company: "Universitas Negeri Malang",
                    category: "Academic Project"
                },
                sidebar: {
                    role: "Team Head",
                    duration: "2 years",
                    status: "completed",
                    technologies: ["STM32", "Kinematics", "SOLIDWORKS", "Embedded Systems", "C"]
                }
            }
        },
        {
            id: "wall-follower",
            title: "Implementation of PD Control on Six-Legged Wall Follower Robot",
            description: `An interface software to control a FANUC M20-iA industrial robot by using a haptic teleoperation device.`,
            tags: ["C++", "opencv", "python", "coppeliasim"],
            icon: "fa-bug",
            image: "assets/images/firefighting-robot.jpg",
            // link: "pages/project.html?id=coppeliasim-arm-robot-simulation",
            link: "#",
            detail: {
                tagline: "Six-legged walking robot with inverse kinematics control",
                markdownFile: "docs/projects/hexapod-robot.md",
                meta: {
                    period: "2016 - 2018",
                    company: "Universitas Negeri Malang",
                    category: "Academic Project"
                },
                sidebar: {
                    role: "Team Head",
                    duration: "2 years",
                    status: "completed",
                    technologies: ["STM32", "Kinematics", "SOLIDWORKS", "Embedded Systems", "C"]
                }
            }
        },
        {
            id: "hexapod-robot",
            title: "Hexapod Robot",
            description: "Designed and built a hexapod fire-fighting robot based on STM32 Dev Kit for National Robotic Competition.",
            tags: ["C++", "STM32", "Robotics", "Inverse Kinematics", "Mapping"],
            icon: "fa-bug",
            image: "assets/images/hexapod-robot-design.jpg",
            link: "#",
            detail: {
                tagline: "Six-legged walking robot with inverse kinematics control",
                markdownFile: "docs/projects/hexapod-robot.md",
                meta: {
                    period: "2016 - 2018",
                    company: "Universitas Negeri Malang",
                    category: "Academic Project"
                },
                sidebar: {
                    role: "Team Head",
                    duration: "2 years",
                    status: "completed",
                    technologies: ["STM32", "Kinematics", "SOLIDWORKS", "Embedded Systems", "C"]
                }
            }
        },
    ],

    // Research & Publications
    publications: [
        {
            title: "Offline-to-online programming teaching system for robot arm trajectory and method thereof",
            venue: "US Patent App. 17/705,282",
            date: "October 5, 2023",
            type: "Patent",
            link: "https://patents.google.com/patent/US20230311336A1/en",
            authors: "HI Lin, YR Wahyudi"
        },
        {
            title: "Grasping and Repositioning Objects Using Inverse Kinematic Method for Arm Robot Based on Pixel Position Regression",
            venue: "Journal of Advanched Manufacturing Technology 16 (3), 45-54",
            date: "December 8, 2022",
            type: "Journal",
            link: "https://jamt.utem.edu.my/jamt/article/view/6409",
            authors: "S Sendari, YR Wahyudi, IAE Zaeni, AN Handayani, M Muladi"
        },
        {
            title: "Object appearance detection system with posture detection and control method thereof",
            venue: "US Patent 11,205,261",
            date: "2021",
            type: "Patent",
            link: "https://patents.google.com/patent/US11205261B1/en",
            authors: "HI Lin, YC Huang, FS Wibowo, YR Wahyudi"
        },
        {
            title: "Haptic Based Robot Teaching Method for Wooden Furniture Polishing",
            venue: "2020 International Automatic Control Conference (CACS), 1-6",
            date: "2020",
            type: "Conference",
            link: "https://ieeexplore.ieee.org/abstract/document/9289765/",
            authors: "HI Lin, YR Wahyudi"
        },
        {
            title: "Development and implementation of novel six-sided automated optical inspection for metallic objects",
            venue: "2020 International Conference on Advanced Robotics and Intelligent Systems",
            date: "2020",
            type: "Conference",
            link: "https://ieeexplore.ieee.org/abstract/document/9205786/",
            authors: "FS Wibowo, YR Wahyudi, HI Lin"
        },
        {
            title: "A Novel Robotic Automated Optical Inspection System for on the Fly Production Lines",
            venue: "Journal of Physics: Conference Series 1583 (1), 012006",
            date: "2020",
            type: "Conference",
            link: "https://iopscience.iop.org/article/10.1088/1742-6596/1583/1/012006/pdf",
            authors: "HI Lin, FS Wibowo, YR Wahyudi"
        },
        {
            title: "Implementation of PD (proportional derivative) Control System on Six-Legged Wall Follower Robot",
            venue: "2018 International Automatic Control Conference (CACS), 1-6",
            date: "2018",
            type: "Conference",
            link: "https://ieeexplore.ieee.org/abstract/document/8606776/",
            authors: "HI Lin, FS Wibowo, YR Wahyudi"
        }
    ],

    // Skills
    skills: {
        programming: [
            { name: "C++", level: "Advanced", percentage: 90 },
            { name: "C# .NET", level: "Advanced", percentage: 90 },
            { name: "Python", level: "Advanced", percentage: 85 },
            { name: "Git/GitHub", level: "Intermediate", percentage: 80 },
            { name: "MySQL", level: "Intermediate", percentage: 75 }
        ],
        robotics: [
            { name: "ROS (Robot Operating System)", level: "Advanced", percentage: 90 },
            { name: "Robot Kinematics & Control", level: "Advanced", percentage: 90 },
            { name: "FANUC Robot Programming", level: "Advanced", percentage: 85 },
            { name: "DENSO Robot Programming", level: "Intermediate", percentage: 80 },
            { name: "Gazebo Simulation", level: "Intermediate", percentage: 75 }
        ],
        ai_cv: [
            { name: "TensorFlow", level: "Intermediate", percentage: 80 },
            { name: "Keras", level: "Intermediate", percentage: 80 },
            { name: "Computer Vision", level: "Advanced", percentage: 85 },
            { name: "Deep Learning", level: "Intermediate", percentage: 80 },
            { name: "CUDA", level: "Intermediate", percentage: 70 }
        ],
        embedded: [
            { name: "STM32", level: "Advanced", percentage: 85 },
            { name: "Arduino", level: "Advanced", percentage: 90 },
            { name: "ESP32", level: "Intermediate", percentage: 80 },
            { name: "UART/I2C/SPI", level: "Advanced", percentage: 85 },
            { name: "PCB Design", level: "Intermediate", percentage: 75 }
        ],
        tools: [
            { name: "SOLIDWORKS", level: "Intermediate", percentage: 80 },
            { name: "Visual Studio", level: "Advanced", percentage: 90 },
            { name: "VS Code", level: "Advanced", percentage: 90 },
            { name: "Git/GitLab", level: "Intermediate", percentage: 80 }
        ]
    },

    // Languages
    languages: [
        { name: "English", level: "Professional" },
        { name: "Chinese", level: "Conversational" },
        { name: "Indonesian", level: "Native" }
    ],

    // Research Interests
    researchInterests: [
        "Robot Automation and Control",
        "Deep Learning and Image Processing",
        "Web Programming",
        "Embedded Systems",
        "Industrial Automation"
    ]
};
