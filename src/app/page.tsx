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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-[#1976d2]'; // Standard icon fallback or import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandMore from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupsIcon from '@mui/icons-material/Groups';
import SpeedIcon from '@mui/icons-material/Speed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

// Project Data with Filtering Categories and Key Architecture Challenges
const projects = [
  {
    id: 1,
    title: 'Kayal Vista',
    category: 'Next.js/React',
    description: 'A online boat booking platform for backwater cruises, built with modern server rendering and seamless reservation workflows.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Material UI'],
    liveUrl: null, // Placeholder to update later
    githubUrl: 'https://github.com/your-username/kayal-vista',
    challenge: 'Managing real-time availability and dynamic pricing during peak season booking windows.',
    solution: 'Implemented atomic MongoDB updates combined with server-side caching to prevent double bookings during high traffic.',
  },
  {
    id: 2,
    title: 'Cricksy',
    category: 'Node.js/APIs',
    description: 'Real-time sports data and metrics platform delivering live match statistics and performance analytics.',
    tech: ['Node.js', 'Express', 'MongoDB', 'WebSockets'],
    liveUrl: null, // Placeholder to update later
    githubUrl: 'https://github.com/your-username/cricksy',
    challenge: 'Delivering live match score updates to thousands of concurrent users with minimal latency.',
    solution: 'Architected a WebSocket pub/sub model to stream instant data updates, cutting server payload by 40%.',
  },
  {
    id: 3,
    title: 'E-Commerce Grocery Suite',
    category: 'Next.js/React',
    description: 'Full-stack online grocery shop with dynamic catalog management, authentication, and secure checkout.',
    tech: ['Next.js', 'TypeScript', 'Material UI', 'MongoDB'],
    liveUrl: null, // Placeholder to update later
    githubUrl: 'https://github.com/your-username/grocery-app',
    challenge: 'Ensuring seamless authentication and fast page loads across complex product catalog filters.',
    solution: 'Utilized Next.js App Router middleware for route guard authentication and optimized MongoDB index queries.',
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Next.js/React', 'Node.js/APIs'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* 1. LEADERSHIP & MENTORSHIP HIGHLIGHTS */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Engineering Leadership & Mentorship
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Driving technical execution, fostering engineering best practices, and mentoring teams to deliver high-quality scalable software.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <GroupsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Team Leadership
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Led 5+ full-stack developers through agile sprints, code reviews, and architectural planning, resulting in improved sprint velocity and code consistency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <SpeedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Performance & Standards
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Established CI/CD pipeline automation, automated testing patterns, and strict TypeScript guidelines across multi-repository environments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <DesignServicesIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Architecture & Design
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Guided application architecture choices using modern front-end frameworks and clean microservice patterns for scalable operations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* 2. FEATURED PROJECTS WITH CATEGORY FILTER & ARCHITECTURE ACCORDION */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Featured Work
        </Typography>
        
        {/* Category Tabs Filter */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            indicatorColor="primary"
            textColor="primary"
            aria-label="project category filter"
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} sx={{ fontWeight: 'bold' }} />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                  </Stack>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {project.description}
                  </Typography>

                  {/* Expandable Technical Challenge Accordion */}
                  <Accordion variant="outlined" disableGutters sx={{ mb: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="caption" fontWeight="bold" color="text.secondary">
                        TECHNICAL ARCHITECTURE & CHALLENGES
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Challenge:</strong> {project.challenge}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Solution:</strong> {project.solution}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Project Links */}
                  <Stack direction="row" spacing={2} sx={{ mt: 'auto', pt: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                    </Button>

                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<LaunchIcon />}
                      disabled={!project.liveUrl}
                      href={project.liveUrl || '#'}
                    >
                      {project.liveUrl ? 'Live Demo' : 'Live Soon'}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
