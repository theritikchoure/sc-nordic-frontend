import React from "react";
import PowerChart from "../../components/PowerChart";
import AlertForm from "../../components/AlertForm";
import "../../App.css";
import "../../styles/PeakShavingAlert.css";
import AlertsTable from "../../components/AlertsTable";
import AppLayout from "../../layout/AppLayout";

function PeakShavingAlert() {

   
    return (
      <AppLayout>
        <div className="header header-container">
          <h3 className="header-title">Peak Shaving & Alert</h3>
          <div className="header-right-section">
            <span className="company-name">Carlsberg Group</span>
            <div className="notification-wrapper">
              <i className="fa-regular fa-bell notification-icon"></i>
              <span className="notification-count">2</span>
            </div>
          </div>
        </div>
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

export default PeakShavingAlert;
