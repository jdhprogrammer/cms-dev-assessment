import React, {useState, useEffect} from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

import lock from "../assets/food/lock.jpg"
import mudhen from "../assets/food/mudhen.jpg"
import pecan from "../assets/food/pecan.jpg"
import rise from "../assets/food/rise.jpg"
import slow from "../assets/food/slow.jpg"
import vine from "../assets/food/vine.jpg"
import katy from '../assets/museum/katy.jpg'
import klyde from '../assets/museum/klyde.jpg'
import meadow from '../assets/museum/meadow.jpg'
import nasher from '../assets/museum/nasher.jpg'
import perot from '../assets/museum/perot.jpg'
import reunion from '../assets/museum/reunion.jpg'
import adolphus from "../assets/hotels/adolphus.jpg"
import crescent from "../assets/hotels/crescent.jpg"
import four from "../assets/hotels/four.jpg"
import hall from "../assets/hotels/hall.jpg"
import joule from "../assets/hotels/joule.jpg"
import meriden from "../assets/hotels/meriden.jpg"
import omni from "../assets/hotels/omni.jpg"

// import placeholder from '../assets/fallback.jpg'

function All({all}) {

    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [row3, setRow3] = useState([]);
    const [row4, setRow4] = useState([]);
    const [row5, setRow5] = useState([]);
    const [row6, setRow6] = useState([]);

    const placeholders = [lock, mudhen, pecan, rise, slow, vine, katy, klyde, meadow, nasher, perot, reunion, adolphus, crescent, four, hall, joule, meriden, omni];
    const placeholder = () => {
        let placehold = placeholders[Math.floor(Math.random() * 19)]
        return placehold;
    }

    useEffect(() => {
        template()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [all])

    let template = () => {
        if (all.length > 0) {
            let row = []
            for (let index = 0; index < 3; index++) {
                const item = all[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img style={{"maxWidth": "590px", "objectFit": "cover"}} alt={''} src={placeholder()} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href=" /#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow1(row, ...row1);
        };
        if (all.length > 3) {
            let row = []
            for (let index = 3; index < 6; index++) {
                const item = all[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img style={{"maxWidth": "590px", "objectFit": "cover"}} alt={''} src={placeholder()} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href=" /#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow2(row, ...row2);
        };
        if (all.length > 6) {
            let row = []
            for (let index = 6; index < 9; index++) {
                const item = all[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img style={{"maxWidth": "590px", "objectFit": "cover"}} alt={''} src={placeholder()} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href=" /#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow3(row, ...row3);
        };
        if (all.length > 9) {
            let row = []
            for (let index = 9; index < 12; index++) {
                const item = all[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img style={{"maxWidth": "590px", "objectFit": "cover"}} alt={''} src={placeholder()} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href=" /#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow4(row, ...row4);
        };
        if (all.length > 12) {
            let row = []
            for (let index = 12; index < 15; index++) {
                const item = all[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img style={{"maxWidth": "590px", "objectFit": "cover"}} alt={''} src={placeholder()} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href=" /#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow5(row, ...row5);
        };
        if (all.length > 15) {
            let row = []
            for (let index = 15; index < 18; index++) {
                const item = all[index];
                row.push(<Col key={item.id} size="" col={'col-' + index % 6}>
                    <img style={{"maxWidth": "590px", "objectFit": "cover"}} alt={''} src={placeholder()} />
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className='read-more'>
                            <a className="button" href=" /#">Read More</a>
                        </p>
                    </div>
                </Col>);
            };
            setRow6(row, ...row6);
        };
    }

    return (
        <Container>
            {row1.length > 0 ?
                <>
                    <Row key={"row1"}>{row1}</Row>
                    <Row key={"row2"}>{row2}</Row>
                    <Row key={"row3"}>{row3}</Row>
                    <Row key={"row4"}>{row4}</Row>
                    <Row key={"row5"}>{row5}</Row>
                    <Row key={"row6"}>{row6}</Row>
                </>
                : <div>'loading'</div>}
        </Container >
    );
}

export default All;