var myInterestPage = require('./../PageObjects/InterestPage.po.js');

describe('Way2Automate Interestpage', function() {
  it('Fill Register form part 2', function() {
    var InterestPage = new myInterestPage();
    InterestPage.get();
    InterestPage.radiobtn();
    
    browser.sleep(3000) ;
    InterestPage.submitbtn2();

    browser.sleep(5000) ;
  });
});