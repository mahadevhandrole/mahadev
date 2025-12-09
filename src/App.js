import './App.css';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Rating,
  MobileStepper,
} from "@mui/material";
import {
  Code,
  Palette,
  Phone,
  Mail,
  LocationOn,
  Brightness4,
  Brightness7,
  Close,
  CheckCircle,
  Dashboard,
  TrendingUp,
  Security,
} from "@mui/icons-material";
import SwipeableViews from 'react-swipeable-views';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSlides = [
    {
      icon: <Dashboard sx={{ fontSize: 60, color: '#4dd0e1', mb: 2 }} />,
      title: "Transforming Ideas into Digital Reality",
      desc: "I design and build scalable, secure, and beautiful web applications for modern businesses."
    },
    {
      icon: <TrendingUp sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />,
      title: "Driving Business Growth with Technology",
      desc: "Delivering robust solutions that accelerate your business and empower your teams."
    },
    {
      icon: <Security sx={{ fontSize: 60, color: '#dc004e', mb: 2 }} />,
      title: "Secure, Reliable, and Future-Ready",
      desc: "Expert in full-stack development, cloud, and data security for mission-critical projects."
    }
  ];

  // Auto-advance hero slider every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: darkMode ? "#121212" : "#fafafa",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
    },
  });


  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert(`Message sent! Thank you, ${formData.name}`);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const services = [
    {
      num: "01",
      title: "Full Stack Development",
      desc: "Building complete web applications with React, Node.js, and modern frameworks.",
      icon: Code,
    },
    {
      num: "02",
      title: "Backend Development",
      desc: "Creating robust APIs and database solutions with Java, PHP, and Spring Boot.",
      icon: Code,
    },
    {
      num: "03",
      title: "Frontend Development",
      desc: "Developing responsive UI with React, Angular, HTML5, CSS3, and Bootstrap.",
      icon: Palette,
    },
    {
      num: "04",
      title: "Healthcare Solutions",
      desc: "Specialized development for health management systems with HIPAA compliance.",
      icon: Code,
    },
    {
      num: "05",
      title: "API Integration",
      desc: "Integrating third-party APIs and RESTful services for enhanced functionality.",
      icon: Code,
    },
    {
      num: "06",
      title: "Database Management",
      desc: "Designing and optimizing PostgreSQL and MySQL databases for performance.",
      icon: Code,
    },
  ];

  const education = [
    {
      year: "2017",
      role: "Bachelor of Engineering (CSE)",
      company: "MVJ College of Engineering, Bangalore",
      desc: "60.48% - VTU University",
    },
    {
      year: "2013",
      role: "Diploma in CSE",
      company: "Government Polytechnic College, Aurad",
      desc: "67.88% - Computer Science & Engineering",
    },
    {
      year: "2010",
      role: "SSLC",
      company: "Shree Sangameshwar School, Bhalki",
      desc: "72.32% - Karnataka State Board",
    },
  ];

  const certifications = [
    {
      year: "2017",
      title: "Software Developer Training",
      company: "Jspider Training Center, Bangalore",
      desc: "Comprehensive training in core Java, web development, and software engineering fundamentals",
      icon: "🎓",
    },
  ];
     

  const experience = [
    {
      years: "Present",
      company: "Ant Emerging Technologies, Hyderabad",
      role: "Software Developer",
      desc: "Designing and developing innovative software solutions with focus on performance and reliability.",
    },
    {
      years: "Feb 2021 - Mar 2024",
      company: "Unicorn SoftLabs Pvt Ltd, Hyderabad",
      role: "Software Developer",
      desc: "Developed reliable and cost-effective solutions for commercial and healthcare applications.",
    },
    {
      years: "Earlier",
      company: "Vertical Software, Pune",
      role: "Junior Java Developer",
      desc: "Started career developing Java applications and learning software development fundamentals.",
    },
  ];

  const pricing = [
    {
      name: "Consultation",
      price: "Free",
      features: ["30 min call", "Project Discussion", "Technology Advice", "No Commitment"],
    },
    {
      name: "Development",
      price: "Hourly",
      features: [
        "Full Stack Development",
        "API Integration",
        "Database Design",
        "Code Review",
      ],
    },
    {
      name: "Project",
      price: "Custom",
      features: [
        "End-to-End Solution",
        "Dedicated Support",
        "Testing & QA",
        "Post-Launch Support",
      ],
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "ONC - Tiatech Health Management",
      author: "Laravel, PostgreSQL",
      comments: 12,
      date: "Healthcare Project",
      desc: "HIPAA-compliant health management system with patient records, appointments, and medical history tracking.",
      responsibilities: [
        "Develops the core logic that powers the application. This includes managing data requests, performing calculations, processing authentication, and ensuring proper business rules are followed.",
        "Works with databases to store patient records, medical histories, appointment schedules, etc. Ensures the data is structured efficiently and securely.",
        "Uses relational databases (PostgreSQL)",
        "Builds and maintains APIs (Application Programming Interfaces) that connect the frontend to the backend.",
        "Implements RESTful APIs to retrieve, update, and manipulate data, like patient information, test results, and appointment schedules.",
        "Ensures that sensitive patient data is encrypted and stored in compliance with healthcare regulations such as HIPAA (Health Insurance Portability and Accountability Act).",
        "Implements security protocols such as encryption, authorization, and authentication (e.g., OAuth, JWT tokens) to ensure data privacy.",
        "Implements rules and processes specific to healthcare, such as calculating patient BMI, generating reports, tracking medication, and handling complex patient workflows.",
        "Optimizes backend services to handle a large volume of concurrent users and requests.",
        "Works on load balancing, server scaling, and high-availability architecture to ensure system growth.",
        "Integrates with external systems and healthcare technologies, like electronic health records (EHR) and medical devices.",
        "Ensures backend code is thoroughly tested with unit tests, integration tests, and load tests."
      ]
    },
    {
      id: 2,
      title: "Quilt Care - Health Management",
      author: "ReactJS, NodeJS, MySQL",
      comments: 10,
      date: "Full Stack Project",
      desc: "Multi-role appointment booking system with video consultations, WebSocket chat, and PDF processing.",
      responsibilities: [
        "Patient can book appointments in the patient module.",
        "Peers can see list of all appointments whether it's a video call or in-person appointment.",
        "Multiple role-based application developed with different user permissions.",
        "Frontend developed using ReactJS technology",
        "Backend developed using NodeJS technology",
        "End-to-end development process involved as a team member",
        "API developed for PDF processing and storing data into the database.",
        "WebSocket used for chat module to establish two-way communication.",
        "Third-party APIs integrated including TASSO Integration",
        "Stripe Payment Gateway Integration",
        "Testing the application for all levels"
      ]
    },
    {
      id: 3,
      title: "HR Management System",
      author: "Spring Boot, Angular, MySQL",
      comments: 8,
      date: "Enterprise Project",
      desc: "Student and client management portal with call tracking, status monitoring, and business analytics.",
      responsibilities: [
        "Developing a web-based application based on Human Resource management (HRM) using Spring Boot and Angular.",
        "Added student module and client module for comprehensive management.",
        "Student portal for student registration, contact tracking, lead management, and cancellations.",
        "Student call tracking and message management with status visibility.",
        "Client portal for business clients with client forms, call logs, and status tracking.",
        "Business call and message tracking with status monitoring.",
        "HR can easily track all student calls and business calls through this application.",
        "Testing the application for all levels including functional, UI, and UX testing."
      ]
    },
    {
      id: 4,
      title: "School Management System",
      author: "Java, JSP, Servlet, MySQL",
      comments: 7,
      date: "Educational Project",
      desc: "Tree hierarchy-based school management with registration, sections, and student portals.",
      responsibilities: [
        "Developing a web-based application based on school management using JSP and Servlet.",
        "Developed tree hierarchy which includes school registration in same organization.",
        "Added school module and division module for organizational structure.",
        "Implemented sections portal and student portal within school modules.",
        "Designed the database for this project",
        "Maintains all school details in same organization",
        "Testing the application for all levels including functional, UI, and UX testing."
      ]
    },
    {
      id: 5,
      title: "COVID-19 Vaccine Management",
      author: "Laravel, JavaScript, MySQL",
      comments: 6,
      date: "Healthcare Project",
      desc: "Vaccine drive management with doctor modules, video consultations, and slot management.",
      responsibilities: [
        "Developing a web-based application for COVID-19 vaccine management for organization employees.",
        "Developed tree hierarchy including doctor module, vaccine drive, and video consultation.",
        "Added vaccine drive module with available slots and vaccine drive dates.",
        "Integrated Google Meet with doctor and employees for video consultation.",
        "Maintains all COVID-19 vaccine drive details in same organization.",
        "Testing the application for all levels including functional, UI, and UX testing."
      ]
    },
    {
      id: 6,
      title: "Builder Mart E-commerce",
      author: "Laravel, JavaScript, MySQL",
      comments: 9,
      date: "E-commerce Project",
      desc: "Building materials marketplace with store management, customer orders, and admin controls.",
      responsibilities: [
        "Developing a web-based application for online building materials e-commerce.",
        "Developed tree hierarchy including store module, customer module, and admin module.",
        "Store module allows stores to create and sell products in Builder Mart app.",
        "Customer module allows customers to raise orders from nearby stores.",
        "Admin module maintains background work including materials, payments, and orders.",
        "Maintains the complete Builder Mart e-commerce application.",
        "Testing the application for all levels including functional, UI, and UX testing."
      ]
    },
    {
      id: 7,
      title: "Visitor Pass Management",
      author: "Laravel, JavaScript, MySQL",
      comments: 5,
      date: "Access Control Project",
      desc: "QR-based visitor tracking system with attendance, facility management, and data export.",
      responsibilities: [
        "Developing a web-based visitor pass management application for attendees.",
        "Developed admin module to easily track attendees facility, attendance, gifts, and foods.",
        "Added QR scanning module for representatives to scan attendee QR codes.",
        "Generates visitor cards for all attendees along with QR codes.",
        "Admin module enables export of attendee and facility data in Excel format.",
        "Maintains all visitor details in a single application.",
        "Testing the application for all levels including functional, UI, and UX testing."
      ]
    },
    {
      id: 8,
      title: "Referral Management System",
      author: "React, Firebase, TapAffiliate",
      comments: 4,
      date: "SaaS Project",
      desc: "Referral program platform with affiliate tracking, code generation, and Firebase deployment.",
      responsibilities: [
        "Developing a web-based referral program management application.",
        "Developed page application for customer registration flow.",
        "Integrated third-party TapAffiliate module for referral tracking.",
        "Track click count for each referral through TapAffiliate module.",
        "TapAffiliate API integration for affiliate management.",
        "Send referral links with referral codes to customers.",
        "Deployed application in Firebase.",
        "Testing the application for all levels including functional, UI, and UX testing."
      ]
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        {/* NAVBAR */}
        <AppBar position="fixed" sx={{ zIndex: 50 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              Mahadev
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button color="inherit" onClick={() => scrollTo("hero")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => scrollTo("services")}>
                Skills
              </Button>
              <Button color="inherit" onClick={() => scrollTo("education")}>
                Education
              </Button>
              <Button color="inherit" onClick={() => scrollTo("experience")}>
                Experience
              </Button>
              <Button color="inherit" onClick={() => scrollTo("projects")}>
                Projects
              </Button>
               <Button color="inherit" onClick={() => scrollTo("testimonials")}>
                Testimonials
              </Button>
              <Button color="inherit" onClick={() => scrollTo("contact")}>
                Contact
              </Button>
            </Box>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
              sx={{ ml: 2 }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* HERO SECTION - Professional Slider */}
        <Box
          id="hero"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
              : "linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #2E5C8A 100%)",
            pt: 8,
            pb: 4,
          }}
        >
          <Container maxWidth="md">
            <SwipeableViews
              index={heroIndex}
              onChangeIndex={setHeroIndex}
              enableMouseEvents
              style={{ borderRadius: 16 }}
            >
              {heroSlides.map((slide, idx) => (
                <Box
                  key={idx}
                  sx={{
                    minHeight: { xs: 400, md: 500 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    px: { xs: 2, md: 8 },
                    py: 6,
                  }}
                >
                  {slide.icon}
                  <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 4, textAlign: "center", opacity: 0.9 }}>
                    {slide.desc}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => scrollTo("contact")}
                    >
                      Get in Touch
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ color: "white", borderColor: "white" }}
                      onClick={() => scrollTo("projects")}
                    >
                      View My Work
                    </Button>
                  </Box>
                </Box>
              ))}
            </SwipeableViews>
            <MobileStepper
              steps={heroSlides.length}
              position="static"
              activeStep={heroIndex}
              nextButton={null}
              backButton={null}
              sx={{
                background: "transparent",
                justifyContent: "center",
                mt: 2,
                ".MuiMobileStepper-dot": {
                  backgroundColor: "#fff",
                  opacity: 0.5,
                },
                ".MuiMobileStepper-dotActive": {
                  backgroundColor: "#4dd0e1",
                  opacity: 1,
                },
              }}
            />
          </Container>
        </Box>

        {/* SERVICES SECTION */}
        <Box
          id="services"
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ py: 8 }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
              Technical Skills & Expertise
            </Typography>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                          <service.icon sx={{ mr: 1, color: "primary.main" }} />
                          <Typography variant="h6" sx={{ mb: 0 }}>
                            {service.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                          {service.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <Box
          id="education"
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ py: 8, bgcolor: theme.palette.mode === "dark" ? "#1a1a1a" : "#f5f5f5" }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
              Education  & Certifications
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Education
                </Typography>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Paper sx={{ p: 3, mb: 2 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="h6">{edu.role}</Typography>
                        <Chip label={edu.year} size="small" />
                      </Box>
                      <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                        {edu.company}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {edu.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Professional Training
                </Typography>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Paper 
                      sx={{ 
                        p: 3, 
                        mb: 2,
                        background: theme.palette.mode === "dark" 
                          ? "linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%)"
                          : "linear-gradient(135deg, #f0f4ff 0%, #e8f4f8 100%)",
                        borderLeft: "4px solid",
                        borderColor: "primary.main",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 1 }}>
                        <Typography variant="h5">{cert.icon}</Typography>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="h6">{cert.title}</Typography>
                            <Chip label={cert.year} size="small" color="primary" variant="outlined" />
                          </Box>
                        </Box>
                      </Box>
                      <Typography variant="subtitle2" color="primary" sx={{ mb: 1, fontWeight: "bold" }}>
                        {cert.company}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {cert.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* WORK EXPERIENCE SECTION */}
        <Box
          id="experience"
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ py: 8 }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
              Work Experience
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Paper sx={{ p: 3, mb: 2 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="h6">{exp.role}</Typography>
                        <Chip label={exp.years} size="small" color="primary" />
                      </Box>
                      <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {exp.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* PRICING SECTION */}
        <Box id="pricing" sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
              Pricing Plans
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {pricing.map((plan, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        border: index === 1 ? "2px solid" : "1px solid",
                        borderColor: index === 1 ? "primary.main" : "divider",
                        transform: index === 1 ? "scale(1.05)" : "scale(1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: 4,
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                          {plan.name}
                        </Typography>
                        <Typography variant="h3" color="primary" sx={{ mb: 3 }}>
                          ${plan.price}
                          <Typography variant="body2" component="span" color="textSecondary">
                            /month
                          </Typography>
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                          {plan.features.map((feature, i) => (
                            <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                              ✓ {feature}
                            </Typography>
                          ))}
                        </Box>
                        <Button
                          variant={index === 1 ? "contained" : "outlined"}
                          fullWidth
                          color="primary"
                        >
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* projects SECTION - Projects */}
        <Box
          id="projects"
          sx={{
            py: 8,
            bgcolor: theme.palette.mode === "dark" ? "#1a1a1a" : "#f5f5f5",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
              Recent Projects
            </Typography>
            <Grid container spacing={3}>
              {blogs.map((blog, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={blog.id}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        border: "1px solid",
                        borderColor: theme.palette.mode === "dark" ? "#333" : "#e0e0e0",
                        "&:hover": {
                          transform: "translateY(-12px)",
                          boxShadow: 6,
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 2 }}>
                          <Code sx={{ color: "primary.main", mt: 0.5 }} />
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ mb: 0.5, fontWeight: "bold" }}>
                              {blog.title}
                            </Typography>
                            <Chip 
                              label={blog.date} 
                              size="small" 
                              variant="outlined"
                              sx={{ mb: 1 }}
                            />
                          </Box>
                        </Box>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                          {blog.desc}
                        </Typography>
                        <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: "bold", color: "primary.main" }}>
                          Tech Stack: {blog.author}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, pt: 2, borderTop: "1px solid", borderColor: "divider" }}>
                          <Chip 
                            label={`${blog.comments} Key Points`} 
                            size="small" 
                            icon={Code}
                            variant="outlined"
                          />
                          <Button size="small" color="primary" onClick={() => handleOpenDialog(blog)}>
                            View Details →
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

          {/* TESTIMONIALS SECTION */}
          <Box
            id="testimonials"
            sx={{
              py: 8,
              background: theme.palette.mode === "dark"
                ? "linear-gradient(135deg, #232526 0%, #414345 100%)"
                : "linear-gradient(135deg, #f8fafc 0%, #e0eafc 100%)",
              color: theme.palette.mode === "dark" ? "white" : "#222",
            }}
          >
            <Container maxWidth="md">
              <Typography variant="h4" sx={{ mb: 6, textAlign: "center" }}>
                Testimonials
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {[{
                  name: "Amit Sharma",
                  title: "Senior Software Engineer, Infosys",
                  quote: "Mahadev is a highly skilled developer with a keen eye for detail. His work on our enterprise app was outstanding and delivered ahead of schedule.",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                  rating: 5
                }, {
                  name: "Priya Desai",
                  title: "Project Manager, TCS",
                  quote: "Professional, reliable, and innovative. Mahadev's solutions helped us streamline our workflow and improve project outcomes.",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                  rating: 5
                }, {
                  name: "Rahul Verma",
                  title: "Tech Lead, Cognizant",
                  quote: "Excellent communication and technical expertise. Mahadev consistently exceeds expectations and is a pleasure to work with.",
                  avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                  rating: 4.5
                }].map((t, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", bgcolor: theme.palette.mode === "dark" ? "#232526" : "#fff" }}>
                      <Avatar src={t.avatar} alt={t.name} sx={{ width: 64, height: 64, mb: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5, textAlign: "center" }}>{t.name}</Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 2, textAlign: "center" }}>{t.title}</Typography>
                      <Rating value={t.rating} precision={0.5} readOnly sx={{ mb: 2 }} />
                      <Typography variant="body1" sx={{ fontStyle: "italic", textAlign: "center" }}>
                        "{t.quote}"
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        {/* CONTACT SECTION */}
        <Box
          id="contact"
          sx={{
            py: 8,
            background: theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
              : "linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #2E5C8A 100%)",
            color: "white",
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
              Get in Touch
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.7)",
                    opacity: 1,
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& label": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.7)",
                    opacity: 1,
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& label": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.7)",
                    opacity: 1,
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& label": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              />
              <Button variant="contained" color="secondary" type="submit" size="large">
                Send Message
              </Button>
            </Box>

            {/* FOOTER */}
            <Box sx={{ mt: 8, textAlign: "center", borderTop: "1px solid rgba(255, 255, 255, 0.2)", pt: 4 }}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
                <IconButton color="inherit" href="mailto:mahadevbh@zohomail.in" title="Email">
                  <Mail />
                </IconButton>
                {/* <IconButton color="inherit" href="tel:+919740352230" title="Phone">
                  <Phone />
                </IconButton> */}
                <IconButton color="inherit" href="#" title="Location">
                  <LocationOn />
                </IconButton>
              </Box>
              {/* <Typography variant="body2" sx={{ mb: 1 }}>
                📱 +91 9740352230
              </Typography> */}
              <Typography variant="body2" sx={{ mb: 2 }}>
                📧 mahadevbh@zohomail.in
              </Typography>
              <Typography variant="body2">
                © 2025 Mahadev. All rights reserved. | Hyderabad, India
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* PROJECT DETAILS DIALOG */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              backgroundImage: theme.palette.mode === "dark"
                ? "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)"
                : "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)"
            }
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 1 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    {selectedProject.title}
                  </Typography>
                  <Chip 
                    label={selectedProject.date} 
                    size="small" 
                    color="primary"
                    variant="outlined"
                  />
                </Box>
                <IconButton 
                  onClick={handleCloseDialog} 
                  sx={{ ml: 1 }}
                  size="small"
                >
                  <Close />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers sx={{ py: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, color: "primary.main" }}>
                    TECH STACK
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {selectedProject.author}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}>
                    PROJECT DESCRIPTION
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {selectedProject.desc}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}>
                    KEY RESPONSIBILITIES
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {selectedProject.responsibilities.map((responsibility, index) => (
                      <ListItem key={index} sx={{ py: 1, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle sx={{ color: "primary.main", fontSize: "1.2rem" }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={responsibility}
                          primaryTypographyProps={{
                            variant: "body2",
                            sx: { lineHeight: 1.6 }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 2 }}>
                <Button onClick={handleCloseDialog} variant="contained" fullWidth>
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default App;
