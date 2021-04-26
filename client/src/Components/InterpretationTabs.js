import React, {
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  chakra,
  useTab,
  useStyles,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Flex,
  TableCaption,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LineChart } from "@carbon/charts-react";
import { AreaChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

const InterpretationTabs = ({ isAuth }) => {
  // 1. Reuse the styles for the Tab
  const StyledTab = chakra("button", { themeKey: "Tabs.Tab" });
  const [lineData, setLineData] = useState([
    {
      group: "Dataset 1",
      date: "2018-12-31T18:30:00.000Z",
      value: 50000,
      surplus: 622393868.852775,
    },
    {
      group: "Dataset 1",
      date: "2019-01-04T18:30:00.000Z",
      value: 65000,
      surplus: 174902233.73422626,
    },
    {
      group: "Dataset 1",
      date: "2019-01-07T18:30:00.000Z",
      value: null,
      surplus: 13341.51900843299,
    },
    {
      group: "Dataset 1",
      date: "2019-01-12T18:30:00.000Z",
      value: 49213,
      surplus: 246426975.96469542,
    },
    {
      group: "Dataset 1",
      date: "2019-01-16T18:30:00.000Z",
      value: 51213,
      surplus: 464641246.0382326,
    },
    {
      group: "Dataset 2",
      date: "2019-01-01T18:30:00.000Z",
      value: 0,
      surplus: 13434.409794747015,
    },
    {
      group: "Dataset 2",
      date: "2019-01-05T18:30:00.000Z",
      value: 57312,
      surplus: 148784814.206981,
    },
    {
      group: "Dataset 2",
      date: "2019-01-07T18:30:00.000Z",
      value: 27432,
      surplus: 269301119.40581936,
    },
    {
      group: "Dataset 2",
      date: "2019-01-14T18:30:00.000Z",
      value: 70323,
      surplus: 1398488942.1035824,
    },
    {
      group: "Dataset 2",
      date: "2019-01-18T18:30:00.000Z",
      value: 21300,
      surplus: 101776913.98435456,
    },
    {
      group: "Dataset 3",
      date: "2018-12-31T18:30:00.000Z",
      value: 40000,
      surplus: 271760791.0092461,
    },
    {
      group: "Dataset 3",
      date: "2019-01-04T18:30:00.000Z",
      value: null,
      surplus: 1308.0759917454,
    },
    {
      group: "Dataset 3",
      date: "2019-01-07T18:30:00.000Z",
      value: 18000,
      surplus: 442124481.8488038,
    },
    {
      group: "Dataset 3",
      date: "2019-01-12T18:30:00.000Z",
      value: 39213,
      surplus: 408448681.8081104,
    },
    {
      group: "Dataset 3",
      date: "2019-01-16T18:30:00.000Z",
      value: 61213,
      surplus: 244148270.5412035,
    },
    {
      group: "Dataset 4",
      date: "2019-01-01T18:30:00.000Z",
      value: 20000,
      surplus: 465441922.7013382,
    },
    {
      group: "Dataset 4",
      date: "2019-01-05T18:30:00.000Z",
      value: 37312,
      surplus: 261638608.65722412,
    },
    {
      group: "Dataset 4",
      date: "2019-01-07T18:30:00.000Z",
      value: 51432,
      surplus: 1149952890.6136234,
    },
    {
      group: "Dataset 4",
      date: "2019-01-14T18:30:00.000Z",
      value: 25332,
      surplus: 62792241.94499425,
    },
    {
      group: "Dataset 4",
      date: "2019-01-18T18:30:00.000Z",
      value: null,
      surplus: 17097.15522041071,
    },
  ]);

  const [lineOptions, setLineOptions] = useState({
    title: "Model Interpretation",
    axes: {
      bottom: {
        title: "2019 Annual Sales Figures",
        mapsTo: "date",
        scaleType: "time",
      },
      left: {
        mapsTo: "value",
        title: "Conversion rate",
        scaleType: "linear",
      },
    },
    curve: "curveMonotoneX",
    height: "400px",
  });

  const CustomTab = React.forwardRef((props, ref) => {
    // 2. Reuse the `useTab` hook
    const tabProps = useTab(props);

    const isSelected = !!tabProps["aria-selected"];

    // 3. Hook into the Tabs `size`, `variant`, props
    let styles = useStyles();
console.log("styles tab====",styles);
    styles["tab"]._selected["border"] = "1px solid";
    //styles["tab"]._selected["borderRight"] = "0";
    styles["tab"]._selected["borderColor"] = "blackAlpha.900";
    styles["tab"].color = "messenger.500";
    styles["tab"]._selected["color"] = "blackAlpha.900";
    styles["tab"].border = "1px solid";
    styles["tab"]["borderColor"] = "messenger.500";
    styles["tablist"]["border"] = "0";
    //styles['tab']._selected['borderColor'] = "red";
    //console.log("tab props====", styles.tab);
    return (
      <StyledTab __css={styles.tab} {...tabProps}>
        {tabProps.children}
      </StyledTab>
    );
  });

  return (
    <Tabs align="end" size="sm">
      <TabList mr={3}>
        <CustomTab>Variable Importance</CustomTab>
        <CustomTab>Shap Summary</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box>
            <LineChart data={lineData} options={lineOptions}></LineChart>
          </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <AreaChart
			data={lineData}
			options={lineOptions}>
		</AreaChart>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InterpretationTabs;
