"use client";
import { Badge } from "@/components/ui/badge";
import { getMyPost } from "../lib/backend";
import { capitalize, title } from 'radash'
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
const isBrowser = typeof window !== "undefined";

export default function Posts({ posts }) {

  return (
    <div className="w-full pt-0 pb-20">
      <div className="container mx-auto lg:w-full w-5/6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center lg:items-start">
            <div>
              <Badge>Blogs</Badge>
            </div>
            <div className="flex gap-2  items-center lg:items-start flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Latest Blogs
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-center lg:text-left">
                Here are some of my latest blog posts. I write about various topics including technology, programming, and personal development.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0,6).map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
         <div className="flex justify-center">
         <Button className="gap-4 rounded-3xl hover:scale-105 transition-transform duration-500">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
         </div>
        </div>
      </div>
    </div>
  );
}

const Post = ({ post }) => {
  const parse = (htmlContent) => {
    if(isBrowser){
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");
      const images = doc.querySelectorAll("img");
  
      const srcList = Array.from(images).map((img) => img.src);
  
      console.log(srcList);
      if (srcList.length > 0) {
        return srcList[0];
      }
    }
  };

  const parseParagraph = (htmlContent) => {

    if(isBrowser){
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");
      const paragraphs = doc.querySelectorAll("p");
  
      const paragraphList = Array.from(paragraphs).map((p) => p.textContent);
  
      console.log(paragraphList);
      // if (paragraphList.length > 0) {
      //     const paragraph = paragraphList[0];
      //     return paragraph.length > 100 
      //       ? paragraph.slice(0, 100) + "..." 
      //       : paragraph;
      // }
    }
  
  };



  return (
    <a
      className="flex flex-col gap-2
        bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 hover:cursor-pointer "
        href={post.link}
    >
      <div
        style={{
          backgroundImage: `url(${parse(post.content)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        
        }}
        className="bg-muted  aspect-video mb-2 rounded-t-xl"
      ></div>
      {/* <div className="bg-muted rounded-md aspect-video mb-2"></div> */}
      <div className="px-4 pb-4">
      <h3 className="text-xl font-semibold tracking-tight">{post.title}</h3>
      <p className="text-muted-foreground max-w-lg my-2 text-sm text-gray-600">
        {parseParagraph(post.content)}
      </p>
      <div className="">
        {
            post.categories.slice(0,3).map((category, index) => (
                <Badge className="rounded-full m-1" key={index}>{title(category.split("-").join(" "))}</Badge>
            ))
        }
      </div>
      </div>
    </a>
  );
};
