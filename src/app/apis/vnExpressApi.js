import axios from 'axios';
import {
  covidVnExpressByDayApiUrl,
  covidVnExpressSiteUrl,
} from '../../constants/configs';
import { vnExpressUpdateDateTime } from '../../constants/regex';
import { formatVnExpressDataByDay } from '../../utils/formatApiData';

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
