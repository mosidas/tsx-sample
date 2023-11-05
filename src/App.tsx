import './App.css';
import Side from './Components/Side';
import Main from './Components/Main';
import Table from './Components/Table';
import Chart from './Components/Chart';
import Title from './Components/Title';
import Logo from './Components/Logo';
import Section from './Components/Section';

const App = (): JSX.Element => {

  return (
    <div className="container">
      <div className="title"><Title /></div>
      <div className="logo1"><Logo /></div>
      <div className="logo2"><Logo /></div>
      <div className="table"><Table /></div>
      <div className="chart"><Chart /></div>
      <div className="section-side"><Section text="This is side" /></div>
      <div className="side"><Side /></div>
      <div className="section-main"><Section text="This is main" /></div>
      <div className="main"><Main /></div>
    </div>
  );
};

export default App;
