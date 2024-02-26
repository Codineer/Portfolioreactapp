'use client'

import React from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json"
import Link from 'next/link';

interface Course {

    id: number,
    title: String,
    slug: String,
    description: String,
    price: number,
    instructor: String,
    isFeatured: Boolean,

}

const FeaturedSection = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>

                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
                    <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl '>Learn with the best</h2>

                </div>
            </div>
            <div className='mt-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course: Course) => (<div key={course.id} className='flex justify-center'>


                        <BackgroundGradient className="h-full rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center">

                            <p className=" text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
                                {course.title}
                            </p>

                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow text-center">
                                {course.description}
                            </p>
                            <Link className="" href={`courses/${course.slug}`}>
                                Learn More</Link>
                        </BackgroundGradient>
                    </div>))}

                </div>
            </div>
            <div className='m-20 text-center '><Link href={"/courses"}  className='bg-white text-black font-bold rounded-md  py-3 px-6'>
                View All Courses
            </Link></div>


        </div>
    )
}

export default FeaturedSection
