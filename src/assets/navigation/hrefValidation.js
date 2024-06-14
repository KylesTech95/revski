import getPath from "./getPath";

// check if url matches window's href
const ifURLMatchesHref = (row, window) => {
  // capture the last section in an href with getPath function
  // store captured data in href varable
  let href = getPath(window.location.href.split`/`);
  // initialize an empty array
  let arr = [];
  // iterate through each row
  row.forEach((article, index) => {
    // capture the last section in an href with getPath function
  // store captured data in ahref varable
    let ahref = getPath(article.href.split`/`);
    // compare article and window href for validation
    if (ahref === href) arr.push(article);
  });
  // return 2 instances of the current Href
  return [...arr];
};

export default ifURLMatchesHref;
