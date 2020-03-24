export interface IProduct {
  Id: Number
  Code?: String
  Name?: String
}

class Product implements IProduct {
  public Id: Number
  public Code?: String
  public Name?: String

  public constructor(init?:Partial<IProduct>) {
    Object.assign(this, init);
  }
}

export default Product;
