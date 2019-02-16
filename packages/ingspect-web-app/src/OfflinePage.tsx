import React, { Component } from "react";

interface IOfflinePageState {
  isPWASupported: boolean;
  urlsNotCached: string[];
}

class OfflinePage extends Component<{}, IOfflinePageState> {
  private urlsToBeCached = [
    "https://cdn.jsdelivr.net/gh/naptha/tesseract.js/dist/worker.min.js",
    "https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js",
    "https://tessdata.projectnaptha.com/3.02/eng.traineddata.gz"
  ];
  private cacheName = "ocr-lib";

  constructor(props: {}) {
    super(props);

    const isServiceWorkerSupported = "serviceWorker" in navigator;
    const isCacheSupported = "caches" in window;

    this.state = {
      isPWASupported: isServiceWorkerSupported && isCacheSupported,
      urlsNotCached: []
    };

    this.checkIsOCRCached();
  }

  public render() {
    const isThereThingsToBeCached = this.state.urlsNotCached.length > 0;

    return (
      <div>
        {this.state.isPWASupported ? (
          <>
            <p>
              Your browser support Progressive Web App (PWA). It means that you
              can make IngCheck's ingredient search functionality continue to
              work even if you have no internet connection. In addition, you can
              make the IngCheck's image text recognition available in offline
              mode.
            </p>
            <button
              disabled={!isThereThingsToBeCached}
              onClick={this.fetchUncachedUrls}
            >
              {isThereThingsToBeCached
                ? "Download image text recognition feature"
                : "Image text recognition is available for offline"}
            </button>
          </>
        ) : (
          <p>
            Your browser does not support Progressive Web App (PWA). If you want
            full offline usage, please use an up-to-date version of Chrome or
            Firefox.
          </p>
        )}
      </div>
    );
  }
  private fetchUncachedUrls = async () => {
    const cache = await caches.open(this.cacheName);

    await cache.addAll(this.state.urlsNotCached);
    this.checkIsOCRCached();
  };

  private checkIsOCRCached = async () => {
    const cache = await caches.open(this.cacheName);
    const cachedRequests = await cache.keys();
    const cachedURLs = cachedRequests.map(request => request.url);

    const urlsNotCached = this.urlsToBeCached.filter(
      url => cachedURLs.indexOf(url) < 0
    );

    this.setState({
      urlsNotCached
    });
  };
}

export default OfflinePage;
