'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-intl/client';
import { MouseEvent, useState } from 'react';
import { usePathname } from 'next-intl/client';
import { Menu, MenuItem, Typography } from '@mui/material';
import { Locales } from './Locales';
import { useLocale } from 'next-intl';
export const LocalesMenu = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  
  const [anchorLanguageEl, setAnchorLanguageEl] = useState<null | HTMLElement>(
    null
  );
  const handleLanguageClose = (lang: string | undefined) => {
    if (typeof lang == 'string' && locale !== lang) {
      push(pathname, { locale: lang });
    }
    setAnchorLanguageEl(null);
  };
  const lnguageOpen = Boolean(anchorLanguageEl);
  const handleLanguageClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorLanguageEl(event.currentTarget);
  };

  return (
    <MenuItem>
      <Typography
        onClick={handleLanguageClick}
        sx={{ width: '100%', height: '100%' }}
      >
        Language
      </Typography>
      <Menu
        anchorEl={anchorLanguageEl}
        open={lnguageOpen}
        onClose={() => handleLanguageClose(undefined)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <Locales handleClose={handleLanguageClose} />
      </Menu>
    </MenuItem>
  );
};
