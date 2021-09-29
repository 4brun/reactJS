import Main from "./components/Main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatList from "./components/ChatList/ChatList";
import Profile from "./components/Profile/Profile";
import { Box, Button, Container } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


function App() {

  return (
    <div className="App">
      <Router>
        <Container maxWidth="md">
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <Button startIcon={<HomeIcon />} href="/" >Home</Button>
            <Button startIcon={<ChatIcon />} href="/chats">Chats</Button>
            <Button startIcon={<PermIdentityIcon />} href="/profile">Profile</Button>
          </Box>

          <Route exact path="/" component={Main} />
          <Route path="/chats" component={ChatList} />
          <Route path="/profile" component={Profile} />
        </Container >
      </Router>
    </div>
  );
}

export default App;
