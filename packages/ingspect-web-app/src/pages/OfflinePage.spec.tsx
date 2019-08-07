import React from "react";
import { fireEvent } from "react-testing-library";

import { renderWithAppContext } from "../test/utils";
import App from "./App";

async function runPendingPromiseJob(times = 1) {
  for (let i = 0; i < times; i++) {
    await Promise.resolve(); // allow any pending jobs in the PromiseJobs queue to run
  }
}

function createMockCaches({
  cachedUrls = [],
  mockAddAll = async () => {
    return;
  }
}: {
  cachedUrls?: string[];
  mockAddAll?: () => void;
} = {}) {
  return {
    open: async () => {
      return {
        addAll: mockAddAll,
        keys: async () =>
          cachedUrls.map(url => ({
            url
          }))
      };
    }
  };
}

describe("Offline Page", () => {
  const pwaSupportedText = "And your browser do support this capability!";
  const pwaNotSupportedText =
    "Unfortunately, your browser does not support this capability";

  function renderHistoryPage() {
    return renderWithAppContext(<App />, {
      route: { initialRoute: "/offline" }
    });
  }

  let originalServiceWorker: ServiceWorkerContainer;
  let originalCaches: CacheStorage;

  beforeEach(() => {
    originalServiceWorker = navigator.serviceWorker;
    originalCaches = window.caches;
  });

  afterEach(() => {
    if (originalServiceWorker) {
      (navigator as any).serviceWorker = originalServiceWorker;
    } else {
      delete (navigator as any).serviceWorker;
    }

    if (originalCaches) {
      (window as any).caches = originalCaches;
    } else {
      delete (window as any).caches;
    }
  });

  it.each`
    serviceWorker | caches
    ${true}       | ${false}
    ${false}      | ${true}
    ${false}      | ${false}
  `(
    "show show that PWA is not supported when service worker support is $serviceWorker and caches support is $caches",
    ({ serviceWorker, caches }) => {
      if (serviceWorker) {
        (navigator as any).serviceWorker = serviceWorker;
      }

      if (caches) {
        (window as any).caches = caches;
      }

      const { getByText, queryByText } = renderHistoryPage();

      expect(getByText(new RegExp(pwaNotSupportedText))).toBeInTheDocument();
      expect(queryByText(new RegExp(pwaSupportedText))).not.toBeInTheDocument();
    }
  );

  describe("when browser support service worker and caches", () => {
    beforeEach(() => {
      (navigator as any).serviceWorker = true;
      (window as any).caches = createMockCaches();
    });

    it("should show that PWA is supported text", () => {
      const { getByText, queryByText } = renderHistoryPage();

      expect(getByText(new RegExp(pwaSupportedText))).toBeInTheDocument();
      expect(
        queryByText(new RegExp(pwaNotSupportedText))
      ).not.toBeInTheDocument();
    });

    it("should disable download button if assets are already cached", async () => {
      (window as any).caches = createMockCaches({
        cachedUrls: [
          "https://cdn.jsdelivr.net/gh/naptha/tesseract.js/dist/worker.min.js",
          "https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js",
          "https://tessdata.projectnaptha.com/3.02/eng.traineddata.gz"
        ]
      });

      const { findByText } = renderHistoryPage();

      const downloadButton = await findByText("IngSpect can be used offline");

      expect(downloadButton).toBeInTheDocument();
      expect(downloadButton.disabled).toEqual(true);
    });

    describe("when assets are not cached", () => {
      const mockAddAll = jest.fn();

      beforeEach(() => {
        (window as any).caches = createMockCaches({
          mockAddAll
        });
      });

      it("should show download button", async () => {
        const { findByText } = renderHistoryPage();

        const downloadButton = await findByText("Download for offline");

        expect(downloadButton).toBeInTheDocument();
        expect(downloadButton.disabled).toEqual(false);
      });

      it("should cache uncached assets when download button is clicked", async () => {
        jest.useFakeTimers();

        const { findByText } = renderHistoryPage();

        // let cache checking finish
        await runPendingPromiseJob(2);

        const downloadButton = await findByText("Download for offline");

        fireEvent.click(downloadButton);

        // let cache checking and fetching finish
        await runPendingPromiseJob(1);

        expect(mockAddAll).toBeCalledTimes(1);
        expect(mockAddAll).toBeCalledWith([
          "https://cdn.jsdelivr.net/gh/naptha/tesseract.js/dist/worker.min.js",
          "https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js",
          "https://tessdata.projectnaptha.com/3.02/eng.traineddata.gz"
        ]);
      });
    });
  });

  it("should render a button for going back to home page", () => {
    const { getByText, history } = renderHistoryPage();

    const backButton = getByText("Back");

    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(history.location.pathname).toEqual("/");
  });
});
