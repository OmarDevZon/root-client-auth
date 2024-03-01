import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";
import avatar from "../assets/profile.png";

export const Register = () => {
  return (
    <>
       <div className="container mx-auto">
      {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}

      <div className="flex justify-center items-center min-h-screen">
        <div
          className={styles.glass}
          style={{ width: "45%", paddingTop: "3em" }}
        >
          <div className="title flex flex-col items-center">
            <h2 className={styles.title}>Register</h2>
            <span className="w-2/3 block text-center">Happy to join you!</span>
          </div>

          <form className="py-1" 
        //   onSubmit={formik.handleSubmit}
          >
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={ avatar}
                  className={styles.profile_img}
                  alt="avatar"
                />
              </label>

              <input
                // onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                type="text"
                placeholder="Email*"
              />
              <input
                className={styles.textbox}
                type="text"
                placeholder="Username*"
              />
              <input
                className={styles.textbox}
                type="text"
                placeholder="Password*"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Register?{" "}
                <Link className="text-red-500" to="/login">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};