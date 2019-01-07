var nonsense = [
  'Shame!',
  'Sad!',
  'So sad!',
  'Great!',
  'So great!',
  'Very sad!',
  'Too bad!',
  'All lies!',
  'No collusion!',
  'Big win!',
  'Big Republican win!',
  'Crazy!',
  'Smart!',
  'MAGA!'
];

function getRandomItemFrom (array) {
  return array[Math.floor(Math.random()*array.length)];
};

function toTrumpCase (string) {

  if (!string && !(this instanceof String)) {
		console.warn && console.warn('Warning: `toTrumpCase` expects to be called with or on a string.');
    return getRandomItemFrom(nonsense);
  }

	var inputString = string || this;
  return inputString.split(' ')
    .concat(getRandomItemFrom(nonsense))
  	.map(function (item) {
      return item.length > 2 && Math.random() < 0.2
        ? item.toUpperCase()
        : item;
    })
    .join(' ');
}

String.prototype.toTrumpCase = toTrumpCase;

module.exports = toTrumpCase;
