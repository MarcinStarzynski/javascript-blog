'use strict'
{////document.getElementById('test-button').addEventListener('click', function(){
   //const links = document.querySelectorAll('.titles a');
    //console.log('links:', links);
  //});
      const titleClickHandler = function(event){
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

        const activeArticles = document.querySelectorAll('.posts .active');

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
        
        const generateTitleLinks = function(){
            //event.preventDefault();

      /* remove links list */

            const linksList = document.querySelector('.titles');
            console.log(linksList);
            linksList.innerHTML= "";

      /* read article id and save it as const */

            const articles = document.querySelectorAll('.post');

            let html = '';

            for(let article of articles){
                  const articleId = article.getAttribute('id');
                  console.log(articleId);
                  
                  /* find element with title and save it as const */

                  const articleTitle = article.querySelector('.post-title').innerHTML;
                  console.log(articleTitle);

                  /* write html code from both const */

                  const linkHTML = '<li><a href="#' + articleId + ' "><span>' + articleTitle + '</span></a></li>';
                  console.log(linkHTML);

                  /* input html code to column */

                  html = html + linkHTML;
                  console.log(html);
            }
            
           // titleList.innerHTML = html;
            linksList.innerHTML = html;
      
            const links = document.querySelectorAll('.titles a');
  
        for(let link of links){
            link.addEventListener('click', titleClickHandler);
        }
      }
      generateTitleLinks()
}