// get path helper
const getPath = (path) => {
  // if path is not defined return undefined, else return the last item in the array
    return !path ? undefined : /reviews/g.test(path[path.length - 2]) ? path[path.length - 2] : path[path.length - 1];
  };

export default getPath