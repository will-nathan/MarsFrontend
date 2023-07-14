
import Image from 'react-bootstrap/Image';
import './CSS/components.css'

interface Props {
  image_list : string[]|null
}


const tail = ([first,...rest] : any[]) : any[] => {
  return rest;
}


const pairUpImages = (image_list: string[]): (string[])[] => {
  if (image_list.length == 0)
    return [];
  if (image_list.length == 1)
    return [[image_list[0], '']];
  return [[image_list[0], image_list[1]], ...(pairUpImages(tail(tail(image_list))))];
}





const ImageList = ({image_list}:Props) => {
    
  const outputImageList=(image_list : string[]|null) => {
    if (image_list) {
      console.log("ÆAAAAAAA     " + pairUpImages(image_list)[0]);
      const images = pairUpImages(image_list).map(
        ([first, second]) => 
        <div className='row'>         
          <div className='imageDiv'>
            <img src={first} className='img'/>
          </div>
           {second !== "" && 
         <div className='imageDiv'>
            <img src={second} className='img'/>
          </div>
           }
       </div>
     )
      return(<div className='container'>
       {images}
      </div>)
    }
    else{return(<></>)}}




  return (
    <div>
        {outputImageList(image_list)}
    </div>
  );
};

export default ImageList;
