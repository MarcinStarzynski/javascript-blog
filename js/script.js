'use strict'
{////document.getElementById('test-button').addEventListener('click', function(){
   //const links = document.querySelectorAll('.titles a');
    //console.log('links:', links);
  //});
      const titleClickHandler = function(){
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!');

      /* remove class 'active' from all article links  */
      
        const activeLinks = document.querySelectorAll('.titles a.active');

        for(let activeLink of activeLinks){
            activeLink.classList.remove('active');
        }
      /* add class 'active' to the clicked link */

        clickedElement.classList.add('active');
        console.log('clickedElement:', clickedElement);

      /* remove class 'active' from all articles */

        const activeArticles = document.querySelectorAll('.posts article.active');

        for(let activeArticle of activeArticles){
            activeArticle.classList.remove('active');
        }
      /* get 'href' attribute from the clicked link */

        const articleSelector = clickedElement.getAttribute('href');
        console.log(articleSelector);

      /* find the correct article using the selector (value of 'href' attribute) */

        const targetArticle = document.querySelector(articleSelector);
        console.log(targetArticle);

      /* add class 'active' to the correct article */

        targetArticle.classList.add('active');

    }
        const links = document.querySelectorAll('.titles a');
  
        for(let link of links){
            link.addEventListener('click', titleClickHandler);
        }
      const generateTitleLinks = function(){
            const clickedElement = this;
            console.log('Title was clicked');
      /* remove links list */

            const linksList = document.querySelector('ul.list');
            console.log(linksList);
            linksList.innerHTML= "";
            
      /* read article id and save it as const */

      /* find element with title and save it as const */

      /* write html code from both const */

      /* input html code to column */      
      }
      generateTitleLinks()
      
}