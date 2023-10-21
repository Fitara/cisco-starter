/* eslint-disable react/prop-types */
export default function Exhibit({ props }) {
  return (
    <div className="exhibit-container">
          {props.map((prop, index) => {
              return (
            <div key={index} className="exhibit-card">
                    <div className="exhibit-header">
                        <h2>{prop.title}</h2>
                    </div>
                    <div className="exhibit-content">
                        {prop.children}
                    </div>
                </div>
              )
          })}
    </div>
  );
}
