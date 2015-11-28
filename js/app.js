var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    //alert("hi");
    console.log("works");
    /**option values**/
    $scope.sample = [{
        id: '1',
        name: 'ProgressBar1'
    },  {
        id: '2',
        name: 'ProgressBar2'
    }, {
        id: '3',
        name: 'ProgressBar3'
    }];
    $scope.selected_item = $scope.sample[0];
    /**add/delete fn**/

      $scope.changeProgress = function (valclk, signMath) {
        var sel_value = $scope.selected_item.name;
        var old_wid = $("#" + sel_value).find(".progress-bar").width() / $("#" + sel_value).find(".progress-bar").parent().width() * 100;
        if (signMath == 'plus') {
          //  alert(valclk);
            if(valclk == 10){
            var new_wid =Math.round(old_wid+10)+"%";
            $("#"+sel_value).find(".progress-bar").width(new_wid);
            $("#"+sel_value).find(".progress_value").html(new_wid);
          }
            else{
            var new_wid = Math.round(old_wid+25)+"%";
            $("#"+sel_value).find(".progress-bar").width(new_wid);
            $("#"+sel_value).find(".progress_value").html(new_wid);
          //  alert(signMath);
        }
          }
         else if (signMath == 'minus'){
          //   alert(valclk);
           if(valclk == 10){
           var new_wid = Math.round(old_wid-10)+"%";
           $("#"+sel_value).find(".progress-bar").width(new_wid);
           if(new_wid < 0+"%"){$("#"+sel_value).find(".progress_value").html("0%");$("#"+sel_value).find(".progress-bar").width("0");}
           else $("#"+sel_value).find(".progress_value").html(new_wid);}
           else{
           var new_wid =  Math.round(old_wid-25)+"%";
           $("#"+sel_value).find(".progress-bar").width(new_wid);
           if(new_wid < 0+"%"){$("#"+sel_value).find(".progress_value").html("0%");$("#"+sel_value).find(".progress-bar").width("0");}
           else $("#"+sel_value).find(".progress_value").html(new_wid);}
          // alert(new_wid);
          // alert(signMath);
        }
           };
});
