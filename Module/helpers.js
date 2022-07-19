function $g(selector) {
  let nodelist = document.querySelectorAll(selector);
  if (nodelist.length == 0) {
    return null;
  }

  // 我們上方用的是querySelectorAll，底下這行是判斷，如果其實只有一個的話，直接取就可以，不需要回傳一個nodelist
  
  return nodelist.length == 1 ? nodelist[0] : nodelist;
}

//createElement, innerText
function $ct(element, text) {
  let el = document.createElement(element);
  if (text != null && text.length > 0 && typeof text != "undefined") {
    el.innerText = text
  }
  return el
}

export { $g, $ct };
