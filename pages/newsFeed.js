import Image from "next/image";
import React from "react";

function newsFeed() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9 col-md-12 mx-auto">
          <section className="row">
            <aside className="col-8">
              <div className="p-2">
                <h4>Messi: IS the real goat..</h4>
                <div>
                  <Image src={require("../assets/img.jpg")} />
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum
                </div>
              </div>
            </aside>
            <aside className="col-4 mt-5">
              <div>
                <h6>Comments</h6>
                <div className="rounded-3 bg-secondary">
                  <section className="p-3">
                    <div style={{ overflow: "auto", height: "200px" }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((val, i) => {
                        return (
                          <section
                            key={i}
                            className="bg-white rounded-3 mt-2 text-center"
                          >
                            <span>Yes messi is the real </span>
                          </section>
                        );
                      })}
                    </div>
                    <div className="mt-2">
                      <input
                        className="form-control"
                        placeholder="type your comment"
                      />
                    </div>
                    <div className="mt-2">
                      <button className="text-white bg-success rounded-3 col-12">
                        Add comments
                      </button>
                    </div>
                  </section>
                </div>
                <section className="mt-3">
                  <h4>Related News</h4>
                  <div>
                    {[1, 2, 3, 4, 5].map((val, i) => {
                      return (
                        <div>
                          <section className="d-flex gap-2 justify-content-between">
                            <Image
                              src={require("../assets/img.jpg")}
                              width={100}
                              height={100}
                            />
                            <span>
                              Ronaldo : Is the real Sheep Is the real SheepIs
                              the real SheepIs the real Sheep
                            </span>
                          </section>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
}

export default newsFeed;
