import React from "react";
import './overallsummary.css';

function OverallSummary() {
    return (
        <div className="summaryfull">
            <div className="topsummary">
                <h1 className="summarytitle">Summary</h1>
            </div>
            <div className="allsummary">
                <div className="accountamount">
                    <h1 className="category">Cash</h1>
                    <h1 className="amount">$999</h1>
                </div>
                <div className="accountamount">
                    <h1 className="category">Investments</h1>
                    <h1 className="amount">$999</h1>
                </div>
                <div className="accountamount">
                    <h1 className="category">Credit Cards</h1>
                    <h1 className="amount">$999</h1>
                </div>
                <div className="accountamount">
                    <h1 className="category">Loans</h1>
                    <h1 className="amount">$999</h1>
                </div>
            </div>
        </div>
    );
}

export default OverallSummary;