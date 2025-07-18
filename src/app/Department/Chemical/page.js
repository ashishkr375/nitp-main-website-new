'use client'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify1 from '../../components/department/DepartmentNotify1'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from "axios";
import { useEffect, useState } from "react";





export default function Page() {
  const router = useRouter();
  const [Notices, setNotices] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      const response =await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=che`);
      // console.log(response.data);
      setNotices(response.data);
    }
    getData();
  },[])
  return (
    <div className="p-10 max-sm:px-0 text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-2">
      Chemical Engineering and Technology
      </div>
      <BackDepartment navigate={"/Department"} />
      {/* Section 1 */}
      <div className="grid grid-cols-6 max-md:grid-cols-1">
        {/* Department Picture */}
        <div className="h-[500px] flex justify-start py-10 col-span-3 mr-4 max-sm:mr-0">
          <Image
            src="/nit-patna-003.jpg"
            className="rounded-lg max-sm:rounded-none shadow-lg shadow-slate-600 h-full"
            alt="Logo"
            width={700}
            height={1000}
          />
        </div>
        {/* Notice  */}
        <div className=" py-10  col-span-3 max-lg:col-span-3 flex flex-col max-md:mb-10">
          <div className="bg-white rounded-lg shadow-lg shadow-slate-600 px-4 h-[420px] overflow-y-auto">
            <div className="flex justify-between mb-4 text-lg font-semibold text-slate-500">
              <div>Announcement</div>
              <button className="hover:text-blue-500">View All</button>
            </div>
            <div className="overflow-hidden flex flex-col-reverse">
            {Notices.map((notice, id) => {
                  if(notice.isVisible === 1){
                    return (
                      <DepartmentNotify1
                        key={id}
                        title={notice.title}
                        attachments = {notice.attachments}
                        important = {notice.important}
                        link={notice.notice_link? notice.notice_link : ""}
                    />
                  )
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="grid grid-cols-2 max-md:grid-cols-1">

        {/* About */}

        <div className="px-6 max-sm:px-2 ">
          <div className="mb-4 text-2xl max-sm:text-lg font-semibold text-red-950">
            About
          </div>
          <div className="text-justify max-sm:text-[12px]">
          The Department of Chemical Engineering at the National Institute of Technology Patna was established in 2024 with the vision to become a leader in Chemical Engineering education and research. Our engineering programs will provide a robust foundation in chemical engineering principles, combining traditional courses with emerging specializations. Students delve into core subjects such as material and energy balance, thermodynamics, mass transfer, heat transfer, fluid mechanics, chemical reaction engineering, process control, petroleum and polymer processing, and computational systems. We are dedicated to fostering an environment of innovative research and development.
                <button
                onClick={() => router.push('/Department/Chemical/about')}
                className="text-blue-600"
                >
                more...
                </button>
          </div>
        </div>

        {/* Navigation Button  */}

        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chemical/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chemical/faculty')}
            Title={'PEOPLE'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chemical/syllabus')}
            Title={'SYLLABUS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chemical/timeTable')}
            Title={'Time Table'}
          />
          {/* <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chemical/activities')}
            Title={'ACTIVITIES'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chemical/achivments')}
            Title={'ACHIEVMENTS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chemical/research')}
            Title={'RESEARCH HIGHLIGHT'}
          /> */}
        </div>
      </div>
    </div>
  )
}
