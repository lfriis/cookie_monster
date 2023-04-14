import { signIn } from "next-auth/react";
import { FacebookSVG } from "~/assets";

export const Login: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input-bordered input"
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
              />
              <label className="label">
                <a href="#" className="link-hover label-text-alt link">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn">Login</button>
            </div>
            <div className="mt-4 flex justify-center">
              <label>or</label>
            </div>
            <div className="form-control">
              <h1
                className="my-5 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-500 p-5	text-center text-white"
                onClick={() => void signIn("facebook")}
              >
                <FacebookSVG />
                <label>Login with Facebook</label>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
