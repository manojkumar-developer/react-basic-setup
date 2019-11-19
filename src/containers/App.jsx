/*

AppContainer

*/
/** ****************************** Import packages *************************** */
import React, * as react from "react";
import { Route, Router, Switch } from "react-router-dom";
import './App.css';

/** ****************************** Import Amplify Auth *************************** */
// import { withAuthenticator } from 'aws-amplify-react'

/** ****************************** Import containers *************************** */
import Header from "./Header";
import Footer from "./Footer";

/** ****************************** Import components *************************** */
import TopBanner from "../components/TopBanner";

/** ****************************** Import pages *************************** */
import Home from "../pages/Home";
// import DonateAd from "../pages/DonateAd";
// import News from "../pages/News";
// import Blogs from "../pages/Blogs";
// import BlogDetails from "../pages/BlogDetails";
// import CharityList from "../pages/Charity-List";
// import CharityDetails from "../pages/Charity-Details";
// import Lottery from "../pages/Lottery";
// import LotteryLists from "../pages/LotteryLists";
// import LotteryDetails from "../pages/LotteryDetails";
// import Faq from "../pages/Faq";
// import ContactUs from "../pages/Contact-Us";
// import MyAccount from "../pages/MyAccount";
// import Login from "../pages/Login";
// import ForgetPassword from "../pages/Forget-Password";
// import Registration from "../pages/Registration";
// import Settings from "../pages/Settings";
// import NotFound from "../pages/Not-Found";

/** ****************************** Import utils *************************** */
import History from "../utils/History";
import PropsRoute from "../utils/PropsRoute";
import { deleteLocalUser } from "../utils/auth";

const DefaultLayout = ({ container, dataprops }) => (
  <div>
    <PropsRoute component={TopBanner} {...dataprops} />
    <PropsRoute component={Header} {...dataprops} />
    <div className="body-container">
      <PropsRoute component={container} {...dataprops} />
    </div>
    <PropsRoute component={Footer} {...dataprops} />
  </div>
);

const PrintLayout = ({ container, dataprops }) => (
  <div>
    <PropsRoute component={container} {...dataprops} />
  </div>
);

const BackdropLayout = ({ container, dataprops }) => (
  <div>
    <PropsRoute component={container} {...dataprops} />
  </div>
);

class App extends react.Component {

  constructor(props) {
    super(props);
    this.idleTimer = null;
    this.onIdle = this._onIdle.bind(this);
  }

  componentWillMount  () {
    console.log("hello manoj");
  }

  _onIdle() {
    deleteLocalUser();
    // Session.set("currentUserId", null);
    History.push("/login");
  }

  // render3 (){
  //   const props = this.props;
  //   return (
  //     <div className="App">
  //       <Router history={History}>
  //         <Switch>
  //           {/* Logo */}
  //           <Route
  //             exact
  //             path="/"
  //             render={() => <DefaultLayout container={Home} dataprops={props} />}
  //           />
  //           Home
  //           <Route
  //             exact
  //             path="/home"
  //             render={() => <DefaultLayout container={Home} dataprops={props} />}
  //           />    
  //           {/* Donate Ad */}
  //           <Route
  //             exact
  //             path="/donate-event/:id"
  //             render={() => <DefaultLayout container={DonateAd} dataprops={props} />}
  //           />
  //           {/* Login */} 
  //           <Route
  //             exact
  //             path="/login"
  //             render={() => <DefaultLayout container={Login} dataprops={props} />}
  //           />
  //           {/* Forget Password */}
  //           <Route
  //             exact
  //             path="/forget-password"
  //             render={() => <DefaultLayout container={ForgetPassword} dataprops={props} />}
  //           />
  //           {/* Registration */} 
  //           <Route
  //             exact
  //             path="/registration"
  //             render={() => <DefaultLayout container={Registration} dataprops={props} />}
  //           />
  //           {/* News */} 
  //           <Route
  //             exact
  //             path="/news"
  //             render={() => <DefaultLayout container={News} dataprops={props} />}
  //           />
  //           {/* Blogs */} 
  //           <Route
  //             exact
  //             path="/blog"
  //             render={() => <DefaultLayout container={Blogs} dataprops={props} />}
  //           />
  //           {/* Blog Details */} 
  //           <Route
  //             exact
  //             path="/blog/:id"
  //             render={() => <DefaultLayout container={BlogDetails} dataprops={props} />}
  //           />
  //           {/* Charity List */} 
  //           <Route
  //             exact
  //             path="/charity/list"
  //             render={() => <DefaultLayout container={CharityList} dataprops={props} />}
  //           />
  //           {/* Charity Details */} 
  //           <Route
  //             exact
  //             path="/charity/:id"
  //             render={() => <DefaultLayout container={CharityDetails} dataprops={props} />}
  //           />
  //           {/* My Account */}
  //           <Route
  //             exact
  //             path="/account/:page"
  //             render={() => <DefaultLayout container={MyAccount} dataprops={props} />}
  //           />
  //           {/* Settings */}
  //           <Route
  //             exact
  //             path="/settings/:page"
  //             render={() => (
  //               <DefaultLayout container={Settings} dataprops={props} />
  //             )}
  //           />
  //           {/* Lottery Lists  */}
  //           <Route
  //             exact
  //             path="/lottery-lists"
  //             render={() => <DefaultLayout container={LotteryLists} dataprops={props} />}
  //           />
  //           {/* Lottery */}
  //           <Route
  //             exact
  //             path="/lottery"
  //             render={() => <DefaultLayout container={Lottery} dataprops={props} />}
  //           />
  //           {/* Lottery Details */}
  //           <Route
  //             exact
  //             path="/lottery/:id"
  //             render={() => <DefaultLayout container={LotteryDetails} dataprops={props} />}
  //           />
  //           {/* FAQ  */}
  //           <Route
  //             exact
  //             path="/Faq"
  //             render={() => <DefaultLayout container={Faq} dataprops={props} />}
  //           />
  //           {/* Contact  */}
  //           <Route
  //             exact
  //             path="/contact"
  //             render={() => <DefaultLayout container={ContactUs} dataprops={props} />}
  //           />     
  //           {/* Not Found */}
  //           <Route
  //             render={() => <DefaultLayout container={NotFound} dataprops={props} />}
  //           />
  //         </Switch>
  //       </Router>
  //     </div>
  //   );
  // }

  render() {
    const {props} = this;
    return (
      <div className="App">
        <h1>Hello Manoj</h1>
        </div>
    );
  }
}

// export default withAuthenticator(App, { includeGreetings: true })

export default App;

