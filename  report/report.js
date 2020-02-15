$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/task.feature");
formatter.feature({
  "line": 2,
  "name": "validate flipkart item",
  "description": "",
  "id": "validate-flipkart-item",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TaskTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "validate cost of samsung mobile and add it to cart",
  "description": "",
  "id": "validate-flipkart-item;validate-cost-of-samsung-mobile-and-add-it-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter URL as https://www.flipkart.com/",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "close popup",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "type samsung in search box and hit enter",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "get the title and price of the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click the first link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "switch to the first window",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "get the title and price of the searched mobile",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "price of the searched mobile matches with the source",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on go to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "price of the added cart is same as previous",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on place order",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipkartTaskMethods.open_firefox_browser()"
});
formatter.result({
  "duration": 33273758865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.flipkart.com/",
      "offset": 13
    }
  ],
  "location": "FlipkartTaskMethods.enter_url(String)"
});
formatter.result({
  "duration": 9088814270,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.close_popup()"
});
formatter.result({
  "duration": 1336900938,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.type_samsung_in_search_box_and_hit_enter()"
});
formatter.result({
  "duration": 1817096325,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.get_the_title_and_price_of_the_first_link()"
});
formatter.result({
  "duration": 4165090533,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.click_the_first_link()"
});
formatter.result({
  "duration": 4860524752,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.switch_to_the_first_window()"
});
formatter.result({
  "duration": 75879741,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.get_the_title_and_price_of_the_searched_mobile()"
});
formatter.result({
  "duration": 3503115259,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.price_of_the_searched_mobile_matches_with_the_source()"
});
formatter.result({
  "duration": 1369632,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.click_on_go_to_cart()"
});
formatter.result({
  "duration": 451246057,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.price_of_the_added_cart_is_same_as_previous()"
});
formatter.result({
  "duration": 2697868861,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartTaskMethods.click_on_place_order()"
});
formatter.result({
  "duration": 7473755412,
  "status": "passed"
});
});