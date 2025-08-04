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

import HorizontalBarChart from '../../content/Charts/HorizontalBarChart';
import { horizontalBarChart } from '../../constants/code/Charts/horizontalBarChartCode';

const HorizontalBarChartDemo = () => {
  const [showLegend, setShowLegend] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(2000);
  const [borderRadius, setBorderRadius] = useState(6);
  const [barWidth, setBarWidth] = useState(0.8);
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
      required: false,
      description: "Width of the chart container."
    },
    {
      name: "height",
      type: "string|number",
      required: false,
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
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
      bar: {
        borderRadius: borderRadius,
        barPercentage: barWidth
      }
    }
  };

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} overflow="hidden">
          <RefreshButton onClick={forceRerender} />
          <HorizontalBarChart
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
          />

          <PreviewSlider
            title="Border Radius"
            min={0}
            max={20}
            step={1}
            value={borderRadius}
            onChange={(val) => {
              setBorderRadius(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Bar Width"
            min={0.1}
            max={1}
            step={0.1}
            value={barWidth}
            onChange={(val) => {
              setBarWidth(val);
              forceRerender();
            }}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={["chart.js", "react-chartjs-2"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={horizontalBarChart} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...horizontalBarChart} />
      </CliTab>
    </TabbedLayout>
  );
};

export default HorizontalBarChartDemo; 