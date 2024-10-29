// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions

/**This is called by main and checks if there is null term and if so it adds a tag.
It then iterates through all tags and adds them as search terms.*/
function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
  console.log("initialize search is running");
}

/** First checks if the search tag's length is 0, in which case it iterates through
 * all articles with a variable and removes all hidden tags from their class lists.
 * Then it makes a new array of articles and sets tags to those. With that, it iterates through
 * a the set of articles and checks if any of them have the text the user inputted as
 * a tag. If not, it will hide the article. Otherwise, it will remove the hidden feature from the article
 * and display it.
 */
function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }


  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here

  
  for (const article of document.querySelectorAll("article"))
  {
    console.log(article);
    
    if (!articlesWithTags.includes(article))
    {
      article.classList.add("hidden");
      console.log("Reached if");
    }
    else
    {
      article.classList.remove("hidden");
      console.log("Reached else");
    }
    
  }
  console.log("hide articles is running");
  
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */
function createTag(text) {
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  button = document.createElement("button");
  button.classList.add("tag");
  button.textContent = text;


  function remove(){
    button.remove();
    console.log("Removed " + text);
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }
    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener('click', remove);
  
  console.log("createtag is running");

  return button;
}

/**
 * Iterates through all articles and checks to see if any of them has text in a tag that contains
 * what the user has entered, not case sensitive. 
 */
function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }
  console.log("find articles with tag is running");
  console.log(articles);
  return articles;
}

/**
 * Adds a tag of user inputted text to page, the text with which it searches the article tags
 * to find matches
 */
function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
  console.log("Added " + text);
  console.log("add search term is running");

}

// Handlers
/**
 * Creates a user input variable whose value is taken as an argument to the add search
 * term function. It then sets the input value to an empty string so the search bar can be freed up after
 * enter is clicked to find articles.
 */
function onSearch(event) {
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if (event.key === "Enter")
  {
    addSearchTerm(input.value);
    input.value = "";
  }
  console.log("on search is running");
  
}


// Main function

/**
 * Runs initialize search and detects input and key pressing for the search bar
 */
function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
  console.log("main is running");
}

// Execute main function
main();



/**
 * Order of execution for each event:
 * Pressing Enter: on search -> create tag -> find articles with tag -> hide articles -> add search term
 * Clicking to Remove a Tag: remove -> hide articles
 * Loading the Page: main -> initialize search
 * 
 * 
 */