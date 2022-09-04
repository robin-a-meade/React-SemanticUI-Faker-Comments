import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import api from "./api";
import App from "./App";
import './style/App.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);