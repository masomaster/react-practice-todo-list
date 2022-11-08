import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ name, age, favSports }) {
  const str = "Hello";
  const score = 94;
  const person = { name: "mason" };
  const someUI = <div className="some-div">Hello world</div>; // JSX itself is an expression and can therefore be assigned
  const misc = [
    "voilà!",
    98765,
    "look ma",
    "No hands!",
    false,
    <div>Bob is a funny ferret</div>
  ];
  const miscUI = misc.map((thing) => <li>{thing}</li>);
  const showUl = true;
  return (
    <>
      {showUl ? (
        <ul>
          <ToDoListItem />
          <ToDoListItem />
          <li>Number: {123}</li>
          <li>String: {str}</li>
          <li>Math.random(): {Math.random() * 100}</li>
          <li>Template Literal: {`${str} & Goodbye`}</li>
          <li>Ternary: {score > 90 ? "A" : "B or less"}</li>
          <li>
            Booleans, null & undefined: {true}
            {false}
            {null}
            {undefined}
          </li>
          <li>Logical &&: {score > 90 && <div>Got an 'A'!</div>}</li>
          <li>{["name", "me"]}</li>
          <li>Object: {person.name}</li>
          <li>{someUI}</li>
          <li>{misc}</li>
          {miscUI}
        </ul>
      ) : (
        <p>No UL for you!</p>
      )}
    </>
  );

  // return (
  //   <ul>
  //     <ToDoListItem />
  //     <ToDoListItem />
  //   </ul>
  // );
}
