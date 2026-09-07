import React from 'react';
import { Box, Chip } from '@mui/material';

export default function StatusChip() {
  return (
    <Box sx={{ display: 'inline-flex' }}>
      <Chip
        icon={
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: '#10b981', // Glowing Green Dot
              boxShadow: '0 0 8px #10b981',
              ml: '12px !important',
              mr: '-2px !important',
            }}
          />
        }
        label="Senior / Lead Full Stack Developer"
        sx={{
          bgcolor: 'rgba(59, 130, 246, 0.08)', // Dark translucent background
          color: '#60a5fa', // Light blue text color
          border: '1px solid rgba(59, 130, 246, 0.3)', // Subtle blue border
          borderRadius: '20px',
          fontWeight: 600,
          fontSize: { xs: '0.8rem', sm: '0.875rem' },
          letterSpacing: '0.01em',
          height: '36px',
          backdropFilter: 'blur(8px)',
          '& .MuiChip-label': {
            pl: 1,
            pr: 1.5,
          },
        }}
      />
    </Box>
  );
}
