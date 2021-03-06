import React from "react";
import CustomChart from "./common/customChart";
import CustomTable from "./common/customTable";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">Primary Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body">Warning Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body">Success Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body">Danger Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                View Details
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Line chart */}
        <div className="col-xl-6">
          <CustomChart />
        </div>
        <div className="col-xl-6">
          <CustomChart
            title="Chart with custom data"
            type="bar"
            labels={["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]}
            data={[1200, 1280, 1330, 1550, 1770, 1200, 1100]}
            min={0}
            max={2000}
            controls={true}
          />
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          DataTable Example
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <CustomTable pagination={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
