import React from 'react';

interface Report {
  name: string;
  timestamp: string;
}

const RecentReports: React.FC = () => {

  const reports: Report[] = [
    { name: "APP_URL_Usage_(Exclude_Half_Days)_3.6.2021_3.31.2021_Download.csv", timestamp: "22.07.2021 06:02 PM" },
    { name: "APP_URL_L1_01.01.2021_31.03.2021.csv", timestamp: "22.07.2021 17:00 PM" },
    { name: "URL_L2_(Exclude_NonWorking_Days)_4.1.2021_4.1.2021.csv", timestamp: "19.07.2021 15:00 PM" }
  ];

  // Pagination data
  const currentPage: number = 1;
  const totalPages: number = 5;
  const rowsPerPage: number = 10;

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Recently Generated Reports</h1>
      <ul>
        <li className="border-b py-2 flex justify-between items-center">
          <span className="w-1/4 text-center">Date</span>
          <span className="w-1/2 text-center">Report Name</span>
          <span className="w-1/4 text-center">Download</span>
        </li>
        {reports.map((report: Report, index: number) => (
          <li key={index} className="border-b py-2 flex justify-between items-center">
            <span className="w-1/4 text-center">{report.timestamp}</span>
            <span className="w-1/2 text-center">{report.name}</span>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">Download</button>
          </li>
        ))}
      </ul>
      <footer className="fixed bottom-0 w-full bg-white p-4">
        <div className="flex justify-between items-center">
          <button disabled={currentPage === 1} className="bg-gray-200 px-2 py-1 rounded">Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} className="bg-gray-200 px-2 py-1 rounded">Next</button>
          <select className="px-2 py-1 rounded">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <span>Rows per page</span>
        </div>
      </footer>
         
    </div>
  );
};

export default RecentReports;
