'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  Divider,
  Avatar,
  Paper,
  AppBar,
  Toolbar,
  Container as MuiContainer,
} from '@mui/material';

// --- WORKING MUI ICON IMPORTS ---
import StorageIcon from '@mui/icons-material/Storage';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';

// --- DATA DEFINITIONS ---
export const skillCategories = [
  { title: 'Frontend Architecture', skills: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI', 'Tailwind CSS'] },
  { title: 'Backend & APIs', skills: ['Node.js', 'NestJS', 'Express.js', 'RESTful API Design', 'GraphQL', 'WebSockets', 'Microservices Architecture'] },
  { title: 'Databases & Caching', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Query Optimization', 'Database Indexing'] },
  { title: 'Cloud, DevOps & Testing', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Git', 'Vercel', 'Jest', 'Cypress', 'Agile/Scrum'] },
];

export const workExperience = [
  {
    role: 'Senior Full Stack Developer / Team Lead',
    company: 'Xminds, Technopark',
    period: 'Sep 2018 – Present',
    description: 'Lead a cross-functional team of 5+ developers across 8+ enterprise applications owning sprint planning, architectural design, and delivery end-to-end.',
    achievements: [
      'Boosted Core Web Vitals by 40% and reduced API response latency by 35% through SSR, SSG, caching, and database indexing.',
      'Directed 15+ third-party system and payment gateway integrations including Stripe and Razorpay.',
      'Mentored engineers, improving sprint output efficiency and reducing new hire onboarding time.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Cordova Cloud Solutions',
    period: 'Apr 2016 – Aug 2018',
    description: 'Led development and deployment of hybrid mobile applications using Angular, Node.js, and Apache Cordova alongside RESTful APIs.',
    achievements: [
      'Built scalable RESTful APIs with Express.js and MongoDB to support real-time data sync.',
      'Increased user engagement by 25% through responsive UI updates and performance optimizations.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Achariya Techno Solutions',
    period: 'Jul 2015 – Mar 2016',
    description: 'Built modular, responsive web client interfaces using JavaScript, AngularJS, HTML5, and CSS3.',
    achievements: [
      'Created a reusable UI component library that stabilized frontend build pipelines and lowered maintenance overhead.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Neologic',
    period: 'Aug 2014 – Jun 2015',
    description: 'Contributed full-stack code across frontend views and relational data storage for enterprise client platforms.',
    achievements: [
      'Resolved cross-browser styling issues and optimized UI performance across mobile and desktop devices.',
    ],
  },
];

export const mainEnterpriseProjects = [
  {
    id: 'p1',
    title: 'Pixovo - Learning Management System',
    category: 'Enterprise LMS',
    description: 'Architected scalable education platform featuring multi-tier course management, automated quiz/assignment systems, grading rubrics, and e-commerce payment gateways.',
    tech: ['React.js', 'Node.js', 'NestJS', 'MongoDB', 'Stripe', 'AWS'],
    challenge: 'Handling high-concurrency quiz submission spikes and real-time evaluation processing.',
    solution: 'Implemented asynchronous job queues for evaluations alongside query caching via Redis.',
  },
  {
    id: 'p2',
    title: 'Comeonda - Interactive Gaming & Event Platform',
    category: 'Real-Time Engagement',
    description: 'Engineered real-time engagement engine featuring live quiz modules, event gamification, and sub-second data synchronization for mass audiences.',
    tech: ['React.js', 'Node.js', 'WebSockets', 'Redis', 'MongoDB'],
    challenge: 'Maintaining sub-second state broadcasts across tens of thousands of active concurrent connections.',
    solution: 'Utilized WebSocket clustering backed by Redis Pub/Sub channels for ultra-low latency event fan-out.',
  },
  {
    id: 'p3',
    title: 'Datazoom - Enterprise Business Analytics Dashboard',
    category: 'BI & Analytics',
    description: 'Designed executive BI dashboard with aggregated reporting, multi-dimensional metric visualizations, and data-driven workflow insights.',
    tech: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js'],
    challenge: 'Rendering large multi-variable datasets smoothly without UI thread blocking.',
    solution: 'Implemented virtual scrolling, backend pagination, and indexed aggregation pipelines.',
  },
  {
    id: 'p4',
    title: 'Isentia - Corporate Expense & Workflow System',
    category: 'Enterprise Automation',
    description: 'Built automated expense reconciliation engine managing compliance rules, multi-stage reimbursement workflows, and approval hierarchies.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'REST APIs'],
    challenge: 'Managing complex conditional multi-level approval hierarchies.',
    solution: 'Designed a dynamic finite state machine (FSM) engine storing workflow state transitions safely in MongoDB.',
  },
];

export const personalProjects = [
  {
    id: 'side1',
    title: 'Kayal Vista',
    category: 'Booking & Tourism Platform',
    description: 'Full-stack backwater cruise & houseboat booking platform built with Next.js App Router, custom REST API routes, and MongoDB for real-time room availability.',
    tech: ['Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'Material UI', 'Vercel'],
    githubUrl: 'https://github.com/akhilrameshk/kayal-vista',
    challenge: 'Preventing double-booking risks and dynamic availability state changes during peak tour seasons.',
    solution: 'Designed MongoDB transactional atomic updates paired with Next.js Server Actions for instant updates.',
  },
  {
    id: 'side2',
    title: 'Cricksy Platform',
    category: 'Sports Information Engine',
    description: 'TypeScript-based sports information platform managing full-stack architecture from dynamic MongoDB data schemas to custom analytical UI views.',
    tech: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'TypeScript', 'GraphQL'],
    githubUrl: 'https://github.com/akhilrameshk/Cricksy',
    challenge: 'Streaming real-time score updates without exhausting backend API throughput limits.',
    solution: 'Leveraged MongoDB Change Streams with cached GraphQL and API routes in Next.js.',
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('about');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919633134324?text=Hi%20Akhil,%20I%20reviewed%20your%20portfolio!', '_blank');
  };

  return (
    <Box sx={{ bgcolor: '#0b0f19', color: '#f3f4f6', minHeight: '100vh', pb: 10 }}>
      {/* HEADER NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(11, 15, 25, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <MuiContainer maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                letterSpacing: '-0.02em',
              }}
              onClick={() => scrollToSection('about')}
            >
              AKHIL RAMESH K
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Button
                size="small"
                onClick={() => scrollToSection('about')}
                sx={{ color: activeTab === 'about' ? '#60a5fa' : '#9ca3af', fontWeight: 600, textTransform: 'none' }}
              >
                About
              </Button>
              <Button
                size="small"
                onClick={() => scrollToSection('experience')}
                sx={{ color: activeTab === 'experience' ? '#60a5fa' : '#9ca3af', fontWeight: 600, textTransform: 'none' }}
              >
                Experience
              </Button>
              <Button
                size="small"
                onClick={() => scrollToSection('projects')}
                sx={{ color: activeTab === 'projects' ? '#60a5fa' : '#9ca3af', fontWeight: 600, textTransform: 'none' }}
              >
                Projects
              </Button>
            </Box>
          </Toolbar>
        </MuiContainer>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: 5 }}>
        {/* HERO / ABOUT SECTION */}
        <Box id="about" sx={{ pt: 2, pb: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5, md: 7 },
              borderRadius: '28px',
              background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Chip
                  label="Available for Lead & Architect Roles"
                  sx={{
                    bgcolor: 'rgba(16, 185, 129, 0.1)',
                    color: '#34d399',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    fontWeight: 700,
                    borderRadius: '10px',
                    mb: 2,
                  }}
                  variant="outlined"
                />

                <Typography variant="h2" component="h1" letterSpacing="-0.03em" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', md: '3.2rem' }, mb: 1 }}>
                  Senior Full Stack Developer & Team Lead
                </Typography>

                <Typography variant="body1" sx={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.7, mb: 4, mt: 2 }}>
                  10+ years of experience architecting, building, and scaling web applications. Leading engineering teams of 5+ developers, owning sprint delivery, and driving architectural choices for platforms serving 10,000+ active users.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowDownwardIcon />}
                    onClick={() => scrollToSection('projects')}
                    sx={{
                      borderRadius: '12px',
                      py: 1.5,
                      px: 3.5,
                      fontWeight: 800,
                      textTransform: 'none',
                      fontSize: '1rem',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                    }}
                  >
                    View Projects
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    onClick={openWhatsApp}
                    sx={{
                      borderRadius: '12px',
                      py: 1.5,
                      px: 3,
                      fontWeight: 700,
                      textTransform: 'none',
                      fontSize: '1rem',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#f3f4f6',
                      '&:hover': { borderColor: '#22c55e', bgcolor: 'rgba(34, 197, 94, 0.05)' },
                    }}
                  >
                    WhatsApp Chat
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={5}>
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    bgcolor: 'rgba(17, 24, 39, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: '#2563eb',
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      border: '3px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    AR
                  </Avatar>

                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Akhil Ramesh K</Typography>
                  <Typography variant="caption" color="#9ca3af" display="block" sx={{ mb: 3 }}>
                    Alappuzha, Kerala, India
                  </Typography>

                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 3 }} />

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h5" color="#60a5fa" sx={{ fontWeight: 900 }}>10+</Typography>
                      <Typography variant="caption" color="#9ca3af">Years Exp.</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" color="#34d399" sx={{ fontWeight: 900 }}>40%</Typography>
                      <Typography variant="caption" color="#9ca3af">Core Web Vitals</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" color="#a855f7" sx={{ fontWeight: 900 }}>5+ Devs</Typography>
                      <Typography variant="caption" color="#9ca3af">Team Lead</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" color="#f59e0b" sx={{ fontWeight: 900 }}>35%</Typography>
                      <Typography variant="caption" color="#9ca3af">Latency Cut</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 4 }} />

        {/* WORK EXPERIENCE */}
        <Box id="experience" sx={{ py: 6 }}>
          <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#60a5fa', letterSpacing: 2, fontWeight: 700, display: 'block', mb: 1 }}>
            CAREER TRACK
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 900, mb: 4 }}>
            Professional Work Experience
          </Typography>

          <Grid container spacing={3}>
            {workExperience.map((exp, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    borderRadius: '20px',
                    bgcolor: 'rgba(17, 24, 39, 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" color="#f3f4f6" sx={{ fontWeight: 800 }}>{exp.role}</Typography>
                      <Chip label={exp.period} size="small" variant="outlined" sx={{ color: '#60a5fa', borderColor: 'rgba(96, 165, 250, 0.3)', fontSize: '0.7rem' }} />
                    </Box>
                    <Typography variant="subtitle2" color="#38bdf8" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>{exp.company}</Typography>
                    <Typography variant="body2" color="#9ca3af" sx={{ mb: 2, lineHeight: 1.6 }}>{exp.description}</Typography>

                    <Stack spacing={1}>
                      {exp.achievements.map((ach, i) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                          <Typography variant="caption" color="#34d399" sx={{ fontWeight: 'bold', lineHeight: 1.4 }}>✓</Typography>
                          <Typography variant="caption" color="#d1d5db" sx={{ lineHeight: 1.4 }}>{ach}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 4 }} />

        {/* PROJECTS SECTION */}
        <Box id="projects" sx={{ py: 6 }}>
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <StorageIcon sx={{ color: '#c084fc' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#c084fc', letterSpacing: 2, fontWeight: 700 }}>
                CLIENT & ENTERPRISE DELIVERABLES
              </Typography>
            </Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
              Main Production Projects
            </Typography>

            <Grid container spacing={3} sx={{ mt: 1 }}>
              {mainEnterpriseProjects.map((project) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '20px',
                      bgcolor: 'rgba(17, 24, 39, 0.6)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Chip label={project.category} size="small" sx={{ bgcolor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', fontWeight: 700, mb: 2 }} />
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>{project.title}</Typography>
                      <Typography variant="body2" color="#9ca3af" sx={{ mb: 3, lineHeight: 1.6 }}>{project.description}</Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.tech.map((t) => (
                          <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', color: '#d1d5db', fontSize: '0.72rem' }} />
                        ))}
                      </Box>

                      <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px !important' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#9ca3af' }} />}>
                          <Typography variant="caption" color="#9ca3af" sx={{ fontWeight: 'bold' }}>ARCHITECTURE & SOLUTION</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body2" color="#d1d5db" sx={{ mb: 1 }}><strong>Challenge:</strong> {project.challenge}</Typography>
                          <Typography variant="body2" color="#d1d5db"><strong>Solution:</strong> {project.solution}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <DynamicFeedIcon sx={{ color: '#34d399' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#34d399', letterSpacing: 2, fontWeight: 700 }}>
                INDEPENDENT DEVELOPMENT
              </Typography>
            </Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
              Personal & Side Projects
            </Typography>

            <Grid container spacing={3} sx={{ mt: 1 }}>
              {personalProjects.map((project) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '20px',
                      bgcolor: 'rgba(17, 24, 39, 0.6)',
                      borderColor: 'rgba(52, 211, 153, 0.2)',
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Chip label={project.category} size="small" sx={{ bgcolor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', fontWeight: 700, mb: 2 }} />
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>{project.title}</Typography>
                      <Typography variant="body2" color="#9ca3af" sx={{ mb: 3, lineHeight: 1.6 }}>{project.description}</Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.tech.map((t) => (
                          <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', color: '#d1d5db', fontSize: '0.72rem' }} />
                        ))}
                      </Box>

                      <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px !important', mb: 2 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#9ca3af' }} />}>
                          <Typography variant="caption" color="#9ca3af" sx={{ fontWeight: 'bold' }}>ARCHITECTURE & SOLUTION</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body2" color="#d1d5db" sx={{ mb: 1 }}><strong>Challenge:</strong> {project.challenge}</Typography>
                          <Typography variant="body2" color="#d1d5db"><strong>Solution:</strong> {project.solution}</Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.4)', textTransform: 'none', borderRadius: '8px' }}
                      >
                        Source Code
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 4 }} />

        {/* FOOTER CONTACT SECTION */}
        <Box id="contact" sx={{ py: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: '24px',
              bgcolor: 'rgba(17, 24, 39, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
              Get In Touch
            </Typography>
            <Typography variant="body1" color="#9ca3af" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
              Direct contact channels for full-stack engineering opportunities, technical advisory, or project collaboration.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={openWhatsApp}
                sx={{ borderRadius: '12px', py: 1.5, px: 3, fontWeight: 700, textTransform: 'none', bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' } }}
              >
                WhatsApp (+91 96331 34324)
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:akhilrameshk@gmail.com"
                sx={{ borderRadius: '12px', py: 1.5, px: 3, fontWeight: 700, textTransform: 'none', color: '#f3f4f6', borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                akhilrameshk@gmail.com
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
