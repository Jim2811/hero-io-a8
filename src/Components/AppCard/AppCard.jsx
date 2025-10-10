import React from 'react';
import { useNavigate } from 'react-router';

const AppCard = ({app}) => {
  const navigate = useNavigate()
    return (
        <div className='cursor-pointer' onClick={()=> navigate(`/apps/${app.id}`)}>
            <div className="card bg-base-100 max-w-96 shadow-sm">
          <figure>
            <img
              src={app.image}
              className="p-2 rounded-xl max-w-[250px] h-[250px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app.title}</h2>
            <div className="flex justify-between">
                <div className="btn outline-0 border-none">
                    <img src="/assets/icon-downloads.png" className="w-[13px] h-[13px]" />
                    <p>{app.downloads/1000000}M</p>
                </div>
                <div className="btn outline-0 border-none bg-amber-100">
                    <img src="/assets/icon-ratings.png" className="w-[13px] h-[13px]" />
                    <p>{app.ratingAvg}</p>
                </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default AppCard;