import format from 'date-fns/format';
import { parse } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const formattingDates = a => {
  const date = parse(a, 'MM/dd/yyyy', new Date(), {
    locale: enUS,
  });
  const formattedDate = format(date, 'yyyy/MM/dd');
  return formattedDate;
};

export const twoDecimals = a => {
  const number = parseFloat(a);
  return number.toFixed(2);
};

export const threeDecimals = a => {
  const number = parseFloat(a);
  return number.toFixed(3);
};

export const formattingCurrency = value => {
  if (value > 1000 && value < 1000000) {
    const dividedValue = value / 1000;
    return `$${twoDecimals(dividedValue)} K`;
  } else if (value < 1000) {
    return `$${twoDecimals(value)}`;
  } else if (value > 1000000) {
    const dividedValue = value / 1000000;
    return `$${twoDecimals(dividedValue)}MM`;
  }
};

export const fortmattingPercents = value => {
  return `${threeDecimals(value)}%`;
};

export const formattingGridValues = value => {
  if (value > 1000 && value < 1000000) {
    const dividedValue = value / 1000;
    return `$${twoDecimals(dividedValue)} K`;
  } else if (value < 1000) {
    return `$${twoDecimals(value)}`;
  } else if (value > 1000000) {
    const dividedValue = value / 1000000;
    return `$${twoDecimals(dividedValue)}MM`;
  }
};

export const formattingChartValues = value => {
  const numberValue = parseFloat(value);
  if (numberValue > 1000 && numberValue < 1000000) {
    const dividedValue = numberValue / 1000;
    return twoDecimals(dividedValue);
  } else if (numberValue < 1000) {
    return twoDecimals(value);
  } else if (numberValue > 1000000) {
    const dividedValue = numberValue / 100000;
    return twoDecimals(dividedValue);
  }
};

export const dataLabelFormat = y => {
  if (y > 1000) {
    return `$` + this.y + `K`;
  } else if (y > 1000000) {
    return `$` + this.y + `MM`;
  } else if (y < 1000) {
    return `$` + this.y;
  }
};
