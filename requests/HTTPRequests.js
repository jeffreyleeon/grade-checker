const request = require('request');
const Constants = require('../constants/Constants');

var method = HTTPRequests.prototype;

function HTTPRequests() {
}

method.login = function(loginToken, callback) {
  request.post(
    {
      url: Constants.LOGIN_PAGE,
      form: {
        username: process.env.CAS_USERNAME,
        password: process.env.CAS_PASSWORD,
        lt: loginToken,
        _eventId: 'submit',
      }
    },
    (err, httpResponse, body) => {
      this.gotoTicketPage();
    });
};

method.gotoTicketPage = function() {
  request.cookie('CASTGC=TGT-1551000-rVxfBhwzPOggyKVOB4nfU2Lv0enMoEmp206S30cYjHt2aZFfqF-cas;JSESSIONID=FD69A8971588846BD31A7BBADEEA477D');
  request.post(
    {
      url: Constants.TICKET_URL,
      form: {
      }
    },
    (err, httpResponse, body) => {
      console.log('=====htt: ', body);
    });
};

module.exports = new HTTPRequests();