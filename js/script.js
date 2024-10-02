function nextId(chdren){
    return chdren.length+1; 
}

function formatText(tText, tFormat){
    let text = tText;
    console.log(tFormat); 
    if (tFormat === "UPPERCASE"){
        text = text.toUpperCase(); 
    }
    else if (tFormat === "lowercase"){
        text = text.toLowerCase(); 
    }
    else {
        
        let idx = 0; 
        let textToReturn = []; 
        let textArr = text.split('');
       
        textArr.forEach(element => {
            if (idx%2 == 0){
                textToReturn.push(element.toUpperCase());
            } else textToReturn.push(element.toLowerCase());
            idx++;
          
        });
        
        return textToReturn.join(''); 

    }
    console.log(text);
    return text; 
}

function addToList(inputField, tFormat, tList){
    let relChildren = document.querySelectorAll("#list tr:not(#top)");
    let text = document.getElementById(inputField).value;
    let format = document.getElementById(tFormat).value; 
   
    let id = nextId(relChildren);
    let newTRElem = document.createElement("tr");
    newTRElem.setAttribute('id', id);
    if (id%2 == 0){
        newTRElem.setAttribute("class", "even"); 
    } else newTRElem.setAttribute("class", "odd"); 
    let newTDIndex = document.createElement('td'); 
    newTDIndex.textContent = id; 
    let newTDText = document.createElement('td'); 
    newTDText.textContent = formatText(text, format); 
    newTRElem.appendChild(newTDIndex);
    newTRElem.appendChild(newTDText);
    document.getElementById('placeToAdd').appendChild(newTRElem); 
}
