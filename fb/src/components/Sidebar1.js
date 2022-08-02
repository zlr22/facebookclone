import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import Switch from '@mui/material/Switch';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Sidebar1() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
              <ListItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Homepage"
                    secondary={secondary ? 'Secondary text' : null}
                  />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Friends"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
              <ListItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
            <ListItem>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText
              primary="Marketplace"
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
          <ListItem>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText
            primary="Profile"
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>
              <ListItem>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Groups"
                    secondary={secondary ? 'Secondary text' : null}
                  />
              </ListItem> 
              <ListItem>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Pages"
                    secondary={secondary ? 'Secondary text' : null}
                  />
              </ListItem>
              <ListItem>
              <Switch size="small"></Switch> <Switch></Switch>
              </ListItem>
              <ListItem>
              <Typography>
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              ㅤ
              </Typography>
              </ListItem>
              <ListItem>
              <Fab sx={{ bgcolor:'#32469e', color:'#FFFFFF',fontSize: 50 }}>
                <AddIcon></AddIcon>
              </Fab>
              </ListItem>
             
            </List>
          </Demo>
        </Grid>
        
      </Grid>
      </Box>
     
    
    
  );
}




