import { getContacts } from "@/mongo/contact/services";
import React from "react";
import { signOut } from "@/auth";
import { FaPowerOff } from "react-icons/fa";

const page = async () => {
  const { data } = await getContacts();
  return (
    <>
      <div className="flex flex-col py-10  min-h-screen bg-gray-100">
        {/* titulo y signout */}
        <div className="flex flex-col sm:flex-row justify-between mx-4 sm:mx-8">
          <h1 className="text-2xl md:text-5xl font-bold">Contactos</h1>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
            className="col-span-1 flex justify-end items-center gap-4"
          >
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium text-red-700 border border-gray-300 hover:border-gray-500 hover:text-red-900 md:flex-none md:justify-start md:p-2 md:px-3">
              <FaPowerOff className="w-6 text-red-700" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
        {/* inicio card container */}
        <div className="flex-1 px-8 py-6 m-4 sm:mx-8 text-left bg-white shadow-lg rounded-lg flex flex-col space-y-4 overflow-auto">
          {/* inicio card */}
          {data?.map((contact) => (
            <div
              key={contact._id}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-gray-500 pb-5"
            >
              <div className="col-span-2">
                <p className="font-bold">{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <div className="col-span-1">
                <p className="font-bold">{contact.phone}</p>
                <p>{contact.country}</p>
              </div>
              <div className="col-span-full">
                <p>
                  <span className="font-bold">Mensaje:</span> {contact.message}
                </p>
                <p>
                  <span className="font-bold">Experiencia en inversiones:</span>{" "}
                  {contact.investment_experience}
                </p>
              </div>
            </div>
          ))}
          {/* fin card */}
        </div>
        {/* fin card container */}
      </div>
    </>
  );
};

export default page;
