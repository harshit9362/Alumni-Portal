
    function validate() {
        var name= document.myfoorm.field1.value;
        var pass1=document.myfoorm.field2.value;
     
        if(name == "" )
        {
            alert("Please Enter Username!");
            return false;
        }
    
        if(name.length <=7 || name.length >33)
        {
            alert("Please Enter Valid Username!");
            return false;
        }
    
        if(pass1.length<8 || pass1.lengh>24)
        {
            alert("Please Enter Valid Password!");
            return false;
        }
    
        if(pass1 == "")
        {
            alert("Please Enter Your Password!");
            return false;
        }
    
    }

    function ng_contoller() {
        var name= document.myfoorm.field1.value;
        var pass1=document.myfoorm.field2.value;
        var pass2=document.myfoorm.field3.value;
        var mail=document.myfoorm.field4.value;
        var mob=document.myfoorm.field5.value;;
        var app = angular.module('myApp', []);
        app.directive('myDirective', function() {
          return {
            require: 'ngModel',
            link: function(scope, element, attr, mCtrl) {
              function myValidation(value) {
                if (value.indexOf("e") > -1) {
                  mCtrl.$setValidity('charE', true);
                } else {
                  mCtrl.$setValidity('charE', false);
                }
                return value;
              }
              mCtrl.$parsers.push(myValidation);
            }
          };
        });
        if(name == "" )
        {
            alert("Please Enter Username!");
            return false;
        }
    
        if(name.length <=7 || name.length >33)
        {
            alert("Please choose username between 8-32 characters");
            return false;
        }
        if(mob.length != 10)
        {
            alert("Please Enter Valid Mobile Number!");
            return false;
        }
    
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
        return (true);
      }
    }
    