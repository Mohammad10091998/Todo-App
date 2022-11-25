
//adding different background color for different categories
var categories = document.querySelectorAll('#category-p-tag');

for(let category of categories){
    let categoryString = category.innerHTML.trim();
    category.style.backgroundColor = "rgb(194, 97, 176)";
    const personal = "PERSONAL";
    const work = "WORK";
    const education = "EDUCATION";
    const other = "OTHER";
    if(categoryString.localeCompare(personal) == 0){

        category.style.backgroundColor = "rgb(185, 66, 99)";

    }else if(categoryString.localeCompare(work) == 0){
       
        category.style.backgroundColor = "rgb(151, 86, 207)";

    }else if(categoryString.localeCompare(education) == 0){
       
        category.style.backgroundColor = "rgb(29, 112, 73);";

    }else if(categoryString.localeCompare(other) == 0){
        
        category.style.backgroundColor = "rgb(66, 109, 174)";
    }
}

