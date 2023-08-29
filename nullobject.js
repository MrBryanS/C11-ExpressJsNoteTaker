public static String chkobj(String strToCheck) {  
    // check whether the given string is null or not  
if (strToCheck == null) {  
    return "NULL";  
    }  
    // check whether the given string is empty or not  
else if(strToCheck.isEmpty()) {  
    return "EMPTY";  
    }  
    // check whether the given string is blank or not  
else if(strToCheck.isBlank()) {  
    return "BLANK";  
    }  
else {  
    return "neither NULL, EMPTY nor BLANK";  
    }  
}  

export chkobj = new nullobject ();

