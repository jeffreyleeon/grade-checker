const DomParser = require('./parser/DomParser');

var method = CASSystem.prototype;

function CASSystem() {
}

method.getGrades = function() {
  DomParser.getLoginToken((token) => {
    console.log('======token ', token);
  });
};

module.exports = new CASSystem();