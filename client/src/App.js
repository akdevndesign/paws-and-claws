import Footer from "./pages/Footer";
import Header from "./pages/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import PetProfile from "./pages/PetProfile";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { Routes, Route, Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "./styles/styles.css";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="petProfile" element={<PetProfile />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Header />
      <Outlet />
      <Footer />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </ApolloProvider>
  );
}

export default App;
