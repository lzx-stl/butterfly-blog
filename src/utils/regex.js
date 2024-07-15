export function getCatalogList (htmlString) {

  // html = html.replaceAll(/<h(.*?).*?>(.*?)<\/h\1>/g, (match, level, text) => {
  //   if (text != "") {
  //     // console.log(match, level, text);
  //     let key = text,
  //       id = "";
  //     if (map.has(key)) {
  //       let cnt = map.get(key);
  //       cnt++;
  //       id = key + "-" + cnt;
  //       map.set(key, cnt);
  //     } else {
  //       map.set(key, 1);
  //       id = key;
  //     }
  //     let item = { key: list.length, text, level, id };
  //     // console.log(`<h${level} id="${id}">${id}</h${level}>`);
  //     list.push(item);
  //     return `<h${level} id="${id}">${text}</h${level}>`;
  //   }
  //   return "";
  // });

  // str = str.replaceAll(/<h(.*?).*?>(.*?)<\/h\1>/g, (match, level, text) => {
  //   if (text != "") {
  //     let id = curr++;
  //     let item = { id, text, level };
  //     // console.log(`<h${level} id="${id}">${id}</h${level}>`);
  //     list.push(item);
  //     return `<h${level} id="${id}">${text}</h${level}>`;
  //   }
  //   return "";
  // })
  // return { str, list };


  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let list = [];
  let curr = 0;

  headings.forEach(heading => {
    if (heading.textContent.trim() !== "") {
      let id = curr++;
      let level = heading.tagName.toLowerCase().replace('h', '');
      let item = { id, text: heading.textContent.trim(), level };

      // Set the id attribute on the heading
      heading.setAttribute('id', id);

      // Add the item to the list
      list.push(item);
    }
  });

  // Serialize the updated HTML back to a string
  let serializer = new XMLSerializer();
  let updatedHtmlString = serializer.serializeToString(doc);

  return { str: updatedHtmlString, list };
}
