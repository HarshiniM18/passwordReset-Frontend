import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { resetPage } from "../Helper/helper";
import { useParams } from "react-router-dom";
import './dark-theme.css'; // Import the dark theme CSS

export default function ResetForm() {
    // Getting value from params and storing
    const params = useParams();
    const string = params.string;

    // Clearing all the field values and mounting only once when the page is opened
    useEffect(() => {
        setPassword("");
        setMsg("");
        setErr("");
    }, [])

    // Context states and values is imported
    const { password, setPassword, err, setErr, msg, setMsg } = useContext(AppCtx);

    // Reset function to reset password
    // String is passed to fetch
    function handleReset(string) {
        const details = {
            password,
        }
        resetPage(details, string).then((data) => {
            if (data.error) {
                setErr(data.message)
                setMsg("")
            } else {
                setErr("");
                setMsg(data.message);
            }
        }).catch((error) => console.log(error));
    }

    return (
        <div className="reset-user">
            <form onSubmit={(event) => event.preventDefault()} className="form-section">
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => handleReset(string)}
                >
                    Reset
                </button>
            </form>
            <div className="msg-section">
                <div className={msg ? "success" : ""}>{msg || ""}</div>
                <div className={err ? "error" : ""}>{err || ""}</div>
            </div>
        </div>
    )
}
