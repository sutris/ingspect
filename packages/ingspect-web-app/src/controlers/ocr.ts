import { EventEmitter } from "events";
import Tesseract from "tesseract.js";

declare global {
  namespace Tesseract {
    interface TesseractStatic {
      terminate(): void;
    }
  }
}

enum EVENTS {
  RECOGNIZE_PROGRESS = "recognize:progress",
  RECOGNIZE_RESULT = "recognize:result"
}

class OCRManager extends EventEmitter {
  private recognizer: Tesseract.TesseractStatic;

  constructor() {
    super();

    this.recognizer = Tesseract.create({
      workerPath:
        "https://cdn.jsdelivr.net/gh/naptha/tesseract.js/dist/worker.min.js",
      langPath: "https://tessdata.projectnaptha.com/3.02/",
      corePath:
        "https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js"
    });
  }

  public recognize(file: File) {
    const job = this.recognizer.recognize(file);

    job.progress(jobProgress => {
      this.emit(EVENTS.RECOGNIZE_PROGRESS, jobProgress);
    });

    job.then(result => {
      const { text } = result;

      this.emit(EVENTS.RECOGNIZE_RESULT, text);
    });
  }

  public cancelCurrentJob() {
    this.recognizer.terminate();
  }
}

const ocrManager = new OCRManager();

export default ocrManager;
export { EVENTS };
