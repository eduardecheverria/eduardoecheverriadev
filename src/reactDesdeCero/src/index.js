import './styles.css'
import React from "react"
import * as ReactDom from "react-dom/client"
import App from './App.js'

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />)