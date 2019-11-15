import { browser, protractor} from 'protractor';

var myhomePage = require('./../PageObjects/HomePage.po.ts');
//var hotkeys = require('protractor-hotkeys');

describe('shopkombrewcha homepage', function() {
  it('Kombrewcha Subscription Process - Place Order',  function() {



    var Homepage = new myhomePage();
    Homepage.get();
    
    //Homepage.setEmail('superizvi@gmail.com');
    //beforeEach(function() {
      browser.ignoreSynchronization = true;
    //});
    browser.sleep(3000) ;
     Homepage.submitbtn();

     browser.sleep(3000) ;
     Homepage.AddToCartbtn();

    Homepage.setAddress('lalu deli');
    browser.sleep(3000);
    Homepage.setAddress1(protractor.Key.DOWN);
    
    Homepage.setAddress2(protractor.Key.ENTER);
    browser.sleep(2000);
    //hotkeys.trigger('down');
    //browser.sleep(2000);
    //hotkeys.trigger('enter');
    

    Homepage.searchbtn();
    browser.sleep(5000);

    
    Homepage.selectbtn();

    browser.sleep(15000) ;

  });
});
