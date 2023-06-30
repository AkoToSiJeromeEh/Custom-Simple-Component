import React from 'react';
import PropTypes from 'prop-types';
import ImgData from  '../data/ImgData';
import '../style/style.css';

function MainContents() {

  
  let [currentIndex, setIndex] = React.useState(0);
  let CurrentData = ImgData[currentIndex];

  
  const handleNext = () => {
   
    setIndex(prevIndex =>
      prevIndex >= ImgData.length - 1 ? currentIndex : prevIndex + 1
    );
    
     
  };

  const handlePrev = () => {

    setIndex(prevIndex =>
      prevIndex  === 0  ? currentIndex : prevIndex - 1  
    );
  };
  return (
    <main className="main-container">
      <div>
      <button className='prev-btn' onClick={handlePrev}><i className="fa-solid fa-chevron-up fa-rotate-270 fa-xl"></i></button>
      </div>
      <h1>{CurrentData.name}</h1>
      <p>{CurrentData.description}</p>
      <div className="main-item">
        <div>
          <img src={CurrentData.img} />
        </div>
      </div>
      <div>
      <button className='next-btn' onClick={handleNext}><i className="fa-solid fa-chevron-up fa-rotate-90 fa-xl"></i></button>
      </div>
    </main>
  );
}

MainContents.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description : PropTypes.string.isRequired
};

export default MainContents;
