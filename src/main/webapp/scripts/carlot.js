function getCarList() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let formList = JSON.parse(xhr.responseText);
            console.log(formList);
            displayCarList(formList);
        }
    }
    xhr.open("GET", "/CarDealership/car", true);
    xhr.send();
}


function getAmount() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let amount = JSON.parse(xhr.responseText);
            console.log(amount);
            displayAmount(amount);
        }
    }

    xhr.open("GET", "/CarDealership/Amounts", true);
    xhr.send();
}



function displayAmount(amount){

    document.getElementById("available").innerHTML = `Available Funds: ${amount.availible}`;
    document.getElementById("awardedyear").innerHTML = `Awarded This Year: ${amount.awardedThisYear}`;
    document.getElementById("total").innerHTML = `Total Awarded: ${amount.awarded}`;


}




function displayCarList(formList){
    
    for(let form of formList) {
        let row = document.createElement("tr");
        row.className = "list-form";
        let type = document.createElement("td");
        let description = document.createElement("td");
        let location = document.createElement("td");
        let submit_date = document.createElement("td");
        let start_date = document.createElement("td");
        let cost = document.createElement("td");
        let reimbursment = document.createElement("td");
        let grading_format = document.createElement("td");
        let ds_approved = document.createElement("td");
        let dh_approved = document.createElement("td");
        let bc_approved = document.createElement("td");
        
        type.innerHTML = form.type;
        description.innerHTML = form.description;
        location.innerHTML = form.location;
        submit_date.innerHTML = form.submit_date;
        start_date.innerHTML = form.start_date;
        cost.innerHTML = form.cost;
        reimbursment.innerHTML = form.reimbursment;
        grading_format.innerHTML = form.grading_format;
       
        switch (form.ds_approved) {
            case 1:
                ds_approved.innerHTML = "Pending";
                break;
            case 2:
                ds_approved.innerHTML = "Rejected";
                break;            
            case 3:
                ds_approved.innerHTML = "Accepted";
                break;
            default:
                break;
        }

               
        switch (form.dh_approved) {
            case 1:
                dh_approved.innerHTML = "Pending";
                break;
            case 2:
                dh_approved.innerHTML = "Rejected";
                break;            
            case 3:
                dh_approved.innerHTML = "Accepted";
                break;
        
            default:
                break;
        }


                       
        switch (form.bc_approved) {
            case 1:
                bc_approved.innerHTML = "Pending";
                break;
            case 2:
                bc_approved.innerHTML = "Rejected";
                break;            
            case 3:
                bc_approved.innerHTML = "Accepted";
                break;
        
            default:
                break;
        }
  
        row.appendChild(type);
        row.appendChild(description);
        row.appendChild(location);
        row.appendChild(submit_date);
        row.appendChild(start_date);
        row.appendChild(cost);
        row.appendChild(reimbursment);
        row.appendChild(grading_format);
        row.appendChild(ds_approved);
        row.appendChild(dh_approved);
        row.appendChild(bc_approved);
        document.getElementById("carTable").appendChild(row);


        
       
                
    }
}

window.onload = function () {
    this.getCarList();
    this.getAmount();
}