import { async } from 'regenerator-runtime';
import * as config from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    let response = await Promise.race([
      fetch(url),
      timeout(config.TIMEOUT_SEC),
    ]);
    let data = await response.json();
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
