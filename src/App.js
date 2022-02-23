import PriceComponent from './components/PriceComponent';

function App() {
  return (
    <section className="container">
      <div className="top">
        <h1>
          Simple, traffic-based pricing
        </h1>
        <p>
          Sign-up for our 30-day trial. No credit card required. 
        </p>
      </div>

      <div className="pricing-component">
        <div className="price-content">
          <PriceComponent />
        </div>

        <div className="details">
          <div className="description">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
          </div>

          <button>
            Start my trial
          </button>
        </div>

      </div>
    </section>
  );
}

export default App;
