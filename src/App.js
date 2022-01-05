import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import Loading from "./components/loading";
import { useSelector } from "react-redux";
import store from "./helpers/store";
import Menu from "./components/menu";

const Home = lazy(() => import("./screens/home"));
const Login = lazy(() => import("./screens/login"));



const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {isAuthenticated} = useSelector(state => state.session);
  return <Route
  {...rest}
  render={props =>
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    )
  }
/>
};

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
     
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
        <Menu />
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Provider>
      </Suspense>
  
    </Router>
  );
}

export default App;
