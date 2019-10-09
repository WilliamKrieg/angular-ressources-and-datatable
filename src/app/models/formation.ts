export class Formation {
  public id: number = null;
  public title = '';
  public description = '';
  public image = '';

  constructor(object: {} = {}) {
    Object.assign(this, object);
  }

}
