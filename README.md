### MyUni: Analysis and Design Document

## 📋 Table of Contents

- [Introduction](#-introduction)
- [System Analysis](#-system-analysis)
- [Feasibility Study](#-feasibility-study)
- [Requirements Specification](#-requirements-specification)
- [User Stories](#-user-stories)
- [EPICS](#-epics)
- [System Backlog](#-system-backlog)
- [Architecture Design](#-architecture-design)
- [Wireframes](#-wireframes)
- [Implementation Plan](#-implementation-plan)
- [Conclusion](#-conclusion)


## 🚀 Introduction

### 1.1 Purpose

This document outlines the analysis and design for the MyUni project, which aims to create a unified, modular university application platform for Greek universities, building upon existing implementations like MyUoM and UniWA.

### 1.2 Scope

The MyUni project will develop a scalable backend architecture with CMS integration to provide real-time updates from official university sources, enabling customization for different institutions while maintaining a standardized framework.

### 1.3 Background

There is a University App called MyUoM for Greek universities ([https://my.uom.gr/](https://my.uom.gr/)) with a similar effort at the University of West Attica ([https://iam.uniwa.gr/](https://iam.uniwa.gr/)). While these apps serve as centralized platforms, they lack essential features such as robust login systems, scalable backend architectures, and real-time updates from official sources. Additionally, they don't support a unified framework for easy integration by other universities.

## 🔍 System Analysis

### 2.1 Current System Limitations

| Limitation | Description | Impact
|-----|-----|-----
| 🔒 Inadequate Authentication | Lacks robust login mechanisms | Security vulnerabilities and limited user management
| 📈 Limited Scalability | Architecture not designed for growth | Performance issues with increasing users
| 🔄 Manual Updates | No real-time data synchronization | Outdated information and administrative burden
| 🧩 Fragmented Implementation | Separate systems for each university | Duplicated development efforts and inconsistent experiences
| 🔧 Limited Customization | Rigid structure difficult to adapt | Cannot meet specific university requirements
| 🔌 Poor Integration | Minimal connection to university systems | Manual data entry and synchronization issues


### 2.2 Stakeholder Analysis

| Stakeholder | Needs | Expectations
|-----|-----|-----
| 👨‍🎓 Students | Access to academic information, schedules, announcements | User-friendly interface, real-time updates, personalized content
| 👩‍🏫 Faculty | Course management, student communication | Administrative tools, content management capabilities
| 👨‍💼 University Administrators | Platform customization, content management | Intuitive admin panel, branding options, analytics
| 👩‍💻 IT Departments | System maintenance, integration | Well-documented code, scalable architecture, security features
| 🏛️ Other Universities | Platform adoption and customization | Modular design, easy implementation, customization options


## 📊 Feasibility Study

### 3.1 Technical Feasibility

The project is technically feasible using the specified technologies:

- **Frontend**: React.js, TypeScript
- **Backend**: Express.js, MySQL
- **Optional**: Next.js for enhanced capabilities


These technologies are well-established with robust communities and documentation. The TypeScript rewrite will enhance maintainability and scalability.

### 3.2 Operational Feasibility

The system will integrate with existing university data sources through standardized APIs. The modular architecture allows for:

- Phased implementation
- Customization flexibility
- Scalability for growing user bases
- Centralized updates with distributed customization


### 3.3 Economic Feasibility

As an open-source project, MyUni offers economic advantages:

- Shared development costs across universities
- Elimination of licensing fees
- Reduced maintenance burden through collaboration
- Resource optimization through standardization


### 3.4 Schedule Feasibility

The project can be completed within the GSoC timeframe of 350 hours over 12-14 weeks, with an average of 25-30 hours per week.

## 📝 Requirements Specification

### 4.1 Functional Requirements

#### Authentication and User Management

- FR1.1: The system shall authenticate users against university identity providers
- FR1.2: The system shall support role-based access control
- FR1.3: The system shall allow users to manage their profiles
- FR1.4: The system shall provide secure password reset functionality


#### Content Management

- FR2.1: The system shall provide tools for content creation and editing
- FR2.2: The system shall support various content types (text, images, files)
- FR2.3: The system shall allow scheduling of content publication
- FR2.4: The system shall maintain version history of content


#### Data Integration

- FR3.1: The system shall connect to university data sources via APIs
- FR3.2: The system shall synchronize data in real-time or at scheduled intervals
- FR3.3: The system shall transform external data to match internal schema
- FR3.4: The system shall log synchronization activities


#### Customization

- FR4.1: The system shall allow branding customization (logos, colors, fonts)
- FR4.2: The system shall support custom homepage layouts with widgets
- FR4.3: The system shall enable feature toggling for different universities
- FR4.4: The system shall permit custom CSS and theming


### 4.2 Non-Functional Requirements

#### Performance

- NFR1.1: The system shall load pages within 2 seconds under normal conditions
- NFR1.2: The system shall support at least 10,000 concurrent users
- NFR1.3: The system shall handle peak loads during registration periods


#### Security

- NFR2.1: The system shall encrypt all sensitive data in transit and at rest
- NFR2.2: The system shall implement OWASP security best practices
- NFR2.3: The system shall undergo regular security audits
- NFR2.4: The system shall comply with GDPR requirements


#### Scalability

- NFR3.1: The system shall scale horizontally to accommodate growing user bases
- NFR3.2: The system shall support multiple university instances
- NFR3.3: The system shall handle increasing data volumes efficiently


#### Maintainability

- NFR4.1: The system shall be well-documented
- NFR4.2: The system shall follow clean code principles
- NFR4.3: The system shall implement automated testing
- NFR4.4: The system shall use containerization for deployment


## 👥 User Stories

### 5.1 Student User Stories

| ID  | User Story | Acceptance Criteria | Priority |
|-----|-----------|---------------------|----------|
| S1  | As a student, I want to view my class schedule so that I can plan my day. | - Schedule displays all enrolled courses <br> - Shows time, location, and instructor <br> - Allows filtering by day/week | High |
| S2  | As a student, I want to receive real-time announcements so that I stay informed about important events. | - Notifications appear for new announcements <br> - Announcements are categorized by type <br> - Can mark announcements as read | High |
| S3  | As a student, I want to access my academic records so that I can track my progress. | - Shows current GPA and credits <br> - Lists all courses with grades <br> - Displays degree requirements progress | High |
| S4  | As a student, I want to customize my homepage so that I can prioritize relevant information. | - Can add/remove/rearrange widgets <br> - Settings persist between sessions <br> - Provides default layout for new users | Medium |

### 5.2 Faculty User Stories

| ID  | User Story | Acceptance Criteria | Priority |
|-----|-----------|---------------------|----------|
| F1  | As a faculty member, I want to post announcements so that I can communicate with my students. | - Can create, edit, and delete announcements <br> - Can target specific courses or departments <br> - Can schedule future publication | High |
| F2  | As a faculty member, I want to view my teaching schedule so that I can prepare for classes. | - Shows all assigned courses <br> - Displays classroom locations and times <br> - Indicates number of enrolled students | High |
| F3  | As a faculty member, I want to access student information so that I can track attendance and performance. | - Lists students enrolled in each course <br> - Shows student contact information <br> - Displays academic standing | Medium |

### 5.3 Administrator User Stories

| ID  | User Story | Acceptance Criteria | Priority |
|-----|-----------|---------------------|----------|
| A1  | As an administrator, I want to customize the university's app interface so that it aligns with our branding. | - Can upload university logo <br> - Can set primary and secondary colors <br> - Can customize homepage layout | High |
| A2  | As an administrator, I want to manage user permissions so that appropriate access is granted. | - Can create and modify user roles <br> - Can assign roles to users <br> - Can define granular permissions | High |
| A3  | As an administrator, I want to configure data integration points so that information is accurate and up-to-date. | - Can set up API connections <br> - Can schedule synchronization intervals <br> - Can map external data to system fields | High |



## 📚 EPICS

### EPIC 1: Authentication and User Management

- 🔐 Implement secure login system
- 👤 Create user profile management
- 🔑 Establish role-based access control
- 🛡️ Develop multi-factor authentication


### EPIC 2: Personalized User Experience

- 🏠 Design customizable homepage
- 📱 Implement personalized content delivery
- 🔔 Create notification system
- ⚙️ Develop user preference settings


### EPIC 3: Content Management System

- 📝 Build admin CMS interface
- 📄 Develop content creation and editing tools
- 🏷️ Implement content categorization and tagging
- ✅ Create approval workflows


### EPIC 4: Data Integration and Synchronization

- 🔄 Establish connections to university data sources
- ⚡ Implement real-time data fetching
- 🔄 Develop data processing and storage
- 📊 Create synchronization monitoring


### EPIC 5: Multi-University Framework

- 🏛️ Design multi-domain architecture
- 🎨 Implement university-specific customization
- 🚀 Develop onboarding process
- 📚 Create documentation for adoption


## 📋 System Backlog

### High Priority

1. TypeScript rewrite of existing codebase
2. Authentication system implementation
3. Core backend architecture development
4. Basic CMS functionality
5. Data integration framework


### Medium Priority

1. Personalized homepage implementation
2. Admin panel for customization
3. Student portal development
4. Multi-domain support
5. Notification system


### Low Priority

1. Advanced analytics
2. Mobile app optimization
3. Integration with additional university services
4. Advanced customization options
5. Community contribution framework


## 🏗️ Architecture Design

### 8.1 System Architecture

The MyUni platform will follow a microservices architecture with the following components:

1. **Frontend Layer**

1. React.js with TypeScript
2. Responsive design for multiple devices
3. Component-based structure for reusability



2. **API Gateway**

1. Request routing and load balancing
2. Authentication and authorization
3. Rate limiting and caching



3. **Microservices**

1. User Service (authentication, profiles)
2. Content Service (CMS, announcements)
3. Academic Service (schedules, records)
4. Integration Service (data synchronization)
5. Notification Service



4. **Data Layer**

1. MySQL for structured data
2. Redis for caching
3. File storage for documents and media



5. **Infrastructure**

1. Docker containers
2. CI/CD pipeline
3. Monitoring and logging





### 8.2 Data Flow

1. User requests are received by the frontend
2. Requests are routed through the API gateway
3. Appropriate microservices process the requests
4. Data is retrieved from or written to the data layer
5. Responses are returned to the frontend
6. Real-time updates are pushed via WebSockets


### 8.3 Database Schema

The database schema will include the following key entities:

- **Users**: Authentication and profile information
- **Roles**: Permission definitions
- **Universities**: Institution-specific configurations
- **Content**: CMS-managed information
- **Courses**: Academic course details
- **Schedules**: Class and event timing
- **Announcements**: University and course notifications
- **UserPreferences**: Personalization settings


## 🎨 Wireframes

### 9.1 Student Dashboard

```plaintext
+-------------------------------------------------------+
|  LOGO  MyUni                          Profile | Logout|
+-------------------------------------------------------+
|        |                                               |
| Home   |  Welcome back, Maria!                         |
| Schedule|                                              |
| Courses|  +----------------+  +-------------------+    |
| Grades |  | TODAY'S CLASSES|  | ANNOUNCEMENTS    |    |
| Portal |  | Database 9-11  |  | Registration     |    |
| Messages|  | Algorithms 1-3|  | Library Hours    |    |
| Settings|  +----------------+  +-------------------+    |
|        |                                               |
|        |  +----------------+  +-------------------+    |
|        |  | DEADLINES      |  | RECENT GRADES     |    |
|        |  | DB Project     |  | Web Dev: 8.5/10   |    |
|        |  | Algorithms HW  |  | Networks: 7.5/10  |    |
|        |  +----------------+  +-------------------+    |
|        |                                               |
|        |  +----------------+  +-------------------+    |
|        |  | CAMPUS MAP     |  | QUICK LINKS       |    |
|        |  |                |  | Library           |    |
|        |  |                |  | Academic Calendar |    |
|        |  +----------------+  +-------------------+    |
|        |                                               |
+-------------------------------------------------------+
```

The Student Dashboard features:

- University branding in the header
- Sidebar navigation with quick access to key features
- Personalized welcome message
- Grid layout with customizable widgets:

- Today's Classes widget showing schedule
- Announcements widget with recent updates
- Upcoming Deadlines widget for assignments
- Quick Links widget for frequently used resources
- Campus Map widget for navigation
- Recent Grades widget showing latest assessments





### 9.2 Student Portal

```plaintext
+-------------------------------------------------------+
|  LOGO  MyUni                          Profile | Logout|
+-------------------------------------------------------+
|        |                                               |
| Home   |  ACADEMIC RECORDS                             |
| Schedule|                                              |
| Courses|  +----------------+  +----------------+  +----------------+
| Grades |  | CURRENT GPA    |  | CREDITS        |  | SEMESTER      |
| Portal |  | 8.2/10         |  | 120/240        |  | 5th           |
| Messages|  +----------------+  +----------------+  +----------------+
| Settings|                                              |
|        |  COURSE HISTORY                               |
|        |  +------------------------------------------------+
|        |  | COURSE               | SEMESTER | CREDITS | GRADE |
|        |  +------------------------------------------------+
|        |  | Intro to Programming | 1st      | 6       | 9.0   |
|        |  | Data Structures      | 2nd      | 6       | 8.5   |
|        |  | Computer Architecture| 2nd      | 6       | 7.0   |
|        |  | Algorithms           | 3rd      | 6       | 8.0   |
|        |  | Database Systems     | 4th      | 6       | 8.5   |
|        |  +------------------------------------------------+
|        |                                               |
|        |  CURRENT COURSES                              |
|        |  +----------------+  +----------------+       |
|        |  | Web Development|  | Software Eng   |       |
|        |  | Prof. Dimitriou|  | Prof. Papadop. |       |
|        |  | Progress: 60%  |  | Progress: 45%  |       |
|        |  +----------------+  +----------------+       |
+-------------------------------------------------------+
```

The Student Portal provides:

- Academic summary section with GPA, credits, and semester info
- Course history table with all past courses and grades
- Current courses section with progress indicators
- Registration status and upcoming registration periods
- Transcript download option
- Personal information management section


### 9.3 Admin Panel

```plaintext
+-------------------------------------------------------+
|  LOGO  MyUni Admin                      Profile | Logout|
+-------------------------------------------------------+
|           |                                            |
| Dashboard |  UNIVERSITY CUSTOMIZATION                  |
| Customization|                                         |
| Content   |  BRANDING                                  |
| Users     |  +----------------+  +----------------+    |
| Settings  |  | University Name|  | University Logo|    |
|           |  | [UoM_________] |  | [Upload Logo  ]|    |
|           |  +----------------+  +----------------+    |
|           |                                            |
|           |  +----------------+  +----------------+    |
|           |  | Primary Color  |  | Secondary Color|    |
|           |  | [#0f172a______]|  | [#64748b______]|    |
|           |  +----------------+  +----------------+    |
|           |                                            |
|           |  HOMEPAGE LAYOUT                           |
|           |  +------------------------------------------------+
|           |  |                                                |
|           |  |  [Announcements]  [Schedule]  [Quick Links]    |
|           |  |                                                |
|           |  |  [Drag & Drop Widgets to Customize Layout]     |
|           |  |                                                |
|           |  +------------------------------------------------+
|           |                                            |
|           |  FEATURE TOGGLES                           |
|           |  +------------------------------------------------+
|           |  | Student Portal     [ON]                        |
|           |  | Library Integration [ON]                       |
|           |  | Campus Map         [OFF]                       |
|           |  +------------------------------------------------+
|           |                                            |
+-------------------------------------------------------+
```

The Admin Panel includes:

- University branding configuration section

- Logo upload
- Color scheme selection
- Typography settings



- Homepage layout builder with drag-and-drop widgets
- Feature toggle controls for enabling/disabling functionality
- User management interface for roles and permissions
- System settings for integration configuration
- Analytics dashboard for usage statistics


### 9.4 CMS Interface

```plaintext
+-------------------------------------------------------+
|  LOGO  MyUni CMS                        Profile | Logout|
+-------------------------------------------------------+
|           |                                            |
| Dashboard |  ANNOUNCEMENTS                             |
| Announcements|                                         |
| Events    |  [+ New Announcement]      [Search_____]   |
| News      |                                            |
| Media     |  +------------------------------------------------+
| Settings  |  | TITLE                | CATEGORY | DATE  | ACTIONS |
|           |  +------------------------------------------------+
|           |  | Registration Deadline| Academic | 09/15 | Edit/Del|
|           |  | Library Hours        | Facility | 09/10 | Edit/Del|
|           |  | Guest Lecture: AI    | Events   | 09/05 | Edit/Del|
|           |  | Campus Maintenance   | Maint.   | 09/01 | Edit/Del|
|           |  +------------------------------------------------+
|           |                                            |
|           |  CREATE/EDIT ANNOUNCEMENT                  |
|           |  +------------------------------------------------+
|           |  | Title: [_________________________________]      |
|           |  |                                                 |
|           |  | Category: [Academic_____▼]                      |
|           |  |                                                 |
|           |  | Content:                                        |
|           |  | [WYSIWYG Editor                               ]|
|           |  | [                                             ]|
|           |  | [                                             ]|
|           |  |                                                 |
|           |  | Schedule: [Publish Now▼]  [Save] [Preview]     |
|           |  +------------------------------------------------+
|           |                                            |
+-------------------------------------------------------+
```

The CMS Interface provides:

- Content creation with WYSIWYG editor
- Content categorization and tagging system
- Publishing workflow with draft, review, and publish states
- Content scheduling for timed publication
- Media library for image and file management
- Search and filtering capabilities for content management


## ⏱️ Implementation Plan (350 Hours)

### Community Bonding Period (2 weeks, 30 hours)

- 🤝 Meet with mentors and community (5 hours)
- 📚 Study existing codebase and documentation (15 hours)
- 💻 Set up development environment (5 hours)
- 📋 Refine project plan and requirements (5 hours)


### Coding Period 1 (4 weeks, 120 hours)

#### Week 1-2: Core Infrastructure (60 hours)

- ⚙️ TypeScript project setup and configuration (10 hours)
- 🔄 Begin TypeScript rewrite of existing codebase (30 hours)
- 🗄️ Design database schema (10 hours)
- 🔄 Set up CI/CD pipeline (10 hours)


#### Week 3-4: Authentication and User Management (60 hours)

- 🔐 Implement authentication service (20 hours)
- 👤 Develop user profile management (15 hours)
- 🔑 Create role-based access control (15 hours)
- 🖥️ Build login and registration interfaces (10 hours)


### First Evaluation (1 week)

### Coding Period 2 (4 weeks, 120 hours)

#### Week 5-6: Backend Services (60 hours)

- 📝 Develop Content Service for CMS (20 hours)
- 🎓 Implement Academic Service for student data (20 hours)
- 🔌 Create Integration Service for external data sources (20 hours)


#### Week 7-8: Frontend Development (60 hours)

- 🧩 Build responsive UI component library (15 hours)
- 🏠 Implement Student Dashboard (15 hours)
- 📊 Develop Student Portal (15 hours)
- ⚙️ Create Admin Panel basics (15 hours)


### Second Evaluation (1 week)

### Coding Period 3 (3 weeks, 80 hours)

#### Week 9-10: CMS and Customization (50 hours)

- 📄 Complete CMS interface (20 hours)
- 🎨 Implement university customization features (15 hours)
- 🏛️ Develop multi-domain support (15 hours)


#### Week 11: Testing and Refinement (30 hours)

- 🧪 Write unit and integration tests (15 hours)
- 🔒 Perform security audit (5 hours)
- ⚡ Optimize performance (10 hours)


### Final Week: Documentation and Submission (1 week, 30 hours)

- 📚 Create user and administrator documentation (10 hours)
- 🐳 Prepare Docker deployment configuration (5 hours)
- 💬 Finalize code comments and API documentation (10 hours)
- 🏁 Prepare final submission and presentation (5 hours)


## 🎯 Conclusion

The MyUni project addresses the limitations of existing university applications by creating a unified, modular platform that can be easily adopted and customized by Greek universities. By implementing a modern, scalable architecture with real-time data integration and comprehensive content management, the platform will provide a seamless experience for students, faculty, and administrators.

This analysis and design document outlines the system requirements, architecture, and implementation plan, with wireframes illustrating the key interfaces. The modular design ensures that the platform can evolve over time, incorporating new features and integrations as needed. By standardizing the core functionality while enabling customization, MyUni will reduce development costs, improve user experience, and foster collaboration across Greek universities.
