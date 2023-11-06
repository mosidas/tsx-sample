import './App.css';
import { useState } from 'react';
import Side from './Components/Side';
import Main from './Components/Main';
import Table from './Components/Table';
import Chart from './Components/Chart';
import Title from './Components/Title';
import Logo from './Components/Logo';
import Section from './Components/Section';
import ChartModel from "./Models/ChartModel";

const labels: string[] = ["1", "2", "3", "4", "5", "6", "7"];
const colors: string[] = [ getRandomRgbaColor(), getRandomRgbaColor(), getRandomRgbaColor(), getRandomRgbaColor(), getRandomRgbaColor(), getRandomRgbaColor(), getRandomRgbaColor()];


const App = (): JSX.Element => {

  let initial_data : ChartModel[] = [
    {id: 1, labels: labels, data: getRandomData(labels), color: colors[0]},
    {id: 2, labels: labels, data: getRandomData(labels), color: colors[1]},
    {id: 3, labels: labels, data: getRandomData(labels), color: colors[2]},
    {id: 4, labels: labels, data: getRandomData(labels), color: colors[3]},
    {id: 5, labels: labels, data: getRandomData(labels), color: colors[4]},
    {id: 6, labels: labels, data: getRandomData(labels), color: colors[5]},
  ];
  const [data, setData] = useState(initial_data);


  return (
    <div className="container">
      <div className="title"><Title /></div>
      <div className="logo1"><Logo /></div>
      <div className="logo2"><button type="button" onClick={() => {
        let random_data :ChartModel[] = [
          {id: 1, labels: labels, data: getRandomData(labels), color: colors[0]},
          {id: 2, labels: labels, data: getRandomData(labels), color: colors[1]},
          {id: 3, labels: labels, data: getRandomData(labels), color: colors[2]},
          {id: 4, labels: labels, data: getRandomData(labels), color: colors[3]},
          {id: 5, labels: labels, data: getRandomData(labels), color: colors[4]},
          {id: 6, labels: labels, data: getRandomData(labels), color: colors[5]},
        ];
        setData(random_data);
      }}
      >ランダム</button></div>
      <div className="table"><Table /></div>
      <div className="chart"><Chart data={data} /></div>
      <div className="section-side"><Section text="This is side" /></div>
      <div className="side"><Side /></div>
      <div className="section-main"><Section text="This is main" /></div>
      <div className="main"><Main /></div>
    </div>
  );
};

function getRandomData(labels:string[]) : number[] {
  let data : number[] = [];
  for (let i = 0; i < labels.length; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
}

function getRandomRgbaColor() :string {
  // RGBAの各値をランダムに生成
  const r = Math.floor(Math.random() * 256); // 赤色の強さは0-255
  const g = Math.floor(Math.random() * 256); // 緑色の強さは0-255
  const b = Math.floor(Math.random() * 256); // 青色の強さは0-255
  const a = (Math.random() * 0.5 + 0.5).toFixed(2); // 不透明度は0.50-1.00 (小数点以下2桁に丸める)

  // `rgba(r, g, b, a)`の形式の文字列を返す
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default App;
