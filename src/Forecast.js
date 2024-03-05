import React from "react";

export default function Forecast() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="forecast text-center">
            <div className="row">
              <div className="col-2">
                <div>Monday</div>
                <div>🌤️</div>
                <div>
                  26/<strong>32</strong>
                </div>
              </div>
              <div className="col-2">
                <div>Tuesday</div>
                <div>🌤️</div>
                <div>
                  26/<strong>32</strong>
                </div>
              </div>
              <div className="col-2">
                <div>Wednesday</div>
                <div>🌤️</div>
                <div>
                  26/<strong>32</strong>
                </div>
              </div>
              <div className="col-2">
                <div>Thursday</div>
                <div>🌤️</div>
                <div>
                  26/<strong>32</strong>
                </div>
              </div>
              <div className="col-2">
                <div>Friday</div>
                <div>🌤️</div>
                <div>
                  26/<strong>32</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
