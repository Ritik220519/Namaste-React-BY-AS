const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold p-4 m-4 text-lg ">contact us</h1>
      <input type="text" className="border border-black rounded-md  m-4" placeholder="Name"  />
      <input type="text" className="border border-black rounded-md  m-4" placeholder="message"/>
      <div>
        <button className="border border-black p-2 rounded-md bg-slate-100 my-5">submit</button>
      </div>
    </div>
  );
};

export default Contact;
