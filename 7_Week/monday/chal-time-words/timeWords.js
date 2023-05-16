const timeToWords = (strng) => {
  let [hours, minutes] = strng.split(':').map(Number);
  let period = hours < 12 ? 'am' : 'pm';
  if (hours === 0 || hours === 24) {
    hours = 12;
    period = 'am';
  } else if (hours === 12) {
    period = 'pm';
  } else if (hours > 12) {
    hours -= 12;
    period = 'pm';
  }
  let hourWords = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'][hours % 12];
  let minuteWords = '';
  if (minutes === 0) {
    minuteWords = "o'clock";
  } else if (minutes <= 29) {
    minuteWords = ['oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                     'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen',
                     'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five',
                     'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine'][minutes];
    minuteWords += ' ';
    if (minuteWords === 'twenty ') {
      minuteWords = 'twenty';
    }
    if (minuteWords !== 'quarter ') {
      minuteWords += 'minute';
      if (minutes !== 1) {
        minuteWords += 's';
      }
    }
  } else {
    minuteWords = ['thirty', 'forty', 'fifty'][Math.floor(minutes / 10) - 3];
    if (minutes % 10 !== 0) {
      minuteWords += ` ${['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][minutes % 10 - 1]} minute`;
    }
  }
  let timeWords = `${hourWords} ${minuteWords} ${period}`;
  return timeWords;
};

console.log(timeToWords('12:00')); 
console.log(timeToWords('18:15')); 
