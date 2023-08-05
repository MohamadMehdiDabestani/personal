import PersonPinIcon from '@mui/icons-material/PersonPin';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import GamepadIcon from '@mui/icons-material/Gamepad';
import RssFeedIcon from '@mui/icons-material/RssFeed';
export const data = [
  {
    id: '1',
    href: '/',
    title: 'Aboute me',
    icon: <PersonPinIcon sx={{ marginRight: '5%' }} />,
  },
  {
    id: '2',
    href: '/blog',
    title: 'Blog',
    icon: <RssFeedIcon sx={{ marginRight: '5%' }} />,
    
  },
  {
    id: '3',
    href: '/weather',
    title: 'Weather app',
    icon: <ThermostatIcon sx={{ marginRight: '5%' }} />,
  },
  {
    id: '4',
    href: '/todo',
    title: 'To do app',
    icon: <FormatListNumberedRtlIcon sx={{ marginRight: '5%' }} />,
  },
  {
    id: '5',
    href: '/game',
    title: 'Tic tac toe',
    icon: <GamepadIcon sx={{ marginRight: '5%' }} />,
  },
];
