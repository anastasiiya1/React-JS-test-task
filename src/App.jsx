import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";

import { SideBar } from "./components/SideBar/SideBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MyCalendar from "./components/MyCalendar/MyCalendar";

const Placeholder = ({ pageName }) => (
  <div className={styles.mockPage}>
    <h1>{pageName} Page </h1>
    <p>This is a placeholder page. Content will be added later.</p>
  </div>
);

function App() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.mainContainer}>
        <SearchBar />
        <Routes>
          <Route path="/home" element={<Placeholder pageName="Home" />} />
          <Route
            path="/dashboard"
            element={<Placeholder pageName="Dashboard" />}
          />
          <Route path="/inbox" element={<Placeholder pageName="Inbox" />} />
          <Route
            path="/products"
            element={<Placeholder pageName="Products" />}
          />
          <Route
            path="/invoices"
            element={<Placeholder pageName="Invoices" />}
          />
          <Route
            path="/customers"
            element={<Placeholder pageName="Customers" />}
          />
          <Route
            path="/chatroom"
            element={<Placeholder pageName="Chat Room" />}
          />
          <Route path="/" element={<MyCalendar />} />
          <Route
            path="/helpcenter"
            element={<Placeholder pageName="Help Center" />}
          />
          <Route
            path="/settings"
            element={<Placeholder pageName="Settings" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
