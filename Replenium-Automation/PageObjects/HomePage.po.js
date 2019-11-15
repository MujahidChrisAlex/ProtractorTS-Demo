var Homepage = function() {
  //var nameInput = element(by.name('name'));
  //var emailInput = element(by.name('email'));
  var submitbtn =  element (by.xpath('/html/body/div[1]/div[3]/form/button[1]'));
  var AddToCartbtn = element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/form/div[4]/button'));
  var addressInput = element (by.name("address"));
  var searchbtn =  element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/button'));
  var selectbtn =  element (by.xpath('/html/body/div[1]/main/div/div/div/section[3]/div/div/div[1]/div/div/div[3]/div/rp-brandcart-radios/themedirective/div/div[1]/app-bc-popup/div/app-bc-fulfillment/themedirective/div/form/div[3]/div/div/app-bc-fulfillment-store/div/button'));
  var EC = protractor.ExpectedConditions;

  expect(true).toBe(true);

browser.driver.manage().window().maximize();
browser.driver.manage().timeouts().setScriptTimeout(60000);

this.get = function() {

 
   browser.driver.get('https://staging_heabpi:KNHKRsmpZc4N@shopkombrewchacom.stage.site/');
   //browser.sleep(5000);
  //browser.wait(browser.get("https://shopkombrewchacom.stage.site"), 5000);    
  
  }


/*this.setEmail = function(email) {
  emailInput.sendKeys(email);
  };*/

  this.submitbtn = function(submit) {

    //browser.wait(EC.elementToBeClickable(submitbtn), 5000);
    submitbtn.click(submit);
    };

    this.AddToCartbtn = function(AddToCart) {

      //browser.wait(EC.elementToBeClickable(submitbtn), 5000);
      AddToCartbtn.click(AddToCart);
      };

      this.setAddress = function(address) {
        addressInput.sendKeys(address);
        
        
      };

      this.setAddress1 = function(address) {
        addressInput.sendKeys(address);
        
        
      };
      this.setAddress2 = function(address) {
        addressInput.sendKeys(address);
        
        
      };

      this.searchbtn = function(search) {

        
        searchbtn.click(search);
        };

        this.selectbtn = function(select) {

          browser.wait(EC.elementToBeClickable(selectbtn), 10000);
          selectbtn.click(select);
          };

};
module.exports = Homepage