
import React from 'react';
import { FileText, Download, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: "Annual General Meeting - 2024",
      date: "2024-03-10",
      category: "Meeting",
      type: "PDF",
      urgent: true,
      description: "Notice for the Annual General Meeting scheduled for March 15th, 2024. All residents are requested to attend."
    },
    {
      id: 2,
      title: "Water Supply Maintenance",
      date: "2024-03-08",
      category: "Maintenance",
      type: "Text",
      urgent: false,
      description: "Water supply will be interrupted on Sunday for routine maintenance work."
    },
    {
      id: 3,
      title: "Security Protocol Updates",
      date: "2024-03-05",
      category: "Security",
      type: "PDF",
      urgent: false,
      description: "New security measures and visitor protocols effective immediately."
    },
    {
      id: 4,
      title: "Maintenance Fee Schedule Q1 2024",
      date: "2024-03-01",
      category: "Finance",
      type: "PDF",
      urgent: true,
      description: "Quarterly maintenance fees and payment schedule for Q1 2024."
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Meeting: "bg-blue-100 text-blue-800",
      Maintenance: "bg-yellow-100 text-yellow-800",
      Security: "bg-red-100 text-red-800",
      Finance: "bg-green-100 text-green-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Notices & Circulars</h1>
          <p className="text-gray-600">Stay updated with the latest announcements and official communications</p>
        </div>

        <div className="grid gap-6">
          {notices.map((notice) => (
            <Card key={notice.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-lg">{notice.title}</CardTitle>
                      {notice.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          URGENT
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(notice.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="w-4 h-4" />
                        <Badge variant="secondary" className={getCategoryColor(notice.category)}>
                          {notice.category}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{notice.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{notice.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Submit New Notice</h2>
          <p className="text-gray-600 mb-4">
            Management committee members can upload new notices and circulars here.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Upload Notice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notices;
