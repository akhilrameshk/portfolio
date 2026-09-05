'use client';

import React from 'react';
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
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import StorageIcon from '@mui/icons-material/Storage';
import DownloadIcon from '@mui/icons-material/Download';
import SpeedIcon from '@mui/icons-material/Speed';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SecurityIcon from '@mui/icons-material/Security';
import { motion } from 'framer-motion';
import { darkTheme } from '@/theme/theme';

const motionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const impactStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '10+', label: 'Production Projects' },
  { value: '40%', label: 'Performance Gain' },
  { value: '35%', label: 'Database Speedup' },
];

const projectsList = [
  {
    title: 'Pixovo',
    category: 'LMS Platform',
    color: '#10b981',
    description: 'Scalable educational platform featuring multi-tier course management, interactive grading rubrics, automated quiz systems, and integrated payment gateways.',
    tech: 'React • Next.js • Node.js • MongoDB',
  },
  {
    title: 'Comeonda',
    category: 'Gaming & Events',
    color: '#a855f7',
    description: 'Real-time user engagement engine supporting live predictions, low-latency quiz modules, and sub-second data synchronization loops.',
    tech: 'React • Next.js • WebSockets • Express',
  },
  {
    title: 'Datazoom',
    category: 'Analytics',
    color: '#3b82f6',
    description: 'Executive business intelligence dashboard delivering aggregated reporting analytics, multi-dimensional visualizers, and data insights.',
    tech: 'ReactJS • Data Aggregation • Charting',
  },
  {
    title: 'GOSME',
    category: 'B2B Platform',
    color: '#f59e0b',
    description: 'B2B platform for small and medium enterprises built with a high-performance, scalable backend architecture.',
    tech: 'Angular • NestJS • Node.js',
  },
  {
    title: 'Thickler',
    category: 'Web Application',
    color: '#ef4444',
    description: 'Full-featured web application built using modern React and Next.js architectural patterns.',
    tech: 'React • Next.js • Node.js',
  },
  {
    title: 'Isentia',
    category: 'Enterprise Media',
    color: '#ec4899',
    description: 'Enterprise media monitoring & automated workflow reconciliation platform managing complex administrative approvals.',
    tech: 'Angular • Node.js • REST APIs',
  },
  {
    title: 'Loopshare',
    category: 'Sharing Economy',
    color: '#06b6d4',
    description: 'Backend platform powering sharing economy features, user access control, and transaction workflows.',
    tech: 'Node.js • Express • MongoDB',
  },
  {
    title: 'Hello Cabs',
    category: 'Mobile Application',
    color: '#eab308',
    description: 'Taxi booking and fleet management system built as a cross-platform hybrid mobile application.',
    tech: 'Cordova • JavaScript • Mobile Web',
  },
  {
    title: 'Educore',
    category: 'EdTech',
    color: '#6366f1',
    description: 'All-in-one education management system streamlining administration, communication, and student workflows.',
    tech: 'Meteor • AngularJS • Cordova • MongoDB • Node.js',
  },
  {
    title: 'Eye of Sharjah',
    category: 'Government Portal',
    color: '#14b8a6',
    description: 'Government complaint and suggestion portal designed for public civic engagement and ticket tracking.',
    tech: 'Mobile • Web • Angular',
  },
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          bgcolor: '#09090b', 
          color: 'text.primary', 
          minHeight: '100vh', 
          py: { xs: 3, md: 8 },
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.12), transparent)'
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 6, md: 10 }}>
            
            {/* --- HERO SECTION --- */}
            <Box 
              component={motion.div} 
              {...motionVariants}
              sx={{ 
                minHeight: { xs: 'auto', md: '45vh' }, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                py: { xs: 2, md: 4 } 
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="Senior / Lead Full Stack Software Developer • 10+ Years Experience" 
                  variant="outlined" 
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    borderColor: 'rgba(16, 185, 129, 0.3)', 
                    bgcolor: 'rgba(16, 185, 129, 0.05)', 
                    color: '#10b981',
                    fontFamily: 'monospace',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    py: 0.5
                  }} 
                />
              </Box>

              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.5rem' }, 
                  fontWeight: 800, 
                  letterSpacing: '-0.02em', 
                  mb: 2,
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%)',
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
                  maxWidth: '820px', 
                  mb: 4, 
                  lineHeight: 1.6, 
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.35rem' } 
                }}
              >
                Senior Full Stack Web & Mobile Software Developer specializing in{' '}
                <Box component="span" sx={{ color: '#ffffff', fontWeight: 600 }}>Next.js, React, Angular, Node.js</Box>, and{' '}
                <Box component="span" sx={{ color: '#ffffff', fontWeight: 600 }}>MongoDB, PostgreSQL, MySQL & DynamoDB</Box>.
              </Typography>

              {/* Action Buttons with Responsive Behavior */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 1.5, 
                  '& > *': { flexGrow: { xs: 1, sm: 0 } } 
                }}
              >
                <Button 
                  variant="contained" 
                  href="#projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    bgcolor: '#ffffff', 
                    color: '#000000', 
                    px: 3, 
                    py: 1.2, 
                    textTransform: 'none', 
                    fontWeight: 700, 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#e4e4e7' } 
                  }}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outlined" 
                  href="/Akhil_Ramesh_FullStack.pdf" 
                  target="_blank"
                  download
                  startIcon={<DownloadIcon />}
                  sx={{ 
                    borderColor: '#10b981', 
                    color: '#10b981', 
                    px: 2.5, 
                    py: 1.2, 
                    textTransform: 'none', 
                    fontWeight: 600, 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'rgba(16, 185, 129, 0.1)', borderColor: '#10b981' } 
                  }}
                >
                  Download Resume
                </Button>
                <Button 
                  variant="outlined" 
                  href="https://linkedin.com/in/akhil-ramesh-a0270648"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
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
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
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
                  href="tel:+919633134324"
                  startIcon={<PhoneIcon />}
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
                    color: 'text.primary', 
                    px: 2, 
                    py: 1.2, 
                    textTransform: 'none', 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#18181b', borderColor: '#3f3f46' } 
                  }}
                >
                  +91 96331 34324
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
                      bgcolor: 'rgba(18, 18, 20, 0.7)', 
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#10b981', mb: 0.5, fontSize: { xs: '1.6rem', sm: '2rem' } }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 600, fontSize: '0.68rem', display: 'block' }}>
                      {stat.label}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* --- ABOUT ME / INTRODUCTION --- */}
            <Box>
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10b981', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                About Me
              </Typography>
              <Typography variant="h3" sx={{ mb: 2, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Engineering Leadership & Full-Stack Craftsmanship
              </Typography>

              <Card 
                variant="outlined" 
                sx={{ 
                  p: { xs: 2.5, md: 4 }, 
                  borderColor: 'rgba(255, 255, 255, 0.08)', 
                  bgcolor: 'rgba(18, 18, 20, 0.6)',
                  borderRadius: '16px' 
                }}
              >
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                      With over a decade of software engineering experience, I build resilient, high-performance web and mobile applications from scratch. My focus centers on building clean architectural patterns using modern JavaScript/TypeScript ecosystems, optimizing heavy database operations, and crafting intuitive end-user interfaces.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                      Whether scaling enterprise platforms like <Box component="strong" sx={{ color: '#ffffff', fontWeight: 600 }}>Isentia</Box> or real-time event engines like <Box component="strong" sx={{ color: '#ffffff', fontWeight: 600 }}>Comeonda</Box>, I thrive on tackling backend synchronization bottlenecks, server-side rendering optimizations, and multi-tenant database designs.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={1.5}>
                      <Box sx={{ p: 2, borderRadius: '10px', bgcolor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>Core Strength</Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#10b981' }}>Full-Lifecycle Product Architecture</Typography>
                      </Box>
                      <Box sx={{ p: 2, borderRadius: '10px', bgcolor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>Specialization</Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#a855f7' }}>SSR/SSG Optimizations & SQL/NoSQL Aggregation</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Box>

            {/* --- FEATURED PROJECTS --- */}
            <Box id="projects">
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10b981', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                Portfolio
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Project Showcase
              </Typography>

              <Grid container spacing={2.5}>
                {projectsList.map((project, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                    <Card 
                      variant="outlined" 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between', 
                        p: 1,
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        bgcolor: 'rgba(18, 18, 20, 0.5)',
                        borderRadius: '12px',
                        transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          bgcolor: 'rgba(24, 24, 27, 0.9)',
                          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                          <Chip 
                            label={project.category} 
                            size="small" 
                            sx={{ 
                              bgcolor: `${project.color}15`, 
                              color: project.color, 
                              border: `1px solid ${project.color}30`,
                              fontWeight: 600,
                              fontSize: '0.72rem'
                            }} 
                          />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.15rem' }}>{project.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.88rem' }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                      <Box sx={{ p: 2, pt: 0 }}>
                        <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.75rem', display: 'block' }}>
                          {project.tech}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* --- TECHNICAL SKILLS --- */}
            <Box>
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#a855f7', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                Stack
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Technical Expertise
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(18, 18, 20, 0.5)', borderRadius: '12px' }}>
                    <CardContent>
                      <CodeIcon sx={{ color: '#10b981', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Frontend Development</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                        React.js, Next.js, Angular, AngularJS, TypeScript, JavaScript (ES6+), HTML5/CSS3, UI/UX Implementation, SSR/SSG.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(18, 18, 20, 0.5)', borderRadius: '12px' }}>
                    <CardContent>
                      <LayersIcon sx={{ color: '#a855f7', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Backend & Mobile</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                        Node.js, NestJS, Express.js, Meteor, RESTful APIs, GraphQL, Cordova, Hybrid Mobile Apps, WebSockets.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(18, 18, 20, 0.5)', borderRadius: '12px' }}>
                    <CardContent>
                      <StorageIcon sx={{ color: '#3b82f6', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Databases & Tools</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                        MongoDB (Schema Design & Aggregation), PostgreSQL, MySQL, DynamoDB, Redis, AWS, Netlify, GitHub, CI/CD.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            {/* --- ENGINEERING PHILOSOPHY --- */}
            <Box>
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                Philosophy
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Engineering Principles
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(18, 18, 20, 0.5)', borderRadius: '12px' }}>
                    <CardContent>
                      <SpeedIcon sx={{ color: '#f59e0b', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Performance Optimization</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                        Leveraging server-side caching, bundle splitting, and query indexing to deliver rapid page loads and minimal latency.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(18, 18, 20, 0.5)', borderRadius: '12px' }}>
                    <CardContent>
                      <ArchitectureIcon sx={{ color: '#f59e0b', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Scalable System Design</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                        Designing decoupled modular services and reusable component architecture built to withstand evolving business needs.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(18, 18, 20, 0.5)', borderRadius: '12px' }}>
                    <CardContent>
                      <SecurityIcon sx={{ color: '#f59e0b', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Maintainability & Clean Code</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                        Enforcing strict TypeScript typing, modular directory organization, and automated testing patterns across teams.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            {/* --- WORK EXPERIENCE --- */}
            <Box>
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                History
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Work Experience
              </Typography>

              <Stack spacing={3}>
                <Box sx={{ pl: 3, borderLeft: '2px solid rgba(16, 185, 129, 0.5)', position: 'relative' }}>
                  <Box sx={{ position: 'absolute', left: '-6px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', bgcolor: '#10b981' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Full Stack Developer</Typography>
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Xminds Technopark • Sep 2018 - Present
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '800px', lineHeight: 1.6, fontSize: '0.92rem' }}>
                    Architected 8+ web applications, optimized database queries by 35%, and improved web app performance by 40% using Next.js SSR/SSG.
                  </Typography>
                </Box>

                <Box sx={{ pl: 3, borderLeft: '2px solid rgba(255, 255, 255, 0.15)', position: 'relative' }}>
                  <Box sx={{ position: 'absolute', left: '-6px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', bgcolor: '#3f3f46' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Software Engineer</Typography>
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Cordova Cloud Solutions • Apr 2016 - Aug 2018
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '800px', lineHeight: 1.6, fontSize: '0.92rem' }}>
                    Developed hybrid Android/iOS applications using Apache Cordova and Angular. Engineered backend RESTful APIs with Node.js and MongoDB.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* --- CONTACT CALLOUT --- */}
            <Card 
              variant="outlined" 
              sx={{ 
                p: { xs: 3, md: 5 }, 
                textAlign: 'center', 
                borderColor: 'rgba(255, 255, 255, 0.12)', 
                bgcolor: 'rgba(18, 18, 20, 0.8)',
                borderRadius: '16px',
                backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.1), transparent)'
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                Let&apos;s Build Something Exceptional
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '650px', mx: 'auto', mb: 3, lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Open to senior lead positions, full-stack architecture roles, or high-impact technical consulting across Next.js, React, and Node.js ecosystems.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ justifyContent: 'center', maxWidth: { xs: '100%', sm: '400px' }, mx: 'auto' }}
              >
                <Button 
                  variant="contained" 
                  href="mailto:akhilrameshk@gmail.com"
                  startIcon={<EmailIcon />}
                  fullWidth
                  sx={{ 
                    bgcolor: '#ffffff', 
                    color: '#000000', 
                    py: 1.3, 
                    fontWeight: 700, 
                    textTransform: 'none', 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#e4e4e7' } 
                  }}
                >
                  Send Email
                </Button>
                <Button 
                  variant="outlined" 
                  href="tel:+919633134324"
                  startIcon={<PhoneIcon />}
                  fullWidth
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.2)', 
                    color: 'text.primary', 
                    py: 1.3, 
                    textTransform: 'none', 
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#18181b' } 
                  }}
                >
                  Call Directly
                </Button>
              </Stack>
            </Card>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} />

            {/* --- FOOTER --- */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, pb: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                © {new Date().getFullYear()} Akhil Ramesh K. All rights reserved.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                <Button size="small" href="https://linkedin.com/in/akhil-ramesh-a0270648" target="_blank" startIcon={<LinkedInIcon />} sx={{ color: 'text.secondary', textTransform: 'none' }}>
                  LinkedIn
                </Button>
                <Button size="small" href="https://github.com/akhilrameshk/" target="_blank" startIcon={<GitHubIcon />} sx={{ color: 'text.secondary', textTransform: 'none' }}>
                  GitHub
                </Button>
                <Button size="small" href="mailto:akhilrameshk@gmail.com" startIcon={<EmailIcon />} sx={{ color: 'text.secondary', textTransform: 'none' }}>
                  Email
                </Button>
                <Button size="small" href="tel:+919633134324" startIcon={<PhoneIcon />} sx={{ color: 'text.secondary', textTransform: 'none' }}>
                  +91 96331 34324
                </Button>
              </Stack>
            </Box>

          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
