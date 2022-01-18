export default function PropsDestructuring({ name, color, number, object }) {
  return (
    <div>
      <div>name: {name}</div>
      <div>color: {color}</div>
      <div>number: {number}</div>
      {JSON.stringify(object)}
    </div>
  );
}

// export default function PropsDestructuring(props) {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//       <div>color: {props.color}</div>
//       <div>number: {props.number}</div>
//     </div>
//   );
// }
