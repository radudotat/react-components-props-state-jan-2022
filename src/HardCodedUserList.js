import { useState } from 'react';
import User from './User';

const users = [
  {
    gender: 'Female',
    name: {
      title: 'Mrs',
      first: 'Antje',
      last: 'Enzi',
    },
    email: 'antje@upleveled.io',
    picture: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
  },
  {
    gender: 'Male',
    name: {
      title: 'Mr',
      first: 'Karl',
      last: 'Horky',
    },
    email: 'karl@upleveled.io',
    picture: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
  },
  {
    gender: 'Male',
    name: {
      title: 'Mr',
      first: 'Lukas',
      last: 'Barbosa',
    },
    email: 'lukas@upleveled.io',
    picture: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
  },
];

function List({ children }) {
  // props.children are all the elements passed in between the component declaration
  return <ul style={{ backgroundColor: 'beige' }}>{children}</ul>;
}

export default function HardCodedUserList() {
  const [userList, setUserList] = useState(users);

  return (
    <>
      <List>
        {/* <User
        name={{
          title: 'Mrs',
          first: 'Antje',
          last: "'Enzi'",
        }}
        email="antje@upleveled.io"
        picture="https://randomuser.me/api/portraits/thumb/men/83.jpg"
      /> */}
        {userList.map((singleUser) => {
          return (
            <User
              key={'user' + singleUser.name + singleUser.email}
              name={singleUser.name}
              email={singleUser.email}
              picture={singleUser.picture}
            />
          );
        })}
        {/* <User
        name={{ first: 'Antje', last: 'Enzi' }}
        email="antje@upleveled.io"
        picture="https://randomuser.me/api/portraits/thumb/men/83.jpg"
      /> */}
      </List>

      <button
        onClick={() => {
          // 1 Copy the array with spread operator
          const userListCopy = [...userList];
          // 2 Update the Copy of the array

          // 2.1 using push
          // userListCopy.push({
          //   gender: 'Male',
          //   name: {
          //     title: 'Mr',
          //     first: 'Jose',
          //     last: 'Hower',
          //   },
          //   email: 'jose@upleveled.io',
          //   picture: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
          // });
          // 2.2 using spread Operator
          const arrayUpdated = [
            ...userListCopy,
            {
              gender: 'Male',
              name: {
                title: 'Mr',
                first: 'Jose',
                last: 'Hower',
              },
              email: 'jose@upleveled.io',
              picture: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
            },
          ];

          // 3 Update state

          // updating for 2.1
          // setUserList(userListCopy);
          // updating for 2.2
          setUserList(arrayUpdated);
        }}
      >
        add new user
      </button>
      <button
        onClick={() => {
          // 1. copy
          const userListCopy = [...userList];
          // 2. update
          userListCopy.pop();
          // 3. update state with the copy
          setUserList(userListCopy);
        }}
      >
        Remove last user
      </button>
      <button
        onClick={() => {
          // 1. copy
          const userListCopy = [...userList];
          // 2. update is going to change the email of the last user to example@example.com
          // 2.1 using map
          const updatedList = userListCopy.map((singleUser, index) => {
            // if you are the last in the array
            if (index === userListCopy.length - 1) {
              singleUser.email = 'example@example.com';
              return singleUser;
            } else {
              return singleUser;
            }
          });

          // 3. update state with the copy
          setUserList(updatedList);
        }}
      >
        update last user
      </button>
    </>
  );
}
