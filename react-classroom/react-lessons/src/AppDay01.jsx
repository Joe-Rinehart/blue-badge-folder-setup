import './App.css';
import Header from "./components/Day01-challenge/Header"
import AboutMe from './components/Day01-challenge/AboutMe';
import Studentinformation from './components/Day01-challenge/StudentInformation';
import Footer from './components/Day01-challenge/Footer';

function App() {
const welcomeName = "Joe"

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      <h2>We just modified our root App component</h2>
      {/* <p>This is a test</p>  */}
      <Header/>
      <AboutMe/>
      <Studentinformation studentName = "Pam" grade = "B" subject = "History"/>
      <Studentinformation studentName = "Tom" grade = "A" subject = "Science"/>
      <Studentinformation studentName = "Frank" grade = "F" subject = "Development"/>
      <Footer/>
    </div>
  );
}

export default App;