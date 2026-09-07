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
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  Divider,
  Avatar,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// 1. ALL SKILLS FROM RESUME CATEGORIZED
export const skillCategories = [
  {
    title: 'Frontend Architecture',
    skills: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'NestJS', 'Express.js', 'RESTful API Design', 'GraphQL', 'WebSockets', 'Microservices Architecture'],
  },
  {
    title: 'Databases & Caching',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Query Optimization', 'Database Indexing'],
  },
  {
    title: 'Cloud, DevOps & Testing',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Git', 'Vercel', 'Jest', 'Cypress', 'Agile/Scrum'],
  },
];

// 2. CAREER HISTORY & WORK EXPERIENCE (Strictly Resume Companies Only)
export const workExperience = [
  {
    role: 'Senior Full Stack Developer / Team Lead',
    company: 'Xminds, Technopark',
    period: 'Sep 2018 – Present',
    description: 'Led a cross-functional team of 5+ developers across 8+ enterprise-grade applications owning sprint planning, task allocation, code reviews, and delivery timelines end-to-end.',
    achievements: [
      'Boosted Core Web Vitals by 40% and reduced API response latency by 35% through SSR, SSG, caching, and database optimizations.',
      'Directed the integration of 15+ third-party systems and payment gateways including Stripe and Razorpay.',
      'Mentored and upskilled team members through 1:1 coaching, improving sprint output efficiency and new hire onboarding.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Cordova Cloud Solutions',
    period: 'Apr 2016 – Aug 2018',
    description: 'Led development and deployment of hybrid Android/iOS mobile applications using Angular, Node.js, and Apache Cordova alongside RESTful backend APIs.',
    achievements: [
      'Built scalable RESTful APIs with Express.js and MongoDB to support real-time features.',
      'Increased user engagement by 25% through responsive UI enhancements and real-time syncing pipelines.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Achariya Techno Solutions',
    period: 'Jul 2015 – Mar 2016',
    description: 'Built modular, responsive web client interfaces using JavaScript, AngularJS, HTML5, and CSS3.',
    achievements: [
      'Developed a reusable UI component library, reducing maintenance overhead and stabilizing frontend build pipelines.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Neologic',
    period: 'Aug 2014 – Jun 2015',
    description: 'Contributed full-stack code across frontend views and relational data storage for enterprise client platforms.',
    achievements: [
      'Debugged production issues and resolved cross-browser styling inconsistencies across devices.',
    ],
  },
];

// 3. FEATURED PROJECTS (Next.js + Personal & Resume Highlights)
export const nextMongoProjects = [
  {
    id: 1,
    title: 'Kayal Vista',
    category: 'Booking & Tourism',
    description: 'Full-stack backwater cruise & houseboat booking platform built with Next.js App Router, custom REST API routes, and MongoDB for real-time room availability.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs', 'AWS'],
    liveUrl: null,
    githubUrl: 'https://github.com/akhilrameshk/kayal-vista',
    challenge: 'Managing double-booking risks and dynamic availability during high-demand tour seasons.',
    solution: 'Designed MongoDB transactional updates and optimized indexing on booking dates, paired with Next.js Server Actions for instant client state updates.',
  },
  {
    id: 2,
    title: 'Pixovo - Learning Management System',
    category: 'Enterprise LMS',
    description: 'Architected scalable education platform featuring multi-tier course management, automated quiz/assignment systems, grading rubrics, and e-commerce payment gateways.',
    tech: ['React.js', 'Node.js', 'NestJS', 'MongoDB', 'Stripe', 'AWS'],
    liveUrl: null,
    githubUrl: 'https://github.com/akhilrameshk',
    challenge: 'Handling simultaneous quiz submission traffic spikes and real-time automated grading processing.',
    solution: 'Implemented asynchronous message queues for quiz evaluations and query caching via Redis to support high concurrency.',
  },
  {
    id: 3,
    title: 'Cricksy Platform',
    category: 'Real-Time Apps',
    description: 'TypeScript-based sports management platform managing full-stack architecture from dynamic MongoDB data schemas to custom UI views.',
    tech: ['Next.js', 'React.js', 'Node.js API Routes', 'MongoDB', 'TypeScript', 'GraphQL'],
    liveUrl: null,
    githubUrl: 'https://github.com/akhilrameshk/Cricksy',
    challenge: 'Streaming quick score updates without overloading backend query limits.',
    solution: 'Leveraged MongoDB Change Streams alongside cached GraphQL and API routes in Next.js to broadcast live score mutations.',
  },
];

export default function PortfolioPage() {
  const [selectedTab, setSelectedTab] = useState('All');

  const categories = ['All', 'Booking & Tourism', 'Enterprise LMS', 'Real-Time Apps'];

  const filteredProjects = selectedTab === 'All'
    ? nextMongoProjects
    : nextMongoProjects.filter((p) => p.category === selectedTab);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      {/* HERO SECTION */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          mb: 6,
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.08) 0%, rgba(147, 51, 234, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Chip
                label="Available for Senior / Lead Roles"
                color="success"
                size="small"
                variant="outlined"
                sx={{ fontWeight: 700, borderRadius: '8px' }}
              />
            </Stack>
            <Typography variant="h3" component="h1" fontWeight="900" letterSpacing="-0.03em" gutterBottom>
              Akhil Ramesh K
            </Typography>
            <Typography variant="h6" color="primary.main" fontWeight="700" sx={{ mb: 2 }}>
              Senior Full Stack Developer | Team Lead
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 3 }}>
              10+ years of experience architecting, building, and scaling enterprise web applications. Proven track record leading engineering teams of 5+ developers, owning sprint delivery, and optimizing products supporting 10,000+ active users[span_1](start_span)[span_1](end_span).
            </Typography>

            {/* QUICK STATS */}
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <Typography variant="h5" fontWeight="800" color="primary.main">10+ Years</Typography>
                <Typography variant="caption" color="text.secondary" fontWeight="600">Full Stack Experience</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5" fontWeight="800" color="primary.main">5+ Lead</Typography>
                <Typography variant="caption" color="text.secondary" fontWeight="600">Dev Team Size Led</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5" fontWeight="800" color="primary.main">40% Boost</Typography>
                <Typography variant="caption" color="text.secondary" fontWeight="600">Core Web Vitals</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 140,
                height: 140,
                margin: '0 auto',
                bgcolor: 'primary.main',
                fontSize: '3rem',
                fontWeight: 'bold',
                boxShadow: '0 20px 40px rgba(25, 118, 210, 0.3)',
                border: '4px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              AR
            </Avatar>
            <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 700, color: 'text.secondary' }}>
              Technical Leadership & Engineering
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ mb: 8 }} />

      {/* 1. PROFESSIONAL WORK EXPERIENCE */}
      <Box sx={{ mb: 8 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <WorkOutlineIcon color="primary" />
          <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'primary.main', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>
            Resume Experience
          </Typography>
        </Stack>
        <Typography variant="h4" component="h2" fontWeight="800" gutterBottom>
          Professional Experience
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          {workExperience.map((exp, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  borderRadius: '16px',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 10px 25px -5px rgba(25, 118, 210, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {exp.role}
                    </Typography>
                    <Chip label={exp.period} size="small" variant="outlined" color="primary" sx={{ fontSize: '0.7rem' }} />
                  </Box>
                  <Typography variant="subtitle2" color="primary.main" fontWeight="700" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {exp.description}
                  </Typography>

                  <Stack spacing={1}>
                    {exp.achievements.map((ach, i) => (
                      <Stack direction="row" spacing={1} alignItems="flex-start" key={i}>
                        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 16, mt: 0.3 }} />
                        <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                          {ach}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ mb: 8 }} />

      {/* 2. TECHNICAL SKILLS SHOWCASE */}
      <Box sx={{ mb: 8 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <DynamicFeedIcon color="primary" />
          <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'primary.main', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>
            Technical Capabilities
          </Typography>
        </Stack>
        <Typography variant="h4" component="h2" fontWeight="800" gutterBottom>
          Skills & Stack Ecosystem
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          {skillCategories.map((cat) => (
            <Grid item xs={12} sm={6} md={3} key={cat.title}>
              <Card variant="outlined" sx={{ height: '100%', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.01)' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" color="primary" gutterBottom>
                    {cat.title}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1.5 }}>
                    {cat.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" variant="outlined" sx={{ fontSize: '0.75rem', borderRadius: '6px' }} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ mb: 8 }} />

      {/* 3. ARCHITECTURE & PROJECTS */}
      <Box sx={{ mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <StorageIcon color="primary" sx={{ fontSize: 28 }} />
          <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'primary.main', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>
            Architecture & Projects
          </Typography>
        </Stack>
        <Typography variant="h4" component="h2" fontWeight="800" letterSpacing="-0.02em" gutterBottom>
          Featured Full-Stack Projects
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="project category filter tabs"
        >
          {categories.map((cat) => (
            <Tab key={cat} label={cat} value={cat} sx={{ fontWeight: 'bold', textTransform: 'none', fontSize: '0.95rem' }} />
          ))}
        </Tabs>
      </Box>

      {/* PROJECT CARDS GRID */}
      <Grid container spacing={4}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 30px -10px rgba(25, 118, 210, 0.25)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={project.category}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 600, fontSize: '0.75rem' }}
                  />
                </Box>

                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                  {project.tech.map((t) => (
                    <Chip key={t} label={t} size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', fontSize: '0.72rem' }} />
                  ))}
                </Stack>

                <Accordion variant="outlined" disableGutters sx={{ mb: 2, borderRadius: '8px !important', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="caption" fontWeight="bold" color="text.secondary">
                      ARCHITECTURE & CHALLENGES
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ mb: 1, lineHeight: 1.5 }}>
                      <strong>Challenge:</strong> {project.challenge}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                      <strong>Solution:</strong> {project.solution}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Stack direction="row" spacing={2} sx={{ mt: 'auto', pt: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none', borderRadius: '8px' }}
                  >
                    GitHub Code
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<LaunchIcon />}
                    disabled={!project.liveUrl}
                    href={project.liveUrl || '#'}
                    sx={{ textTransform: 'none', borderRadius: '8px' }}
                  >
                    {project.liveUrl ? 'Live Demo' : 'Live Soon'}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
