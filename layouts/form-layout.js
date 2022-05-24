import React from 'react';
import { Box, Paper, Stack } from '@mui/material';
import BasicLayout, { LayoutProps } from './basic-layout';

interface FormLayoutProps extends LayoutProps {
  Component?: React.FunctionComponent<any>;
}

function FormLayout({
  Component = BasicLayout,
  title = '',
  children,
  ...props
}: FormLayoutProps) {
  return (
    <Component title={title} {...props}>
      <Box
        sx={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}
      >
        <Stack
          component={Paper}
          spacing={2}
          px={4}
          py={3}
          flexGrow={1}
          maxWidth="25em"
        >
          {children}
        </Stack>
      </Box>
    </Component>
  );
}

export default FormLayout;
