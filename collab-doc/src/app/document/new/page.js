"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [documents, setDocuments] = useState([]);

  // Check if user exists
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
      setUser(JSON.parse(storedUser));

      // Mock existing documents (can be fetched from backend later)
      const mockDocs = [
        { id: "doc1", title: "Project Plan" },
        { id: "doc2", title: "Meeting Notes" },
      ];
      setDocuments(mockDocs);
    
  }, [router]);

  // Create new document
  const handleNewDocument = () => {
    const newDocId = `doc-${Date.now()}`; // simple unique id
    router.push(`/document/${newDocId}`);
  };

  return (
    <main className="flex flex-col items-center p-8 bg-secondary min-h-[calc(100vh-120px)]">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Welcome, {user?.name}
      </h1>

      <button
        onClick={handleNewDocument}
        className="px-6 py-3 bg-primary text-black rounded shadow hover:bg-blue-700 mb-8"
      >
        + Create New Document
      </button>

      <div className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Documents</h2>
        {documents.length === 0 ? (
          <p className="text-gray-500">You have no documents yet.</p>
        ) : (
          <ul className="space-y-3">
            {documents.map((doc) => (
              <li
                key={doc.id}
                onClick={() => router.push(`/document/${doc.id}`)}
                className="cursor-pointer p-4 bg-white rounded shadow hover:bg-gray-50 flex justify-between items-center"
              >
                <span>{doc.title}</span>
                <span className="text-gray-400 text-sm">ID: {doc.id}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
