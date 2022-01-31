function LevelThree(props) {
  return (
    <div>
      level three username:
      {props.username}
    </div>
  );
}

function LevelTwo(props) {
  return <LevelThree username={props.username}></LevelThree>;
}

function LevelOne(props) {
  return <LevelTwo username={props.username}></LevelTwo>;
}

export default function PropDrilling() {
  const username = 'karl';
  return (
    <div>
      top component username: {username}
      <LevelOne username={username}></LevelOne>
    </div>
  );
}
