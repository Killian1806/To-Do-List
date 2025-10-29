import Task from "./Task.js";
export default class Appoitment extends Task {
  date;

  constructor(data) {
    super(data);
    this.date = data.opt.date;
  }
}
