import React from 'react';

const AppCard = ({app}) => {
    return (
        <div>
            <div className="card bg-base-100 max-w-96 shadow-sm">
          <figure>
            <img
              src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc"
              className="p-2 rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app.title}</h2>
            <div className="flex justify-between">
                <div className="btn outline-0 border-none">
                    <img src="/src/assets/icon-downloads.png" className="w-[13px] h-[13px]" />
                    <p>{app.downloads}</p>
                </div>
                <div className="btn outline-0 border-none bg-amber-100">
                    <img src="/src/assets/icon-ratings.png" className="w-[13px] h-[13px]" />
                    <p>{app.ratingAvg}</p>
                </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default AppCard;