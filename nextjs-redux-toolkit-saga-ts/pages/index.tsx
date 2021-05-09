import Layout from "../components/Layout";
import Link from "next/link";
import useUser from "../store/modules/userHook";

const IndexPage = () => {
  const { userLoading, userData, error, login, logout } = useUser();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <pre>{JSON.stringify({ userLoading, userData, error }, null, 2)}</pre>
      <div>
        <button onClick={() => login({ userId: "john", password: "password" })}>
          login
        </button>
        <button onClick={logout}>logout</button>
      </div>
    </Layout>
  );
};

export default IndexPage;
