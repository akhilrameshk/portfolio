'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  Code,
  Storage,
  Devices,
  Launch,
} from '@mui/icons-[#ffffff]'; // Standard MUI Icons

export default function PortfolioHero() {
  const techSkills = [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Material UI',
    'Express',
    'Tailwind CSS',
    'Meteor',
    'Cordova',
    'REST APIs',
    'Git',
  ];

  const projects = [
    {
      title: 'Kayal Vista',
      category: 'Web Application',
      description:
        'A full-featured boat reservation platform for backwater cruise bookings in Kerala with direct domain email integration and dynamic booking workflows.',
      tags: ['Next.js', 'MongoDB', 'TypeScript', 'Material UI'],
      link: '#',
    },
    {
      title: 'Grocery E-Commerce Platform',
      category: 'Full Stack App',
      description:
        'An end-to-end online grocery platform featuring Next.js App Router, JWT middleware authentication, state management, and real-time database schemas.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Material UI'],
      link: '#',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#0b0f17',
        color: '#f8fafc',
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Container maxWidth="lg">
        {/* HERO SECTION */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3.5} alignItems="flex-start">
              
              {/* GREEN DOT STATUS CHIP */}
              <Chip
                icon={
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#10b981',
                      boxShadow: '0 0 10px #10b981',
                      ml: '12px !important',
                      mr: '-2px !important',
                    }}
                  />
                }
                label="Senior / Lead Full Stack Developer"
                sx={{
                  bgcolor: 'rgba(59, 130, 246, 0.08)',
                  color: '#60a5fa',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '24px',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  letterSpacing: '0.01em',
                  height: '38px',
                  backdropFilter: 'blur(8px)',
                  '& .MuiChip-label': {
                    pl: 1,
                    pr: 1.5,
                  },
                }}
              />

              {/* MAIN TITLE */}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Akhil Ramesh K
              </Typography>

              {/* SUBTITLE */}
              <Typography
                variant="h5"
                sx={{
                  color: '#94a3b8',
                  fontWeight: 400,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  lineHeight: 1.6,
                  maxWidth: '640px',
                }}
              >
                Full-Stack Software Engineer with over 8 years of experience building modern, highly scalable web applications, RESTful APIs, and cross-platform mobile solutions.
              </Typography>

              {/* TECH SKILLS PILLS */}
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ pt: 1 }}>
                {techSkills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: '#1e293b',
                      color: '#cbd5e1',
                      border: '1px solid #334155',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>

              {/* ACTION BUTTONS & SOCIALS */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                alignItems="center"
                sx={{ pt: 2, width: '100%' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  sx={{
                    bgcolor: '#3b82f6',
                    color: '#ffffff',
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 4,
                    py: 1.4,
                    borderRadius: '10px',
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': { bgcolor: '#2563eb' },
                  }}
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="mailto:contact@example.com"
                  startIcon={<Email />}
                  sx={{
                    color: '#cbd5e1',
                    borderColor: '#334155',
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 3.5,
                    py: 1.4,
                    borderRadius: '10px',
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      borderColor: '#64748b',
                      bgcolor: 'rgba(255, 255, 255, 0.04)',
                    },
                  }}
                >
                  Contact Me
                </Button>

                <Stack direction="row" spacing={1} sx={{ ml: { sm: 2 } }}>
                  <IconButton sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}>
                    <GitHub />
                  </IconButton>
                  <IconButton sx={{ color: '#94a3b8', '&:hover': { color: '#3b82f6' } }}>
                    <LinkedIn />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT SIDE STATS CARD */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                bgcolor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(16px)',
                borderRadius: '20px',
                p: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 3 }}>
                  Technical Highlights
                </Typography>

                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                      <Code />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600 }}>
                        Frontend Development
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                        Next.js (App Router), React, TypeScript, Material UI, Tailwind
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                      <Storage />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600 }}>
                        Backend & Database
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                        Node.js, Express, MongoDB Schema Architecture, RESTful APIs
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                      <Devices />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600 }}>
                        Hybrid & Mobile Solutions
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                        Meteor, Apache Cordova, Vercel Deployments
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 10, borderColor: '#1e293b' }} />

        {/* FEATURED PROJECTS SECTION */}
        <Box id="projects">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#ffffff' }}>
            Featured Projects
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', mb: 5 }}>
            Selection of recent web solutions and application architectures.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((proj) => (
              <Grid item xs={12} md={6} key={proj.title}>
                <Card
                  sx={{
                    bgcolor: '#131c2e',
                    border: '1px solid #1e293b',
                    borderRadius: '16px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#3b82f6',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="overline" sx={{ color: '#60a5fa', fontWeight: 700 }}>
                      {proj.category}
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, my: 1 }}>
                      {proj.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.6 }}>
                      {proj.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {proj.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(59, 130, 246, 0.1)',
                            color: '#93c5fd',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
