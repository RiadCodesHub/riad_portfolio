import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Projects.tsx";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Services from "./pages/Services.tsx";




interface LinkItem {
  id: string;
  title: string;
}

const navLinks: LinkItem[] = [
  { id:"home", title: "Home"},
  { id:"about", title: "About"},
  { id:"services", title: "Services"},
  { id:"projects", title: "Projects"},
];


export {navLinks, Header, Home, About,Services, ContactPage, Blog, Footer, Button,}