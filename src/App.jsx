import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

const link = {
  margin: '10px',
  padding: '2px',
}

const users = [
  {
    name: "José Maria",
    age: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Diluc",
    age: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Juan",
    age: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/counter" style={link}>Counter</Link>|
        <Link to="/profiles" style={link}>Profiles</Link>
      </nav>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/profiles"
          element={
            <div>
              {users.map((user, index) => (
                <UserProfile key={index} user={user} />
              ))}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
