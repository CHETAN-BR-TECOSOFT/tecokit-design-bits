import { useState } from "react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import PreviewSwitch from "../../components/common/Preview/PreviewSwitch";
import Customize from "../../components/common/Preview/Customize";
import PreviewSlider from "../../components/common/Preview/PreviewSlider";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/Preview/PropTable";
import CliInstallation from "../../components/code/CliInstallation";
import RefreshButton from "../../components/common/Preview/RefreshButton";

import AreaChart from '../../content/Charts/AreaChart';
import { areaChart } from '../../constants/code/Charts/areaChartCode';

const AreaChartDemo = () => {
  const [showLegend, setShowLegend] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(2000);
  const [lineTension, setLineTension] = useState(0.4);
  const [pointRadius, setPointRadius] = useState(4);
  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "data",
      type: "object",
      required: true,
      description: "Chart data object with labels and datasets arrays."
    },
    {
      name: "options",
      type: "object",
      required: false,
      description: "Chart.js configuration options for customization."
    },
    {
      name: "width",
      type: "string|number",
      default: "100%",
      description: "Width of the chart container."
    },
    {
      name: "height",
      type: "string|number",
      default: "400px",
      description: "Height of the chart container."
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS class for styling."
    }
  ];

  const sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Desktop',
        data: [186, 305, 237, 73, 209, 214],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: true,
        tension: lineTension
      },
      {
        label: 'Mobile',
        data: [80, 200, 120, 190, 130, 140],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        fill: true,
        tension: lineTension
      }
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: showLegend
      }
    },
    animation: {
      duration: animationDuration
    },
    elements: {
      line: {
        tension: lineTension
      },
      point: {
        radius: pointRadius
      }
    }
  };

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} overflow="hidden">
          <RefreshButton onClick={forceRerender} />
          <AreaChart
            key={key}
            data={sampleData}
            options={chartOptions}
            height="350px"
          />
        </Box>

        <Customize>
          <PreviewSwitch 
            title="Show Legend" 
            isChecked={showLegend} 
            onChange={(checked) => { 
              setShowLegend(checked); 
              forceRerender(); 
            }} 
          />

          <PreviewSlider
            title="Animation Duration"
            min={500}
            max={5000}
            step={100}
            value={animationDuration}
            onChange={(val) => {
              setAnimationDuration(val);
              forceRerender();
            }}
            displayValue={(val) => `${val}ms`}
          />

          <PreviewSlider
            title="Line Tension"
            min={0}
            max={1}
            step={0.1}
            value={lineTension}
            onChange={(val) => {
              setLineTension(val);
              forceRerender();
            }}
            displayValue={(val) => `${val}`}
          />

          <PreviewSlider
            title="Point Radius"
            min={0}
            max={10}
            step={1}
            value={pointRadius}
            onChange={(val) => {
              setPointRadius(val);
              forceRerender();
            }}
            displayValue={(val) => `${val}px`}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={["chart.js", "react-chartjs-2"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={areaChart} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...areaChart} />
      </CliTab>
    </TabbedLayout>
  );
};

export default AreaChartDemo; 