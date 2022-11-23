const cvjsonlink = 'cv.json';
const cvContainer = document.querySelector('.cv-container')

//Get CV async function start
async function getcv(){
    let cvJson = await fetch(cvjsonlink);
    //console.log(cvJson);

    //If cvJson ok start
    if(cvJson.ok){
        let cv = await cvJson.json();
        //console.log(cv);

        //For loop cv.length start
        for(let i = 0; i < cv.length; i++){
            //console.log(`cv[${i}]`, cv[i]);

            newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'cv-info');

            newH2 = document.createElement('h2');
            newH2.setAttribute('class', 'text-effect')
            newH2.innerText = cv[i].title;
            newDiv.appendChild(newH2);
            
            cvContainer.appendChild(newDiv);

            //for loop cv[i].cvInfo.length start
            for(let j = 0; j < cv[i].cvInfo.length; j++){
                newDl = document.createElement('dl');
                newDl.setAttribute('class', 'hidden')
                newDiv.appendChild(newDl);

                newItemTitle = document.createElement('dt');
                newItemTitle.innerText = cv[i].cvInfo[j].itemTitle;
                newDl.appendChild(newItemTitle);

                newItemYear = document.createElement('dd');
                newItemYear.innerText = cv[i].cvInfo[j].itemYear;
                newDl.appendChild(newItemYear);

                newItemDescription = document.createElement('dd');
                newItemDescription.innerText = cv[i].cvInfo[j].itemDescription;
                newDl.appendChild(newItemDescription);
            }
            //for loop cv[i].cvInfo.length end

        }
        //For loop cv.length end

        //Intersection Observer start
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) =>{
                //console.log(entry)
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
        //Intersection Observer end
    }
    //If cvJson ok end
}
//Get CV async function end

getcv();
