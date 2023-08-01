import React from "react";

function OverallSummary() {
    return (
        <div className="box flex-col w-full">
            <span className='text-white pb-3 tracking-wide text-3xl'>account summary</span>
            <div className="flex-between flex-col">
                <div className="categories_row">
                    <span className="category">Cash</span>
                    <span className="amount">$999</span>
                </div>
                <div className="categories_row">
                    <span className="category">Investments</span>
                    <span className="amount">$999</span>
                </div>
                <div className="categories_row">
                    <span className="category">Credit Cards</span>
                    <span className="amount">$999</span>
                </div>
                <div className="categories_row">
                    <span className="category">Loans</span>
                    <span className="amount">$999</span>
                </div>
            </div>
        </div>
    );
}

export default OverallSummary;