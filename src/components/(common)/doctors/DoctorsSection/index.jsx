import { MagnifyOutline } from "@/assets/svg/icons/Magnify";
import DoctorCard from "@/components/partials/Cards/DoctorCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchFilteredDepartments,
  fetchFilteredDoctors,
} from "@/pages/(common)/DoctorsPage/doctorApis.js";

const DoctorsSection = ({ lang }) => {
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  const { data: departments } = useQuery({
    queryKey: ["filtered_departments"],
    queryFn: () => fetchFilteredDepartments(),
  });
  const { data } = useQuery({
    queryKey: ["filtered_doctors", department, search],
    queryFn: () => fetchFilteredDoctors(department, search),
  });
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-8 md:space-y-12">
        <div className="rounded-xl bg-gradient-to-r from-primary to-primary/50 px-16 py-12">
          <div className="grid items-center justify-between gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h3 className="dark text-title">
                {lang === "en" ? "Find a Doctor" : "Find a Doctor"}
              </h3>
              <p className="dark text-foreground">
                {lang === "en"
                  ? "Choose a department or type doctors name."
                  : "Choose a department or type doctors name."}
              </p>
            </div>
            <div className="lg:col-span-7">
              <form className="flex flex-wrap items-center gap-4">
                <label className="input flex-1 bg-card">
                  <select
                    name="type"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="h-full flex-1 border-none bg-transparent text-sm outline-none"
                  >
                    <option value="">
                      {lang === "en"
                        ? "Select Department"
                        : "Select Department"}
                    </option>
                    {departments?.map((item, index) => (
                      <option key={index} value={item?._id}>
                        {lang === "en" ? item?.name : item?.name_bn}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="input flex-1 gap-4 bg-card">
                  <MagnifyOutline className="text-lg" />
                  <input
                    type="search"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter doctors name"
                    className="h-full flex-1 border-none bg-transparent text-sm outline-none"
                  />
                </label>
                {/*<Button type="submit">*/}
                {/*  <span>Search</span> <MagnifyOutline className="text-lg" />*/}
                {/*</Button>*/}
              </form>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {data?.map((item, index) => (
            <DoctorCard key={index} item={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
