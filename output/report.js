$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/features/HomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Etergo Technical Assessment Homepage validation",
  "description": "\nCustomer should be able to use Zoom function from Homepage by\nZoomIn button\nZoomOut button",
  "id": "etergo-technical-assessment-homepage-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Validate Etergo Technical Assessment Homepage",
  "description": "",
  "id": "etergo-technical-assessment-homepage-validation;validate-etergo-technical-assessment-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Customer is on Etergo HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Validate the elements on Etergo HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePageVerification()"
});
formatter.result({
  "duration": 7711788091,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validateHomePageElements()"
});
formatter.result({
  "duration": 589066871,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate ZoomIn function in Etergo Technical Assessment Homepage",
  "description": "",
  "id": "etergo-technical-assessment-homepage-validation;validate-zoomin-function-in-etergo-technical-assessment-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Customer is on Etergo HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Customer clicks on ZoomIn button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Validate Zoom value is increased by 25%",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePageVerification()"
});
formatter.result({
  "duration": 144243059,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickZoomIn()"
});
formatter.result({
  "duration": 595888922,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validateZoomIn()"
});
formatter.result({
  "duration": 899644437,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate ZoomOut function in Etergo Technical Assessment Homepage",
  "description": "",
  "id": "etergo-technical-assessment-homepage-validation;validate-zoomout-function-in-etergo-technical-assessment-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Customer is on Etergo HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Customer clicks on ZoomOut button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Validate Zoom value is decreased by 25%",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePageVerification()"
});
formatter.result({
  "duration": 56261926,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickZoomOut()"
});
formatter.result({
  "duration": 521168422,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validateZoomOut()"
});
formatter.result({
  "duration": 910988699,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate Maximum value for ZoomIn function in Etergo Technical Assessment Homepage",
  "description": "",
  "id": "etergo-technical-assessment-homepage-validation;validate-maximum-value-for-zoomin-function-in-etergo-technical-assessment-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Customer is on Etergo HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Customer clicks on ZoomIn button for Maximum limit",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Validate ZoomIn button is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePageVerification()"
});
formatter.result({
  "duration": 61879791,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickZoomInMaxVal()"
});
formatter.result({
  "duration": 8205182043,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.disableZoomIn()"
});
formatter.result({
  "duration": 60326461,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate Maximum value for ZoomOut function in Etergo Technical Assessment Homepage",
  "description": "",
  "id": "etergo-technical-assessment-homepage-validation;validate-maximum-value-for-zoomout-function-in-etergo-technical-assessment-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Customer is on Etergo HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Customer clicks on ZoomOut button for Maximum limit",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Validate ZoomOut button is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.homePageVerification()"
});
formatter.result({
  "duration": 30281027,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickZoomOutMaxVal()"
});
formatter.result({
  "duration": 9295852232,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.disableZoomOut()"
});
formatter.result({
  "duration": 189559003,
  "status": "passed"
});
});