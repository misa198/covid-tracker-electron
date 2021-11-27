import {
  zingVaccineApiUrl,
  zingVaccineByLocationApiUrl,
} from '../../constants/configs';
import axios from './axios';

export const fetchZingNewVaccineData = async () => {
  const response = await axios.get(zingVaccineApiUrl);
  const dayDoses = [];
  const summaryDoses = [];
  const { data } = response.data;
  data.data.forEach((item, index) => {
    dayDoses.push({
      date: item.date,
      first: data.first.datas[index].y,
      second: data.second.datas[index].y,
      average: data.data[index].ma7,
    });
    summaryDoses.push({
      date: item.date,
      first: data.first.datas[index].z,
      second: data.second.datas[index].z,
    });
  });
  return {
    dayDoses,
    summaryDoses,
    firstTotal: data.first.total,
    firstRatio: data.firstRatio,
    secondTotal: data.second.total,
    secondRatio: data.secondRatio,
  };
};

export const fetchZingNewVaccineDataByLocation = async () => {
  const response = await axios.get(zingVaccineByLocationApiUrl);
  const { data } = response.data;
  const res = data.map((province) => ({
    name: province.provinceName,
    firstDose: province.totalOnceInjected,
    secondDose: province.totalTwiceInjected,
    population: province.population,
  }));
  return res;
};
