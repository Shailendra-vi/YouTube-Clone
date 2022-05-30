import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import { Box } from '@mui/material';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import './app.css';


const App = () => {


  return (
    <Router>
      <Box sx={{ p: 1 }}>
        <Box sx={{display: 'flex', borderBottom: '1px solid #e3e3e3',  width: "100%", background: 'white'}}>
        <Navbar />
        <SearchBar classname='searchBar'/>
        </Box>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route path='/video-details/:id' component={VideoDetail} />
          <Route path='/search' component={SearchFeed} />
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
