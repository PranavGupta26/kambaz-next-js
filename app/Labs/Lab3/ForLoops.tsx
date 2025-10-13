export default function ForLoops() {
  const stringArray1 = ["string1", "string3"]; // ✅ use const
  const stringArray2: string[] = []; // ✅ use const and type for clarity

  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }

  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2.join(", ")} <hr /> {/* ✅ join for readability */}
    </div>
  );
}
