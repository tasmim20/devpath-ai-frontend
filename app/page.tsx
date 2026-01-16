import CompanyCategory from "./components/Home/CompanyCategory";
import Header from "./components/Home/Header";
import Testimonial from "./components/Home/Testimonial";
import WhyUs from "./components/Home/WhyUs";

export default function Home() {
  return (
    <div>
      <div className="max-w-8xl mx-auto px-5 py-16">
        {" "}
        <Header />
        <CompanyCategory />
        <WhyUs />
        <Testimonial />
      </div>
    </div>
  );
}
