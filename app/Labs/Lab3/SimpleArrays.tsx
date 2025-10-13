export default function SimpleArrays() {
  let functionScoped = 2; // ✅ replaced var with let
  const blockScoped = 5;  // ✅ use const (since it’s not reassigned)
  const constant1 = functionScoped - blockScoped;

  const numberArray1 = [1, 2, 3, 4, 5]; // ✅ const
  const stringArray1 = ["string1", "string2"]; // ✅ const

  // ✅ add key prop to each JSX element in the array
  const htmlArray1 = [
    <li key="1">Buy milk</li>,
    <li key="2">Feed the pets</li>,
  ];

  const variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  return (
    <div id="wd-simple-arrays">
      <h4>Simple Arrays</h4>
      numberArray1 = {numberArray1.join(", ")} <br />
      stringArray1 = {stringArray1.join(", ")} <br />
      variableArray1 = {variableArray1.join(", ")} <br />
      Todo list:
      <ol>{htmlArray1}</ol>
      <hr />
    </div>
  );
}
