class API {
  static getParameterByName(name) {
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  static cacheBustingParameters() {
    // add this to bust browser caching - will change quite often
    return "?v=" + new Date().getTime();
  }

  static tokensQuery() {
    // TODO: not sure we need cache busting
    let rv = this.cacheBustingParameters();

    const a = this.getParameterByName("a");
    const b = this.getParameterByName("b");
    if (a != null) {
      rv += "&a=" + a;
    }
    if (b != null) {
      rv += "&b=" + b;
    }

    return rv;
  }
}

export default API;
