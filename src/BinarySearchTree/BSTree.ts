//
export interface IBSNode {
  value: number;
  left: IBSNode | null;
  right: IBSNode | null;

  getValue(): number;
}

//
export class BSNode implements IBSNode {
  value: number;
  left: IBSNode;
  right: IBSNode;

  constructor(
    value: number = null,
    left: IBSNode = null,
    right: IBSNode = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  getValue(): number {
    return this.value;
  }
}

//
export interface IBST {
  root: IBSNode;
  left: IBSNode;
  right: IBSNode;
  count: number;

  lenght(): number;
  insert(data: number): IBST;
}

//
export class BST implements IBST {
  root: IBSNode = null;
  left: IBSNode = null;
  right: IBSNode = null;
  count: number = 0;

  lenght(): number {
    return this.count;
  }

  insert(data: number, node: IBSNode): BST {
    // try {
    if (this.root === null) {
      this.root = new BSNode(data);

      this.count++;
      return this;
    }
    console.log(this.root.getValue(), data, this.root, "NODE:==>", node);

    if (this.root.getValue() <= data && this.root.right === null) {
      console.log("this.root.right:=>", this.root.right);
      this.root.right = new BSNode(data);
    } else if (this.root.getValue() > data && this.root.left === null) {
      console.log("this.root.left:=>", this.root.left);
      this.root.left = new BSNode(data);
    } else if (
      this.root.getValue() <= data &&
      this.root.right.getValue() !== null
    ) {
      console.log("node.right:=>", node.right);
      return this.insert(data, node.right);
    }
    //console.log(this.root.getValue(), data, this.root, "NODE:==>", node);

    this.count++;
    return this;
    // } else if (
    //   this.root.getValue() >= data &&
    //   this.root.right.getValue() !== null
    // ) {
    //   console.log("node.right:=>", node.right);
    //   return this.insert(data, node.right);
    // } else if (
    //   this.root.getValue() < data &&
    //   this.root.left.getValue() !== null
    // ) {
    //   console.log("node.left:=>", node.left);
    //   return this.insert(data, node.left);
    // }
    // } catch (error) {
    //   console.log("ERROR:==>", error.toString());
    // }
  }
}
