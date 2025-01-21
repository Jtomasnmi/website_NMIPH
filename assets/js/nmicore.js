var NMICore = (function () {
    var NMICore_Ajax = (function () {
        var post = function (formId, methodType, _urls, dto){
            
            var dataPost = $('#' + formId).serialize();
                if (!dto) {
                    dto = dataPost;
                }

            $.ajax({
                method: methodType,
                url: _urls[0],
                dataType: "html",
                data: dto[0],
                success: function(response){
                    let clientdetaild = response;
                    dto[1]['clientdetailid'] = clientdetaild;
                    $.ajax({
                        method: methodType,
                        url: _urls[1],
                        dataType: "html",
                        data: dto[1],
                        success: function(data){
                            // if(data){
                            //     toastr.success(constant.Message.dropMsgSuccess);
                            //     fnClearFieldValue(formId);
                            // }
                            toastr.success(constant.Message.dropMsgSuccess);
                            fnClearFieldValue(formId);
                        },
                        error: function () {
                            toastr.error(constant.Message.dropMsgError);
                        }
                    });    
                },
                error: function () {
                    toastr.error(constant.Message.dropMsgError);
                }
            });
        };

        var get = function (_url, keyChecker = null, appendElementId = null, appendedElementTag = null){ 
            $.get({
                url : _url,
                success: function(data){
                    data = JSON.parse(data);
                   
                    $(data).each(function(key,value){
                        data = value;

                        $.each(data, function(key,value) {
                            if(((key === keyChecker) && (keyChecker !== null)) && (value.indexOf(',') != -1)) {
                                var array = value.split(",");                                   
                                
                                $.each(array,function(i){         
                                    if(key === constant.KeyChecker.dCoreValues){
                                        $("#" + appendElementId).append($('<' + appendedElementTag + '>').text(array[i]));
                                    }

                                    if(key === constant.KeyChecker.fdDescription){                 
                                        $("#" + appendElementId).append($('<li>').addClass("bi bi-arrow-return-right").text(array[i]));      
                                    }                                                     
                                });                                                                         
                            }else{
                                $("[name=" + "'c-" + key + "']").text(value);                                       
                            } 
                        }) 
                    });
                }
            });
        };

        return  {
            Post: post,
            Get: get
        };
    }());

    var NMICore_Validation = (function () {
        var validateEntry = function (formId) {  
            var requiredClass = 'bfl-validate-required';
            var hasErrors = 0;
            var form = document.getElementById(formId);

            for (var i = 0; i < form.elements.length; i++) {
                var elementId = form.elements[i].id;
                if (elementId == '') {
                    continue;
                }

                var elementObject = $('#' + elementId.replace('/', ''));

                elementObject.next().remove('.diverror');
                elementObject.parent().next().remove('.diverror');

                if (form.elements[i].hasAttribute('req') | form.elements[i].hasAttribute('req-email')) {
                    var errMsg = "";

                    if ((($.trim(form.elements[i].value) === '' || form.elements[i].value === "0") && form.elements[i].hasAttribute('req'))) {
                        errMsg += "Field is required. ";

                        elementObject.addClass(requiredClass);
                        elementObject.after("<div class='diverror'>" + errMsg + "</div>");
                    
                        hasErrors++;  
                    }

                    if (form.elements[i].hasAttribute('req-email')) {
                        if (!fnValidateEmail($.trim(form.elements[i].value))) {
                            elementObject.after("<div class='diverror'>" + errMsg + "This is not a valid email format. </div>");
                            hasErrors++;
                        }
                    }
                }
            }
            if (hasErrors > 0) { return false; }
            else { return true; }
            };

        return  {
            ValidateForm: validateEntry
        };
    }());

    var NMICore_DataConversion = (function () {
        var convertArrToObj  = function(grpName){
            let elementarr = [];
      
            $('#' + grpName + ' *').filter(':input').each(function () {           
                elementarr.push([$(this).attr('name'), $(this).val()]);  
            }); 
      
            return obj = Object.fromEntries(elementarr);
          }
      
        return  {
            ConvertArrToObj: convertArrToObj
        };
    }());

    var NMICore_ObjectValidation = (function () {
        var isObjectEmpty  = function(obj){
            return Object.keys(obj).length === 0;
        }
      
        return  {
            IsObjectEmpty: isObjectEmpty
        };       
    }());

    var fnValidateEmail = function (email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(email)) {
            return false;
        } else {
            return true;
        }
    };

    var fnClearFieldValue = function (formId) {
        $.each(constant.ElemTypeObj, function(i, value) {
            $("#" + formId).find(value).val("");
        });    
    };

    return {
        Ajax: {
            Post: NMICore_Ajax.Post,
            Get: NMICore_Ajax.Get
        },
        Validation: {
            ValidateForm: NMICore_Validation.ValidateForm
        },
        DataConversion: {
            ConvertArrToObj: NMICore_DataConversion.ConvertArrToObj
        },
        ObjectValidation: {
            IsObjectEmpty: NMICore_ObjectValidation.IsObjectEmpty
        }
    }
}());