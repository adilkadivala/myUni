import React from "react";

function SystemArchitecture() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold dark:text-zinc-700">System Architecture</h2>
      <p className="text-muted-foreground mb-4 dark:text-zinc-700">
        Technical overview of the MyUni platform architecture
      </p>

      <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        <div className="space-y-8">
          {/* Architecture Diagram */}
          <div className="border-2 p-4 rounded-lg overflow-x-auto">
            <h3 className="text-lg font-medium mb-4 text-center dark:text-zinc-700">
              MyUni Architecture
            </h3>

            {/* Client Layer */}
            <div className="mb-6">
              <div className="bg-blue-100 p-3 rounded-lg text-center font-medium mb-2 dark:text-zinc-700">
                Client Layer
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">Web App</div>
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">
                  student Dashboard
                </div>
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">
                  Admin Dashoard
                </div>
              </div>
            </div>

            {/* API Gateway */}
            <div className="mb-6">
              <div className="bg-purple-100 p-3 rounded-lg text-center font-medium mb-2 dark:text-zinc-700">
                API Gateway
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">
                  Authentication
                </div>
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">Routing</div>
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">
                  Load Balancing
                </div>
              </div>
            </div>

            {/* Microservices */}
            <div className="mb-6">
              <div className="bg-green-100 p-3 rounded-lg text-center font-medium mb-2 dark:text-zinc-700">
                Microservices
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="border rounded-md p-2 text-center text-sm dark:text-zinc-700">
                  User Service
                </div>
                <div className="border rounded-md p-2 text-center text-sm dark:text-zinc-700">
                  Content Management Service
                </div>
                <div className="border rounded-md p-2 text-center text-sm dark:text-zinc-700">
                  Academic Service
                </div>
                <div className="border rounded-md p-2 text-center text-sm dark:text-zinc-700">
                  Integration Service
                </div>
                <div className="border rounded-md p-2 text-center text-sm dark:text-zinc-700">
                  Notification Service
                </div>
              </div>
            </div>

            {/* Data Layer */}
            <div>
              <div className="bg-amber-100 p-3 rounded-lg text-center font-medium mb-2 dark:text-zinc-700">
                Data Layer
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">MySQL</div>
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">
                  Redis Cache
                </div>
                <div className="border rounded-md p-2 text-center dark:text-zinc-700">
                  File Storage
                </div>
              </div>
            </div>
          </div>

          {/* Key Components */}
          <div>
            <h3 className="text-lg font-medium mb-4 dark:text-zinc-700">Key Components</h3>

            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2 dark:text-zinc-700">Frontend Layer</h4>
                <ul className="list-disc pl-5 space-y-1 dark:text-zinc-700">
                  <li>next.js with TypeScript for component-based UI</li>
                  <li>Responsive design for multiple devices ex: dashboard, tab, Mobile</li>
                  <li>State management with React Context or Redux</li>
                  <li>Theme customization for university branding</li>
                </ul>
              </div>

              <div className="border rounded-md p-4 dark:text-zinc-700">
                <h4 className="font-medium mb-2">API Gateway</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Request routing to appropriate microservices</li>
                  <li>Authentication and authorization</li>
                  <li>Rate limiting and request throttling</li>
                  <li>Response caching for improved performance</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div className="border rounded-md p-4 dark:text-zinc-700">
                <h4 className="font-medium mb-2">Microservices</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>User Service: Authentication, profiles, permissions</li>
                  <li>Content Service: CMS, announcements, news</li>
                  <li>Academic Service: Schedules, grades, courses</li>
                  <li>
                    Integration Service: Data synchronization with university
                    systems
                  </li>
                  <li>
                    Notification Service: Alerts, emails, push notifications
                  </li>
                </ul>
              </div>

              <div className="border rounded-md p-4 dark:text-zinc-700">
                <h4 className="font-medium mb-2">Data Layer</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>MySQL for structured data storage</li>
                  <li>Redis for caching and session management</li>
                  <li>File storage for documents and media</li>
                  <li>NginX for load-balancing</li>
                  <li>Data replication and backup strategies</li>
                </ul>
              </div>

              <div className="border rounded-md p-4 dark:text-zinc-700">
                <h4 className="font-medium mb-2">Infrastructure</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Docker containers for service isolation</li>
                  <li>CI/CD pipeline for automated deployment</li>
                  <li>Monitoring and logging infrastructure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Flow */}
          <div>
            <h3 className="text-lg font-medium mb-4 dark:text-zinc-700">Data Flow</h3>

            <div className="border rounded-md p-4 dark:text-zinc-700">
              <ol className="list-decimal pl-5 space-y-2">
                <li>User requests are received by the frontend application</li>
                <li>
                  Requests are routed through the API Gateway for authentication
                  and routing
                </li>
                <li>
                  Appropriate microservices process the requests based on
                  functionality
                </li>
                <li>Data is retrieved from or written to the data layer</li>
                <li>
                  Responses are returned to the frontend through the API Gateway
                </li>
                <li>
                  Real-time updates are pushed to clients via WebSockets when
                  applicable
                </li>
                <li>
                  Integration Service periodically synchronizes with university
                  systems
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemArchitecture;
