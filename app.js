function func() {
    var name = document.getElementById("fname");
    var mobile = document.getElementById("fmobile");
    var email = document.getElementById("femail");
    
    var x = email.value.indexOf("@");
    var y = email.value.lastIndexOf(".");
    if(name.value.trim() == "" || mobile.value.trim() == "" || email.value.trim() == "") {
        window.alert("Please enter the required field");
    }
    else if(name.value.length < 3) {
        window.alert("Name should be of minimum 3 length");
    }
    else if(mobile.value.length != 10) {
        window.alert("Enter valid mobile number");
    }
    else if(x < 1 || (y - x < 2)) {
        window.alert("Enter valid email");
    }
    else {
        var table = document.getElementById("result");
        var count = 0;
        var row=table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        cell1.innerHTML=name.value;
        cell2.innerHTML=mobile.value;        
        cell3.innerHTML=email.value;
        cell4.innerHTML="<button id='delRow' onclick='del(delRow)'>Delete</a>";
        //cell4.innerHTML="<a href='#' onclick='del(delRow)'>Delete</a>";
    
    }
}


    
