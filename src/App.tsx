/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Side from "./Components/Side";
import Main from "./Components/Main";
import Table from "./Components/Table";
import Chart from "./Components/Chart";
import Title from "./Components/Title";
import Logo from "./Components/Logo";
import Section from "./Components/Section";
import ChartModel from "./Models/ChartModel";

const labels: string[] = ["1", "2", "3", "4", "5", "6", "7"];
const colors: string[] = [
  getRandomRgbaColor(),
  getRandomRgbaColor(),
  getRandomRgbaColor(),
  getRandomRgbaColor(),
  getRandomRgbaColor(),
  getRandomRgbaColor(),
  getRandomRgbaColor(),
];

const container = css`
  position: relative;
  display: grid;
  grid-template:
    "title title table1 chart" minmax(auto, 40px)
    "logo1 logo2 table1 chart" minmax(auto, 100px)
    "section-side section-side section-main section-main" minmax(auto, 40px)
    "side side main main" 1fr
    / minmax(140px, 1fr) minmax(140px, 1fr) 2fr 3fr;
  gap: 3px;
  height: 100vh;
  width: 100vw;
  font-family: "HackGen Console NF Regular";
  padding: 2%;
`;

const title = css`
  grid-area: title;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logo1 = css`
  grid-area: logo1;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logo2 = css`
  grid-area: logo2;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const table = css`
  grid-area: table1;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const chart = css`
  grid-area: chart;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const sectionSide = css`
  grid-area: section-side;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const side = css`
  grid-area: side;
  border: 1px solid #e0e0e0;
  overflow-y: auto;
`;

const sectionMain = css`
  grid-area: section-main;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const main = css`
  grid-area: main;
  border: 1px solid #e0e0e0;
  overflow-y: auto;
`;
const App = (): JSX.Element => {
  const initial_data: ChartModel[] = [
    { id: 1, labels: labels, data: getRandomData(labels), color: colors[0] },
    { id: 2, labels: labels, data: getRandomData(labels), color: colors[1] },
    { id: 3, labels: labels, data: getRandomData(labels), color: colors[2] },
    { id: 4, labels: labels, data: getRandomData(labels), color: colors[3] },
    { id: 5, labels: labels, data: getRandomData(labels), color: colors[4] },
    { id: 6, labels: labels, data: getRandomData(labels), color: colors[5] },
  ];
  const [data, setData] = useState(initial_data);
  const [graphKey, setGraphKey] = useState(0);

  const onClickRandom = () => {
    const random_data: ChartModel[] = [
      { id: 1, labels: labels, data: getRandomData(labels), color: colors[0] },
      { id: 2, labels: labels, data: getRandomData(labels), color: colors[1] },
      { id: 3, labels: labels, data: getRandomData(labels), color: colors[2] },
      { id: 4, labels: labels, data: getRandomData(labels), color: colors[3] },
      { id: 5, labels: labels, data: getRandomData(labels), color: colors[4] },
      { id: 6, labels: labels, data: getRandomData(labels), color: colors[5] },
    ];
    setData(random_data);
    setGraphKey((prevKey) => (Number.MAX_SAFE_INTEGER ? 0 : prevKey + 1));
  };

  return (
    <div css={container}>
      <div css={title}>
        <Title />
      </div>
      <div css={logo1}>
        <Logo />
      </div>
      <div css={logo2}>
        <button type="button" onClick={onClickRandom}>
          ランダム
        </button>
      </div>
      <div css={table}>
        <Table />
      </div>
      <div css={chart}>
        <Chart key={graphKey} data={data} />
      </div>
      <div css={sectionSide}>
        <Section text="This is side" />
      </div>
      <div css={side}>
        <Side />
      </div>
      <div css={sectionMain}>
        <Section text="This is main" />
      </div>
      <div css={main}>
        <Main />
      </div>
    </div>
  );
};

function getRandomData(labels: string[]): number[] {
  const data: number[] = [];
  for (let i = 0; i < labels.length; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
}

function getRandomRgbaColor(): string {
  // RGBAの各値をランダムに生成
  const r = Math.floor(Math.random() * 256); // 赤色の強さは0-255
  const g = Math.floor(Math.random() * 256); // 緑色の強さは0-255
  const b = Math.floor(Math.random() * 256); // 青色の強さは0-255
  const a = (Math.random() * 0.5 + 0.5).toFixed(2); // 不透明度は0.50-1.00 (小数点以下2桁に丸める)

  // `rgba(r, g, b, a)`の形式の文字列を返す
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default App;
