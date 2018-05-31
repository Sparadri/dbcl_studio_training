function addSuffix(url, dcmParameter) {
  var urlSuffix = Enabler.getParameter(dcmParameter);
  var _url = '';

  if (url) {
    var symbol = (url.indexOf('?') > -1) ? '&': '?';
    if(urlSuffix) {
      while (urlSuffix.charAt(0) == '?' || urlSuffix.charAt(0) == '&') {
        urlSuffix = urlSuffix.substring(1);
      }
      if (urlSuffix.indexOf('?') > -1) {
        urlSuffix = urlSuffix.replace(/\?/g, '&');
      }
    }
    _url = url + symbol + urlSuffix;
  }
  return _url;
}


function exit(obj){
  // ads a counter on click - not useful, only FYI
  // https://support.google.com/richmedia/answer/2672585?hl=en
  Enabler.counter('Click on '+obj.phone_name);
  // studio exit component
  // https://support.google.com/richmedia/answer/2664807?hl=en
  Enabler.exitOverride(obj.phone_name, obj.landing_page.Url);
}


function mainExit() {
  // studio exit component
  // https://support.google.com/richmedia/answer/2672517?hl=en
  Enabler.exit("exitID","https://www.sosh.fr/");
}


function append(parent, child) {
  // appends html into the DOM
  var l = document.querySelectorAll(parent);
  var n = l.length - 1;
  l[n].appendChild(child);
}
