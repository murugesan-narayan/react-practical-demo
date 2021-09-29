//import logo from './logo.svg';
import "./App.css";
//import BarChartDemo from "./components/charts/BarChartDemo";
import DoughnutChartDemo from "./components/charts/DoughnutChartDemo";
// import LineChartDemo from "./components/charts/LineChartDemo";
// import ReactSpinnersDemo from "./components/react-spinners-demo";
// import ReactPlayerDemo from "./components/react-player-demo";
// import ReactDatepickerDemo from "./components/react-date-picker-demo";
// import ReactCreditCardsDemo from "./components/react-credit-cards-demo";
// import ReactColorDemo from "./components/react-color-demo";
// import ReactIdleTimerDemo from "./components/react-idle-timer-demo";
// import ReactCountupDemo from "./components/react-countup-demo";
// import ReactTippyDemo from "./components/react-tippy-demo";
// import ReactModalDemo from "./components/react-modal-demo";
// import ReactToastifyDemo from "./components/react-toastify-demo";
//import ReactIconsDemo from "./components/react-icons-demo";

function App() {
  return (
    <div className="App">
      {/* <ReactIconsDemo /> */}
      {/* <ReactToastifyDemo /> */}
      {/* <ReactModalDemo /> */}
      {/* <ReactTippyDemo /> */}
      {/* <ReactCountupDemo /> */}
      {/* <ReactIdleTimerDemo /> */}
      {/* <ReactColorDemo /> */}
      {/* <ReactCreditCardsDemo /> */}
      {/* <ReactDatepickerDemo /> */}
      {/* <ReactPlayerDemo /> */}
      {/* <ReactSpinnersDemo /> */}
      <div className="chart">
        {/* <LineChartDemo /> */}
        {/* <BarChartDemo /> */}
        <DoughnutChartDemo />
      </div>
    </div>
  );
}

export default App;
