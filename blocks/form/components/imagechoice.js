// eslint-disable-next-line no-unused-vars
export default async function decorate(fieldDiv, field, htmlForm) {
  console.log(field.properties["options"]);
  const options = field.properties["options"];
  // iterate options array of objects
  options && options.forEach((option) => {
    // create a new image element
    const img = document.createElement("img");
    // set the src attribute to the url of the image
    img.src = option.url;
    // set the alt attribute to the name of the image
    img.alt = option.name;
    // set the width attribute to 100px
    img.width = 100;
    // set the height attribute to 100px
    img.height = 100;
    // append the image element to the fieldDiv
    fieldDiv.appendChild(img);
  });

  return fieldDiv;
}
