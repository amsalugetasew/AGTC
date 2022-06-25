import React from 'react'
import "./Image.scss"
import img1 from "../../Image/image1.jpg"
import img2 from "../../Image/image3.jpg"
import img3 from "../../Image/image4.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MobileStepper from "@material-ui/core/MobileStepper";
import { Button } from '@material-ui/core'
const MyCollection = [
  {
    label: "First Picture",
    imgPath:
       img1,
  },
  {
    label: "Second Picture",
    imgPath:
    img2,
  },
  {
    label: "Third Picture",
    imgPath:
    img3,
  },
];
function Image() {
  const CollectionSize = MyCollection.length;
    const [index, setActiveStep] = React.useState(0);
   
    const goToNextPicture = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const goToPreviousPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
  return (
    <div className='image'>
      <div className='img'>
      <MobileStepper 
            // variant="text"
            position="static"
            nextButton={
              <>
              <Button
              onClick={goToPreviousPicture}
              disabled={index === 0}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: "40px" }} className="previous" />
            </Button>
                 </>
            }
          />
          <img className="img"
            src={MyCollection[index].imgPath}
            alt={MyCollection[index].label}
          />
         
            <MobileStepper 
          // variant="text"
            position="static"
            nextButton={
              <>
              <Button
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "40px" }} className="next" />
            </Button>
                 </>
            }
          />
          </div>
    </div>
  )
}

export default Image