const Table = (props: any) => {
  return (
    <div className="flex flex-col mt-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-300">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Form Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((item: any, counter: number) => {
                  return (
                    <tr
                      className={counter % 2 === 0 ? "bg-white" : "bg-gray-100"}
                      key={item.id}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {counter + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className="cursor-pointer hover:text-indigo-600"
                          onClick={() => {
                            props.setSelectedForm(item.id);
                            props.toggleModal();
                          }}
                        >
                          {item.form}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-indigo-600 hover:text-indigo-900 outline-none">
                          Edit
                        </button>
                        {" / "}
                        <button className="text-indigo-600 hover:text-indigo-900 outline-none">
                          Delete
                        </button>
                        {" / "}
                        <button className="text-indigo-600 hover:text-indigo-900 outline-none">
                          Dupoicate icons
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
