import moment from "moment";

const Table = ({ row }) => {
  return (
    typeof row === "object" && (
      <div className="capitalize bg-[#FAFAFA] rounded-xl min-w-[800px] w-[80vw] overflow-x-auto">
        <div className="text-base font-bold text-[#737373] px-3 text-center ">
          <div className="grid grid-cols-8 gap-2 p-3 items-center">
            {/* first col*/}
            <div className="text-left">No.</div>
            {/* second col- name*/}
            <div className=" font-bold text-left">Dish Name</div>
            {/* third col - description */}
            <div className="col-span-2">description</div>
            {/* fourth col- date */}
            <div className="">Date</div>

            {/* fifth col - user name */}
            <div>User name</div>
            {/* sixth col - useremail */}
            <div className="col-span-2">user email</div>
            {/* nineth col -dots */}
            {/* actions */}
          </div>
          <div className="h-[450px] ">
            {row.map((choice, idx) => (
              <div
                key={idx}
                className="grid p-3 grid-cols-8 border-t gap-2 items-center"
              >
                {/* first col- id*/}
                <div className="text-left">{idx}</div>
                {/* second col- dish name*/}
                <div>
                  <h4 className="text-left">{choice.dish_name}</h4>
                </div>
                {/* third col - desc */}
                <div className="col-span-2 font-bold">{choice.dish_desc}</div>
                {/* fourth col - date */}
                <div className="">
                  {moment(choice.available_date).format("YYYY - MM - DD")}
                </div>
                {/*fifth col-username */}
                <div className="">{choice.user_name}</div>
                {/* sixth col -email */}
                <div className="col-span-2 lowercase">{choice.user_email}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Table;
