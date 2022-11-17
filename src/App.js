import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme } from './components/Themes';
import GlobalStyle from './data/GlobalStyle';

// Components


import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import Work from './components/Work'
import MySkillsPage from './components/MySkillsPage'


function App() {
  return (
   
<>
<GlobalStyle />

<ThemeProvider theme={lightTheme}>

<Routes>

<Route exact path='/' element={<Main />} />
<Route exact path='/about' element={<AboutPage />} />
<Route exact path='/blog' element={<BlogPage />} />
<Route exact path='/work' element={<Work />} />
<Route exact path='/skills' element={<MySkillsPage />} />


</Routes>

</ThemeProvider>

</>
  
  );
}

export default App;
