var InterestPage = function() {
  var radiobtn = element(by.xpath('//*[@id="form-views"]/div[1]/div[2]/label/input'));
  var submitbtn2 = element (by.xpath('/html/body/div[3]/div/div/div/div/form/div/div[2]/div/a'));

  expect(true).toBe(true);

browser.driver.manage().window().maximize();
browser.driver.manage().timeouts().setScriptTimeout(60000);

this.get = function() {
   browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests');
    
  };

this.radiobtn = function(radio) {
  radiobtn.click(radio);
  };

  this.submitbtn2 = function(submit2) {
    submitbtn2.click(submit2);
    };
};
module.exports = InterestPage