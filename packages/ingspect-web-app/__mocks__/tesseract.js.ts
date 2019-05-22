const PROGRESS_TIME = 1000;
const RESULT_TIME = 2000;

let progressTimer;
let resultTimer;

const job = {
  progress: jest.fn().mockImplementation(cb => {
    progressTimer = setTimeout(() => {
      cb({ status: "OCR progress: recognizing", progress: 0.5 });
    }, PROGRESS_TIME);
  }),
  then: jest.fn().mockImplementation(cb => {
    resultTimer = setTimeout(() => {
      cb({ text: "result" });
    }, RESULT_TIME);
  })
};

const recognizer = {
  recognize: jest.fn().mockReturnValue(job),
  terminate: jest.fn().mockImplementation(() => {
    clearTimeout(progressTimer);
    clearTimeout(resultTimer);
  })
};

export default {
  create: () => recognizer
};
