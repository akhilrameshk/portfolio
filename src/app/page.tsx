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

// --- MUI ICONS ---
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
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import DnsIcon from '@mui/icons-material/Dns';
import CloudIcon from '@mui/icons-material/Cloud';

// --- DATA DEFINITIONS ---
export const skillCategories = [
  {
    title: 'Frontend Architecture',
    color: '#3b82f6',
    icon: <ViewAgendaIcon fontSize="small" />,
    skills: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Material UI', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    title: 'Backend & APIs',
    color: '#a855f7',
    icon: <DnsIcon fontSize="small" />,
    skills: ['Node.js', 'NestJS', 'Express.js', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Microservices'],
  },
  {
    title: 'Databases & Storage',
    color: '#34d399',
    icon: <StorageIcon fontSize="small" />,
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
    window.open('https://wa.me/919633134324?text=Hi%20Akhil,%20I%20reviewed%20your%20portfolio!', '_blank', 'noopener,noreferrer');
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/akhilrameshk', '_blank', 'noopener,noreferrer');
  };

  const openGitHub = () => {
    window.open('https://github.com/akhilrameshk', '_blank', 'noopener,noreferrer');
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ bgcolor: '#0b0f19', color: '#f3f4f6', minHeight: '100vh', pb: 12, position: 'relative' }}>
      
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
            variant="h6"
            component="div"
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

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <Button
                key={section}
                onClick={() => scrollToSection(section)}
                sx={{
                  color: activeTab === section ? '#60a5fa' : '#d1d5db',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderBottom: activeTab === section ? '2px solid #60a5fa' : '2px solid transparent',
                  borderRadius: 0,
                  px: 0.5,
                  '&:hover': { color: '#60a5fa', bgcolor: 'transparent' },
                }}
              >
                {section === 'about' ? 'About Me' : section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff', p: 0.5 }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
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
              width: '260px',
              p: 2,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#60a5fa' }}>Navigation</Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)} sx={{ color: '#ffffff', p: 0.5 }} aria-label="Close Navigation Menu">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <List dense>
          {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <ListItem key={section} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton onClick={() => scrollToSection(section)} sx={{ borderRadius: '6px', py: 1, '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.15)' } }}>
                <ListItemText
                  primary={section === 'about' ? 'About Me' : section.charAt(0).toUpperCase() + section.slice(1)}
                  slotProps={{
                    primary: {
                      sx: { fontWeight: 700, fontSize: '0.95rem', color: activeTab === section ? '#60a5fa' : '#d1d5db' },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* MAIN CONTAINER */}
      <Box component="main" sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3, md: 6 }, pt: 3 }}>
        
        {/* HERO SECTION */}
        <Box id="about" component="section" sx={{ pb: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3.5, md: 4 },
              borderRadius: '16px',
              background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            {/* STATUS CHIP */}
            <Box sx={{ mb: 2, display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Chip
                icon={
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#34d399',
                      boxShadow: '0 0 8px #34d399',
                      ml: '8px !important',
                    }}
                  />
                }
                label="Senior / Lead Full Stack Developer"
                sx={{
                  bgcolor: 'rgba(59, 130, 246, 0.12)',
                  color: '#60a5fa',
                  border: '1px solid rgba(96, 165, 250, 0.3)',
                  fontWeight: 800,
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  letterSpacing: '0.02em',
                  px: 1,
                  py: 0.5,
                  height: 'auto',
                  backdropFilter: 'blur(6px)',
                  boxShadow: '0 2px 12px rgba(59, 130, 246, 0.15)',
                  '& .MuiChip-label': { px: 1, py: 0.5 },
                }}
              />
            </Box>

            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                color: '#ffffff', 
                fontSize: { xs: '1.25rem', sm: '1.6rem', md: '1.85rem' }, 
                lineHeight: 1.4, 
                mb: 2.5, 
                maxWidth: '960px',
                fontWeight: 700,
                mx: { xs: 'auto', sm: 0 },
              }}
            >
              I&apos;m Akhil Ramesh K, a Senior Full Stack Engineer & Team Lead with 10+ years of experience building scalable web applications using Next.js, React, Node.js, TypeScript, and MongoDB.
            </Typography>

            {/* ACTION BUTTONS */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3, alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Button
                variant="contained"
                size="medium"
                onClick={openWhatsApp}
                aria-label="Contact via WhatsApp"
                startIcon={<WhatsAppIcon />}
                sx={{
                  borderRadius: '8px',
                  py: 0.8,
                  px: 2,
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  textTransform: 'none',
                  bgcolor: '#22c55e',
                  '&:hover': { bgcolor: '#16a34a' },
                }}
              >
                WhatsApp
              </Button>

              <Button
                variant="outlined"
                size="medium"
                onClick={openLinkedIn}
                aria-label="View LinkedIn Profile"
                startIcon={<LinkedInIcon />}
                sx={{
                  borderRadius: '8px',
                  py: 0.8,
                  px: 2,
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  textTransform: 'none',
                  color: '#60a5fa',
                  borderColor: 'rgba(96, 165, 250, 0.4)',
                  '&:hover': { bgcolor: 'rgba(96, 165, 250, 0.1)' },
                }}
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                size="medium"
                onClick={openGitHub}
                aria-label="View GitHub Profile"
                startIcon={<GitHubIcon />}
                sx={{
                  borderRadius: '8px',
                  py: 0.8,
                  px: 2,
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  textTransform: 'none',
                  color: '#f3f4f6',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                size="medium"
                component="a"
                href="mailto:akhilrameshk@gmail.com"
                aria-label="Send Email"
                startIcon={<EmailIcon />}
                sx={{
                  borderRadius: '8px',
                  py: 0.8,
                  px: 2,
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  textTransform: 'none',
                  color: '#f3f4f6',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                Email
              </Button>

              {/* PHONE BUTTON: ICON-ONLY ON MOBILE (xs), FULL TEXT ON TABLET/DESKTOP (sm+) */}
              <Button
                variant="outlined"
                size="medium"
                component="a"
                href="tel:+919633134324"
                aria-label="Call Phone Number"
                startIcon={<PhoneIcon />}
                sx={{
                  borderRadius: '8px',
                  py: 0.8,
                  px: { xs: 1.25, sm: 2 },
                  minWidth: { xs: 'auto', sm: 'auto' },
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  textTransform: 'none',
                  color: '#34d399',
                  borderColor: 'rgba(52, 211, 153, 0.4)',
                  '&:hover': { bgcolor: 'rgba(52, 211, 153, 0.1)' },
                  '& .MuiButton-startIcon': {
                    mr: { xs: 0, sm: 1 },
                    ml: { xs: 0, sm: -0.5 },
                  },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                  +91 96331 34324
                </Box>
              </Button>

              <Button
                variant="contained"
                size="medium"
                onClick={downloadResume}
                aria-label="Download PDF Resume"
                startIcon={<DownloadIcon />}
                sx={{
                  borderRadius: '8px',
                  py: 0.8,
                  px: 2,
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  textTransform: 'none',
                  bgcolor: '#3b82f6',
                  '&:hover': { bgcolor: '#2563eb' },
                }}
              >
                Resume
              </Button>
            </Box>

            {/* METRICS GRID */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: 2, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Box>
                <Typography variant="h5" sx={{ color: '#60a5fa', fontWeight: 900, lineHeight: 1.1 }}>10+</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, mt: 0.5 }}>Years Experience</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: '#34d399', fontWeight: 900, lineHeight: 1.1 }}>40%</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, mt: 0.5 }}>Core Web Vitals Gain</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: '#a855f7', fontWeight: 900, lineHeight: 1.1 }}>5+ Devs</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, mt: 0.5 }}>Cross-Functional Lead</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: '#f59e0b', fontWeight: 900, lineHeight: 1.1 }}>35%</Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 500, mt: 0.5 }}>API Latency Reduction</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* DETAILED ABOUT ME SECTION */}
        <Box component="section" sx={{ pb: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: '14px',
              bgcolor: 'rgba(17, 24, 39, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1.25, mb: 1.5 }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '6px',
                  bgcolor: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                  flexShrink: 0,
                }}
              >
                <PersonIcon fontSize="small" />
              </Box>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 800, color: '#ffffff', m: 0 }}>
                About Me & Leadership Philosophy
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ color: '#d1d5db', lineHeight: 1.6, mb: 1.5, fontSize: '0.9rem' }}>
              Throughout my professional journey as a full-stack software engineer and team lead, I have deeply focused on bridging the gap between complex business logic and lightning-fast user interfaces. I guide cross-functional engineering squads through agile sprint planning, meticulous code reviews, and robust system architecture design.
            </Typography>
            <Typography variant="body1" sx={{ color: '#d1d5db', lineHeight: 1.6, mb: 1.5, fontSize: '0.9rem' }}>
              Whether architecting real-time engagement frameworks, optimizing database query structures, or mentoring development peers, my goal centers on clean architecture, secure code standards, and seamless performance.
            </Typography>
            <Typography variant="body1" sx={{ color: '#d1d5db', lineHeight: 1.6, fontSize: '0.9rem' }}>
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

        {/* SKILLS SECTION */}
        <Box id="skills" component="section" sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1, mb: 0.5 }}>
            <CodeIcon sx={{ color: '#60a5fa', fontSize: '1rem' }} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#60a5fa', letterSpacing: 1.2, fontWeight: 700, fontSize: '0.75rem' }}>
              COMPREHENSIVE TECH STACK
            </Typography>
          </Box>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 900, mb: 2, color: '#ffffff', textAlign: { xs: 'center', sm: 'left' } }}>
            Core Skill Sets
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
            {skillCategories.map((cat, idx) => (
              <Card
                key={idx}
                variant="outlined"
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  bgcolor: 'rgba(17, 24, 39, 0.75)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    borderColor: cat.color,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 8px 24px -8px ${cat.color}33`,
                  },
                }}
              >
                <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1, mb: 1.5 }}>
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
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff', m: 0, fontSize: '0.95rem' }}>
                      {cat.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
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
        <Box id="experience" component="section" sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1, mb: 0.5 }}>
            <WorkIcon sx={{ color: '#a855f7', fontSize: '1rem' }} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#a855f7', letterSpacing: 1.2, fontWeight: 700, fontSize: '0.75rem' }}>
              CAREER TRACK
            </Typography>
          </Box>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 900, mb: 2, color: '#ffffff', textAlign: { xs: 'center', sm: 'left' } }}>
            Professional Work Experience
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            {workExperience.map((exp, idx) => (
              <Card
                key={idx}
                variant="outlined"
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  bgcolor: 'rgba(17, 24, 39, 0.6)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', sm: 'flex-start' }, mb: 0.5, gap: 1 }}>
                    <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '0.95rem', textAlign: { xs: 'center', sm: 'left' } }}>{exp.role}</Typography>
                    <Chip label={exp.period} size="small" variant="outlined" sx={{ color: '#60a5fa', borderColor: 'rgba(96, 165, 250, 0.3)', fontSize: '0.65rem', whiteSpace: 'nowrap' }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#38bdf8', fontWeight: 700, mb: 1, textAlign: { xs: 'center', sm: 'left' } }}>{exp.company}</Typography>
                  <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 1.5, lineHeight: 1.5, fontSize: '0.825rem', textAlign: { xs: 'center', sm: 'left' } }}>{exp.description}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                    {exp.achievements.map((ach, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                        <Typography variant="caption" sx={{ color: '#34d399', fontWeight: 'bold', fontSize: '0.8rem' }}>✓</Typography>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', lineHeight: 1.4, fontSize: '0.78rem' }}>{ach}</Typography>
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
        <Box id="projects" component="section" sx={{ py: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1, mb: 0.5 }}>
              <StorageIcon sx={{ color: '#c084fc', fontSize: '1rem' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#c084fc', letterSpacing: 1.2, fontWeight: 700, fontSize: '0.75rem' }}>
                CLIENT & ENTERPRISE DELIVERABLES
              </Typography>
            </Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 900, mb: 2, color: '#ffffff', textAlign: { xs: 'center', sm: 'left' } }}>
              Main Production Projects
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
              {mainEnterpriseProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="outlined"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    bgcolor: 'rgba(17, 24, 39, 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 2, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Chip label={project.category} size="small" sx={{ bgcolor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', fontWeight: 700, mb: 1, fontSize: '0.68rem' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5, color: '#ffffff', fontSize: '0.95rem' }}>{project.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 1.5, lineHeight: 1.4, fontSize: '0.825rem' }}>{project.description}</Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                      {project.tech.map((t) => (
                        <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.06)', color: '#f3f4f6', fontSize: '0.68rem' }} />
                      ))}
                    </Box>

                    <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px !important', textAlign: 'left', '&:before': { display: 'none' } }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />} sx={{ minHeight: '32px', py: 0 }}>
                        <Typography variant="caption" sx={{ color: '#d1d5db', fontWeight: 'bold', fontSize: '0.725rem' }}>ARCHITECTURE & SOLUTION</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pt: 0, pb: 1 }}>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', mb: 0.5, display: 'block', lineHeight: 1.4, fontSize: '0.75rem' }}><strong>Challenge:</strong> {project.challenge}</Typography>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', display: 'block', lineHeight: 1.4, fontSize: '0.75rem' }}><strong>Solution:</strong> {project.solution}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1, mb: 0.5 }}>
              <DynamicFeedIcon sx={{ color: '#34d399', fontSize: '1rem' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#34d399', letterSpacing: 1.2, fontWeight: 700, fontSize: '0.75rem' }}>
                INDEPENDENT DEVELOPMENT
              </Typography>
            </Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 900, mb: 2, color: '#ffffff', textAlign: { xs: 'center', sm: 'left' } }}>
              Personal & Side Projects
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
              {personalProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="outlined"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    bgcolor: 'rgba(17, 24, 39, 0.6)',
                    borderColor: 'rgba(52, 211, 153, 0.2)',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 2, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Chip label={project.category} size="small" sx={{ bgcolor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', fontWeight: 700, mb: 1, fontSize: '0.68rem' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5, color: '#ffffff', fontSize: '0.95rem' }}>{project.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 1.5, lineHeight: 1.4, fontSize: '0.825rem' }}>{project.description}</Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                      {project.tech.map((t) => (
                        <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.06)', color: '#f3f4f6', fontSize: '0.68rem' }} />
                      ))}
                    </Box>

                    <Accordion variant="outlined" disableGutters sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px !important', mb: 1.5, textAlign: 'left', '&:before': { display: 'none' } }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />} sx={{ minHeight: '32px', py: 0 }}>
                        <Typography variant="caption" sx={{ color: '#d1d5db', fontWeight: 'bold', fontSize: '0.725rem' }}>ARCHITECTURE & SOLUTION</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pt: 0, pb: 1 }}>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', mb: 0.5, display: 'block', lineHeight: 1.4, fontSize: '0.75rem' }}><strong>Challenge:</strong> {project.challenge}</Typography>
                        <Typography variant="caption" sx={{ color: '#e5e7eb', display: 'block', lineHeight: 1.4, fontSize: '0.75rem' }}><strong>Solution:</strong> {project.solution}</Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon />}
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.4)', textTransform: 'none', borderRadius: '6px', fontSize: '0.75rem', py: 0.4, px: 1.2 }}
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
        <Box id="contact" component="section" sx={{ py: 2 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: '12px',
              bgcolor: 'rgba(17, 24, 39, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" component="h2" sx={{ fontWeight: 900, mb: 1, color: '#ffffff' }}>
              Let&apos;s Build Together
            </Typography>
            <Typography variant="body2" sx={{ color: '#d1d5db', maxWidth: '600px', mx: 'auto', mb: 2.5, fontSize: '0.85rem' }}>
              Direct contact channels for senior full-stack roles, technical leadership, or project consulting.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="medium"
                onClick={openWhatsApp}
                aria-label="Chat on WhatsApp"
                startIcon={<WhatsAppIcon />}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, fontSize: '0.825rem', textTransform: 'none', bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' } }}
              >
                WhatsApp
              </Button>

              <Button
                variant="outlined"
                size="medium"
                onClick={openLinkedIn}
                aria-label="LinkedIn Profile"
                startIcon={<LinkedInIcon />}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, fontSize: '0.825rem', textTransform: 'none', color: '#60a5fa', borderColor: 'rgba(96, 165, 250, 0.4)' }}
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                size="medium"
                onClick={openGitHub}
                aria-label="GitHub Profile"
                startIcon={<GitHubIcon />}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, fontSize: '0.825rem', textTransform: 'none', color: '#f3f4f6', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                size="medium"
                component="a"
                href="mailto:akhilrameshk@gmail.com"
                aria-label="Email Address"
                startIcon={<EmailIcon />}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, fontSize: '0.825rem', textTransform: 'none', color: '#f3f4f6', borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                Email
              </Button>

              <Button
                variant="outlined"
                size="medium"
                component="a"
                href="tel:+919633134324"
                aria-label="Call Phone Number"
                startIcon={<PhoneIcon />}
                sx={{ borderRadius: '8px', py: 0.8, px: 2, fontWeight: 700, fontSize: '0.825rem', textTransform: 'none', color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.4)' }}
              >
                +91 96331 34324
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* FLOATING ACTION BUTTONS */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1200,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.25,
        }}
      >
        <Tooltip title="Call Phone" placement="left">
          <IconButton
            component="a"
            href="tel:+919633134324"
            aria-label="Call Phone Number"
            sx={{
              bgcolor: '#059669',
              color: '#ffffff',
              boxShadow: '0 4px 16px rgba(5, 150, 105, 0.4)',
              '&:hover': { bgcolor: '#047857' },
              width: 40,
              height: 40,
            }}
          >
            <PhoneIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send Email" placement="left">
          <IconButton
            component="a"
            href="mailto:akhilrameshk@gmail.com"
            aria-label="Send Email"
            sx={{
              bgcolor: '#6366f1',
              color: '#ffffff',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)',
              '&:hover': { bgcolor: '#4f46e5' },
              width: 40,
              height: 40,
            }}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Chat on WhatsApp" placement="left">
          <IconButton
            onClick={openWhatsApp}
            aria-label="Chat on WhatsApp"
            sx={{
              bgcolor: '#22c55e',
              color: '#ffffff',
              boxShadow: '0 4px 16px rgba(34, 197, 94, 0.4)',
              '&:hover': { bgcolor: '#16a34a' },
              width: 40,
              height: 40,
            }}
          >
            <WhatsAppIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Scroll to Top" placement="left">
          <IconButton
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            sx={{
              bgcolor: '#2563eb',
              color: '#ffffff',
              boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
              '&:hover': { bgcolor: '#1d4ed8' },
              width: 40,
              height: 40,
            }}
          >
            <KeyboardArrowUpIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

    </Box>
  );
}
