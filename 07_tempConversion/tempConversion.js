const ftoc = function(fahrenheit){
  celsiusConverted= Number(((fahrenheit-32)*0.5556).toFixed(1))
  return celsiusConverted
};

const ctof = function(celsius) {
  fConverted=Number(((celsius*1.8)+32).toFixed(1))
  return fConverted
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
