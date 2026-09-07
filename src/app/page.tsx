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

// --- INLINE SVG ICONS (Zero external dependencies needed!) ---
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const WorkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const StorageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
  </svg>
);

const TerminalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

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
      
      {/* HEADER NAVBAR WITH WHATSAPP & CONTACT TABS */}
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
              fontWeight="900"
              sx={{
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

            <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems="center">
              <Button size="small" onClick={() => scrollToSection('about')} sx={{ color: activeTab === 'about' ? '#60a5fa' : '#9ca3af', fontWeight: 600, textTransform: 'none' }}>
                About
              </Button>

              <Button size="small" onClick={() => scrollToSection('experience')} sx={{ color: activeTab === 'experience' ? '#60a5fa' : '#9ca3af', fontWeight: 600, textTransform: 'none' }}>
                Experience
              </Button>

              <Button size="small" onClick={() => scrollToSection('projects')} sx={{ color: activeTab === 'projects' ? '#60a5fa' : '#9ca3af', fontWeight: 600, textTransform: 'none' }}>
                Projects
              </Button>

              <Button size="small" onClick={() => scrollToSection('contact')} sx={{ color: activeTab === 'contact' ? '#60a5fa' : '#9ca3af', fontWeight: 600, textTransform: 'none' }}>
                Contact
              </Button>

              <Button
                variant="contained"
                size="small"
                color="success"
                startIcon={<WhatsAppIcon />}
                onClick={openWhatsApp}
                sx={{
                  borderRadius: '20px',
                  fontWeight: 700,
                  textTransform: 'none',
                  px: 2,
                  bgcolor: '#22c55e',
                  '&:hover': { bgcolor: '#16a34a' },
                }}
              >
                WhatsApp
              </Button>
            </Stack>
          </Toolbar>
        </MuiContainer>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: 5 }}>
        
        {/* HERO / ABOUT ME SECTION */}
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

                <Typography variant="h2" component="h1" fontWeight="900" letterSpacing="-0.03em" sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, mb: 1 }}>
                  Senior Full Stack Developer & Team Lead
                </Typography>

                <Typography variant="body1" sx={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.7, mb: 4, mt: 2 }}>
                  10+ years of experience architecting, building, and scaling web applications. Leading engineering teams of 5+ developers, owning sprint delivery, and driving architectural choices for platforms serving 10,000+ active users[span_0](start_span)[span_0](end_span).
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowDownIcon />}
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
                </Stack>
              </Grid>

              {/* CARD & BADGES */}
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
                      fontWeight: '900',
                      border: '3px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    AR
                  </Avatar>

                  <Typography variant="h6" fontWeight="800">Akhil Ramesh K</Typography>
                  <Typography variant="caption" color="#9ca3af" display="block" sx={{ mb: 3 }}>
                    Alappuzha, Kerala, India
                  </Typography>

                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 3 }} />

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h5" fontWeight="900" color="#60a5fa">10+</Typography>
                      <Typography variant="caption" color="#9ca3af">Years Exp.</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" fontWeight="900" color="#34d399">40%</Typography>
                      <Typography variant="caption" color="#9ca3af">Core Web Vitals</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" fontWeight="900" color="#a855f7">5+ Devs</Typography>
                      <Typography variant="caption" color="#9ca3af">Team Lead</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" fontWeight="900" color="#f59e0b">35%</Typography>
                      <Typography variant="caption" color="#9ca3af">Latency Cut</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

            </Grid>
          </Paper>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 4 }} />

        {/* EXPERIENCE SECTION */}
        <Box id="experience" sx={{ py: 6 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <WorkIcon />
            <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#60a5fa', letterSpacing: 2, fontWeight: 700 }}>
              CAREER TRACK
            </Typography>
          </Stack>
          <Typography variant="h4" fontWeight="900" gutterBottom sx={{ mb: 4 }}>
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
                      <Typography variant="h6" fontWeight="800" color="#f3f4f6">{exp.role}</Typography>
                      <Chip label={exp.period} size="small" variant="outlined" sx={{ color: '#60a5fa', borderColor: 'rgba(96, 165, 250, 0.3)', fontSize: '0.7rem' }} />
                    </Box>
                    <Typography variant="subtitle2" color="#38bdf8" fontWeight="700" gutterBottom sx={{ mb: 2 }}>{exp.company}</Typography>
                    <Typography variant="body2" color="#9ca3af" sx={{ mb: 2, lineHeight: 1.6 }}>{exp.description}</Typography>

                    <Stack spacing={1}>
                      {exp.achievements.map((ach, i) => (
                        <Stack direction="row" spacing={1} alignItems="flex-start" key={i}>
                          <CheckIcon />
                          <Typography variant="caption" color="#d1d5db" sx={{ lineHeight: 1.4 }}>{ach}</Typography>
                        </Stack>
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
          
          {/* MAIN / ENTERPRISE PROJECTS */}
          <Box sx={{ mb: 6 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <StorageIcon />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#c084fc', letterSpacing: 2, fontWeight: 700 }}>
                CLIENT & ENTERPRISE DELIVERABLES
              </Typography>
            </Stack>
            <Typography variant="h4" fontWeight="900" gutterBottom>
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
                      <Typography variant="h5" fontWeight="800" gutterBottom>{project.title}</Typography>
                      <Typography variant="body2" color="#9ca3af" sx={{ mb: 3, lineHeight: 1.6 }}>{project.description}</Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                        {project.tech.map((t) => (
                          <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', color: '#d1d5db', fontSize: '0.72rem' }} />
                        ))}
                      </Stack>

                      <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px !important' }}>
                        <AccordionSummary expandIcon={<ChevronDownIcon />}>
                          <Typography variant="caption" fontWeight="bold" color="#9ca3af">ARCHITECTURE & SOLUTION</Typography>
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

          {/* PERSONAL / OWN PROJECTS BELOW MAIN PROJECTS */}
          <Box sx={{ mt: 8 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <TerminalIcon />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#34d399', letterSpacing: 2, fontWeight: 700 }}>
                INDEPENDENT DEVELOPMENT
              </Typography>
            </Stack>
            <Typography variant="h4" fontWeight="900" gutterBottom>
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
                      <Typography variant="h5" fontWeight="800" gutterBottom>{project.title}</Typography>
                      <Typography variant="body2" color="#9ca3af" sx={{ mb: 3, lineHeight: 1.6 }}>{project.description}</Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                        {project.tech.map((t) => (
                          <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', color: '#d1d5db', fontSize: '0.72rem' }} />
                        ))}
                      </Stack>

                      <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px !important', mb: 2 }}>
                        <AccordionSummary expandIcon={<ChevronDownIcon />}>
                          <Typography variant="caption" fontWeight="bold" color="#9ca3af">ARCHITECTURE & SOLUTION</Typography>
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

        {/* CONTACT SECTION */}
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
            <Typography variant="h4" fontWeight="900" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" color="#9ca3af" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
              Direct contact channels for full-stack engineering opportunities, technical advisory, or project collaboration.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
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
                startIcon={<MailIcon />}
                href="mailto:akhilrameshk@gmail.com"
                sx={{ borderRadius: '12px', py: 1.5, px: 3, fontWeight: 700, textTransform: 'none', color: '#f3f4f6', borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                akhilrameshk@gmail.com
              </Button>
            </Stack>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
}
