import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { memo, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const drawerWidth = 265;

const drawerLinks = [
  {
    label: 'Trang chủ',
    Icon: HomeIcon,
    href: '/',
  },
  {
    label: 'Vaccine',
    Icon: VaccinesOutlinedIcon,
    href: '/vaccine',
  },
  {
    label: 'Thế giới',
    Icon: LanguageOutlinedIcon,
    href: '/worldwide',
  },
  {
    label: 'Tin tức',
    Icon: FeedOutlinedIcon,
    href: '/news',
  },
  {
    label: 'Giới thiệu',
    Icon: InfoOutlinedIcon,
    href: '/about',
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function MiniDrawer({ children }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const times = useSelector((state) => ({
    home: state.home.homeFetchedAt,
    worldwide: state.worldwide.worldwideFetchedAt,
    vaccine: state.vaccine.vaccineFetchedAt,
    news: state.news.newsFetchedAt,
  }));
  const time = useMemo(() => {
    const route = pathname.split('/')[1] || 'home';
    if (!times[route]) return null;
    return dayjs(Number(times[route])).format('D/M/YYYY HH:mm');
  }, [pathname, times]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleReload = () => {
    navigate(0);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ pl: '4px' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ userSelect: 'none', fontWeight: 'bold' }}
          >
            Covid-19 Tracker
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {time && <Typography>Cập nhật lần cuối: {time}</Typography>}
          <IconButton sx={{ ml: 2 }} onClick={handleReload}>
            <ReplayIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerLinks.map(({ href, label, Icon }) => (
            <Link to={href} key={label}>
              <ListItem
                button
                selected={pathname === href}
                sx={{
                  background:
                    pathname === href
                      ? `${theme.palette.primary.main} !important`
                      : '',
                }}
              >
                <ListItemIcon sx={{ pl: 1 }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default memo(MiniDrawer);
