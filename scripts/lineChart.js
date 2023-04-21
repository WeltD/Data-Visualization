const data = [
  {
    time: "2016-01",
    CPIH: 0.6,
    Electricity: -0.2,
    Gas: -6.0,
    Food: -2.6,
    House: 7.8,
    Fuel: -7.3,
    Railway: 0.7,
    Rental: 2.6,
  },
  {
    time: "2016-02",
    CPIH: 0.6,
    Electricity: -0.2,
    Gas: -6.0,
    Food: -2.2,
    House: 7.7,
    Fuel: -7.3,
    Railway: -0.4,
    Rental: 2.6,
  },
  {
    time: "2016-03",
    CPIH: 0.8,
    Electricity: -0.2,
    Gas: -6.0,
    Food: -2.8,
    House: 8.4,
    Fuel: -9.2,
    Railway: 1.7,
    Rental: 2.6,
  },
  {
    time: "2016-04",
    CPIH: 0.7,
    Electricity: -0.2,
    Gas: -7.3,
    Food: -2.5,
    House: 7.9,
    Fuel: -7.5,
    Railway: -0.2,
    Rental: 2.6,
  },
  {
    time: "2016-05",
    CPIH: 0.7,
    Electricity: -0.2,
    Gas: -6.7,
    Food: -2.8,
    House: 8.0,
    Fuel: -6.8,
    Railway: 0.6,
    Rental: 2.5,
  },
  {
    time: "2016-06",
    CPIH: 0.8,
    Electricity: -0.2,
    Gas: -6.7,
    Food: -3.0,
    House: 8.2,
    Fuel: -5.5,
    Railway: -1.8,
    Rental: 2.4,
  },
  {
    time: "2016-07",
    CPIH: 0.9,
    Electricity: -0.2,
    Gas: -6.6,
    Food: -2.6,
    House: 7.5,
    Fuel: -4.3,
    Railway: -0.6,
    Rental: 2.4,
  },
  {
    time: "2016-08",
    CPIH: 1.0,
    Electricity: -0.2,
    Gas: -6.6,
    Food: -2.2,
    House: 6.5,
    Fuel: -2.6,
    Railway: -0.5,
    Rental: 2.3,
  },
  {
    time: "2016-09",
    CPIH: 1.3,
    Electricity: -0.2,
    Gas: -4.6,
    Food: -2.3,
    House: 6.1,
    Fuel: 1.4,
    Railway: 0.2,
    Rental: 2.3,
  },
  {
    time: "2016-10",
    CPIH: 1.3,
    Electricity: -0.2,
    Gas: -4.6,
    Food: -2.4,
    House: 5.6,
    Fuel: 4.7,
    Railway: 0.0,
    Rental: 2.3,
  },
  {
    time: "2016-11",
    CPIH: 1.5,
    Electricity: -0.2,
    Gas: -4.6,
    Food: -2.1,
    House: 5.3,
    Fuel: 7.4,
    Railway: 0.2,
    Rental: 2.3,
  },
  {
    time: "2016-12",
    CPIH: 1.8,
    Electricity: -0.2,
    Gas: -4.6,
    Food: -1.1,
    House: 5.2,
    Fuel: 10.0,
    Railway: 1.1,
    Rental: 2.3,
  },
  {
    time: "2017-01",
    CPIH: 1.9,
    Electricity: -0.2,
    Gas: -5.1,
    Food: -0.5,
    House: 4.8,
    Fuel: 16.8,
    Railway: 2.3,
    Rental: 2.2,
  },
  {
    time: "2017-02",
    CPIH: 2.3,
    Electricity: -0.2,
    Gas: -4.4,
    Food: 0.2,
    House: 4.9,
    Fuel: 19.4,
    Railway: 1.9,
    Rental: 2.1,
  },
  {
    time: "2017-03",
    CPIH: 2.3,
    Electricity: 0.8,
    Gas: -1.8,
    Food: 1.3,
    House: 3.6,
    Fuel: 17.1,
    Railway: 0.9,
    Rental: 1.9,
  },
  {
    time: "2017-04",
    CPIH: 2.6,
    Electricity: 3.5,
    Gas: -1.0,
    Food: 1.6,
    House: 4.9,
    Fuel: 11.5,
    Railway: 3.9,
    Rental: 1.8,
  },
  {
    time: "2017-05",
    CPIH: 2.7,
    Electricity: 7.7,
    Gas: -0.5,
    Food: 2.1,
    House: 4.3,
    Fuel: 7.5,
    Railway: 4.2,
    Rental: 1.8,
  },
  {
    time: "2017-06",
    CPIH: 2.6,
    Electricity: 7.7,
    Gas: -0.5,
    Food: 2.4,
    House: 4.2,
    Fuel: 4.1,
    Railway: 4.5,
    Rental: 1.8,
  },
  {
    time: "2017-07",
    CPIH: 2.6,
    Electricity: 9.0,
    Gas: 0.0,
    Food: 2.6,
    House: 4.5,
    Fuel: 2.0,
    Railway: 2.7,
    Rental: 1.8,
  },
  {
    time: "2017-08",
    CPIH: 2.7,
    Electricity: 9.0,
    Gas: 0.0,
    Food: 2.2,
    House: 4.9,
    Fuel: 5.1,
    Railway: 2.7,
    Rental: 1.6,
  },
  {
    time: "2017-09",
    CPIH: 2.8,
    Electricity: 9.0,
    Gas: 0.0,
    Food: 3.1,
    House: 4.7,
    Fuel: 6.1,
    Railway: 2.3,
    Rental: 1.6,
  },
  {
    time: "2017-10",
    CPIH: 2.8,
    Electricity: 11.4,
    Gas: 0.0,
    Food: 4.1,
    House: 5.1,
    Fuel: 3.4,
    Railway: 3.1,
    Rental: 1.5,
  },
  {
    time: "2017-11",
    CPIH: 2.8,
    Electricity: 11.4,
    Gas: 0.1,
    Food: 4.2,
    House: 4.3,
    Fuel: 3.5,
    Railway: 2.9,
    Rental: 1.4,
  },
  {
    time: "2017-12",
    CPIH: 2.7,
    Electricity: 11.4,
    Gas: 0.1,
    Food: 4.1,
    House: 4.6,
    Fuel: 4.7,
    Railway: 1.8,
    Rental: 1.2,
  },
  {
    time: "2018-01",
    CPIH: 2.7,
    Electricity: 11.4,
    Gas: 0.6,
    Food: 3.7,
    House: 4.3,
    Fuel: 2.1,
    Railway: 2.9,
    Rental: 1.1,
  },
  {
    time: "2018-02",
    CPIH: 2.5,
    Electricity: 11.4,
    Gas: 0.6,
    Food: 3.0,
    House: 4.4,
    Fuel: 0.8,
    Railway: 3.1,
    Rental: 1.1,
  },
  {
    time: "2018-03",
    CPIH: 2.3,
    Electricity: 10.4,
    Gas: 0.6,
    Food: 3.1,
    House: 4.0,
    Fuel: 0.3,
    Railway: 3.1,
    Rental: 1.1,
  },
  {
    time: "2018-04",
    CPIH: 2.2,
    Electricity: 8.6,
    Gas: 1.6,
    Food: 2.7,
    House: 3.3,
    Fuel: 3.1,
    Railway: 1.0,
    Rental: 1.0,
  },
  {
    time: "2018-05",
    CPIH: 2.3,
    Electricity: 4.5,
    Gas: 1.1,
    Food: 2.3,
    House: 3.1,
    Fuel: 8.0,
    Railway: 1.8,
    Rental: 1.0,
  },
  {
    time: "2018-06",
    CPIH: 2.3,
    Electricity: 6.8,
    Gas: 3.7,
    Food: 2.0,
    House: 2.9,
    Fuel: 11.6,
    Railway: 2.5,
    Rental: 1.0,
  },
  {
    time: "2018-07",
    CPIH: 2.3,
    Electricity: 7.4,
    Gas: 4.3,
    Food: 2.3,
    House: 2.9,
    Fuel: 12.4,
    Railway: 4.4,
    Rental: 0.9,
  },
  {
    time: "2018-08",
    CPIH: 2.4,
    Electricity: 7.4,
    Gas: 4.3,
    Food: 2.4,
    House: 2.7,
    Fuel: 11.7,
    Railway: 4.0,
    Rental: 0.9,
  },
  {
    time: "2018-09",
    CPIH: 2.2,
    Electricity: 9.3,
    Gas: 5.5,
    Food: 1.5,
    House: 2.9,
    Fuel: 10.8,
    Railway: 4.4,
    Rental: 0.9,
  },
  {
    time: "2018-10",
    CPIH: 2.2,
    Electricity: 9.0,
    Gas: 7.6,
    Food: 0.9,
    House: 2.7,
    Fuel: 11.9,
    Railway: 2.6,
    Rental: 0.9,
  },
  {
    time: "2018-11",
    CPIH: 2.2,
    Electricity: 9.0,
    Gas: 7.6,
    Food: 0.5,
    House: 2.6,
    Fuel: 8.9,
    Railway: 3.5,
    Rental: 0.9,
  },
  {
    time: "2018-12",
    CPIH: 2.0,
    Electricity: 9.0,
    Gas: 7.6,
    Food: 0.7,
    House: 2.0,
    Fuel: 3.4,
    Railway: 3.5,
    Rental: 1.0,
  },
  {
    time: "2019-01",
    CPIH: 1.8,
    Electricity: 3.7,
    Gas: -1.7,
    Food: 0.9,
    House: 1.7,
    Fuel: 0.7,
    Railway: 4.1,
    Rental: 1.0,
  },
  {
    time: "2019-02",
    CPIH: 1.8,
    Electricity: 3.8,
    Gas: -1.6,
    Food: 1.2,
    House: 1.2,
    Fuel: 0.5,
    Railway: 4.4,
    Rental: 1.1,
  },
  {
    time: "2019-03",
    CPIH: 1.8,
    Electricity: 3.8,
    Gas: -1.6,
    Food: 0.8,
    House: 1.5,
    Fuel: 2.9,
    Railway: 3.9,
    Rental: 1.2,
  },
  {
    time: "2019-04",
    CPIH: 2.0,
    Electricity: 14.1,
    Gas: 7.1,
    Food: 0.7,
    House: 1.3,
    Fuel: 4.3,
    Railway: 6.5,
    Rental: 1.2,
  },
  {
    time: "2019-05",
    CPIH: 1.9,
    Electricity: 14.0,
    Gas: 7.1,
    Food: 1.1,
    House: 1.0,
    Fuel: 3.4,
    Railway: 3.0,
    Rental: 1.3,
  },
  {
    time: "2019-06",
    CPIH: 1.9,
    Electricity: 11.5,
    Gas: 4.4,
    Food: 1.7,
    House: 0.7,
    Fuel: 0.7,
    Railway: 5.7,
    Rental: 1.3,
  },
  {
    time: "2019-07",
    CPIH: 2.0,
    Electricity: 9.6,
    Gas: 3.3,
    Food: 1.5,
    House: 0.6,
    Fuel: 0.2,
    Railway: 2.6,
    Rental: 1.3,
  },
  {
    time: "2019-08",
    CPIH: 1.7,
    Electricity: 9.6,
    Gas: 3.3,
    Food: 1.8,
    House: 0.6,
    Fuel: -0.1,
    Railway: 3.4,
    Rental: 1.3,
  },
  {
    time: "2019-09",
    CPIH: 1.7,
    Electricity: 7.6,
    Gas: 2.1,
    Food: 1.7,
    House: 0.9,
    Fuel: -2.1,
    Railway: 2.7,
    Rental: 1.3,
  },
  {
    time: "2019-10",
    CPIH: 1.5,
    Electricity: 3.3,
    Gas: -8.7,
    Food: 1.4,
    House: 0.7,
    Fuel: -3.3,
    Railway: 3.9,
    Rental: 1.3,
  },
  {
    time: "2019-11",
    CPIH: 1.5,
    Electricity: 3.3,
    Gas: -8.7,
    Food: 2.1,
    House: 0.8,
    Fuel: -2.9,
    Railway: 2.5,
    Rental: 1.4,
  },
  {
    time: "2019-12",
    CPIH: 1.4,
    Electricity: 3.3,
    Gas: -8.7,
    Food: 1.7,
    House: 0.9,
    Fuel: 1.0,
    Railway: 3.8,
    Rental: 1.4,
  },
  {
    time: "2020-01",
    CPIH: 1.8,
    Electricity: 8.6,
    Gas: -0.2,
    Food: 1.4,
    House: 1.6,
    Fuel: 4.7,
    Railway: 2.1,
    Rental: 1.5,
  },
  {
    time: "2020-02",
    CPIH: 1.7,
    Electricity: 8.5,
    Gas: -0.3,
    Food: 1.3,
    House: 1.3,
    Fuel: 2.8,
    Railway: 3.4,
    Rental: 1.4,
  },
  {
    time: "2020-03",
    CPIH: 1.5,
    Electricity: 8.5,
    Gas: -0.3,
    Food: 1.3,
    House: 2.5,
    Fuel: -2.4,
    Railway: 2.7,
    Rental: 1.4,
  },
  {
    time: "2020-04",
    CPIH: 0.9,
    Electricity: -2.0,
    Gas: -12.0,
    Food: 1.4,
    House: 0.7,
    Fuel: -12.2,
    Railway: 2.5,
    Rental: 1.5,
  },
  {
    time: "2020-05",
    CPIH: 0.7,
    Electricity: -2.0,
    Gas: -12.0,
    Food: 1.9,
    House: 1.1,
    Fuel: -16.7,
    Railway: 2.4,
    Rental: 1.5,
  },
  {
    time: "2020-06",
    CPIH: 0.8,
    Electricity: -2.0,
    Gas: -12.0,
    Food: 1.2,
    House: 2.0,
    Fuel: -16.4,
    Railway: 2.5,
    Rental: 1.5,
  },
  {
    time: "2020-07",
    CPIH: 1.1,
    Electricity: -2.1,
    Gas: -12.0,
    Food: 0.8,
    House: 1.7,
    Fuel: -12.0,
    Railway: 1.3,
    Rental: 1.4,
  },
  {
    time: "2020-08",
    CPIH: 0.5,
    Electricity: -2.1,
    Gas: -12.0,
    Food: 0.4,
    House: 2.4,
    Fuel: -11.4,
    Railway: 1.6,
    Rental: 1.5,
  },
  {
    time: "2020-09",
    CPIH: 0.7,
    Electricity: -2.1,
    Gas: -12.0,
    Food: 0.0,
    House: 3.4,
    Fuel: -10.6,
    Railway: 2.4,
    Rental: 1.5,
  },
  {
    time: "2020-10",
    CPIH: 0.9,
    Electricity: -3.1,
    Gas: -15.4,
    Food: 0.6,
    House: 4.6,
    Fuel: -10.2,
    Railway: 2.4,
    Rental: 1.4,
  },
  {
    time: "2020-11",
    CPIH: 0.6,
    Electricity: -3.1,
    Gas: -15.4,
    Food: -0.5,
    House: 6.0,
    Fuel: -10.0,
    Railway: 2.3,
    Rental: 1.4,
  },
  {
    time: "2020-12",
    CPIH: 0.8,
    Electricity: -3.1,
    Gas: -15.4,
    Food: -1.4,
    House: 7.0,
    Fuel: -8.3,
    Railway: 2.4,
    Rental: 1.4,
  },
  {
    time: "2021-01",
    CPIH: 0.9,
    Electricity: -3.1,
    Gas: -15.4,
    Food: -0.7,
    House: 7.7,
    Fuel: -8.2,
    Railway: 0.2,
    Rental: 1.3,
  },
  {
    time: "2021-02",
    CPIH: 0.7,
    Electricity: -3.1,
    Gas: -15.4,
    Food: -0.6,
    House: 8.2,
    Fuel: -3.5,
    Railway: 0.7,
    Rental: 1.3,
  },
  {
    time: "2021-03",
    CPIH: 1.0,
    Electricity: -3.1,
    Gas: -15.4,
    Food: -1.4,
    House: 8.9,
    Fuel: 3.5,
    Railway: 2.9,
    Rental: 1.3,
  },
  {
    time: "2021-04",
    CPIH: 1.6,
    Electricity: 5.5,
    Gas: -4.1,
    Food: -0.5,
    House: 8.6,
    Fuel: 13.6,
    Railway: 3.5,
    Rental: 1.2,
  },
  {
    time: "2021-05",
    CPIH: 2.1,
    Electricity: 5.5,
    Gas: -4.1,
    Food: -1.3,
    House: 8.5,
    Fuel: 17.9,
    Railway: 2.9,
    Rental: 1.2,
  },
  {
    time: "2021-06",
    CPIH: 2.4,
    Electricity: 5.5,
    Gas: -4.1,
    Food: -0.6,
    House: 13.2,
    Fuel: 20.3,
    Railway: 3.2,
    Rental: 1.2,
  },
  {
    time: "2021-07",
    CPIH: 2.1,
    Electricity: 5.8,
    Gas: -4.0,
    Food: -0.6,
    House: 6.9,
    Fuel: 17.7,
    Railway: 2.9,
    Rental: 1.3,
  },
  {
    time: "2021-08",
    CPIH: 3.0,
    Electricity: 5.8,
    Gas: -4.0,
    Food: 0.3,
    House: 9.0,
    Fuel: 17.7,
    Railway: 3.6,
    Rental: 1.3,
  },
  {
    time: "2021-09",
    CPIH: 2.9,
    Electricity: 5.8,
    Gas: -4.0,
    Food: 0.8,
    House: 11.4,
    Fuel: 17.8,
    Railway: 2.1,
    Rental: 1.4,
  },
  {
    time: "2021-10",
    CPIH: 3.8,
    Electricity: 18.8,
    Gas: 28.1,
    Food: 1.3,
    House: 8.1,
    Fuel: 21.5,
    Railway: 3.2,
    Rental: 1.6,
  },
  {
    time: "2021-11",
    CPIH: 4.6,
    Electricity: 18.8,
    Gas: 28.1,
    Food: 2.5,
    House: 8.7,
    Fuel: 28.5,
    Railway: 4.8,
    Rental: 1.7,
  },
  {
    time: "2021-12",
    CPIH: 4.8,
    Electricity: 18.8,
    Gas: 28.1,
    Food: 4.2,
    House: 8.2,
    Fuel: 26.8,
    Railway: 4.1,
    Rental: 1.9,
  },
  {
    time: "2022-01",
    CPIH: 4.9,
    Electricity: 19.2,
    Gas: 28.3,
    Food: 4.4,
    House: 9.5,
    Fuel: 23.6,
    Railway: 3.8,
    Rental: 2.1,
  },
  {
    time: "2022-02",
    CPIH: 5.5,
    Electricity: 19.2,
    Gas: 28.3,
    Food: 5.1,
    House: 9.5,
    Fuel: 22.3,
    Railway: 3.4,
    Rental: 2.2,
  },
  {
    time: "2022-03",
    CPIH: 6.2,
    Electricity: 19.2,
    Gas: 28.3,
    Food: 5.9,
    House: 8.5,
    Fuel: 30.7,
    Railway: 5.9,
    Rental: 2.3,
  },
  {
    time: "2022-04",
    CPIH: 7.8,
    Electricity: 53.5,
    Gas: 95.5,
    Food: 6.7,
    House: 11.3,
    Fuel: 31.4,
    Railway: 4.5,
    Rental: 2.6,
  },
  {
    time: "2022-05",
    CPIH: 7.9,
    Electricity: 53.5,
    Gas: 95.5,
    Food: 8.7,
    House: 12.1,
    Fuel: 32.8,
    Railway: 5.3,
    Rental: 2.8,
  },
  {
    time: "2022-06",
    CPIH: 8.2,
    Electricity: 53.5,
    Gas: 95.5,
    Food: 9.8,
    House: 7.1,
    Fuel: 42.3,
    Railway: 4.8,
    Rental: 3.0,
  },
  {
    time: "2022-07",
    CPIH: 8.8,
    Electricity: 54.0,
    Gas: 95.7,
    Food: 12.7,
    House: 14.5,
    Fuel: 43.7,
    Railway: 8.7,
    Rental: 3.3,
  },
  {
    time: "2022-08",
    CPIH: 8.6,
    Electricity: 54.0,
    Gas: 95.7,
    Food: 13.1,
    House: 12.6,
    Fuel: 32.1,
    Railway: 8.2,
    Rental: 3.5,
  },
  {
    time: "2022-09",
    CPIH: 8.8,
    Electricity: 54.0,
    Gas: 95.7,
    Food: 14.6,
    House: 9.8,
    Fuel: 26.5,
    Railway: 8.1,
    Rental: 3.7,
  },
  {
    time: "2022-10",
    CPIH: 9.6,
    Electricity: 65.7,
    Gas: 128.9,
    Food: 16.4,
    House: 12.4,
    Fuel: 22.2,
    Railway: 7.2,
    Rental: 3.8,
  },
  {
    time: "2022-11",
    CPIH: 9.3,
    Electricity: 65.4,
    Gas: 128.9,
    Food: 16.5,
    House: 10.3,
    Fuel: 17.2,
    Railway: 5.4,
    Rental: 4.0,
  },
  {
    time: "2022-12",
    CPIH: 9.2,
    Electricity: 65.4,
    Gas: 128.9,
    Food: 16.9,
    House: 9.8,
    Fuel: 11.5,
    Railway: 6.5,
    Rental: 4.2,
  },
  {
    time: "2023-01",
    CPIH: 8.8,
    Electricity: 66.7,
    Gas: 129.4,
    Food: 16.8,
    House: 6.3,
    Fuel: 7.7,
    Railway: 5.9,
    Rental: 4.4,
  },
];

const margin = { top: 30, right: 100, bottom: 30, left: 30 };
const width = 1200 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

//定义咱们的svg画布空间容器
const svg = d3
  .select("#lineChart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

function creatChart(data) {
  // List of groups (here I have one group per column)
  const allGroup = [
    "CPIH",
    "Electricity",
    "Food",
    "House",
    "Fuel",
    "Railway",
    "Rental",
  ];

  // Reformat the data: we need an array of arrays of {x, y} tuples
  const dataReady = allGroup.map(function (grpName) {
    return {
      name: grpName,
      values: data.map(function (d) {
        return { time: new Date(d.time), value: +d[grpName] };
      }),
    };
  });
  console.log(dataReady);
  // A color scale: one color for each group
  const myColor = d3.scaleOrdinal().domain(allGroup).range(d3.schemeSet2);

  // Add X axis
  const x = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => new Date(d.time)))
    .range([0, width]);

  xAxis = svg
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  svg
    .append("text")
    .attr("x", width - 10)
    .attr("y", height - 10)
    .text("Time")
    .style("font-size", 12)
    .style("text-anchor", "start")
    .style("fill", "black");

  // Add Y axis
  function setYAxis(dataReady) {
    let minY = Infinity;
    let maxY = -Infinity;
    dataReady.forEach((group) => {
      const minGroupY = d3.min(group.values, (d) => d.value);
      const maxGroupY = d3.max(group.values, (d) => d.value);
      minY = Math.min(minY, minGroupY);
      maxY = Math.max(maxY, maxGroupY);
    });

    return d3
      .scaleLinear()
      .domain([minY - 5, maxY + 5])
      .range([height, 0]);
  }

  const y = setYAxis(dataReady);
  yAxis = svg
    .append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y).tickFormat((d) => `${d}%`))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("dy", "2em")
    .attr("fill", "black")
    .text("Inflation(%)")
    .style("font-size", 12);

  // Add a clipPath: everything out of this area won't be drawn.
  svg
    .append("defs")
    .selectAll("clipPath")
    .data(dataReady)
    .join("clipPath")
    .attr("id", (d) => "clip-" + d.name)
    .append("rect") // add rectangle
    .attr("width", width + 10) // set the width of the rectangle
    .attr("height", height + 10) // set the height of the rectangle
    .attr("transform", "translate(0, -5)") // Move the rectangle up to keep it centered
    .attr("transform", "translate(-5, 0)"); // Move the rectangle to the left to keep it centered

  // Add the lines
  const lineSeting = d3
    .line()
    .x((d) => x(+d.time))
    .y((d) => y(+d.value));
  lines = svg
    .append("g")
    .attr("class", "lines")
    .attr("clip-path", "url(#clip)")
    .selectAll("myLines")
    .data(dataReady)
    .join("path")
    .attr("class", (d) => d.name)
    .attr("d", (d) => lineSeting(d.values))
    .attr("stroke", (d) => myColor(d.name))
    .style("stroke-width", 2)
    .style("fill", "none")
    .attr("clip-path", (d) => "url(#clip-" + d.name + ")");

  // Record the line visibility
  const lineVisibility = {};
  allGroup.forEach((group) => {
    lineVisibility[group] = 1; // 1: visible, 0:hidden
  });

  // Add the points
  svg
    .append("g")
    .attr("class", "points")
    .attr("clip-path", "url(#clip)")
    .selectAll("myDots")
    .data(dataReady)
    .join("g")
    .style("fill", (d) => myColor(d.name))
    .attr("class", (d) => d.name)
    .attr("clip-path", (d) => "url(#clip-" + d.name + ")")
    .selectAll("myPoints")
    .data((d) => d.values)
    .join("circle")
    .attr("cx", (d) => x(d.time))
    .attr("cy", (d) => y(d.value))
    .attr("r", 3);

  // Add the tooltip
  const tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("pointer-events", "none"); // Prevent other events from being triggered when the mouse is over the tooltip

  // Add a mousemove event listener to show the tooltip and update the vertical line position.
  svg
    .append("g")
    .attr("class", "mouse-events-layer")
    .append("rect")
    .attr("class", "tooltip-rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mousemove", function (event) {
      const mouseX = x.invert(event.layerX - margin.left); // Calculate the x-axis value corresponding to the mouse position
      const closestData = findClosestData(mouseX); // Find the closest data point
      showTooltip(closestData, event); // Show tooltip

      // Update the dotted line position and set its visibility
      verticalLine
        .attr("x1", x(closestData[0].time))
        .attr("x2", x(closestData[0].time))
        .style("visibility", "visible");
    })
    .on("mouseout", function () {
      tooltip.style("visibility", "hidden");
      verticalLine.style("visibility", "hidden");
    });

  // Add a vertical line to follow the mouse
  const verticalLine = svg
    .select(".mouse-events-layer")
    .append("line")
    .attr("y1", 0)
    .attr("y2", height)
    .attr("stroke", "black")
    .attr("stroke-dasharray", "3,3")
    .style("stroke-opacity", 0.4)
    .style("visibility", "hidden");

  function findClosestData(mouseX) {
    const closestData = [];

    dataReady.forEach((group) => {
      // 如果折线不可见，跳过此组
      if (lineVisibility[group.name] === 0) {
        return;
      }

      let minDistance = Infinity;
      let closestPoint = null;

      group.values.forEach((d) => {
        const distance = Math.abs(d.time - mouseX);
        if (distance < minDistance) {
          minDistance = distance;
          closestPoint = {
            groupName: group.name,
            time: d.time,
            value: d.value,
          };
        }
      });

      closestData.push(closestPoint);
    });

    return closestData;
  }

  function showTooltip(data, event) {
    let htmlContent = "Time: " + d3.timeFormat("%Y-%m")(data[0].time) + "<br/>";

    data.forEach((d) => {
      const color = myColor(d.groupName); // 获取折线的颜色
      htmlContent +=
        "<span style='color:" +
        color +
        ";'>●</span> " +
        d.groupName +
        ": " +
        d.value +
        "%<br/>";
    });

    tooltip
      .style("visibility", "visible")
      .html(htmlContent)
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 10 + "px");
  }

  // Add interactive legend
  function cumulativeWidth(array) {
    let sum = 0;
    const result = array.map((item) => {
      sum += item;
      return sum;
    });
    return result;
  }

  const legendSpacing = 20; // 设置图例之间的间距
  const legendWidths = allGroup.map((grpName) => {
    const tempText = svg.append("text").text(grpName);
    const width = tempText.node().getComputedTextLength() + legendSpacing;
    tempText.remove(); // 删除临时文本元素
    return width;
  });
  const cumulativeLegendWidths = [0, ...cumulativeWidth(legendWidths)];

  // Add interactive legend
  svg
    .append("g")
    .attr("class", "legend")
    .selectAll("myLegend")
    .data(dataReady)
    .join("g")
    .each(function (d, i) {
      const legendGroup = d3.select(this);

      // Add colored square
      legendGroup
        .append("rect")
        .attr("x", cumulativeLegendWidths[i])
        .attr("y", -20)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", myColor(d.name));

      // Add group name text with black color
      legendGroup
        .append("text")
        .attr("x", cumulativeLegendWidths[i] + 12)
        .attr("y", -10)
        .text(d.name)
        .style("fill", "black")
        .style("font-size", 15)
        .style("cursor", "pointer");
    })
    .on("click", function (event, d) {
      // is the element currently visible ?
      currentOpacity = d3.selectAll("." + d.name).style("opacity");

      // Change the opacity: from 0 to 1 or from 1 to 0
      d3.selectAll("." + d.name)
        .transition()
        .style("opacity", currentOpacity == 1 ? 0 : 1);

      // Update lineVisibility object
      lineVisibility[d.name] = currentOpacity == 1 ? 0 : 1;

      // Change the square color to gray when the polyline is hidden and revert it back to the original color when it's visible again
      d3.select(this)
        .select("rect")
        .style("fill", currentOpacity == 1 ? "gray" : myColor(d.name));

      // If the line is currently not visible, add a left-to-right animation effect
      if (currentOpacity == 0) {
        d3.select("#clip-" + d.name + " rect")
          .attr("width", 0)
          .transition()
          .duration(2000) // Animation duration, you can adjust it as needed
          .attr("width", width + 10);
      }
    });

  //Add zoom and brush
  svg
    .append("text")
    .attr("x", width - 50)
    .attr("y", -10)
    .text("Zoom")
    .style("font-size", 12)
    .style("text-anchor", "start")
    .style("fill", "black")
    .style("cursor", "pointer")
    .on("click", toggleBrush);

  let brushEnabled = false;

  function toggleBrush() {
    brushEnabled = !brushEnabled;
    if (brushEnabled) {
      svg.append("g").attr("class", "brush").call(brush);
    } else {
      svg.select(".brush").remove();
    }
  }

  function brushed({ selection }) {
    if (!selection) return;
    const [x0, x1] = selection.map(x.invert);
    x.domain([x0, x1]);
    updateChart();
    svg.select(".brush").call(brush.move, null);
  }

  function zoomed() {
    const zoomFactor = d3.event.transform.k;
    x.domain(d3.event.transform.rescaleX(x2).domain());
    updateChart();
  }

  const brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("end", brushed);

  const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

  function updateChart() {
    const t = svg.transition().duration(750);

    xAxis.transition(t).call(d3.axisBottom(x));
    lines.transition(t).attr("d", (d) => lineSeting(d.values));
    svg
      .selectAll(".points circle")
      .transition(t)
      .attr("cx", (d) => x(d.time));
  }

  svg
    .append("text")
    .attr("x", width)
    .attr("y", -10)
    .text("Rset Zoom")
    .style("font-size", 12)
    .style("text-anchor", "start")
    .style("fill", "black")
    .style("cursor", "pointer")
    .on("click", reset);

  function reset() {
    x.domain(d3.extent(data, (d) => new Date(d.time)));
    updateChart();
  }
}

creatChart(data);
