"use client";
import Link from "next/link";

interface Person {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function PeoplePage() {
  // Example data
  const people: Person[] = [
    { id: 1, name: "Pranav Gupta", email: "Pranav@example.com", role: "Student" },
    { id: 2, name: "John Doe", email: "John@example.com", role: "Instructor" },
    { id: 3, name: "John Doe", email: "John@example.com", role: "Student" },
    { id: 4, name: "Dana White", email: "dana@example.com", role: "TA" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">People</h2>
        <Link href="/Courses/1234/Assignments">
          <span className="text-blue-600 hover:underline cursor-pointer">Back to Assignments</span>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border-b">ID</th>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">Email</th>
              <th className="px-4 py-2 text-left border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{person.id}</td>
                <td className="px-4 py-2 border-b">{person.name}</td>
                <td className="px-4 py-2 border-b">{person.email}</td>
                <td className="px-4 py-2 border-b">{person.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Person Button */}
      <div className="mt-4 flex justify-end">
        <Link href="/Courses/1234/People/Add">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            + Add Person
          </button>
        </Link>
      </div>
    </div>
  );
}
