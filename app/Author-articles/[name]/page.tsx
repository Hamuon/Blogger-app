"use client";
import Blog from "@/components/blog";
import React from "react";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import Link from "next/link";
export default function page({ params }: { params: { name: string } }) {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/get-blogs");
      const json = await response.json();
      setBlogs(json);
    }
    fetchData();
  }, []);

  return (
    <div className="flex w-full justify-center mt-20">
      <div className=" container">
        <div className=" text-3xl">بلاگ های {params.name}</div>
        {blogs ? (
          blogs.length ? (
            blogs.map((blog) =>
              blog.author == params.name ? (
                <Blog
                  title={blog.title}
                  desc={blog.desc}
                  author={blog.author}
                  url={blog.img}
                  date={blog.date}
                />
              ) : null
            )
          ) : (
            <div className="mt-10">
              <div className="mb-14">
                <Skeleton variant="circular" width={60} height={60} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </div>
              <div className="mb-14">
                <Skeleton variant="circular" width={60} height={60} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </div>
              <div className="mb-14">
                <Skeleton variant="circular" width={60} height={60} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </div>
              <div className="mb-14">
                <Skeleton variant="circular" width={60} height={60} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </div>
            </div>
          )
        ) : (
          <>
            <div className="mt-5">مقاله ای برای نمایش وجود ندارد.</div>
            <Link href="/Create-blog">
              <p className=" text-red-600">ایجاد مقاله جدید؟</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
