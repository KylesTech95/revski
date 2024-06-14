
import getPath from "./getPath";
const ifURLMatchesHref = (row, window) => {
    let href = getPath(window.location.href.split`/`);
    let arr = []
    row.forEach((article, index) => {
      let ahref = getPath(article.href.split`/`);
      if(ahref===href) arr.push(article)
  })
    return [...arr]
  };

  export default(ifURLMatchesHref)