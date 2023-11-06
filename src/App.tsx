import { css } from "@emotion/react";
import styled from "@emotion/styled";
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

const borderStyle = css`
  border: 0.5px solid #ddd;
`;

const ContainerStyle = styled.div`
  position: relative;
  display: grid;
  grid-template:
    "title title table1 chart" minmax(auto,50px)
    "logo1 logo2 table1 chart" minmax(auto,100px)
    "section-side section-side section-main section-main" minmax(auto,50px)
    "side side main main" 1fr
    / 1fr 1fr 2fr 3fr;
    gap: 1px;
    height: 100vh;
    width: 100vw;
  font-family: "HackGen Console NF Regular";
  padding: 1%;
`

const TitleStyle = styled.div`
  grid-area: title;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo1Style = styled.div`
  grid-area: logo1;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo2Style = styled.div`
  grid-area: logo2;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TableStyle = styled.div`
  grid-area: table1;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChartStyle = styled.div`
  grid-area: chart;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SectionSideStyle = styled.div`
  grid-area: section-side;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SideStyle = styled.div`
  grid-area: side;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SectionMainStyle = styled.div`
  grid-area: section-main;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainStyle = styled.div`
  grid-area: main;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
    <ContainerStyle>
      <TitleStyle><Title /></TitleStyle>
      <Logo1Style><Logo /></Logo1Style>
      <Logo2Style><button type="button" onClick={() => {
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
      >ランダム</button></Logo2Style>
      <TableStyle><Table /></TableStyle>
      <ChartStyle><Chart data={data} /></ChartStyle>
      <SectionSideStyle><Section text="This is side" /></SectionSideStyle>
      <SideStyle><Side /></SideStyle>
      <SectionMainStyle><Section text="This is main" /></SectionMainStyle>
      <MainStyle><Main /></MainStyle>
    </ContainerStyle>
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
