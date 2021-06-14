import React, { useState, useEffect } from "react";
import axios from "axios";
function VisitorCount() {
  const [state, setState] = useState({
    like: 0,
    dislike: 0,
    prayCount: 0,
    heartCount: 0,
    success: "",
    error: "",
  });

  const handleVisitor = (type) => {
    axios
      .post(`${process.env.API}/visit-add`, {
        type,
      })
      .then((res) => {
        console.log(res.data.message);
        setState({
          ...state,
          success: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
        setState({
          ...state,
          error: err.response.data.error,
        });
      });
  };

  useEffect(async () => {
    try {
      const response = await axios.get(`${process.env.API}/visit-count`);
      setState({
        like: response.data.totals.like,
        dislike: response.data.totals.dislike,
        prayCount: response.data.totals.prayCount,
        heartCount: response.data.totals.heartCount,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      className="fixedpraybox"
      data-toggle="tooltip"
      data-placement="left"
      title="Click on icon to Vote for YPhat.com"
    >
      <ul className="list-pray">
        <li>
          <a
            className="prayerfix"
            data-toggle="tooltip"
            href="javascript:void(0)"
            data-placement="bottom"
            title="Pray"
            onClick={(event) => {
              handleVisitor("prayCount");
            }}
          >
            {state.prayCount}
            <img alt="#" src="/img/paryeicon-fix.png" />
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="lovefix"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Love"
            onClick={(event) => {
              handleVisitor("heartCount");
            }}
          >
            {state.heartCount} <img alt="#" src="/img/loveicon.png" />
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="likefix"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Like"
            onClick={(event) => {
              handleVisitor("like");
            }}
          >
            {state.like} <img alt="#" src="/img/likeicon.png" />
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="dislikefix"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Dislike"
            onClick={(event) => {
              handleVisitor("dislike");
            }}
          >
            {state.dislike} <img alt="#" src="/img/dislikeicon.png" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default VisitorCount;
