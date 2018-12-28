import { EventEmitter } from "events";
import Tesseract from "tesseract.js";

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
        "https://cdn.jsdelivr.net/gh/naptha/tesseract.js/dist/worker.js",
      langPath: "https://tessdata.projectnaptha.com/3.02/",
      corePath:
        "https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js"
    });
  }

  public recognize(file: File) {
    const job = this.recognizer.recognize(file);

    job.progress(jobProgress => {
      if (jobProgress.status === "recognizing text") {
        this.emit(EVENTS.RECOGNIZE_PROGRESS, jobProgress.progress);
      }
    });

    job.then(result => {
      const { text } = result;

      this.emit(EVENTS.RECOGNIZE_RESULT, text);
    });
  }
}

const ocrManager = new OCRManager();

export default ocrManager;
export { EVENTS };
