const slugify = require('slugify');

/**
 * @param data {Object} - date from api ("27/4")
 * @returns {string} - formatted date ("27-04")
 */
const formatDateApi = (data) => {
  const dateString = data.split('"')[1];
  const splitData = dateString.split('/');
  return `${
    parseInt(splitData[0], 10) < 10 ? '0' + splitData[0] : splitData[0]
  }-${parseInt(splitData[1], 10) < 10 ? '0' + splitData[1] : splitData[1]}`;
};

/**
 * @param value {string} - value from api ("27")
 * @returns {number} - formatted value (27)
 */
const toNumber = (value) => {
  try {
    return parseInt(value.split('"')[1], 10) || 0;
  } catch (e) {
    return 0;
  }
};

/**
 * @param data {string} - value from api (https://vnexpress.net/microservice/sheet/type/covid19_2021_by_day)
 * @returns {Object} - formatted data
 */
export const formatVnExpressDataByDay = (data) => {
  const lines = data.split('\n');
  const result = [];

  lines.forEach((line, index) => {
    if (index > 0) {
      const lineData = line.split(',');
      if (!toNumber(lineData[9])) return;
      const newItem = {
        date: formatDateApi(lineData[0]),
        newDomesticConfirmed: toNumber(lineData[1]),
        totalDomesticConfirmed: toNumber(lineData[2]),
        blockadeConfirmed: toNumber(lineData[3]),
        communityConfirmed: toNumber(lineData[4]),
        importedConfirmed: toNumber(lineData[5]),
        newDeaths: toNumber(lineData[6]),
        newRecovered: toNumber(lineData[7]),
        newConfirmed: toNumber(lineData[8]),
        newCuring: toNumber(lineData[20]),
        totalConfirmed: toNumber(lineData[9]),
        totalDeaths: toNumber(lineData[10]),
        totalRecovered: toNumber(lineData[11]),
        totalCuring: toNumber(lineData[21]),
        totalConfirmed2020: toNumber(lineData[22]),
        totalDeaths2020: toNumber(lineData[23]),
        totalRecovered2020: toNumber(lineData[24]),
      };

      result.push(newItem);
    }
  });
  return result;
};

/**
 * @param data {string} - value from api (https://vnexpress.net/microservice/sheet/type/covid19_2021_by_location)
 * @returns {Object} - formatted data
 */
export const formatVnExpressDataByLocation = (data) => {
  const lines = data.split('\n');
  const result = [];
  lines.forEach((line, index) => {
    if (index === 0) {
      const provinces = line.split(',');
      provinces.forEach((province, i) => {
        if (i >= 1 && i <= 63) {
          const provinceName = province.split('"')[1];
          result.push({
            name: provinceName,
            slug: slugify(provinceName.toLowerCase()),
            data: [],
          });
        }
      });
    }
    if (index >= 2) {
      const cases = line.split(',');
      const rawDate = cases[0].split('"')[1];
      if (rawDate) {
        const date = formatDateApi(rawDate);
        result.forEach((item, i) => {
          item.data.push({
            date,
            confirmed: parseInt(cases[i + 1].split('"')[1] || '0', 10),
          });
        });
      }
    }
  });
  result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
};
