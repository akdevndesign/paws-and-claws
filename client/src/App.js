import Footer from "./pages/Footer";
import Header from "./pages/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Application from "./pages/Application";
import PetProfile from "./pages/PetProfile";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import { Routes, Route, Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./styles/styles.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="application/:petId" element={<Application />} />
        <Route path="petProfile/:petId" element={<PetProfile />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="newPost" element={<NewPost />} />
        <Route path="editPost/:editPetId" element={<NewPost />} />
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
