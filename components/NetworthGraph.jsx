import { useEffect } from 'react'
import { Chart } from 'chart.js/auto';

const NetworthGraph = () => {
    useEffect(() => {
        const createGraph = () => {
            const data = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
            ];
            
            const ctx = document.getElementById('NetworthChart');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Aquisitions by year',
                            data: data.map(row => row.count)
                        }  
                    ]
                }
            });
        };
        createGraph();
    }, []);
    
  return (
    <div>
        <canvas id='NetworthChart' width='300' height='175'/>
    </div>
  );
};

export default NetworthGraph;