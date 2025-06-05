import React from "react";
import { FileText, Eye } from "lucide-react";

export default function LegalDocuments() {
  const documents = [
    { name: "Approval Letter", file: "/docs/Approval_Letter.pdf" },
    { name: "Audit Report 2023–24", file: "/docs/AUDIT_2023-24.pdf" },
    { name: "Audit Report 2022–23", file: "/docs/AUDIT_2022-2023.pdf" },
    { name: "ITR 2022–23", file: "/docs/ITR_2022-23.pdf" },
    { name: "Balance Sheet 2022–23", file: "/docs/Balance-sheet-2022-23.pdf" },
    { name: "Balance Sheet 2023–24", file: "/docs/Balance-SHEET-2023-24.pdf" },
    { name: "12A Certificate", file: "/docs/AAYTS0553NF20221.pdf" },
    { name: "80G Certificate", file: "/docs/AAYTS0553NE20221.pdf" },
    { name: "NGO Darpan", file: "/docs/NGO_Darpan.pdf" },
    { name: "Letterhead", file: "/docs/Letter_Head_Trust.pdf" },
    { name: "Udyam Certificate", file: "/docs/Udyam_Registration.pdf" },
    { name: "Donation Receipt Format", file: "/docs/SWAMIJI_TRUST_RECEIPT.pdf" }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-2">
        Legal Documentation & Compliance
      </h2>
      
        <p className="text-lg  mb-6">
          Swamiji Trust maintains complete legal and financial transparency through comprehensive documentation that validates our compliance with the Indian Trusts Act, Income Tax Act, FCRA guidelines, and Udyam MSME registration requirements. Our publicly accessible records include government-issued trust registration certificates, annual audit reports by certified chartered accountants, income tax returns with 12A and 80G exemption status, FCRA compliance documentation for transparent foreign contribution handling, and complete financial statements that demonstrate ethical fund utilization. This extensive documentation framework ensures accountability to our donors, partners, beneficiaries, and regulatory bodies while building trust through verified credentials, seamless legal compliance, and transparent operations. All mandatory documents including tax exemption certificates, audit reports, registration proofs, government approvals, and FCRA annual returns are available for public review, reinforcing our commitment to serving society with integrity, purpose, and complete transparency in charitable trust operations, NGO documentation standards, and donor accountability measures.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-orange-50 p-4 rounded-lg shadow flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-orange-500" />
                <span className="text-gray-800 font-medium">{doc.name}</span>
              </div>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 hover:underline flex items-center gap-1"
              >
                <Eye className="w-4 h-4" /> View
              </a>
            </div>
          ))}
        </div>
      
    </section>
  );
}
