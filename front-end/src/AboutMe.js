import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5002/about-us')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setAboutData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  //making sure content shows up
  return (
    <div>
      <h2>About Us</h2>
      <p>{aboutData.name}</p>
      <p>{aboutData.description}</p>
      <img src="https://drive.google.com/uc?export=view&id=1QPfaq9X_OC71LCsR_q07vj-59R01w7rq" alt="Girl in a jacket" width="600" height="600"></img>
    </div>
  );
}

export default AboutUs;