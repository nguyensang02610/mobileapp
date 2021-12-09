import React, {Component} from 'react';
const convertToNumberCommas = val => {
  if (val == null || val == undefined || val == '') return '0';
  const num = Number(val)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  if (Number.isNaN(num)) return val;
  return num.toLocaleString('ja-JP');
};
export {convertToNumberCommas};

// https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
