import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Setting from "./Pages/Setting";
import AppLayOut from "./AppLayOut";
import Task from "./Pages/Task";
import DetailsTask from "./Pages/DetailsTask";
import Login from "./Pages/Login";
import Signup from "./ui/Signup";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayOut token={token} />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="user" element={<User />} />
              <Route path="task" element={<Task />} />
              <Route path="detailstask" element={<DetailsTask />} />
              <Route path="setting" element={<Setting />} />
            </Route>

            <Route
              path="login"
              element={<Login setToken={setToken} token={token} />}
            />

            <Route path="signup" element={<Signup setToken={setToken} />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
