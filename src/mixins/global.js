import container from "../components/containerIndex.vue";
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
  static containerComponent() {
    return container;
  }
}
