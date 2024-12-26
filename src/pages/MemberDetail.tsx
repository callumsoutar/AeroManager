import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { members } from '../data/members'

const MemberDetail = () => {
  const { id } = useParams()
  const member = members.find(m => m.id === id)

  if (!member) {
    return <div className="p-6">Member not found</div>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Member Details</h1>
        <Link 
          to="/members"
          className="text-sm text-gray-600 hover:text-blue-600"
        >
          ← Back to Members
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">{member.name}</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p>{member.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Status</label>
                <p>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {member.status}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Join Date</label>
                <p>{member.joinDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">License Type</label>
                <p>{member.licenseType}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Last Flight</label>
                <p>{member.lastFlight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberDetail 