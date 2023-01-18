// import logo from './logo.svg';
import './App.css';
import Headings from './components/Headings';
import SkillsBar from './components/SkillsBar';
import Sections from './components/Sections';

function App() {
  return (
    <div className="App">
      {/* <Headings text='Full Stack Developer | Labmin' start='2020 - ' end='Current'/>
      <Headings text='Photographer | Model Co Cape Town'/>

      <SkillsBar percent='60' /> */}

      {/* <SkillsBar percent='20' /> */}
      <Sections width='350'>
        465
      </Sections>
      <Sections width='650'/>
      <Sections width='350'/>
    </div>

    
  );
}

export default App;
