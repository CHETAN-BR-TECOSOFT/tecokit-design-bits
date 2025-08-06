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

import PieChart from '../../content/Charts/PieChart';
import { pieChart } from '../../constants/code/Charts/pieChartCode';

const PieChartDemo = () => {
  const [showLegend, setShowLegend] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(2000);
  const [borderWidth, setBorderWidth] = useState(2);
  const [cutout, setCutout] = useState(0);
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
    labels: ['Windows', 'OS X', 'Linux', 'Chrome OS', 'Other'],
    datasets: [{
      label: 'Desktop OS Market Share',
      data: [72.72, 16.38, 3.83, 2.42, 4.65],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)'
      ],
      borderWidth: borderWidth
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
      arc: {
        borderWidth: borderWidth
      }
    },
    cutout: `${cutout}%`
  };



  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} overflow="hidden">
          <RefreshButton onClick={forceRerender} />
          <PieChart
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
            title="Border Width"
            min={0}
            max={10}
            step={1}
            value={borderWidth}
            onChange={(val) => {
              setBorderWidth(val);
              forceRerender();
            }}
            displayValue={(val) => `${val}px`}
          />

          <PreviewSlider
            title="Cutout (Donut)"
            min={0}
            max={80}
            step={5}
            value={cutout}
            onChange={(val) => {
              setCutout(val);
              forceRerender();
            }}
            displayValue={(val) => `${val}%`}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={["chart.js", "react-chartjs-2"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={pieChart} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...pieChart} />
      </CliTab>
    </TabbedLayout>
  );
};

export default PieChartDemo; 