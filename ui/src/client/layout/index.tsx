'use client';
import { Menu } from '@org/ui';
import { Fragment, ReactNode, useEffect } from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { useLayout, useMenu } from '@org/store';
import { useLocale } from 'next-intl';

interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  const locale = useLocale();
  const toggleDirection = useLayout((s) => s.toggleDirection);

  useEffect(() => {
    toggleDirection(locale === 'en' ? 'ltr' : 'rtl');
  }, [locale]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const open = useMenu((s) => s.open);
  return (
    <Fragment>
      <Menu />
      <Box
        sx={(theme) => ({
          marginLeft: open ? (matches ? '0px' : '215px') : '50px',
          padding: '20px 0',
          transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        })}
      >
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </Fragment>
  );
};
