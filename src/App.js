import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsComponent from './Components/NewsComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<NewsComponent key={'general'} pageSize = {6} category = 'general'/>}/>
          <Route exact path="/business" element={<NewsComponent key={'business'} pageSize = {6} category = 'business'/>}/>
          <Route exact path="/entertainment" element={<NewsComponent key={'entertainment'} pageSize = {6} category = 'entertainment'/>}/>
          <Route exact path="/general" element={<NewsComponent key={'general'} pageSize = {6} category = 'general'/>}/>
          <Route exact path="/health" element={<NewsComponent key={'health'} pageSize = {6} category = 'health'/>}/>
          <Route exact path="/science" element={<NewsComponent key={'science'} pageSize = {6} category = 'science'/>}/>
          <Route exact path="/sports" element={<NewsComponent key={'sports'} pageSize = {6} category = 'sports'/>}/>
          <Route exact path="/technology" element={<NewsComponent key={'technology'} pageSize = {6} category = 'technology'/>}/>
        </Routes>
        </Router>
      </>
    )
  }
}

