import React from 'react'
import "./Image.scss"
import img0 from "../../Image/image0.jpg"
import img1 from "../../Image/image1.jpg"
import img2 from "../../Image/image3.jpg"
import img3 from "../../Image/image4.jpg"
import img4 from "../../Image/2.jpg"
import img5 from "../../Image/3.jpg"
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
  {
    label: "Third Picture",
    imgPath:
      img4,
  },
  {
    label: "Third Picture",
    imgPath:
      img5,
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
        <div id='slideset1'>
          <div>
            <img className="img" src={img0} alt="img1" />
          </div>
          <div>
            <img className="img" src={img0} alt="img1" />
          </div>
          <div>
            <img className="img" src={img1} alt="img1" />
          </div>
          <div>
            <img className="img" src={img2} alt="img2" />
          </div>
          <div>
            <img className="img" src={img3} alt="img3" />
          </div>
          <div>
            <img className="img" src={img0} alt="img1" />
          </div>
          <div>
            <img className="img" src={img4} alt="img4" />
          </div>
          <div>
            <img className="img" src={img5} alt="img5" />
          </div>

          {/* <MobileStepper 
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
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Image