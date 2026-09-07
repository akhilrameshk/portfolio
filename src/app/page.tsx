'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
  Paper,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

// --- ICONS ---
import StorageIcon from '@mui/icons-material/Storage';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import DownloadIcon from '@mui/icons-material/Download';
import LayoutIcon from '@mui/icons-material/ViewAgenda';
import ServerIcon from '@mui/icons-material/Storage';
import DatabaseIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

// --- DATA DEFINITIONS ---
export const skillCategories = [
  {
    title: 'Frontend Architecture',
    color: '#3b82f6',
    icon: <LayoutIcon fontSize="small" />,
    skills: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Material UI', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    title: 'Backend & APIs',
    color: '#a855f7',
    icon: <ServerIcon fontSize="small" />,
    skills: ['Node.js', 'NestJS', 'Express.js', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Microservices'],
  },
  {
    title: 'Databases & Storage',
    color: '#34d399',
    icon: <DatabaseIcon fontSize="small" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Database Indexing', 'Aggregation Pipelines'],
  },
  {
    title: 'Cloud, DevOps & Tooling',
    color: '#f59e0b',
    icon: <CloudIcon fontSize="small" />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Git', 'Vercel', 'Jest', 'Cypress'],
  },
];

export const workExperience = [
  {
    role: 'Senior Full Stack Developer / Team Lead',
    company: 'Xminds, Technopark',
    period: 'Sep 2018 – Present',
    description: 'Leading a cross-functional team of developers across multiple enterprise applications, owning sprint cycles, architecture design, and end-to-end delivery.',
    achievements: [
      'Boosted Core Web Vitals performance by 40% and reduced API latency by 35% through strategic server-side rendering and indexing.',
      'Engineered and directed 15+ third-party system integrations including secure payment gateways.',
      'Mentored engineers to elevate code quality standards and shorten sprint delivery timelines.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Cordova Cloud Solutions',
    period: 'Apr 2016 – Aug 2018',
    description: 'Spearheaded the development and deployment of hybrid cross-platform mobile and web applications using modern JavaScript frameworks.',
    achievements: [
      'Built scalable RESTful backend services utilizing Node.js, Express, and MongoDB.',
      'Enhanced client retention by 25% through optimized responsive UIs and robust state management.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Achariya Techno Solutions',
    period: 'Jul 2015 – Mar 2016',
    description: 'Developed modular user client interfaces and dynamic web applications.',
    achievements: [
      'Created reusable component libraries that stabilized frontend build pipelines.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Neologic',
    period: 'Aug 2014 – Jun 2015',
    description: 'Contributed full-stack code across frontend views and relational data stores for client portals.',
    achievements: [
      'Resolved complex cross-browser styling issues and optimized page load benchmarks.',
    ],
  },
];

export const mainEnterpriseProjects = [
  {
    id: 'p1',
    title: 'Pixovo - Learning Management System',
    category: 'Enterprise LMS',
    description: 'Architected scalable education platform featuring multi-tier course management, automated quiz/assignment grading, and subscription billing.',
    tech: ['React.js', 'Node.js', 'NestJS', 'MongoDB', 'Stripe', 'AWS'],
    challenge: 'Handling high-concurrency quiz submission spikes and real-time evaluation processing.',
    solution: 'Implemented asynchronous job queues alongside Redis caching layers.',
  },
  {
    id: 'p2',
    title: 'Comeonda - Interactive Gaming & Event Platform',
    category: 'Real-Time Engagement',
    description: 'Engineered real-time engagement engine featuring live quiz modules and event gamification with sub-second synchronization.',
    tech: ['React.js', 'Node.js', 'WebSockets', 'Redis', 'MongoDB'],
    challenge: 'Maintaining sub-second state broadcasts across tens of thousands of concurrent users.',
    solution: 'Utilized WebSocket clustering backed by Redis Pub/Sub channels.',
  },
  {
    id: 'p3',
    title: 'Datazoom - Enterprise Business Analytics Dashboard',
    category: 'BI & Analytics',
    description: 'Designed executive BI dashboard with aggregated reporting, metric visualizations, and workflow insights.',
    tech: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js'],
    challenge: 'Rendering large multi-variable datasets smoothly without UI thread blocking.',
    solution: 'Implemented virtual scrolling, backend pagination, and indexed aggregation queries.',
  },
  {
    id: 'p4',
    title: 'Isentia - Corporate Expense & Workflow System',
    category: 'Enterprise Automation',
    description: 'Built automated expense reconciliation engine managing compliance rules and multi-stage approval hierarchies.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'REST APIs'],
    challenge: 'Managing complex conditional multi-level approval hierarchies.',
    solution: 'Designed a dynamic finite state machine (FSM) engine storing transitions safely in MongoDB.',
  },
];

export const personalProjects = [
  {
    id: 'side1',
    title: 'Kayal Vista',
    category: 'Booking & Tourism Platform',
    description: 'Full-stack backwater cruise & houseboat booking platform built with Next.js App Router, custom REST APIs, and MongoDB.',
    tech: ['Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'Material UI', 'Vercel'],
    githubUrl: 'https://github.com/akhilrameshk/kayal-vista',
    challenge: 'Preventing double-booking risks and dynamic availability state changes during peak seasons.',
    solution: 'Designed MongoDB transactional atomic updates paired with Next.js Server Actions.',
  },
  {
    id: 'side2',
    title: 'Cricksy Platform',
    category: 'Sports Information Engine',
    description: 'TypeScript-based sports information platform managing full-stack architecture from dynamic MongoDB schemas to custom UI views.',
    tech: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'TypeScript', 'GraphQL'],
    githubUrl: 'https://github.com/akhilrameshk/Cricksy',
    challenge: 'Streaming real-time score updates without exhausting backend API throughput limits.',
    solution: 'Leveraged MongoDB Change Streams with cached GraphQL and custom API routes.',
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919633134324?text=Hi%20Akhil,%20I%20reviewed%20your%20portfolio!', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/akhilrameshk', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/akhilrameshk', '_blank');
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <Box sx={{ bgcolor: '#0b0f19', color: '#f3f4f6', minHeight: '100vh', pb: 16, position: 'relative' }}>
      
      {/* HEADER / NAVBAR */}
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          bgcolor: 'rgba(11, 15, 25, 0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          py: 1.5,
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Box sx={{ maxWidth: '1200px', mx: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="subtitle1"
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

          {/* DESKTOP NAV LINKS */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Button onClick={() => scrollToSection('about')} sx={{ color: activeTab === 'about' ? '#60a5fa' : '#d1d5db', fontWeight: 700, textTransform: 'none' }}>About Me</Button>
            <Button onClick={() => scrollToSection('skills')} sx={{ color: activeTab === 'skills' ? '#60a5fa' : '#d1d5db', fontWeight: 700, textTransform: 'none' }}>Skills</Button>
            <Button onClick={() => scrollToSection('experience')} sx={{ color: activeTab === 'experience' ? '#60a5fa' : '#d1d5db', fontWeight: 700, textTransform: 'none' }}>Experience</Button>
            <Button onClick={() => scrollToSection('projects')} sx={{ color: activeTab === 'projects' ? '#60a5fa' : '#d1d5db', fontWeight: 700, textTransform: 'none' }}>Projects</Button>
            <Button onClick={() => scrollToSection('contact')} sx={{ color: activeTab === 'contact' ? '#60a5fa' : '#d1d5db', fontWeight: 700, textTransform: 'none' }}>Contact</Button>
          </Box>

          {/* MOBILE HAMBURGER MENU ICON */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* MOBILE NAVIGATION DRAWER */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: '#0f172a',
              color: '#f3f4f6',
              width: '280px',
              p: 2,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#60a5fa' }}>Navigation</Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <ListItem key={section} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton onClick={() => scrollToSection(section)} sx={{ borderRadius: '8px', '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.15)' } }}>
                <ListItemText
                  primary={section.charAt(0).toUpperCase() + section.slice(1)}
                  slotProps={{
                    primary: {
                      sx: { fontWeight: 700, color: activeTab === section ? '#60a5fa' : '#d1d5db' },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* MAIN CONTAINER */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 4, md: 6 }, pt: 2 }}>
        
        {/* HERO SECTION */}
        <Box id="about" sx={{ pt: 0.5, pb: 2.5 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: '20px',
              background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <Chip
              label="Available for Senior Full Stack & Team Lead Roles"
              sx={{
                bgcolor: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                borderColor: 'rgba(16, 185, 129, 0.4)',
                fontWeight: 700,
                borderRadius: '8px',
                mb: 1.5,
              }}
              variant="outlined"
            />

            <Typography 
              variant="body1" 
              component="h1" 
              sx={{ 
                color: '#e5e7eb', 
                fontSize: { xs: '0.95rem', sm: '1.1rem' }, 
                lineHeight: 1.5, 
                mb: 2.5, 
                maxWidth: '900px',
                fontWeight: 500
              }}
            >
              I&apos;m Akhil Ramesh K —  Senior Full Stack Developer and Team Lead based in Alappuzha, Kerala, India. With over 10 years of professional software engineering experience, I specialize in building resilient full-stack applications using Next.js, React, Node.js, TypeScript, and MongoDB.
            </Typography>

            {/* ACTION BUTTONS (Single Lines & Complete Contact Integration) */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Button
                variant="contained"
                size="small"
                startIcon={<WhatsAppIcon />}
                onClick={openWhatsApp}
                sx={{
                  borderRadius: '8px',
                  py: 0.6,
                  px: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  bgcolor: '#22c55e',
                  '&:hover': { bgcolor: '#16a34a' },
                  whiteSpace: 'nowrap',
                }}
              >
                WhatsApp
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<LinkedInIcon />}
                onClick={openLinkedIn}
                sx={{
                  borderRadius: '8px',
                  py: 0.6,
                  px: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  color: '#60a5fa',
                  borderColor: 'rgba(96, 165, 250, 0.4)',
                  '&:hover': { bgcolor: 'rgba(96, 165, 250, 0.1)' },
                  whiteSpace: 'nowrap',
                }}
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<GitHubIcon />}
                onClick={openGitHub}
                sx={{
                  borderRadius: '8px',
                  py: 0.6,
                  px: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  color: '#f3f4f6',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                  whiteSpace: 'nowrap',
                }}
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<EmailIcon />}
                href="mailto:akhilrameshk@gmail.com"
                sx={{
                  borderRadius: '8px',
                  py: 0.6,
                  px: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  color: '#f3f4f6',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  whiteSpace: 'nowrap',
                }}
              >
                Email
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<PhoneIcon />}
                href="tel:+919633134324"
                sx={{
                  borderRadius: '8px',
                  py: 0.6,
                  px: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  color: '#34d399',
                  borderColor: 'rgba(52, 211, 153, 0.4)',
                  '&:hover': { bgcolor: 'rgba(52, 211, 153, 0.1)' },
                  whiteSpace: 'nowrap',
                }}
              >
                +91 96331 34324
              </Button>

              <Button
                variant="contained"
                size="small"
                startIcon={<DownloadIcon />}
                onClick={downloadResume}
                sx={{
                  borderRadius: '8px',
                  py: 0.6,
                  px: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  bgcolor: '#3b82f6',
                  '&:hover': { bgcolor: '#2563eb' },
                  whiteSpace: 'nowrap',
                }}
              >
                Resume
              </Button>
            </Box>

            {/* METRICS GRID */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: 1.5, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Box>
                <Typography variant="h6" sx={{ color: '#60a5fa', fontWeight: 900, lineHeight: 1.2 }}>10+</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, fontSize: '0.8rem' }}>Years Experience</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#34d399', fontWeight: 900, lineHeight: 1.2 }}>40%</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, fontSize: '0.8rem' }}>Core Web Vitals Gain</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#a855f7', fontWeight: 900, lineHeight: 1.2 }}>5+ Devs</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, fontSize: '0.8rem' }}>Cross-Functional Lead</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#f59e0b', fontWeight: 900, lineHeight: 1.2 }}>35%</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, fontSize: '0.8rem' }}>API Latency Reduction</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* DETAILED ABOUT ME SECTION */}
        <Box sx={{ pb: 2.5 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: '16px',
              bgcolor: 'rgba(17, 24, 39, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: 1 }}>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '6px',
                  bgcolor: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                  flexShrink: 0,
                }}
              >
                <PersonIcon sx={{ fontSize: '1rem' }} />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800, 
                  color: '#ffffff', 
                  m: 0, 
                  fontSize: { xs: '1rem', sm: '1.15rem' },
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap'
                }}
              >
                About Me & Leadership Philosophy
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: '#d1d5db', lineHeight: 1.6, mb: 1 }}>
              Throughout my professional journey as a full-stack software engineer and team lead, I have deeply focused on bridging the gap between complex business logic and lightning-fast user interfaces. I guide cross-functional engineering squads through agile sprint planning, meticulous code reviews, and robust system architecture design.
            </Typography>
            <Typography variant="body2" sx={{ color: '#d1d5db', lineHeight: 1.6, mb: 1 }}>
              Whether architecting real-time engagement frameworks, optimizing database query structures, or mentoring development peers, my goal centers on clean architecture, secure code standards, and seamless performance.
            </Typography>
            <Typography variant="body2" sx={{ color: '#d1d5db', lineHeight: 1.6 }}>
              To explore how these technical fundamentals drive everyday development results, look into my{' '}
              <Box
                component="span"
                onClick={() => scrollToSection('skills')}
                sx={{
                  color: '#60a5fa',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  '&:hover': { color: '#93c5fd' },
                }}
              >
                technical core skill sets and architecture stacks below
              </Box>.
            </Typography>
          </Paper>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 2 }} />

        {/* ATTRACTIVE SKILLS SECTION */}
        <Box id="skills" sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.1 }}>
            <CodeIcon sx={{ color: '#60a5fa', fontSize: '0.9rem' }} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#60a5fa', letterSpacing: 1.5, fontWeight: 700 }}>
              COMPREHENSIVE TECH STACK
            </Typography>
          </Box>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 900, 
              mb: 0.5, 
              color: '#ffffff', 
              fontSize: { xs: '1.3rem', sm: '1.5rem' },
              lineHeight: 1.2,
              whiteSpace: 'nowrap'
            }}
          >
            Core Skill Sets
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
            {skillCategories.map((cat, idx) => (
              <Card
                key={idx}
                variant="outlined"
                sx={{
                  height: 'auto',
                  minHeight: '220px',
                  borderRadius: '16px',
                  bgcolor: 'rgba(17, 24, 39, 0.75)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    borderColor: cat.color,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 10px 30px -10px ${cat.color}33`,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 2 }, pb: '16px !important', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* ICON & HEADING SIDE BY SIDE */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '6px',
                        bgcolor: `${cat.color}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: cat.color,
                        flexShrink: 0,
                      }}
                    >
                      {cat.icon}
                    </Box>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 800, 
                        color: '#ffffff', 
                        m: 0, 
                        fontSize: { xs: '0.9rem', sm: '0.95rem' },
                        lineHeight: 1.2
                      }}
                    >
                      {cat.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mt: 'auto' }}>
                    {cat.skills.map((skill, sIdx) => (
                      <Chip
                        key={sIdx}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          color: '#e5e7eb',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          height: '24px',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 2 }} />

        {/* WORK EXPERIENCE */}
        <Box id="experience" sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <WorkIcon sx={{ color: '#a855f7', fontSize: '0.9rem' }} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#a855f7', letterSpacing: 1.5, fontWeight: 700 }}>
              CAREER TRACK
            </Typography>
          </Box>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 900, 
              mb: 2.5, 
              color: '#ffffff', 
              fontSize: { xs: '1.3rem', sm: '1.5rem' },
              lineHeight: 1.2,
              whiteSpace: 'nowrap'
            }}
          >
            Professional Work Experience
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            {workExperience.map((exp, idx) => (
              <Card
                key={idx}
                variant="outlined"
                sx={{
                  height: '100%',
                  borderRadius: '16px',
                  bgcolor: 'rgba(17, 24, 39, 0.6)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5, gap: 1 }}>
                    <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.3 }}>{exp.role}</Typography>
                    <Chip label={exp.period} size="small" variant="outlined" sx={{ color: '#60a5fa', borderColor: 'rgba(96, 165, 250, 0.3)', fontSize: '0.65rem', whiteSpace: 'nowrap', height: '20px' }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#38bdf8', fontWeight: 700, mb: 1, fontSize: '0.85rem' }}>{exp.company}</Typography>
                  <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 1.2, lineHeight: 1.4, fontSize: '0.825rem' }}>{exp.description}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                    {exp.achievements.map((ach, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                        <Typography variant="caption" sx={{ color: '#34d399', fontWeight: 'bold', lineHeight: 1.2 }}>✓</Typography>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', lineHeight: 1.25, fontSize: '0.775rem' }}>{ach}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 2 }} />

        {/* PROJECTS SECTION */}
        <Box id="projects" sx={{ py: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <StorageIcon sx={{ color: '#c084fc', fontSize: '0.9rem' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#c084fc', letterSpacing: 1.5, fontWeight: 700 }}>
                CLIENT & ENTERPRISE DELIVERABLES
              </Typography>
            </Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 900, 
                mb: 2, 
                color: '#ffffff', 
                fontSize: { xs: '1.3rem', sm: '1.5rem' },
                lineHeight: 1.2,
                whiteSpace: 'nowrap'
              }}
            >
              Main Production Projects
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mt: 1 }}>
              {mainEnterpriseProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="outlined"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    bgcolor: 'rgba(17, 24, 39, 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Chip label={project.category} size="small" sx={{ bgcolor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', fontWeight: 700, mb: 1, height: '22px' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.6, color: '#ffffff', fontSize: '1rem', lineHeight: 1.3 }}>{project.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 1.5, lineHeight: 1.4, fontSize: '0.825rem' }}>{project.description}</Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 1.5 }}>
                      {project.tech.map((t) => (
                        <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.06)', color: '#f3f4f6', fontSize: '0.68rem', height: '22px' }} />
                      ))}
                    </Box>

                    <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px !important', '&:before': { display: 'none' } }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />} sx={{ minHeight: '32px', py: 0 }}>
                        <Typography variant="caption" sx={{ color: '#d1d5db', fontWeight: 'bold' }}>ARCHITECTURE & SOLUTION</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pt: 0, pb: 1 }}>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', mb: 0.5, display: 'block', lineHeight: 1.35 }}><strong>Challenge:</strong> {project.challenge}</Typography>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', display: 'block', lineHeight: 1.35 }}><strong>Solution:</strong> {project.solution}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <DynamicFeedIcon sx={{ color: '#34d399', fontSize: '0.9rem' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#34d399', letterSpacing: 1.5, fontWeight: 700 }}>
                INDEPENDENT DEVELOPMENT
              </Typography>
            </Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 900, 
                mb: 2, 
                color: '#ffffff', 
                fontSize: { xs: '1.3rem', sm: '1.5rem' },
                lineHeight: 1.2,
                whiteSpace: 'nowrap'
              }}
            >
              Personal & Side Projects
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mt: 1 }}>
              {personalProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="outlined"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    bgcolor: 'rgba(17, 24, 39, 0.6)',
                    borderColor: 'rgba(52, 211, 153, 0.2)',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Chip label={project.category} size="small" sx={{ bgcolor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', fontWeight: 700, mb: 1, height: '22px' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.6, color: '#ffffff', fontSize: '1rem', lineHeight: 1.3 }}>{project.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 1.5, lineHeight: 1.4, fontSize: '0.825rem' }}>{project.description}</Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 1.5 }}>
                      {project.tech.map((t) => (
                        <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.06)', color: '#f3f4f6', fontSize: '0.68rem', height: '22px' }} />
                      ))}
                    </Box>

                    <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px !important', mb: 1, '&:before': { display: 'none' } }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />} sx={{ minHeight: '32px', py: 0 }}>
                        <Typography variant="caption" sx={{ color: '#d1d5db', fontWeight: 'bold' }}>ARCHITECTURE & SOLUTION</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pt: 0, pb: 1 }}>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', mb: 0.5, display: 'block', lineHeight: 1.35 }}><strong>Challenge:</strong> {project.challenge}</Typography>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', display: 'block', lineHeight: 1.35 }}><strong>Solution:</strong> {project.solution}</Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon sx={{ fontSize: '0.9rem' }} />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.4)', textTransform: 'none', borderRadius: '6px', fontSize: '0.72rem', py: 0.4 }}
                    >
                      Source Code
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 2 }} />

        {/* FOOTER CONTACT SECTION */}
        <Box id="contact" sx={{ py: 2 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 4 },
              borderRadius: '16px',
              bgcolor: 'rgba(17, 24, 39, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, color: '#ffffff', fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>
              Let&apos;s Build Together
            </Typography>
            <Typography variant="body2" sx={{ color: '#d1d5db', maxWidth: '600px', mx: 'auto', mb: 2.5, fontSize: '0.85rem' }}>
              Direct contact channels for senior full-stack roles, technical leadership, or project consulting.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="small"
                startIcon={<WhatsAppIcon />}
                onClick={openWhatsApp}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, textTransform: 'none', bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, whiteSpace: 'nowrap' }}
              >
                WhatsApp
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<LinkedInIcon />}
                onClick={openLinkedIn}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, textTransform: 'none', color: '#60a5fa', borderColor: 'rgba(96, 165, 250, 0.4)', whiteSpace: 'nowrap' }}
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<GitHubIcon />}
                onClick={openGitHub}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, textTransform: 'none', color: '#f3f4f6', borderColor: 'rgba(255, 255, 255, 0.3)', whiteSpace: 'nowrap' }}
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<EmailIcon />}
                href="mailto:akhilrameshk@gmail.com"
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, textTransform: 'none', color: '#f3f4f6', borderColor: 'rgba(255, 255, 255, 0.2)', whiteSpace: 'nowrap' }}
              >
                Email
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<PhoneIcon />}
                href="tel:+919633134324"
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, textTransform: 'none', color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.4)', whiteSpace: 'nowrap' }}
              >
                +91 96331 34324
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* RIGHT-BOTTOM FLOATING ACTION BUTTONS */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1200,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        <Tooltip title="Call Phone" placement="left">
          <IconButton
            component="a"
            href="tel:+919633134324"
            sx={{
              bgcolor: '#059669',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(5, 150, 105, 0.5)',
              '&:hover': { bgcolor: '#047857' },
              width: 40,
              height: 40,
            }}
          >
            <PhoneIcon sx={{ fontSize: '1rem' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send Email" placement="left">
          <IconButton
            component="a"
            href="mailto:akhilrameshk@gmail.com"
            sx={{
              bgcolor: '#6366f1',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.5)',
              '&:hover': { bgcolor: '#4f46e5' },
              width: 40,
              height: 40,
            }}
          >
            <EmailIcon sx={{ fontSize: '1rem' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Chat on WhatsApp" placement="left">
          <IconButton
            onClick={openWhatsApp}
            sx={{
              bgcolor: '#22c55e',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.5)',
              '&:hover': { bgcolor: '#16a34a' },
              width: 40,
              height: 40,
            }}
          >
            <WhatsAppIcon sx={{ fontSize: '1rem' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Scroll to Top" placement="left">
          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: '#2563eb',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.5)',
              '&:hover': { bgcolor: '#1d4ed8' },
              width: 40,
              height: 40,
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: '1rem' }} />
          </IconButton>
        </Tooltip>
      </Box>

    </Box>
  );
}
