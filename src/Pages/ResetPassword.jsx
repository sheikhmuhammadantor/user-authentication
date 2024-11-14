import toast from "react-hot-toast";
import { auth } from "../Firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ResetPassword() {

    const handelResetPasswordEmailSent = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        // console.log(email)
        e.target.reset()

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // toast.success("Password Reset Email Sent !", {})
                toast("Check Your InBox !", {})
            })
            .catch(() => {
                toast.error("Something Wrong, Try Again Later !")
            })
    }

    return (
        <div className="hero bg-base-200 py-12">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Password Reset !</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelResetPasswordEmailSent} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sent Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
