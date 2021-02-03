import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import CreatePost from './components/CreatePost';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/PostComponent';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {PostComponent}></Route>
              <Route path = "/posts" component = {PostComponent}></Route>
              <Route path = "/create-post/:ops" component = {CreatePost}></Route>
              <Route path = "/view-post/:ops" component = {ViewPost}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
