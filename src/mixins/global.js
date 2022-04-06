export default class Global {
  static unicSet(source, name) {
    return source === name;
  }
  static removeBackticks(source) {
    if (source && source.replace(/\s/g, "") === "``") {
      return source.replace(/./g, "");
    } else {
      return source;
    }
  }
}
