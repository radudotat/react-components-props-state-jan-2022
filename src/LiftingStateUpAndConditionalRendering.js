import { useState } from 'react';

function FollowButton({ isFollowed, setIsFollowed }) {
  return (
    <button onClick={() => setIsFollowed(!isFollowed)}>
      {isFollowed ? 'unfollow' : 'follow'}
    </button>
  );
}

function Profile({ isFollowed }) {
  return (
    <ul>
      <li>name: Karl</li>
      <li>last name: Horky</li>
      {isFollowed && (
        <li>
          info: Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </li>
      )}
    </ul>
  );
}

export default function LiftingStateUpAndConditionalRendering() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          log out
        </button>
        <FollowButton isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
        <Profile isFollowed={isFollowed} />
      </div>
    );
  }
  // with early return
  return (
    <button
      onClick={() => {
        setIsLoggedIn(true);
      }}
    >
      log in
    </button>
  );

  // without early return

  // if (isLoggedIn) {
  //   return (
  //     <div>
  //       <button
  //         onClick={() => {
  //           setIsLoggedIn(false);
  //         }}
  //       >
  //         log out
  //       </button>
  //       <FollowButton isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
  //       <Profile isFollowed={isFollowed} />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <button
  //       onClick={() => {
  //         setIsLoggedIn(true);
  //       }}
  //     >
  //       log in
  //     </button>
  //   );
  // }
}
