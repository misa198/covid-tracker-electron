import { kompaApiUrl } from '../../constants/configs';
import axios from './axios';

export const axiosKompaClient = axios.create({
  baseURL: kompaApiUrl,
  headers: {
    accept: '*/*',
    'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
    'content-type': 'application/json',
    referrer: 'https://corona.kompa.ai/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    mode: 'cors',
    credentials: 'omit',
  },
});

export const fetchKompaWorldwideCases = async () => {
  const query = {
    operationName: 'totalConfirmed',
    variables: {},
    query: `
      query totalConfirmed {
        totalConfirmed
        totalConfirmedLast
        totalRecovered
        totalRecoveredLast
        totalDeaths
        totalDeathsLast
      }
    `,
  };
  return axiosKompaClient.post('/', JSON.stringify(query));
};
