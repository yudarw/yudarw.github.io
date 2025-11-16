// Portfolio Configuration
// Edit this file to customize your portfolio content

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "YUDA RISMA WAHYUDI",
        title: "Robotic Software Engineer | Automated Test Engineer",
        email: "yudarismawahyudi@gmail.com",
        phone: "", // Add your phone number if you want to display it
        location: "Jakarta, Indonesia",
    },

    // Social Links
    social: {
        linkedin: "https://linkedin.com/in/yudarw",
        github: "https://github.com/yudarw",
        twitter: "", // Add your Twitter/X if you have one
        portfolio: "", // Add additional portfolio link if needed
    },

    // Hero Section
    hero: {
        subtitle: "Robotic Software Engineer | Automated Test Engineer",
        description: "7+ years of experience in designing, developing, and implementing cutting-edge robotic systems and embedded software solutions. Passionate about automation, robotics, and innovative technology.",
        yearsExperience: "7+",
        projectsCompleted: "10+",
        technologiesUsed: "15+",
    },

    // About Section
    about: {
        paragraphs: [
            "I am a robotic software engineer with a solid track record of more than 7+ years of experience in designing, developing, and implementing cutting-edge robotic systems and embedded software solutions.",
            "In the past 2 years, I utilized C# to develop libraries and APIs for various testing devices (power meter, spectrum analyzer, signal generator, voltage tester, etc) including handling various communication protocols such as TCP/IP, telnet, SSH, UART, etc, determining request and response format, and integrating APIs with the existing systems. I also designed programs and algorithms for the testing process of various products in the production line.",
            "From 2019-2022, I worked on several projects related to industrial robotic automation. Designed and implemented robotic systems for automated polishing, robot insertion, and automated optical inspection (AOI). Conducted deep research in robot kinematics, control theory, and trajectory planning to design stable and robust control. I also implemented deep learning and computer vision for object recognition.",
            "I have experience with machine learning frameworks like TensorFlow and Keras, CUDA, and robotic programming platforms like ROS and Gazebo. Experienced in controlling several industrial robots and possess expertise in both manual and scripted programming using Python and C++."
        ]
    },

    // Work Experience
    experience: [
        {
            title: "Senior Test Engineer",
            company: "PEGATRON",
            period: "September 2022 - Present",
            responsibilities: [
                "Designed and implemented automated testing, reducing testing cycle time by 20% through code optimization, program structure revision, and enhanced testing algorithms",
                "Created libraries and APIs for several testing devices to enable communications between software and hardware based on C#. Implementing OOP principles and coding standards to produce robust, efficient, and maintainable libraries",
                "Developed several debugging software tools by utilizing .NET and C#, providing a user-friendly interface that empowered production engineers and operators to troubleshoot issues in the production line, resulting in a 30% reduction of downtime",
                "Utilized Git, Github, and Gitlab for version control and code integration",
                "Performed troubleshooting and maintenance of products in production lines, addressed issues, and delivered customer's needs to ensure product quality",
                "Actively contributed to the development of new automated testing technologies. Authored test scripts for various test cases using C# and Python"
            ]
        },
        {
            title: "Research Assistant",
            company: "Assistive Robotics Lab, National Taipei University of Technology",
            period: "August 2021 - August 2022",
            responsibilities: [
                "Conducted research on several projects related to automated industrial systems, designed the research plan and proactively addressed challenges to ensure on-time project completion",
                "Invented a novel robotic teaching method using a haptic device. This innovation significantly reduced robot training time for complex tasks like polishing",
                "Reviewed relevant literature, implemented state-of-art control algorithms (including robot kinematics, robot navigation, control theory, and motion planning), contributed to the invention of new methods and approaches",
                "Developed a real-time robotic automation inspection system (AOI) using deep learning and computer vision algorithms for efficient and robust defect detection on product surfaces",
                "Highly proficient in utilizing ROS and C++ for designing, simulating, and validating robotic control algorithms"
            ]
        },
        {
            title: "Electrical Engineering (Part-time)",
            company: "CV InnoTech Solution",
            period: "January 2013 - July 2016",
            responsibilities: [
                "Assisted in the service and maintenance of electrical systems and equipment, ensuring optimal performance and minimizing downtime",
                "Design PCB and install the electronic components for various robotic projects",
                "Collaborated with senior engineers to troubleshoot and resolve electrical issues, gaining hands-on experience in the field",
                "Conducted testing and quality assurance for electrical systems, ensuring compliance with industry standards and safety regulations"    
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
            title: "NR5G OTA Testing",
            description: "RF testing play an important role in ensuring the performance and reliability of 5G devices. Developed an automated testing system for NR5G Over-the-Air (OTA) testing using C# and .NET framework. The system integrates with various testing equipment such as signal generators, spectrum analyzers, and power meters to perform comprehensive RF tests on 5G devices. The automated system significantly reduces testing time and improves accuracy compared to manual testing methods.",
            tags: ["5G", "OTA", "RF Test"],
            icon: "fa-chart-line",
            image: "../assets/images/pega-5g-products.JPG"
        },
        {
            title: "Diglett - CPK Analysis Tool",
            description: "Created an automated CPK analysis tool that retrieves test data from production database and automatically calculates the CPK of test items in a specific test station. It aims to assist engineers to quickly generate the CPK data to optimize the analysis. It has been used by cross department and factory engineers in Batam, Taipei, and Vietnam factory.",
            tags: ["C#", ".NET", "Database", "Data Analysis"],
            icon: "fa-chart-line",
            image: "../assets//images/Diglett.JPG"
        },
        {
            title: "Spy Terminal",
            description: "Created a customized terminal tool that can support SSH, Telnet, and Serial communication. The advantage of this tool compared to other terminal tools like Teraterm or Putty is the customizable command where users can adjust the related command according to the project. It is mostly used during the debugging process in production line.",
            tags: ["C#", "SSH", "Telnet", "Serial Communication"],
            icon: "fa-terminal",
            image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop"
        },
        {
            title: "Automated Robotic Optical Inspection",
            description: "An automated optical inspection system (AOI) to inspect the surface of metallic objects. This project aims to develop a system that can provide good quality images to detect defects on object surfaces. It utilizes an industrial arm robot DENSO RC8 to pick up objects moving on a conveyor and move them to the inspection area. The AOI system uses a set of high-resolution industrial cameras that can capture 6 sides of object surfaces.",
            tags: ["Computer Vision", "Deep Learning", "ROS", "DENSO Robot"],
            icon: "fa-camera",
            image: "../assets//images/aoi-defect-detection-program.jpg"
        },
        {
            title: "Automated Robotic Polishing",
            description: "Developed a robotic automated polishing system for wooden furniture industries. This automated polishing system is driven by the Fanuc M20iA industrial robot with 25kg of payload to carry the polishing tool and workpieces. The robot is equipped with a mechanical gripper and a force sensor to detect the contact force of the robot with the workpiece. A hybrid position-force control algorithm is proposed as the control system to maintain the contact force of the robot during the polishing process.",
            tags: ["C++", "FANUC Robot", "Force Control", "ROS"],
            icon: "fa-robot",
            image: "../assets//images/robotic-polishing.JPG"
        },
        {
            title: "Indonesia Fire-Fighting Robot Contest",
            description: "Participated in the National Indonesia Fire Fighting Robot Contest 2017 at the Brawijaya University, Indonesia. The mission is to extinguish the fire that is arbitrarily placed in the room. The robot has to navigate through the rooms and corridors to find the fire and extinguish it. Our team achieved finalist position, ranking 5th among 101 teams.",
            tags: ["Arduino", "Robotics", "Kinematics", "PCB Design"],
            icon: "fa-fire-extinguisher",
            image: "../assets//images/firefighting-robot.jpg"
        },
        {
            title: "Hexapod Robot",
            description: "Designed and built a hexapod robot based on STM32 Dev Kit. The project involved 3D modeling using SOLIDWORKS, kinematic algorithm development for 6-legged locomotion, and integration of various sensors and actuators.",
            tags: ["STM32", "Kinematics", "SOLIDWORKS", "Embedded Systems"],
            icon: "fa-bug",
            image: "docs/images/hexapod-robot-design.jpg"
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
        protocols: [
            { name: "TCP/IP", level: "Advanced", percentage: 85 },
            { name: "SSH", level: "Advanced", percentage: 85 },
            { name: "Telnet", level: "Advanced", percentage: 85 },
            { name: "Serial Communication", level: "Advanced", percentage: 90 }
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
