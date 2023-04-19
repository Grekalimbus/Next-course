import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
  return (
    <MainContainer keywords={'Users'}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link legacyBehavior href={`/users/${user.id}`}>
              <a>{`Имя: ${user.name}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}

export default Users;
