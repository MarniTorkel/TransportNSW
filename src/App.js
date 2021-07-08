import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Media from "react-media"
import axios from 'axios'
import { Container, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Filter from "./components/Filter";
import Details from "./components/Details";
import Loader from "./components/Loader";
// import Message from "./components/Message"
// import { listTransport } from "./actions/transportActions"

import './App.css';

function App() {
  const [current, setCurrent] = useState([]);
  const [historic, setHistoric] = useState([]);
  const [affected, setAffected] = useState([]);
  const [loading, setLoading] = useState("false");
  const [priority, setPriority] = useState("");
  
  // const dispatch = useDispatch();
  // const transportList = useSelector(state => state.transportList)
  // const { loading, error, transport } = transportList

  // useEffect(() => {
  //     dispatch(listTransport())
  // }, [dispatch])

  // Fetch data and set different type of data
  useEffect(() => {
    const getData = async () => {
      const dataAPI = await fetchData();
      console.log(dataAPI);
      let affectedData = await dataAPI.infos.affected;
      setAffected(affectedData);
      console.log(affected);
      let currentData = await [...dataAPI.infos.current];
      setCurrent(currentData);
      let historicData = await [...dataAPI.infos.historic];
      setHistoric(historicData);
      console.log(current, historic, affected);
      if (dataAPI) {
        setLoading(true);
      }
    }
    getData();
  }, [])

  //Fetch data
  const fetchData = async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/")
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }  
  }

  // Change details based on priority filter
  useEffect(() => {
    <Details current={current} historic={historic} affected={affected} onFilter={onFilter} priority={priority} />
  }, [priority])

  // Set priority value
  const onFilter = async (priority) => {
    setPriority(priority);
  }

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Row>
            <Col md={3}>
              {!loading ? <Loader />
              : <Filter current={current} onFilter={onFilter} /> 
              }
            </Col>
            <Col md={5}>
              {!loading ? <Loader />
              : <Main onFilter={onFilter} priority={priority} />
              }
            </Col>
            <Col md={4}>
              {!loading ? <Loader />
              : <Details current={current} onFilter={onFilter} priority={priority} />
              }
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
    
  );
}

export default App;
