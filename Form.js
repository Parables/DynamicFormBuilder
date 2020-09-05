function exists(arr, el) {
  return arr.includes(el);
}
function mutateList(mutation, arr, el, index = arr.length) {
  if (mutation === "ADD")
      return exists(arr, el) ? arr.slice() : [...arr.slice(0, index), el, ...arr.slice(index)];
  else
      return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
export default class Form {
  constructor(props) {
      this.id = "";
      this.sections = [];
      this.classNames = "";
      Object.assign(this, props);
  }
  static from(props) {
      return new Form(props);
  }
  addSection(section, insertAt) {
      this.sections = mutateList("ADD", this.sections, new Section(section), insertAt);
      return this;
  }
  removeSection(section, removeAt) {
      this.sections = mutateList("REMOVE", this.sections, new Section(section), removeAt);
      return this;
  }
  print() {
      let form = Object.assign({}, this);
      console.log(form);
      return form;
  }
}
export class Section {
  constructor(props) {
      this.title = "";
      this.classNames = "";
      this.rows = [];
      Object.assign(this, props);
  }
  addRow(row, insertAt) {
      this.rows = mutateList("ADD", this.rows, new Row(row), insertAt);
      return this.rows;
  }
  removeRow(row, removeAt) {
      this.rows = mutateList("REMOVE", this.rows, new Row(row), removeAt);
      return this.rows;
  }
}
class Row {
  constructor(props) {
      this.classNames = "";
      this.fields = [];
      this.rowStyle = "inline";
      this.rowHeader = "";
      Object.assign(this, props);
  }
  addField(field, insertAt) {
      this.fields = mutateList("ADD", this.fields, new Field(field), insertAt);
      return this.fields;
  }
  removeField(field, removeAt) {
      this.fields = mutateList("REMOVE", this.fields, new Field(field), removeAt);
      return this.fields;
  }
}
class Field {
  constructor(props) {
      this.id = "";
      this.name = "";
      this.value = "";
      Object.assign(this, props);
  }
}
