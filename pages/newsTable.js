import React from "react";
import { PulseLoader } from "react-spinners";
import useSWR from "swr";

function newsTable() {
  const { data, error, loading } = useSWR("http://localhost:5000/posts");
  if (!data) {
    return (
      <div className="text-center mt-5">
        <PulseLoader size={30} color="#20ae26" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="mt-5">
        News <span className="bg-secondary text-white p-3">{data?.length}</span>
      </div>
      <table className="table table-bordered table-striped  table-hover">
        <thead className="bg-dark text-white">
          <tr>
            <th>S/N</th>
            <th>Category</th>
            <th>Image</th>
            <th>Desc</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((val, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{val.category}</td>
                <td>DSGHGHGHS</td>
                <td>{val.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default newsTable;
