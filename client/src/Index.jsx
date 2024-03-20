import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Cinemaven from "../src/pages/Cinemaven";
import Home from "../src/pages/Home";
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
  signOut,
} from "firebase/auth";

// Exportation :
export {
  Home,
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
  signInWithEmailAndPassword,
  signOut,
};
