import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import Layout from './Layout'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <Layout>
            <section className="py-14 lg:py-18 max-w-5xl p-5 mx-auto">
                <Header header='Info Pendaftaran'>
                </Header>
                <div className='space-y-5'>
                    <div>
                        <p className='font-semibold text-xl md:text-2xl text-slate-800 mb-2'>
                            Waktu Pendaftaran
                        </p>
                        <ul className='ml-6 md:text-base text-[15px] text-text-color font-[490] opacity-90 space-y-2 md:mt-3 mt-2'>
                            <li>
                                Gelombang 1:
                                <ol className="mt-1 space-y-1 list-disc list-inside">
                                    <li>
                                        Pendaftaran : 1 Juni  – 29 Juni 2024
                                    </li>
                                    <li>
                                        Ujian Seleksi PPDB : 31 Juni 2024
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Gelombang Susulan:
                                <ol className="mt-1 space-y-1 list-disc list-inside">
                                    <li>
                                        Pendaftaran : 1 Juli – 30 Agustus 2024
                                    </li>
                                    <li>
                                        Tes Seleksi PPDB : 31 Agustus 2024
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-semibold text-xl md:text-2xl text-slate-800 mb-2'>
                            Syarat Pendaftaran
                        </p>
                        <ul className='ml-6 md:text-base text-[15px] text-text-color font-[490] opacity-90 space-y-2 md:mt-3 mt-2 list-decimal'>
                            <li>
                                Mengisi Formulir Booking Pendaftaran Online
                            </li>
                            <li>
                                Membayar Biaya Pendaftaran Rp.100.000,- ke Rekening Bank BRI: 005901001957566 A.n. YAYASAN AL-ITQAAN PALEMBANG DARUSSALAM Konfirmasi Pembayaran ke WhatsApp : 0821-7777-4005 dengan mengirimkan struk pembayaran dan nama calon santri
                            </li>
                            <li>
                                Mengisi Formulir tulis tangan dan Surat Pernyataan bermaterai 10 ribu 3 buah (Setelah dinyatakan lulus tes/saat daftar ulang*)
                            </li>
                            <li>
                                Menyerahkan Foto copy:
                                <ol className="mt-1 space-y-1 list-disc list-inside">
                                    <li>
                                        Ijazah  6 lembar (dilegalisir asli)
                                    </li>
                                    <li>
                                        SHUN  6 lembar (dilegalisir asli)
                                    </li>
                                    <li>
                                        Akte Kelahiran  6 lembar
                                    </li>
                                    <li>
                                        Kartu Keluarga (KK)  6 lembar
                                    </li>
                                    <li>
                                        KTP Kedua Orang Tua  6 lembar
                                    </li>
                                    <li>
                                        Kartu KIP, KKS/PKH (Jika ada)
                                    </li>
                                    <li>
                                        Nomor NISN 1 lembar yang di print melalui laman: <Link to='https://nisn.data.kemdikbud.go.id/' className='text-dark font-semibold hover:underline'>https://nisn.data.kemdikbud.go.id/</Link> 
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Menyerahkan Foto copy Raport Sekolah:
                                <ol className="mt-1 space-y-1 list-disc list-inside">
                                    <li>
                                        Cover Raport (NPSN / NSS)  1 lembar
                                    </li>
                                    <li>
                                        BiodataSiswa 1 lembar
                                    </li>
                                    <li>
                                        Foto copy Raport SD Kelas 1 – 6  satu rangkap
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Menyerahkan Pas Foto terbaru (perempuan wajib berjilbab putih, laki-laki pakai pecih hitam).

                                Background sesuai tahun lahir, tahun lahir ganjil warna merah, genap warna biru.
                            </li>
                            <li>
                                Berkas dimasukan kedalam Map plastik jepit warna hijau
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-semibold text-xl md:text-2xl text-slate-800 mb-2'>
                            Info Lebih Lanjut
                        </p>
                        <ul className='ml-6 md:text-base text-[15px] text-text-color font-[490] opacity-90 space-y-2 md:mt-3 mt-2 list-disc'>
                            <li>
                                Novran : <a href="https://wa.me/6283112105274" className='font-semibold'>0831-1210-5274</a>
                            </li>
                            <li>
                                Azka : <a href="https://wa.me/6283802890120" className='font-semibold'>0838-0289-0120</a>
                            </li>
                            <li>
                                Ahmad Rosyadi, S.Pd.I., M.H. : <a href="https://wa.me/6282183600728" className='font-semibold'>0821-8360-0728</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-semibold text-xl md:text-2xl text-slate-800 mb-2'>
                            Hal-hal yang harus diperhatikan sebelum mengisi Formulir Booking Pendaftaran Online
                        </p>
                        <ul className='ml-6 md:text-base text-[15px] text-text-color font-[490] opacity-90 space-y-2 md:mt-3 mt-2 list-disc'>
                            <li>
                                Pastikan data yang diinput adalah data yang sebenarnya.
                            </li>
                            <li>
                                Periksa kembali data sebelum klik Daftar
                            </li>
                            <li>
                                Setelah Formulir diisi, lakukan segera proses konfirmasi dengan menginfokan Bukti Pembayarat Pendaftaran dan Nama Calon Santri ke <a href='https://wa.me/6283802890120' className='font-semibold'>WhatsApp: 0838-0289-0120</a>  Dengan format [Nama Spasi Tanggal Pengisian Spasi Telah Mengisi Formulir]
                            </li>
                            <li>
                                Contoh: AHMAD DZAKI 15/1/2023 Telah Mengisi Formulir
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10'>
                    <Link to='/form-pendaftaran' className='bg-primary text-white rounded-md flex w-fit items-center gap-1.5 px-5 py-3 hover:opacity-95'>
                        Daftar Sekarang
                        <MdArrowForwardIos />
                    </Link>
                </div>
            </section>
        </Layout>
    )
}

export default Registration