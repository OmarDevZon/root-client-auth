import styles from "../styles/Login.module.css";
import avatar from "../assets/avatar_2.jpeg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}

        <div className="flex justify-center items-center py-10 min-h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h2>Hello Again!</h2>
            </div>

            <form
              className="py-1"
              // onSubmit={handleSubmit()}
            >
              <div className="profile flex justify-center py-2">
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-3">
                <input
                  className={styles.textbox}
                  type="email"
                  placeholder="Email"
                />
                <input
                  className={styles.textbox}
                  type="password"
                  placeholder="Password"
                />
                <button className={styles.btn} type="submit">
                  Let's Go
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-center py-1">
                  <span className="text-gray-500">
                    Not a Member{" "}
                    <Link className="text-red-500" to="/register">
                      Register Now
                    </Link>
                  </span>
                </div>
                <div className="text-center py-4">
                  <span className="text-gray-500">
                    Forgot Password?{" "}
                    <Link className="text-red-500" to="/recovery">
                      Recover Now
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
