import { setupCache } from 'axios-cache-adapter';
import axios from 'axios';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

export default axios.create({
  adapter: cache.adapter,
});
