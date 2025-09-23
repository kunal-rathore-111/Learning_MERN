
import { Link, useNavigate } from "react-router-dom";

export const NavMain = () => {

    const navigate = useNavigate();
    // throw new Error("error");

    function navigationFunction(e) {
        navigate(`/services${e.target.value}`);
    }

    return <>
        <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/">Logo</Link>
            |
            <Link to="/home">Home</Link>
            |
            <select name="selection" onChange={navigationFunction}>
                <option value="">Services</option>
                <option value="/web-design">Webdesign</option>
                <option value="/devops">Devops</option>
            </select>
        </nav>
    </>
}