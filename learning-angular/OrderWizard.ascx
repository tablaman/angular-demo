<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="TestAngular.ascx.cs" Inherits="SitefinityWebApp.Widgets.Forms.OrderWizard" %>


<div ng-app="customersApp">

<header>
    <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
            <li><a href="#/customers">Customers</a></li>
            <li><a href="#/orders">Orders</a></li>
            <li><a href="#/forms">Forms</a></li>
        </ul>
    </nav>
</header>
    <!-- MAIN -->
   <div ng-view class="slide-animation"></div>
<footer>
    
    
</footer>

<!--
<script src="angular.js"></script>
<script src="amcom.wizard.js"></script>
<script>
    var app = angular.module('amcom.sitefinity.test', ['amcom.wizard']);
    app.controller('TestController', function ($scope) { });
</script>
-->