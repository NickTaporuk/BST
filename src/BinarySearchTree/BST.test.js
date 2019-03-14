import { BSNode, BST } from "./BSTree";

it("render binary node without params", () => {
  const bsNode = new BSNode();
  console.log(bsNode);
  expect(bsNode.getValue()).toBeNull();
});

it("render binary node with params", () => {
  const bsNode = new BSNode(1);
  //console.log(bsNode);
  expect(bsNode.getValue()).not.toBeNull();
});

it("binary tree add value", () => {
  const bst = new BST();
  bst
    .insert(1)
    .insert(2)
    .insert(3);

  // console.log("BST", bst);
  //expect(bst.lenght()).toEqual(2);
});
