"use server";
import { PrismaClient } from "@prisma/client";

// buat variable "prisma"
const prisma = new PrismaClient();

// buat fungsi untuk ambil data mahasiswa
export async function getData() {
  // buat variabel mahasiswa: menampilkan data mahasiswa dengan filter berstatus Y
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      status: "Y",
      // prodi: {
      //   contains: "formasi"
      // },
    },
  });
  return mahasiswa;
}

//buat fungsi hapus data (update status Y >> T)
//arrow function
export const setUpdateStatus = async() =>
{

}
