'use client';

import React, { useState, useEffect } from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Button, 
  Divider, 
  Stack,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Fab,
  Tooltip
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import { darkTheme } from '@/theme/theme';

const impactStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5+', label: 'Engineers Led' },
  { value: '40%', label: 'Web Vitals Boost' },
  { value: '35%', label: 'Latency Reduced' },
];

const projectsList = [
  {
    title: 'Cricksy',
    category: 'Full Stack',
    type: 'Cricket Match Platform',
    color: '#0284c7',
    description: 'Early-stage cricket platform designed to load live local and international match details.',
    tech: ['TypeScript', 'React', 'Next.js', 'Node.js', 'REST APIs'],
    github: 'https://github.com/akhilrameshk/Cricksy'
  },
  {
    title: 'Kayal Vista',
    category: 'Full Stack',
    type: 'Houseboat & Room Booking',
    color: '#06b6d4',
    description: 'Initial-stage product platform for booking houseboats and rooms currently focused on Alappuzha backwaters.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/akhilrameshk/kayal-vista'
  },
  {
    title: 'Optical Shop',
    category: 'Frontend',
    type: 'Local Shop Showcase',
    color: '#f59e0b',
    description: 'Digital catalog designed to display and showcase local optical products available in-shop.',
    tech: ['TypeScript', 'HTML5', 'CSS3', 'Responsive UI'],
    github: 'https://github.com/akhilrameshk/optical-shop'
  },
  {
    title: 'Marriage Invitation',
    category: 'Frontend',
    type: 'Web Template',
    color: '#8b5cf6',
    description: 'Custom wedding invitation web template built for Anandhanunni & Amrutha with responsive animations and venue details.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/akhilrameshk/AnandhanunniAmrutha'
  },
  {
    title: 'Resume Builder',
    category: 'Frontend',
    type: 'Resume Generator Tool',
    color: '#ef4444',
    description: 'Early-stage utility tool built to dynamic generate and export structured developer resumes.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'PDF Export'],
    github: 'https://github.com/akhilrameshk/resume-builder'
  },
  {
    title: 'Pixovo',
    category: 'Full Stack',
    type: 'LMS Platform',
    color: '#10b981',
    description: 'Scalable educational platform featuring multi-tier course management, interactive grading rubrics, automated quiz systems, and integrated payment gateways.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Comeonda',
    category: 'Full Stack',
    type: 'Gaming & Events',
    color: '#a855f7',
    description: 'Real-time user engagement engine supporting live predictions, low-latency quiz modules, and sub-second data synchronization loops.',
    tech: ['React', 'Next.js', 'WebSockets', 'Express'],
  },
  {
    title: 'Datazoom',
    category: 'Frontend',
    type: 'Analytics Platform',
    color: '#3b82f6',
    description: 'Executive business intelligence dashboard delivering aggregated reporting analytics, multi-dimensional visualizers, and data insights.',
    tech: ['ReactJS', 'Data Aggregation', 'Charting'],
  },
  {
    title: 'Isentia',
    category: 'Full Stack',
    type: 'Workflow Automation',
    color: '#ec4899',
    description: 'Automated expense reconciliation engine managing complex compliance rules, multi-stage reimbursement workflows, and approval hierarchies.',
    tech: ['Angular', 'Node.js', 'REST APIs', 'PostgreSQL'],
  }
];

const workHistory = [
  {
    role: 'Senior Full Stack Developer / Team Lead',
    company: 'Xminds Technopark',
    period: 'Sep 2018 - Present',
    highlights: [
      'Led a cross-functional team of 5+ developers across 8+ production-ready enterprise applications, owning sprint planning, code reviews, and delivery timelines.',
      'Mentored team members through 1:1 coaching and technical guidance, improving overall sprint delivery velocity and onboarding efficiency.',
      'Partnered with stakeholders to formulate technical roadmaps, balancing scope and engineering velocity across React, Next.js, Node.js, and NestJS.',
      'Boosted Core Web Vitals performance by 40% and reduced API response latency by 35% through SSR, SSG, caching, and database query optimizations.',
      'Directed integrations with 15+ third-party systems and payment gateways (Stripe, Razorpay).'
    ],
    skills: ['Next.js', 'React', 'Node.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'TypeScript', 'AWS', 'Team Leadership']
  },
  {
    role: 'Senior Software Engineer',
    company: 'Cordova Cloud Solutions',
    period: 'Apr 2016 - Aug 2018',
    highlights: [
      'Led development and deployment of hybrid Android and iOS mobile applications using Angular, Node.js, and Apache Cordova.',
      'Designed and built scalable RESTful APIs with Express.js and MongoDB to support real-time features.',
      'Increased user engagement by 25% through responsive interface enhancements and real-time syncing pipelines.'
    ],
    skills: ['Apache Cordova', 'Angular', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Hybrid Mobile']
  },
  {
    role: 'Junior Developer',
    company: 'Achariya Techno Solutions',
    period: 'Jul 2015 - Mar 2016',
    highlights: [
      'Built modular, responsive web client interfaces using JavaScript, AngularJS, HTML5, and CSS3.',
      'Developed a reusable UI component library, reducing maintenance overhead and front-end build stability.'
    ],
    skills: ['JavaScript', 'AngularJS', 'HTML5', 'CSS3', 'UI Components']
  },
  {
    role: 'Junior Developer',
    company: 'Neologic',
    period: 'Aug 2014 - Jun 2015',
    highlights: [
      'Contributed full-stack code across frontend views and relational data storage systems.',
      'Resolved production issues and cross-browser styling inconsistencies across modern desktop and mobile browsers.'
    ],
    skills: ['JavaScript', 'HTML5', 'CSS3', 'SQL', 'Full Stack']
  }
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [filter, setFilter] = useState('All');
  const [isAtBottom, setIsAtBottom] = useState(false);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = filter === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= documentHeight - 300) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToggle = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* --- HEADER --- */}
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          bgcolor: 'rgba(9, 9, 11, 0.85)', 
          backdropFilter: 'blur(16px)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)' 
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: '64px', px: { xs: 1, sm: 0 } }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 800, 
                letterSpacing: '-0.02em', 
                color: '#fff', 
                fontSize: { xs: '0.95rem', sm: '1.1rem' } 
              }}
            >
              Akhil Ramesh K
            </Typography>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button href="#about" sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.88rem', '&:hover': { color: '#fff' } }}>About</Button>
              <Button href="#projects" sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.88rem', '&:hover': { color: '#fff' } }}>Projects</Button>
              <Button href="#experience" sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.88rem', '&:hover': { color: '#fff' } }}>Experience</Button>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button 
                variant="contained" 
                href="https://wa.me/919633134324" 
                target="_blank"
                size="small"
                sx={{ 
                  bgcolor: '#25D366', 
                  color: '#ffffff', 
                  fontWeight: 700, 
                  textTransform: 'none', 
                  borderRadius: '6px',
                  px: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  '&:hover': { bgcolor: '#1ebc57' } 
                }}
              >
                WhatsApp
              </Button>
              <Button 
                variant="contained" 
                href="mailto:akhilrameshk@gmail.com" 
                size="small"
                sx={{ 
                  bgcolor: '#ffffff', 
                  color: '#000000', 
                  fontWeight: 700, 
                  textTransform: 'none', 
                  borderRadius: '6px',
                  px: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  '&:hover': { bgcolor: '#e4e4e7' } 
                }}
              >
                Contact
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box 
        sx={{ 
          bgcolor: '#0a0a0c', 
          color: 'text.primary', 
          minHeight: '100vh', 
          pb: { xs: 10, md: 12 },
          pt: { xs: 2, md: 5 },
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `
            radial-gradient(circle at 20% 10%, rgba(16, 185, 129, 0.08) 0%, transparent 35%),
            radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.06) 0%, transparent 40%)
          `
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 6, md: 12 }}>
            
            {/* --- HERO SECTION --- */}
            <Box 
              component={motion.div} 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              sx={{ pt: { xs: 2, md: 4 } }}
            >
              <Stack direction="row" spacing={1} sx={{ mb: 2.5, flexWrap: 'wrap', gap: 1 }}>
                <Chip 
                  label="Senior Full Stack Developer & Team Lead" 
                  size="small"
                  sx={{ 
                    borderColor: 'rgba(16, 185, 129, 0.3)', 
                    bgcolor: 'rgba(16, 185, 129, 0.05)', 
                    color: '#10b981',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', sm: '0.8rem' }
                  }} 
                />
                <Chip 
                  label="10+ Years Exp." 
                  size="small"
                  sx={{ 
                    borderColor: 'rgba(168, 85, 247, 0.3)', 
                    bgcolor: 'rgba(168, 85, 247, 0.05)', 
                    color: '#a855f7',
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', sm: '0.8rem' }
                  }} 
                />
              </Stack>

              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' }, 
                  fontWeight: 900, 
                  letterSpacing: '-0.03em', 
                  mb: 2.5,
                  background: 'linear-gradient(180deg, #FFFFFF 40%, #A1A1AA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Akhil Ramesh K
              </Typography>

              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ 
                  fontWeight: 300, 
                  maxWidth: '840px', 
                  mb: 4.5, 
                  lineHeight: 1.6, 
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.38rem' } 
                }}
              >
                Senior Full Stack Developer and Team Lead with 10+ years architecting web & mobile platforms across{' '}
                <Box component="span" sx={{ color: '#ffffff', fontWeight: 600 }}>React, Next.js, Angular, Node.js, NestJS</Box>, and{' '}
                <Box component="span" sx={{ color: '#ffffff', fontWeight: 600 }}>MongoDB, PostgreSQL & Redis</Box>.
              </Typography>

              {/* HERO ACTION BUTTONS */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 1.2, 
                  '& > *': { flexGrow: { xs: 1, sm: 0 } } 
                }}
              >
                <Button 
                  variant="contained" 
                  href="#projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    bgcolor: '#10b981', 
                    color: '#000000', 
                    px: 3, 
                    py: 1.2, 
                    textTransform: 'none', 
                    fontWeight: 700, 
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.25)',
                    '&:hover': { bgcolor: '#059669' } 
                  }}
                >
                  View Projects
                </Button>
                <Button 
                  variant="contained" 
                  href="https://wa.me/919633134324"
                  target="_blank"
                  startIcon={<WhatsAppIcon />}
                  sx={{ 
                    bgcolor: '#25D366', 
                    color: '#ffffff', 
                    px: 2, 
                    py: 1.2, 
                    textTransform: 'none', 
                    fontWeight: 700, 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#1ebc57' } 
                  }}
                >
                  WhatsApp
                </Button>
                <Button 
                  variant="outlined" 
                  href="mailto:akhilrameshk@gmail.com"
                  startIcon={<EmailIcon />}
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
                    color: '#ffffff', 
                    px: 2, 
                    py: 1.2, 
                    textTransform: 'none', 
                    fontWeight: 600, 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)', borderColor: '#ffffff' } 
                  }}
                >
                  Email
                </Button>
                <Button 
                  variant="outlined" 
                  href="tel:+919633134324"
                  startIcon={<PhoneIcon />}
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
                    color: '#ffffff', 
                    px: 2, 
                    py: 1.2, 
                    textTransform: 'none', 
                    fontWeight: 600, 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)', borderColor: '#ffffff' } 
                  }}
                >
                  Call
                </Button>
                <Button 
                  variant="outlined" 
                  href="https://linkedin.com/in/akhil-ramesh-a0270648"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.12)', 
                    color: 'text.primary', 
                    px: 2, 
                    py: 1.2, 
                    textTransform: 'none', 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#18181b', borderColor: '#3f3f46' } 
                  }}
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outlined" 
                  href="https://github.com/akhilrameshk/"
                  target="_blank"
                  startIcon={<GitHubIcon />}
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.12)', 
                    color: 'text.primary', 
                    px: 2, 
                    py: 1.2, 
                    textTransform: 'none', 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#18181b', borderColor: '#3f3f46' } 
                  }}
                >
                  GitHub
                </Button>
                <Button 
                  variant="outlined" 
                  href="/Akhil_Ramesh_FullStack.pdf" 
                  target="_blank"
                  download
                  startIcon={<DownloadIcon />}
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
                    color: '#ffffff', 
                    px: 2, 
                    py: 1.2, 
                    textTransform: 'none', 
                    fontWeight: 600, 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)', borderColor: '#ffffff' } 
                  }}
                >
                  Resume
                </Button>
              </Box>
            </Box>

            {/* --- IMPACT METRICS --- */}
            <Grid container spacing={2}>
              {impactStats.map((stat, i) => (
                <Grid size={{ xs: 6, sm: 3 }} key={i}>
                  <Card 
                    variant="outlined" 
                    sx={{ 
                      textAlign: 'center', 
                      py: 2.5, 
                      px: 1.5, 
                      bgcolor: 'rgba(18, 18, 22, 0.5)', 
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#10b981', mb: 0.5, fontSize: { xs: '1.8rem', sm: '2.4rem' } }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, fontSize: '0.65rem', display: 'block' }}>
                      {stat.label}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* --- ABOUT ME --- */}
            <Box id="about">
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10b981', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                About Me
              </Typography>
              <Typography variant="h3" sx={{ mb: 2.5, mt: 0.5, fontWeight: 800, letterSpacing: '-0.02em', fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Technical Leadership & Scalable System Architecture
              </Typography>

              <Card 
                variant="outlined" 
                sx={{ 
                  p: { xs: 2.5, md: 4.5 }, 
                  borderColor: 'rgba(255, 255, 255, 0.08)', 
                  bgcolor: 'rgba(18, 18, 22, 0.5)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 2, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                      Senior Full Stack Developer and Team Lead with over 10 years of experience architecting and scaling enterprise-grade web and mobile platforms. I lead engineering teams of 5+ developers, owning sprint planning, code delivery, system architecture, and stakeholder alignment for products supporting over 10,000+ active users.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                      My core focus combines hands-on engineering across Next.js, React, Node.js, NestJS, and cloud databases (MongoDB, PostgreSQL) with leadership initiatives that boost delivery speed, developer growth, and core performance metrics.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={2}>
                      <Box sx={{ p: 2, borderRadius: '10px', bgcolor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5, textTransform: 'uppercase', fontFamily: 'monospace' }}>Core Focus</Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#10b981', fontSize: '0.9rem' }}>Team Leadership & System Architecture</Typography>
                      </Box>
                      <Box sx={{ p: 2, borderRadius: '10px', bgcolor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5, textTransform: 'uppercase', fontFamily: 'monospace' }}>Specialization</Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#a855f7', fontSize: '0.9rem' }}>Full-Stack JS/TS, SSR, CI/CD & Microservices</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Box>

            {/* --- FEATURED PROJECTS SHOWCASE WITH FILTER --- */}
            <Box id="projects">
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10b981', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                Portfolio
              </Typography>
              <Typography variant="h3" sx={{ mb: 2, mt: 0.5, fontWeight: 800, letterSpacing: '-0.02em', fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Featured Projects & Repositories
              </Typography>

              {/* Category Filter Pills */}
              <Stack direction="row" spacing={1} sx={{ mb: 3.5, flexWrap: 'wrap', gap: 1 }}>
                {categories.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    onClick={() => setFilter(cat)}
                    variant={filter === cat ? 'filled' : 'outlined'}
                    sx={{
                      bgcolor: filter === cat ? '#10b981' : 'transparent',
                      color: filter === cat ? '#000000' : 'text.secondary',
                      borderColor: filter === cat ? '#10b981' : 'rgba(255, 255, 255, 0.12)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      px: 0.5,
                      '&:hover': {
                        bgcolor: filter === cat ? '#059669' : 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                  />
                ))}
              </Stack>

              <Grid container spacing={2.5}>
                {filteredProjects.map((project, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                    <Card 
                      variant="outlined" 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between', 
                        p: 1.5,
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        bgcolor: 'rgba(18, 18, 22, 0.5)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: `${project.color}60`,
                          bgcolor: 'rgba(24, 24, 28, 0.9)',
                          boxShadow: `0 10px 25px -10px ${project.color}20`
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                          <Chip 
                            label={project.type} 
                            size="small" 
                            sx={{ 
                              bgcolor: `${project.color}15`, 
                              color: project.color, 
                              border: `1px solid ${project.color}30`,
                              fontWeight: 600,
                              fontSize: '0.72rem'
                            }} 
                          />
                          {project.github ? (
                            <Button 
                              href={project.github} 
                              target="_blank" 
                              size="small"
                              sx={{ minWidth: 'auto', p: 0.5, color: 'text.secondary', '&:hover': { color: '#fff' } }}
                            >
                              <GitHubIcon sx={{ fontSize: 18 }} />
                            </Button>
                          ) : (
                            <LaunchIcon sx={{ fontSize: 16, color: 'text.secondary', opacity: 0.5 }} />
                          )}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.15rem' }}>{project.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.88rem', mb: 2 }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                      <Box sx={{ p: 2, pt: 0 }}>
                        <Stack direction="row" spacing={0.8} sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                          {project.tech.map((t, i) => (
                            <Chip 
                              key={i} 
                              label={t} 
                              size="small" 
                              sx={{ 
                                bgcolor: 'rgba(255, 255, 255, 0.03)', 
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                color: 'text.secondary',
                                fontSize: '0.68rem',
                                height: '22px'
                              }} 
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* --- WORK EXPERIENCE TIMELINE --- */}
            <Box id="experience">
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                Experience
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 800, letterSpacing: '-0.02em', fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Career Journey
              </Typography>

              <Stack spacing={2}>
                {workHistory.map((item, index) => (
                  <Accordion 
                    key={index} 
                    defaultExpanded={index === 0}
                    sx={{ 
                      bgcolor: 'rgba(18, 18, 22, 0.5)', 
                      borderColor: 'rgba(255, 255, 255, 0.08)', 
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px !important',
                      backdropFilter: 'blur(10px)',
                      '&:before': { display: 'none' }
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', width: '100%' }}>
                        <WorkIcon sx={{ color: index === 0 ? '#10b981' : '#a855f7' }} />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>{item.role}</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                            {item.company} • {item.period}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 0, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <Box sx={{ mt: 2 }}>
                        {item.highlights.map((point, pIdx) => (
                          <Typography key={pIdx} variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                            • {point}
                          </Typography>
                        ))}
                        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                          {item.skills.map((skill, sIdx) => (
                            <Chip 
                              key={sIdx} 
                              label={skill} 
                              size="small" 
                              sx={{ 
                                bgcolor: 'rgba(16, 185, 129, 0.08)', 
                                color: '#10b981',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                fontSize: '0.72rem'
                              }} 
                            />
                          ))}
                        </Stack>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Box>

            {/* --- EDUCATION SECTION --- */}
            <Box>
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                Education
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 800, letterSpacing: '-0.02em', fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Academic Background
              </Typography>

              <Card 
                variant="outlined" 
                sx={{ 
                  p: 3, 
                  borderColor: 'rgba(255, 255, 255, 0.08)', 
                  bgcolor: 'rgba(18, 18, 22, 0.5)',
                  borderRadius: '12px'
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <SchoolIcon sx={{ color: '#f59e0b' }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        B.Tech in Information Technology
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        College of Engineering Poonjar, Kerala (2007 - 2011)
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <SchoolIcon sx={{ color: 'text.secondary' }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        Higher Secondary Education (Plus Two)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        SDV HSS, Alappuzha, Kerala (2005 - 2007)
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Card>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} />

            {/* --- FOOTER --- */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, pb: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                © {new Date().getFullYear()} Akhil Ramesh K. All rights reserved.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                <Button size="small" href="https://wa.me/919633134324" target="_blank" startIcon={<WhatsAppIcon />} sx={{ color: '#25D366', textTransform: 'none' }}>
                  WhatsApp
                </Button>
                <Button size="small" href="https://linkedin.com/in/akhil-ramesh-a0270648" target="_blank" startIcon={<LinkedInIcon />} sx={{ color: 'text.secondary', textTransform: 'none' }}>
                  LinkedIn
                </Button>
                <Button size="small" href="https://github.com/akhilrameshk/" target="_blank" startIcon={<GitHubIcon />} sx={{ color: 'text.secondary', textTransform: 'none' }}>
                  GitHub
                </Button>
              </Stack>
            </Box>

          </Stack>
        </Container>

        {/* --- FLOATING VERTICAL QUICK ACTIONS --- */}
        <Stack 
          direction="column"
          spacing={1.2}
          sx={{ 
            position: 'fixed', 
            bottom: 20, 
            right: 20, 
            zIndex: 1000,
            alignItems: 'center'
          }}
        >
          <Tooltip title="WhatsApp" placement="left">
            <Fab 
              size="small" 
              component="a" 
              href="https://wa.me/919633134324" 
              target="_blank" 
              aria-label="WhatsApp"
              sx={{ 
                bgcolor: '#25D366', 
                color: '#ffffff', 
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                '&:hover': { bgcolor: '#1ebc57' } 
              }}
            >
              <WhatsAppIcon fontSize="small" />
            </Fab>
          </Tooltip>

          <Tooltip title="Email" placement="left">
            <Fab 
              size="small" 
              component="a" 
              href="mailto:akhilrameshk@gmail.com" 
              aria-label="Email"
              sx={{ 
                bgcolor: '#ffffff', 
                color: '#000000', 
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
                '&:hover': { bgcolor: '#e4e4e7' } 
              }}
            >
              <EmailIcon fontSize="small" />
            </Fab>
          </Tooltip>

          <Tooltip title="Call Direct" placement="left">
            <Fab 
              size="small" 
              component="a" 
              href="tel:+919633134324" 
              aria-label="Call Direct"
              sx={{ 
                bgcolor: 'rgba(24, 24, 27, 0.9)', 
                color: '#ffffff', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                '&:hover': { bgcolor: '#3f3f46' } 
              }}
            >
              <PhoneIcon fontSize="small" />
            </Fab>
          </Tooltip>

          <Tooltip title={isAtBottom ? "Scroll to Top" : "Scroll to Bottom"} placement="left">
            <Fab 
              size="small" 
              onClick={handleScrollToggle} 
              aria-label="scroll toggle"
              sx={{ 
                bgcolor: '#10b981', 
                color: '#000000', 
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
                '&:hover': { bgcolor: '#059669', color: '#ffffff' } 
              }}
            >
              {isAtBottom ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </Fab>
          </Tooltip>
        </Stack>

      </Box>
    </ThemeProvider>
  );
}
