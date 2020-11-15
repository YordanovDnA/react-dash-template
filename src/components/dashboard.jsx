import React from "react";
import CustomChart from "./common/customChart";
import CustomTable from "./common/customTable";

const Dashboard = () => {
  return (
    <div class="container-fluid">
      <h1 class="mt-4">Dashboard</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card bg-primary text-white mb-4">
            <div class="card-body">Primary Card</div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                View Details
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-warning text-white mb-4">
            <div class="card-body">Warning Card</div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                View Details
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-success text-white mb-4">
            <div class="card-body">Success Card</div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                View Details
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-danger text-white mb-4">
            <div class="card-body">Danger Card</div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                View Details
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        {/* Line chart */}
        <div class="col-xl-6">
          <CustomChart />
        </div>
        <div class="col-xl-6">
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
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-table mr-1"></i>
          DataTable Example
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <CustomTable pagination={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
