import Banner from './components/Banner'
import PieChartBoard from './components/Dashboard'

function PieDashboard() {

    return (
        <div className="App">
            <div className="row">
                <div className="col-md-6 order-2 order-lg-1">
                    <PieChartBoard />
                </div>
                <div className="banner-container col-md-6 order-1 order-lg-2">
                    <Banner />
                </div>
            </div>
        </div>
    );
}

export default PieDashboard;
