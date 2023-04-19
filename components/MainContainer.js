import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'next course' + ` ${keywords}`}></meta>
        <title>Next Course</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Главная"></A>
        <A href={'/users'} text="Пользователи"></A>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
