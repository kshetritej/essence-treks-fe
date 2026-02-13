import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage";
import CardDetails from "../pages/CardDetails";
import ContactUs from "../pages/ContactUs";
import Blog from "../pages/Blog";
import BlogDetails from "../Components/BlogDetails";
import Offerings from "../pages/Offerings";
import Trekkigns from "../pages/Trekkings";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../Components/Services";
import Gallery from "../pages/Gallery";

// Service loader function
const serviceLoader = async ({ params }) => {
  const response = await fetch('/services.json');
  const services = await response.json();
  return services.find(service => service.id === params.id);
};

// Trek loader function
const trekLoader = async ({ params }) => {
  const response = await fetch('/cards.json');
  const treks = await response.json();
  return treks.find(trek => trek.id === params.id);
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/offering", element: <Offerings /> },
      { path: "/trekking", element: <Trekkigns /> },
      { path: "/details/:id", element: <CardDetails />, loader: trekLoader },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <ServiceDetails />, loader: serviceLoader },
      { path: "/gallery", element: <Gallery /> },
    ],
  },
]);

export default router;