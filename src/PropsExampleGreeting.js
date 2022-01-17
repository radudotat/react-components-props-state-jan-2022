// 2. Receive props (in the parentheses)
// Similar to receiving a parameter
export default function PropsExampleGreeting(props) {
  console.log('props', props); // Log out all props
  return (
    <div
      style={{
        // 3. Use a single prop
        color: props.color,
        fontSize: '20px',
        width: '100%',
      }}
    >
      Hello CodeSandbox
    </div>
  );
}

// function a() {
//   const color = "red"
//   b(color) // sending
// }

// function b(color) { // receiving
//   console.log(color)
// }
