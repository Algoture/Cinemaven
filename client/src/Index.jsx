import Login from "../src/pages/Login";
import Nav from './components/Nav';
import CarouselM from './components/Carousel/CarouselM';
import LandingPage from './pages/LandingPage'
import Register from "../src/pages/Register";
import Cinemaven from "../src/pages/Cinemaven";
import toast, { Toaster } from "react-hot-toast";
import { firebaseAuth } from "./utils/firebase";
import { useState ,useEffect} from "react";
import {
  NavLink,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signOut,
} from "firebase/auth";
import Favourite from "./pages/Favourite";
import Profile from "./pages/Profile";







// Exportation :
export {
  Profile,
  Favourite,
  LandingPage,
  CarouselM,
  Nav,
  useEffect,
  Cinemaven,
  createBrowserRouter,
  RouterProvider,
  Login,
  Register,
  useState,
  NavLink,
  toast,
  Toaster,
  useNavigate,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  firebaseAuth,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  signOut,
};
