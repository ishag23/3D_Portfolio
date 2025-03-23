import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Skills & Tech Stack</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
