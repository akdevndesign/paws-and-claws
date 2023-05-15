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
import { setContext } from '@apollo/client/link/context';
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import "./styles/styles.css";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="application/:petId" element={<Application />} />
        <Route path="petProfile/:petId" element={<PetProfile />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="newPost" element={<NewPost />} />
        <Route path="editPost/:editPetId" element={<EditPost />} />
      </Routes>
      {location.pathname === "/" && <About />}
      <Outlet />
      <Footer />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </ApolloProvider>
  );
}

export default App;
