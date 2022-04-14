import React from 'react'
import { useRouter } from "next/router";
import { Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailsPage=()=> {
    const router = useRouter();
    const learn = router.query.learn;

    const handleClick=()=>{
      router.push('/')

    }
    return (
      <div style={{ textAlign: "center" ,fontSize:"3rem"}} >
        <p > Volvo Car Details</p>
        <Button color="primary" onClick={handleClick}>Go Back To Home Page</Button>
      </div>
    );
}

export default DetailsPage