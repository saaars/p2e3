import dayjs from "dayjs";
import { Link } from "react-router-dom";

const PersonItem = ({ item }) => {
  return (
    <div className="col-sm-4">
        <div className="card my-2">
            <img src={item?.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">
                    {item?.first_name}
                </h5>

                <div className="abt">
                    <span className="font-semibold tracking-wide mr-4">Breed: </span>
                    <p className="card-text">{item?.breed}</p>
                </div>
                <div className="abt">
                    <span className="font-semibold tracking-wide mr-4">Gender: </span>
                    <p className="card-text">{item?.gender}</p>
                </div>
                <div className="abt">
                    <span className="font-semibold tracking-wide mr-4">Size: </span>
                    <p className="card-text">{item?.size}</p>
                </div>
                <div className="abt">
                    <span className="font-semibold tracking-wide mr-4">Birthday: </span>
                    <p className="card-text">{dayjs(item?.date).format("DD MMMM YYYY")}</p>
                </div>

                <div className="btn-nxt">
                    <Link to={'/dogDescrip'}>
                        <button type="button" class="btn btn-secondary btn-width btn-block">View More</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PersonItem;