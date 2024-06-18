// eslint-disable-next-line no-unused-vars
export default async function decorate(fieldDiv, field) {
  const labelEl = fieldDiv.querySelector("legend");
  fieldDiv.replaceChildren(labelEl);
  fieldDiv.classList.add("image-choice-container");
  console.log(field.properties["options"]);
  const models = field.properties["options"];

  const ul = document.createElement('ul');
  ul.className = 'model-list-wrapper';
  fieldDiv.appendChild(ul);
  models && models.forEach(model => {
      let li = document.createElement('li');
      li.className = 'model-block';
      li.tabIndex = '0';

      let input = document.createElement('input');
      input.type = 'radio';
      input.dataset.modelId = model.id;
      input.id = model.id;
      input.name = 'model_card';
      input.tabIndex = '-1';
      li.appendChild(input);

      let picture = document.createElement('picture');
      let source = document.createElement('source');
      source.srcset = model.source;
      picture.appendChild(source);
      let img = document.createElement('img');
      img.alt = model.name;
      img.src = model.source;
      picture.appendChild(img);
      li.appendChild(picture);

      let label = document.createElement('label');
      label.htmlFor = model.id;
      label.className = 'model-name';
      label.textContent = model.name;
      li.appendChild(label);

      let span = document.createElement('span');
      span.className = 'black-border';
      li.appendChild(span);

      ul.appendChild(li);
  });

  return fieldDiv;
}
