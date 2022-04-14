import  Link  from 'next/link';
import styles from './Style.module.css'
import arrow from '../../../docs/chevron-small.svg'

import {  
    Card,
    CardBody,
    CardImg,
    CardTitle,
  } from "reactstrap";

const CarCard=(props)=>{
    console.log(props)
    const {id,modelName, bodyType,modelType, imageUrl}= props.CarInfo
    console.log(props)
    return(
      <div >
      <Link href={`/learn/${id}`}>
        <Card className={styles.cardBody} as='a' href={`/learn/${id}`}> 
          <CardTitle >
            <div className={styles.bodyType}>{bodyType}</div><br/>
              <div >
                <div className={styles.modelName}>{modelName}</div>
                <div className={styles.modelType}>{modelType}</div>
              </div> 
          </CardTitle>
          <CardImg
            className={styles.imagePosition}
            alt="..."
            src={imageUrl}
            top
          ></CardImg>
           <CardBody> 
            <div>
                <a className={styles.linkPageLearn} > LEARN<img className={styles.nextArrow} src={arrow.src} alt='img'/></a>
                <a className={styles.linkPageShop} >SHOP<img className={styles.nextArrow} src={arrow.src} alt='img'/></a>         
            </div>      
          </CardBody>         
        </Card>   
        </Link>   
      </div>
    )
}

export default CarCard
