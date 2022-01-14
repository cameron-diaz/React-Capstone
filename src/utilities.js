export const twoDecimals = a => {
  const number = parseFloat(a);
  return number.toFixed(2);
};

export const threeDecimals = a => {
  const number = parseFloat(a);
  return number.toFixed(3);
};

// format currency (calls 2decimals) - 100-1000
// conditional (>)
// format % (calls 2 decimals) convert to string before return '%'

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

export const formattingChartValues = value => {
  const numberValue = parseFloat(value);
  if (numberValue > 1000 && numberValue < 1000000) {
    const dividedValue = numberValue / 10000;
    return twoDecimals(dividedValue);
  } else if (numberValue < 1000) {
    return twoDecimals(value);
  } else if (numberValue > 1000000) {
    const dividedValue = numberValue / 1000000;
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
