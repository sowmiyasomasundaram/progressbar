var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    //alert("hi");
    console.log("works");
    /**option values**/
    $scope.sample = [{
        id: '1',
        name: 'ProgressBar1',
    },  {
        id: '2',
        name: 'ProgressBar2',
    }, {
        id: '3',
        name: 'ProgressBar3',	
    }];
    $scope.selected_item = $scope.sample[0];
    /**add/delete fn**/
      $scope.changeProgress = function (valclk, signMath) {
       var sel_value = $scope.selected_item.name;
	   var old_wid = $("#" + sel_value).find("span").text();
        if (signMath == 'plus') {
          //  alert(valclk);
            if(valclk == 10){
			t1= parseInt(old_wid);
            t =Math.round(t1+10);
            new_wid =t+"%";
            $("#"+sel_value).find(".progress-bar").width(new_wid);
            $("#"+sel_value).find("span").html(new_wid);
            if(t >= 100){$("#"+sel_value).find(".progress-bar").css("background-color","green");}
            else{$("#"+sel_value).find(".progress-bar").css("background-color","#f0ad4e");}
            }
            else{
			t1= parseInt(old_wid);
            t =Math.round(t1+25);
            new_wid =t+"%";
            $("#"+sel_value).find(".progress-bar").width(new_wid);
            $("#"+sel_value).find("span").html(new_wid);
            if(t >= 100){$("#"+sel_value).find(".progress-bar").css("background-color","green");}
          //  alert(signMath);
        }
          }
         else if (signMath == 'minus'){
          //   alert(valclk);
           if(valclk == 10){
		   t1= parseInt(old_wid);
           t =Math.round(t1-10);
           new_wid =t+"%";
           $("#"+sel_value).find(".progress-bar").width(new_wid);
           if(t < 100){$("#"+sel_value).find(".progress-bar").css("background-color","#F0AD4E");}
           if(new_wid < 0+"%"){$("#"+sel_value).find("span").html("0%");$("#"+sel_value).find(".progress-bar").width("0");}
           else $("#"+sel_value).find("span").html(new_wid);
         }
           else{
          t1= parseInt(old_wid);
          t =Math.round(t1-25);
           new_wid =t+"%";
           $("#"+sel_value).find(".progress-bar").width(new_wid);
           if(t < 100){$("#"+sel_value).find(".progress-bar").css("background-color","#F0AD4E");}
           if(new_wid < 0+"%"){$("#"+sel_value).find("span").html("0%");$("#"+sel_value).find(".progress-bar").width("0");}
           else $("#"+sel_value).find("span").html(new_wid);}
          // alert(new_wid);
          // alert(signMath);
        }
           };
});
