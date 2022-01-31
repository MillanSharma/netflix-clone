import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setList] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type" + type : ""}${genre ? "&genre" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjc0ZWE2MmYyOGM4ODY2N2ZmYTVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYzMDQ1MywiZXhwIjoxNjQ0MDYyNDUzfQ.kd-14RQjmQk4ok0Kn9PtYgmMvdw3CWzJCLLgVFCzbEA",
            },
          }
        );
        // console.log(res);
        setList(res.data);
      } catch (error) {
        // console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
