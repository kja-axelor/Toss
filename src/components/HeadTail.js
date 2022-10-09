import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeadTail() {
  const [input, setInput] = useState("Select Value");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "Select Value") {
      return alert("Please select any of Head or Tail from dropdown");
    } else {
      setData([...data, input]);
    }
    setInput("Select Value");
  };

  // group comman inputs
  const groupData = (data) => {
    const result = [];
    data.forEach((el, ind) => {
      if (ind === 0) {
        result.push([el]);
      } else {
        let targetNode = result[result.length - 1];
        if (targetNode && targetNode[0] === el) {
          targetNode.push(el);
        } else {
          result.push([el]);
        }
      }
    });
    return result;
  };

  let dataList = groupData(data);

  //count max depth
  let maxLength = 0;
  dataList.forEach((el) => {
    if (el.length > maxLength) {
      maxLength = el.length;
    }
  });

  const result = [];

  //store spaces or char
  for (let i = 0; i < maxLength; i++) {
    let tempResult = [];
    dataList.forEach((el) => tempResult.push(el[i] ? el[i] : " "));
    result.push(tempResult);
  }

  return (
    <>
      <Container>
        <h1 className="my-4 text-center text-color heading">
          What would you choose Head or Tail ?
        </h1>
        <Row className="justify-content-center">
          <Col md={6}>
            <form>
              <select
                className="form-control"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              >
                <option value="Select Value">Select Value</option>
                <option value="H">Head</option>
                <option value="T">Tail</option>
              </select>
            </form>
          </Col>
          <Col md={2} className="d-flex gap-4">
            <Button variant="success" onClick={submitHandler}>
              Submit
            </Button>
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      {data.length > 0 && (
        <div>
          <h3 className="my-3 text-center text-color">Your choices are</h3>
          <table cellPadding={10} className="mx-auto w-10 text-size">
            <tbody>
              {result &&
                result.map((el, ind) => {
                  return (
                    <tr key={ind}>
                      {el.map((e, i) => {
                        return <td key={i}>{e}</td>;
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default HeadTail;
