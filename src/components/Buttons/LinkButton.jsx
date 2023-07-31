import Button from "./Button";
import {Link} from 'react-router-dom'
const LinkButton = (props)=> {
    return(
        <Link to = {props.to} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
        <Button text={props.text}/>
        </Link>
    )
}

export default LinkButton