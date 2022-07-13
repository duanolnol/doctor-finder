import React, { useState } from "react";
import parse from "html-react-parser";
import { MultiSelect } from "react-multi-select-component";
import { Option } from "./App.type";
import Checkbox from "./components/Checkbox";
import { CheckboxValue } from "./components/CheckboxValue";

const hospitals = [
  { label: "Mitra Keluarga Bintaro", value: "60c9d8289b299d0012f4ee28" },
  { label: "Mitra Keluarga Gading Serpong", value: "60dcf905debf19001219a3cb" },
];

const specialization = [
  { label: "Dokter Umum", value: "607d0aaa9be06e0012f2094b" },
  { label: "Anak", value: "607d01ca3925ca001231fae3" },
  { label: "Penyakit Dalam", value: "607d074c3925ca001231fafe" },
  { label: "Kebidanan & Kandungan", value: "607d06b63925ca001231faf9" },
  { label: "Bedah", value: "607d03fd3925ca001231faeb" },
  { label: "Jantung & Pem.Darah", value: "607d05dd3925ca001231faf5" },
  { label: "Kulit & Kelamin", value: "608f6c099223090012ef276a" },
];

function App() {
  const [selectedHospital, SetSelectedHospital] = useState<Array<Option>>([]);
  const [selectedSpecialization, SetSelectedSpecialization] = useState<
    Array<Option>
  >([]);
  const showAbout = (text: string) => {
    const removenbsp = text.replace(/&nbsp;/g, " ");
    const parseInlineStyle = parse(removenbsp);
    return parseInlineStyle;
  };

  const onChangeHospital = (selectedHospital: Array<Option>) => {
    SetSelectedHospital(selectedHospital);
  };
  const onChangeSpecialization = (selectedSpecialization: Array<Option>) => {
    SetSelectedSpecialization(selectedSpecialization);
  };
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="w-full border border-gray-500 px-4 pt-3 pb-5 mt-6 mb-10">
          <div className="text-xl font-bold mb-3">Doctor Finder</div>
          <div className="w-1/2 flex justify-between">
            <input
              placeholder="Keyword"
              className="w-50 h-10 border border-gray-500 p-2"
            />
            <MultiSelect
              ItemRenderer={Checkbox}
              valueRenderer={CheckboxValue}
              options={hospitals}
              value={selectedHospital}
              onChange={onChangeHospital}
              labelledBy="Hospital"
              hasSelectAll={false}
              disableSearch
              overrideStrings={{
                selectSomeItems: "Hospital",
              }}
            />
            <MultiSelect
              ItemRenderer={Checkbox}
              valueRenderer={CheckboxValue}
              options={specialization}
              value={selectedSpecialization}
              onChange={onChangeSpecialization}
              labelledBy="Specialization"
              hasSelectAll={false}
              disableSearch
              overrideStrings={{
                selectSomeItems: "Specialization",
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-gray-500 p-5">
            <div className="flex">
              <img
                src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/thumbnail_dr_Leony_Nerry_Sabatini_Tambunan_670ab042e6.png"
                alt="doctor"
              />
              <div className="ml-6">
                <div className="text-lg text-gray-700 font-medium mb-0.5">
                  dr. Leony Nerry Sabatini Tambunan
                </div>
                <div className="text-base text-gray-500 font-normal mb-1">
                  Mitra Keluarga Bintaro - Dokter Umum
                </div>
                <div className="text-sm font-normal text-left mb-3">
                  {showAbout(
                    '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;dr. Leony Nerry Sabatini Tambunan adalah&nbsp;Dokter&nbsp;Umum&nbsp;yang&nbsp;telah&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Pelita Harapan. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit umum.&nbsp;</span></p>'
                  )}
                </div>
                <div className="text-xl text-gray-700 font-medium text-right">
                  Rp 50.000
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-500 p-5">
            <div className="flex">
              <img
                src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/thumbnail_dr_Benita_Sp_A_58b02c90dd.png"
                alt="doctor"
              />
              <div className="ml-6">
                <div className="text-lg font-medium mb-0.5">
                  dr. Benita Deselina,Sp.A
                </div>
                <div className="text-base text-gray-500 font-normal mb-1">
                  Mitra Keluarga Bintaro - Anak
                </div>
                <div className="text-sm font-normal text-left mb-3">
                  {showAbout(
                    '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;dr. Leony Nerry Sabatini Tambunan adalah&nbsp;Dokter&nbsp;Umum&nbsp;yang&nbsp;telah&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Pelita Harapan. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit umum.&nbsp;</span></p>'
                  )}
                </div>
                <div className="text-xl text-gray-700 font-medium text-right">
                  Rp 200.000
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-500 p-5">
            <div className="flex">
              <img
                src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/thumbnail_MK_KG_656b684faf_38207250c3.jpg"
                alt="doctor"
              />
              <div className="ml-6">
                <div className="text-lg font-medium mb-0.5">
                  dr. Melisa Lilisari,Sp.A
                </div>
                <div className="text-base text-gray-500 font-normal mb-1">
                  Mitra Keluarga Bintaro - Anak
                </div>
                <div className="text-sm font-normal text-left mb-3">
                  {showAbout(
                    '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;dr. Melisa Lilisari,Sp.A adalah&nbsp;Dokter&nbsp;Spesialis Anak&nbsp;yang&nbsp;</span><span style="color:rgb(0,0,0);">telah</span><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Padjajaran. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit pada anak.&nbsp;</span></p>'
                  )}
                </div>
                <div className="text-xl text-gray-700 font-medium text-right">
                  Rp 200.000
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-500 p-5">
            <div className="flex">
              <img
                src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/thumbnail_dr_Astrid_sp_PD_7733008580.png"
                alt="doctor"
              />
              <div className="ml-6">
                <div className="text-lg font-medium mb-0.5">
                  dr. Astrid Budiman, Sp.P
                </div>
                <div className="text-base text-gray-500 font-normal mb-1">
                  Mitra Keluarga Bintaro - Penyakit Dalam
                </div>
                <div className="text-sm font-normal text-left mb-3">
                  {showAbout(
                    '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;dr. Astrid Budiman,Sp.PD adalah&nbsp;Dokter&nbsp;Spesialis Penyakit Dalam&nbsp;yang&nbsp;telah&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Jose R. Reyes Medical Center Manila, Filipina. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit dalam.&nbsp;</span></p>'
                  )}
                </div>
                <div className="text-xl text-gray-700 font-medium text-right">
                  Rp 200.000
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-500 p-5">
            <div className="flex">
              <img
                src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/thumbnail_dr_Okki_Ramadian_Sp_PD_69240b791b.png"
                alt="doctor"
              />
              <div className="ml-6">
                <div className="text-lg font-medium mb-0.5">
                  dr. Okki Ramadian,Sp.PD
                </div>
                <div className="text-base text-gray-500 font-normal mb-1">
                  Mitra Keluarga Bintaro - Penyakit Dalam
                </div>
                <div className="text-sm font-normal text-left mb-3">
                  {showAbout(
                    '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;dr. Okki Ramadian,Sp.PD adalah&nbsp;Dokter&nbsp;Spesialis Penyakit Dalam&nbsp;yang&nbsp;</span><span style="color:rgb(0,0,0);">telah</span><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Indonesia. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit dalam.&nbsp;</span></p>'
                  )}
                </div>
                <div className="text-xl text-gray-700 font-medium text-right">
                  Rp 200.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
