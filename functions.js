const fs = require("fs");
const papa = require("papaparse");

const searchCsv = (scenario, year, mtd, month) => {
  const csv = fs.readFileSync("loan.csv");
  const csvString = csv.toString();
  const results = papa.parse(csvString);
  const csvArray = results.data;
  const cleanedCsvArray = cleanCsvArray(csvArray);
  const customSearchableCsvDataStructure =
    createCsvDataStructure(cleanedCsvArray);
  return searchCsvDataStructure({
    scenario,
    year,
    mtd,
    month,
    customSearchableCsvDataStructure,
  });
};

function searchCsvDataStructure({
  scenario,
  year,
  mtd,
  month,
  customSearchableCsvDataStructure,
}) {
  //console.log(customSearchableCsvDataStructure);
  mtd = mtd.toUpperCase();
  let results = customSearchableCsvDataStructure.filter((customData) => {
    return (
      customData.Scenario === scenario &&
      customData.Year === year &&
      customData.MTD === mtd &&
      customData.Month === month
    );
  });
  return results;
}

function cleanCsvArray(csvArray) {
  for (let i = 0, n = csvArray.length; i < n; ++i) {
    csvArray[i].splice(0, 1);
  }
  return csvArray;
}

function createCsvDataStructure(cleanedCsvArray) {
  class customCsvDa {
    constructor() {
      (this.Scenario = undefined),
        (this.Number = undefined),
        (this.Year = undefined),
        (this.Month = undefined),
        (this.MTD = undefined),
        (this.Income = undefined),
        (this.Interest = undefined),
        (this.Chits = undefined),
        (this.Thandal = undefined),
        (this.Services = undefined),
        (this.AllIncome = undefined),
        (this.Total = undefined),
        (this.ClusterLoans = undefined),
        (this.ClusterMarginLoans = undefined),
        (this.IncomePerct = undefined),
        (this.InterestPerct = undefined),
        (this.ChitsPerct = undefined),
        (this.ThandalPerct = undefined),
        (this.AllIncomePerc = undefined);
    }
  }
  const csvCustomDataStructure = [];
  const customCsvDataStructureObj = {
    Scenario: 0,
    Number: 1,
    Year: 2,
    Month: 3,
    MTD: 4,
    Income: 5,
    Interest: 6,
    Chits: 7,
    Thandal: 8,
    Services: 9,
    AllIncome: 10,
    Total: 11,
    ClusterLoans: 12,
    ClusterMarginLoans: 13,
    IncomePerct: 14,
    InterestPerct: 15,
    ChitsPerct: 16,
    ThandalPerct: 17,
    AllIncomePerct: 18,
  };
  const scenarioArr = cleanedCsvArray[customCsvDataStructureObj.Scenario];
  for (let i = 0, n = scenarioArr.length; i < n; ++i) {
    const customDS = new customCsvDa();
    customDS.Scenario = scenarioArr[i].trim();
    customDS.Number =
      cleanedCsvArray[customCsvDataStructureObj.Number][i].trim();
    customDS.Year = cleanedCsvArray[customCsvDataStructureObj.Year][i].trim();
    customDS.Month = cleanedCsvArray[customCsvDataStructureObj.Month][i].trim();
    customDS.MTD = cleanedCsvArray[customCsvDataStructureObj.MTD][i].trim();
    customDS.Income =
      cleanedCsvArray[customCsvDataStructureObj.Income][i].trim();
    customDS.Interest =
      cleanedCsvArray[customCsvDataStructureObj.Interest][i].trim();
    customDS.Chits = cleanedCsvArray[customCsvDataStructureObj.Chits][i].trim();
    customDS.Thandal =
      cleanedCsvArray[customCsvDataStructureObj.Thandal][i].trim();
    customDS.Services =
      cleanedCsvArray[customCsvDataStructureObj.Services][i].trim();
    customDS.AllIncome =
      cleanedCsvArray[customCsvDataStructureObj.AllIncome][i].trim();
    customDS.Total = cleanedCsvArray[customCsvDataStructureObj.Total][i].trim();
    customDS.ClusterLoans =
      cleanedCsvArray[customCsvDataStructureObj.ClusterLoans][i].trim();
    customDS.ClusterMarginLoans =
      cleanedCsvArray[customCsvDataStructureObj.ClusterMarginLoans][i].trim();
    customDS.IncomePerct =
      cleanedCsvArray[customCsvDataStructureObj.IncomePerct][i].trim();
    customDS.InterestPerct =
      cleanedCsvArray[customCsvDataStructureObj.InterestPerct][i].trim();
    customDS.ChitsPerct =
      cleanedCsvArray[customCsvDataStructureObj.ChitsPerct][i].trim();
    customDS.ThandalPerct =
      cleanedCsvArray[customCsvDataStructureObj.ThandalPerct][i].trim();
    customDS.AllIncomePerc =
      cleanedCsvArray[customCsvDataStructureObj.AllIncomePerct][i].trim();
    csvCustomDataStructure.push(customDS);
  }
  return csvCustomDataStructure;
}

//for testing
//console.log(searchCsv("Long Term", "2020", "MTD", "May"));
