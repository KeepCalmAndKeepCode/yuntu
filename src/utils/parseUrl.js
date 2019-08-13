export function parseUrl(url) {
  var a = document.createElement("a");
  a.href = url;
  return {
    protocol: a.protocol.replace(":", ""),
    hostname: a.hostname,
    port: a.port,
    path: a.pathname,
    query: (() => {
      var query = a.search.substr(1);
      var queryArr = query.split("&");
      var queryObj = {};
      queryArr.forEach((item, index) => {
        var item = item.split("=");
        var key = item[0];
        queryObj[key] = item[1];
      });
      return queryObj;
    })(),
    params: (() => {
      var params = a.hash.substr(1);
      var paramsArr = params.split("#");
      return paramsArr;
    })()
  };
}
