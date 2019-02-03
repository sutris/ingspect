import EventEmitter from "events";
import { createBrowserHistory, Location } from "history";

interface ISearchParamsDict {
  [key: string]: string;
}

enum HISTORY_EVENT {
  SEARCH_UPDATE = "SEARCH_UPDATE"
}

class HistoryManager extends EventEmitter {
  private _history = createBrowserHistory();

  constructor() {
    super();

    this.history.listen(this.onHistoryUpdate);
  }

  public updateHistory(path: string, search?: ISearchParamsDict): void {
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

    this.history.push(newPath);
  }

  public getCurrentSearch(): string | undefined {
    const currentUrl = new URL(window.location.href);
    const searchQuery = currentUrl.searchParams.get("search") || undefined;

    return searchQuery;
  }

  private onHistoryUpdate = (location: Location) => {
    const { pathname } = location;

    if (pathname === "/search") {
      this.emit(HISTORY_EVENT.SEARCH_UPDATE, this.getCurrentSearch());
    }
  };

  get history() {
    return this._history;
  }
}

const historyManager = new HistoryManager();

export default historyManager;
export { HISTORY_EVENT };
