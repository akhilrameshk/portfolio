'use client';

import React, { useState } from 'react';
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
  Fab
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import StorageIcon from '@mui/icons-material/Storage';
import DownloadIcon from '@mui/icons-material/Download';
import SpeedIcon from '@mui/icons-material/Speed';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import LaunchIcon from '@mui/icons-material/Launch';
import TerminalIcon from '@mui/icons-material/Terminal';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import { darkTheme } from '@/theme/theme';

const impactStats = [
  { value: '10+', label: 'Years Commercial Exp.' },
  { value: '10+', label: 'Production Apps' },
  { value: '40%', label: 'Web Vitals Boost' },
  { value: '35%', label: 'DB Query Optimization' },
];

const projectsList = [
  {
    title: 'Pixovo',
    category: 'Full Stack',
    type: 'LMS Platform',
    color: '#10b981',
    description: 'Scalable educational platform featuring multi-tier course management, interactive grading rubrics, automated quiz systems, and integrated payment gateways.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
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
    title: 'GOSME',
    category: 'Full Stack',
    type: 'B2B Enterprise Platform',
    color: '#f59e0b',
    description: 'B2B platform for small and medium enterprises built with a high-performance, scalable backend architecture.',
    tech: ['Angular', 'NestJS', 'Node.js'],
  },
  {
    title: 'Thickler',
    category: 'Frontend',
    type: 'Web Application',
    color: '#ef4444',
    description: 'Full-featured web application built using modern React and Next.js architectural patterns.',
    tech: ['React', 'Next.js', 'Node.js'],
  },
  {
    title: 'Isentia',
    category: 'Full Stack',
    type: 'Enterprise Media',
    color: '#ec4899',
    description: 'Enterprise media monitoring & automated workflow reconciliation platform managing complex administrative approvals.',
    tech: ['Angular', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Loopshare',
    category: 'Backend',
    type: 'Sharing Economy Platform',
    color: '#06b6d4',
    description: 'Backend platform powering sharing economy features, user access control, and transaction workflows.',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Hello Cabs',
    category: 'Mobile',
    type: 'Taxi Booking Application',
    color: '#eab308',
    description: 'Taxi booking and fleet management system built as a cross-platform hybrid mobile application.',
    tech: ['Cordova', 'JavaScript', 'Mobile Web'],
  },
  {
    title: 'Educore',
    category: 'Mobile',
    type: 'EdTech Multi-Platform',
    color: '#6366f1',
    description: 'All-in-one education management system streamlining administration, communication, and student workflows.',
    tech: ['Meteor', 'AngularJS', 'Cordova', 'MongoDB', 'Node.js'],
  },
  {
    title: 'Eye of Sharjah',
    category: 'Frontend',
    type: 'Government Portal',
    color: '#14b8a6',
    description: 'Government complaint and suggestion portal designed for public civic engagement and ticket tracking.',
    tech: ['Angular', 'Mobile Web', 'REST APIs'],
  },
];

const workHistory = [
  {
    role: 'Senior / Lead Full Stack Developer',
    company: 'Xminds Technopark',
    period: 'Sep 2018 - Present',
    highlights: [
      'Architected 8+ enterprise web applications using Next.js, React, Node.js, and MongoDB.',
      'Optimized database aggregation queries by 35% across high-volume production datasets.',
      'Boosted web application performance by 40% utilizing Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG).'
    ],
    skills: ['Next.js', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'SSR/SSG']
  },
  {
    role: 'Software Developer',
    company: 'Cordova Cloud Solutions',
    period: 'Apr 2016 - Aug 2018',
    highlights: [
      'Engineered hybrid mobile apps for iOS and Android using Apache Cordova and Angular.',
      'Designed and deployed scalable RESTful APIs with Node.js and MongoDB backend integrations.'
    ],
    skills: ['Apache Cordova', 'Angular', 'Node.js', 'MongoDB', 'JavaScript', 'REST APIs']
  }
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = filter === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* --- TOP NAVBAR --- */}
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TerminalIcon sx={{ color: '#10b981', fontSize: 22 }} />
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
            </Box>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button href="#about" sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.88rem', '&:hover': { color: '#fff' } }}>About</Button>
              <Button href="#projects" sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.88rem', '&:hover': { color: '#fff' } }}>Projects</Button>
              <Button href="#skills" sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.88rem', '&:hover': { color: '#fff' } }}>Skills</Button>
              <Button href="#experience" sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.88rem', '&:hover': { color: '#fff' } }}>Experience</Button>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button 
                variant="contained" 
                href="https://wa.me/919633134324" 
                target="_blank"
                size="small"
                startIcon={<WhatsAppIcon />}
                sx={{ 
                  bgcolor: '#25D366', 
                  color: '#ffffff', 
                  fontWeight: 700, 
                  textTransform: 'none', 
                  borderRadius: '6px',
                  px: { xs: 1.2, sm: 2 },
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
                startIcon={<EmailIcon />}
                sx={{ 
                  bgcolor: '#ffffff', 
                  color: '#000000', 
                  fontWeight: 700, 
                  textTransform: 'none', 
                  borderRadius: '6px',
                  px: { xs: 1.2, sm: 2 },
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
                  label="Senior / Lead Full Stack Developer" 
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
                  label="10+ Years Experience" 
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
                Senior Full Stack Web & Mobile Software Developer specializing in{' '}
                <Box component="span" sx={{ color: '#ffffff', fontWeight: 600 }}>Next.js, React, Angular, Node.js</Box>, and{' '}
                <Box component="span" sx={{ color: '#ffffff', fontWeight: 600 }}>MongoDB, PostgreSQL, MySQL & DynamoDB</Box>.
              </Typography>

              {/* ACTION BUTTONS WITH ALL SOCIAL AND CONTACT LINKS RESTORED */}
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
                Engineering Leadership & Full-Stack Craftsmanship
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
                      With over a decade of software engineering experience, I build resilient, high-performance web and mobile applications from scratch. My focus centers on building clean architectural patterns using modern JavaScript/TypeScript ecosystems, optimizing heavy database operations, and crafting intuitive end-user interfaces.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                      Whether scaling enterprise platforms like <Box component="strong" sx={{ color: '#ffffff', fontWeight: 600 }}>Isentia</Box> or real-time event engines like <Box component="strong" sx={{ color: '#ffffff', fontWeight: 600 }}>Comeonda</Box>, I thrive on tackling backend synchronization bottlenecks, server-side rendering optimizations, and multi-tenant database designs.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={2}>
                      <Box sx={{ p: 2, borderRadius: '10px', bgcolor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5, textTransform: 'uppercase', fontFamily: 'monospace' }}>Core Focus</Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#10b981', fontSize: '0.9rem' }}>Full-Lifecycle Product Architecture</Typography>
                      </Box>
                      <Box sx={{ p: 2, borderRadius: '10px', bgcolor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5, textTransform: 'uppercase', fontFamily: 'monospace' }}>Specialization</Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#a855f7', fontSize: '0.9rem' }}>SSR/SSG Optimizations & SQL/NoSQL Aggregation</Typography>
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
                Featured Projects Showcase
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
                          <LaunchIcon sx={{ fontSize: 16, color: 'text.secondary', opacity: 0.5 }} />
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
                Career History
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

        {/* --- FLOATING QUICK ACTION BAR (RIGHT BOTTOM) + SCROLL TOP/BOTTOM TOGGLE --- */}
        <Box 
          sx={{ 
            position: 'fixed', 
            bottom: 20, 
            right: 20, 
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 1.2
          }}
        >
          {/* Scroll Navigation Arrows */}
          <Stack direction="row" spacing={1}>
            <Fab 
              size="small" 
              onClick={scrollToTop} 
              aria-label="scroll to top"
              sx={{ 
                bgcolor: 'rgba(24, 24, 27, 0.85)', 
                color: '#ffffff', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                '&:hover': { bgcolor: '#10b981', color: '#000000' } 
              }}
            >
              <KeyboardArrowUpIcon fontSize="small" />
            </Fab>
            <Fab 
              size="small" 
              onClick={scrollToBottom} 
              aria-label="scroll to bottom"
              sx={{ 
                bgcolor: 'rgba(24, 24, 27, 0.85)', 
                color: '#ffffff', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                '&:hover': { bgcolor: '#10b981', color: '#000000' } 
              }}
            >
              <KeyboardArrowDownIcon fontSize="small" />
            </Fab>
          </Stack>

          {/* Quick Contact Actions */}
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ 
              bgcolor: 'rgba(18, 18, 22, 0.9)', 
              p: 0.8, 
              borderRadius: '30px', 
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
            }}
          >
            <Fab 
              size="small" 
              component="a" 
              href="https://wa.me/919633134324" 
              target="_blank" 
              aria-label="WhatsApp"
              sx={{ bgcolor: '#25D366', color: '#ffffff', '&:hover': { bgcolor: '#1ebc57' } }}
            >
              <WhatsAppIcon fontSize="small" />
            </Fab>
            <Fab 
              size="small" 
              component="a" 
              href="mailto:akhilrameshk@gmail.com" 
              aria-label="Email"
              sx={{ bgcolor: '#ffffff', color: '#000000', '&:hover': { bgcolor: '#e4e4e7' } }}
            >
              <EmailIcon fontSize="small" />
            </Fab>
            <Fab 
              size="small" 
              component="a" 
              href="tel:+919633134324" 
              aria-label="Call Direct"
              sx={{ bgcolor: '#10b981', color: '#000000', '&:hover': { bgcolor: '#059669' } }}
            >
              <PhoneIcon fontSize="small" />
            </Fab>
          </Stack>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
