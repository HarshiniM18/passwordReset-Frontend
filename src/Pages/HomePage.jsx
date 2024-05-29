import Login from "../Components/Login";
import Mainspace from "../Components/Mainspace";

export default function HomePage(){
    return(
        //Login Component is setted as children for a Mainspace component
        <Mainspace>
            <Login/>
        </Mainspace>
    )
}