let constant = function(){
    let mapPosition = {
        lat: 14.5519,
        lng: 121.0181
    };

    let mapTitle = {
        title: "Raha Sulayman Bldg. 108 Benavidez St., Legaspi Village, Makati City"
    };

    let form = {
        clientFormId: "frmClientContactRegistrationForm",
        companyFormId: "frmCompanyDetailForm",
        companyProfileDetailFormId: "frmCompanyProfileDetailForm",
        companyNewsDetailFormId: "frmCompanyNewsDetailForm"
    };

    let methodType = {
        Post: "POST"
    };

    let url = {
        clientDetail: "controller/clientdetail.php",
        companyDetail: "controller/companydetail.php",
        clientMessage: "controller/clientmessage.php",
        companyProfileHeader: "controller/companyprofileheader.php",
        companyProfileDetail: "controller/companyprofiledetail.php",
        companyNewsHeader: "controller/companynewsheader.php",
        companyNewsDetail: "controller/companynewsdetail.php",
        footerHeader: "controller/footerheader.php",
        footerDetail: "controller/footerdetail.php"
    };
    
    let message = {
        dropMsgSuccess: "Message was successfully submitted and sent an email confirmation, thank you.",
        dropMsgError: "Registration Failed!"
    };

    let webButton = {
        btnInsertData : "btnInsertData"
    };

    let grpElemHolder = {
        clientDetail: "grpClientDetail",
        messageDetail : "grpClientMesage"
    };

    let keyChecker = {
        dCoreValues: "DCoreValues",
        fdDescription: "FDDescription"
    };

    let appendElementIds = {
        dCoreValueList: "DCoreValueList",
        fdDescriptionList: "FDDescriptionList"
    };

    const htmlTagList = [
        "h2",
        "h3",
        "h4",
        "a",
        "p",
        "ul"
    ];

    const elemTypeObj = [
        'input',
        'textarea'
    ];

    let appendedElementTag = {
        li: "li"
    };

    return {
        MapPosition: mapPosition,
        MapTitle: mapTitle,
        Form: form,
        MethodType: methodType,
        Url: url,
        ElemTypeObj: elemTypeObj,
        Message: message,
        WebButton: webButton,
        GrpElemHolder: grpElemHolder,
        HtmlTagList: htmlTagList,
        KeyChecker: keyChecker,
        AppendElementIds: appendElementIds,
        AppendElementTag:  appendedElementTag
    }
}();