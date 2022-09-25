import { Data } from './types';

export const dateFormater = () => {
  return new Date().toLocaleDateString();
};

export const currencyFormater = (value: number) => {
  return value
    .toLocaleString('en-US', {
      currency: 'ZMW',
      style: 'currency',
    })
    .replace('ZMW', 'K');
};

export const filterByData = (data: Data[], type: string): Data[] => {
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const week = new Date().getDay();

  const results = data.filter(item => {
    if (month === new Date(item.date).getMonth() && type === 'month') {
      return data;
    }
    if (date === new Date(item.date).getDate() && type === 'today') {
      return data;
    }
    if (new Date(item.date).getDay() < week && type === 'week') {
      return data;
    }
  });

  return results;
};
