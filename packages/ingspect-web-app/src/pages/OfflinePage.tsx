import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import sharedStyles from "../shared.module.css";
import styles from "./OfflinePage.module.css";

interface IOfflinePageState {
  isPWASupported: boolean;
  urlsNotCached: string[];
  downloading: boolean;
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
      urlsNotCached: [],
      downloading: false
    };

    this.checkIsOCRCached();
  }

  public render() {
    const isThereThingsToBeCached = this.state.urlsNotCached.length > 0;

    return (
      <div className={styles.container}>
        <div className={sharedStyles.page}>
          <Link to="/" className={sharedStyles["backButton--top"]}>
            Back
          </Link>
          <h2 className={sharedStyles.heading}>Offline</h2>
          <p>
            IngSpect can be available in offline. That means, you don’t need
            network connection to access IngSpect!
          </p>
          {this.state.isPWASupported ? (
            <>
              <p>
                And your browser do support this capability!{" "}
                <span role="img" aria-label="celebrate!">
                  🎉
                </span>{" "}
                It means that you can make IngSpect’s ingredient search
                functionality continue to work even if you have no internet
                connection. In addition, you can make the IngSpect's image text
                recognition available in offline mode.
              </p>
              <Button
                disabled={!isThereThingsToBeCached}
                onClick={this.fetchUncachedUrls}
              >
                {isThereThingsToBeCached
                  ? "Download for offline"
                  : "IngSpect can be used offline"}
                {this.state.downloading ? (
                  <div className={styles["lds-roller"]} aria-hidden="true">
                    <div aria-hidden="true" />
                    <div aria-hidden="true" />
                    <div aria-hidden="true" />
                    <div aria-hidden="true" />
                    <div aria-hidden="true" />
                    <div aria-hidden="true" />
                    <div aria-hidden="true" />
                    <div aria-hidden="true" />
                  </div>
                ) : null}
              </Button>
            </>
          ) : (
            <p>
              Unfortunately, your browser does not support this capability. If
              you want full offline usage, please use an up-to-date version of
              Chrome or Firefox.
            </p>
          )}
        </div>
        <Link to="/" className={styles["backButton--bottom"]}>
          <Button full={true}>Back to Home</Button>
        </Link>
      </div>
    );
  }
  private fetchUncachedUrls = async () => {
    const cache = await caches.open(this.cacheName);

    this.setState({ downloading: true });

    await cache.addAll(this.state.urlsNotCached);

    this.setState({ downloading: false });

    this.checkIsOCRCached();
  };

  private checkIsOCRCached = async () => {
    if (!this.state.isPWASupported) return;

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
