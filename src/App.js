
import { BrowserRouter, 
  Routes, 
  Route
 } from "react-router-dom";
import Dean from "./Components/Dean/Dean";
import Test from "./Components/SignUp/sign_up";
import Navbar from "./Components/navbar";
import RecordList from "./Components/recordList";
import Create from "./Components/create";
import SignUp from "./Components/SignUp/SignUp";
import Administration from "./Pages/Administration/Administration";
import History from "./Pages/History/History";
import Home from "./Pages/Home/Home";
import Login from "./Components/SignUp/sign_in";
import Success from "./Components/SignUp/signup_success";
import Message from "./Pages/Message/Message";
import Main from "./Pages/Internal/Main";
import PostNews from "./Pages/Internal/PostNews";
import RemoveNews from "./Pages/Internal/RemoveNews";
import ViewUser from "./Pages/Internal/ViewUser";
import CreateUser from "./Pages/Internal/CreateUser";
import ActivateUser from "./Pages/Internal/ActivateUser";
import ChangePassword from "./Pages/Internal/ChangePassword";
import Logins from "./test/login"
import SiggnUp from "./Components/SignUp/index";
import SiggnIp from "./Components/SignIn/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/signips">
            <Route index element={
                <SiggnIp/>
            } />
          </Route>

          <Route path="/signups">
            <Route index element={
                <SiggnUp/>
            } />
          </Route>

        <Route path="/logins">
            <Route index element={
                <Logins/>
            } />
          </Route>
        <Route path="/Home/Other/Success">
            <Route index element={
                <Success/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/PostNews">
            <Route index element={
                <PostNews/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/RemoveNews">
            <Route index element={
                <RemoveNews/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/Account/list">
            <Route index element={
                <ViewUser/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/Account/Create">
            <Route index element={
                <CreateUser/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/Account/Activate">
            <Route index element={
                <ActivateUser/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/Account/ChangePassword">
            <Route index element={
                <ChangePassword/>
            } />
          </Route>
          <Route path="/Login/Internal/Main">
            <Route index element={
                <Main/>
            } />
          </Route>
          <Route path="/Home/Other/Navbar">
            <Route index element={
                <Navbar/>
            } />
          </Route>
          <Route path="/Home/Other/SignUp">
            <Route index element={
                <SignUp/>
            } />
          </Route>
          <Route path="/Home/Other/Edit">
            <Route index element={
                <Test/>
            } />
          </Route>
          <Route path="/Home/Other/Create">
            <Route index element={
                <Create/>
            } />
          </Route>
        <Route path="/Home/Other/List">
            <Route index element={
                <RecordList/>
            } />
          </Route>
          <Route path="/">
            <Route index element={
                <Home/>
            } />
          </Route>
          <Route path="/Home">
            <Route index element={
                <Home/>
            } />
          </Route>
          <Route path="/Home/AboutAGTC/History">
            <Route index element={
              <History/>
            }/>
          </Route>
          <Route path="/Home/AboutAGTC/Message">
            <Route index element={
              <Message/>
            }/>
          </Route>
          <Route path="/Home/Administration">
            <Route index element={
              <Administration/>
            }/>
          </Route>
          <Route path="/Home/Administration/Dean">
            <Route index element={
              <Dean/>
            }/>
          </Route>
          
          <Route path="/login">
            <Route index element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
