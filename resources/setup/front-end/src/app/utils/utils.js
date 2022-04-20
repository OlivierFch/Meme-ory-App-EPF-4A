export function parseUrl() {

    return (window.location.href.split("?")[1] || "")
      .split("&").map((x) => x.split("="))
      .reduce((result, kv) => {
        result[kv[0]] = kv[1];
        return result;
      }, {});
}