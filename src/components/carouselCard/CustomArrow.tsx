import ArrowForwardIcon  from "../../../docs/chevron-circled.svg";
import styles from './Style.module.css'
import { Grid, IconButton,View } from 'vcc-ui';


const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }:any) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    // <Grid >
    //   <Row align="flex-start">
    //     <Col size={0.7}>
    //         <View spacing={2}>
    //           <IconButton
    //             aria-label="E-mail"
    //             iconName="communication-email"
    //             variant="outline"/>
    
    //         </View>
    //     </Col>
    //     <Col size={1}>
    //         <View spacing={2}>
    //           <IconButton
    //             aria-label="E-mail"
    //             iconName="communication-email"
    //             variant="outline"/>
    //         </View>
    //       </Col>
    //   </Row>
    // </Grid>
  
    <div className={styles.custombuttongroup}>
      <i onClick={() => previous()}><img src={ArrowForwardIcon.src} className={styles.prevSlide}/></i>
      <i onClick={() => next()}><img src={ArrowForwardIcon.src} className={styles.nextSlide}/></i>
    </div>
  );
};

export default CustomButtonGroup
