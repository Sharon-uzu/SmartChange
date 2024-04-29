import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';
import Chart from 'react-apexcharts';


const Dashboard = () => {

  const [state, setState] = useState({
    options: {
      colors: ['#FEB800'],
      chart: {
        id:'basic-bar'
      },
      
      xaxis: {
        categories: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8']
      }
    },
    series: [
      {
        name: "series-1",
        data: [90, 170, 195, 283, 169, 250, 260, 351]
      }
    ]
  })


  return (
    <div>
      <section className='dashboard'>
        <Sidebar/>

        <main>

          <Header/>

          <div className="home">
            <div className="home-c">

              <h2>Welcome back, Ezekiel</h2>

              <div className="cards">
                <div className="card">
                    
                  <div className='first'>
                    <span>Users</span>
                    <select name="" id="">
                      <option value="">All</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>146</h5>
                    <a href=''>View All Users</a>
                  </div>


                </div>


                <div className="card">
                    
                  <div className='first'>
                    <span>Signups</span>
                    <select name="" id="">
                      <option value="">Today</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>146</h5>
                    <a href=''>View more</a>
                  </div>


                </div>



                <div className="card">
                    
                  <div className='first'>
                    <span>Transaction volume</span>
                    <select name="" id="">
                      <option value="">All</option>
                      <option value=""></option>
                    </select>
                  </div>

                  <div>
                    <h5>146</h5>
                    <a href=''>View All Users</a>
                  </div>


                </div>


              </div>


              <div className="graph">
              <Chart 
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="100%"
                  height='300'
                  
                  
                  
                /> 
              </div>


            </div>
            
          </div>

        </main>

      </section>
    </div>
  )
}

export default Dashboard