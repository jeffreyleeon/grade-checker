const jsdom = require('jsdom');
const Constants = require('../constants/Constants');

var method = DomParser.prototype;

function DomParser() {
}

method.getLoginToken = function(callback) {
  jsdom.env(
    Constants.LOGIN_PAGE,
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
      if (!err) {
        const inputDom = window.$('input[name="lt"]');
        const loginToken = inputDom.val();
        callback(loginToken);
      } else {
        callback(null);
      }
    }
  );
};

module.exports = new DomParser();