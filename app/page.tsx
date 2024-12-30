"use client";

import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData, setUpdateStatus } from "./models/mahasiswa";

// Fungsi untuk dialog hapus
async function setDelete(npm: string, nama: string) {
  if (confirm(`Data Mahasiswa: ${npm} - ${nama} Ingin Dihapus?`) == true) {
    // alert("Ok");
    await setUpdateStatus(npm);
    alert(`Data Mahasiswa: ${npm} - ${nama} Berhadsil dihapus`);
    //reload
    location.reload();
  }
  // else {

  // }
}

export default function Rootpage() {
  // State dengan "useState"
  const [getValue, setValue] = useState({});

  // Fungsi untuk memanggil "getData"
  async function fetchData() {
    setValue(await getData());
  }

  // Menggunakan "useEffect"
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav className="text-center mb-5 flex justify-end ">
        <title>View Data Mahasiswa</title>
        <Link className="btn btn-outline" href={"/add"}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          Tambah Data Mahasiswa
        </Link>
      </nav>
      {/* Tampilkan data mahasiswa */}
      <table className="w-full">
        <thead>
          <tr className="bg-slate-300 h-12">
            <th className="w-10% border border-black">Aksi</th>
            <th className="w-10% border border-black">NPM</th>
            <th className="w-1/2 border border-black">Nama</th>
            <th className="w-30% border border-black">Prodi</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            <tr key={index}>
              <td className="border border-black p-2.5 text-center">
                {/* Icon Edit */}
                <Link
                  href={`/edit/${btoa(data.npm)}`}
                  className="bg-green-700 hover:bg-green-800 text-white py-2.5 px-2.5 rounded-xl mr-1 text-sm"
                  title="Ubah Data"
                >
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* Icon Delete */}
                <Link
                  className="bg-red-500 hover:bg-red-600 text-white py-2.5 px-2.5 rounded-xl ml-1 text-sm"
                  title="Hapus Data"
                  onClick={() => {
                    setDelete(data.npm, data.nama);
                  }}
                  href={""}
                >
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Link>
              </td>
              <td className="border border-black px-2.5 text-center">
                {data.npm}
              </td>
              <td className="border border-black px-2.5 text-justify">
                {data.nama}
              </td>
              <td className="border border-black px-2.5 text-center">
                {data.prodi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
