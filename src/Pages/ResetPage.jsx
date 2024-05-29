import Mainspace from "../Components/Mainspace";
import ResetForm from "../Components/ResetForm";

export default function ResetPage(){
    return(
        //resetForm component is setted as children for mainspace component
        <Mainspace>
            <ResetForm/>
        </Mainspace>
    )
}