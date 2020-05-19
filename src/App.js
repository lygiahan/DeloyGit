import React, { useEffect }  from 'react';
import {BrowserRouter as Router, Switch,Route,useHistory} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Header from './layout/Header';
import PageNotFound from './pages/PageNotFound';
import CourseDetail from './pages/CourseDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import {connect,useDispatch} from 'react-redux';
import { ReduxThunk, actUserLogin } from './actions/creator';
import { USER_LOGIN, ADMIN_LOGIN } from './actions/type';
import Profile from './Users/profile';
import PrivateRoute from './PrivateRoute';
import Home from './Admin/Home';

function App(props){
   const dispatch =useDispatch();
   useEffect(()=>{
      let maloai = localStorage.getItem("maloai");
      let userlogin =JSON.parse(localStorage.getItem("userlogin"))
      let token = localStorage.getItem("token")
      let adminlogin = JSON.parse(localStorage.getItem("adminlogin"))
      if( maloai ==="HV" && token){
         dispatch(ReduxThunk(USER_LOGIN,userlogin))

      }else{
         dispatch(ReduxThunk(ADMIN_LOGIN,adminlogin))

      }
   },[])
  
   return(
      <Router>
         <Header />
         <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/detail/:id' component={CourseDetail}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/profile/edit'component={Profile}/>
            {/* <Route exact path='*' component={PageNotFound}/> */}
            <PrivateRoute exact path='/admin' component={Home}/>
         </Switch>
      </Router>
   )
    

}
const mapStateToProps = (state)=>({
   logout:state.UserReducer.logout
})
export default connect(mapStateToProps)(App);
