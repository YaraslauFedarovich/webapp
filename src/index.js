import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./layout/Layout"
import { BrowserRouter } from "react-router-dom"
import { createDogsStore } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createDogsStore()

root.render(<Provider store={store}>
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
</Provider>)