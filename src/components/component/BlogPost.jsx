import Title from "../common/Title";
import Heading from "../common/Heading";
import { feeds } from "../../data/dummyData";
import ReadMoreButton from "../ui/ReadMoreButton";
import { Link, useLocation } from "react-router-dom";

const BlogPost = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Title className="mx-auto">Blog Post</Title>
      <Heading>latest newsfeeds</Heading>
      <ul className="grid grid-cols-2 gap-10 py-16">
        {feeds
          .slice(0, pathname !== "/blog" ? 4 : 8)
          .map(({ id, title, date_posted, image, category, description }) => (
            <li
              key={id}
              className="col-span-2 md:col-span-1 flex flex-col lg:flex-row gap-5"
            >
              <div className="rounded-xl overflow-hidden h-full w-full">
                <img src={image} alt={title} className="h-full w-full" />
              </div>
              <div className="flex flex-col gap-6 items-start justify-center">
                <h2 className="font-bold text-c-5">
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to="/blog"
                  >
                    <span className="text-2xl">{category}</span> <br />
                    {title}
                  </Link>
                </h2>
                <p className="uppercase text-slate-300">
                  by Wabweni Brian: {date_posted}
                </p>
                <p className="text-slate-400">{description}</p>
                <ReadMoreButton to="/blog" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogPost;
