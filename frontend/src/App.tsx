import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { useAuth } from "./hooks/useAuth";
import EULA from "./pages/EULA";
import Home from "./pages/Home";
import { MyPosts } from "./pages/MyPosts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Profile } from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useAuth();
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <p>Loading...</p>;
  return user ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <SignIn />
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="feed"
            element={
              <>
                <PublicRoute>
                  <Home />
                </PublicRoute>
              </>
            }
          />
          <Route
            path="my-posts"
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/eula" element={<EULA />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
