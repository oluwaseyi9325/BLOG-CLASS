import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsCard() {
  return (
    <div className="mt-5 row">
      {[1, 2, 3, 4, 5, 6, 4, 5, 7, 7].map((val, i) => {
        return (
          <div class="card mt-3  col-lg-3 col-md-7 gap-3" key={i} style={{ width: "15rem" }}>
            <Image src={require("../assets/img.jpg")} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
             <Link href="/">
             <a  style={{textDecoration:'none'}} class="btn btn-primary">
                Read More
              </a>
             </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsCard;
