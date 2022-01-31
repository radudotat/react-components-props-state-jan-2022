function LevelThree(props) {
  return (
    <div>
      level three username:
      {props.username}
    </div>
  );
}

function LevelTwo(props) {
  return <div>{props.children}</div>;
}

function LevelOne(props) {
  return <div>{props.children}</div>;
}

export default function ChildrenProp() {
  const username = 'karl';
  return (
    <div>
      top component username: {username}
      <LevelOne>
        <LevelTwo>
          <LevelThree username={username} />
        </LevelTwo>
      </LevelOne>
    </div>
  );
}
