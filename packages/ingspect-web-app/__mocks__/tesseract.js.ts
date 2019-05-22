const PROGRESS_TIME = 1000;
const RESULT_TIME = 2000;

const job = {
  progress: jest.fn().mockImplementation(cb => {
    setTimeout(() => {
      cb({ status: "OCR progress: recognizing", progress: 0.5 });
    }, PROGRESS_TIME);
  }),
  then: jest.fn().mockImplementation(cb => {
    setTimeout(() => {
      cb({ text: "result" });
    }, RESULT_TIME);
  })
};

const recognizer = {
  recognize: jest.fn().mockReturnValue(job),
  terminate: jest.fn()
};

export default {
  create: () => recognizer
};
