import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from "./components/header/Header.jsx"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import {TemplateProvider} from './templates/TemplateProvider.js'
import ContextProvider from './context/contextProvider.jsx'
import Cards from './components/cards/Cards.jsx';


function App() {
  return (   
    
    <TemplateProvider>
    <ContextProvider> 
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Cards />
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>


  );
}

export default App;
