import React from "react";
import PowerChart from "../components/PowerChart";
import AlertForm from "../components/AlertForm";
import "../App.css";
import "../styles/Dashboard.css";
import AlertsTable from "../components/AlertsTable";
import AppLayout from "../layout/AppLayout";

function Dashboard() {

   
    return (
      <AppLayout>
        <div className="">
          <PowerChart />
          <div className="alert-section">
            <div className="alert-form-wrapper">
              <AlertForm />
            </div>
            <div className="alert-table-wrapper">
              <AlertsTable />
            </div>
          </div>
        </div>
      </AppLayout>
    );
}

export default Dashboard;
