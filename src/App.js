import React from "react";
import Calendar from "./class-components";
import MsgBox from "./class-prop";
import MsgBox2 from "./func-props";
import Banner from "./banner";
import { Calculator } from "./calculator";
import { EventObject } from "./event-data";
import Table from "./table";
import RefsFunc from "./refs-func";
import Order from "./refs-array";
import Cart from "./state-class";
import MessageBox from "./state-func";
import { userContext } from "./context";
// import Header from "./context-header";
// import Content from "./context-content";
import Header from "./context-header2";
import Content from "./context-content2";
import { Footer } from "./func-component";

import { DropDown as SearchBox } from "./dropdown";

function App() {
  let [user, setUser] = React.useState("");
  return (
    <userContext.Provider value={[user, setUser]}>
      <Header />
      <Content />
      <SearchBox />
      <p>
        <Calendar />
      </p>
     
      {/* <MsgBox2
        text="React & React Native"
        bgColor="#ccc"
        fontSize="18pt"
        border="solid 1px black"
      /> */}
      {/* <Calculator /> */}
      {/* <Table /> */}
      <Cart />
      <Order />
      <MessageBox />
      <EventObject />
      <RefsFunc />
      {/* <Banner /> */}
      <Footer />
    </userContext.Provider>
  );
}

export default App;
