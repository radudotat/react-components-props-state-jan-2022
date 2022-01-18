import { useState } from 'react';

// 1. Update state into state hook
// 2. Remove render method and "this" keyword
// 3. Move props to the parameter of the function
// 4. Fix any issues

export default function ClassComponentsIntoFunctionComponents({ user }) {
  const [detailsShown, setDetailsShown] = useState(false);

  if (user === undefined) return 'User not found!';

  return (
    <>
      <img src={user.image} alt={user.imageAlt} />
      <h1>{user.name}</h1>
      <button onClick={() => setDetailsShown(!detailsShown)}>
        {detailsShown ? 'Hide' : 'Show'} Details
      </button>
      {detailsShown && <p>{user.details}</p>}
    </>
  );
}

// export default class UserProfile extends React.Component {
//   state = {
//     detailsShown: false,
//   };

//   render() {
//     const { user } = this.props;
//     const { detailsShown } = this.state;

//     if (user === undefined) return 'User not found!';

//     return (
//       <>
//         <img src={user.image} alt={user.imageAlt} />
//         <h1>{user.name}</h1>
//         <button onClick={() => this.setState({ detailsShown: !detailsShown })}>
//           {detailsShown ? 'Hide' : 'Show'} Details
//         </button>
//         {detailsShown && <p>{user.details}</p>}
//       </>
//     );
//   }
// }
