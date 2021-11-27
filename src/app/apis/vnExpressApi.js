import axios from './axios';
import {
  covidVnExpressByDayApiUrl,
  covidVnExpressByLocationApiUrl,
  covidVnExpressByMapApiUrl,
  covidVnExpressSiteUrl,
} from '../../constants/configs';
import { vnExpressUpdateDateTime } from '../../constants/regex';
import {
  formatVnExpressDataByDay,
  formatVnExpressDataByMap,
  formatVnExpressDataByLocation,
} from '../../utils/formatApiData';

export const fetchCovidVnExpressDataByDay = async () => {
  const [apiRes, siteRes] = await Promise.all([
    axios.get(covidVnExpressByDayApiUrl),
    axios.get(covidVnExpressSiteUrl),
  ]);

  const body = apiRes.data;
  const parsedBody = formatVnExpressDataByDay(body);
  const siteData = siteRes.data;
  const updatedAt = siteData
    .match(vnExpressUpdateDateTime)[0]
    .split('Cập nhật ')[1];
  return {
    data: parsedBody,
    updatedAt,
  };
};

export const fetchCovidVnExpressDataByMap = async () => {
  const response = await axios.get(covidVnExpressByMapApiUrl);
  const parsedBody = formatVnExpressDataByMap(response.data);
  return {
    data: parsedBody,
  };
};

export const fetchCovidVnExpressDataByLocation = async () => {
  const response = await axios.get(covidVnExpressByLocationApiUrl);
  const body = response.data;
  const parsedBody = formatVnExpressDataByLocation(body);
  return {
    data: parsedBody,
  };
};
