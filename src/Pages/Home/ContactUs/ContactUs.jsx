const ContactUs = () => {
  return (
    <div className="mb-2 py-8 text-white bg-gray-900">
      <div className="text-center text-white">
        <p className="text-xl my-2">get in touch</p>
        <h2 className="text-5xl font-semibold">CONTACT</h2>
      </div>
      <div className="flex text-black  my-6 p-5">
        <div className="grid grid-cols-1 w-1/2 justify-items-end py-14 mr-10 ">
          <input
            type="text"
            placeholder="+888-5485-5858"
            className="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="joystick01@gmail.com"
            className="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Motijhil, Dhaka"
            className="input input-bordered  w-full max-w-xs"
          />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid grid-cols-1 w-1/2 justify-items-start ml-10">
          <div className="w-3/5 my-1">
            <label className="label">
              <span className="label-text"> Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-3/5 my-1">
            <label className="label">
              <span className="label-text"> Your Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-3/5 my-1">
            <label className="label">
              <span className="label-text"> Your Message</span>
            </label>
            <textarea
              className="textarea w-full h-24  textarea-bordered"
              placeholder="Type hare"
            ></textarea>
            <button className="btn text-white btn-primary px-6">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
