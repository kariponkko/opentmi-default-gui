'use strict';	

angular.module('tmtControllers')
  .controller("MenuController", function($scope, $http) {
    //http://quarktheme.com/typography-icons/
    $scope.menus = [
    {
      title: "Test Management", tooltip: 'test', icon: 'cogs',
      menus: [
        { title: "Testcases", tooltip: 'test', action: "#/testcases" },
        { title: "Testcase Analyse", tooltip: 'test analyse', action: "#/testcases-analyse" },
        { title: "Testcase Tree", action: '#/testcases/tree'},
        { title: "Campaigns", tooltip: '', action: "#/campaigns" }
      ]
    },
    {
      title: "Mesh", tooltip: 'Mesh', icon: 'cogs',
      menus: [
        { title: "Topologies", action: "#/topology" },
        { title: "Create Topology", action: "#/topology/new" }
      ]
    },
    {
      title: "Test Automation", tooltip: 'test', icon: 'cogs',
      menus: [
        { title: "Plans", tooltip: 'Automation Plans', action: "#/automation/plans" },
        { title: "Tasks", tooltip: 'Generated Automation Tasks', action: "#/automation/tasks" },
        { title: "Schedule", tooltip: 'Task Schedule', action: "#/automation/tasks/schedule" },
        { title: "Configuration", tooltip: 'Scheduler Configuration', action: "#/automation/config" },
      ]
    },
    {
      title: 'SUT', tooltip: 'Software Under Test', icon: 'cogs',
      menus: [
        { title: "Modules", tooltip: 'Yotta Modules', action: "#/yotta#sal-stack-nanostack-eventloop"},
        { title: "Builds", action: "#/duts/builds" },
        { title: "Builds-Tree", action: "#/duts/builds/tree" }
      ]
    },
    {
      title: "DUT", tooltip: 'Device Under Test',
      menus: [
        { title: "Devices", action: "#/resources?type=dut" },
        //{ title: "Features", action: "#/duts/features" },
        //{ title: "Features Tree", action: "#/duts/features/tree" },
        { title: "Targets", action: "#/duts/targets"},
        //{ title: "Specifications", action: "#/duts/specifications" },
      ]
    },
    {
      title: "Resources", tooltip: 'Test rets',
      menus: [
        { title: "Resources", action: "#/resources" },
        { title: "Specifications", action: "#/specifications" },
        { title: "Features", action: "#/features" }
      ]
    },
    {
      title: "Results", tooltip: 'Test Results',
      menus: [
        { title: "Results", action: "#/results" },
        { title: "Analyse", action: "#/results-analyse" }
      ]
    },
    {
      title: "Reports", tooltip: 'Test Reports',
      menus: [
        { title: "Reports", action: "#/reports" },
        { title: "Templates", action: "#/reports/templates" }
      ]
    }
    ];
    
    $scope.cmenu = {
      title: "", tooltip: 'test', icon: 'cogs',
      menus: [
        {  title: "Accounts", tooltip: 'Manage Accounts', action: "#/accounts" },
        {  title: "Groups", action: "#/groups" },
        {  title: "Settings", action: "#/settings" },
        {  title: "Addons", action: "#/addons" },
      ]
    }
    
  })
  .controller('MainController', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'General Purpose Test Management and automation framework';
  })
  .controller('ConfigController', function($scope) {
    $scope.message = 'There will be app configurations';
  })
  .controller('AboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
  })

  .controller('ContactController', function($scope) {
    $scope.message = 'Jussi Vatjus-Anttila';
  });
 