import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/Nazrul.jpg";
import people2 from "../../../assets/images/robiullah.jpg";
import people3 from "../../../assets/images/jamal.jpg";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Nazrul Islam Nayeem",
      img: people1,
      review:
        "Amazing orthodontic treatment! My teeth are now perfectly aligned. The dentist explained every step, making the process comfortable and smooth. Highly recommend for anyone needing braces or aligners.",
      location: "Uttor Adda",
    },
    {
      _id: 2,
      name: "MD Robi Ullah",
      img: people2,
      review:
        "Had cosmetic work and teeth cleaning done here. My smile looks fantastic, and my teeth feel so clean! Professional staff, state-of-the-art equipment. I couldn’t be happier with the results!",
      location: "Barera, Jolom",
    },
    {
      _id: 3,
      name: "MD Jamal Hosaain",
      img: people3,
      review:
        "Wonderful experience for my kids! The pediatric dental care is top-notch. Gentle, patient, and effective in preventing cavities. My children now love going to the dentist!",
      location: "Beoline",
    },
  ];

  return (
    <section className="my-10 py-8">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
