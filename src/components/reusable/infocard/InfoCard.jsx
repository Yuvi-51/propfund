import "./InfoCard.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const InfoCard = () => {
  const data = [
    {
      id: 1,
      name: "Mr. Gaurav Mittal",
      linkedIn: "https://www.linkedin.com/in/gaurav-mittal-2295a28/",
      image: "/gaurav mittal.jpg",
    },
    {
      id: 2,
      name: "Dr. Raju Manwani",
      linkedIn: "https://www.linkedin.com/in/raju-manwani-419119107/",
      image: "/Dr. Raju Manwani.jpg",
    },
    {
      id: 3,
      name: "Mr. Amar Shah",
      linkedIn: "https://www.linkedin.com/in/amar-shah-541aab21/",
      image: "/Mr. Amar Shah.jpg",
    },
    {
      id: 4,
      name: "Mr. Dinesh Vasudevan",
      linkedIn: "https://www.linkedin.com/in/dinesh-vasudevan-9aa78951/",
      image: "/Mr. Dinesh Vasudevan.jpg",
    },
    {
      id: 1,
      name: "Mr. Yogeshwar Nagda",
      linkedIn: "https://www.linkedin.com/in/nagda-yogeshwar-62221a8/",
      image: "/Mr. Yogeshwar Nagda.webp",
    },
    {
      id: 1,
      name: "Mr. Sukant Mangal",
      linkedIn: "https://www.linkedin.com/in/sukant-mangal-8947655/",
      image: "/Mr. Sukant Mangal.webp",
    },
  ];

  return (
    <div className="info_card">
      {data.map((data, i) => (
        <div className="card_div" key={i}>
          <div className="img_div">
            <img src={data.image} className="img" />
            <Link className="linked_in" href={data.linkedIn} target="_blank">
              <LinkedInIcon style={{ color: "#cf9b52" }} />
            </Link>
          </div>
          <div className="name">{data.name}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
