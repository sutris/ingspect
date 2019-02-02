import { createBrowserHistory } from "history";

const history = createBrowserHistory();

interface ISearchParamsDict {
  [key: string]: string;
}

function updateHistory(path: string, search?: ISearchParamsDict) {
  let newPath;

  if (search) {
    const searchParams = new URLSearchParams(window.location.search);

    for (const key of Object.keys(search)) {
      searchParams.set(key, search[key]);
    }

    newPath = `${path}?${searchParams.toString()}`;
  } else {
    newPath = path;
  }

  history.push(newPath);
}

export default history;
export { updateHistory };
