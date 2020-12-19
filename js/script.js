'use strict';
{////document.getElementById('test-button').addEventListener('click', function(){
  //const links = document.querySelectorAll('.titles a');
  //console.log('links:', links);
  //});
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagSelector = '.post-tags',
    optArticleAuthorSelector = '.post-author';

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;

    /* remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');

  };

  const generateTitleLinks = function(customSelector =''){
    //event.preventDefault();

    /* remove links list */

    const linksList = document.querySelector(optTitleListSelector);
    linksList.innerHTML= '';

    /* read article id and save it as const */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for(let article of articles){
      const articleId = article.getAttribute('id');

      /* find element with title and save it as const */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* write html code from both const */

      const linkHTML = '<li><a href="#' + articleId + ' "><span>' + articleTitle + '</span></a></li>';

      /* input html code to column */

      html = html + linkHTML;
    }

    // titleList.innerHTML = html;
    linksList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  };
  generateTitleLinks();

  const generateTags = function(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for(let article of articles){

      /* find tags wrapper */
      let tagsWrapper = article.querySelector(optArticleTagSelector);

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const tagsList = article.getAttribute('data-tags');

      /* split tags into array */
      const tagsArray = tagsList.split(' ');

      /* START LOOP: for each tag */
      for(let tag of tagsArray){

        /* generate HTML of the link */
        let tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /* add generated code to html variable */
        html = html + tagHTML;

      /* END LOOP: for each tag */
      }

      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

    /* END LOOP: for every article: */
    }

  };

  generateTags();

  const tagClickHandler = function(event){
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);//DONE

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);//DONE

    /* find all tag links with class active */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(tagLinks);

    /* START LOOP: for each active tag link */
    for(let tagLink of tagLinks){

      /* remove class active */
      tagLink.classList.remove('active');

    /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */
    let tagLinksActive = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for(let tagLinkActive of tagLinksActive){

      /* add class active */
      tagLinkActive.classList.add('active');

    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

  };

  const addClickListenersToTags = function(){
    /* find all links to tags */
    let links = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for( let link of links){
      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);
      //console.log('Link was clicked');

    /* END LOOP: for each link */
    }

  };
  const generateAuthors = function(){

    /* Find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* Start LOOP for every article */
    for(let article of articles){

      /* Find author wrapper */
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      console.log(authorWrapper);

      /* Make empty html variable*/
      let html = '';

      /* Get author from data-author atribute */
      const author = article.getAttribute('data-author');
      console.log(author);

      /* Generate html link code for author */
      const authorHTML = '<a href="#' + author +'"> ' + author + '</a>';
      console.log(authorHTML);

      /* Add html author code to empty html variable*/
      html = html + authorHTML;

      /* Display html in wrapper*/
      authorWrapper.innerHTML = html;

    /* End LOOP for every article */
    }

  };

  generateAuthors();



  addClickListenersToTags();
}
