let insertData = function(){
    let init = function(){
        clickEvent();
    };

    async function clickEvent(){ 
       AddData();
    };

    async function AddData(){
        $("#" + constant.WebButton.btnInsertData).click(function(e){           
            e.preventDefault();

            if (!NMICore.Validation.ValidateForm(constant.Form.clientFormId)) {
                return;
            };  

            let _urls = [
                constant.Url.clientDetail,
                constant.Url.clientMessage
            ];

            let clientObj = NMICore.DataConversion.ConvertArrToObj(constant.GrpElemHolder.clientDetail);
            let msgObj = NMICore.DataConversion.ConvertArrToObj(constant.GrpElemHolder.messageDetail);
                
            if((!NMICore.ObjectValidation.IsObjectEmpty(clientObj))
                     && (!NMICore.ObjectValidation.IsObjectEmpty(msgObj))){
                let dto = [
                    clientObj,
                    msgObj
                ];
    
                NMICore.Ajax.Post(constant.Form.clientFormId, constant.MethodType.Post, _urls, dto);
            }
        });       
    } 

    return{
        init: init
    };
}();