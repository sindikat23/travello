import Company from "@/Components/Destination/Company";
import Destination from "@/Components/Destination/Destination";
import Fast_blog from "@/Components/Destination/Fast_blog";
import Main from "@/Components/Destination/Main";
import Servises from "@/Components/Destination/Servises";
import Subscribe from "@/Components/Destination/Subscribe";

export default function Home() {
  return (
    <div>
      <Main/>
      <Servises/>
      <Destination/>
      <Fast_blog/>
      <Company/>
      <Subscribe/>
    </div>
  );
}
