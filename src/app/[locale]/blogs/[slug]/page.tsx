import { Demo1 } from "@/assets";
import { LatestBlog } from "@/components";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BlogDetail: NextPage = () => {
    const t = useTranslations("Common");
  return (
    <main className="sec-padd">
      <div className="app-container">
        <div className="grid grid-cols-6 justify-center items-center">
          <div className="col-start-2 col-span-4">
            <div className="blog-meta">
                <div className="blog-date">Thursday, 10 August 2023</div>
                <span>/</span>
                <div className="blog-tag">{t("#blog_tag")}</div>
            </div>
            <div className="blog-title">
                <h4>There are many variations of passages of Lorem Ipsum available, but</h4>
            </div>
            <figure className="blog-image">
              <Image
                src={Demo1}
                alt="Blog Title"
                className="img-fit cover object-center"
              />
            </figure>
            <div className="blog-content">
              <p>From Text Editor</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <LatestBlog />
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
