const Header = (props: any) => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-bold text-2xl text-black">MyForms</p>
      <div>
        <button
          className="bg-green-500 hover:bg-green-400 text-white w-28 h-9 rounded outline-none"
          onClick={() => {
            props.setSelectedForm("");
            props.toggleModal();
          }}
        >
          Add Form
        </button>
        <button className="ml-5 bg-indigo-500 hover:bg-indigo-400 text-white w-28 h-9 rounded outline-none">
          Integrations
        </button>
      </div>
    </div>
  );
};

export default Header;
