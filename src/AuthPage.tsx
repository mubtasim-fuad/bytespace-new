import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { courses } from "./data";

export default function AuthPage({ mode }: { mode: "login" | "register" }) {
  const isRegister = mode === "register";
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "This is a frontend preview. Account services are not connected.",
    );
  }
  return (
    <main className="auth-page grid-blue">
      <div className="auth-screen">
        <div className="auth-illustration">
          <Link to="/" className="auth-logo" aria-label="ByteSpace home">
            <span className="logo-mark">
              <i />
              <i />
              <i />
              <i />
            </span>
          </Link>
          <div className="auth-intro">
            <h1>{isRegister ? "Sign up and come in" : "Sign in with ease"}</h1>
            <p>
              {isRegister
                ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
            </p>
          </div>
          <div className="auth-cards" aria-hidden="true">
            <span className="auth-ring" />
            <article className="auth-course auth-course-back">
              <img src={courses[1].cover} alt="" />
              <div>
                <strong>Build Digital Asset</strong>
                <small>by purepearl studio</small>
                <span className="auth-card-pills">Beginner　 ●●● 26+</span>
                <b>
                  $25<small>/lifetime</small>
                </b>
              </div>
            </article>
            <article className="auth-course auth-course-front">
              <div className="auth-card-image">
                <img src={courses[2].cover} alt="" />
                <span>17 Lessons　 2 hours 16 mins</span>
              </div>
              <div>
                <strong>the Power of Big Data</strong>
                <small>by purepearl studio</small>
                <span className="auth-card-pills">Beginner　 ●●● 26+</span>
                <b>
                  $25<small>/lifetime</small>
                </b>
              </div>
            </article>
            <div className="auth-happy">
              Happy Students <span>4.5 (240) ★</span>
              <b>● ● ● ● ●　2K+</b>
            </div>
            <span className="auth-triangle" />
            <span className="auth-squiggle">〰</span>
          </div>
        </div>
        <div className="auth-panel">
          <div className="auth-panel-inner">
            <span className="auth-mode">
              {isRegister ? "Create an Account" : "Sign In"}
            </span>
            <h2>
              {isRegister ? (
                <>
                  Welcome to
                  <br />
                  ByteSpace
                </>
              ) : (
                "Welcome Back"
              )}
            </h2>
            <form onSubmit={submit} className="auth-panel-form">
              {isRegister && (
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Jamie Davis"
                    minLength={2}
                    required
                  />
                </label>
              )}
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="designer@example.com"
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  autoComplete={
                    isRegister ? "new-password" : "current-password"
                  }
                  placeholder="********"
                  minLength={8}
                  required
                />
              </label>
              <button type="submit" className="auth-panel-submit">
                {isRegister ? "Continue" : "Sign In"}
              </button>
            </form>
            <p className="auth-panel-message" role="status">
              {message}
            </p>
            {!isRegister && (
              <div className="auth-social">
                <div className="auth-divider">
                  <span>or</span>
                </div>
                <div className="auth-social-buttons">
                  <button
                    type="button"
                    aria-label="Continue with Facebook"
                    onClick={() =>
                      setMessage(
                        "Social sign in is unavailable in this frontend preview.",
                      )
                    }
                  >
                    f
                  </button>
                  <button
                    type="button"
                    aria-label="Continue with Google"
                    onClick={() =>
                      setMessage(
                        "Social sign in is unavailable in this frontend preview.",
                      )
                    }
                  >
                    G
                  </button>
                </div>
              </div>
            )}
            <p className="auth-panel-switch">
              {isRegister ? "Already have an account?" : "New user?"}{" "}
              <Link to={isRegister ? "/login" : "/register"}>
                {isRegister ? "Login" : "Create an account"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
