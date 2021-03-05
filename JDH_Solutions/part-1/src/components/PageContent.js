import React, {useState, useEffect} from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../utils/API";

import placeholder from '../fallback.jpg'


function PageContent(props) {

  const [listings, setListings] = useState([]);

  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [row4, setRow4] = useState([]);

  useEffect(() => {
    if (listings.length === 0) {
      getListings();
      template();
    }
    if (listings.length > 0) {
      console.log('looks like we made it!')
      template();
    }
    if (row1.length > 0) {
      console.log('row row row your rows!')
      console.log(row1[0])
    }
    else {
      return
    }
  }, [listings])

  const createListings = res => {
    const res2 = res
    const doubleListings = res.data.data.concat(res2.data.data)
    // let listingResults = res.data.data;
    console.log(doubleListings);
    let allListings = []
    doubleListings.forEach((listing, index) => {
      let newListing = {
        address1: listing.address1,
        category: listing.category,
        city: listing.city,
        description: listing.description,
        mediaurl: listing.mediaurl,
        phone: listing.phone,
        qualityScore: listing.qualityScore,
        recid: listing.recid,
        region: listing.region,
        state: listing.state,
        title: listing.title,
        weburl: listing.weburl,
        zip: listing.zip,
        id: index
      }
      allListings.push(newListing);
    });
    setListings(allListings, ...listings)
  }

  const getListings = () => {
    API.listings()
      .then(createListings)
      .catch(err => console.log(err));
  };

  let template = () => {
    if (listings.length > 0) {
      let row = []
      for (let index = 0; index < 3; index++) {
        const item = listings[index];
        console.log('row1: ' + index);
        row.push(<Col size="" col={'col-' + index % 6}>
          <img alt={''} src={placeholder} />
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p className='read-more'>
              <a className="button" href="#">Read More</a>
            </p>
          </div>
        </Col>);
      };
      setRow1(...row1, row);
    };
    if (listings.length > 3) {
      let row = []
      for (let index = 3; index < 6; index++) {
        const item = listings[index];
        row.push(<Col size="" col={'col-' + index % 6}>
          <img alt={''} src={placeholder} />
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p className='read-more'>
              <a className="button" href="#">Read More</a>
            </p>
          </div>
        </Col>);
      };
      setRow2(...row2, row);
    };
    if (listings.length > 6) {
      let row = []
      for (let index = 0; index < 3; index++) {
        const item = listings[index];
        row.push(<Col size="" col={'col-' + index % 6}>
          <img alt={''} src={placeholder} />
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p className='read-more'>
              <a className="button" href="#">Read More</a>
            </p>
          </div>
        </Col>);
      };
      setRow3(...row3, row);
    };
    if (listings.length > 9) {
      let row = []
      for (let index = 3; index < 6; index++) {
        const item = listings[index];
        row.push(<Col size="" col={'col-' + index % 6}>
          <img alt={''} src={placeholder} />
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p className='read-more'>
              <a className="button" href="#">Read More</a>
            </p>
          </div>
        </Col>);
      };
      setRow4(...row4, row);
    };
  }

  return (
    <Container>
      {row1.length > 0 ?
        <>
          <Row>{row1}</Row>
          <Row>{row2}</Row>
          <Row>{row3}</Row>
          <Row>{row4}</Row>
        </>
        : <div>'loading'</div>}
    </Container >
  );
}

export default PageContent;