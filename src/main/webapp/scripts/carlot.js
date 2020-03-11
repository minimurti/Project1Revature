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

function displayCarList(formList){
    
    for(let form of formList) {
        let row = document.createElement("tr");
        row.className = "list-form";
        let description = document.createElement("td");
        let location = document.createElement("td");
        let submit_date = document.createElement("td");
        let start_date = document.createElement("td");
        let cost = document.createElement("td");
        let grading_format = document.createElement("td");
        let ds_approved = document.createElement("td");
        let dh_approved = document.createElement("td");
        let bc_approved = document.createElement("td");
        
        description.innerHTML = form.description;
        location.innerHTML = form.location;
        submit_date.innerHTML = form.submit_date;
        start_date.innerHTML = form.start_date;
        cost.innerHTML = form.cost;
        grading_format.innerHTML = form.grading_format;
        ds_approved.innerHTML = form.ds_approved;
        dh_approved.innerHTML = form.dh_approved;
        bc_approved.innerHTML = form.bc_approved;
        
        
        row.appendChild(description);
        row.appendChild(location);
        row.appendChild(submit_date);
        row.appendChild(start_date);
        row.appendChild(cost);
        row.appendChild(grading_format);
        row.appendChild(ds_approved);
        row.appendChild(dh_approved);
        row.appendChild(bc_approved);
        document.getElementById("carTable").appendChild(row);


        
       
                
    }
}

window.onload = function () {
    this.getCarList();
}