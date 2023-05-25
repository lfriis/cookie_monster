import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { FacebookSVG } from "~/assets";
import { useState } from "react";

type LoginMethod = "login" | "facebook";

export const Login: React.FC = () => {
  const { status } = useSession();
  const [selectedLoginMethod, setSelectedLoginMethod] =
    useState<null | LoginMethod>(null);
  const loading = status === "loading";

  function isLoginMethod(method: LoginMethod): string {
    if (loading && method === selectedLoginMethod) return "loading";
    return "";
  }

  return (
    <>
      <Head>
        <title>Sign in to Crumbs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <form className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input-bordered input"
                    disabled={loading}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input-bordered input"
                    disabled={loading}
                  />
                  <label className="label">
                    <a href="#" className="link-hover label-text-alt link">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    className={`btn-primary btn ${isLoginMethod("login")}
                    `}
                    disabled={loading}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedLoginMethod("login");
                    }}
                  >
                    Login
                  </button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                  <h1
                    className={`btn flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-500	text-center text-white ${isLoginMethod(
                      "facebook"
                    )}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedLoginMethod("facebook");
                      void signIn("facebook");
                    }}
                    // disabled={loading}
                  >
                    <FacebookSVG />
                    Login with Facebook
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
