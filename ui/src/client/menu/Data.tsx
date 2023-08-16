import PersonPinIcon from '@mui/icons-material/PersonPin';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import GamepadIcon from '@mui/icons-material/Gamepad';
import RssFeedIcon from '@mui/icons-material/RssFeed';
export const data = [
  {
    id: '1',
    href: '/',
    title: 'aboutMe',
    icon: <PersonPinIcon sx={{ marginRight: '5%' }} />,
  },
  {
    id: '2',
    href: '/blog',
    title: 'blog',
    icon: <RssFeedIcon sx={{ marginRight: '5%' }} />,
    
  },

  {
    id: '4',
    href: '/todo',
    title: 'todoApp',
    icon: <FormatListNumberedRtlIcon sx={{ marginRight: '5%' }} />,
  },
  {
    id: '5',
    href: '/game',
    title: 'ticTacToe',
    icon: <GamepadIcon sx={{ marginRight: '5%' }} />,
  },
];
