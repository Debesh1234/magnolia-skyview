
import React from 'react';
import { DollarSign, TrendingUp, FileSpreadsheet, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Finance = () => {
  const budgetItems = [
    { category: "Security Services", allocated: 120000, spent: 118500, percentage: 98.75 },
    { category: "Maintenance & Repairs", allocated: 80000, spent: 75200, percentage: 94 },
    { category: "Utilities", allocated: 60000, spent: 58900, percentage: 98.17 },
    { category: "Landscaping", allocated: 40000, spent: 32000, percentage: 80 },
    { category: "Administrative", allocated: 30000, spent: 28500, percentage: 95 }
  ];

  const outstandingDues = [
    { flatNo: "A-101", amount: 15000, months: 3 },
    { flatNo: "B-205", amount: 8500, months: 2 },
    { flatNo: "C-310", amount: 22000, months: 4 },
    { flatNo: "A-408", amount: 12000, months: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Financial Transparency</h1>
          <p className="text-gray-600">Complete overview of society finances and budget utilization</p>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹3,30,000</div>
              <p className="text-xs text-muted-foreground">Annual Budget 2024</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilized</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹3,13,100</div>
              <p className="text-xs text-muted-foreground">94.9% of budget</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collections</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,85,000</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹57,500</div>
              <p className="text-xs text-muted-foreground">From 4 units</p>
            </CardContent>
          </Card>
        </div>

        {/* Budget Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Budget Utilization 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgetItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <span>₹{item.spent.toLocaleString()} / ₹{item.allocated.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        item.percentage > 95 ? 'bg-red-500' : 
                        item.percentage > 85 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500">{item.percentage.toFixed(1)}% utilized</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Outstanding Dues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Outstanding Dues</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {outstandingDues.map((due, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <div>
                      <span className="font-medium">{due.flatNo}</span>
                      <p className="text-sm text-gray-600">{due.months} months pending</p>
                    </div>
                    <Badge variant="destructive">₹{due.amount.toLocaleString()}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Financial Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-green-500" />
                <span>Financial Documents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Annual Budget 2024</span>
                    <p className="text-sm text-gray-600">Approved budget breakdown</p>
                  </div>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Audit Report 2023</span>
                    <p className="text-sm text-gray-600">Chartered accountant audit</p>
                  </div>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Monthly Statements</span>
                    <p className="text-sm text-gray-600">Income & expense details</p>
                  </div>
                  <Button size="sm" variant="outline">View Sheet</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Finance;
