
import React, { useState } from 'react';
import { Users, Calendar, FileText, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Meetings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const meetings = [
    {
      id: 1,
      title: "Annual General Meeting 2024",
      date: "2024-03-15",
      type: "AGM",
      status: "Upcoming",
      description: "Annual review and budget approval meeting for 2024-25",
      attendees: 45,
      decisions: 8
    },
    {
      id: 2,
      title: "Emergency Board Meeting - Security",
      date: "2024-02-28",
      type: "Board",
      status: "Completed",
      description: "Discussion on enhanced security measures and CCTV installation",
      attendees: 12,
      decisions: 3
    },
    {
      id: 3,
      title: "Special General Meeting - Parking",
      date: "2024-02-15",
      type: "SGM",
      status: "Completed",
      description: "Resolution for parking allocation and visitor parking rules",
      attendees: 38,
      decisions: 5
    },
    {
      id: 4,
      title: "Monthly Board Meeting",
      date: "2024-01-30",
      type: "Board",
      status: "Completed",
      description: "Regular monthly review and maintenance discussions",
      attendees: 10,
      decisions: 6
    },
    {
      id: 5,
      title: "Budget Planning Meeting",
      date: "2024-01-15",
      type: "Board",
      status: "Completed",
      description: "Annual budget preparation and financial planning",
      attendees: 8,
      decisions: 4
    }
  ];

  const categories = ['All', 'AGM', 'SGM', 'Board'];

  const filteredMeetings = meetings.filter(meeting => {
    const matchesSearch = meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         meeting.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || meeting.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    return status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      AGM: 'bg-purple-100 text-purple-800',
      SGM: 'bg-orange-100 text-orange-800',
      Board: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Meeting Minutes</h1>
          <p className="text-gray-600">Archive of all society meetings and board resolutions</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search meetings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Meetings Grid */}
        <div className="grid gap-6">
          {filteredMeetings.map((meeting) => (
            <Card key={meeting.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-lg">{meeting.title}</CardTitle>
                      <Badge className={getStatusColor(meeting.status)}>
                        {meeting.status}
                      </Badge>
                      <Badge className={getTypeColor(meeting.type)}>
                        {meeting.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(meeting.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{meeting.attendees} attendees</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{meeting.decisions} decisions</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    <FileText className="w-4 h-4 mr-2" />
                    View Minutes
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{meeting.description}</p>
                {meeting.status === 'Upcoming' && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 text-sm font-medium">
                      Agenda will be shared 3 days before the meeting
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMeetings.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No meetings found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Meeting Statistics */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">Overall participation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Resolutions Passed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">Total decisions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
