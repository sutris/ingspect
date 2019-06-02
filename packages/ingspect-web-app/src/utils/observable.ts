// inspired by https://gist.github.com/NetanelBasal/9f579cfbef56f1fc0e47d12f0c00ad31

type unsub = () => void;

class Observable<Val> {
  private functionThatThrowsValues: (
    next: (val: Val) => void
  ) => unsub | undefined;
  private unsub: unsub | undefined;

  constructor(
    functionThatThrowsValues: (next: (val: Val) => void) => unsub | undefined
  ) {
    this.functionThatThrowsValues = functionThatThrowsValues;
  }

  public subscribe(next: (val: Val) => void) {
    this.unsub = this.functionThatThrowsValues(next);
  }

  public unsubscribe() {
    if (this.unsub) {
      this.unsub();
    }
  }
}

export default Observable;
