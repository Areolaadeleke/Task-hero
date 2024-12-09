import { useQuery } from "@tanstack/react-query";
import { getUser } from "../userApi";
import Spinner from "../ui/Spinner";
//import Spinner from "../ui/Spinner";
//import { newDate } from "react-datepicker/dist/date_utils";
//import UserRow from "./UserRow";

function UserHeader() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (isLoading) return <Spinner />;

  console.log(error);
  return (
    <div className="user-header">
      <header>
        <div>image</div>
        <div>User</div>
        <div>role</div>
        {/* <div>created at</div> */}
        <div>status</div>
        <div></div>
      </header>
      {data.map((datas) => (
        <>
          <div className="User-row">
            <div className="User-row-image">
              <img src={datas.image} />
            </div>
            <div>
              <h5>{datas.name}</h5>
            </div>
            <div>
              <h5>{datas.role}</h5>
            </div>
            <div>
              <p>{datas.statues}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default UserHeader;
