$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/f0Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  user wants to login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f0"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user provides invalid credentials \"\u003cuname\u003e\" \"\u003cupass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "validation messege appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "upass"
      ]
    },
    {
      "cells": [
        "abcde",
        "pass12"
      ]
    },
    {
      "cells": [
        "abcfe",
        "pass123"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user provides invalid credentials \"abcde\" \"pass12\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_invalid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation messege appears",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validation_messege_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user provides invalid credentials \"abcfe\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_invalid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation messege appears",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validation_messege_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0p"
    }
  ]
});
formatter.step({
  "name": "user provides valid credentials \"\u003cuname\u003e\" \"\u003cupass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates to profile \"\u003cprofile\u003e\" homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "upass",
        "profile"
      ]
    },
    {
      "cells": [
        "new0",
        "pass123",
        "New Learner"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0p"
    }
  ]
});
formatter.step({
  "name": "user provides valid credentials \"new0\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to profile \"New Learner\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_profile_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});