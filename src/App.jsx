import "./App.css";
import ProfileCard from "./ProfileCard";
import Footer from "./Footer";
import Names from "./Names";
import Counter from "./Counter";
import NameForm from "./NameForm";
import TodoListApp from "./TodoListApp";
import LoginStatus from "./LoginStatus";
import Details from "./Details";
import DemoEffect from "./DemoEffect";
import CounterWithTitle from "./CounterWithTitle";
import LiveClock from "./LiveClock";
import UserList from "./UserList";
import AutoFocusInput from "./AutoFocusInput";
import PreviousCounter from "./PreviousCounter";
import TimerApp from "./assets/TimerApp";
import SimpleTimer from "./SimpleTimer";
import UserContext from "./UserContext";
import ToggleLight from "./ToggleLight";
import TodoReducerSwitch from "./TodoReducerSwitch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./Client";
import ClientDetails from "./ClientDetails";
import React from "react";

function App() {
  // const user = {
  //   name: "Dinesh",
  //   role: "Frontend Developer",
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/client/:id" element={<ClientDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <UserContext.Provider value={user}>
        <TodoReducerSwitch />
      </UserContext.Provider> */}
    </>
  );
}

export default App;
