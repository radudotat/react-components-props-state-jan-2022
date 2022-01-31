function LevelThree(props) {
  return (
    <div>
      level three username:
      {props.username}
    </div>
  );
}

function LevelTwo(props) {
  return <LevelThree username={props.username} />;
}

function LevelOne(props) {
  return <LevelTwo username={props.username} />;
}

export default function PropDrilling() {
  const username = 'karl';
  return (
    <div>
      top component username: {username}
      <LevelOne username={username} />
    </div>
  );
}
