// src/app/page.tsx
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
  Stack 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import StorageIcon from '@mui/icons-material/Storage';
import { motion } from 'framer-motion';
import { darkTheme } from '@/theme/theme';

const motionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

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
    tech: 'Mobile • Web • Node.js',
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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 6, md: 10 }}>
            
            {/* --- HERO SECTION --- */}
            <Box 
              component={motion.div} 
              {...motionVariants}
              sx={{ minHeight: { xs: 'auto', md: '55vh' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: { xs: 4, md: 2 } }}
            >
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="Senior/Lead Full Stack Software Developer • 10+ Years Experience" 
                  variant="outlined" 
                  size="medium"
                  sx={{ 
                    borderColor: 'rgba(255, 255, 255, 0.15)', 
                    bgcolor: 'rgba(24, 24, 27, 0.6)', 
                    color: 'text.secondary',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem'
                  }} 
                />
              </Box>

              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.5rem' }, fontWeight: 800, tracking: '-0.02em', mb: 2 }}>
                Akhil Ramesh K
              </Typography>

              <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 300, maxWidth: '780px', mb: 4, lineHeight: 1.5, fontSize: { xs: '1.1rem', md: '1.35rem' } }}>
                Senior/Lead Full Stack Web & Mobile Software Developer specializing in{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>Next.js, React, Angular and Node.js</Box>, and{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>MongoDB, PostgreSQL, MySQL, & DynamoDB</Box>.             
               </Typography>

              <Stack  spacing={1.5} direction="row"   sx={{ gap: 1.5,flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  href="#projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ bgcolor: '#ffffff', color: '#000000', px: 3, py: 1.2, textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#e4e4e7' } }}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outlined" 
                  href="https://linkedin.com/in/akhil-ramesh-a0270648"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                  sx={{ borderColor: 'rgba(255, 255, 255, 0.15)', color: 'text.primary', px: 2.5, py: 1.2, textTransform: 'none', '&:hover': { bgcolor: '#18181b', borderColor: '#3f3f46' } }}
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outlined" 
                  href="https://github.com/akhilrameshk/"
                  target="_blank"
                  startIcon={<GitHubIcon />}
                  sx={{ borderColor: 'rgba(255, 255, 255, 0.15)', color: 'text.primary', px: 2.5, py: 1.2, textTransform: 'none', '&:hover': { bgcolor: '#18181b', borderColor: '#3f3f46' } }}
                >
                  GitHub
                </Button>
                <Button 
                  variant="outlined" 
                  href="tel:+919633134324"
                  startIcon={<PhoneIcon />}
                  sx={{ borderColor: 'rgba(255, 255, 255, 0.15)', color: 'text.primary', px: 2.5, py: 1.2, textTransform: 'none', '&:hover': { bgcolor: '#18181b', borderColor: '#3f3f46' } }}
                >
                  +91 96331 34324
                </Button>
              </Stack>
            </Box>

            {/* --- FEATURED PROJECTS --- */}
            <Box id="projects">
              <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10b981', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600 }}>
                Portfolio
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
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
                        justify: 'space-between', 
                        p: 0.5,
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        bgcolor: 'rgba(24, 24, 27, 0.4)',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          bgcolor: 'rgba(24, 24, 27, 0.8)'
                        }
                      }}
                    >
                      <CardContent>
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
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{project.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                      <Box sx={{ p: 2, pt: 0 }}>
                        <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '0.75rem' }}>
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
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
                Technical Expertise
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(24, 24, 27, 0.4)' }}>
                    <CardContent>
                      <CodeIcon sx={{ color: '#10b981', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Frontend Development</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        React.js, Next.js, Angular, TypeScript, JavaScript (ES6+), HTML5/CSS3, UI/UX Implementation, SSR/SSG.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(24, 24, 27, 0.4)' }}>
                    <CardContent>
                      <LayersIcon sx={{ color: '#a855f7', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Backend & Mobile</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        Node.js, NestJS, Express.js, RESTful APIs, GraphQL, Cordova, Hybrid Mobile Apps, WebSockets.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant="outlined" sx={{ p: 1, height: '100%', borderColor: 'rgba(255, 255, 255, 0.08)', bgcolor: 'rgba(24, 24, 27, 0.4)' }}>
                    <CardContent>
                      <StorageIcon sx={{ color: '#3b82f6', mb: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Databases & Tools</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        MongoDB (Schema Design & Aggregation), PostgreSQL, MySQL, Redis, AWS, Netlify, GitHub, CI/CD.
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
              <Typography variant="h3" sx={{ mb: 3, mt: 0.5, fontWeight: 700, fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
                Work Experience
              </Typography>

              <Stack spacing={3}>
                <Box sx={{ pl: 3, borderLeft: '2px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
                  <Box sx={{ position: 'absolute', left: '-6px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', bgcolor: '#10b981' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Full Stack Developer</Typography>
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Xminds Technopark • Sep 2018 - Present
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '800px', lineHeight: 1.6 }}>
                    Architected 8+ web applications, optimized database queries by 35%, and improved web app performance by 40% using Next.js SSR/SSG.
                  </Typography>
                </Box>

                <Box sx={{ pl: 3, borderLeft: '2px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
                  <Box sx={{ position: 'absolute', left: '-6px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', bgcolor: '#3f3f46' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Software Engineer</Typography>
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Cordova Cloud Solutions • Apr 2016 - Aug 2018
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '800px', lineHeight: 1.6 }}>
                    Developed hybrid Android/iOS applications using Apache Cordova and Angular. Engineered backend RESTful APIs with Node.js and MongoDB.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} />

            {/* --- FOOTER --- */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, pb: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                © {new Date().getFullYear()} Akhil Ramesh K. All rights reserved.
              </Typography>
              <Stack direction="row" spacing={1.5}  useFlexGap sx={{ gap: 1.5, flexWrap: 'wrap' }}>
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