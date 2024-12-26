import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { aircraftData, Aircraft } from '../data/aircraft'
import { Button } from "../components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"

const AircraftDetail = () => {
  const { id } = useParams()
  const aircraft = aircraftData.find((a: Aircraft) => a.id === id)

  if (!aircraft) {
    return <div className="p-6">Aircraft not found</div>
  }

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{aircraft.registration}</h1>
          <p className="text-gray-500 mt-1">{aircraft.type} - {aircraft.model}</p>
        </div>
        <Link 
          to="/aircraft"
          className="text-sm text-gray-600 hover:text-blue-600"
        >
          ← Back to Aircraft
        </Link>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border">
        {/* Top Section with Photo and Key Details */}
        <div className="p-6 border-b">
          <div className="grid grid-cols-3 gap-8">
            {/* Photo Section */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg h-64 w-full flex items-center justify-center overflow-hidden">
                {aircraft.photoUrl ? (
                  <img 
                    src={aircraft.photoUrl} 
                    alt={`${aircraft.registration} aircraft`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Aircraft Photo</span>
                )}
              </div>
              <Button variant="outline" className="w-full">
                Upload Photo
              </Button>
            </div>

            {/* Key Details */}
            <div className="col-span-2 grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <p>
                    <span className={`inline-flex mt-1 px-3 py-1 rounded-full text-sm font-medium ${
                      aircraft.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {aircraft.status}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Engine Hours</label>
                  <p className="mt-1 text-gray-900">{aircraft.engineHours} hours</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Year</label>
                  <p className="mt-1 text-gray-900">{aircraft.year}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Last Maintenance</label>
                  <p className="mt-1 text-gray-900">{aircraft.lastMaintenance}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Next Service Due</label>
                  <p className="mt-1 text-gray-900">{aircraft.nextServiceDue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="p-6">
          <Tabs defaultValue="equipment" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="defects">Defects</TabsTrigger>
              <TabsTrigger value="rates">Charge Rates</TabsTrigger>
              <TabsTrigger value="techlog">Tech Log</TabsTrigger>
              <TabsTrigger value="hours">Hours Remaining</TabsTrigger>
            </TabsList>
            <TabsContent value="equipment" className="p-4">
              <div className="text-gray-500">Equipment information will be displayed here</div>
            </TabsContent>
            <TabsContent value="defects" className="p-4">
              <div className="text-gray-500">Defects information will be displayed here</div>
            </TabsContent>
            <TabsContent value="rates" className="p-4">
              <div className="text-gray-500">Charge rates information will be displayed here</div>
            </TabsContent>
            <TabsContent value="techlog" className="p-4">
              <div className="text-gray-500">Tech log information will be displayed here</div>
            </TabsContent>
            <TabsContent value="hours" className="p-4">
              <div className="text-gray-500">Hours remaining information will be displayed here</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default AircraftDetail 