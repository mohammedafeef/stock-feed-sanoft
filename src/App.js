import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
//importing the components
import { 
  Login,
  Register,
  StockList
} from './components/index';

import {
  Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <FullScreen>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/stock" component={StockList}/>
    </Switch>
    </FullScreen>
  );
}
const FullScreen =styled.div`
    width:100vw;
    height:100vh;
    overflow:hidden;
`
export default App;
