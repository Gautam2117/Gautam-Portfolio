// src/data/projects.js
const projects = [
  {
    title: "Actifi - All-in-One Social App",
    description: "An all-in-one social platform with Q&A, games, travel tracker, MyTV animations, and earning via short videos.",
    tech: ["Flutter", "Firebase", "Node.js"],
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.officialapp.magnet&pli=1",
  },
  {
    title: "Botify – AI Chatbot SaaS Platform",
    description: "A full-featured AI-powered chatbot SaaS platform tailored for small businesses. Botify offers real-time conversation streaming, token-based usage tracking, Razorpay integration for billing, and an intuitive dashboard for customer interaction management.",
    tech: ["React", "Firebase", "DeepSeek", "Razorpay", "Vite", "Tailwind CSS"],
    github: "https://github.com/Gautam2117/AI-Chatbot-SAAS", // Replace with actual repo link if public
    demo: "https://ai-chatbot-saas-eight.vercel.app",
  },
  {
    title: "Collaborative Code Editor",
    description: "A real-time code collaboration platform supporting simultaneous editing, room-based access, and persistent code storage. Built for pair programming using React, Spring Boot, WebSockets, and MongoDB.",
    tech: ["React", "Spring Boot", "WebSockets", "MongoDB", "CodeMirror", "Java"],
    github: "https://github.com/Gautam2117/Collaborative-Code-Editor",
    demo: "", // Add live link if deployed
  },
  {
    title: "CloudVault – Secure File Storage & Sharing Platform",
    description: "A Django-based cloud storage platform with secure OTP-based authentication, password-protected vaults, file/folder sharing, and a modern dashboard UI. Designed as a private, secure alternative to Google Drive.",
    tech: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gautam2117/CloudVault-Django-Based-Secure-File-Storage-and-Sharing-Platform",
    demo: "", // Add hosted link or walkthrough video if available
  },
  {
    title: "SmartCart AI – Realtime Product Recommender",
    description: "A modern e-commerce frontend built with React and Vite for SmartCart AI, featuring real-time product recommendations, responsive UI, and enhanced performance. Designed to deliver a personalized shopping experience.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Gautam2117/smartcart-ai-frontend",
    demo: "https://smartcart-beige.vercel.app",
  },  
  {
    title: "globeTalk - Language Learning & Cultural Exchange",
    description: "Connect, learn, and explore languages through AI-powered chat, global video calls, cultural festivals, and interactive courses.",
    tech: ["Flutter", "Dart", "Firebase", "AI", "WebRTC"],
    github: "https://github.com/Gautam2117/globeTalk",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "Bank Management System",
    description: "A basic online banking system built with PHP and HTML, allowing user registration, fund transfers, transaction history viewing, and account management.",
    tech: ["PHP", "HTML"],
    github: "https://github.com/Gautam2117/Bank-Management-System",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "MRI-Based Neurological Disorder Detection",
    description: "A machine learning-powered diagnostic system for early detection of Alzheimer’s and Parkinson’s diseases using EEG data. Combines InceptionV3-LSTM for Alzheimer's and KNN for Parkinson’s, with a Django frontend for clinical usability.",
    tech: ["Python", "InceptionV3", "LSTM", "KNN", "Django", "EEG", "Machine Learning"],
    github: "https://github.com/Gautam2117/MRI-Neurological-Disorder-Detection", // Private repo
    demo: "", // Add demo video or deployment link if available
  },  
  {
    title: "Hotel Booking Management System (MEAN Stack)",
    description: "A complete hotel booking application where users can search and book hotels, and admins can manage listings and users, built with the MEAN stack.",
    tech: ["MongoDB", "Express.js", "AngularJS", "Node.js"],
    github: "https://github.com/Gautam2117/Hotel-Booking-Management-MEAN-Stack",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "Travel Booking App with Chatting (MERN Stack)",
    description: "A production-ready travel booking application with multi-user real-time chatting, built using MERN stack, Next.js, Socket.io, and Redux.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "Socket.io", "Redux"],
    github: "https://github.com/Gautam2117/Travel-Booking-with-Chatting-MERN-Stack",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "School Management System",
    description: "A cross-platform school management app built with Flutter, supporting student data, uploads, and admin features for streamlined educational administration.",
    tech: ["Flutter", "Dart", "Node.js"],
    github: "https://github.com/Gautam2117/School-Management-System",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "Hand Gesture Recognition System",
    description: "A real-time gesture recognition pipeline using EfficientNetV2, Swin Transformer, and LSTM. Features YOLOv8 for detection, OpenCV for video capture, and FastAPI + Docker for containerized serving over a 119GB dataset spanning 34 gesture categories.",
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLOv8", "FastAPI", "Docker"],
    github: "", // Add GitHub repo link when available
    demo: "", // Add demo or video link if applicable
  },  
  {
    title: "Scalable Movie Recommendation System (Big Data)",
    description: "A scalable movie recommender system built with Apache Spark using the MovieLens dataset, implementing collaborative filtering, popularity models, and evaluation with RMSE and NDCG.",
    tech: ["Apache Spark", "Google Colab", "Python", "Big Data", "Jupyter Notebook"],
    github: "https://github.com/Gautam2117/Recommendation-System-BigData",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "Netflix Data Visualization Dashboard (Power BI)",
    description: "An interactive Power BI dashboard visualizing Netflix content using combined datasets from Kaggle and IMDb, highlighting content trends and top-rated shows.",
    tech: ["Power BI", "Python", "Jupyter Notebook", "Data Visualization"],
    github: "https://github.com/Gautam2117/Netflix-Data-Visualization-using-PowerBI",
    demo: "", // Add deployed demo or public dashboard link if available
  },
  {
    title: "Fitness App",
    description: "A Flutter-based fitness application featuring structured workout routines, personalized diet plans, and a sleek UI/UX design for an enhanced user experience.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/Gautam2117/Fitness-app",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "NFT Marketplace (Flutter + Solidity)",
    description: "A cross-platform NFT marketplace application built using Flutter and Solidity, implementing Ethereum smart contracts with ERC-5643 standards.",
    tech: ["Flutter", "Dart", "Solidity", "Ethereum"],
    github: "https://github.com/Gautam2117/NFT-Marketplace",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "Django E-Commerce Website",
    description: "A full-featured e-commerce and blog web application built with Django, featuring user authentication, Stripe payment integration, and deployment on Heroku with AWS S3 for static files.",
    tech: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite", "PostgreSQL", "Stripe", "Heroku", "AWS S3"],
    github: "https://github.com/Gautam2117/Django-ECommerce-site",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "Library Management System (Django)",
    description: "A web-based library management system allowing admins to manage books and student profiles, issue/return books, and let students view available and issued books.",
    tech: ["Django", "Python", "Bootstrap", "HTML", "SQLite"],
    github: "https://github.com/Gautam2117/library-management-system-using-Python-Django",
    demo: "", // Add deployed demo link if available
  },
  {
    title: "Online Music Streaming App",
    description: "A music streaming Android app that plays songs from REST API URLs using the Volley library. Features include music search, download, share, and playback—all without external media libraries.",
    tech: ["Java", "Android", "Volley", "REST API"],
    github: "https://github.com/Gautam2117/Online-Music-Streaming-App",
    demo: "", // Add APK or demo link if available
  },
  {
    title: "Photo Editing App",
    description: "An Android photo editing app built with Java and XML, featuring splash screens, permission handling, image loading, and custom filter application functionalities.",
    tech: ["Java", "XML", "Android Studio"],
    github: "https://github.com/Gautam2117/Photo-editing-app",
    demo: "", // Add APK or demo link if available
  },
  {
    title: "Travel Agency Management System",
    description: "A console-based travel agency management application developed in C++ for handling bookings, customer details, and itinerary records.",
    tech: ["C++"],
    github: "https://github.com/Gautam2117/Travel-Agency-Management-System",
    demo: "", // Add executable or video demo link if available
  },
  {
    title: "SafeSignal - Disaster Reporting & Hotspot Detection",
    description: "A real-time disaster reporting and hotspot detection app that crowdsources incident data like floods and road blockages, enabling authorities to visualize and prioritize critical regions effectively.",
    tech: ["Flutter", "Dart", "Firebase", "Map Integration"],
    github: "https://github.com/Gautam2117/SafeSignal",
    demo: "", // Add deployed app link or demo video if available
  },
  {
    title: "FundMe - Crowdfunding Platform",
    description: "A full-stack crowdfunding web application enabling users to launch campaigns, accept secure donations via Stripe, and reward contributors. Features include authentication, campaign analytics, commenting, and admin tools.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Stripe API"],
    github: "https://github.com/Gautam2117/crowdfunding-platform",
    demo: "", // Add deployed app or live preview link if available
  },
  {
    title: "Health Tracker App",
    description: "An Android app developed in Java that connects to wearable devices via Bluetooth to monitor real-time health metrics such as heart rate, step count, and sleep quality. Designed with an intuitive UI and battery-efficient communication.",
    tech: ["Java", "Android", "Bluetooth LE"],
    github: "https://github.com/Gautam2117/Health-Tracker-App",
    demo: "", // Add APK or demo video link if available
  },
  {
    title: "Skill Path - AI Career & Learning Platform",
    description: "A Flutter-based mobile app that offers AI-powered skill assessments, personalized learning resources, and job recommendations. Built with Firebase integration for a secure and real-time user experience.",
    tech: ["Flutter", "Dart", "Firebase", "AI"],
    github: "https://github.com/Gautam2117/Skill-Path",
    demo: "", // Add deployed app or demo video link if available
  },
  {
    title: "Multilingual FAQs API (Django)",
    description: "A Django REST API for managing FAQs with multilingual support, WYSIWYG editor integration (ckeditor), Redis caching, and Google Translate API for auto-translation. Supports queries by language and is Docker-ready.",
    tech: ["Django", "Python", "REST API", "Redis", "Google Translate API", "Docker"],
    github: "https://github.com/Gautam2117/faqs-backend-Submission",
    demo: "", // Add deployed API or documentation link if available
  },
  {
    title: "Tableau Dashboards - Sales & Game Analytics",
    description: "A collection of interactive Tableau dashboards including Supermarket Sales Performance and Video Game Analytics, focusing on actionable business insights and visual storytelling.",
    tech: ["Tableau", "Data Visualization", "Analytics"],
    github: "https://github.com/Gautam2117/My-Tableau-Projects",
    demo: "", // Add Tableau Public links if available
  },
  {
    title: "Rainfall Prediction Classifier",
    description: "A machine learning project using weather data to predict the likelihood of rainfall. Built in Jupyter Notebook with data preprocessing, exploratory analysis, and classification model training for weather forecasting.",
    tech: ["Python", "Jupyter Notebook", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/Gautam2117/Final-Project-Building-a-Rainfall-Prediction-Classifier",
    demo: "", // Add a hosted notebook or demo link if available
  },
  {
    title: "Botify Website – AI Chatbot Landing Page",
    description: "A modern and responsive landing page for Botify, built with React, Tailwind CSS, and Vite. Features include dark mode, SEO optimization, and fast-loading UI to promote the Botify AI chatbot SaaS product.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/Gautam2117/AI-CHATBOT-WEBSITE",
    demo: "https://botify-website.vercel.app",
  },
  {
    title: "React Admin Dashboard",
    description: "A feature-rich admin dashboard built with React and Syncfusion, offering theming, charts, Kanban board, calendar, dynamic tables, and responsive UI.",
    tech: ["React", "Tailwind CSS", "Syncfusion", "React Router", "Context API"],
    github: "https://github.com/Gautam2117/react_admin_dashboard",
    demo: "", // Add live preview or hosted link if available
  },
  {
    title: "Spotify 2.0 Clone – Music Streaming App",
    description: "A fully functional Spotify clone built with React and Tailwind CSS featuring real-time music search, genre browsing, playlist management, full-screen player, queue system, and modern responsive UI using Shazam Core API.",
    tech: ["React", "Tailwind CSS", "Vite", "RapidAPI", "Context API"],
    github: "https://github.com/Gautam2117/Spotify-2.0-clone-react",
    demo: "", // Add deployed link if hosted
  },
  {
    title: "Blood Group Detection Using Fingerprint",
    description: "A deep learning system to detect human blood groups from fingerprint images using CNNs and real-time image processing. Designed for fast and accurate classification with OpenCV and Python.",
    tech: ["Python", "OpenCV", "CNN", "Deep Learning"],
    github: "", // Add GitHub repo link when available
    demo: "", // Add demo or video link if applicable
  },
  {
    title: "Life Expectancy Prediction Using Linear Regression",
    description: "Built a regression model to predict life expectancy based on socio-economic and health factors. Achieved 85% confidence by applying feature engineering, statistical analysis, and visual exploration using Seaborn and Pandas.",
    tech: ["Python", "Pandas", "Seaborn", "Scikit-Learn", "Matplotlib"],
    github: "", // Add GitHub repo link when available
    demo: "", // Add notebook viewer or demo link if applicable
  },

];

export default projects;
