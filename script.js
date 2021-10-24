
let greenCheckbox = document.getElementById('greenify');
let whiteBoxes = document.querySelectorAll('.white');

greenCheckbox.addEventListener('click', (e)=>{

    if(e.target.checked){

        let usedIndexes =[];
        let selected = [];
        let totalNumBoxes = whiteBoxes.length;
        while(selected.length < 3 ){
            let curr =  Math.floor(Math.random() * totalNumBoxes);

            if(!usedIndexes.includes(curr)){
                usedIndexes.push(curr)
                selected.push(curr);
            }
        }
        for(let i = 0 ; i < selected.length ; i++ ){
            whiteBoxes[selected[i]].classList.add("green");
            whiteBoxes[selected[i]].classList.remove("white");
            
        }

     
    }
    else{
        let greenBoxes = document.querySelectorAll('.green');
        for(let i = 0 ; i < greenBoxes.length ; i++ ){
            greenBoxes[i].classList.add("white");
            greenBoxes[i].classList.remove("green");
            
        }
  
    
    }

})