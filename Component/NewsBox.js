import Image from "next/image";
import Link from "next/link";
import React from "react";
// import NewsBox from "./NewsBox";
import useSWR from "swr";
import ReactReadMoreReadLess from "react-read-more-read-less";
import TimeAgo from "timeago-react";
function NewsBox({ val, i }) {
  return (
    <div key={i} className="col-lg-3 pb-4 col-md-6 col-sm-12  box">
    <div
      className="card card-sm shadow card-width"
      style={{ borderRadius: "20px" }}
    >
      <Image
        className="card-img-top rounded-3"
        src={val.imageUrl}
        width={180}
        height={160}
      />
      <div className="card-body mt-1">
        <h5 className="card-title" style={{textTransform:"capitalize"}}>{val.category}</h5>
        <p className="card-text " style={{ textAlign: "justify" }}>
          <Link href={`/newsFeed?desc=${val.description}`}>
            <a
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              <ReactReadMoreReadLess
                charLimit={150}
                readMoreText={""}
                readLessText={""}
              >
                {val.description}
              </ReactReadMoreReadLess>
            </a>
          </Link>
        </p>
        <div className="mb-2 d-flex justify-content-between">
          <Link href="/">
            <a
              style={{ textDecoration: "none" }}
              class="btn btn-sm btn-secondary"
            >
              Read More
            </a>
          </Link>
          <span className="text-small">
            <TimeAgo datetime={val.created_at} />
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NewsBox;
