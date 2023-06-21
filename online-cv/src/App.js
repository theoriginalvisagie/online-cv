// import logo from './logo.svg';
import './App.css';
import Headings from './components/Headings';
import SkillsBar from './components/SkillsBar';
import Sections from './components/Sections';

function App() {
  const techStack = [
    {id: 1, name: "PHP", percent: '60'},
    {id: 2, name: "MySQL", percent: '60'},
    {id: 3, name: "JavaScript", percent: '45'},
    {id: 4, name: "Ajax", percent: '40'},
    {id: 5, name: "HTML", percent: '65'},
    {id: 6, name: "Angular", percent: '25'},
    {id: 7, name: "C# / .NET", percent: '20'},
    {id: 8, name: "React", percent: '35'},
    {id: 9, name: "Bootstrap", percent: '80'},

  ];
  
  return (
    <div className="App">
      <Sections width='350'>
        
      {techStack.map(function(data) {
        return (
          <SkillsBar key={data.id} data={data}/>
        )
      })}
      </Sections>

      <Sections width='650' >1234</Sections>
      <Sections width='350' >12312</Sections>
    </div>

    
  );
}

export default App;
