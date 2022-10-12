function addUser(){
            
    window.location.href = '/caseReport/add';
}

function cancelAdd(){
    
    window.location.href = '/caseReport';
}

function gotoReport(reportName){
    window.location.href = '/reportsList/?reportName=' + reportName;
}

function openReport(reportURL){
    window.open(reportURL,'_blank').focus();
}
