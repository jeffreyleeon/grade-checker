const DomParser = require('./parser/DomParser');
const HTTPRequests = require('./requests/HTTPRequests');

var method = CASSystem.prototype;

function CASSystem() {
}

method.getGrades = function() {
  DomParser.getLoginToken((token) => {
    HTTPRequests.login(token, (res) => {
      
    });
  });
};

module.exports = new CASSystem();