import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrismaClient } from "@prisma/client";
import { table } from "console";
import React from "react";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

//buat variabel prisma
const prisma = new PrismaClient();

export default async function RootPage() {
  //buat variabel mahasiswa
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      // status: "Y",
      // prodi: {
      //   contains : "formasi"
      // }
    },
  });
  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="bg-slate-300 h-12 ">
            <th className="w-10% border border-slate-700">Aksi</th>
            <th className="w-10% border border-slate-700">NPM</th>
            <th className="w-1/2 border border-slate-700">Nama</th>
            <th className="w-30% border border-slate-700">Prodi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>
            <tr>
              <td className="border border-slate-700 p-2.5 text-center">
                {/* icon edit */}
                <Link
                  href="/"
                  className="bg-blue-700 text-white py-5X px-2.5 rounded-md hover:bg-blue-900 mr-1"
                  title="Ubah Data"
                >
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon trash */}
                <Link
                  href="/"
                  className="bg-red-600 text-white py-5X px-2.5 rounded-md hover:bg-red-900 ml-1"
                  title="Hapus"
                >
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </Link>
              </td>
              <td className="border border-slate-700 px-2.5 text-center">
                {data.npm}
              </td>
              <td className="border border-slate-700 px-2.5 text-justify">
                {data.nama}
              </td>
              <td className="border border-slate-700 px-2.5 text-center">
                {data.prodi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.nama} */}
    </>
  );
}
