import React, { forwardRef, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineCalendar } from "react-icons/ai";
import Dashboard from './Dashboard'

const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative w-full">
        <input
            className="w-full border-2 text-dark border-gray-500 p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
            onClick={onClick}
            ref={ref}
            value={value}
            readOnly
            placeholder='DD-MM-YYYY'
        />
        <AiOutlineCalendar
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
        />
    </div>
));


const renderCustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
}) => (
    <div className="custom-header flex justify-between items-center px-2 py-2">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="text-gray-600 hover:text-gray-800">
            {"<"}
        </button>
        <div className="flex space-x-2">
            <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
                className="bg-white border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
                {Array.from({ length: new Date().getFullYear() - 2009 }, (_, i) => 2010 + i).map(
                    (year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    )
                )}
            </select>
            <select
                value={date.getMonth()}
                onChange={({ target: { value } }) => changeMonth(value)}
                className="bg-white border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
                {[
                    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
                ].map((month, index) => (
                    <option key={month} value={index}>
                        {month}
                    </option>
                ))}
            </select>
        </div>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="text-gray-600 hover:text-gray-800">
            {">"}
        </button>
    </div>
);

const EditRegistrant = () => {
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState('')
    const [preview, setPreview] = useState('')
    const [registrationType, setRegistrationType] = useState('')
    const [intendedPath, setIntendedPath] = useState('')
    const [schoolOrigin, setSchoolOrigin] = useState('')
    const [schoolOriginAddress, setSchoolOriginAddress] = useState('')
    const [everPreSchool, setEverPreSchool] = useState('')
    const [everKindergarten, setEverKindergarten] = useState('')
    const [diploma, setDiploma] = useState('')
    const [hobby, setHobby] = useState('')
    const [aspiration, setAspiration] = useState('')
    const [fullname, setFullname] = useState('')
    const [gender, setGender] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [nisn, setNisn] = useState('')
    const [nik, setNik] = useState('')
    const [kk, setKk] = useState('')
    const [birthCertificate, setBirthCertificate] = useState('')
    const [whichChild, setWhichChild] = useState('')
    const [religion, setReligion] = useState('')
    const [specialNeed, setSpecialNeed] = useState('')
    const [address, setAddress] = useState('')
    const [rt, setRt] = useState('')
    const [rw, setRw] = useState('')
    const [village, setVillage] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [residence, setResidence] = useState('')
    const [transport, setTransport] = useState('')
    const [fatherWa, setFatherWa] = useState('')
    const [motherWa, setMotherWa] = useState('')
    const [email, setEmail] = useState('')
    const [kip, setKip] = useState('')
    const [pkh, setPkh] = useState('')
    const [citizenship, setCitizenship] = useState('')
    const [country, setCountry] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [fatherBirthDate, setFatherBirthDate] = useState('')
    const [fatherEducation, setFatherEducation] = useState('')
    const [fatherJob, setFatherJob] = useState('')
    const [fatherSalary, setFatherSalary] = useState('')
    const [fatherSpecialNeed, setFatherSpecialNeed] = useState('')
    const [motherName, setMotherName] = useState('')
    const [motherBirthDate, setMotherBirthDate] = useState('')
    const [motherEducation, setMotherEducation] = useState('')
    const [motherJob, setMotherJob] = useState('')
    const [motherSalary, setMotherSalary] = useState('')
    const [motherSpecialNeed, setMotherSpecialNeed] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [distance, setDistance] = useState('')
    const [time, setTime] = useState('')
    const [numberSibling, setNumberSibling] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://itqaanserver-production.up.railway.app/register/id/${id}`)
            .then(response => {
                response.json().then(registrantInfo => {
                    setRegistrationType(registrantInfo.jenis_pendaftaran)
                    setIntendedPath(registrantInfo.jenjang_tujuan)
                    setSchoolOrigin(registrantInfo.nama_sekolah_asal)
                    setSchoolOriginAddress(registrantInfo.alamat_sekolah_asal)
                    setEverPreSchool(registrantInfo.pernah_paud)
                    setEverKindergarten(registrantInfo.pernah_tk)
                    setDiploma(registrantInfo.nomor_ijazah_tahun)
                    setHobby(registrantInfo.hobi)
                    setAspiration(registrantInfo.cita_cita)
                    setFullname(registrantInfo.nama_lengkap_siswa)
                    setGender(registrantInfo.jenis_kelamin)
                    setBirthPlace(registrantInfo.tempat_lahir)
                    setBirthDate(registrantInfo.tanggal_lahir)
                    setNisn(registrantInfo.nisn)
                    setNik(registrantInfo.nik)
                    setKk(registrantInfo.no_kartu_keluarga)
                    setBirthCertificate(registrantInfo.no_akta_kelahiran)
                    setWhichChild(registrantInfo.anak_ke)
                    setReligion(registrantInfo.agama)
                    setSpecialNeed(registrantInfo.kebutuhan_khusus_siswa)
                    setAddress(registrantInfo.alamat_lengkap)
                    setRt(registrantInfo.rt)
                    setRw(registrantInfo.rw)
                    setVillage(registrantInfo.kelurahan)
                    setDistrict(registrantInfo.kecamatan)
                    setCity(registrantInfo.kabupaten)
                    setProvince(registrantInfo.provinsi)
                    setPostalCode(registrantInfo.kode_pos)
                    setResidence(registrantInfo.tempat_tinggal)
                    setTransport(registrantInfo.moda_transportasi)
                    setFatherWa(registrantInfo.no_hp_ayah)
                    setMotherWa(registrantInfo.no_hp_ibu)
                    setEmail(registrantInfo.email_siswa)
                    setKip(registrantInfo.no_kp)
                    setPkh(registrantInfo.no_pkh)
                    setCitizenship(registrantInfo.kewarganegaraan)
                    setCountry(registrantInfo.nama_negara)
                    setFatherName(registrantInfo.nama_ayah)
                    setFatherBirthDate(registrantInfo.tahun_lahir_ayah)
                    setFatherEducation(registrantInfo.pendidikan_ayah)
                    setFatherJob(registrantInfo.pekerjaan_ayah)
                    setFatherSalary(registrantInfo.penghasilan_ayah)
                    setFatherSpecialNeed(registrantInfo.kebutuhan_khusus_ayah)
                    setMotherName(registrantInfo.nama_ibu)
                    setMotherBirthDate(registrantInfo.tahun_lahir_ibu)
                    setMotherEducation(registrantInfo.pendidikan_ibu)
                    setMotherJob(registrantInfo.pekerjaan_ibu)
                    setMotherSalary(registrantInfo.penghasilan_ibu)
                    setMotherSpecialNeed(registrantInfo.kebutuhan_khusus_ibu)
                    setHeight(registrantInfo.tinggi_badan)
                    setWeight(registrantInfo.berat_badan)
                    setDistance(registrantInfo.jarak_ke_sekolah)
                    setTime(registrantInfo.waktu_tempuh_sekolah)
                    setNumberSibling(registrantInfo.jumlah_saudara)
                })

                if (!response.ok) navigate('/dashboard/registrant')
            })
    }, [])


    const upadateRegistrant = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        data.set('jenis_pendaftaran', registrationType)
        data.set('jenjang_tujuan', intendedPath)
        data.set('nama_sekolah_asal', schoolOrigin)
        data.set('alamat_sekolah_asal', schoolOriginAddress)
        data.set('pernah_paud', everPreSchool)
        data.set('pernah_tk', everKindergarten)
        data.set('nomor_ijazah_tahun', diploma)
        data.set('hobi', hobby)
        data.set('cita_cita', aspiration)
        data.set('nama_lengkap_siswa', fullname)
        data.set('jenis_kelamin', gender)
        data.set('tempat_lahir', birthPlace)
        data.set('tanggal_lahir', birthDate)
        data.set('nisn', nisn)
        data.set('nik', nik)
        data.set('no_kartu_keluarga', kk)
        data.set('no_akta_kelahiran', birthCertificate)
        data.set('anak_ke', whichChild)
        data.set('agama', religion)
        data.set('kebutuhan_khusus_siswa', specialNeed)
        data.set('alamat_lengkap', address)
        data.set('rt', rt)
        data.set('rw', rw)
        data.set('kelurahan', village)
        data.set('kecamatan', district)
        data.set('kabupaten', city)
        data.set('provinsi', province)
        data.set('kode_pos', postalCode)
        data.set('tempat_tinggal', residence)
        data.set('moda_transportasi', transport)
        data.set('no_hp_ayah', fatherWa)
        data.set('no_hp_ibu', motherWa)
        data.set('email_siswa', email)
        data.set('no_kip', kip)
        data.set('no_pkh', pkh)
        data.set('kewarganegaraan', citizenship)
        data.set('nama_negara', country)
        data.set('nama_ayah', fatherName)
        data.set('tahun_lahir_ayah', fatherBirthDate)
        data.set('pendidikan_ayah', fatherEducation)
        data.set('pekerjaan_ayah', fatherJob)
        data.set('penghasilan_ayah', fatherSalary)
        data.set('kebutuhan_khusus_ayah', fatherSpecialNeed)
        data.set('nama_ibu', motherName)
        data.set('tahun_lahir_ibu', motherBirthDate)
        data.set('pendidikan_ibu', motherEducation)
        data.set('pekerjaan_ibu', motherJob)
        data.set('penghasilan_ibu', motherSalary)
        data.set('kebutuhan_khusus_ibu', motherSpecialNeed)
        data.set('tinggi_badan', height)
        data.set('berat_badan', weight)
        data.set('jarak_ke_sekolah', distance)
        data.set('waktu_tempuh_sekolah', time)
        data.set('jumlah_saudara', numberSibling)
        if (file) data.set('image', file)
        const response = await fetch(`https://itqaanserver-production.up.railway.app/register/${id}`, {
            method: 'PUT',
            body: data,

        })
        if (response.ok) {
            navigate(`/dashboard/registrant`)
            setLoading(false)
        }
    }

    const loadImage = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const deletePreview = (e) => {
        e.preventDefault()
        setPreview('')
    }

    return (
        <Dashboard>
            <div className='mt-20 max-w-5xl mx-auto p-5'>
                <h1 className='text-xl md:text-2xl font-bold text-slate-800 opacity-90 mb-4'>
                    Update Registrant
                </h1>
                <form onSubmit={upadateRegistrant}>
                    <div>
                        <h1 className='text-lg font-semibold text-text-color'>
                            Registrasi Peserta Didik
                        </h1>
                        <div className='w-full mb-4 lg:flex'>
                            <label className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Jenis Pendaftaran<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                value={registrationType}
                                onChange={(e) => setRegistrationType(e.target.value)}
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Baru">Baru</option>
                                <option value="Pindahan">Pindahan</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Jenjang yang Dituju<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={intendedPath}
                                onChange={(e) => setIntendedPath(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="SMPIT Al-Itqaan">SMPIT Al-Itqaan</option>
                            </select>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="schoolOrigin" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nama Sekolah Asal<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="schoolOrigin"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={schoolOrigin}
                                    onChange={(e) => setSchoolOrigin(e.target.value)}
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Nama sekolah peserta didik sebelumnya. Untuk peserta didik baru, isikan nama sekolah pada jenjang sebelumnya.
                                    Sedangkan bagi peserta didik mutasi/pindahan, diisi dengan nama sekolah sebelum pindah ke sekolah saat ini
                                </p>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="schoolOriginAddress" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Alamat Sekolah Asal<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="schoolOriginAddress"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={schoolOriginAddress}
                                    onChange={(e) => setSchoolOriginAddress(e.target.value)}
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Alamat sekolah peserta didik sebelumnya diisi dengan (Nama Kelurahan/Desa, Kecamatan, Kabupaten/Kota).
                                    Untuk peserta didik baru, isikan alamat sekolah pada jenjang sebelumnya. Sedangkan bagi peserta didik mutasi/pindahan, diisi dengan alamat sekolah sebelum pindah ke sekolah saat ini
                                </p>
                            </div>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="everPreSchool" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Apakah Pernah PAUD<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="everPreSchool"
                                className="lg:w-4/6 w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={everPreSchool}
                                onChange={(e) => setEverPreSchool(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Ya">Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="everKindergarten" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Apakah Pernah TK<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="everKindergarten"
                                className="lg:w-4/6 w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={everKindergarten}
                                onChange={(e) => setEverKindergarten(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Ya">Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="diploma" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nomor Seri Ijazah dan Tahun
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="diploma"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={diploma}
                                    onChange={(e) => setDiploma(e.target.value)}
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Nomor seri ijazah peserta didik pada jenjang sebelumnya ( * Wajib diisi jika sudah terbit atau bagi siswa pindahan)
                                    Contoh: DN- 11 /D-SD/K13/ 0101298 TAHUN 2022
                                </p>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="hobby" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Hobi<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="hobby"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={hobby}
                                onChange={(e) => setHobby(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="aspiration" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Cita-Cita<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="aspiration"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={aspiration}
                                onChange={(e) => setAspiration(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-lg font-semibold text-text-color'>
                            Data Pribadi
                        </h1>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="fullname" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nama Lengkap<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="fullname"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={fullname}
                                    onChange={e => setFullname(e.target.value)}
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Nama peserta didik sesuai dokumen resmi yang berlaku (Akta atau Ijazah sebelumnya)
                                </p>
                            </div>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="gender" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Jenis Kelamin<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="gender"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Laki-laki">Laki - laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="birthPlace" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Tempat Lahir<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="birthPlace"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={birthPlace}
                                    onChange={e => setBirthPlace(e.target.value)}
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Tempat lahir peserta didik sesuai dokumen resmi yang berlaku
                                </p>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label for="email" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Tanggal Lahir<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <DatePicker
                                    selected={birthDate}
                                    onChange={(date) => setBirthDate(date)}
                                    dateFormat='dd/MM/yyyy'
                                    customInput={<CustomInput />}
                                    renderCustomHeader={renderCustomHeader}
                                    wrapperClassName="w-full"
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Tanggal lahir peserta didik sesuai dokumen resmi yang berlaku
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="nisn" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                NISN<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="nisn"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={nisn}
                                    onChange={e => setNisn(e.target.value)}
                                    placeholder='Nomor Induk Siswa Nasional 10 digit'
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Nomor Induk Siswa Nasional peserta didik (NISN) memiliki format 10 digit angka. Contoh: 0009321234.
                                    Untuk memeriksa NISN, dapat mengunjungi laman <a className='inline underline font-semibold' href='https://nisn.data.kemdikbud.go.id'>https://nisn.data.kemdikbud.go.id</a>
                                </p>
                            </div>
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="nik" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                NIK<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="nik"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={nik}
                                    onChange={e => setNik(e.target.value)}
                                    placeholder='Nomor Induk Kependudukan 16 Digit'
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Nomor Induk Kependudukan yang tercantum pada Kartu Keluarga, Kartu Identitas Anak, atau KTP (jika sudah memiliki) format 16 digit angka.
                                    Contoh: 1607190906021104 Pastikan NIK tidak tertukar dengan No. Kartu Keluarga, karena keduanya memiliki format yang sama.
                                </p>
                            </div>
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="kk" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                No. Kartu Keluarga<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="kk"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={kk}
                                onChange={e => setKk(e.target.value)}
                                placeholder='No. Kartu Keluarga 16 digit'
                                required
                            />
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="birthCertificate" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                No. Akta Kelahiran<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="birthCertificate"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={birthCertificate}
                                    onChange={e => setBirthCertificate(e.target.value)}
                                    placeholder='No. Akta pada bagian tengah akta'
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Nomor registrasi Akta Kelahiran.
                                    Nomor registrasi yang dimaksud umumnya tercantum pada bagian tengah atas lembar kutipan akta kelahiran
                                </p>
                            </div>
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="whichChild" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Anak Keberapa<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="whichChild"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={whichChild}
                                    onChange={e => setWhichChild(e.target.value)}
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Sesuaikan dengan urutan pada Kartu Keluarga
                                </p>
                            </div>
                        </div>

                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="religion" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Agama<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="religion"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={religion}
                                onChange={e => setReligion(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Islam">Islam</option>
                            </select>
                        </div>

                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="specialNeed" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kebutuhan Khusus<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="specialNeed"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={specialNeed}
                                onChange={e => setSpecialNeed(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Tidak Ada">Tidak Ada</option>
                                <option value="Autis (Q)">Autis (Q)</option>
                                <option value="Bakat Istimewa (J)">Bakat Istimewa (J)</option>
                                <option value="Cerdas Istimewa (I)">Cerdas Istimewa (I)</option>
                                <option value="Down Syndrome (P)">Down Syndrome (P)</option>
                                <option value="Hyperaktif (H)">Hyperaktif (H)</option>
                                <option value="Indigo (O)">Indigo (O)</option>
                                <option value="Kesulitan Belajar (K)">Kesulitan Belajar (K)</option>
                                <option value="Narkoba (N)">Narkoba (N)</option>
                                <option value="Tuna Daksa Ringan (D)">Tuna Daksa Ringan (D)</option>
                                <option value="Tuna Daksa Sedang (D1)">Tuna Daksa Sedang (D1)</option>
                                <option value="Tuna Ganda">Tuna Ganda</option>
                                <option value="Tuna Grahita Ringan (C)">Tuna Grahita Ringan (C)</option>
                                <option value="Tuna Grahita Sedang (C1)">Tuna Grahita Sedang (C1)</option>
                                <option value="Tuna Laras (E)">Tuna Laras (E)</option>
                                <option value="Tuna Netra (A)">Tuna Netra (A)</option>
                                <option value="Tuna Rungu (B)">Tuna Rungu (B)</option>
                                <option value="Tuna Wicara (F)">Tuna Wicara (F)</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="address" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Alamat Lengkap<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <textarea
                                id="address"
                                className='w-full lg:w-4/6 h-28 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1'
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="rt" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                RT<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="rt"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={rt}
                                onChange={e => setRt(e.target.value)}
                                placeholder='Rukun Tetangga'
                                required
                            />
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="rw" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                RW<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="rw"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={rw}
                                onChange={e => setRw(e.target.value)}
                                placeholder='Rukun Warga'
                                required
                            />
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="village" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kelurahan/Desa<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="village"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={village}
                                onChange={e => setVillage(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="district" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kecamatan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="district"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={district}
                                onChange={e => setDistrict(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="city" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kota/Kabupaten<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="province" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Provinsi<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="province"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={province}
                                onChange={e => setProvince(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="postalCode" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kode Pos<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="postalCode"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={postalCode}
                                onChange={e => setPostalCode(e.target.value)}
                                required
                            />
                        </div>

                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="residence" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Tempat Tinggal<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="residence"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={residence}
                                onChange={e => setResidence(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Asrama">Asrama</option>
                                <option value="Bersama Orang Tua">Bersama Orang Tua</option>
                                <option value="Panti Asuhan">Panti Asuhan</option>
                                <option value="Pesantren">Pesantren</option>
                                <option value="Wali">Wali</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="transport" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Moda Transportasi<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="transport"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={transport}
                                onChange={e => setTransport(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Jalan Kaki">Jalan Kaki</option>
                                <option value="Jemputan Sekolah">Jemputan Sekolah</option>
                                <option value="Kendaraaan Pribadi">Kendaraaan Pribadi</option>
                                <option value="Kendaraan Umum / Angkot">Kendaraan Umum / Angkot</option>
                                <option value="Kereta Api">Kereta Api</option>
                                <option value="Mobil">Mobil</option>
                                <option value="Ojek">Ojek</option>
                                <option value="Sepeda Motor">Sepeda Motor</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="fatherWa" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nomor HP/WA Ayah<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="fatherWa"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={fatherWa}
                                    onChange={e => setFatherWa(e.target.value)}
                                    placeholder='Contoh: 0812-9884-5227'
                                    required
                                />
                                <p className="text-sm text-gray-600 mt-1">
                                    Diisi nomor telepon selular yang terdaftar WhatsApp (milik ayah)
                                </p>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="motherWa" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nomor HP/WA Ibu<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="motherWa"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={motherWa}
                                    onChange={e => setMotherWa(e.target.value)}
                                    placeholder='Contoh: 0812-9884-5228'
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Diisi nomor telepon selular yang terdaftar WhatsApp (milik ibu)
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="email" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                E-mail Pribadi<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Diisi alamat surat elektronik (surel) peserta didik yang dapat dihubungi (milik pribadi, orang tua, atau wali)
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="kip" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                No. Kartu KIP (jika ada)
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="kip"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={kip}
                                    onChange={e => setKip(e.target.value)}
                                    placeholder='Diisi jika ada'
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Nomor Kartu Indonesia Pintar (jika ada)
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="pkh" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                No. Kartu PKH (jika ada)
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="pkh"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={pkh}
                                    onChange={e => setPkh(e.target.value)}
                                    placeholder='Diisi jika ada'
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Nomor Kartu PKH (jika ada)
                                </h2>
                            </div>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="citizenship" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kewarganegaraan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="citizenship"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={citizenship}
                                onChange={e => setCitizenship(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Warga Negara Indonesia (WNI)">Warga Negara Indonesia (WNI)</option>
                                <option value="Warga Negara Asing (WNA)">Warga Negara Asing (WNA)</option>
                            </select>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="country" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nama Negara
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                                placeholder='Diisi jika warga negara asing'
                            />
                        </div>
                        <div className="col-span-2 lg:flex">
                            <div for="name" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">Foto<span className='text-red-600 ml-0.5'>*</span></div>
                            <div className="lg:w-4/6 flex items-center justify-center w-full">
                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                    {preview ? (
                                        <div className='relative'>
                                            <button type="button" onClick={deletePreview} className="absolute right-0 z-20 bg-transparent bg-gray-50 text-gray-700 hover:bg-opacity-90 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all duration-200" data-modal-toggle="crud-modal">
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                            <figure className='flex items-center'>
                                                <img src={preview} loading='lazy' alt="foto siswa" className='object-contain w-full h-56 opacity-95 rounded-sm' />
                                            </figure>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <div className='text-center'>
                                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Klik untuk mengupload</span> atau tarik dan letakkan</p>
                                                    <p className="text-xs text-gray-500">Hanya PNG, JPEG, dan JPG (MAX. 800x400px)</p>
                                                </div>
                                            </div>
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                className="hidden"
                                                onChange={loadImage}
                                                accept=".jpg,.jpeg,.png"
                                            />
                                        </div>
                                    )}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold text-text-color'>
                            Data Ayah Kandung
                        </h1>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="fatherName" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nama Ayah Kandung<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="fatherName"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={fatherName}
                                    onChange={e => setFatherName(e.target.value)}
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Nama ayah kandung peserta didik sesuai dokumen resmi yang berlaku.
                                    Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan H.)
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="fatherBirthDate" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Tahun Lahir<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="fatherBirthDate"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={fatherBirthDate}
                                    onChange={e => setFatherBirthDate(e.target.value)}
                                    placeholder='Contoh: 1985'
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Tahun Lahir Ayah Kandung. contoh : 1985
                                </h2>
                            </div>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="fatherEducation" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Pendidikan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="fatherEducation"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={fatherEducation}
                                onChange={e => setFatherEducation(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="PAUD">PAUD</option>
                                <option value="TK / Sederajat">Tk / Sederajat</option>
                                <option value="SD / Sederajat">SD / Sederajat</option>
                                <option value="SMP / Sederajat">SMP / Sederajat</option>
                                <option value="SMA / Sederajat">SMA / Sederajat</option>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="D3">D3</option>
                                <option value="D4">D4</option>
                                <option value="S1">S1</option>
                                <option value="S2">S2</option>
                                <option value="S2 Terapan">S2 Terapan</option>
                                <option value="S3">S3</option>
                                <option value="S3 Terapan">S3 Terapan</option>
                                <option value="Informal">Informal</option>
                                <option value="Non Formal">Non Formal</option>
                                <option value="Paket A">Paket A</option>
                                <option value="Paket B">Paket B</option>
                                <option value="Paket C">Paket C</option>
                                <option value="Profesi">Profesi</option>
                                <option value="Putus SD">Putus SD</option>
                                <option value="Sp-1">Sp-1</option>
                                <option value="Sp-2">Sp-2</option>
                                <option value="Tidak_Sekolah">Tidak Sekolah</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="fatherJob" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Pekerjaan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="fatherJob"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={fatherJob}
                                onChange={e => setFatherJob(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Buruh">Buruh</option>
                                <option value="Driver Ojek Online">Driver Ojek Online</option>
                                <option value="Guru">Guru</option>
                                <option value="Ibu Rumah Tangga">Ibu Rumah Tangga</option>
                                <option value="Karyawan Swasta">Karyawan Swasta</option>
                                <option value="Nelayan">Nelayan</option>
                                <option value="Pedagang Besar">Pedagang Besar</option>
                                <option value="Pedagang Kecil">Pedagang Kecil</option>
                                <option value="Pensiunan">Pensiunan</option>
                                <option value="Petani">Petani</option>
                                <option value="Peternak">Peternak</option>
                                <option value="PNS">PNS</option>
                                <option value="POLRI">POLRI</option>
                                <option value="TNI">TNI</option>
                                <option value="Wiraswasta">Wiraswasta</option>
                                <option value="Wirausaha">Wirausaha</option>
                                <option value="Sudah Meninggal">Sudah Meninggal</option>
                                <option value="Tidak Bekerja">Tidak Bekerja</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="fatherSalary" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Penghasilan Bulanan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="fatherSalary"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={fatherSalary}
                                onChange={e => setFatherSalary(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Kurang dari Rp. 500,000">Kurang dari Rp. 500,000</option>
                                <option value="Rp. 500,000 - Rp. 999,999">Rp. 500,000 - Rp. 999,999</option>
                                <option value="Rp. 1,000,000 - Rp. 1,999,999">Rp. 1,000,000 - Rp. 1,999,999</option>
                                <option value="Rp. 2,000,000 - Rp. 4,999,999">Rp. 2,000,000 - Rp. 4,999,999</option>
                                <option value="Rp. 5,000,000 - Rp. 20,000,000">Rp. 5,000,000 - Rp. 20,000,000</option>
                                <option value="Lebih dari Rp. 20,000,000">Lebih dari Rp. 20,000,000</option>
                                <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="fatherSpecialNeed" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kebutuhan Khusus<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="fatherSpecialNeed"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={fatherSpecialNeed}
                                onChange={e => setFatherSpecialNeed(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Tidak Ada">Tidak Ada</option>
                                <option value="Autis (Q)">Autis (Q)</option>
                                <option value="Bakat Istimewa (J)">Bakat Istimewa (J)</option>
                                <option value="Cerdas Istimewa (I)">Cerdas Istimewa (I)</option>
                                <option value="Down Syndrome (P)">Down Syndrome (P)</option>
                                <option value="Hyperaktif  (H)">Hyperaktif (H)</option>
                                <option value="Indigo (O)">Indigo (O)</option>
                                <option value="Kesulitan Belajar (K)">Kesulitan Belajar (K)</option>
                                <option value="Narkoba (N)">Narkoba (N)</option>
                                <option value="Tuna Daksa Ringan (D)">Tuna Daksa Ringan (D)</option>
                                <option value="Tuna Daksa Sedang (D1)">Tuna Daksa Sedang (D1)</option>
                                <option value="Tuna Ganda">Tuna Ganda</option>
                                <option value="Tuna Grahita Ringan (C)">Tuna Grahita Ringan (C)</option>
                                <option value="Tuna Grahita Sedang (C1)">Tuna Grahita Sedang (C1)</option>
                                <option value="Tuna Laras (E)">Tuna Laras (E)</option>
                                <option value="Tuna Netra (A)">Tuna Netra (A)</option>
                                <option value="Tuna Rungu (B)">Tuna Rungu (B)</option>
                                <option value="Tuna Wicara (F)">Tuna Wicara (F)</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold text-text-color'>
                            Data Ibu Kandung
                        </h1>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="motherName" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Nama Ibu Kandung<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="motherName"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={motherName}
                                    onChange={e => setMotherName(e.target.value)}
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Nama ibu kandung peserta didik sesuai dokumen resmi yang berlaku.
                                    Hindari penggunaan gelar akademik atau sosial (seperti Alm., Dr., Drs., S.Pd, dan Hj.)
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="motherBirthDate" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Tahun Lahir<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="text"
                                    id="motherBirthDate"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={motherBirthDate}
                                    onChange={e => setMotherBirthDate(e.target.value)}
                                    placeholder='Contoh: 1985'
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Tahun Lahir Ibu Kandung. contoh : 1985
                                </h2>
                            </div>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="motherEducation" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Pendidikan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="motherEducation"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={motherEducation}
                                onChange={e => setMotherEducation(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="PAUD">PAUD</option>
                                <option value="TK / Sederajat">Tk / Sederajat</option>
                                <option value="SD / Sederajat">SD / Sederajat</option>
                                <option value="SMP / Sederajat">SMP / Sederajat</option>
                                <option value="SMA / Sederajat">SMA / Sederajat</option>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="D3">D3</option>
                                <option value="D4">D4</option>
                                <option value="S1">S1</option>
                                <option value="S2">S2</option>
                                <option value="S2 Terapan">S2 Terapan</option>
                                <option value="S3">S3</option>
                                <option value="S3 Terapan">S3 Terapan</option>
                                <option value="Informal">Informal</option>
                                <option value="Non Formal">Non Formal</option>
                                <option value="Paket A">Paket A</option>
                                <option value="Paket B">Paket B</option>
                                <option value="Paket C">Paket C</option>
                                <option value="Profesi">Profesi</option>
                                <option value="Putus SD">Putus SD</option>
                                <option value="Sp-1">Sp-1</option>
                                <option value="Sp-2">Sp-2</option>
                                <option value="Tidak Sekolah">Tidak Sekolah</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="motherJob" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Pekerjaan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="motherJob"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={motherJob}
                                onChange={e => setMotherJob(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Buruh">Buruh</option>
                                <option value="Driver Ojek Online">Driver Ojek Online</option>
                                <option value="Guru">Guru</option>
                                <option value="Ibu Rumah Tangga">Ibu Rumah Tangga</option>
                                <option value="Karyawan Swasta">Karyawan Swasta</option>
                                <option value="Nelayan">Nelayan</option>
                                <option value="Pedagang Besar">Pedagang Besar</option>
                                <option value="Pedagang Kecil">Pedagang Kecil</option>
                                <option value="Pensiunan">Pensiunan</option>
                                <option value="Petani">Petani</option>
                                <option value="Peternak">Peternak</option>
                                <option value="PNS">PNS</option>
                                <option value="POLRI">POLRI</option>
                                <option value="TNI">TNI</option>
                                <option value="Wiraswasta">Wiraswasta</option>
                                <option value="Wirausaha">Wirausaha</option>
                                <option value="Sudah Meninggal">Sudah Meninggal</option>
                                <option value="Tidak Bekerja">Tidak Bekerja</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="motherSalary" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Penghasilan Bulanan<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="motherSalary"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={motherSalary}
                                onChange={e => setMotherSalary(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Kurang dari Rp. 500,000">Kurang dari Rp. 500,000</option>
                                <option value="Rp. 500,000 - Rp. 999,999">Rp. 500,000 - Rp. 999,999</option>
                                <option value="Rp. 1,000,000 - Rp. 1,999,999">Rp. 1,000,000 - Rp. 1,999,999</option>
                                <option value="Rp. 2,000,000 - Rp. 4,999,999">Rp. 2,000,000 - Rp. 4,999,999</option>
                                <option value="Rp. 5,000,000 - Rp. 20,000,000">Rp. 5,000,000 - Rp. 20,000,000</option>
                                <option value="Lebih dari Rp. 20,000,000">Lebih dari Rp. 20,000,000</option>
                                <option value="Tidak Berpenghasilan">Tidak Berpenghasilan</option>
                            </select>
                        </div>
                        <div className='w-full mb-4 lg:flex'>
                            <label htmlFor="motherSpecialNeed" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Kebutuhan Khusus<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <select
                                id="motherSpecialNeed"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={motherSpecialNeed}
                                onChange={e => setMotherSpecialNeed(e.target.value)}
                                required
                            >
                                <option value="">Pilih :</option>
                                <option value="Tidak Ada">Tidak Ada</option>
                                <option value="Autis (Q)">Autis (Q)</option>
                                <option value="Bakat Istimewa (J)">Bakat Istimewa (J)</option>
                                <option value="Cerdas Istimewa (I)">Cerdas Istimewa (I)</option>
                                <option value="Down Syndrome (P)">Down Syndrome (P)</option>
                                <option value="Hyperaktif (H)">Hyperaktif (H)</option>
                                <option value="Indigo (O)">Indigo (O)</option>
                                <option value="Kesulitan Belajar (K)">Kesulitan Belajar (K)</option>
                                <option value="Narkoba (N)">Narkoba (N)</option>
                                <option value="Tuna Daksa Ringan (D)">Tuna Daksa Ringan (D)</option>
                                <option value="Tuna Daksa Sedang (D1)">Tuna Daksa Sedang (D1)</option>
                                <option value="Tuna Ganda">Tuna Ganda</option>
                                <option value="Tuna Grahita Ringan (C)">Tuna Grahita Ringan (C)</option>
                                <option value="Tuna Grahita Sedang (C1)">Tuna Grahita Sedang (C1)</option>
                                <option value="Tuna Laras (E)">Tuna Laras (E)</option>
                                <option value="Tuna Netra (A)">Tuna Netra (A)</option>
                                <option value="Tuna Rungu (B)">Tuna Rungu (B)</option>
                                <option value="Tuna Wicara (F)">Tuna Wicara (F)</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold text-text-color'>
                            Data Periodik
                        </h1>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="height" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Tinggi Badan (Cm)<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="number"
                                    id="height"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={height}
                                    onChange={e => setHeight(e.target.value)}
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Tinggi badan peserta didik dalam satuan sentimeter
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="weight" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Berat Badan (Kg)<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <div className='lg:w-4/6'>
                                <input
                                    type="number"
                                    id="weight"
                                    className="w-full border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                    required
                                />
                                <h2 className='text-sm text-gray-600 mt-1'>
                                    Berat badan peserta didik dalam satuan kilogram
                                </h2>
                            </div>
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="distance" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Jarak Tempat Tinggal ke Sekolah (Km)<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="text"
                                id="distance"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={distance}
                                onChange={e => setDistance(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="time" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Waktu Tempuh ke Sekolah (Menit)<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="number"
                                id="time"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={time}
                                onChange={e => setTime(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full mb-4 lg:flex">
                            <label htmlFor="numberSibling" className="lg:w-2/6 mt-3 text-base text-slate-700 opacity-95">
                                Jumlah Saudara Kandung<span className='text-red-600 ml-0.5'>*</span>
                            </label>
                            <input
                                type="number"
                                id="numberSibling"
                                className="w-full lg:w-4/6 border-2 text-dark p-3 rounded-md focus:outline-none focus:ring-slate-300 focus:ring-1"
                                value={numberSibling}
                                onChange={e => setNumberSibling(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className='flex md:justify-end'>
                            {loading ?
                                <button disabled type='submit' className="my-5 w-full md:w-48 py-3 rounded-md bg-primary text-white">
                                    <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    Loading...
                                </button> :
                                <button type='submit' className="my-5 w-full flex items-center gap-1.5 justify-center md:w-48 py-3 rounded-md bg-primary hover:bg-opacity-90 text-white">
                                    Update Registrant
                                    <MdArrowForwardIos />
                                </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </Dashboard>
    )
}

export default EditRegistrant