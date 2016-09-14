var app = angular.module('myApp', []);
app.controller('myCtrl',function ($scope,Bars) {   
    Bars.getAll().then(function(bars){
        $scope.bars = bars;
        console.log(bars.bars);
        $scope.$apply();
    });         
$scope.changeProgress = function (bars,Event) {  
       var sel_value = $("#p_bar_select :selected").text();
	   var old_wid = $("#"+sel_value).text();
       var btn1 = event.currentTarget.innerHTML;
       var limit = $("#limit").text();
       limit = parseInt(limit);
            t1= parseInt(old_wid);
            t2= parseInt(btn1);
            t =Math.round(t1+t2);
            new_wid =t+"%";
            $("#"+sel_value).width(new_wid);
            $("#"+sel_value).find("span").html(new_wid);
                if(t<0){$("#"+sel_value).find("span").html("0");}
                if(t >= limit)
                {
                    $("#"+sel_value).find(".progress-bar").css("background-color","green");
                }
                else 
                {
                    $("#"+sel_value).find(".progress-bar").css("background-color","#f0ad4e");
                } 
           };
});

app.service('Bars', function(){
    var endpoint = 'http://pb-api.herokuapp.com/bars';
    this.getAll = function(){
        return $.get(endpoint);
        
    }

});
