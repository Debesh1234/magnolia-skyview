
import React, { useState } from 'react';
import { MessageSquare, Send, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Grievance {
  id: number;
  subject: string;
  category: string;
  status: string;
  date: string;
  flatNo: string;
  priority: string;
  name: string;
  description: string;
}

const Grievances = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    flatNo: '',
    phone: '',
    email: '',
    category: '',
    priority: '',
    subject: '',
    description: ''
  });

  const [grievances, setGrievances] = useState<Grievance[]>([
    {
      id: 1,
      subject: "Water pressure issue in Block A",
      category: "Maintenance",
      status: "Resolved",
      date: "2024-03-08",
      flatNo: "A-301",
      priority: "Medium",
      name: "John Doe",
      description: "Low water pressure in apartment"
    },
    {
      id: 2,
      subject: "Noise complaint against neighbor",
      category: "Noise",
      status: "In Progress",
      date: "2024-03-10",
      flatNo: "B-205",
      priority: "High",
      name: "Jane Smith",
      description: "Loud music during night hours"
    },
    {
      id: 3,
      subject: "Parking space occupied illegally",
      category: "Parking",
      status: "Under Review",
      date: "2024-03-12",
      flatNo: "C-102",
      priority: "Low",
      name: "Mike Johnson",
      description: "Unauthorized vehicle in my parking slot"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newGrievance: Grievance = {
      id: Date.now(),
      subject: formData.subject,
      category: formData.category,
      status: "Under Review",
      date: new Date().toISOString().split('T')[0],
      flatNo: formData.flatNo,
      priority: formData.priority,
      name: formData.name,
      description: formData.description
    };

    setGrievances(prev => [newGrievance, ...prev]);
    
    toast({
      title: "Grievance Submitted",
      description: `Your complaint (ID: ${newGrievance.id}) has been registered successfully. You will receive updates via email.`,
    });
    
    setFormData({
      name: '',
      flatNo: '',
      phone: '',
      email: '',
      category: '',
      priority: '',
      subject: '',
      description: ''
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'In Progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Under Review':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <MessageSquare className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Grievance Portal</h1>
          <p className="text-gray-600">Submit your complaints and track their resolution status</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Grievance Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Submit New Grievance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Flat Number *</label>
                    <Input
                      value={formData.flatNo}
                      onChange={(e) => setFormData({...formData, flatNo: e.target.value})}
                      required
                      placeholder="e.g., A-101"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category *</label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="noise">Noise Complaint</SelectItem>
                        <SelectItem value="parking">Parking Issues</SelectItem>
                        <SelectItem value="utilities">Utilities</SelectItem>
                        <SelectItem value="cleanliness">Cleanliness</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Priority *</label>
                    <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    placeholder="Brief subject of your complaint"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                    placeholder="Detailed description of your grievance..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Grievance
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Grievances */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Grievances ({grievances.length})</span>
                  <span className="text-sm font-normal text-gray-500">Track Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {grievances.map((grievance) => (
                    <div key={grievance.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm pr-2">{grievance.subject}</h4>
                        <Badge className={getStatusColor(grievance.status)}>
                          {getStatusIcon(grievance.status)}
                          <span className="ml-1">{grievance.status}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getPriorityColor(grievance.priority)}>
                            {grievance.priority}
                          </Badge>
                          <span className="text-xs text-gray-500">ID: {grievance.id}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{grievance.category} • {grievance.flatNo}</span>
                        <span>{new Date(grievance.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2">{grievance.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grievance Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p>All grievances will be acknowledged within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p>Resolution timeline depends on the nature and priority of the issue</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p>You will receive updates via email and SMS</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p>For urgent matters, please call the society office directly</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p>Track your grievance using the unique ID provided</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grievances;
