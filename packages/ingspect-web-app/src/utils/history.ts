import { History } from "history";

import Observable from "./observable";

interface ISearchParamsDict {
  [key: string]: string;
}

function getCurrentSearch(): string | undefined {
  const currentUrl = new URL(window.location.href);
  const searchQuery = currentUrl.searchParams.get("search") || undefined;

  return searchQuery;
}

function getSearchUpdateObservable(
  history: History
): Observable<string | undefined> {
  return new Observable(next => {
    const unlisten = history.listen(location => {
      const { pathname } = location;

      if (pathname === "/search") {
        next(getCurrentSearch());
      }
    });

    return unlisten;
  });
}

function updateHistory(
  history: History,
  path: string,
  search?: ISearchParamsDict
): void {
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

export { getCurrentSearch, getSearchUpdateObservable, updateHistory };
